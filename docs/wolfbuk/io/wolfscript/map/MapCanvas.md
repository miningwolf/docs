## MapCanvas __interface__

>io.wolfscript.map.MapCanvas

---

### Interface Overview

Represents a canvas for drawing to a map. Each canvas is associated with a specific [`MapRenderer`](MapRenderer.md) and represents that renderer's layer on the map.

Method | Type   
--- | :--- 
 function __drawText__(x, y, font, text) <br> _Get the map this canvas is attached to._ | `void`



---


### Public Methods for [`MapCanvas`](MapCanvas.md)

##### <a id='drawtext'></a>public  function __drawText__(x, y, font, text)

_Get the map this canvas is attached to._

Argument | Type | Description  
--- | --- | --- 
x | `int` | The x coordinate, from 0 to 127.
y | `int` | The y coordinate, from 0 to 127.
font | `MapFont` | The font to use.
text | `String` | The formatted text to render.

Returns | Description
--- | --- 
`void` | The MapView this canvas is attached to. /
    public MapView getMapView();

    /** Get the cursor collection associated with this canvas.


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

