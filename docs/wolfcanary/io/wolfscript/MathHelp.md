## MathHelp __class__

>io.wolfscript.MathHelp

---

### Class Overview

Helper class for math methods

Method | Type   
--- | :--- 
static function __setInRange__(def, min, max) <br> _Checks if an integer is within a given range_ | `float`



---


### Public Methods for [`MathHelp`](MathHelp.md)

##### <a id='setinrange'></a>public static function __setInRange__(def, min, max)

_Checks if an integer is within a given range_

Argument | Type | Description  
--- | --- | --- 
def | `float` | the integer to check
min | `float` | the minimum value allowed
max | `float` | the maximum value allowed

Returns | Description
--- | --- 
`float` | `true` if in range; `false` if not /
    public static boolean isInRange(int def, int min, int max) {
        return def >= min && def <= max;
    }

    /** Sets an integer within the given range


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

