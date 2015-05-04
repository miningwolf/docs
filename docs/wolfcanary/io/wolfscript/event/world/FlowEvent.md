## FlowEvent __class__

>io.wolfscript.event.world.FlowEvent
>Extends [`CancelableHook`](../../hook/CancelableHook.md)
``` javascript
this.on('world.FlowEvent', function (e) { });
```


---

### Class Overview

Flow event. Contains information about a liquid flowing from one block to another

Method | Type   
--- | :--- 
 readonly property __BlockFrom__ <br> _Get: Gets the [`Block`](../../api/world/blocks/Block.md) flowing from_ | [`Block`](../../api/world/blocks/Block.md)
 readonly property __BlockTo__ <br> _Get: Gets the [`Block`](../../api/world/blocks/Block.md) flowing to_ | [`Block`](../../api/world/blocks/Block.md)
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


### Public Properties for [`FlowEvent`](FlowEvent.md)

##### <a id='blockfrom'></a>public  readonly property __BlockFrom__

_Get: Gets the [`Block`](../../api/world/blocks/Block.md) flowing from_

Get | Description
--- | --- 
[`Block`](../../api/world/blocks/Block.md) | the [`Block`](../../api/world/blocks/Block.md)



##### <a id='blockto'></a>public  readonly property __BlockTo__

_Get: Gets the [`Block`](../../api/world/blocks/Block.md) flowing to_

Get | Description
--- | --- 
[`Block`](../../api/world/blocks/Block.md) | the [`Block`](../../api/world/blocks/Block.md)



---

### Public Methods for [`FlowEvent`](FlowEvent.md)

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
	

