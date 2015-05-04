## Wool __class__

>io.wolfscript.material.Wool
>Extends [`MaterialData`](MaterialData.md)
>Implements [`Colorable`](Colorable.md)

---

### Class Overview

class Wool

Method | Type   
--- | :--- 
new __Wool__() <br> _Wool constructor_ | _constructor_
new __Wool__(color) <br> _Wool constructor_ | _constructor_
new __Wool__(Material) <br> _Wool constructor_ | _constructor_
  property __Color__ <br> _Get: Gets the current color of this dye<br>Set: Sets the color of this dye_ | [`DyeColor`](../DyeColor.md)
 function __clone__() <br> _clone method_ | [`Wool`](Wool.md)
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

### Public Constructors for [`Wool`](Wool.md)

##### <a id='wool'></a>new __Wool__() 

_Wool constructor_


##### <a id='wool'></a>new __Wool__(color) 

_Wool constructor_

Argument | Type | Description  
--- | --- | --- 
color | [`DyeColor`](../DyeColor.md) | color argument

##### <a id='wool'></a>new __Wool__(int) 
_Deprecated: Magic value_

_Wool constructor_

Argument | Type | Description  
--- | --- | --- 
int | `final` | int argument

##### <a id='wool'></a>new __Wool__(Material) 

_Wool constructor_

Argument | Type | Description  
--- | --- | --- 
Material | `final` | Material argument

##### <a id='wool'></a>new __Wool__(int, byte) 
_Deprecated: Magic value_

_Wool constructor_

Argument | Type | Description  
--- | --- | --- 
int | `final` | int argument
byte | `final` | byte argument

##### <a id='wool'></a>new __Wool__(Material, byte) 
_Deprecated: Magic value_

_Wool constructor_

Argument | Type | Description  
--- | --- | --- 
Material | `final` | Material argument
byte | `final` | byte argument

---

### Public Properties for [`Wool`](Wool.md)

##### <a id='color'></a>public   property __Color__

_Get: Gets the current color of this dye<br>Set: Sets the color of this dye_

Get | Description
--- | --- 
[`DyeColor`](../DyeColor.md) | DyeColor of this dye

Set | Type | Description  
--- | --- | --- 
color | [`DyeColor`](../DyeColor.md) | New color of this dye


---

### Public Methods for [`Wool`](Wool.md)

##### <a id='clone'></a>public  function __clone__()

_clone method_

Returns | 
--- | 
[`Wool`](Wool.md) |


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
	

