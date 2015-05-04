## Type __enum__

>io.wolfscript.map.Type

---

### Enum Overview

Represents a cursor on a map. /
public final class MapCursor {
    private byte x, y;
    private byte direction, type;
    private boolean visible;

    /** Initialize the map cursor.

Item | Type   
--- | :--- 
WHITE_POINTER: 0<br> _WHITE_POINTER Type_ | Type
GREEN_POINTER: 1<br> _GREEN_POINTER Type_ | Type
RED_POINTER: 2<br> _RED_POINTER Type_ | Type
BLUE_POINTER: 3<br> _BLUE_POINTER Type_ | Type
WHITE_CROSS: 4<br> _WHITE_CROSS Type_ | Type



---


### Public Methods for [`Type`](Type.md)

##### <a id='byvalue'></a>public static function __byValue__(value)
_Deprecated: Magic value /
        @Deprecated
        public byte getValue() {
            return value;
        }

        /** Magic value_

_byValue method_

Argument | Type | Description  
--- | --- | --- 
value | `byte` | the value

Returns | Description
--- | --- 
[`Type`](Type.md) | the value


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

