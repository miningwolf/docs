## StatGainedEvent __class__

>io.wolfscript.event.player.StatGainedEvent
>Extends [`CancelableHook`](../CancelableHook.md)
``` javascript
this.on('player.StatGainedEvent', function (e) { });
```


---

### Class Overview

StatGainedEvent<br> Called when a `Player` gains a Stat

Method | Type   
--- | :--- 
 readonly property __Gain__ <br> _Get: Gets the amount of the stat gained_ | `int`
 readonly property __Player__ <br> _Get: Gets the `Player` gaining a [`Stat`](../../api/statistics/Stat.md)_ | `Player`
 readonly property __Stat__ <br> _Get: Gets the [`Stat`](../../api/statistics/Stat.md) being gained_ | [`Stat`](../../api/statistics/Stat.md)
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


### Public Properties for [`StatGainedEvent`](StatGainedEvent.md)

##### <a id='gain'></a>public  readonly property __Gain__

_Get: Gets the amount of the stat gained_

Get | Description
--- | --- 
`int` | gain amount



##### <a id='player'></a>public  readonly property __Player__

_Get: Gets the `Player` gaining a [`Stat`](../../api/statistics/Stat.md)_

Get | Description
--- | --- 
`Player` | the `Player`



##### <a id='stat'></a>public  readonly property __Stat__

_Get: Gets the [`Stat`](../../api/statistics/Stat.md) being gained_

Get | Description
--- | --- 
[`Stat`](../../api/statistics/Stat.md) | the [`Stat`](../../api/statistics/Stat.md)



---

### Public Methods for [`StatGainedEvent`](StatGainedEvent.md)

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
	

