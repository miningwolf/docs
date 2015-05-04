## TeleportEvent __class__

>io.wolfscript.event.player.Teleport
>Extends [`CancelableHook`](../../hook/CancelableHook.md)
``` javascript
this.on('player.Teleport', function (e) { });
```


---

### Class Overview

Teleport event. Contains player who is teleporting and their destination

Method | Type   
--- | :--- 
 readonly property __CurrentLocation__ <br> _Get: Gets the `Player`'s current location_ | [`Location`](../../api/world/position/Location.md)
 readonly property __Destination__ <br> _Get: Get the destination [`Location`](../../api/world/position/Location.md) for the teleport._ | [`Location`](../../api/world/position/Location.md)
 readonly property __Player__ <br> _Get: Get the `Player` instance._ | `Player`
 readonly property __TeleportReason__ <br> _Get: Gets the `TeleportCause`_ | `TeleportCause`
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


### Public Properties for [`Teleport`](Teleport.md)

##### <a id='currentlocation'></a>public  readonly property __CurrentLocation__

_Get: Gets the `Player`'s current location_

Get | Description
--- | --- 
[`Location`](../../api/world/position/Location.md) | the current [`Location`](../../api/world/position/Location.md) of the Player



##### <a id='destination'></a>public  readonly property __Destination__

_Get: Get the destination [`Location`](../../api/world/position/Location.md) for the teleport._

Get | Description
--- | --- 
[`Location`](../../api/world/position/Location.md) | the [`Location`](../../api/world/position/Location.md) of the destination



##### <a id='player'></a>public  readonly property __Player__

_Get: Get the `Player` instance._

Get | Description
--- | --- 
`Player` | the teleporting Player



##### <a id='teleportreason'></a>public  readonly property __TeleportReason__

_Get: Gets the `TeleportCause`_

Get | Description
--- | --- 
`TeleportCause` | the `TeleportCause`



---

### Public Methods for [`Teleport`](Teleport.md)

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
	

