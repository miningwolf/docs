## ToolBox __class__

>io.wolfscript.ToolBox

---

### Class Overview

Set of miscellaneous tools

Method | Type   
--- | :--- 
static function __uuidFromUsername__(username) <br> _Check if an array contains a specified value_ | `UUID`



---


### Public Methods for [`ToolBox`](ToolBox.md)

##### <a id='uuidfromusername'></a>public static function __uuidFromUsername__(username)

_Check if an array contains a specified value_

Argument | Type | Description  
--- | --- | --- 
username | `String` | the username to check

Returns | Description
--- | --- 
`UUID` | true if needle is found in haystack, false otherwise /
    public static <T> boolean arrayContains(T[] haystack, T needle) {
        // return Arrays.asList(haystack).contains(needle); // could be this but in some cases pure iterating is slightly faster
        for (T type : haystack) {
            if (type != null && type.equals(needle)) {
                return true;
            }
        }
        return false;
    }

    /** Merge 2 arrays. This will just merge two arrays.


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

