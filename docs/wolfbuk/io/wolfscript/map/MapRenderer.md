## MapRenderer __class__

>io.wolfscript.map.MapRenderer

---

### Class Overview

Represents a renderer for a map.

Method | Type   
--- | :--- 
 function __initialize__(map) <br> _Initialize the map renderer base to be non-contextual. See {@link_ | `void`
 function __render__(map, canvas, player) <br> _render method_ | `void`



---


### Public Methods for [`MapRenderer`](MapRenderer.md)

##### <a id='initialize'></a>public  function __initialize__(map)

_Initialize the map renderer base to be non-contextual. See `#isContextual()`. /
    public MapRenderer() {
        this(false);
    }

    /** Initialize the map renderer base with the given contextual status._

Argument | Type | Description  
--- | --- | --- 
map | `MapView` | The MapView being initialized.

Returns | Description
--- | --- 
`void` | True if contextual, false otherwise. /
    final public boolean isContextual() {
        return contextual;
    }

    /** Initialize this MapRenderer for the given map.


##### <a id='render'></a>public  function __render__(map, canvas, player)

_render method_

Argument | Type | Description  
--- | --- | --- 
map | `MapView` | map argument
canvas | [`MapCanvas`](MapCanvas.md) | canvas argument
player | `Player` | player argument

Returns | 
--- | 
`void` |


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

