## TabCompleteHelper __class__

>io.wolfscript.commandsys.TabCompleteHelper

---

### Class Overview

A set of methods to help with doing tab completes

Method | Type   
--- | :--- 
static function __findDispatcherFor__(CommandListener, parent) <br> _Matches a partial `String` to a possible matching `String`_ | [`TabCompleteDispatch`](TabCompleteDispatch.md)



---


### Public Methods for [`TabCompleteHelper`](TabCompleteHelper.md)

##### <a id='finddispatcherfor'></a>public static function __findDispatcherFor__(CommandListener, parent)

_Matches a partial `String` to a possible matching `String`_

Argument | Type | Description  
--- | --- | --- 
CommandListener | `final` | CommandListener argument
parent | `String` | parent argument

Returns | Description
--- | --- 
[`TabCompleteDispatch`](TabCompleteDispatch.md) | `true` if matches or if partial is empty; `false` if not /
    public static boolean startsWith(String partial, String possible) {
        return possible.regionMatches(true, 0, partial, 0, partial.length());
    }

    /** Attempts to get a list of matches that the specified argument could be


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

