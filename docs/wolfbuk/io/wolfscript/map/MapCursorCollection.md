## MapCursorCollection __class__

>io.wolfscript.map.MapCursorCollection

---

### Class Overview

Represents all the map cursors on a [`MapCanvas`](MapCanvas.md). Like MapCanvas, a MapCursorCollection is linked to a specific [`MapRenderer`](MapRenderer.md).

Method | Type   
--- | :--- 



---


### Public Methods for [`MapCursorCollection`](MapCursorCollection.md)

##### <a id='addcursor'></a>public  function __addCursor__(x, y, direction, type, visible)
_Deprecated: Magic value /
    @Deprecated
    public MapCursor addCursor(int x, int y, byte direction, byte type) {
        return addCursor(x, y, direction, type, true);
    }

    /** Add a cursor to the collection. Magic value_

_Get the amount of cursors in this collection._

Argument | Type | Description  
--- | --- | --- 
x | `int` | The x coordinate, from -128 to 127.
y | `int` | The y coordinate, from -128 to 127.
direction | `byte` | The facing of the cursor, from 0 to 15.
type | `byte` | The type (color/style) of the map cursor.
visible | `boolean` | Whether the cursor is visible.

Returns | Description
--- | --- 
`MapCursor` | The size of this collection. /
    public int size() {
        return cursors.size();
    }

    /** Get a cursor from this collection.


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

