'use strict';

var Transform = require('stream').Transform,
    gutil = require('gulp-util'),
    path = require('path');

var PLUGIN_NAME = "gulp-text-replace";

module.exports = function (oldnamespace, newnamespace) {

    if (!oldnamespace) {
        throw new gutil.PluginError(PLUGIN_NAME, 'Missing oldnamespace option');
    }

    if (!newnamespace && newnamespace !== '') {
        throw new gutil.PluginError(PLUGIN_NAME, 'Missing newnamespace option');
    }

    var stream = new Transform({
        objectMode: true
    });

    stream._transform = function (file, unused, done) {
        if (file.isStream()) {
            return done(new gutil.PluginError(PLUGIN_NAME, "Streaming not supported"));
        }

        if (file.isBuffer()) {

            try {

                file.contents = new Buffer(JSON.stringify(JSON.parse(String(file.contents).replace(new RegExp(oldnamespace, 'g'), newnamespace))));
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
