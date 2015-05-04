## TripwireHook __class__

>io.wolfscript.material.TripwireHook
>Extends [`SimpleAttachableMaterialData`](SimpleAttachableMaterialData.md)
>Implements [`Redstone`](Redstone.md)

---

### Class Overview

Represents the tripwire hook

Method | Type   
--- | :--- 
new __TripwireHook__() <br> _TripwireHook constructor_ | _constructor_
new __TripwireHook__(dir) <br> _TripwireHook constructor_ | _constructor_
 readonly property __AttachedFace__ <br> _AttachedFace property_ | [`BlockFace`](../block/BlockFace.md)
 writeonly property __Activated__ <br> _Set: Set hook activated state_ | `void`
 writeonly property __Connected__ <br> _Set: Set tripwire connection state_ | `void`
 writeonly property __FacingDirection__ <br> _FacingDirection property_ | `void`
 function __clone__() <br> _clone method_ | [`TripwireHook`](TripwireHook.md)
 function __isActivated__() <br> _Test if hook is currently activated_ | `boolean`
 function __isConnected__() <br> _Test if tripwire is connected_ | `boolean`
 function __isPowered__() <br> _isPowered method_ | `boolean`
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

### Public Constructors for [`TripwireHook`](TripwireHook.md)

##### <a id='tripwirehook'></a>new __TripwireHook__() 

_TripwireHook constructor_


##### <a id='tripwirehook'></a>new __TripwireHook__(int) 
_Deprecated: Magic value_

_TripwireHook constructor_

Argument | Type | Description  
--- | --- | --- 
int | `final` | int argument

##### <a id='tripwirehook'></a>new __TripwireHook__(int, byte) 
_Deprecated: Magic value_

_TripwireHook constructor_

Argument | Type | Description  
--- | --- | --- 
int | `final` | int argument
byte | `final` | byte argument

##### <a id='tripwirehook'></a>new __TripwireHook__(dir) 

_TripwireHook constructor_

Argument | Type | Description  
--- | --- | --- 
dir | [`BlockFace`](../block/BlockFace.md) | dir argument

---

### Public Properties for [`TripwireHook`](TripwireHook.md)

##### <a id='attachedface'></a>public  readonly property __AttachedFace__

_AttachedFace property_

Get | 
--- | 
[`BlockFace`](../block/BlockFace.md) |



##### <a id='activated'></a>public  writeonly property __Activated__

_Set: Set hook activated state_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
act | `boolean` | - true if activated, false if not


##### <a id='connected'></a>public  writeonly property __Connected__

_Set: Set tripwire connection state_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
connected | `boolean` | - true if connected, false if not


##### <a id='facingdirection'></a>public  writeonly property __FacingDirection__

_FacingDirection property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
face | [`BlockFace`](../block/BlockFace.md) | face argument


---

### Public Methods for [`TripwireHook`](TripwireHook.md)

##### <a id='clone'></a>public  function __clone__()

_clone method_

Returns | 
--- | 
[`TripwireHook`](TripwireHook.md) |


##### <a id='isactivated'></a>public  function __isActivated__()

_Test if hook is currently activated_

Returns | Description
--- | --- 
`boolean` | true if activated, false if not


##### <a id='isconnected'></a>public  function __isConnected__()

_Test if tripwire is connected_

Returns | Description
--- | --- 
`boolean` | true if connected, false if not


##### <a id='ispowered'></a>public  function __isPowered__()

_isPowered method_

Returns | 
--- | 
`boolean` |


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


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

