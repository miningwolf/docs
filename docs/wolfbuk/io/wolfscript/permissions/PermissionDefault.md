## PermissionDefault __enum__

>io.wolfscript.permissions.PermissionDefault

---

### Enum Overview

Represents the possible default values for permissions

Item | Type   
--- | :--- 
TRUE: "true"<br> _TRUE PermissionDefault_ | PermissionDefault
FALSE: "false"<br> _FALSE PermissionDefault_ | PermissionDefault
"op": <br> _"op" PermissionDefault_ | PermissionDefault
"isop": <br> _"isop" PermissionDefault_ | PermissionDefault
"operator": <br> _"operator" PermissionDefault_ | PermissionDefault
"isoperator": <br> _"isoperator" PermissionDefault_ | PermissionDefault
"admin": <br> _"admin" PermissionDefault_ | PermissionDefault
"!op": <br> _"!op" PermissionDefault_ | PermissionDefault
"notop": <br> _"notop" PermissionDefault_ | PermissionDefault
"!operator": <br> _"!operator" PermissionDefault_ | PermissionDefault
"notoperator": <br> _"notoperator" PermissionDefault_ | PermissionDefault
"!admin": <br> _"!admin" PermissionDefault_ | PermissionDefault
static function __getByName__(name) <br> _Calculates the value of this PermissionDefault for the given operator_ | [`PermissionDefault`](PermissionDefault.md)
 function __toString__() <br> _toString method_ | `String`



---


### Public Methods for [`PermissionDefault`](PermissionDefault.md)

##### <a id='getbyname'></a>public static function __getByName__(name)

_Calculates the value of this PermissionDefault for the given operator value_

Argument | Type | Description  
--- | --- | --- 
name | `String` | Name of the default

Returns | Description
--- | --- 
[`PermissionDefault`](PermissionDefault.md) | True if the default should be true, or false /
    public boolean getValue(boolean op) {
        switch (this) {
        case TRUE:
            return true;
        case FALSE:
            return false;
        case OP:
            return op;
        case NOT_OP:
            return !op;
        default:
            return false;
        }
    }

    /** Looks up a PermissionDefault by name


##### <a id='tostring'></a>public  function __toString__()

_toString method_

Returns | 
--- | 
`String` |


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

