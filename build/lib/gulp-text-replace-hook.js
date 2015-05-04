'use strict';

var Transform = require('stream').Transform,
    gutil = require('gulp-util'),
    path =require('path');

var PLUGIN_NAME = "gulp-text-replace-hook";


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

        var text = String(file.contents);

        text = text.replace(/wolfscript.hook.command/g, 'wolfscript.event.command')
        .replace(/wolfscript\.hook\.entity/g, 'wolfscript.event.entity')
        .replace(/wolfscript\.hook\.player/g, 'wolfscript.event.player')
        .replace(/wolfscript\.hook\.system/g, 'wolfscript.event.system')
        .replace(/wolfscript\.hook\.world/g, 'wolfscript.event.world');

     
    
        var model = JSON.parse(text);
        var result = {};

        try
        {

        Object.getOwnPropertyNames(model).sort().forEach(function(itemKey){
           var mainItem = model[itemKey];

           if (mainItem.namespace && mainItem.namespace.substr(0,20) === 'io.wolfscript.event.')
             {
               var oldName = mainItem.name;
               var newName = mainItem.name.substr(0, mainItem.name.length-4) + 'Event';

                mainItem.title = mainItem.title
                .replace(new RegExp(oldName, 'g'), newName)
                .replace("hook", "event");

                mainItem.description = mainItem.description
                   .replace(new RegExp(oldName, 'g'), newName)
                   .replace("hook", "event");

                if (mainItem.constructors.length > 0)
                  mainItem.constructors.forEach(function(i){

                  i.description = i.description
                   .replace(new RegExp(oldName, 'g'), newName)
                   .replace("hook", "event");

                    i.name = i.name.replace(oldName, newName);

                    i.title = i.title
                   .replace(new RegExp(oldName, 'g'), newName)
                   .replace("hook", "event");
            
                  });

                  if (mainItem.methods.length > 0)
                  mainItem.constructors.forEach(function(i){

                  i.description = i.description
                   .replace(new RegExp(oldName, 'g'), newName)
                   .replace("hook", "event");

                   i.title = i.title
                   .replace(new RegExp(oldName, 'g'), newName)
                   .replace("hook", "event");

                  });

                mainItem.constructors = [];          
                mainItem.name = newName;
                mainItem.qualifiedname = mainItem.namespace + "." + mainItem.name;
               } 
             result[mainItem.qualifiedname] = mainItem;
         });
      } catch (ex)  {console.log(ex);};

      text = JSON.stringify(result);

        var changes = [];
        text = text.replace(/(wolfscript\.event\.[0-9a-zA-Z]+\.([0-9a-zA-Z]+))Hook/g, 
          function(x, p1, p2){changes.push(p2); return p1;});

       if (changes.length>0)
          changes.forEach(function(change){
           text = text.replace( new RegExp(change + 'Hook', 'g'), function(x){return change + 'Event';});        
          });

        file.contents = new Buffer(JSON.stringify(JSON.parse(text)));
        return done(null, file);
         } catch (err) {
            return done(new gutil.PluginError(PLUGIN_NAME, err));
        }

    } else {
        // When null just pass through
        done(null, file);
    }
    };
    
    return stream;
};
