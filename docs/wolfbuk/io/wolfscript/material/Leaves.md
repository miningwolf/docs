## Leaves __class__

>io.wolfscript.material.Leaves
>Extends [`MaterialData`](MaterialData.md)

---

### Class Overview

Represents the different types of leaves.

Method | Type   
--- | :--- 
new __Leaves__() <br> _Leaves constructor_ | _constructor_
new __Leaves__(species) <br> _Leaves constructor_ | _constructor_
new __Leaves__(Material) <br> _Leaves constructor_ | _constructor_
  property __Species__ <br> _Get: Gets the current species of this leave<br>Set: Sets the species of this leave_ | [`TreeSpecies`](../TreeSpecies.md)
 function __clone__() <br> _clone method_ | [`Leaves`](Leaves.md)
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

### Public Constructors for [`Leaves`](Leaves.md)

##### <a id='leaves'></a>new __Leaves__() 

_Leaves constructor_


##### <a id='leaves'></a>new __Leaves__(species) 

_Leaves constructor_

Argument | Type | Description  
--- | --- | --- 
species | [`TreeSpecies`](../TreeSpecies.md) | species argument

##### <a id='leaves'></a>new __Leaves__(int) 
_Deprecated: Magic value_

_Leaves constructor_

Argument | Type | Description  
--- | --- | --- 
int | `final` | int argument

##### <a id='leaves'></a>new __Leaves__(Material) 

_Leaves constructor_

Argument | Type | Description  
--- | --- | --- 
Material | `final` | Material argument

##### <a id='leaves'></a>new __Leaves__(int, byte) 
_Deprecated: Magic value_

_Leaves constructor_

Argument | Type | Description  
--- | --- | --- 
int | `final` | int argument
byte | `final` | byte argument

##### <a id='leaves'></a>new __Leaves__(Material, byte) 
_Deprecated: Magic value_

_Leaves constructor_

Argument | Type | Description  
--- | --- | --- 
Material | `final` | Material argument
byte | `final` | byte argument

---

### Public Properties for [`Leaves`](Leaves.md)

##### <a id='species'></a>public   property __Species__

_Get: Gets the current species of this leave<br>Set: Sets the species of this leave_

Get | Description
--- | --- 
[`TreeSpecies`](../TreeSpecies.md) | TreeSpecies of this leave

Set | Type | Description  
--- | --- | --- 
species | [`TreeSpecies`](../TreeSpecies.md) | New species of this leave


---

### Public Methods for [`Leaves`](Leaves.md)

##### <a id='clone'></a>public  function __clone__()

_clone method_

Returns | 
--- | 
[`Leaves`](Leaves.md) |


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
	

