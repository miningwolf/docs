## MapCursor __class__

>io.wolfscript.map.MapCursor

---

### Class Overview

Represents a cursor on a map.

Method | Type   
--- | :--- 
 writeonly property __Y__ <br> _Set: Set the Y position of this cursor._ | `void`
 writeonly property __Direction__ <br> _Set: Set the direction of this cursor._ | `void`
 readonly property __Direction__ <br> _Get: Get the direction of this cursor._ | `byte`
  property __Type__ <br> _Type property_ | `Type`
  property __X__ <br> _Get: Get the X position of this cursor.<br>Set: Set the X position of this cursor._ | `byte`
 readonly property __Y__ <br> _Get: Get the Y position of this cursor._ | `byte`
 writeonly property __Visible__ <br> _Set: Set the visibility status of this cursor._ | `void`
 function __isVisible__() <br> _Get the visibility status of this cursor._ | `boolean`



---

### Public Constructors for [`MapCursor`](MapCursor.md)

##### <a id='mapcursor'></a>new __MapCursor__(x, y, direction, type, visible) 
_Deprecated_

_MapCursor constructor_

Argument | Type | Description  
--- | --- | --- 
x | `byte` | x argument
y | `byte` | y argument
direction | `byte` | direction argument
type | `byte` | type argument
visible | `boolean` | visible argument

---

### Public Properties for [`MapCursor`](MapCursor.md)

##### <a id='y'></a>public  writeonly property __Y__

_Set: Set the Y position of this cursor._

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
y | `byte` | The Y coordinate.


##### <a id='direction'></a>public  writeonly property __Direction__

_Set: Set the direction of this cursor._

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
direction | `byte` | The facing of the cursor, from 0 to 15.


##### <a id='direction'></a>public  readonly property __Direction__

_Get: Get the direction of this cursor._

Get | Description
--- | --- 
`byte` | The facing of the cursor, from 0 to 15.



##### <a id='rawtype'></a>public   property __RawType__
_Deprecated_

_RawType property_

Get | 
--- | 
`byte` |

Set | Type | Description  
--- | --- | --- 
type | `byte` | type argument


##### <a id='type'></a>public   property __Type__

_Type property_

Get | 
--- | 
`Type` |

Set | Type | Description  
--- | --- | --- 
type | `Type` | type argument


##### <a id='value'></a>public  readonly property __Value__
_Deprecated: Magic value_

_Value property_

Get | Description
--- | --- 
`byte` | the value



##### <a id='x'></a>public   property __X__

_Get: Get the X position of this cursor.<br>Set: Set the X position of this cursor._

Get | Description
--- | --- 
`byte` | The X coordinate.

Set | Type | Description  
--- | --- | --- 
x | `byte` | The X coordinate.


##### <a id='y'></a>public  readonly property __Y__

_Get: Get the Y position of this cursor._

Get | Description
--- | --- 
`byte` | The Y coordinate.



##### <a id='visible'></a>public  writeonly property __Visible__

_Set: Set the visibility status of this cursor._

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
visible | `boolean` | True if visible.


---

### Public Methods for [`MapCursor`](MapCursor.md)

##### <a id='byvalue'></a>public static function __byValue__(value)
_Deprecated: Magic value_

_byValue method_

Argument | Type | Description  
--- | --- | --- 
value | `byte` | the value

Returns | Description
--- | --- 
`Type` | the matching type


##### <a id='isvisible'></a>public  function __isVisible__()

_Get the visibility status of this cursor._

Returns | Description
--- | --- 
`boolean` | True if visible, false otherwise.


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

