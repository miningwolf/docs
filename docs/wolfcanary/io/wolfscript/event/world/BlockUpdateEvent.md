## BlockUpdateEvent __class__

>io.wolfscript.event.world.BlockUpdateEvent
>Extends [`CancelableHook`](../CancelableHook.md)
``` javascript
this.on('world.BlockUpdateEvent', function (e) { });
```


---

### Class Overview

Block update event. Contains information about a block updating.

Method | Type   
--- | :--- 
 readonly property __Block__ <br> _Get: Gets [`Block`](../../api/world/blocks/Block.md) updating_ | [`Block`](../../api/world/blocks/Block.md)
 readonly property __NewBlockId__ <br> _Get: Gets the block id of the new [`Block`](../../api/world/blocks/Block.md)_ | `int`
 readonly property __NewBlockType__ <br> _Get: Gets the block type of the new [`Block`](../../api/world/blocks/Block.md)_ | [`BlockType`](../../api/world/blocks/BlockType.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](../CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](../CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](../Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](../Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







---


### Public Properties for [`BlockUpdateEvent`](BlockUpdateEvent.md)

##### <a id='block'></a>public  readonly property __Block__

_Get: Gets [`Block`](../../api/world/blocks/Block.md) updating_

Get | Description
--- | --- 
[`Block`](../../api/world/blocks/Block.md) | The [`Block`](../../api/world/blocks/Block.md) updated.



##### <a id='newblockid'></a>public  readonly property __NewBlockId__

_Get: Gets the block id of the new [`Block`](../../api/world/blocks/Block.md)_

Get | Description
--- | --- 
`int` | [`Block`](../../api/world/blocks/Block.md) ID value.



##### <a id='newblocktype'></a>public  readonly property __NewBlockType__

_Get: Gets the block type of the new [`Block`](../../api/world/blocks/Block.md)_

Get | Description
--- | --- 
[`BlockType`](../../api/world/blocks/BlockType.md) | [`BlockType`](../../api/world/blocks/BlockType.md) type



---

### Public Methods for [`BlockUpdateEvent`](BlockUpdateEvent.md)

##### <a id='tostring'></a>public final function __toString__()

_toString method_

Returns | 
--- | 
`String` |


---

### Public Methods for [`CancelableHook`](../CancelableHook.md)

##### <a id='call'></a>public  function __call__()

_Calls a Hook if not already executed_

Returns | Description
--- | --- 
[`CancelableHook`](../CancelableHook.md) | this


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


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

