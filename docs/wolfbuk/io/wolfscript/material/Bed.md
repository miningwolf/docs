## Bed __class__

>io.wolfscript.material.Bed
>Extends [`MaterialData`](MaterialData.md)
>Implements [`Directional`](Directional.md)

---

### Class Overview

Represents a bed.

Method | Type   
--- | :--- 
new __Bed__() <br> _Default constructor for a bed._ | _constructor_
new __Bed__(direction) <br> _Instantiate a bed facing in a particular direction._ | _constructor_
new __Bed__(Material) <br> _Bed constructor_ | _constructor_
 readonly property __Facing__ <br> _Get: Get the direction that this bed's head is facing toward_ | [`BlockFace`](../block/BlockFace.md)
 writeonly property __FacingDirection__ <br> _Set: Set which direction the head of the bed is facing. Note that this will_ | `void`
 writeonly property __HeadOfBed__ <br> _Set: Configure this to be either the head or the foot of the bed_ | `void`
 function __clone__() <br> _clone method_ | [`Bed`](Bed.md)
 function __isHeadOfBed__() <br> _Determine if this block represents the head of the bed_ | `boolean`
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

### Public Constructors for [`Bed`](Bed.md)

##### <a id='bed'></a>new __Bed__() 

_Default constructor for a bed._


##### <a id='bed'></a>new __Bed__(direction) 

_Instantiate a bed facing in a particular direction._

Argument | Type | Description  
--- | --- | --- 
direction | [`BlockFace`](../block/BlockFace.md) | the direction the bed's head is facing

##### <a id='bed'></a>new __Bed__(int) 
_Deprecated: Magic value_

_Bed constructor_

Argument | Type | Description  
--- | --- | --- 
int | `final` | int argument

##### <a id='bed'></a>new __Bed__(Material) 

_Bed constructor_

Argument | Type | Description  
--- | --- | --- 
Material | `final` | Material argument

##### <a id='bed'></a>new __Bed__(int, byte) 
_Deprecated: Magic value_

_Bed constructor_

Argument | Type | Description  
--- | --- | --- 
int | `final` | int argument
byte | `final` | byte argument

##### <a id='bed'></a>new __Bed__(Material, byte) 
_Deprecated: Magic value_

_Bed constructor_

Argument | Type | Description  
--- | --- | --- 
Material | `final` | Material argument
byte | `final` | byte argument

---

### Public Properties for [`Bed`](Bed.md)

##### <a id='facing'></a>public  readonly property __Facing__

_Get: Get the direction that this bed's head is facing toward_

Get | Description
--- | --- 
[`BlockFace`](../block/BlockFace.md) | the direction the head of the bed is facing



##### <a id='facingdirection'></a>public  writeonly property __FacingDirection__

_Set: Set which direction the head of the bed is facing. Note that this will only affect one of the two blocks the bed is made of._

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
face | [`BlockFace`](../block/BlockFace.md) | face argument


##### <a id='headofbed'></a>public  writeonly property __HeadOfBed__

_Set: Configure this to be either the head or the foot of the bed_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
isHeadOfBed | `boolean` | True to make it the head.


---

### Public Methods for [`Bed`](Bed.md)

##### <a id='clone'></a>public  function __clone__()

_clone method_

Returns | 
--- | 
[`Bed`](Bed.md) |


##### <a id='isheadofbed'></a>public  function __isHeadOfBed__()

_Determine if this block represents the head of the bed_

Returns | Description
--- | --- 
`boolean` | true if this is the head of the bed, false if it is the foot


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
	

