## Damage __class__

>io.wolfscript.event.entity.Damage
>Extends [`CancelableHook`](../../hook/CancelableHook.md)

---

### Class Overview

Damage hook. Contains information about an entity taking damage.

Method | Type   
--- | :--- 
new __Damage__(attacker, defender, source, dealt) <br> _Constructs a new Damage_ | _constructor_
 readonly property __Attacker__ <br> _Get: Gets the attacking [`EntityLiving`](../../api/entity/living/EntityLiving.md) if present_ | [`Entity`](../../api/entity/Entity.md)
  property __DamageDealt__ <br> _Get: Gets the amount of damage dealt<br>Set: Sets the amount of damage dealt_ | `float`
  property __DamageSource__ <br> _Get: Gets the [`DamageSource`](../../api/DamageSource.md) type<br>Set: Sets the [`DamageSource`](../../api/DamageSource.md)_ | [`DamageSource`](../../api/DamageSource.md)
 readonly property __Defender__ <br> _Get: Gets the defending [`Entity`](../../api/entity/Entity.md)_ | [`Entity`](../../api/entity/Entity.md)
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

### Public Constructors for [`Damage`](Damage.md)

##### <a id='damage'></a>new __Damage__(attacker, defender, source, dealt) 

_Constructs a new Damage_

Argument | Type | Description  
--- | --- | --- 
attacker | [`Entity`](../../api/entity/Entity.md) | the Entity attacking if present
defender | [`Entity`](../../api/entity/Entity.md) | the Entity being hurt
source | [`DamageSource`](../../api/DamageSource.md) | the DamageSource of the cause
dealt | `float` | the amount of damage to be dealt

---

### Public Properties for [`Damage`](Damage.md)

##### <a id='attacker'></a>public  readonly property __Attacker__

_Get: Gets the attacking [`EntityLiving`](../../api/entity/living/EntityLiving.md) if present_

Get | Description
--- | --- 
[`Entity`](../../api/entity/Entity.md) | attacker if there is one, `null` otherwise



##### <a id='damagedealt'></a>public   property __DamageDealt__

_Get: Gets the amount of damage dealt<br>Set: Sets the amount of damage dealt_

Get | Description
--- | --- 
`float` | dealt

Set | Type | Description  
--- | --- | --- 
dealt | `float` | the amount of damage to deal


##### <a id='damagesource'></a>public   property __DamageSource__

_Get: Gets the [`DamageSource`](../../api/DamageSource.md) type<br>Set: Sets the [`DamageSource`](../../api/DamageSource.md)_

Get | Description
--- | --- 
[`DamageSource`](../../api/DamageSource.md) | the DamageSource

Set | Type | Description  
--- | --- | --- 
source | [`DamageSource`](../../api/DamageSource.md) | the DamageSource cause


##### <a id='defender'></a>public  readonly property __Defender__

_Get: Gets the defending [`Entity`](../../api/entity/Entity.md)_

Get | Description
--- | --- 
[`Entity`](../../api/entity/Entity.md) | defender



---

### Public Methods for [`Damage`](Damage.md)

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


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

