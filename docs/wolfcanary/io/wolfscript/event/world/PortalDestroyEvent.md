## PortalDestroyEvent __class__

>io.wolfscript.event.world.PortalDestroyEvent
>Extends [`CancelableHook`](../../hook/CancelableHook.md)
``` javascript
this.on('world.PortalDestroyEvent', function (e) { });
```


---

### Class Overview

class PortalDestroyEvent

Method | Type   
--- | :--- 
 readonly property __BlockSet__ <br> _Get: Get the set of blocks that make up the Portal_ | `Block[][]`
 readonly property __Position__ <br> _Get: Gets the [`Position`](../../api/world/position/Position.md) where the portal is being destroyed_ | [`Position`](../../api/world/position/Position.md)
 readonly property __World__ <br> _Get: Gets the world the portal was_ | [`World`](../../api/world/World.md)
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


### Public Properties for [`PortalDestroyEvent`](PortalDestroyEvent.md)

##### <a id='blockset'></a>public  readonly property __BlockSet__

_Get: Get the set of blocks that make up the Portal_

Get | Description
--- | --- 
`Block[][]` | block



##### <a id='position'></a>public  readonly property __Position__

_Get: Gets the [`Position`](../../api/world/position/Position.md) where the portal is being destroyed_

Get | Description
--- | --- 
[`Position`](../../api/world/position/Position.md) | position



##### <a id='world'></a>public  readonly property __World__

_Get: Gets the world the portal was_

Get | Description
--- | --- 
[`World`](../../api/world/World.md) | the world



---

### Public Methods for [`PortalDestroyEvent`](PortalDestroyEvent.md)

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
	
