## Stairs __class__

>io.wolfscript.material.Stairs
>Extends [`MaterialData`](MaterialData.md)
>Implements [`Directional`](Directional.md)

---

### Class Overview

Represents stairs.

Method | Type   
--- | :--- 
new __Stairs__(Material) <br> _Stairs constructor_ | _constructor_
 readonly property __AscendingDirection__ <br> _AscendingDirection property_ | [`BlockFace`](../block/BlockFace.md)
 readonly property __DescendingDirection__ <br> _DescendingDirection property_ | [`BlockFace`](../block/BlockFace.md)
 readonly property __Facing__ <br> _Facing property_ | [`BlockFace`](../block/BlockFace.md)
 writeonly property __FacingDirection__ <br> _Set: Set the direction the stair part of the block is facing_ | `void`
 writeonly property __Inverted__ <br> _Set: Set step inverted state_ | `void`
 function __clone__() <br> _clone method_ | [`Stairs`](Stairs.md)
 function __isInverted__() <br> _Test if step is inverted_ | `boolean`
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

### Public Constructors for [`Stairs`](Stairs.md)

##### <a id='stairs'></a>new __Stairs__(int) 
_Deprecated: Magic value_

_Stairs constructor_

Argument | Type | Description  
--- | --- | --- 
int | `final` | int argument

##### <a id='stairs'></a>new __Stairs__(Material) 

_Stairs constructor_

Argument | Type | Description  
--- | --- | --- 
Material | `final` | Material argument

##### <a id='stairs'></a>new __Stairs__(int, byte) 
_Deprecated: Magic value_

_Stairs constructor_

Argument | Type | Description  
--- | --- | --- 
int | `final` | int argument
byte | `final` | byte argument

##### <a id='stairs'></a>new __Stairs__(Material, byte) 
_Deprecated: Magic value_

_Stairs constructor_

Argument | Type | Description  
--- | --- | --- 
Material | `final` | Material argument
byte | `final` | byte argument

---

### Public Properties for [`Stairs`](Stairs.md)

##### <a id='ascendingdirection'></a>public  readonly property __AscendingDirection__

_AscendingDirection property_

Get | Description
--- | --- 
[`BlockFace`](../block/BlockFace.md) | the direction the stairs ascend towards



##### <a id='descendingdirection'></a>public  readonly property __DescendingDirection__

_DescendingDirection property_

Get | Description
--- | --- 
[`BlockFace`](../block/BlockFace.md) | the direction the stairs descend towards



##### <a id='facing'></a>public  readonly property __Facing__

_Facing property_

Get | Description
--- | --- 
[`BlockFace`](../block/BlockFace.md) | the direction the stair part of the block is facing



##### <a id='facingdirection'></a>public  writeonly property __FacingDirection__

_Set: Set the direction the stair part of the block is facing_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
face | [`BlockFace`](../block/BlockFace.md) | face argument


##### <a id='inverted'></a>public  writeonly property __Inverted__

_Set: Set step inverted state_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
inv | `boolean` | - true if step is inverted (top half), false if step is normal (bottom half)


---

### Public Methods for [`Stairs`](Stairs.md)

##### <a id='clone'></a>public  function __clone__()

_clone method_

Returns | 
--- | 
[`Stairs`](Stairs.md) |


##### <a id='isinverted'></a>public  function __isInverted__()

_Test if step is inverted_

Returns | Description
--- | --- 
`boolean` | true if inverted (top half), false if normal (bottom half)


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


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

