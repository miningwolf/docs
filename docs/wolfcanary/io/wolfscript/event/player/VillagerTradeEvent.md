## VillagerTradeEvent __class__

>io.wolfscript.event.player.VillagerTradeEvent
>Extends [`CancelableHook`](../CancelableHook.md)
``` javascript
this.on('player.VillagerTradeEvent', function (e) { });
```


---

### Class Overview

VillagerTrade Hook<br> Called when a `Player` trades with a [`VillagerTrade`](../../api/VillagerTrade.md) from an `Villager`

Method | Type   
--- | :--- 
 readonly property __Player__ <br> _Get: Gets the `Player` who is trading_ | `Player`
 readonly property __Trade__ <br> _Get: Gets the [`VillagerTrade`](../../api/VillagerTrade.md)_ | [`VillagerTrade`](../../api/VillagerTrade.md)
 readonly property __Villager__ <br> _Get: Gets the `Villager` merchant_ | `Villager`
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


### Public Properties for [`VillagerTradeEvent`](VillagerTradeEvent.md)

##### <a id='player'></a>public  readonly property __Player__

_Get: Gets the `Player` who is trading_

Get | Description
--- | --- 
`Player` | the `Player`



##### <a id='trade'></a>public  readonly property __Trade__

_Get: Gets the [`VillagerTrade`](../../api/VillagerTrade.md)_

Get | Description
--- | --- 
[`VillagerTrade`](../../api/VillagerTrade.md) | the [`VillagerTrade`](../../api/VillagerTrade.md)



##### <a id='villager'></a>public  readonly property __Villager__

_Get: Gets the `Villager` merchant_

Get | Description
--- | --- 
`Villager` | the `Villager`



---

### Public Methods for [`VillagerTradeEvent`](VillagerTradeEvent.md)

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
	

