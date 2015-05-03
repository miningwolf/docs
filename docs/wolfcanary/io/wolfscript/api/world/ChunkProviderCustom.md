## ChunkProviderCustom __class__

>io.wolfscript.api.world.ChunkProviderCustom

---

### Class Overview

A ChunkProvider that is used to implement custom world generation. Note that implementations of this class must not have constructors with arguments.

Method | Type   
--- | :--- 
 writeonly property __World__ <br> _Set: Will be called when a new chunk needs to be generated._ | `void`



---


### Public Properties for [`ChunkProviderCustom`](ChunkProviderCustom.md)

##### <a id='world'></a>public  writeonly property __World__

_Set: Will be called when a new chunk needs to be generated. The x/z are Chunk coordinates. (right-shifted by 4)_

Get | Description
--- | --- 
`void` | the provided [`Chunk`](Chunk.md) /
    public abstract Chunk provideChunk(int x, int z);

    /** Is called after the large-scale generation is done to populate the world with details. For instance glowstone blocks The x/z are chunk coordinates, that means right-shifted by 4

Set | Type | Description  
--- | --- | --- 
world | [`World`](World.md) | the [`World`](World.md) used for the Generator


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

