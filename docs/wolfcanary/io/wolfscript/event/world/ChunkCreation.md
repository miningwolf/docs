## ChunkCreationEvent __class__

>io.wolfscript.event.world.ChunkCreation
>Extends [`Hook`](../../hook/Hook.md)
``` javascript
this.on('world.ChunkCreation', function (e) { });
```


---

### Class Overview

Chunk creation event. Contains information about a new chunk being created.

Method | Type   
--- | :--- 
 readonly property __BiomeData__ <br> _Get: Gets the biomedata for the chunk_ | `BiomeType[]`
 readonly property __BlockData__ <br> _Get: Gets the block data of the chunk_ | `int[]`
 readonly property __World__ <br> _Get: Gets the dimension the chunk is in_ | [`World`](../../api/world/World.md)
 readonly property __X__ <br> _Get: Gets the x coordinate of the chunk_ | `int`
 readonly property __Z__ <br> _Get: Gets the z coordinate of the chunk_ | `int`
 function __setBiomeData__() <br> _Sets the biome data of each y column in the chunk_ | `void`
 function __setBlockData__() <br> _Sets the blocks data. Tips: Set a int[32768] if you want to generate a new chunk._ | `void`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](../../hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](../../hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





---


### Public Properties for [`ChunkCreation`](ChunkCreation.md)

##### <a id='biomedata'></a>public  readonly property __BiomeData__

_Get: Gets the biomedata for the chunk_

Get | Description
--- | --- 
`BiomeType[]` | An array of [`BiomeType`](../../api/world/BiomeType.md) for the biome data in a chunk.



##### <a id='blockdata'></a>public  readonly property __BlockData__

_Get: Gets the block data of the chunk_

Get | Description
--- | --- 
`int[]` | blockdata



##### <a id='world'></a>public  readonly property __World__

_Get: Gets the dimension the chunk is in_

Get | Description
--- | --- 
[`World`](../../api/world/World.md) | dimension



##### <a id='x'></a>public  readonly property __X__

_Get: Gets the x coordinate of the chunk_

Get | Description
--- | --- 
`int` | x coordinate.



##### <a id='z'></a>public  readonly property __Z__

_Get: Gets the z coordinate of the chunk_

Get | Description
--- | --- 
`int` | z coordinate.



---

### Public Methods for [`ChunkCreation`](ChunkCreation.md)

##### <a id='setbiomedata'></a>public  function __setBiomeData__()

_Sets the biome data of each y column in the chunk_

Returns | 
--- | 
`void` |


##### <a id='setblockdata'></a>public  function __setBlockData__()

_Sets the blocks data. Tips: Set a int[32768] if you want to generate a new chunk. The block index equals (x 16 + z) 128 + y where 16>x<=0, 16>z<=0, and 128>y<=0_

Returns | 
--- | 
`void` |


##### <a id='tostring'></a>public final function __toString__()

_toString method_

Returns | 
--- | 
`String` |


---

### Public Properties for [`Hook`](../../hook/Hook.md)

##### <a id='hookname'></a>public final readonly property __HookName__

_Get: Get the name of this hook._

Get | Description
--- | --- 
`String` | simple class name



---

### Public Methods for [`Hook`](../../hook/Hook.md)

##### <a id='call'></a>public  function __call__()

_Calls a Hook if not already executed_

Returns | Description
--- | --- 
[`Hook`](../../hook/Hook.md) | this


##### <a id='hashcode'></a>public  function __hashCode__()

_hashCode method_

Returns | 
--- | 
`int` |


---


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

