"use strict";
var Promise = require('promise');
var gulp = require("gulp");
var del = require('del');
var gutil = require("gulp-util");
var rename = require("gulp-rename");
var jsonunion = require("./build/lib/gulp-json-union.js");
var razor2md = require("./build/lib/gulp-razor-to-md.js");
var textreplace = require("./build/lib/gulp-text-replace.js");
var textreplacehook = require("./build/lib/gulp-text-replace-hook.js");
var textreplacecanary = require("./build/lib/gulp-text-replace-canary.js");
var textreplacespigot = require("./build/lib/gulp-text-replace-bukkit.js");
var javaparser = require("./build/lib/gulp-java-parser.js");
var nsexpand = require("./build/lib/gulp-jsondoc-namespace-expand.js");
var nscreateblank = require("./build/lib/gulp-jsondoc-create-blank-namespaces.js");
var inventoryns = require("./build/lib/gulp-jsondoc-inventory-namespaces.js");
var method2props = require("./build/lib/gulp-jsondoc-method-to-properties.js");
var json2razormd = require("./build/lib/gulp-jsondoc-to-razormd.js");
var md2html = require("./build/lib/gulp-markdown-docs.js");
var git = require('gulp-git');
var fs = require('fs');

var clone = Promise.denodeify(git.clone);
var checkout = Promise.denodeify(git.checkout);

gulp.task("clean", function (cb) {
  del([
    'build/json',
    'docs/',
    'html/',
  ], cb);
});

gulp.task("cleanthirdparty", function (cb) {
  del([
    'build/thirdparty'
  ], function(){
      try {
      fs.rmdirSync('./build/thirdparty');
      } catch (ex) {};
      fs.mkdirSync('./build/thirdparty');
        cb();  
  });
});

// May need to reverse doc and HEAD if checkout API changes
gulp.task('clone', ['cleanthirdparty'], function(cb){
   clone('https://github.com/nodejs/node.git', {args: ' --depth 1  --single-branch nodejs  --no-checkout', cwd: './build/thirdparty'})
  .then(clone('https://hub.spigotmc.org/stash/scm/spigot/bukkit.git', {args: ' --depth 1  --single-branch spigot-api', cwd: './build/thirdparty'}))
  .then(clone('https://github.com/CanaryModTeam/CanaryLib.git', {args: ' --depth 1  --single-branch canarylib', cwd: './build/thirdparty'}))
  .then(checkout('doc', {args:'HEAD' , cwd: './build/thirdparty/nodejs'})) 
   .then(function(err){cb(err);}, function(){cb();});
});

// May need to reverse doc and HEAD if checkout API changes
gulp.task('checkout', ['clone'], function(cb){
 checkout('doc', {args:'HEAD' , cwd: './build/thirdparty/nodejs'}) 
   .nodeify(cb);
});

gulp.task("json-wolfbuk", function(){
   return gulp.src("build/thirdparty/spigot-api/src/main/**/*.java")
        .pipe(javaparser())
           .pipe(rename(function(path){
            path.extname = ".json";
        }))
        .pipe(jsonunion("wolfbuk.json"))
        .pipe(textreplace('org.bukkit', 'io.wolfscript'))
        .pipe(textreplacespigot())
        .pipe(nscreateblank())
        .pipe(nsexpand())
        .pipe(inventoryns())
        .pipe(method2props())
        .pipe(gulp.dest("build/json"));
});

gulp.task("json-wolfcanary", function(){
   return gulp.src("build/thirdparty/canarylib/src/main/java/**/*.java")
        .pipe(javaparser())
           .pipe(rename(function(path){
            path.extname = ".json";
        }))
        .pipe(jsonunion("wolfcanary.json"))
        .pipe(textreplace('net.canarymod', 'io.wolfscript'))
        .pipe(textreplacehook())
        .pipe(textreplacecanary())
        .pipe(nscreateblank())
        .pipe(nsexpand())
        .pipe(inventoryns())
        .pipe(method2props())
        .pipe(gulp.dest("build/json"));
});

gulp.task("docs-common", ["json-wolfbuk"], function(){
    return gulp.src("build/views/*.jsmd")
           .pipe(razor2md({}, {db: require('./build/json/wolfbuk.json')}))
           .pipe(rename(function(path){path.extname = ".md";}))
        .pipe(gulp.dest("docs"));
});

gulp.task("docs-wolfbuk", ['json-wolfbuk'], function(){
    return gulp.src("build/views/server-specific/*.jsmd")
           .pipe(razor2md({}, {db: require('./build/json/wolfbuk.json')}))
           .pipe(rename(function(path){path.extname = ".md";}))
        .pipe(gulp.dest("docs/wolfbuk"));
});

gulp.task("docs-wolfcanary", ['json-wolfcanary'], function(){
    return gulp.src("build/views/server-specific/*.jsmd")
           .pipe(razor2md({}, {db: require('./build/json/wolfcanary.json')}))
           .pipe(rename(function(path){path.extname = ".md";}))
        .pipe(gulp.dest("docs/wolfcanary"));
});

gulp.task("node", function(){
    return gulp.src("build/thirdparty/nodejs/doc/api/*.markdown")
            .pipe(rename(function(path){path.extname = ".md";}))
        .pipe(gulp.dest("docs/wolfnode"));
});

gulp.task("ref-wolfbuk", ['json-wolfbuk'], function(){
    return gulp.src("build/json/wolfbuk.json")
           .pipe(json2razormd('/build/views/partials/apiReference.jsmd'))
        .pipe(gulp.dest("docs/wolfbuk"));
});

gulp.task("ref-wolfcanary", ['json-wolfcanary'], function(){
    return gulp.src("build/json/wolfcanary.json")
           .pipe(json2razormd('/build/views/partials/apiReference.jsmd'))
        .pipe(gulp.dest("docs/wolfcanary"));
});

gulp.task("htmlpre", function(){
    return gulp.src("build/views/html/assets/**/*")
        .pipe(gulp.dest("html/assets"));
});

gulp.task("html", ['node', 'docs-common', 'docs-wolfbuk', 'docs-wolfcanary', 'ref-wolfbuk', 'ref-wolfcanary'],function(){
    return gulp.src("docs/**/*.md")
           .pipe(md2html())
        .pipe(gulp.dest("html"));
});

gulp.task("html-redo", function(){
    return gulp.src("docs/**/*.md")
           .pipe(md2html())
        .pipe(gulp.dest("html"));
});

gulp.task('default', ['htmlpre', 'html']);
