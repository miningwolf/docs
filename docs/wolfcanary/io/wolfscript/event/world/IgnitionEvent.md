## IgnitionEvent __class__

>io.wolfscript.event.world.IgnitionEvent
>Extends [`CancelableHook`](../CancelableHook.md)
``` javascript
this.on('world.IgnitionEvent', function (e) { });
```


---

### Class Overview

Ignition event. Contains information about a [`Block`](../../api/world/blocks/Block.md) being set on fire.

Method | Type   
--- | :--- 
 readonly property __Block__ <br> _Block property_ | [`Block`](../../api/world/blocks/Block.md)
 readonly property __Cause__ <br> _Get: Gets the `IgnitionCause` causing the ignition_ | `IgnitionCause`
 readonly property __ClickedBlock__ <br> _Get: The [`Block`](../../api/world/blocks/Block.md) that was clicked to cause an ignition if applicable._ | [`Block`](../../api/world/blocks/Block.md)
 readonly property __Player__ <br> _Get: The `Player` starting the fire if present_ | `Player`
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


### Public Properties for [`IgnitionEvent`](IgnitionEvent.md)

##### <a id='block'></a>public  readonly property __Block__

_Block property_

Get | 
--- | 
[`Block`](../../api/world/blocks/Block.md) |



##### <a id='cause'></a>public  readonly property __Cause__

_Get: Gets the `IgnitionCause` causing the ignition_

Get | Description
--- | --- 
`IgnitionCause` | the `IgnitionCause`



##### <a id='clickedblock'></a>public  readonly property __ClickedBlock__

_Get: The [`Block`](../../api/world/blocks/Block.md) that was clicked to cause an ignition if applicable._

Get | Description
--- | --- 
[`Block`](../../api/world/blocks/Block.md) | [`Block`](../../api/world/blocks/Block.md) if one was clicked; `null` otherwise.



##### <a id='player'></a>public  readonly property __Player__

_Get: The `Player` starting the fire if present_

Get | Description
--- | --- 
`Player` | the `Player` starting the fire or `null` if not started by a Player



---

### Public Methods for [`IgnitionEvent`](IgnitionEvent.md)

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
	

