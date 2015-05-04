## PistonExtendEvent __class__

>io.wolfscript.event.world.PistonExtendEvent
>Extends [`CancelableHook`](../CancelableHook.md)
``` javascript
this.on('world.PistonExtendEvent', function (e) { });
```


---

### Class Overview

Piston Extend Hook<br> Called when a Piston extends

Method | Type   
--- | :--- 
 readonly property __Moving__ <br> _Moving property_ | [`Block`](../../api/world/blocks/Block.md)
 readonly property __Piston__ <br> _Get: Gets the piston [`Block`](../../api/world/blocks/Block.md)_ | [`Block`](../../api/world/blocks/Block.md)
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


### Public Properties for [`PistonExtendEvent`](PistonExtendEvent.md)

##### <a id='moving'></a>public  readonly property __Moving__

_Moving property_

Get | 
--- | 
[`Block`](../../api/world/blocks/Block.md) |



##### <a id='piston'></a>public  readonly property __Piston__

_Get: Gets the piston [`Block`](../../api/world/blocks/Block.md)_

Get | Description
--- | --- 
[`Block`](../../api/world/blocks/Block.md) | piston



---

### Public Methods for [`PistonExtendEvent`](PistonExtendEvent.md)

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
	

