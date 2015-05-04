'use strict';

var Transform = require('stream').Transform,
    gutil = require('gulp-util');

var PLUGIN_NAME = "gulp-java-parser";

module.exports = function (options) {
    var stream = new Transform({
        objectMode: true
    });

    stream._transform = function (file, unused, done) {
        if (file.isStream()) {
            return done(new gutil.PluginError(PLUGIN_NAME, "Streaming not supported"));
        }

        if (file.isBuffer()) {

            try {
                var result = javaParser(String(file.contents));
                file.contents = new Buffer(JSON.stringify(result));
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


var annotationRegex = '(@.+\\s+)*';
var docRegex = '(?:\/\\*\\*((?:[^\\/]+)\\*)\\/\\s*)?' + annotationRegex;

var scopeRegex = '(?:(public|private|protected) )?';
var describeRegex = '((?:(?:static|abstract|final) ?)*)';
var returnRegex = '(?:([a-zA-Z0-9<>\\.\\?\$\\[\\]]+) )?';
var methodNameRegex = '(?:([a-zA-Z]+)\\s*)';
var argRegex = '\\(([^\\)]*)\\)';
var blockRegex = '[\\s]*(?:;|{([^{}]*(?:{[^{}]*(?:{[^{}]*(?:{[^{}]*(?:{[^{}]*(?:{[^{}]*(?:{[^{}]*(?:{[^{}]*(?:{[^{}]*(?:{[^{}]*}[^{}]*)*}[^{}]*)*}[^{}]*)*}[^{}]*)*}[^{}]*)*}[^{}]*)*}[^{}]*)*}[^{}]*)*}[^{}]*)*[^{}]*)})';

var typeRegex = '[a-zA-Z0-9<>\\.\\?\\$\\[\\]]+';
var blockRegex = '[\\s]*(?:;|{([^{}]*(?:{[^{}]*(?:{[^{}]*(?:{[^{}]*(?:{[^{}]*(?:{[^{}]*(?:{[^{}]*(?:{[^{}]*(?:{[^{}]*(?:{[^{}]*}[^{}]*)*}[^{}]*)*}[^{}]*)*}[^{}]*)*}[^{}]*)*}[^{}]*)*}[^{}]*)*}[^{}]*)*}[^{}]*)*[^{}]*)})';

var packageRegex = new RegExp(docRegex + '(?:\\s*package\\s*)([\\w|.]+)', 'm');
var importRegex = new RegExp(/(?:\s*import )(?:static +)?([\w|.|*]+)/g);
var classRegex = new RegExp(docRegex  + '(?:(public|private|protected) )?((?:(?:static|abstract|final) ?)*)(class|interface|enum) (' + typeRegex + ') (?:extends ((?:' + typeRegex + '),?)+ )?(?:implements ((?:[a-zA-Z0-9\\.<>\\?\\$])+,?)+ )?' + blockRegex, 'gm');
var methodRegex = new RegExp(docRegex  + scopeRegex + describeRegex + returnRegex + methodNameRegex + argRegex + blockRegex, 'gm');
var fieldRegex = new RegExp(docRegex  + '^(?:[^s]*(public|private|protected) )?((?:(?:static|abstract|final) ?)*)(' + typeRegex + ') ([a-zA-Z0-9]+)(?:[^(){}=;]*)?[;=]', 'gm');
var enumRegex = new RegExp(docRegex + '([^\\s\(\\)]*)(?:\\s*\\((\\S*)\\))?,', 'gm');
//console.log("package: " + packageRegex);
//console.log("class: " + classRegex);
console.log("method: " + methodRegex);
//console.log("field: " + fieldRegex);
//console.log("enum: " + enumRegex);
function javaParser(sourcecode) {
    var rs = {};
    var pr = packageRegex.exec(sourcecode);
    var packageName = '';
    if (!pr) {
        console.log("Error");
    }
    else {
        packageName = pr[3] || '';
        var javadoc = parsedoc(pr[1]);

        if (javadoc) {
            var type = "namespace";
            var title = undefined, description = undefined, flags = undefined;

           if (javadoc && javadoc.title) {
                title = javadoc.title;
                description = javadoc.description;
            }
            else {
                title = "Classes and interfaces for namespace " + packageName;
                description = title;
            }

            if (javadoc && javadoc.flags && Object.getOwnPropertyNames(javadoc.flags).length > 0)
                flags = javadoc.flags;

            var namespace = packageName.replace(/([\.\w]+)\.(\w+)/, function (x, p1, p2) { return p1; });
            var name = packageName.replace(/([\.\w]+)\.(\w+)/, function (x, p1, p2) { return p2; });
            
            if (namespace.indexOf('.') < 0)
            {
                name = namespace + "." + name;
                namespace = "";
            }
    
             var pack = {
                namespace: namespace,
                title: title,
                description: description,
                doc: flags,
                name: name,
                qualifiedname: packageName + ".0",
                packagename: packageName,
                deprecated: deprecated,
                type: type,
                constructors: [],
                methods: [],
                imports: []
            };

            rs[pack.qualifiedname] = pack;
        }

    }
    var im = importRegex.exec(sourcecode);
    var imports = [];

    while (im) {
        imports.push(im[1]);
        im = importRegex.exec(sourcecode);
    }

    var or = classRegex.exec(sourcecode);

    while (or) {
        var javadoc = parsedoc(or[1]);
        var modifiers = (or[2] || '').replace('\r\n', ' ').trim().toLowerCase();
        var scope = or[3] || 'package';
        var describe = (or[4] || '').trim();
        var type = or[5];
        var className = or[6].split('<', 1)[0];
        var exts = or[7];
        var impls = or[8];
        var classBody = or[9]; //.split('\n').filter(Boolean).map(trimStr);
        if (exts)
            exts = exts.replace('>', '');
        if (impls)
            impls = impls.replace('>', '');

        var title = undefined, description = undefined, flags = undefined;


            if (javadoc && javadoc.title) {
                title = javadoc.title;
                description = javadoc.description;
            }
            else {
                   title = type + " " + className;
                description = title;
            }

       if (javadoc && javadoc.flags && Object.getOwnPropertyNames(javadoc.flags).length > 0)
            flags = javadoc.flags;

        if (describe.length === 0)
            describe = undefined;

        var deprecated = undefined;

        if (modifiers.indexOf('deprecated') >= 0)
            deprecated = true;



        var clz = {
            namespace: packageName,
            title: title,
            description: description,
            doc: flags,
            name: className,
            qualifiedname: packageName + "." + className,
            deprecated: deprecated,
            type: type,
            scope: scope,
            describe: describe,
            'extends': exts ? exts.split(',').map(trimStr) : undefined,
            'implements': impls ? impls.split(',').map(trimStr) : undefined,
            constructors: [],
            fields: [],
            methods: [],
            imports: imports
        };

        if (type === "enum") {

            var classBodyShort = classBody.split(';', 1)[0] + ',';
            var enumItem = enumRegex.exec(classBodyShort);

            clz.enum = [];
            while (enumItem) {
                var javadoc = parsedoc(enumItem[1]);
                var modifiers = (enumItem[2] || '').replace('\r\n', ' ').trim().toLowerCase();

                var code = enumItem[3];
                var value = (enumItem[4] || '').trim();

                if (javadoc && javadoc.title) {
                    title = javadoc.title
                    description = javadoc.description
                }
                else {
                    title = code + " " + clz.name;
                    description = title;
                }

                var deprecated = undefined;

                if (modifiers.indexOf('deprecated') >= 0)
                    deprecated = true;

                if (javadoc && javadoc.flags)
                    flags = javadoc.flags;

                if (code !== "")
                    clz.enum.push({
                        code: code,
                        value: value,
                        title: title,
                        description: description,
                        deprecated: deprecated,
                        doc: flags
                    });


                enumItem = enumRegex.exec(classBodyShort);

            }
        }

        var signature = methodRegex.exec(classBody);

        while (signature) {
            var javadoc = parsedoc(signature[1]);
            var modifiers = (signature[2] || '').replace('\r\n', ' ').trim().toLowerCase();
            var scope = signature[3] || 'package';
            var describe = (signature[4] || '').trim();
            var retVal = signature[5];
            var name = signature[6];
            var args = parseArgs(signature[7], javadoc);

            var title = undefined, description = undefined, flags = undefined;

            if (javadoc && javadoc.title) {
                title = javadoc.title
                description = javadoc.description
            }
            else {
                if (retVal == undefined)
                    title = name + " constructor"
                else
                    title = name + " method";
                description = title;

            }

            var deprecated = undefined;

            if (modifiers.indexOf('deprecated') >= 0)
                deprecated = true;



            if (javadoc && javadoc.flags)
                flags = javadoc.flags;

            if (describe.length === 0)
                describe = undefined;

            if (retVal == undefined) { // no ret, constructor
                var cons = {
                    title: title,
                    description: description,
                    doc: flags,
                    scope: scope,
                    name: name,
                    describe: describe,
                    deprecated: deprecated,
                    args: args
                };

                if (cons.scope === 'public')
                    clz.constructors.push(cons);
            } else {
                var m = {
                    title: title,
                    description: description,
                    doc: flags,
                    scope: scope,
                    describe: describe,
                    'return': retVal,
                    name: name,
                    deprecated: deprecated,
                    args: args
                };

                if (m.scope === 'public')
                    clz.methods.push(m);
            }

            signature = methodRegex.exec(classBody);
        }


        signature = fieldRegex.exec(classBody);

        while (signature) {
            var javadoc = parsedoc(signature[1]);
            var modifiers = (signature[2] || '').replace('\r\n', ' ').trim().toLowerCase();
            var scope = signature[3] || 'package';
            var describe = (signature[4] || '').trim();
            var type = signature[5];
            var name = signature[6];

            var title = undefined, description = undefined, flags = undefined;

            if (javadoc && javadoc.title) {
                title = javadoc.title
                description = javadoc.description
            }
            else {
                title = name + " field";
                description = title;
            }

            if (javadoc && javadoc.flags)
                flags = javadoc.flags;

            if (describe.length === 0)
                describe = undefined;

            var deprecated = undefined;

            if (modifiers.indexOf('deprecated') >= 0)
                deprecated = true;

            if (scope === 'public')
                clz.fields.push({
                    title: title,
                    description: description,
                    doc: flags,
                    name: name,
                    scope: scope,
                    type: type,
                    deprecated: deprecated,
                    describe: describe
                });

            signature = fieldRegex.exec(classBody);

        }

        if (clz.fields.length === 0)
            delete clz.fields;

        if (clz.scope === 'public')
            rs[clz.qualifiedname] = clz;

        or = classRegex.exec(sourcecode);
    }

    return rs;
}

function trimStr(str) {
    return str.trim();
}



// Parse a docblock.
// @param block The docblock to parse.
// @param member The member being documented.
// @param lang The assumed language.
function parsedoc(block) {
    if (!block) return undefined;

    var result = {
        description: '',
        title: '',
        flags: {}
    };

    var rawLines = block.split(/\s+\*\s?/g);
    var cleanLines = [];

    // Clean up lines found in docblock.
    for (var i = 0; i < rawLines.length; i++) {
        var line = rawLines[i].trim().replace(/^\*\s*/, '');

        if (line.length === 0) {
            // Don't include empty lines.
            continue;
        }

        cleanLines.push(line);
    }

    // Process cleant up lines.
    var lastFlag = null;

    for (var i = 0; i < cleanLines.length; i++) {
        var line = cleanLines[i];
        var flag = line.match(/^@(\w+)\s?(.+)/);

        if (lastFlag !== null || flag !== null) {
            if (flag === null) {
                // Append to last flag item in list.
                result.flags[lastFlag][result.flags[lastFlag].length - 1] += ' ' + line;
            } else {
                // Add new item to flag list.
                if (!result.flags.hasOwnProperty(flag[1])) result.flags[flag[1]] = [];
                result.flags[flag[1]].push(flag[2]);

                lastFlag = flag[1];
            }
        }

        if (lastFlag === null) {
            // Continue appending to the description.
            result.description += (result.description.length === 0 ? '' : ' ') + line;
            result.title = (result.title.length === 0 ? line.replace(/\<br[\s\S]*/, '') : result.title);
        }
    }

    return result;
}

function parseArgs(argstr, javadoc) {
    var result = [];

    if (!argstr)
        return result;

    var args = argstr.trim().split(/\s*\,\s*/g);

    for (var i = 0; i < args.length; i++) {
        var arg = args[i];
        var argName = firstMatchOr(/\w+\s(\w+)/, arg, '');
        var argType = firstMatchOr(/(\w+)\s\w+/, arg, '');

        if (argName.length === 0 || argType.length === 0) continue;

        var argDescription = undefined;

        if (javadoc && javadoc.flags && javadoc.flags.hasOwnProperty('param') && javadoc.flags.param.length > 0) {
            for (var j = 0; j < javadoc.flags.param.length; j++) {

                var param = javadoc.flags.param[j];
                var paramName = firstMatchOr(/(\w+)\s/, param, '');

                if (paramName === argName) {
                    argDescription = param.substr(argName.length + 1);
                    break;
                }
            }

        }

        result.push({
            name: argName,
            type: argType,
            description: argDescription || argName + " argument"
        });
    }

    if (javadoc && javadoc.flags && javadoc.flags.hasOwnProperty('param')) {
        delete javadoc.flags.param;
        if (Object.getOwnPropertyNames(javadoc.flags).length === 0)
            delete javadoc.flags;
    }

    return result;
}

// Returns the value of the first matching group of a regex pattern against a string, or a fallback value.
// @param pattern The regex pattern.
// @param string The target string.
// @param fallback The fallback value.
function firstMatchOr(pattern, string, fallback) {
    fallback = fallback === undefined ? null : fallback;

    var match = string.match(pattern);

    return match === null ? fallback : match[1];
}