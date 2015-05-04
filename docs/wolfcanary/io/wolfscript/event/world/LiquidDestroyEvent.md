## LiquidDestroyEvent __class__

>io.wolfscript.event.world.LiquidDestroyEvent
>Extends [`CancelableHook`](../../hook/CancelableHook.md)
``` javascript
this.on('world.LiquidDestroyEvent', function (e) { });
```


---

### Class Overview

Is called when a liquid is about to destroy something (crops, popping off torches etc)

Method | Type   
--- | :--- 
 readonly property __Block__ <br> _Get: Get the block that would be destroyed by the liquid flow_ | [`Block`](../../api/world/blocks/Block.md)
 readonly property __LiquidType__ <br> _Get: Returns the [`BlockType`](../../api/world/blocks/BlockType.md) of the liquid._ | [`BlockType`](../../api/world/blocks/BlockType.md)
 writeonly property __ForceDestroy__ <br> _Set: Set this to true to force the block to be destroyed._ | `void`
 function __isForceDestroy__() <br> _Check if the block in question will be destroyed regardless of what it is._ | `boolean`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](../../hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](../../hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](../../hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](../../hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







---


### Public Properties for [`LiquidDestroyEvent`](LiquidDestroyEvent.md)

##### <a id='block'></a>public  readonly property __Block__

_Get: Get the block that would be destroyed by the liquid flow_

Get | Description
--- | --- 
[`Block`](../../api/world/blocks/Block.md) | the [`Block`](../../api/world/blocks/Block.md)



##### <a id='liquidtype'></a>public  readonly property __LiquidType__

_Get: Returns the [`BlockType`](../../api/world/blocks/BlockType.md) of the liquid. Always returns the Flowing variant._

Get | Description
--- | --- 
[`BlockType`](../../api/world/blocks/BlockType.md) | The liquid's [`BlockType`](../../api/world/blocks/BlockType.md)



##### <a id='forcedestroy'></a>public  writeonly property __ForceDestroy__

_Set: Set this to true to force the block to be destroyed. This will not work if the hook is canceled already!_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
forceDestroy | `boolean` | `true` for force destroy


---

### Public Methods for [`LiquidDestroyEvent`](LiquidDestroyEvent.md)

##### <a id='isforcedestroy'></a>public  function __isForceDestroy__()

_Check if the block in question will be destroyed regardless of what it is._

Returns | Description
--- | --- 
`boolean` | `true` if force destroy


##### <a id='tostring'></a>public final function __toString__()

_toString method_

Returns | 
--- | 
`String` |


---

### Public Methods for [`CancelableHook`](../../hook/CancelableHook.md)

##### <a id='call'></a>public  function __call__()

_Calls a Hook if not already executed_

Returns | Description
--- | --- 
[`CancelableHook`](../../hook/CancelableHook.md) | this


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


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

