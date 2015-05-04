## HangingEntityDestroy __class__

>io.wolfscript.event.entity.HangingEntityDestroy
>Extends [`CancelableHook`](../../hook/CancelableHook.md)

this.on('entity.HangingEntityDestroy', function (e) { });

---

### Class Overview

HangingEntity destroy hook. Contains information about a painting or item frame being destroyed. In case the it was destroyed by a player, you will get this player too.

Method | Type   
--- | :--- 
new __HangingEntityDestroy__(hanging, player, source) <br> _HangingEntityDestroy constructor_ | _constructor_
 readonly property __DamageSource__ <br> _Get: Gets the DamageSource associated_ | [`DamageSource`](../../api/DamageSource.md)
 readonly property __Painting__ <br> _Get: Gets the [`HangingEntity`](../../api/entity/hanging/HangingEntity.md)_ | [`HangingEntity`](../../api/entity/hanging/HangingEntity.md)
 readonly property __Player__ <br> _Get: Gets the `Player` who destroyed the item frame or painting._ | `Player`
 function __isCausedByPlayer__() <br> _Check if this hook was called because a player destroyed an item frame or painting._ | `boolean`
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

### Public Constructors for [`HangingEntityDestroy`](HangingEntityDestroy.md)

##### <a id='hangingentitydestroy'></a>new __HangingEntityDestroy__(hanging, player, source) 

_HangingEntityDestroy constructor_

Argument | Type | Description  
--- | --- | --- 
hanging | [`HangingEntity`](../../api/entity/hanging/HangingEntity.md) | hanging argument
player | `Player` | player argument
source | [`DamageSource`](../../api/DamageSource.md) | source argument

---

### Public Properties for [`HangingEntityDestroy`](HangingEntityDestroy.md)

##### <a id='damagesource'></a>public  readonly property __DamageSource__

_Get: Gets the DamageSource associated_

Get | Description
--- | --- 
[`DamageSource`](../../api/DamageSource.md) | damage source



##### <a id='painting'></a>public  readonly property __Painting__

_Get: Gets the [`HangingEntity`](../../api/entity/hanging/HangingEntity.md)_

Get | Description
--- | --- 
[`HangingEntity`](../../api/entity/hanging/HangingEntity.md) | hanging entity



##### <a id='player'></a>public  readonly property __Player__

_Get: Gets the `Player` who destroyed the item frame or painting. If the hook was not caused by a player, this will return null._

Get | Description
--- | --- 
`Player` | player



---

### Public Methods for [`HangingEntityDestroy`](HangingEntityDestroy.md)

##### <a id='iscausedbyplayer'></a>public  function __isCausedByPlayer__()

_Check if this hook was called because a player destroyed an item frame or painting._

Returns | Description
--- | --- 
`boolean` | boolean true if player destroyed the hanging entity, false otherwise


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
	

