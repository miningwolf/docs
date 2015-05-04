## Vine __class__

>io.wolfscript.material.Vine
>Extends [`MaterialData`](MaterialData.md)

---

### Class Overview

Represents a vine

Method | Type   
--- | :--- 
new __Vine__() <br> _Vine constructor_ | _constructor_
new __Vine__() <br> _Vine constructor_ | _constructor_
new __Vine__() <br> _Vine constructor_ | _constructor_
 function __clone__() <br> _clone method_ | [`Vine`](Vine.md)
 function __isOnFace__(face) <br> _Check if the vine is attached to the specified face of an adjacent_ | `boolean`
 function __putOnFace__(face) <br> _Attach the vine to the specified face of an adjacent block._ | `void`
 function __removeFromFace__(face) <br> _Detach the vine from the specified face of an adjacent block._ | `void`
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

### Public Constructors for [`Vine`](Vine.md)

##### <a id='vine'></a>new __Vine__() 

_Vine constructor_


##### <a id='vine'></a>new __Vine__(type, data) 
_Deprecated: Magic value_

_Vine constructor_

Argument | Type | Description  
--- | --- | --- 
type | `int` | the raw type id
data | `byte` | the raw data value

##### <a id='vine'></a>new __Vine__(data) 
_Deprecated: Magic value_

_Vine constructor_

Argument | Type | Description  
--- | --- | --- 
data | `byte` | the raw data value

##### <a id='vine'></a>new __Vine__() 

_Vine constructor_


##### <a id='vine'></a>new __Vine__() 

_Vine constructor_


---

### Public Methods for [`Vine`](Vine.md)

##### <a id='clone'></a>public  function __clone__()

_clone method_

Returns | 
--- | 
[`Vine`](Vine.md) |


##### <a id='isonface'></a>public  function __isOnFace__(face)

_Check if the vine is attached to the specified face of an adjacent block. You can check two faces at once by passing e.g. `BlockFace#NORTH_EAST`._

Argument | Type | Description  
--- | --- | --- 
face | [`BlockFace`](../block/BlockFace.md) | The face to check.

Returns | Description
--- | --- 
`boolean` | Whether it is attached to that face.


##### <a id='putonface'></a>public  function __putOnFace__(face)

_Attach the vine to the specified face of an adjacent block._

Argument | Type | Description  
--- | --- | --- 
face | [`BlockFace`](../block/BlockFace.md) | The face to attach.

Returns | 
--- | 
`void` |


##### <a id='removefromface'></a>public  function __removeFromFace__(face)

_Detach the vine from the specified face of an adjacent block._

Argument | Type | Description  
--- | --- | --- 
face | [`BlockFace`](../block/BlockFace.md) | The face to detach.

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


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

