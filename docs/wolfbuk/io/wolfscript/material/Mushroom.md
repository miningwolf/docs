## Mushroom __class__

>io.wolfscript.material.Mushroom
>Extends [`MaterialData`](MaterialData.md)

---

### Class Overview

Represents a huge mushroom block

Method | Type   
--- | :--- 
new __Mushroom__(shroom) <br> _Mushroom constructor_ | _constructor_
 readonly property __PaintedFaces__ <br> _PaintedFaces property_ | `Set<BlockFace>`
 function __clone__() <br> _clone method_ | [`Mushroom`](Mushroom.md)
 function __isFacePainted__(face) <br> _Checks whether a face of the block is painted._ | `boolean`
 function __isStem__() <br> _isStem method_ | `boolean`
 function __setFacePainted__(face, painted) <br> _Set a face of the block to be painted or not. Note that due to the_ | `void`
 function __setStem__() <br> _Sets this to be a mushroom stem._ | `void`
 function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`MaterialData`](MaterialData.md)__ |
new __MaterialData__(Material) <br> _MaterialData constructor_ | _constructor_
 readonly property __ItemType__ <br> _Get: Gets the Material that this MaterialData represents_ | [`Material`](../Material.md)
 function __clone__() <br> _clone method_ | [`MaterialData`](MaterialData.md)
 function __equals__(obj) <br> _equals method_ | `boolean`
 function __hashCode__() <br> _hashCode method_ | `int`
 function __toItemStack__() <br> _Creates a new ItemStack based on this MaterialData_ | `ItemStack`
 function __toItemStack__(amount) <br> _Creates a new ItemStack based on this MaterialData_ | `ItemStack`
 function __toString__() <br> _toString method_ | `String`





---

### Public Constructors for [`Mushroom`](Mushroom.md)

##### <a id='mushroom'></a>new __Mushroom__(shroom) 

_Mushroom constructor_

Argument | Type | Description  
--- | --- | --- 
shroom | [`Material`](../Material.md) | shroom argument

##### <a id='mushroom'></a>new __Mushroom__(shroom, data) 
_Deprecated: Magic value_

_Mushroom constructor_

Argument | Type | Description  
--- | --- | --- 
shroom | [`Material`](../Material.md) | the type
data | `byte` | the raw data value

##### <a id='mushroom'></a>new __Mushroom__(type, data) 
_Deprecated: Magic value_

_Mushroom constructor_

Argument | Type | Description  
--- | --- | --- 
type | `int` | the raw type id
data | `byte` | the raw data value

---

### Public Properties for [`Mushroom`](Mushroom.md)

##### <a id='paintedfaces'></a>public  readonly property __PaintedFaces__

_PaintedFaces property_

Get | Description
--- | --- 
`Set<BlockFace>` | A set of all faces that are currently painted (an empty set if it is a stem)



---

### Public Methods for [`Mushroom`](Mushroom.md)

##### <a id='clone'></a>public  function __clone__()

_clone method_

Returns | 
--- | 
[`Mushroom`](Mushroom.md) |


##### <a id='isfacepainted'></a>public  function __isFacePainted__(face)

_Checks whether a face of the block is painted._

Argument | Type | Description  
--- | --- | --- 
face | [`BlockFace`](../block/BlockFace.md) | The face to check.

Returns | Description
--- | --- 
`boolean` | True if it is painted.


##### <a id='isstem'></a>public  function __isStem__()

_isStem method_

Returns | Description
--- | --- 
`boolean` | Whether this is a mushroom stem.


##### <a id='setfacepainted'></a>public  function __setFacePainted__(face, painted)

_Set a face of the block to be painted or not. Note that due to the nature of how the data is stored, setting a face painted or not is not guaranteed to leave the other faces unchanged._

Argument | Type | Description  
--- | --- | --- 
face | [`BlockFace`](../block/BlockFace.md) | The face to paint or unpaint.
painted | `boolean` | True if you want to paint it, false if you want the pores to show.

Returns | 
--- | 
`void` |


##### <a id='setstem'></a>public  function __setStem__()

_Sets this to be a mushroom stem._

Returns | 
--- | 
`void` |


##### <a id='tostring'></a>public  function __toString__()

_toString method_

Returns | 
--- | 
`String` |


---
### Public Constructors for [`MaterialData`](MaterialData.md)

##### <a id='materialdata'></a>new __MaterialData__(int) 
_Deprecated: Magic value_

_MaterialData constructor_

Argument | Type | Description  
--- | --- | --- 
int | `final` | int argument

##### <a id='materialdata'></a>new __MaterialData__(Material) 

_MaterialData constructor_

Argument | Type | Description  
--- | --- | --- 
Material | `final` | Material argument

##### <a id='materialdata'></a>new __MaterialData__(int, byte) 
_Deprecated: Magic value_

_MaterialData constructor_

Argument | Type | Description  
--- | --- | --- 
int | `final` | int argument
byte | `final` | byte argument

##### <a id='materialdata'></a>new __MaterialData__(Material, byte) 
_Deprecated: Magic value_

_MaterialData constructor_

Argument | Type | Description  
--- | --- | --- 
Material | `final` | Material argument
byte | `final` | byte argument

---

### Public Properties for [`MaterialData`](MaterialData.md)

##### <a id='data'></a>public   property __Data__
_Deprecated: Magic value_

_Get: Gets the raw data in this material<br>Set: Sets the raw data of this material_

Get | 
--- | 
`byte` |

Set | Type | Description  
--- | --- | --- 
data | `byte` | New raw data


##### <a id='itemtype'></a>public  readonly property __ItemType__

_Get: Gets the Material that this MaterialData represents_

Get | Description
--- | --- 
[`Material`](../Material.md) | Material represented by this MaterialData



##### <a id='itemtypeid'></a>public  readonly property __ItemTypeId__
_Deprecated: Magic value_

_Get: Gets the Material Id that this MaterialData represents_

Get | Description
--- | --- 
`int` | Material Id represented by this MaterialData



---

### Public Methods for [`MaterialData`](MaterialData.md)

##### <a id='clone'></a>public  function __clone__()

_clone method_

Returns | 
--- | 
[`MaterialData`](MaterialData.md) |


##### <a id='equals'></a>public  function __equals__(obj)

_equals method_

Argument | Type | Description  
--- | --- | --- 
obj | `Object` | obj argument

Returns | 
--- | 
`boolean` |


##### <a id='hashcode'></a>public  function __hashCode__()

_hashCode method_

Returns | 
--- | 
`int` |


##### <a id='toitemstack'></a>public  function __toItemStack__()

_Creates a new ItemStack based on this MaterialData_

Returns | Description
--- | --- 
`ItemStack` | New ItemStack containing a copy of this MaterialData


##### <a id='toitemstack'></a>public  function __toItemStack__(amount)

_Creates a new ItemStack based on this MaterialData_

Argument | Type | Description  
--- | --- | --- 
amount | `int` | The stack size of the new stack

Returns | Description
--- | --- 
`ItemStack` | New ItemStack containing a copy of this MaterialData


##### <a id='tostring'></a>public  function __toString__()

_toString method_

Returns | 
--- | 
`String` |


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

