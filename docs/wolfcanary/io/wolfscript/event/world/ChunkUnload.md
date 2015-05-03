## ChunkUnload __class__

>io.wolfscript.event.world.ChunkUnload
>Extends [`CancelableHook`](..\..\hook\CancelableHook.md)

---

### Class Overview

Chunk unload hook

Method | Type   
--- | :--- 
new __ChunkUnload__(chunk, world) <br> _ChunkUnload constructor_ | _constructor_
 readonly property __World__ <br> _Get: Gets the [`Chunk`](..\..\api\world\Chunk.md)_ | [`World`](..\..\api\world\World.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](..\..\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](..\..\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](..\..\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](..\..\hook\Hook.md)







---

### Public Constructors for [`ChunkUnload`](ChunkUnload.md)

##### <a id='chunkunload'></a>new __ChunkUnload__(chunk, world) 

_ChunkUnload constructor_

Argument | Type | Description  
--- | --- | --- 
chunk | [`Chunk`](..\..\api\world\Chunk.md) | chunk argument
world | [`World`](..\..\api\world\World.md) | world argument

---

### Public Properties for [`ChunkUnload`](ChunkUnload.md)

##### <a id='world'></a>public  readonly property __World__

_Get: Gets the [`Chunk`](..\..\api\world\Chunk.md)_

Get | Description
--- | --- 
[`World`](..\..\api\world\World.md) | The [`Chunk`](..\..\api\world\Chunk.md). /
    public Chunk getChunk() {
        return chunk;
    }

    /** Gets the world this chunk is a part of.



---

### Public Methods for [`ChunkUnload`](ChunkUnload.md)

##### <a id='tostring'></a>public final function __toString__()

_toString method_

Returns | 
--- | 
`String` |


---

### Public Methods for [`CancelableHook`](..\..\hook\CancelableHook.md)

##### <a id='call'></a>public  function __call__()

_Calls a Hook if not already executed_

Returns | Description
--- | --- 
[`CancelableHook`](..\..\hook\CancelableHook.md) | this


##### <a id='iscanceled'></a>public  function __isCanceled__()

_isCanceled method_

Returns | 
--- | 
`boolean` |


##### <a id='setcanceled'></a>public  function __setCanceled__()

_setCanceled method_

Returns | 
--- | 
`void` |


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


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

