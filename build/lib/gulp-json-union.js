'use strict';

var Transform = require('stream').Transform,
    gutil = require('gulp-util'),
    path =require('path');

var PLUGIN_NAME = "gulp-json-union";

module.exports = function(fileName) {

   if (!fileName) {
    throw new gutil.PluginError(PLUGIN_NAME, 'Missing fileName option');
  }

    var stream = new Transform({
        objectMode: true
    });

    var data = {};
    var firstFile = null;

    stream._transform = function(file, unused, done) {
      if (!firstFile) {
      firstFile = file;
    }

        if (file.isStream()) {
            return done(new gutil.PluginError(PLUGIN_NAME, "Streaming not supported"));
        }

        if (file.isBuffer()) {

            try {


          var obj = JSON.parse(String(file.contents));
          Object.getOwnPropertyNames(obj).forEach(function(mainItemKey){
              data[mainItemKey] = obj[mainItemKey];
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

        var joinedPath = path.join(firstFile.base, fileName);

        var joinedFile = new gutil.File({
          cwd: firstFile.cwd,
          base: firstFile.base,
          path: joinedPath,
          contents: new Buffer(JSON.stringify(data))
        });
        this.push(joinedFile);
        done();
    }
    
    return stream;
};
