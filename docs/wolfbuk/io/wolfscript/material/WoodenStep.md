## WoodenStep __class__

>io.wolfscript.material.WoodenStep
>Extends [`Wood`](Wood.md)

---

### Class Overview

Represents the different types of wooden steps.

Method | Type   
--- | :--- 
new __WoodenStep__() <br> _Constructs a wooden step._ | _constructor_
new __WoodenStep__(species) <br> _Constructs a wooden step of the given tree species._ | _constructor_
new __WoodenStep__(TreeSpecies, inv) <br> _Constructs a wooden step of the given type and tree species, either_ | _constructor_
 writeonly property __Inverted__ <br> _Set: Set step inverted state_ | `void`
 function __clone__() <br> _clone method_ | [`WoodenStep`](WoodenStep.md)
 function __isInverted__() <br> _Test if step is inverted_ | `boolean`
 function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Wood`](Wood.md)__ |
new __Wood__() <br> _Constructs a wood block._ | _constructor_
new __Wood__(species) <br> _Constructs a wood block of the given tree species._ | _constructor_
new __Wood__(Material) <br> _Constructs a wood block of the given type._ | _constructor_
new __Wood__(Material, TreeSpecies) <br> _Constructs a wood block of the given type and tree species._ | _constructor_
  property __Species__ <br> _Get: Gets the current species of this wood block<br>Set: Sets the species of this wood block_ | [`TreeSpecies`](../TreeSpecies.md)
 function __clone__() <br> _clone method_ | [`Wood`](Wood.md)
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

### Public Constructors for [`WoodenStep`](WoodenStep.md)

##### <a id='woodenstep'></a>new __WoodenStep__() 

_Constructs a wooden step._


##### <a id='woodenstep'></a>new __WoodenStep__(species) 

_Constructs a wooden step of the given tree species._

Argument | Type | Description  
--- | --- | --- 
species | [`TreeSpecies`](../TreeSpecies.md) | the species of the wooden step

##### <a id='woodenstep'></a>new __WoodenStep__(TreeSpecies, inv) 

_Constructs a wooden step of the given type and tree species, either inverted or not._

Argument | Type | Description  
--- | --- | --- 
TreeSpecies | `final` | TreeSpecies argument
inv | `boolean` | true the step is at the top of the block

##### <a id='woodenstep'></a>new __WoodenStep__(int) 
_Deprecated: Magic value_

_WoodenStep constructor_

Argument | Type | Description  
--- | --- | --- 
int | `final` | int argument

##### <a id='woodenstep'></a>new __WoodenStep__(int, byte) 
_Deprecated: Magic value_

_WoodenStep constructor_

Argument | Type | Description  
--- | --- | --- 
int | `final` | int argument
byte | `final` | byte argument

##### <a id='woodenstep'></a>new __WoodenStep__(Material, byte) 
_Deprecated: Magic value_

_WoodenStep constructor_

Argument | Type | Description  
--- | --- | --- 
Material | `final` | Material argument
byte | `final` | byte argument

---

### Public Properties for [`WoodenStep`](WoodenStep.md)

##### <a id='inverted'></a>public  writeonly property __Inverted__

_Set: Set step inverted state_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
inv | `boolean` | - true if step is inverted (top half), false if step is normal (bottom half)


---

### Public Methods for [`WoodenStep`](WoodenStep.md)

##### <a id='clone'></a>public  function __clone__()

_clone method_

Returns | 
--- | 
[`WoodenStep`](WoodenStep.md) |


##### <a id='isinverted'></a>public  function __isInverted__()

_Test if step is inverted_

Returns | Description
--- | --- 
`boolean` | true if inverted (top half), false if normal (bottom half)


##### <a id='tostring'></a>public  function __toString__()

_toString method_

Returns | 
--- | 
`String` |


---
### Public Constructors for [`Wood`](Wood.md)

##### <a id='wood'></a>new __Wood__() 

_Constructs a wood block._


##### <a id='wood'></a>new __Wood__(species) 

_Constructs a wood block of the given tree species._

Argument | Type | Description  
--- | --- | --- 
species | [`TreeSpecies`](../TreeSpecies.md) | the species of the wood block

##### <a id='wood'></a>new __Wood__(int) 
_Deprecated: Magic value_

_Wood constructor_

Argument | Type | Description  
--- | --- | --- 
int | `final` | int argument

##### <a id='wood'></a>new __Wood__(Material) 

_Constructs a wood block of the given type._

Argument | Type | Description  
--- | --- | --- 
Material | `final` | Material argument

##### <a id='wood'></a>new __Wood__(Material, TreeSpecies) 

_Constructs a wood block of the given type and tree species._

Argument | Type | Description  
--- | --- | --- 
Material | `final` | Material argument
TreeSpecies | `final` | TreeSpecies argument

##### <a id='wood'></a>new __Wood__(int, byte) 
_Deprecated: Magic value_

_Wood constructor_

Argument | Type | Description  
--- | --- | --- 
int | `final` | int argument
byte | `final` | byte argument

##### <a id='wood'></a>new __Wood__(Material, byte) 
_Deprecated: Magic value_

_Wood constructor_

Argument | Type | Description  
--- | --- | --- 
Material | `final` | Material argument
byte | `final` | byte argument

---

### Public Properties for [`Wood`](Wood.md)

##### <a id='species'></a>public   property __Species__

_Get: Gets the current species of this wood block<br>Set: Sets the species of this wood block_

Get | Description
--- | --- 
[`TreeSpecies`](../TreeSpecies.md) | TreeSpecies of this wood block

Set | Type | Description  
--- | --- | --- 
TreeSpecies | `final` | TreeSpecies argument


---

### Public Methods for [`Wood`](Wood.md)

##### <a id='clone'></a>public  function __clone__()

_clone method_

Returns | 
--- | 
[`Wood`](Wood.md) |


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
	

