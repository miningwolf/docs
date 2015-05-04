## EntityLightningStruckEvent __class__

>io.wolfscript.event.entity.EntityLightningStruckEvent
>Extends [`CancelableHook`](../CancelableHook.md)
``` javascript
this.on('entity.EntityLightningStruckEvent', function (e) { });
```


---

### Class Overview

class EntityLightningStruckEvent

Method | Type   
--- | :--- 
 readonly property __LightningBolt__ <br> _Get: Gets the [`LightningBolt`](../../api/entity/effect/LightningBolt.md) striking_ | [`LightningBolt`](../../api/entity/effect/LightningBolt.md)
 readonly property __StruckEntity__ <br> _Get: Gets the [`Entity`](../../api/entity/Entity.md) being struck_ | [`Entity`](../../api/entity/Entity.md)
final function __toString__() <br> _{@inheritDoc}_ | `String`
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


### Public Properties for [`EntityLightningStruckEvent`](EntityLightningStruckEvent.md)

##### <a id='lightningbolt'></a>public  readonly property __LightningBolt__

_Get: Gets the [`LightningBolt`](../../api/entity/effect/LightningBolt.md) striking_

Get | Description
--- | --- 
[`LightningBolt`](../../api/entity/effect/LightningBolt.md) | the striking [`LightningBolt`](../../api/entity/effect/LightningBolt.md)



##### <a id='struckentity'></a>public  readonly property __StruckEntity__

_Get: Gets the [`Entity`](../../api/entity/Entity.md) being struck_

Get | Description
--- | --- 
[`Entity`](../../api/entity/Entity.md) | the struck [`Entity`](../../api/entity/Entity.md)



---

### Public Methods for [`EntityLightningStruckEvent`](EntityLightningStruckEvent.md)

##### <a id='tostring'></a>public final function __toString__()

_{@inheritDoc}_

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
	

