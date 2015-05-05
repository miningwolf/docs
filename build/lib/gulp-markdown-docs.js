'use strict';

var Transform = require('stream').Transform,
    gutil = require('gulp-util'),
    path =require('path');
var gutil = require('gulp-util');
var _ = require('lodash');
var through = require('through');
var path = require('path');
var cheerio = require('cheerio');
var marked = require('marked');
var PluginError = gutil.PluginError;
var fs = require('fs');
var File = gutil.File;
var highlight = require('highlight.js');
var url = require('url');
var razor = require('lime-razor');

var PLUGIN_NAME = "gulp-markdown-docs";

module.exports = function(opt) {

 	if (!opt) opt = {};

    var renderer = new marked.Renderer();

	renderer.link = function(href, title, text) {
		var link = url.parse(href), result;
		result = '<a href="' + href.replace(".md", ".html") + '"';
		if (title) { result += ' title="' + title + '"'; }
		if (link.protocol) {result += ' target="_blank" rel="nofollow"';}
		result += '>' + text + '</a>';
		return result;
	};

	var DEFAULTS = {
		stylesheetUrl: '',
		layoutStylesheetUrl: process.cwd() + '/build/views/html/docs.css',
		templatePath: process.cwd() + '/build/views/html',
		highlightTheme: 'solarized_dark', // see /node_modules/highlight.js/styles
		markdown: {
			highlight: function (code) {
		    return highlight.highlightAuto(code).value;
		  },
		  renderer: renderer,
		  gfm: true,
		  tables: true,
		  breaks: false,
		  pedantic: false,
		  sanitize: false,
		  smartLists: true,
		  smartypants: false
		}
	}	
	// merge defaults and passed options 
	var options = _.extend({}, DEFAULTS, opt);
	var markdownOptions = options.markdown = _.extend({}, DEFAULTS.markdown, opt.markdown);

	// apply options for markdown parsing
	marked.setOptions(markdownOptions);

	function parseMarkdown(filename, contents) {
		renderer.current = filename;
		return marked(contents);
	}

	function sortDocs(docs) {

		// first group the docs according to panel and category
		var panels = {};

		docs.forEach(function (doc) {
				var meta = doc.meta;

				panels[meta.panelSort] = panels[meta.panelSort] || { categories: {} };
				var panel = panels[meta.panelSort];
				panel.panelLabel = (!!meta.panelLabel) ? meta.panelLabel : panel.panelLabel;
				panel.panelSlug = (!!meta.panelSlug) ? meta.panelSlug : panel.panelSlug;

				panel.categories[meta.categorySort] = panel.categories[meta.categorySort] || { items: {} };
				var category = panel.categories[meta.categorySort]
				category.categoryLabel = (!!meta.categoryLabel) ? meta.categoryLabel : category.categoryLabel;
				category.categorySlug = (!!meta.categorySlug) ? meta.categorySlug : category.categorySlug;
				
				category.items[meta.namespace + " " + meta.name] = doc;
			});
			
		
		var results = {};

		Object.getOwnPropertyNames(panels).sort().forEach(function(panelKey){

			var categories = {};

			Object.getOwnPropertyNames(panels[panelKey].categories).sort().forEach(function(categoryKey){

				var items = {};

				Object.getOwnPropertyNames(panels[panelKey].categories[categoryKey].items).sort().forEach(function(itemKey){
					var item = panels[panelKey].categories[categoryKey].items[itemKey];
					items[itemKey] = item;
				});

				categories[categoryKey] = {
					"categoryLabel" : panels[panelKey].categories[categoryKey].categoryLabel,
					"categorySlug" : panels[panelKey].categories[categoryKey].categorySlug,
					"items": items
				}
			
			});

			results[panelKey] = {
				   "panelLabel" : panels[panelKey].panelLabel,
					"panelSlug" : panels[panelKey].panelSlug,
					"categories": categories
			}

		});

		return results;

	}
	
    var stream = new Transform({
        objectMode: true
    });

    var firstFile = null;
    var collectedDocs = [];

    stream._transform = function(file, unused, done) {
      	if (!firstFile) {
      		firstFile = file;
    	}

        if (file.isStream()) {
            return done(new gutil.PluginError(PLUGIN_NAME, "Streaming not supported"));
        }

        if (file.isBuffer()) {

            try {
            	var p = path.parse(path.relative(path.join(process.cwd(), "docs"), file.path));
		
				var namespace = (p.dir).replace(/\//g, ".").replace(/\\/g, ".") || 'docs';
				var name = p.name;
					  
				var url = p.dir + "/" + p.base.replace('.md','.html');
				var qualifiedname = namespace + "." + name;
				var filename = file.path.replace('.md','.html')
				var panel, panelSort, panelLabel;
				
		   		if (namespace.substr(0,8) === 'wolfbuk.')
 	     		{
		  			panel = 'WolfBuk';
 	     			panelLabel = 'WolfBuk API';
 	     			panelSort = "500WolfBuk";
 	     		}
				else if (namespace.substr(0,11) === 'wolfcanary.')
 	     		{
		  			panel = 'WolfCanary';
 	     			panelLabel = 'WolfCanary API';
 	     			panelSort = "550WolfCanary";
 	     		}
 	     		else if (namespace.substr(0,8) === 'wolfnode')
 	     		{
 	     			panel = 'WolfNode';
 	     			panelLabel = panel;
 	     			panelSort = "900WolfNode";
 	     		}
 	     		else 
 	     		{
 	     			panel = 'Docs';	
 	     			panelLabel = panel;
 	     			panelSort = "0Docs";
 	     		}
 	     		var ignore = false;
 	     		var catSort = namespace;
 	     		var catSlug = namespace;
 	     		var catLabel = namespace.replace(/[^.]+\.io.wolfscript./g,''); 
				catLabel = catLabel.replace(/\.io.wolfscript/g,' API'); 
				
				if (namespace.substr(0,8) === 'wolfnode')
 	     		{
 	     			switch(name) {
						case '_toc':
						case 'addons':
						case 'all':
						case 'index':
						case 'documentation':
					        ignore = true;
					        break;
					    case 'globals':
					    case 'modules':
					    case 'synopsis': 
					        catSort = '0' + namespace;
					        catLabel = 'WolfNode';
					        catSlug = 'node.summary';
					        break;
					     case 'buffer':
					     case 'console':
					     case 'crypto':
					     case 'dgram':
					     case 'dns':
					     case 'events':
					     case 'fs':
					     case 'http':
					     case 'https':
					     case 'net':
					     case 'path':
					     case 'process':
					     case 'querystring':
					     case 'stream':
					     case 'timers':
					     case 'tls':
					     case 'url':
					     case 'util':
					        catSort = '100' + namespace;
					        catLabel = 'Core';
					        catSlug = 'node.core';
					        break;
					     case 'assert':
					     case 'child_process':
					     case 'cluster':
					     case 'debugger':
					     case 'domain':
					     case 'os':
					     case 'punycode':
					     case 'readline':
					     case 'repl':
					     case 'smalloc':
					     case 'string_decoder':
					     case 'tty':
					     case 'vm': 
					     case 'zlib':
					        catSort = '900' + namespace;
					        catLabel = 'Other';
					        catSlug = 'node.Other';
					        break;
				
					    default:
					        catSort = '990' + namespace;
					           catLabel = 'Unknown';
					        catSlug = 'node.unknown';
					        break
						}
		   		}

 	     		if (qualifiedname === 'docs.index')
 	     			name = ' ';

 	     		if (!ignore)
 	       	    collectedDocs.push({
					meta: { path: filename,
							name: name,
						    qualifiedname: qualifiedname,
						    namespace: namespace,
						    url: url,
						    template: 'default.js.html',
						    categorySlug: catSlug,
						    categorySort: catSort.toLowerCase(),
						    categoryLabel: catLabel,
						    panelSlug: panel.toLowerCase(),
						    panelSort: panelSort.toLowerCase(),
						    panelLabel: panelLabel
						},
					html: parseMarkdown(filename, file.contents.toString())
				});

		        done ();

             } catch (err) {
                return done(new gutil.PluginError(PLUGIN_NAME, err));
            }

        } else {
            // When null just pass through
            done(null, file);
        }
    };

    stream._flush = function(done) {

        var that = this;

        if (firstFile) {
        	var sortedDocs = sortDocs(collectedDocs);

    	    var model = 
               {
               	panels : sortedDocs,
               	require : require,
               	resource: function(resourcepath) {
               	  		return path.join(this.relativeroot, 'assets', resourcepath);
               	},
               	link: function(fullname) {
               	  		return path.join(this.relativeroot, fullname.replace(/\./g, "/").replace('docs/','') + ".html");
               	}
               };

			Object.getOwnPropertyNames(model.panels).forEach(function(panelKey){

				model.currentPanel = model.panels[panelKey];

				Object.getOwnPropertyNames(model.currentPanel.categories).forEach(function(categoryKey){
					
					model.currentCategory = model.currentPanel.categories[categoryKey];
				
					Object.getOwnPropertyNames(model.currentCategory.items).forEach(function(itemKey){
						model.item = model.currentCategory.items[itemKey];
						model.relativeroot = path.relative(path.parse(model.item.meta.path).dir, path.join(process.cwd() ,"docs"));

			            var filename = model.item.meta.path;

		                var template = fs.readFileSync(path.join(options.templatePath, model.item.meta.template)).toString('utf-8');

		                 var docFile = new gutil.File({
				          cwd: firstFile.cwd,
				          base: firstFile.base,
				          path: filename,
				        });
	
						razor.render(filename, template, model, process.cwd(), 
		                		function(err, result) {
				                if (err) {
				                    return done(new gutil.PluginError(PLUGIN_NAME, err));
				                }
				                docFile.contents = new Buffer(result);
				                that.push(docFile);
				            });
					});
				});
			 });
			
		 	done();
    	}
    }
    
    return stream;
};
