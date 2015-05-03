'use strict';

var Transform = require('stream').Transform,
    gutil = require('gulp-util'),
     razor = require("lime-razor");

var PLUGIN_NAME = "gulp-razor-to-md";

module.exports = function(options, model) {
    model.require = require;
    var stream = new Transform({objectMode: true});

    stream._transform = function(file, unused, done) {
        if (file.isStream()) {
            return done(new gutil.PluginError(PLUGIN_NAME, "Streaming not supported"));
        }

        if (file.isBuffer()) {
             razor.render(file.path, String(file.contents), model, process.cwd(), 
                function(err, result) {
                if (err) {
                    return done(new gutil.PluginError(PLUGIN_NAME, err));
                }
                file.contents = new Buffer(result);
                done(null, file);
            });

        } else {
            // When null just pass through
            done(null, file);
        }
    };

    return stream;
};
