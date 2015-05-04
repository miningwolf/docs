## MapCursorCollection __class__

>io.wolfscript.map.MapCursorCollection

---

### Class Overview

Represents all the map cursors on a [`MapCanvas`](MapCanvas.md). Like MapCanvas, a MapCursorCollection is linked to a specific [`MapRenderer`](MapRenderer.md).

Method | Type   
--- | :--- 
 function __addCursor__(cursor) <br> _Add a cursor to the collection._ | [`MapCursor`](MapCursor.md)
 function __addCursor__(x, y, direction) <br> _Add a cursor to the collection._ | [`MapCursor`](MapCursor.md)
 function __getCursor__(index) <br> _Get a cursor from this collection._ | [`MapCursor`](MapCursor.md)
 function __removeCursor__(cursor) <br> _Remove a cursor from the collection._ | `boolean`
 function __size__() <br> _Get the amount of cursors in this collection._ | `int`



---


### Public Methods for [`MapCursorCollection`](MapCursorCollection.md)

##### <a id='addcursor'></a>public  function __addCursor__(cursor)

_Add a cursor to the collection._

Argument | Type | Description  
--- | --- | --- 
cursor | [`MapCursor`](MapCursor.md) | The MapCursor to add.

Returns | Description
--- | --- 
[`MapCursor`](MapCursor.md) | The MapCursor that was passed.


##### <a id='addcursor'></a>public  function __addCursor__(x, y, direction)

_Add a cursor to the collection._

Argument | Type | Description  
--- | --- | --- 
x | `int` | The x coordinate, from -128 to 127.
y | `int` | The y coordinate, from -128 to 127.
direction | `byte` | The facing of the cursor, from 0 to 15.

Returns | Description
--- | --- 
[`MapCursor`](MapCursor.md) | The newly added MapCursor.


##### <a id='addcursor'></a>public  function __addCursor__(x, y, direction, type)
_Deprecated: Magic value_

_Add a cursor to the collection._

Argument | Type | Description  
--- | --- | --- 
x | `int` | The x coordinate, from -128 to 127.
y | `int` | The y coordinate, from -128 to 127.
direction | `byte` | The facing of the cursor, from 0 to 15.
type | `byte` | The type (color/style) of the map cursor.

Returns | Description
--- | --- 
[`MapCursor`](MapCursor.md) | The newly added MapCursor.


##### <a id='addcursor'></a>public  function __addCursor__(x, y, direction, type, visible)
_Deprecated: Magic value_

_Add a cursor to the collection._

Argument | Type | Description  
--- | --- | --- 
x | `int` | The x coordinate, from -128 to 127.
y | `int` | The y coordinate, from -128 to 127.
direction | `byte` | The facing of the cursor, from 0 to 15.
type | `byte` | The type (color/style) of the map cursor.
visible | `boolean` | Whether the cursor is visible.

Returns | Description
--- | --- 
[`MapCursor`](MapCursor.md) | The newly added MapCursor.


##### <a id='getcursor'></a>public  function __getCursor__(index)

_Get a cursor from this collection._

Argument | Type | Description  
--- | --- | --- 
index | `int` | The index of the cursor.

Returns | Description
--- | --- 
[`MapCursor`](MapCursor.md) | The MapCursor.


##### <a id='removecursor'></a>public  function __removeCursor__(cursor)

_Remove a cursor from the collection._

Argument | Type | Description  
--- | --- | --- 
cursor | [`MapCursor`](MapCursor.md) | The MapCursor to remove.

Returns | Description
--- | --- 
`boolean` | Whether the cursor was removed successfully.


##### <a id='size'></a>public  function __size__()

_Get the amount of cursors in this collection._

Returns | Description
--- | --- 
`int` | The size of this collection.


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

