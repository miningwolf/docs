exports.fnAnchor = function(text){
	   return text.replace(/[\s|"."]/g, "-").toLowerCase();
	 }

exports.fnNameOnly = function(text){
	if (text.indexOf(".0", text.length - 2) === -1)
      return text.replace(/[.\w]+\.(\w+)/, function(x, p1) {return p1;});
	else 
	   return text.replace(/[.\w]+\.(\w+)\.0$/, function(x, p1) {return p1;});
	 }; 

exports.fnEventName = function(text){
   return text.replace(/[\.\w]+\.(\w+\.\w+)/, function(x, p1) {return p1;});
	 } 

exports.fnDescriptionClean = function(text, link){
		if (text === undefined)
			return '';

	  if (!link)
	  	link = function(x){return "`" + x.substr(7, x.length-8) + "`";}

	  code = function(x){return "`" + x.substr(7, x.length-8) + "`";}


	   return text.replace(/{@link (\S+)}/g, link).replace(/{@code (\S+)}/g, code)
	 }

exports.toTitleCase = function(str)
	{
	
	    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
	}

exports.getArgs = function(item){
		if (item.args === undefined)
				    return "";

	  var str = [];
      item.args.forEach(function(arg){
      	str.push(arg.name);
      });

      return str.join(', ');

	 }