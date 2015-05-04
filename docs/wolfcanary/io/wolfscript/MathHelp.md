## MathHelp __class__

>io.wolfscript.MathHelp

---

### Class Overview

Helper class for math methods

Method | Type   
--- | :--- 
static function __isInRange__(def, min, max) <br> _Checks if an integer is within a given range_ | `boolean`
static function __setInRange__(def, min, max) <br> _Sets an integer within the given range_ | `int`
static function __setInRange__(def, min, max) <br> _Sets a float within the given range_ | `float`



---


### Public Methods for [`MathHelp`](MathHelp.md)

##### <a id='isinrange'></a>public static function __isInRange__(def, min, max)

_Checks if an integer is within a given range_

Argument | Type | Description  
--- | --- | --- 
def | `int` | the integer to check
min | `int` | the minimum value allowed
max | `int` | the maximum value allowed

Returns | Description
--- | --- 
`boolean` | `true` if in range; `false` if not


##### <a id='setinrange'></a>public static function __setInRange__(def, min, max)

_Sets an integer within the given range_

Argument | Type | Description  
--- | --- | --- 
def | `int` | the integer to check
min | `int` | the minimum value allowed
max | `int` | the maximum value allowed

Returns | Description
--- | --- 
`int` | `def` if in range; `min` if `def` is lower than `min`; `max` if `def` is greater than `max`


##### <a id='setinrange'></a>public static function __setInRange__(def, min, max)

_Sets a float within the given range_

Argument | Type | Description  
--- | --- | --- 
def | `float` | the float to check
min | `float` | the minimum value allowed
max | `float` | the maximum value allowed

Returns | Description
--- | --- 
`float` | `def` if in range; `min` if `def` is lower than `min`; `max` if `def` is greater than `max`


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

