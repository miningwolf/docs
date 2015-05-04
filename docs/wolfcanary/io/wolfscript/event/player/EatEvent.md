## EatEvent __class__

>io.wolfscript.event.player.EatEvent
>Extends [`CancelableHook`](../CancelableHook.md)
``` javascript
this.on('player.EatEvent', function (e) { });
```


---

### Class Overview

class EatEvent

Method | Type   
--- | :--- 
 readonly property __Item__ <br> _Get: Gets the [`Item`](../../api/inventory/Item.md) that is being consumed_ | [`Item`](../../api/inventory/Item.md)
  property __LevelGain__ <br> _Get: Gets the amount of Food Level the `Player` will gain from consuming<br>Set: Sets the Food Level the `Player` will gain from consuming_ | `int`
 readonly property __Player__ <br> _Get: Gets the `Player` eating_ | `Player`
 readonly property __PotionEffects__ <br> _Get: Gets the [`PotionEffect`](../../api/potion/PotionEffect.md)s that could be applied on consumption_ | `PotionEffect[]`
  property __SaturationGain__ <br> _Get: Gets the Food Saturation the `Player` will gain from consuming<br>Set: Sets the Food Saturation the `Player` will gain from consuming_ | `float`
 function __setPotionEffects__() <br> _Sets the [`PotionEffect`](../../api/potion/PotionEffect.md)s to applied on consumption._ | `void`
final function __toString__() <br> _toString method_ | `String`
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


### Public Properties for [`EatEvent`](EatEvent.md)

##### <a id='item'></a>public  readonly property __Item__

_Get: Gets the [`Item`](../../api/inventory/Item.md) that is being consumed_

Get | Description
--- | --- 
[`Item`](../../api/inventory/Item.md) | the [`Item`](../../api/inventory/Item.md)



##### <a id='levelgain'></a>public   property __LevelGain__

_Get: Gets the amount of Food Level the `Player` will gain from consuming<br>Set: Sets the Food Level the `Player` will gain from consuming_

Get | Description
--- | --- 
`int` | food level gain

Set | Type | Description  
--- | --- | --- 
levelGain | `int` | level gain


##### <a id='player'></a>public  readonly property __Player__

_Get: Gets the `Player` eating_

Get | Description
--- | --- 
`Player` | the `Player`



##### <a id='potioneffects'></a>public  readonly property __PotionEffects__

_Get: Gets the [`PotionEffect`](../../api/potion/PotionEffect.md)s that could be applied on consumption<br> May be null if no effects apply to the food eaten._

Get | Description
--- | --- 
`PotionEffect[]` | PotionEffects



##### <a id='saturationgain'></a>public   property __SaturationGain__

_Get: Gets the Food Saturation the `Player` will gain from consuming<br>Set: Sets the Food Saturation the `Player` will gain from consuming_

Get | Description
--- | --- 
`float` | food saturation gain

Set | Type | Description  
--- | --- | --- 
saturationGain | `float` | the food saturation to gain


---

### Public Methods for [`EatEvent`](EatEvent.md)

##### <a id='setpotioneffects'></a>public  function __setPotionEffects__()

_Sets the [`PotionEffect`](../../api/potion/PotionEffect.md)s to applied on consumption._

Returns | 
--- | 
`void` |


##### <a id='tostring'></a>public final function __toString__()

_toString method_

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
	

