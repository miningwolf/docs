## ProjectileHitEvent __class__

>io.wolfscript.event.entity.ProjectileHit
>Extends [`CancelableHook`](../../hook/CancelableHook.md)
``` javascript
this.on('entity.ProjectileHit', function (e) { });
```


---

### Class Overview

ProjectileHitEvent<br> Called when a Projectile hits something

Method | Type   
--- | :--- 
 readonly property __EntityHit__ <br> _Get: Gets the [`Entity`](../../api/entity/Entity.md) hit by the projectile_ | [`Entity`](../../api/entity/Entity.md)
 readonly property __Projectile__ <br> _Get: Gets the [`Entity`](../../api/entity/Entity.md) projectile_ | [`Entity`](../../api/entity/Entity.md)
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


### Public Properties for [`ProjectileHit`](ProjectileHit.md)

##### <a id='entityhit'></a>public  readonly property __EntityHit__

_Get: Gets the [`Entity`](../../api/entity/Entity.md) hit by the projectile_

Get | Description
--- | --- 
[`Entity`](../../api/entity/Entity.md) | [`Entity`](../../api/entity/Entity.md) if present; `null` otherwise



##### <a id='projectile'></a>public  readonly property __Projectile__

_Get: Gets the [`Entity`](../../api/entity/Entity.md) projectile_

Get | Description
--- | --- 
[`Entity`](../../api/entity/Entity.md) | the projectile



---

### Public Methods for [`ProjectileHit`](ProjectileHit.md)

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
	

