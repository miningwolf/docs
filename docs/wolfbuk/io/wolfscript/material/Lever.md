## Lever __class__

>io.wolfscript.material.Lever
>Extends [`SimpleAttachableMaterialData`](SimpleAttachableMaterialData.md)
>Implements [`Redstone`](Redstone.md)

---

### Class Overview

Represents a lever

Method | Type   
--- | :--- 
new __Lever__() <br> _Lever constructor_ | _constructor_
new __Lever__(Material) <br> _Lever constructor_ | _constructor_
 readonly property __AttachedFace__ <br> _Get: Gets the face that this block is attached on_ | [`BlockFace`](../block/BlockFace.md)
 writeonly property __FacingDirection__ <br> _Set: Sets the direction this lever is pointing in_ | `void`
 writeonly property __Powered__ <br> _Set: Set this lever to be powered or not._ | `void`
 function __clone__() <br> _clone method_ | [`Lever`](Lever.md)
 function __isPowered__() <br> _Gets the current state of this Material, indicating if it's powered or_ | `boolean`
 function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`SimpleAttachableMaterialData`](SimpleAttachableMaterialData.md)__ |
new __SimpleAttachableMaterialData__(type, direction) <br> _SimpleAttachableMaterialData constructor_ | _constructor_
new __SimpleAttachableMaterialData__(type, direction) <br> _SimpleAttachableMaterialData constructor_ | _constructor_
new __SimpleAttachableMaterialData__(type) <br> _SimpleAttachableMaterialData constructor_ | _constructor_
 readonly property __Facing__ <br> _Facing property_ | [`BlockFace`](../block/BlockFace.md)
 function __clone__() <br> _clone method_ | [`SimpleAttachableMaterialData`](SimpleAttachableMaterialData.md)
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

### Public Constructors for [`Lever`](Lever.md)

##### <a id='lever'></a>new __Lever__() 

_Lever constructor_


##### <a id='lever'></a>new __Lever__(int) 
_Deprecated: Magic value_

_Lever constructor_

Argument | Type | Description  
--- | --- | --- 
int | `final` | int argument

##### <a id='lever'></a>new __Lever__(Material) 

_Lever constructor_

Argument | Type | Description  
--- | --- | --- 
Material | `final` | Material argument

##### <a id='lever'></a>new __Lever__(int, byte) 
_Deprecated: Magic value_

_Lever constructor_

Argument | Type | Description  
--- | --- | --- 
int | `final` | int argument
byte | `final` | byte argument

##### <a id='lever'></a>new __Lever__(Material, byte) 
_Deprecated: Magic value_

_Lever constructor_

Argument | Type | Description  
--- | --- | --- 
Material | `final` | Material argument
byte | `final` | byte argument

---

### Public Properties for [`Lever`](Lever.md)

##### <a id='attachedface'></a>public  readonly property __AttachedFace__

_Get: Gets the face that this block is attached on_

Get | Description
--- | --- 
[`BlockFace`](../block/BlockFace.md) | BlockFace attached to



##### <a id='facingdirection'></a>public  writeonly property __FacingDirection__

_Set: Sets the direction this lever is pointing in_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
face | [`BlockFace`](../block/BlockFace.md) | face argument


##### <a id='powered'></a>public  writeonly property __Powered__

_Set: Set this lever to be powered or not._

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
isPowered | `boolean` | whether the lever should be powered or not


---

### Public Methods for [`Lever`](Lever.md)

##### <a id='clone'></a>public  function __clone__()

_clone method_

Returns | 
--- | 
[`Lever`](Lever.md) |


##### <a id='ispowered'></a>public  function __isPowered__()

_Gets the current state of this Material, indicating if it's powered or unpowered_

Returns | Description
--- | --- 
`boolean` | true if powered, otherwise false


##### <a id='tostring'></a>public  function __toString__()

_toString method_

Returns | 
--- | 
`String` |


---
### Public Constructors for [`SimpleAttachableMaterialData`](SimpleAttachableMaterialData.md)

##### <a id='simpleattachablematerialdata'></a>new __SimpleAttachableMaterialData__(type) 
_Deprecated: Magic value_

_SimpleAttachableMaterialData constructor_

Argument | Type | Description  
--- | --- | --- 
type | `int` | the raw type id

##### <a id='simpleattachablematerialdata'></a>new __SimpleAttachableMaterialData__(type, direction) 

_SimpleAttachableMaterialData constructor_

Argument | Type | Description  
--- | --- | --- 
type | `int` | type argument
direction | [`BlockFace`](../block/BlockFace.md) | direction argument

##### <a id='simpleattachablematerialdata'></a>new __SimpleAttachableMaterialData__(type, direction) 

_SimpleAttachableMaterialData constructor_

Argument | Type | Description  
--- | --- | --- 
type | [`Material`](../Material.md) | type argument
direction | [`BlockFace`](../block/BlockFace.md) | direction argument

##### <a id='simpleattachablematerialdata'></a>new __SimpleAttachableMaterialData__(type) 

_SimpleAttachableMaterialData constructor_

Argument | Type | Description  
--- | --- | --- 
type | [`Material`](../Material.md) | type argument

##### <a id='simpleattachablematerialdata'></a>new __SimpleAttachableMaterialData__(type, data) 
_Deprecated: Magic value_

_SimpleAttachableMaterialData constructor_

Argument | Type | Description  
--- | --- | --- 
type | `int` | the raw type id
data | `byte` | the raw data value

##### <a id='simpleattachablematerialdata'></a>new __SimpleAttachableMaterialData__(type, data) 
_Deprecated: Magic value_

_SimpleAttachableMaterialData constructor_

Argument | Type | Description  
--- | --- | --- 
type | [`Material`](../Material.md) | the type
data | `byte` | the raw data value

---

### Public Properties for [`SimpleAttachableMaterialData`](SimpleAttachableMaterialData.md)

##### <a id='facing'></a>public  readonly property __Facing__

_Facing property_

Get | 
--- | 
[`BlockFace`](../block/BlockFace.md) |



---

### Public Methods for [`SimpleAttachableMaterialData`](SimpleAttachableMaterialData.md)

##### <a id='clone'></a>public  function __clone__()

_clone method_

Returns | 
--- | 
[`SimpleAttachableMaterialData`](SimpleAttachableMaterialData.md) |


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


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

