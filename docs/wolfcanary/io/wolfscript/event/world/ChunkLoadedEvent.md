## ChunkLoadedEvent __class__

>io.wolfscript.event.world.ChunkLoadedEvent
>Extends [`Hook`](../Hook.md)
``` javascript
this.on('world.ChunkLoadedEvent', function (e) { });
```


---

### Class Overview

Chunk created event

Method | Type   
--- | :--- 
 readonly property __Chunk__ <br> _Get: Gets the [`Chunk`](../../api/world/Chunk.md)_ | [`Chunk`](../../api/world/Chunk.md)
 readonly property __World__ <br> _Get: Gets the world this chunk is a part of._ | [`World`](../../api/world/World.md)
 function __isNew__() <br> _Gets whether this chunk was a freshly created chunk_ | `boolean`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](../Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](../Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





---


### Public Properties for [`ChunkLoadedEvent`](ChunkLoadedEvent.md)

##### <a id='chunk'></a>public  readonly property __Chunk__

_Get: Gets the [`Chunk`](../../api/world/Chunk.md)_

Get | Description
--- | --- 
[`Chunk`](../../api/world/Chunk.md) | The [`Chunk`](../../api/world/Chunk.md).



##### <a id='world'></a>public  readonly property __World__

_Get: Gets the world this chunk is a part of._

Get | Description
--- | --- 
[`World`](../../api/world/World.md) | the world



---

### Public Methods for [`ChunkLoadedEvent`](ChunkLoadedEvent.md)

##### <a id='isnew'></a>public  function __isNew__()

_Gets whether this chunk was a freshly created chunk_

Returns | Description
--- | --- 
`boolean` | `true` if new; `false` otherwise


##### <a id='tostring'></a>public final function __toString__()

_toString method_

Returns | 
--- | 
`String` |


---

### Public Properties for [`Hook`](../Hook.md)

##### <a id='hookname'></a>public final readonly property __HookName__

_Get: Get the name of this hook._

Get | Description
--- | --- 
`String` | simple class name



---

### Public Methods for [`Hook`](../Hook.md)

##### <a id='call'></a>public  function __call__()

_Calls a Hook if not already executed_

Returns | Description
--- | --- 
[`Hook`](../Hook.md) | this


##### <a id='hashcode'></a>public  function __hashCode__()

_hashCode method_

Returns | 
--- | 
`int` |


---


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

