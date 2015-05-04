## MapCanvas __interface__

>io.wolfscript.map.MapCanvas

---

### Interface Overview

Represents a canvas for drawing to a map. Each canvas is associated with a specific [`MapRenderer`](MapRenderer.md) and represents that renderer's layer on the map.

Method | Type   
--- | :--- 
  property __Cursors__ <br> _Get: Get the cursor collection associated with this canvas.<br>Set: Set the cursor collection associated with this canvas. This does not_ | [`MapCursorCollection`](MapCursorCollection.md)
 readonly property __MapView__ <br> _Get: Get the map this canvas is attached to._ | [`MapView`](MapView.md)
 function __drawImage__(x, y, image) <br> _Draw an image to the map. The image will be clipped if necessary._ | `void`
 function __drawText__(x, y, font, text) <br> _Render text to the map using fancy formatting. Newline (\n) characters_ | `void`
 function __getBasePixel__(x, y) <br> _Get a pixel from the layers below this canvas._ | `byte`
 function __getPixel__(x, y) <br> _Get a pixel from the canvas._ | `byte`
 function __setPixel__(x, y, color) <br> _Draw a pixel to the canvas._ | `void`



---


### Public Properties for [`MapCanvas`](MapCanvas.md)

##### <a id='cursors'></a>public   property __Cursors__

_Get: Get the cursor collection associated with this canvas.<br>Set: Set the cursor collection associated with this canvas. This does not usually need to be called since a MapCursorCollection is already provided._

Get | Description
--- | --- 
[`MapCursorCollection`](MapCursorCollection.md) | The MapCursorCollection associated with this canvas.

Set | Type | Description  
--- | --- | --- 
cursors | [`MapCursorCollection`](MapCursorCollection.md) | The MapCursorCollection to associate with this canvas.


##### <a id='mapview'></a>public  readonly property __MapView__

_Get: Get the map this canvas is attached to._

Get | Description
--- | --- 
[`MapView`](MapView.md) | The MapView this canvas is attached to.



---

### Public Methods for [`MapCanvas`](MapCanvas.md)

##### <a id='drawimage'></a>public  function __drawImage__(x, y, image)

_Draw an image to the map. The image will be clipped if necessary._

Argument | Type | Description  
--- | --- | --- 
x | `int` | The x coordinate of the image.
y | `int` | The y coordinate of the image.
image | `Image` | The Image to draw.

Returns | 
--- | 
`void` |


##### <a id='drawtext'></a>public  function __drawText__(x, y, font, text)

_Render text to the map using fancy formatting. Newline (\n) characters will move down one line and return to the original column, and the text color can be changed using sequences such as "§12;", replacing 12 with the palette index of the color (see [`MapPalette`](MapPalette.md))._

Argument | Type | Description  
--- | --- | --- 
x | `int` | The column to start rendering on.
y | `int` | The row to start rendering on.
font | [`MapFont`](MapFont.md) | The font to use.
text | `String` | The formatted text to render.

Returns | 
--- | 
`void` |


##### <a id='getbasepixel'></a>public  function __getBasePixel__(x, y)

_Get a pixel from the layers below this canvas._

Argument | Type | Description  
--- | --- | --- 
x | `int` | The x coordinate, from 0 to 127.
y | `int` | The y coordinate, from 0 to 127.

Returns | Description
--- | --- 
`byte` | The color. See [`MapPalette`](MapPalette.md).


##### <a id='getpixel'></a>public  function __getPixel__(x, y)

_Get a pixel from the canvas._

Argument | Type | Description  
--- | --- | --- 
x | `int` | The x coordinate, from 0 to 127.
y | `int` | The y coordinate, from 0 to 127.

Returns | Description
--- | --- 
`byte` | The color. See [`MapPalette`](MapPalette.md).


##### <a id='setpixel'></a>public  function __setPixel__(x, y, color)

_Draw a pixel to the canvas._

Argument | Type | Description  
--- | --- | --- 
x | `int` | The x coordinate, from 0 to 127.
y | `int` | The y coordinate, from 0 to 127.
color | `byte` | The color. See [`MapPalette`](MapPalette.md).

Returns | 
--- | 
`void` |


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

