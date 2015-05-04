## EntityDeathEvent __class__

>io.wolfscript.event.entity.EntityDeath
>Extends [`Hook`](../../hook/Hook.md)
``` javascript
this.on('entity.EntityDeath', function (e) { });
```


---

### Class Overview

class EntityDeathEvent

Method | Type   
--- | :--- 
 readonly property __DamageSource__ <br> _Get: Gets the [`DamageSource`](../../api/DamageSource.md) that killed the [`Entity`](../../api/entity/Entity.md)_ | [`DamageSource`](../../api/DamageSource.md)
 readonly property __Entity__ <br> _Get: Gets the [`Entity`](../../api/entity/Entity.md) that is dying_ | [`Entity`](../../api/entity/Entity.md)
final function __toString__() <br> _{@inheritDoc}_ | `String`
 |
__Inherited items from [`Hook`](../../hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](../../hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





---


### Public Properties for [`EntityDeath`](EntityDeath.md)

##### <a id='damagesource'></a>public  readonly property __DamageSource__

_Get: Gets the [`DamageSource`](../../api/DamageSource.md) that killed the [`Entity`](../../api/entity/Entity.md)_

Get | Description
--- | --- 
[`DamageSource`](../../api/DamageSource.md) | the death dealing [`DamageSource`](../../api/DamageSource.md)



##### <a id='entity'></a>public  readonly property __Entity__

_Get: Gets the [`Entity`](../../api/entity/Entity.md) that is dying_

Get | Description
--- | --- 
[`Entity`](../../api/entity/Entity.md) | the dying entity



---

### Public Methods for [`EntityDeath`](EntityDeath.md)

##### <a id='tostring'></a>public final function __toString__()

_{@inheritDoc}_

Returns | 
--- | 
`String` |


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


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

