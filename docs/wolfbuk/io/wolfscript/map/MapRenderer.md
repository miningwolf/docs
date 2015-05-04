## MapRenderer __class__

>io.wolfscript.map.MapRenderer

---

### Class Overview

Represents a renderer for a map.

Method | Type   
--- | :--- 
new __MapRenderer__() <br> _Initialize the map renderer base to be non-contextual. See {@link_ | _constructor_
new __MapRenderer__(contextual) <br> _Initialize the map renderer base with the given contextual status._ | _constructor_
 function __initialize__(map) <br> _Initialize this MapRenderer for the given map._ | `void`
 function __isContextual__() <br> _isContextual method_ | `boolean`
 function __render__(map, canvas, player) <br> _render method_ | `void`



---

### Public Constructors for [`MapRenderer`](MapRenderer.md)

##### <a id='maprenderer'></a>new __MapRenderer__() 

_Initialize the map renderer base to be non-contextual. See `#isContextual()`._


##### <a id='maprenderer'></a>new __MapRenderer__(contextual) 

_Initialize the map renderer base with the given contextual status._

Argument | Type | Description  
--- | --- | --- 
contextual | `boolean` | Whether the renderer is contextual. See `#isContextual()`.

---

### Public Methods for [`MapRenderer`](MapRenderer.md)

##### <a id='initialize'></a>public  function __initialize__(map)

_Initialize this MapRenderer for the given map._

Argument | Type | Description  
--- | --- | --- 
map | [`MapView`](MapView.md) | The MapView being initialized.

Returns | 
--- | 
`void` |


##### <a id='iscontextual'></a>public  function __isContextual__()

_isContextual method_

Returns | 
--- | 
`boolean` |


##### <a id='render'></a>public  function __render__(map, canvas, player)

_render method_

Argument | Type | Description  
--- | --- | --- 
map | [`MapView`](MapView.md) | map argument
canvas | [`MapCanvas`](MapCanvas.md) | canvas argument
player | `Player` | player argument

Returns | 
--- | 
`void` |


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

