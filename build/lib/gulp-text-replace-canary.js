'use strict';

var Transform = require('stream').Transform,
    gutil = require('gulp-util'),
    path =require('path');

var PLUGIN_NAME = "gulp-text-replace-canary";


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

        text = text.replace(/CanaryMod/g, 'WolfScript')
        .replace(/canarymod/g, 'wolfscript')
        .replace(/Canary/g, 'Wolf')
        .replace(/canary/g, 'wolf')
    
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
