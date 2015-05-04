## ChunkProviderCustom __class__

>io.wolfscript.api.world.ChunkProviderCustom

---

### Class Overview

A ChunkProvider that is used to implement custom world generation. Note that implementations of this class must not have constructors with arguments.

Method | Type   
--- | :--- 
 writeonly property __World__ <br> _Set: Set the world used for this generator._ | `void`
abstract function __createStructures__(x, z) <br> _Is called after populate(), in order to create or re-create structures._ | `void`
abstract function __populate__(x, z) <br> _Is called after the large-scale generation is done to populate the world with details._ | `void`
abstract function __provideChunk__(x, z) <br> _Will be called when a new chunk needs to be generated._ | [`Chunk`](Chunk.md)



---


### Public Properties for [`ChunkProviderCustom`](ChunkProviderCustom.md)

##### <a id='world'></a>public  writeonly property __World__

_Set: Set the world used for this generator. Wolf will call this before the generation process starts, to make sure the world exists._

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
world | [`World`](World.md) | the [`World`](World.md) used for the Generator


---

### Public Methods for [`ChunkProviderCustom`](ChunkProviderCustom.md)

##### <a id='createstructures'></a>public abstract function __createStructures__(x, z)

_Is called after populate(), in order to create or re-create structures. That means: Houses, Strongholds, temples and the likes_

Argument | Type | Description  
--- | --- | --- 
x | `int` | the X Chunk coordinate
z | `int` | the Z Chunk coordinate

Returns | 
--- | 
`void` |


##### <a id='populate'></a>public abstract function __populate__(x, z)

_Is called after the large-scale generation is done to populate the world with details. For instance glowstone blocks The x/z are chunk coordinates, that means right-shifted by 4_

Argument | Type | Description  
--- | --- | --- 
x | `int` | the X Chunk coordinate
z | `int` | the Z Chunk coordinate

Returns | 
--- | 
`void` |


##### <a id='providechunk'></a>public abstract function __provideChunk__(x, z)

_Will be called when a new chunk needs to be generated. The x/z are Chunk coordinates. (right-shifted by 4)_

Argument | Type | Description  
--- | --- | --- 
x | `int` | the X Chunk coordinate
z | `int` | the Z Chunk coordinate

Returns | Description
--- | --- 
[`Chunk`](Chunk.md) | the provided [`Chunk`](Chunk.md)


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

