## Tripwire __class__

>io.wolfscript.material.Tripwire
>Extends [`MaterialData`](MaterialData.md)

---

### Class Overview

Represents the tripwire

Method | Type   
--- | :--- 
new __Tripwire__() <br> _Tripwire constructor_ | _constructor_
 writeonly property __Activated__ <br> _Set: Set tripwire activated state_ | `void`
 writeonly property __ObjectTriggering__ <br> _Set: Set object triggering state for this tripwire_ | `void`
 function __clone__() <br> _clone method_ | [`Tripwire`](Tripwire.md)
 function __isActivated__() <br> _Test if tripwire is currently activated_ | `boolean`
 function __isObjectTriggering__() <br> _Test if object triggering this tripwire directly_ | `boolean`
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

### Public Constructors for [`Tripwire`](Tripwire.md)

##### <a id='tripwire'></a>new __Tripwire__() 

_Tripwire constructor_


##### <a id='tripwire'></a>new __Tripwire__(int) 
_Deprecated: Magic value_

_Tripwire constructor_

Argument | Type | Description  
--- | --- | --- 
int | `final` | int argument

##### <a id='tripwire'></a>new __Tripwire__(int, byte) 
_Deprecated: Magic value_

_Tripwire constructor_

Argument | Type | Description  
--- | --- | --- 
int | `final` | int argument
byte | `final` | byte argument

---

### Public Properties for [`Tripwire`](Tripwire.md)

##### <a id='activated'></a>public  writeonly property __Activated__

_Set: Set tripwire activated state_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
act | `boolean` | - true if activated, false if not


##### <a id='objecttriggering'></a>public  writeonly property __ObjectTriggering__

_Set: Set object triggering state for this tripwire_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
trig | `boolean` | - true if object activating tripwire, false if not


---

### Public Methods for [`Tripwire`](Tripwire.md)

##### <a id='clone'></a>public  function __clone__()

_clone method_

Returns | 
--- | 
[`Tripwire`](Tripwire.md) |


##### <a id='isactivated'></a>public  function __isActivated__()

_Test if tripwire is currently activated_

Returns | Description
--- | --- 
`boolean` | true if activated, false if not


##### <a id='isobjecttriggering'></a>public  function __isObjectTriggering__()

_Test if object triggering this tripwire directly_

Returns | Description
--- | --- 
`boolean` | true if object activating tripwire, false if not


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
	

