## TexturedMaterial __class__

>io.wolfscript.material.TexturedMaterial
>Extends [`MaterialData`](MaterialData.md)

---

### Class Overview

Represents textured materials like steps and smooth bricks

Method | Type   
--- | :--- 
new __TexturedMaterial__(m) <br> _TexturedMaterial constructor_ | _constructor_
  property __Material__ <br> _Get: Gets the current Material this block is made of<br>Set: Sets the material this block is made of_ | [`Material`](../Material.md)
abstract readonly property __Textures__ <br> _Get: Retrieve a list of possible textures. The first element of the list_ | `List<Material>`
 function __clone__() <br> _clone method_ | [`TexturedMaterial`](TexturedMaterial.md)
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

### Public Constructors for [`TexturedMaterial`](TexturedMaterial.md)

##### <a id='texturedmaterial'></a>new __TexturedMaterial__(m) 

_TexturedMaterial constructor_

Argument | Type | Description  
--- | --- | --- 
m | [`Material`](../Material.md) | m argument

##### <a id='texturedmaterial'></a>new __TexturedMaterial__(type) 
_Deprecated: Magic value_

_TexturedMaterial constructor_

Argument | Type | Description  
--- | --- | --- 
type | `int` | the raw type id

##### <a id='texturedmaterial'></a>new __TexturedMaterial__(int, byte) 
_Deprecated: Magic value_

_TexturedMaterial constructor_

Argument | Type | Description  
--- | --- | --- 
int | `final` | int argument
byte | `final` | byte argument

##### <a id='texturedmaterial'></a>new __TexturedMaterial__(Material, byte) 
_Deprecated: Magic value_

_TexturedMaterial constructor_

Argument | Type | Description  
--- | --- | --- 
Material | `final` | Material argument
byte | `final` | byte argument

---

### Public Properties for [`TexturedMaterial`](TexturedMaterial.md)

##### <a id='material'></a>public   property __Material__

_Get: Gets the current Material this block is made of<br>Set: Sets the material this block is made of_

Get | Description
--- | --- 
[`Material`](../Material.md) | Material of this block

Set | Type | Description  
--- | --- | --- 
material | [`Material`](../Material.md) | New material of this block


##### <a id='textures'></a>public abstract readonly property __Textures__

_Get: Retrieve a list of possible textures. The first element of the list will be used as a default._

Get | Description
--- | --- 
`List<Material>` | a list of possible textures for this block



---

### Public Methods for [`TexturedMaterial`](TexturedMaterial.md)

##### <a id='clone'></a>public  function __clone__()

_clone method_

Returns | 
--- | 
[`TexturedMaterial`](TexturedMaterial.md) |


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
	

