## BlockDropXpEvent __class__

>io.wolfscript.event.world.BlockDropXpEvent
>Extends [`CancelableHook`](../../hook/CancelableHook.md)
``` javascript
this.on('world.BlockDropXpEvent', function (e) { });
```


---

### Class Overview

Event thrown when a block that drop experience (spawner, ore, redstone ore) is destroyed

Method | Type   
--- | :--- 
 readonly property __Block__ <br> _Get: Get the block that gives the dropped experience_ | [`Block`](../../api/world/blocks/Block.md)
  property __Xp__ <br> _Get: Get the experience amount that will be dropped.<br>Set: Set the experience amount that will be dropped._ | `int`
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


### Public Properties for [`BlockDropXpEvent`](BlockDropXpEvent.md)

##### <a id='block'></a>public  readonly property __Block__

_Get: Get the block that gives the dropped experience_

Get | Description
--- | --- 
[`Block`](../../api/world/blocks/Block.md) | The block



##### <a id='xp'></a>public   property __Xp__

_Get: Get the experience amount that will be dropped.<br>Set: Set the experience amount that will be dropped._

Get | Description
--- | --- 
`int` | the xp amount

Set | Type | Description  
--- | --- | --- 
xp | `int` | The experience amount that will be dropped


---

### Public Methods for [`BlockDropXpEvent`](BlockDropXpEvent.md)

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
	

