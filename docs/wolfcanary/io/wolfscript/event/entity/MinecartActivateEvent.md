## MinecartActivateEvent __class__

>io.wolfscript.event.entity.MinecartActivateEvent
>Extends [`CancelableHook`](../../hook/CancelableHook.md)
``` javascript
this.on('entity.MinecartActivateEvent', function (e) { });
```


---

### Class Overview

MinecartActivateEvent<br> Called when a [`Minecart`](../../api/entity/vehicle/Minecart.md) passes over an activation rail.

Method | Type   
--- | :--- 
 readonly property __Minecart__ <br> _Get: Gets the [`Minecart`](../../api/entity/vehicle/Minecart.md)_ | [`Minecart`](../../api/entity/vehicle/Minecart.md)
 function __isPowered__() <br> _Checks if the [`Minecart`](../../api/entity/vehicle/Minecart.md) is receiving power or not_ | `boolean`
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


### Public Properties for [`MinecartActivateEvent`](MinecartActivateEvent.md)

##### <a id='minecart'></a>public  readonly property __Minecart__

_Get: Gets the [`Minecart`](../../api/entity/vehicle/Minecart.md)_

Get | Description
--- | --- 
[`Minecart`](../../api/entity/vehicle/Minecart.md) | the [`Minecart`](../../api/entity/vehicle/Minecart.md)



---

### Public Methods for [`MinecartActivateEvent`](MinecartActivateEvent.md)

##### <a id='ispowered'></a>public  function __isPowered__()

_Checks if the [`Minecart`](../../api/entity/vehicle/Minecart.md) is receiving power or not_

Returns | Description
--- | --- 
`boolean` | `true` if powered; `false` if not


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
	

