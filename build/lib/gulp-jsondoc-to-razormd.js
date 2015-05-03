'use strict';

var Transform = require('stream').Transform,
    gutil = require('gulp-util'),
    path =require('path'),
    fs = require('fs'),
    razor = require("lime-razor");

var PLUGIN_NAME = "gulp-jsondoc-to-razormd";

module.exports = function(viewName) {
 
 	if (!viewName) {
    	throw new gutil.PluginError(PLUGIN_NAME, 'Missing fileName option');
    }
  
    var stream = new Transform({
        objectMode: true
    });

   var template = fs.readFileSync(path.join(process.cwd(), viewName)).toString('utf-8');

   stream._transform = function(file, unused, done) {
		if (file.isStream()) {
		    return done(new gutil.PluginError(PLUGIN_NAME, "Streaming not supported"));
		}

		var that = this;

		if (file.isBuffer()) {

			try {
				  var model = 
	               {
	               	db : JSON.parse(String(file.contents)),
	               	require : require
	               };

				Object.getOwnPropertyNames(model.db).forEach(function(mainItemKey){

	                model.item = model.db[mainItemKey];
	                var filename = path.join(file.base, mainItemKey.replace(/\./g, "/") + ".md");

	                var docFile = new gutil.File({
			          cwd: file.cwd,
			          base: file.base,
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

                return done();
		     } catch (err) {
             console.log(err);
		        return done(new gutil.PluginError(PLUGIN_NAME, err));
		    }

		} else {
		    // When null just pass through
		    done(null, file);
		}
		};
    
    return stream;
};