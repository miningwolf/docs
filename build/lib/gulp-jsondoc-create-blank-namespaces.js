'use strict';

var Transform = require('stream').Transform,
    gutil = require('gulp-util'),
    path =require('path');

var PLUGIN_NAME = "gulp-jsondoc-create-blank-namespaces";

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

    Object.getOwnPropertyNames(model).forEach(function(itemKey) {
        var mainItem = model[itemKey];
        var packageName = mainItem.namespace;
        
          var namespace = packageName.replace(/([\.\w]+)\.(\w+)/, function (x, p1, p2) { return p1; });
            var name = packageName.replace(/([\.\w]+)\.(\w+)/, function (x, p1, p2) { return p2; });
            
            if (namespace.indexOf('.') < 0)
            {
                name = namespace + "." + name;
                namespace = "";
            }
    
        
        if (packageName.length > 0) {
            
            if (!model[packageName + ".0"])
              {
                  
                     var type = "namespace";
                     var title = "Classes and interfaces for namespace " + packageName;
                     var description = title;
            
                     var pack = {
                        namespace: namespace,
                        title: title,
                        description: description,
                        doc: undefined,
                        name: name,
                        qualifiedname: packageName + ".0",
                        packagename: packageName,
                        deprecated: undefined,
                        type: type,
                        constructors: [],
                        methods: [],
                        imports: []
                    };
                    
                     result[pack.qualifiedname] = pack;
              }
        }
         result[itemKey] = mainItem;
    });
    return result;
}