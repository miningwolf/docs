## HealthChangeEvent __class__

>io.wolfscript.event.player.HealthChangeEvent
>Extends [`CancelableHook`](../../hook/CancelableHook.md)
``` javascript
this.on('player.HealthChangeEvent', function (e) { });
```


---

### Class Overview

Health Change event

Method | Type   
--- | :--- 
 readonly property __NewValue__ <br> _Get: Gets the new Health value_ | `float`
 readonly property __OldValue__ <br> _Get: Gets the old Health value_ | `float`
 readonly property __Player__ <br> _Get: Gets the `Player` who's health is changing_ | `Player`
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


### Public Properties for [`HealthChangeEvent`](HealthChangeEvent.md)

##### <a id='newvalue'></a>public  readonly property __NewValue__

_Get: Gets the new Health value_

Get | Description
--- | --- 
`float` | new value



##### <a id='oldvalue'></a>public  readonly property __OldValue__

_Get: Gets the old Health value_

Get | Description
--- | --- 
`float` | old value



##### <a id='player'></a>public  readonly property __Player__

_Get: Gets the `Player` who's health is changing_

Get | Description
--- | --- 
`Player` | the `Player`



---

### Public Methods for [`HealthChangeEvent`](HealthChangeEvent.md)

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
	

