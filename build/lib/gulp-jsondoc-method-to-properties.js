'use strict';

var Transform = require('stream').Transform,
    gutil = require('gulp-util'),
    path =require('path');

var PLUGIN_NAME = "gulp-jsondoc-method-to-properties";

module.exports = function() {

    var stream = new Transform({
        objectMode: true
    });

   stream._transform = function(file, unused, done) {
		if (file.isStream()) {
		    return done(new gutil.PluginError(PLUGIN_NAME, "Streaming not supported"));
		}

		if (file.isBuffer()) {

			try {
			    var result = jsonParser(JSON.parse(String(file.contents)));
                file.contents = new Buffer(JSON.stringify(result));
                return done(null, file);
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

var nsRegexp = new RegExp(/([.\w]+)\.(\w+)/);
var linkRegexp = new RegExp(/\{@link\s+([^\}]+)\s*\}/g);

function jsonParser(model) {
    var result = {};

    Object.getOwnPropertyNames(model).sort().forEach(function(itemKey) {
        var mainItem = model[itemKey];
        mainItem.properties = [];

        var methods = mainItem.methods;
        var props = {};
        mainItem.methods = [];
        if (methods.length > 0) {
            methods.sort(function(a,b){return (a.name > b.name)}).forEach(function(i) {
                if (i.name.substr(0, 3) === 'get'  && i.args.length === 0) {
                    var prop = {};
                    prop.name = i.name.substr(3);
                    prop.modifier = 'readonly';
                    Object.getOwnPropertyNames(i).sort().forEach(function(propKey) {
                        if (propKey === 'name') {} else if (propKey === 'title' || propKey === 'description')
                            if (i[propKey] === (i.name + " method"))
                                prop[propKey] = prop.name + " property"
                            else
                                prop[propKey] = "Get: " + i[propKey];
                        else
                            prop[propKey] = i[propKey];
                        });

                        mainItem.properties.push(prop);
                        props[prop.name] = prop;
                } else if (i.name.substr(0, 3) === 'set' && i.args.length === 1) {
                    var name = i.name.substr(3);
                    var prop = props[name] || {};
                    prop.name = name;
                    if (prop.modifier === 'readonly')
                        prop.modifier = undefined
                    else {
                        prop.modifier = 'writeonly';
                        mainItem.properties.push(prop);
                        props[prop.name] = prop;
                             }
                    Object.getOwnPropertyNames(i).sort().forEach(function(propKey) {
                        if (propKey === 'name') {} else if (propKey === 'title' || propKey === 'description') {
                            if (i[propKey] === (i.name + " method"))
                                prop[propKey] = prop.name + " property"
                            else
                                prop[propKey] = prop[propKey] ? prop[propKey] + "<br>Set: " + i[propKey] : "Set: " + i[propKey];
                        } else if (propKey === "return" && prop[propKey])
                        {}
                            else
                            prop[propKey] = i[propKey];
                    });
                } else
                    mainItem.methods.push(i);

            }); //methods
                
    }
         result[itemKey] = mainItem;
    });
    return result;
}