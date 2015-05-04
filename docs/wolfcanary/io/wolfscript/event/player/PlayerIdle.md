## PlayerIdle __class__

>io.wolfscript.event.player.PlayerIdle
>Extends [`CancelableHook`](../../hook/CancelableHook.md)

---

### Class Overview

class PlayerIdle

Method | Type   
--- | :--- 
new __PlayerIdle__(player, millisIdle) <br> _Constructs a new PlayerIdle_ | _constructor_
 readonly property __Player__ <br> _Get: Gets the idle `Player`_ | `Player`
 readonly property __TimeIdle__ <br> _Get: Gets the number of milliseconds the player has been idle_ | `long`
 function __toString__() <br> _{@inheritDoc}_ | `String`
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

### Public Constructors for [`PlayerIdle`](PlayerIdle.md)

##### <a id='playeridle'></a>new __PlayerIdle__(player, millisIdle) 

_Constructs a new PlayerIdle_

Argument | Type | Description  
--- | --- | --- 
player | `Player` | the `Player` who is idle
millisIdle | `long` | the number of milliseconds the player has been idle

---

### Public Properties for [`PlayerIdle`](PlayerIdle.md)

##### <a id='player'></a>public  readonly property __Player__

_Get: Gets the idle `Player`_

Get | Description
--- | --- 
`Player` | idle `Player`



##### <a id='timeidle'></a>public  readonly property __TimeIdle__

_Get: Gets the number of milliseconds the player has been idle_

Get | Description
--- | --- 
`long` | idle time in milliseconds



---

### Public Methods for [`PlayerIdle`](PlayerIdle.md)

##### <a id='tostring'></a>public  function __toString__()

_{@inheritDoc}_

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
	

