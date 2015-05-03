## ChunkLoaded __class__

>io.wolfscript.event.world.ChunkLoaded
>Extends [`Hook`](..\..\hook\Hook.md)

---

### Class Overview

Chunk created hook

Method | Type   
--- | :--- 
new __ChunkLoaded__(chunk, world, newchunk) <br> _ChunkLoaded constructor_ | _constructor_
 function __isNew__() <br> _Gets the [`Chunk`](..\..\api\world\Chunk.md)_ | `boolean`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](..\..\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](..\..\hook\Hook.md)





---

### Public Constructors for [`ChunkLoaded`](ChunkLoaded.md)

##### <a id='chunkloaded'></a>new __ChunkLoaded__(chunk, world, newchunk) 

_ChunkLoaded constructor_

Argument | Type | Description  
--- | --- | --- 
chunk | [`Chunk`](..\..\api\world\Chunk.md) | chunk argument
world | [`World`](..\..\api\world\World.md) | world argument
newchunk | `boolean` | newchunk argument

---

### Public Methods for [`ChunkLoaded`](ChunkLoaded.md)

##### <a id='isnew'></a>public  function __isNew__()

_Gets the [`Chunk`](..\..\api\world\Chunk.md)_

Returns | Description
--- | --- 
`boolean` | The [`Chunk`](..\..\api\world\Chunk.md). /
    public Chunk getChunk() {
        return chunk;
    }

    /** Gets the world this chunk is a part of.


##### <a id='tostring'></a>public final function __toString__()

_toString method_

Returns | 
--- | 
`String` |


---

### Public Methods for [`Hook`](..\..\hook\Hook.md)

##### <a id='call'></a>public  function __call__()

_Get the name of this hook._

Returns | Description
--- | --- 
[`Hook`](..\..\hook\Hook.md) | simple class name /
    public final String getHookName() {
        return getClass().getSimpleName();
    }

    @Override
    public int hashCode() {
        int hash = getClass().getSimpleName().length();

        return hash getClass().getSimpleName().hashCode() + 2;
    }

    /** Calls a Hook if not already executed


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

