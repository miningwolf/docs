## ChunkCreated __class__

>io.wolfscript.event.world.ChunkCreated
>Extends [`Hook`](..\..\hook\Hook.md)

---

### Class Overview

Chunk created hook

Method | Type   
--- | :--- 
new __ChunkCreated__(chunk, world) <br> _ChunkCreated constructor_ | _constructor_
 readonly property __World__ <br> _Get: Gets the [`Chunk`](..\..\api\world\Chunk.md)_ | [`World`](..\..\api\world\World.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](..\..\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](..\..\hook\Hook.md)





---

### Public Constructors for [`ChunkCreated`](ChunkCreated.md)

##### <a id='chunkcreated'></a>new __ChunkCreated__(chunk, world) 

_ChunkCreated constructor_

Argument | Type | Description  
--- | --- | --- 
chunk | [`Chunk`](..\..\api\world\Chunk.md) | chunk argument
world | [`World`](..\..\api\world\World.md) | world argument

---

### Public Properties for [`ChunkCreated`](ChunkCreated.md)

##### <a id='world'></a>public  readonly property __World__

_Get: Gets the [`Chunk`](..\..\api\world\Chunk.md)_

Get | Description
--- | --- 
[`World`](..\..\api\world\World.md) | [`Chunk`](..\..\api\world\Chunk.md) created. /
    public Chunk getChunk() {
        return chunk;
    }

    /** Gets the world that this chunk is a part of.



---

### Public Methods for [`ChunkCreated`](ChunkCreated.md)

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
	

