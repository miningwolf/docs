## PotionEffectAppliedEvent __class__

>io.wolfscript.event.entity.PotionEffectAppliedEvent
>Extends [`Hook`](../Hook.md)
``` javascript
this.on('entity.PotionEffectAppliedEvent', function (e) { });
```


---

### Class Overview

PotionEffectAppliedEvent<br> Called when a [`PotionEffect`](../../api/potion/PotionEffect.md) is applied to a [`LivingBase`](../../api/entity/living/LivingBase.md)

Method | Type   
--- | :--- 
 readonly property __Entity__ <br> _Get: Gets the [`LivingBase`](../../api/entity/living/LivingBase.md) having a [`PotionEffect`](../../api/potion/PotionEffect.md) applied to_ | [`LivingBase`](../../api/entity/living/LivingBase.md)
  property __PotionEffect__ <br> _Get: Gets the [`PotionEffect`](../../api/potion/PotionEffect.md) being applied<br>Set: Sets the [`PotionEffect`](../../api/potion/PotionEffect.md) to apply_ | [`PotionEffect`](../../api/potion/PotionEffect.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](../Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](../Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





---


### Public Properties for [`PotionEffectAppliedEvent`](PotionEffectAppliedEvent.md)

##### <a id='entity'></a>public  readonly property __Entity__

_Get: Gets the [`LivingBase`](../../api/entity/living/LivingBase.md) having a [`PotionEffect`](../../api/potion/PotionEffect.md) applied to_

Get | Description
--- | --- 
[`LivingBase`](../../api/entity/living/LivingBase.md) | the [`LivingBase`](../../api/entity/living/LivingBase.md)



##### <a id='potioneffect'></a>public   property __PotionEffect__

_Get: Gets the [`PotionEffect`](../../api/potion/PotionEffect.md) being applied<br>Set: Sets the [`PotionEffect`](../../api/potion/PotionEffect.md) to apply_

Get | Description
--- | --- 
[`PotionEffect`](../../api/potion/PotionEffect.md) | the [`PotionEffect`](../../api/potion/PotionEffect.md)

Set | Type | Description  
--- | --- | --- 
effect | [`PotionEffect`](../../api/potion/PotionEffect.md) | a new [`PotionEffect`](../../api/potion/PotionEffect.md) or null to cancel out any effects


---

### Public Methods for [`PotionEffectAppliedEvent`](PotionEffectAppliedEvent.md)

##### <a id='tostring'></a>public final function __toString__()

_toString method_

Returns | 
--- | 
`String` |


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


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

