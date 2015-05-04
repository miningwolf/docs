## MobTarget __class__

>io.wolfscript.event.entity.MobTarget
>Extends [`CancelableHook`](../../hook/CancelableHook.md)

---

### Class Overview

Mob target hook <p/> Contains information about a [`LivingBase`](../../api/entity/living/LivingBase.md) targeting another [`LivingBase`](../../api/entity/living/LivingBase.md) either for attack or following

Method | Type   
--- | :--- 
new __MobTarget__(entity, target) <br> _Constructs a new MobTarget_ | _constructor_
 readonly property __Entity__ <br> _Get: Gets the [`EntityLiving`](../../api/entity/living/EntityLiving.md) doing the targeting_ | [`LivingBase`](../../api/entity/living/LivingBase.md)
 readonly property __Target__ <br> _Get: Gets the [`EntityLiving`](../../api/entity/living/EntityLiving.md) being targeted_ | [`LivingBase`](../../api/entity/living/LivingBase.md)
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

### Public Constructors for [`MobTarget`](MobTarget.md)

##### <a id='mobtarget'></a>new __MobTarget__(entity, target) 

_Constructs a new MobTarget_

Argument | Type | Description  
--- | --- | --- 
entity | [`LivingBase`](../../api/entity/living/LivingBase.md) | the [`LivingBase`](../../api/entity/living/LivingBase.md) doing the targeting
target | [`LivingBase`](../../api/entity/living/LivingBase.md) | the [`LivingBase`](../../api/entity/living/LivingBase.md) target

---

### Public Properties for [`MobTarget`](MobTarget.md)

##### <a id='entity'></a>public  readonly property __Entity__

_Get: Gets the [`EntityLiving`](../../api/entity/living/EntityLiving.md) doing the targeting_

Get | Description
--- | --- 
[`LivingBase`](../../api/entity/living/LivingBase.md) | entity



##### <a id='target'></a>public  readonly property __Target__

_Get: Gets the [`EntityLiving`](../../api/entity/living/EntityLiving.md) being targeted_

Get | Description
--- | --- 
[`LivingBase`](../../api/entity/living/LivingBase.md) | the [`EntityLiving`](../../api/entity/living/EntityLiving.md) target



---

### Public Methods for [`MobTarget`](MobTarget.md)

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
	

