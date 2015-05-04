## VehicleDamage __class__

>io.wolfscript.event.entity.VehicleDamage
>Extends [`CancelableHook`](../../hook/CancelableHook.md)

this.on('entity.VehicleDamage', function (e) { });

---

### Class Overview

Vehicle Damage hook. Contains information about a vehicle receiving damage.

Method | Type   
--- | :--- 
new __VehicleDamage__(vehicle, attacker, source, dealt) <br> _VehicleDamage constructor_ | _constructor_
 readonly property __Attacker__ <br> _Get: Get the entity that is inflicting the damage to the vehicle_ | [`Entity`](../../api/entity/Entity.md)
 readonly property __DamageDealt__ <br> _Get: Gets the amount of damage dealt_ | `float`
 readonly property __DamageSource__ <br> _Get: Gets the [`DamageSource`](../../api/DamageSource.md) type_ | [`DamageSource`](../../api/DamageSource.md)
 readonly property __Vehicle__ <br> _Get: Get the vehicle that is about to be damaged_ | [`Vehicle`](../../api/entity/vehicle/Vehicle.md)
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

### Public Constructors for [`VehicleDamage`](VehicleDamage.md)

##### <a id='vehicledamage'></a>new __VehicleDamage__(vehicle, attacker, source, dealt) 

_VehicleDamage constructor_

Argument | Type | Description  
--- | --- | --- 
vehicle | [`Vehicle`](../../api/entity/vehicle/Vehicle.md) | vehicle argument
attacker | [`Entity`](../../api/entity/Entity.md) | attacker argument
source | [`DamageSource`](../../api/DamageSource.md) | source argument
dealt | `float` | dealt argument

---

### Public Properties for [`VehicleDamage`](VehicleDamage.md)

##### <a id='attacker'></a>public  readonly property __Attacker__

_Get: Get the entity that is inflicting the damage to the vehicle_

Get | Description
--- | --- 
[`Entity`](../../api/entity/Entity.md) | defender



##### <a id='damagedealt'></a>public  readonly property __DamageDealt__

_Get: Gets the amount of damage dealt_

Get | Description
--- | --- 
`float` | dealt



##### <a id='damagesource'></a>public  readonly property __DamageSource__

_Get: Gets the [`DamageSource`](../../api/DamageSource.md) type_

Get | Description
--- | --- 
[`DamageSource`](../../api/DamageSource.md) | source



##### <a id='vehicle'></a>public  readonly property __Vehicle__

_Get: Get the vehicle that is about to be damaged_

Get | Description
--- | --- 
[`Vehicle`](../../api/entity/vehicle/Vehicle.md) | attacker if there is one, null otherwise



---

### Public Methods for [`VehicleDamage`](VehicleDamage.md)

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
	

