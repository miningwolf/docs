## Sign __class__

>io.wolfscript.material.Sign
>Extends [`MaterialData`](MaterialData.md)
>Implements [`Attachable`](Attachable.md)

---

### Class Overview

MaterialData for signs

Method | Type   
--- | :--- 
new __Sign__() <br> _Sign constructor_ | _constructor_
new __Sign__(Material) <br> _Sign constructor_ | _constructor_
 readonly property __AttachedFace__ <br> _Get: Gets the face that this block is attached on_ | [`BlockFace`](../block/BlockFace.md)
 readonly property __Facing__ <br> _Get: Gets the direction that this sign is currently facing_ | [`BlockFace`](../block/BlockFace.md)
 writeonly property __FacingDirection__ <br> _FacingDirection property_ | `void`
 function __clone__() <br> _clone method_ | [`Sign`](Sign.md)
 function __isWallSign__() <br> _Check if this sign is attached to a wall_ | `boolean`
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

### Public Constructors for [`Sign`](Sign.md)

##### <a id='sign'></a>new __Sign__() 

_Sign constructor_


##### <a id='sign'></a>new __Sign__(int) 
_Deprecated: Magic value_

_Sign constructor_

Argument | Type | Description  
--- | --- | --- 
int | `final` | int argument

##### <a id='sign'></a>new __Sign__(Material) 

_Sign constructor_

Argument | Type | Description  
--- | --- | --- 
Material | `final` | Material argument

##### <a id='sign'></a>new __Sign__(int, byte) 
_Deprecated: Magic value_

_Sign constructor_

Argument | Type | Description  
--- | --- | --- 
int | `final` | int argument
byte | `final` | byte argument

##### <a id='sign'></a>new __Sign__(Material, byte) 
_Deprecated: Magic value_

_Sign constructor_

Argument | Type | Description  
--- | --- | --- 
Material | `final` | Material argument
byte | `final` | byte argument

---

### Public Properties for [`Sign`](Sign.md)

##### <a id='attachedface'></a>public  readonly property __AttachedFace__

_Get: Gets the face that this block is attached on_

Get | Description
--- | --- 
[`BlockFace`](../block/BlockFace.md) | BlockFace attached to



##### <a id='facing'></a>public  readonly property __Facing__

_Get: Gets the direction that this sign is currently facing_

Get | Description
--- | --- 
[`BlockFace`](../block/BlockFace.md) | BlockFace indicating where this sign is facing



##### <a id='facingdirection'></a>public  writeonly property __FacingDirection__

_FacingDirection property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
face | [`BlockFace`](../block/BlockFace.md) | face argument


---

### Public Methods for [`Sign`](Sign.md)

##### <a id='clone'></a>public  function __clone__()

_clone method_

Returns | 
--- | 
[`Sign`](Sign.md) |


##### <a id='iswallsign'></a>public  function __isWallSign__()

_Check if this sign is attached to a wall_

Returns | Description
--- | --- 
`boolean` | true if this sign is attached to a wall, false if set on top of a block


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
	

