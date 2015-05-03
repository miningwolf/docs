## DimensionType __class__

>io.wolfscript.api.world.DimensionType

---

### Class Overview

Dynamic worldType list

Method | Type   
--- | :--- 
 readonly property __ChunkProvider__ <br> _Get: Registers a shallow [`DimensionType`](DimensionType.md) (only the name without attached Generator) to the system._ | [`ChunkProviderCustom`](ChunkProviderCustom.md)
 function __equals__(ob) <br> _equals method_ | `boolean`
 function __hashCode__() <br> _hashCode method_ | `int`
 function __toString__() <br> _toString method_ | `String`
static final var __NETHER__ <br> _NETHER field_ | [`DimensionType`](DimensionType.md)
static final var __NORMAL__ <br> _NORMAL field_ | [`DimensionType`](DimensionType.md)
static final var __END__ <br> _END field_ | [`DimensionType`](DimensionType.md)



---


### Public Properties for [`DimensionType`](DimensionType.md)

##### <a id='chunkprovider'></a>public  readonly property __ChunkProvider__

_Get: Registers a shallow [`DimensionType`](DimensionType.md) (only the name without attached Generator) to the system. using a DimensionType like this will not have any effect on the world generation. A default generator, based on the ID will be used. If there is none, the default Minecraft world generator is used._

Get | Description
--- | --- 
[`ChunkProviderCustom`](ChunkProviderCustom.md) | DimensionType based on the given name /
    public static DimensionType fromName(String name) {
        return typeList.get(name.toLowerCase());
    }

    /** Get a [`DimensionType`](DimensionType.md) from a given ID. May return null if there is no DimensionType with this ID



---

### Public Methods for [`DimensionType`](DimensionType.md)

##### <a id='equals'></a>public  function __equals__(ob)

_equals method_

Argument | Type | Description  
--- | --- | --- 
ob | `Object` | ob argument

Returns | 
--- | 
`boolean` |


##### <a id='hashcode'></a>public  function __hashCode__()

_hashCode method_

Returns | 
--- | 
`int` |


##### <a id='tostring'></a>public  function __toString__()

_toString method_

Returns | 
--- | 
`String` |


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
	

