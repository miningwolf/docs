## BlockPhysicsEvent __class__

>io.wolfscript.event.world.BlockPhysics
>Extends [`CancelableHook`](../../hook/CancelableHook.md)
``` javascript
this.on('world.BlockPhysics', function (e) { });
```


---

### Class Overview

Block physics event. Contains information about a block's physics being updated.

Method | Type   
--- | :--- 
 readonly property __Block__ <br> _Get: Gets the [`Block`](../../api/world/blocks/Block.md)_ | [`Block`](../../api/world/blocks/Block.md)
final function __toString__() <br> _toString method_ | `String`
 function __wasPlaced__() <br> _Gets whether this [`Block`](../../api/world/blocks/Block.md) was just placed_ | `boolean`
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


### Public Properties for [`BlockPhysics`](BlockPhysics.md)

##### <a id='block'></a>public  readonly property __Block__

_Get: Gets the [`Block`](../../api/world/blocks/Block.md)_

Get | Description
--- | --- 
[`Block`](../../api/world/blocks/Block.md) | block



---

### Public Methods for [`BlockPhysics`](BlockPhysics.md)

##### <a id='tostring'></a>public final function __toString__()

_toString method_

Returns | 
--- | 
`String` |


##### <a id='wasplaced'></a>public  function __wasPlaced__()

_Gets whether this [`Block`](../../api/world/blocks/Block.md) was just placed_

Returns | Description
--- | --- 
`boolean` | true is was placed


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
	

