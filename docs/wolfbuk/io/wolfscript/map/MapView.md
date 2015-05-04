## MapView __interface__

>io.wolfscript.map.MapView

---

### Interface Overview

Represents a map item.

Method | Type   
--- | :--- 
  property __CenterZ__ <br> _Get: Get the center Z position of this map.<br>Set: Set the center Z position of this map._ | `int`
  property __Scale__ <br> _Get: Get the scale of this map.<br>Set: Set the scale of this map._ | `Scale`
  property __CenterX__ <br> _Get: Get the center X position of this map.<br>Set: Set the center X position of this map._ | `int`
 readonly property __Renderers__ <br> _Get: Get a list of MapRenderers currently in effect._ | `List<MapRenderer>`
  property __World__ <br> _Get: Get the world that this map is associated with. Primarily used by the<br>Set: Set the world that this map is associated with. The world is used by_ | `World`
 function __removeRenderer__(renderer) <br> _Remove a renderer from this map._ | `boolean`
 function __isVirtual__() <br> _Check whether this map is virtual. A map is virtual if its lowermost_ | `boolean`
 function __addRenderer__(renderer) <br> _Add a renderer to this map._ | `void`



---


### Public Properties for [`MapView`](MapView.md)

##### <a id='centerz'></a>public   property __CenterZ__

_Get: Get the center Z position of this map.<br>Set: Set the center Z position of this map._

Get | Description
--- | --- 
`int` | The center Z position.

Set | Type | Description  
--- | --- | --- 
z | `int` | The center Z position.


##### <a id='id'></a>public  readonly property __Id__
_Deprecated: Magic value_

_Get: Get the ID of this map item. Corresponds to the damage value of a map in an inventory._

Get | Description
--- | --- 
`short` | The ID of the map.



##### <a id='scale'></a>public   property __Scale__

_Get: Get the scale of this map.<br>Set: Set the scale of this map._

Get | Description
--- | --- 
`Scale` | The scale of the map.

Set | Type | Description  
--- | --- | --- 
scale | `Scale` | The scale to set.


##### <a id='centerx'></a>public   property __CenterX__

_Get: Get the center X position of this map.<br>Set: Set the center X position of this map._

Get | Description
--- | --- 
`int` | The center X position.

Set | Type | Description  
--- | --- | --- 
x | `int` | The center X position.


##### <a id='value'></a>public  readonly property __Value__
_Deprecated: Magic value_

_Get: Get the raw value of this scale level._

Get | Description
--- | --- 
`byte` | The scale value



##### <a id='renderers'></a>public  readonly property __Renderers__

_Get: Get a list of MapRenderers currently in effect._

Get | Description
--- | --- 
`List<MapRenderer>` | A `List<MapRenderer>` containing each map renderer.



##### <a id='world'></a>public   property __World__

_Get: Get the world that this map is associated with. Primarily used by the internal renderer, but may be used by external renderers. May return null if the world the map is associated with is not loaded.<br>Set: Set the world that this map is associated with. The world is used by the internal renderer, and may also be used by external renderers._

Get | Description
--- | --- 
`World` | The World this map is associated with.

Set | Type | Description  
--- | --- | --- 
world | `World` | The World to associate this map with.


---

### Public Methods for [`MapView`](MapView.md)

##### <a id='removerenderer'></a>public  function __removeRenderer__(renderer)

_Remove a renderer from this map._

Argument | Type | Description  
--- | --- | --- 
renderer | [`MapRenderer`](MapRenderer.md) | The MapRenderer to remove.

Returns | Description
--- | --- 
`boolean` | True if the renderer was successfully removed.


##### <a id='isvirtual'></a>public  function __isVirtual__()

_Check whether this map is virtual. A map is virtual if its lowermost MapRenderer is plugin-provided._

Returns | Description
--- | --- 
`boolean` | Whether the map is virtual.


##### <a id='addrenderer'></a>public  function __addRenderer__(renderer)

_Add a renderer to this map._

Argument | Type | Description  
--- | --- | --- 
renderer | [`MapRenderer`](MapRenderer.md) | The MapRenderer to add.

Returns | 
--- | 
`void` |


##### <a id='valueof'></a>public static function __valueOf__(value)
_Deprecated: Magic value_

_An enum representing all possible scales a map can be set to. /
    public static enum Scale {
        CLOSEST(0),
        CLOSE(1),
        NORMAL(2),
        FAR(3),
        FARTHEST(4);

        private byte value;

        private Scale(int value) {
            this.value = (byte) value;
        }

        /** Get the scale given the raw value._

Argument | Type | Description  
--- | --- | --- 
value | `byte` | The raw scale

Returns | Description
--- | --- 
`Scale` | The enum scale, or null for an invalid input


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

