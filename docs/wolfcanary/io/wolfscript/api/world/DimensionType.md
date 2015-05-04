## DimensionType __class__

>io.wolfscript.api.world.DimensionType

---

### Class Overview

Dynamic worldType list

Method | Type   
--- | :--- 
 readonly property __Id__ <br> _Get: Get the ID of this dimension type. With this ID the DimensionType can be identified._ | `int`
 readonly property __Name__ <br> _Get: Get the name of this dimension type_ | `String`
 readonly property __ChunkProvider__ <br> _Get: Get the ChunkProviderCustom that is attached to this Dimensiontype._ | [`ChunkProviderCustom`](ChunkProviderCustom.md)
static function __registerType__(name, id) <br> _Registers a shallow [`DimensionType`](DimensionType.md) (only the name without attached Generator) to the system._ | [`DimensionType`](DimensionType.md)
static function __fromName__(name) <br> _Get a [`DimensionType`](DimensionType.md) from a given name._ | [`DimensionType`](DimensionType.md)
static function __fromId__(id) <br> _Get a [`DimensionType`](DimensionType.md) from a given ID._ | [`DimensionType`](DimensionType.md)
static function __knownDimensionNames__() <br> _Gets a `String[]` of known Dimension names_ | `String[]`
static function __knownDimensions__() <br> _Gets a `DimensionType[]` of known Dimensions_ | `DimensionType[]`
 function __hashCode__() <br> _hashCode method_ | `int`
static function __registerType__(name, id, ChunkProviderCustom) <br> _Registers a [`DimensionType`](DimensionType.md) with an attached world generator._ | [`DimensionType`](DimensionType.md)
 function __hasChunkProvider__() <br> _Checks if this dimension type has a custom chunk provider attached_ | `boolean`
 function __equals__(ob) <br> _equals method_ | `boolean`
 function __toString__() <br> _toString method_ | `String`
static function __typeExists__(name) <br> _Check if a type with the given name exists._ | `boolean`
static final var __NETHER__ <br> _NETHER field_ | [`DimensionType`](DimensionType.md)
static final var __NORMAL__ <br> _NORMAL field_ | [`DimensionType`](DimensionType.md)
static final var __END__ <br> _END field_ | [`DimensionType`](DimensionType.md)



---


### Public Properties for [`DimensionType`](DimensionType.md)

##### <a id='id'></a>public  readonly property __Id__

_Get: Get the ID of this dimension type. With this ID the DimensionType can be identified._

Get | Description
--- | --- 
`int` | the id



##### <a id='name'></a>public  readonly property __Name__

_Get: Get the name of this dimension type_

Get | Description
--- | --- 
`String` | the name



##### <a id='chunkprovider'></a>public  readonly property __ChunkProvider__

_Get: Get the ChunkProviderCustom that is attached to this Dimensiontype. Note that this returns null if the DimensionType has no provider attached_

Get | Description
--- | --- 
[`ChunkProviderCustom`](ChunkProviderCustom.md) | a new [`ChunkProviderCustom`](ChunkProviderCustom.md)



---

### Public Methods for [`DimensionType`](DimensionType.md)

##### <a id='registertype'></a>public static function __registerType__(name, id)

_Registers a shallow [`DimensionType`](DimensionType.md) (only the name without attached Generator) to the system. using a DimensionType like this will not have any effect on the world generation. A default generator, based on the ID will be used. If there is none, the default Minecraft world generator is used._

Argument | Type | Description  
--- | --- | --- 
name | `String` | The name of the dimension
id | `int` | The id. If the ID is already taken, a unique one is auto-generated

Returns | 
--- | 
[`DimensionType`](DimensionType.md) |


##### <a id='fromname'></a>public static function __fromName__(name)

_Get a [`DimensionType`](DimensionType.md) from a given name. May return null if there is no DimensionType with the given name._

Argument | Type | Description  
--- | --- | --- 
name | `String` | The name. It's case insensitive.

Returns | Description
--- | --- 
[`DimensionType`](DimensionType.md) | DimensionType based on the given name


##### <a id='fromid'></a>public static function __fromId__(id)

_Get a [`DimensionType`](DimensionType.md) from a given ID. May return null if there is no DimensionType with this ID_

Argument | Type | Description  
--- | --- | --- 
id | `int` | the Dimension ID

Returns | Description
--- | --- 
[`DimensionType`](DimensionType.md) | [`DimensionType`](DimensionType.md) based on the given ID


##### <a id='knowndimensionnames'></a>public static function __knownDimensionNames__()

_Gets a `String[]` of known Dimension names_

Returns | Description
--- | --- 
`String[]` | `String[]` of known Dimension names


##### <a id='knowndimensions'></a>public static function __knownDimensions__()

_Gets a `DimensionType[]` of known Dimensions_

Returns | Description
--- | --- 
`DimensionType[]` | `DimensionType[]` of known Dimensions


##### <a id='hashcode'></a>public  function __hashCode__()

_hashCode method_

Returns | 
--- | 
`int` |


##### <a id='registertype'></a>public static function __registerType__(name, id, ChunkProviderCustom)

_Registers a [`DimensionType`](DimensionType.md) with an attached world generator. If a DimensionType like this is used, WolfScript will substitute the default Minecraft World Generator with the one that has been registered with this DimensionType._

Argument | Type | Description  
--- | --- | --- 
name | `String` | The name of the dimension
id | `int` | The id. If the ID is already taken, a unique one is auto-generated
ChunkProviderCustom | `extends` | ChunkProviderCustom argument

Returns | 
--- | 
[`DimensionType`](DimensionType.md) |


##### <a id='haschunkprovider'></a>public  function __hasChunkProvider__()

_Checks if this dimension type has a custom chunk provider attached_

Returns | Description
--- | --- 
`boolean` | `true` if has provider; `false` if not


##### <a id='equals'></a>public  function __equals__(ob)

_equals method_

Argument | Type | Description  
--- | --- | --- 
ob | `Object` | ob argument

Returns | 
--- | 
`boolean` |


##### <a id='tostring'></a>public  function __toString__()

_toString method_

Returns | 
--- | 
`String` |


##### <a id='typeexists'></a>public static function __typeExists__(name)

_Check if a type with the given name exists. This is case sensitive_

Argument | Type | Description  
--- | --- | --- 
name | `String` | the name of the DimensionType

Returns | Description
--- | --- 
`boolean` | `true` if exists; `false` otherwise


---

### Public Fields for [`DimensionType`](DimensionType.md)

##### <a id='nether'></a>public static final var __NETHER__

_NETHER field_

>Returns
>  [`DimensionType`](DimensionType.md)

##### <a id='normal'></a>public static final var __NORMAL__

_NORMAL field_

>Returns
>  [`DimensionType`](DimensionType.md)

##### <a id='end'></a>public static final var __END__

_END field_

>Returns
>  [`DimensionType`](DimensionType.md)

---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

