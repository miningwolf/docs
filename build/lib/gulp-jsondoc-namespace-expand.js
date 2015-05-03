'use strict';

var Transform = require('stream').Transform,
    gutil = require('gulp-util'),
    path =require('path');

var PLUGIN_NAME = "gulp-jsondoc-namespace-expand";

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

  var parseimports = function(mainItem) {
      if (!mainItem.imports)
          return;
      var result = [];
      mainItem.imports.forEach(function(imports) {
          var nre = nsRegexp.exec(imports);
          var ns = undefined, name;
          if (nre)
          {
             ns = nre[1];
             name = nre[2];
           } else
           {
            name = imports;
           }

           if (name === "*")
           {

            Object.getOwnPropertyNames(model).forEach(function(modelItemKey) {
              var modelItem = model[modelItemKey];
              if (modelItem.namespace === ns)
                 result.push({namespace: modelItem.namespace, name: modelItem.name, qualifiedname: modelItem.qualifiedname});
            });
          } else
           result.push({namespace: ns, name: name, qualifiedname: imports});
      });

       Object.getOwnPropertyNames(model).forEach(function(modelItemKey) {
              var modelItem = model[modelItemKey];
              if (modelItem.namespace === mainItem.namespace)
                 result.push({namespace: modelItem.namespace, name: modelItem.name, qualifiedname: modelItem.qualifiedname});
      });

      return result;
  };

  var lookup = function(name, imports) {

      var result = name;
  
      imports.some(function(i) {
        if (i.qualifiedname === name)
        {
           result = i.qualifiedname;
          return true;
        }

          if (i.name === name)
             {
            result = i.qualifiedname;
            return true;
          }
      });
 
    return result;
  };

  var parsedescription = function(description, imports) {
    return description.replace(linkRegexp, function(match, p1){ return "{@link " + lookup(p1, imports) + "}"; } );
  };

	var result = {};

 	Object.getOwnPropertyNames(model).sort().forEach(function(itemKey){
      var mainItem = model[itemKey];
      var mainImports = parseimports(mainItem);

      if (mainItem.constructors && mainItem.constructors.length > 0)
      mainItem.constructors.forEach(function(i) {

             if (i.description)
              i.description = parsedescription(i.description, mainImports);
          if (i.title)
              i.title = parsedescription(i.title, mainImports);

          i.args.forEach(function(arg){
            arg.type = lookup(arg.type, mainImports);
            if (arg.description)
              arg.description = parsedescription(arg.description, mainImports);
          }); 
        });

       if (mainItem.methods &&  mainItem.methods.length > 0)
       mainItem.methods.forEach(function(i) {

             if (i.description)
              i.description = parsedescription(i.description, mainImports);
          if (i.title)
              i.title = parsedescription(i.title, mainImports);


          i.args.forEach(function(arg){
            arg.type = lookup(arg.type, mainImports);
            if (arg.description)
              arg.description = parsedescription(arg.description, mainImports);

          }); 


           if (i.return)
            i.return = lookup(i.return, mainImports);

           if (i.doc && i.doc.return && i.doc.return.length > 0)
             {
                var ndoc = [];
                 i.doc.return.forEach(function(ret) {
                       ndoc.push(parsedescription(ret, mainImports));
                    });
                 i.doc.return = ndoc;
               }

          if (i.doc && i.doc.deprecated && i.doc.deprecated.length > 0)
             {
                var ndoc = [];
                 i.doc.deprecated.forEach(function(depre) {
                      ndoc.push(parsedescription(depre, mainImports));
                    });
                 i.doc.deprecated = ndoc;
               }


           });

   if (mainItem.fields && mainItem.fields.length > 0)
     mainItem.fields.forEach(function(i) {
          i.type = lookup(i.type, mainImports);
          if (i.description)
              i.description = parsedescription(i.description, mainImports);
          if (i.title)
              i.title = parsedescription(i.title, mainImports);

           if (i.return)
            i.return = lookup(i.return, mainImports);

            if (i.doc && i.doc.deprecated && i.doc.deprecated.length > 0)
             {
                var ndoc = [];
                 i.doc.deprecated.forEach(function(depre) {
                      ndoc.push(parsedescription(depre, mainImports));
                    });
                 i.doc.deprecated = ndoc;
               }


           });

    if (mainItem.implements && mainItem.implements.length > 0)
    {
      var ilist = [];
       mainItem.implements.forEach(function(i) {
          ilist.push(lookup(i, mainImports));
                    });
       mainItem.implements = ilist;
   }

     if (mainItem.extends && mainItem.extends.length > 0)
    {
      var elist = [];
       mainItem.extends.forEach(function(i) {
          elist.push(lookup(i, mainImports));
                    });
       mainItem.extends = elist;
   }


   if (mainItem.description)
    mainItem.description = parsedescription(mainItem.description, mainImports);

  if (mainItem.title)
    mainItem.title = parsedescription(mainItem.title, mainImports);

    result[itemKey] = mainItem;
  });
 return result;
}


