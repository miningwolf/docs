## Dispenser __class__

>io.wolfscript.material.Dispenser
>Extends [`FurnaceAndDispenser`](FurnaceAndDispenser.md)

---

### Class Overview

Represents a dispenser.

Method | Type   
--- | :--- 
new __Dispenser__() <br> _Dispenser constructor_ | _constructor_
new __Dispenser__(direction) <br> _Dispenser constructor_ | _constructor_
new __Dispenser__(Material) <br> _Dispenser constructor_ | _constructor_
 readonly property __Facing__ <br> _Facing property_ | [`BlockFace`](../block/BlockFace.md)
 writeonly property __FacingDirection__ <br> _FacingDirection property_ | `void`
 function __clone__() <br> _clone method_ | [`Dispenser`](Dispenser.md)
 |
__Inherited items from [`FurnaceAndDispenser`](FurnaceAndDispenser.md)__ |
new __FurnaceAndDispenser__(Material) <br> _FurnaceAndDispenser constructor_ | _constructor_
 function __clone__() <br> _clone method_ | [`FurnaceAndDispenser`](FurnaceAndDispenser.md)
 |
__Inherited items from [`DirectionalContainer`](DirectionalContainer.md)__ |
new __DirectionalContainer__(Material) <br> _DirectionalContainer constructor_ | _constructor_
 readonly property __Facing__ <br> _Facing property_ | [`BlockFace`](../block/BlockFace.md)
 writeonly property __FacingDirection__ <br> _FacingDirection property_ | `void`
 function __clone__() <br> _clone method_ | [`DirectionalContainer`](DirectionalContainer.md)
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

### Public Constructors for [`Dispenser`](Dispenser.md)

##### <a id='dispenser'></a>new __Dispenser__() 

_Dispenser constructor_


##### <a id='dispenser'></a>new __Dispenser__(direction) 

_Dispenser constructor_

Argument | Type | Description  
--- | --- | --- 
direction | [`BlockFace`](../block/BlockFace.md) | direction argument

##### <a id='dispenser'></a>new __Dispenser__(int) 
_Deprecated: Magic value_

_Dispenser constructor_

Argument | Type | Description  
--- | --- | --- 
int | `final` | int argument

##### <a id='dispenser'></a>new __Dispenser__(Material) 

_Dispenser constructor_

Argument | Type | Description  
--- | --- | --- 
Material | `final` | Material argument

##### <a id='dispenser'></a>new __Dispenser__(int, byte) 
_Deprecated: Magic value_

_Dispenser constructor_

Argument | Type | Description  
--- | --- | --- 
int | `final` | int argument
byte | `final` | byte argument

##### <a id='dispenser'></a>new __Dispenser__(Material, byte) 
_Deprecated: Magic value_

_Dispenser constructor_

Argument | Type | Description  
--- | --- | --- 
Material | `final` | Material argument
byte | `final` | byte argument

---

### Public Properties for [`Dispenser`](Dispenser.md)

##### <a id='facing'></a>public  readonly property __Facing__

_Facing property_

Get | 
--- | 
[`BlockFace`](../block/BlockFace.md) |



##### <a id='facingdirection'></a>public  writeonly property __FacingDirection__

_FacingDirection property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
face | [`BlockFace`](../block/BlockFace.md) | face argument


---

### Public Methods for [`Dispenser`](Dispenser.md)

##### <a id='clone'></a>public  function __clone__()

_clone method_

Returns | 
--- | 
[`Dispenser`](Dispenser.md) |


---
### Public Constructors for [`FurnaceAndDispenser`](FurnaceAndDispenser.md)

##### <a id='furnaceanddispenser'></a>new __FurnaceAndDispenser__(int) 
_Deprecated: Magic value_

_FurnaceAndDispenser constructor_

Argument | Type | Description  
--- | --- | --- 
int | `final` | int argument

##### <a id='furnaceanddispenser'></a>new __FurnaceAndDispenser__(Material) 

_FurnaceAndDispenser constructor_

Argument | Type | Description  
--- | --- | --- 
Material | `final` | Material argument

##### <a id='furnaceanddispenser'></a>new __FurnaceAndDispenser__(int, byte) 
_Deprecated: Magic value_

_FurnaceAndDispenser constructor_

Argument | Type | Description  
--- | --- | --- 
int | `final` | int argument
byte | `final` | byte argument

##### <a id='furnaceanddispenser'></a>new __FurnaceAndDispenser__(Material, byte) 
_Deprecated: Magic value_

_FurnaceAndDispenser constructor_

Argument | Type | Description  
--- | --- | --- 
Material | `final` | Material argument
byte | `final` | byte argument

---

### Public Methods for [`FurnaceAndDispenser`](FurnaceAndDispenser.md)

##### <a id='clone'></a>public  function __clone__()

_clone method_

Returns | 
--- | 
[`FurnaceAndDispenser`](FurnaceAndDispenser.md) |


---
### Public Constructors for [`DirectionalContainer`](DirectionalContainer.md)

##### <a id='directionalcontainer'></a>new __DirectionalContainer__(int) 
_Deprecated: Magic value_

_DirectionalContainer constructor_

Argument | Type | Description  
--- | --- | --- 
int | `final` | int argument

##### <a id='directionalcontainer'></a>new __DirectionalContainer__(Material) 

_DirectionalContainer constructor_

Argument | Type | Description  
--- | --- | --- 
Material | `final` | Material argument

##### <a id='directionalcontainer'></a>new __DirectionalContainer__(int, byte) 
_Deprecated: Magic value_

_DirectionalContainer constructor_

Argument | Type | Description  
--- | --- | --- 
int | `final` | int argument
byte | `final` | byte argument

##### <a id='directionalcontainer'></a>new __DirectionalContainer__(Material, byte) 
_Deprecated: Magic value_

_DirectionalContainer constructor_

Argument | Type | Description  
--- | --- | --- 
Material | `final` | Material argument
byte | `final` | byte argument

---

### Public Properties for [`DirectionalContainer`](DirectionalContainer.md)

##### <a id='facing'></a>public  readonly property __Facing__

_Facing property_

Get | 
--- | 
[`BlockFace`](../block/BlockFace.md) |



##### <a id='facingdirection'></a>public  writeonly property __FacingDirection__

_FacingDirection property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
face | [`BlockFace`](../block/BlockFace.md) | face argument


---

### Public Methods for [`DirectionalContainer`](DirectionalContainer.md)

##### <a id='clone'></a>public  function __clone__()

_clone method_

Returns | 
--- | 
[`DirectionalContainer`](DirectionalContainer.md) |


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


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

