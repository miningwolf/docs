## TimeChangeEvent __class__

>io.wolfscript.event.world.TimeChangeEvent
>Extends [`CancelableHook`](../CancelableHook.md)
``` javascript
this.on('world.TimeChangeEvent', function (e) { });
```


---

### Class Overview

Time Change event

Method | Type   
--- | :--- 
 readonly property __Time__ <br> _Get: Gets the time the [`World`](../../api/world/World.md) is being set to_ | `long`
 readonly property __World__ <br> _Get: Gets the [`World`](../../api/world/World.md) the time is changing in_ | [`World`](../../api/world/World.md)
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


### Public Properties for [`TimeChangeEvent`](TimeChangeEvent.md)

##### <a id='time'></a>public  readonly property __Time__

_Get: Gets the time the [`World`](../../api/world/World.md) is being set to_

Get | Description
--- | --- 
`long` | time to be set



##### <a id='world'></a>public  readonly property __World__

_Get: Gets the [`World`](../../api/world/World.md) the time is changing in_

Get | Description
--- | --- 
[`World`](../../api/world/World.md) | the [`World`](../../api/world/World.md) of the time change



---

### Public Methods for [`TimeChangeEvent`](TimeChangeEvent.md)

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
	

