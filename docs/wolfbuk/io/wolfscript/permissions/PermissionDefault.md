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
static function __getByName__(name) <br> _Looks up a PermissionDefault by name_ | [`PermissionDefault`](PermissionDefault.md)
 function __getValue__(op) <br> _Calculates the value of this PermissionDefault for the given operator_ | `boolean`
 function __toString__() <br> _toString method_ | `String`



---


### Public Methods for [`PermissionDefault`](PermissionDefault.md)

##### <a id='getbyname'></a>public static function __getByName__(name)

_Looks up a PermissionDefault by name_

Argument | Type | Description  
--- | --- | --- 
name | `String` | Name of the default

Returns | Description
--- | --- 
[`PermissionDefault`](PermissionDefault.md) | Specified value, or null if not found


##### <a id='getvalue'></a>public  function __getValue__(op)

_Calculates the value of this PermissionDefault for the given operator value_

Argument | Type | Description  
--- | --- | --- 
op | `boolean` | If the target is op

Returns | Description
--- | --- 
`boolean` | True if the default should be true, or false


##### <a id='tostring'></a>public  function __toString__()

_toString method_

Returns | 
--- | 
`String` |


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

