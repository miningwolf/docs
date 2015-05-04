## Coal __class__

>io.wolfscript.material.Coal
>Extends [`MaterialData`](MaterialData.md)

---

### Class Overview

Represents the different types of coals.

Method | Type   
--- | :--- 
new __Coal__() <br> _Coal constructor_ | _constructor_
new __Coal__(type) <br> _Coal constructor_ | _constructor_
new __Coal__(Material) <br> _Coal constructor_ | _constructor_
  property __Type__ <br> _Get: Gets the current type of this coal<br>Set: Sets the type of this coal_ | [`CoalType`](../CoalType.md)
 function __clone__() <br> _clone method_ | [`Coal`](Coal.md)
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

### Public Constructors for [`Coal`](Coal.md)

##### <a id='coal'></a>new __Coal__() 

_Coal constructor_


##### <a id='coal'></a>new __Coal__(type) 

_Coal constructor_

Argument | Type | Description  
--- | --- | --- 
type | [`CoalType`](../CoalType.md) | type argument

##### <a id='coal'></a>new __Coal__(int) 
_Deprecated: Magic value_

_Coal constructor_

Argument | Type | Description  
--- | --- | --- 
int | `final` | int argument

##### <a id='coal'></a>new __Coal__(Material) 

_Coal constructor_

Argument | Type | Description  
--- | --- | --- 
Material | `final` | Material argument

##### <a id='coal'></a>new __Coal__(int, byte) 
_Deprecated: Magic value_

_Coal constructor_

Argument | Type | Description  
--- | --- | --- 
int | `final` | int argument
byte | `final` | byte argument

##### <a id='coal'></a>new __Coal__(Material, byte) 
_Deprecated: Magic value_

_Coal constructor_

Argument | Type | Description  
--- | --- | --- 
Material | `final` | Material argument
byte | `final` | byte argument

---

### Public Properties for [`Coal`](Coal.md)

##### <a id='type'></a>public   property __Type__

_Get: Gets the current type of this coal<br>Set: Sets the type of this coal_

Get | Description
--- | --- 
[`CoalType`](../CoalType.md) | CoalType of this coal

Set | Type | Description  
--- | --- | --- 
type | [`CoalType`](../CoalType.md) | New type of this coal


---

### Public Methods for [`Coal`](Coal.md)

##### <a id='clone'></a>public  function __clone__()

_clone method_

Returns | 
--- | 
[`Coal`](Coal.md) |


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
	

