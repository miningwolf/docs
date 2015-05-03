'use strict';

var Transform = require('stream').Transform,
    gutil = require('gulp-util'),
    path =require('path');

var PLUGIN_NAME = "gulp-jsondoc-inventory-namespaces";

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

function jsonParser(model) {
    var result = {};

    Object.getOwnPropertyNames(model).sort().forEach(function(itemKey) {
        var mainItem = model[itemKey];
         
        if (mainItem.type === "namespace") {
            var namespace = mainItem.packagename;
            mainItem.classes = [];
            mainItem.interfaces = [];
            mainItem.enums = [];
            mainItem.namespaces = [];
                                 
            Object.getOwnPropertyNames(model).sort().forEach(function(item2Key) {
                  var childItem = model[item2Key];
                  if (childItem.namespace === namespace)
                  {
                      
                      switch(childItem.type) {
                        case "interface":
                            mainItem.interfaces.push(childItem.qualifiedname);
                            break;
                        case "class":
                            mainItem.classes.push(childItem.qualifiedname);
                            break;
                        case "enum":
                            mainItem.enums.push(childItem.qualifiedname);
                            break;
                        case "namespace":
                            mainItem.namespaces.push(childItem.qualifiedname);
                            break;
                         default:
                            console.log("unknown" + childItem.type);
                      }
                  }
            });
        }
        
        result[itemKey] = mainItem;
    });
    return result;
}