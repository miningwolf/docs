## GameModeChange __class__

>io.wolfscript.event.player.GameModeChange
>Extends [`CancelableHook`](../../hook/CancelableHook.md)

this.on('player.GameModeChange', function (e) { });

---

### Class Overview

Called when a `Player` changes GameModes

Method | Type   
--- | :--- 
new __GameModeChange__(player, newMode) <br> _GameModeChange constructor_ | _constructor_
 readonly property __NewMode__ <br> _Get: Gets the new (changing to) [`GameMode`](../../api/GameMode.md)_ | [`GameMode`](../../api/GameMode.md)
 readonly property __OldMode__ <br> _Get: Gets the old (current) [`GameMode`](../../api/GameMode.md)_ | [`GameMode`](../../api/GameMode.md)
 readonly property __Player__ <br> _Get: Gets the `Player` changing modes_ | `Player`
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

### Public Constructors for [`GameModeChange`](GameModeChange.md)

##### <a id='gamemodechange'></a>new __GameModeChange__(player, newMode) 

_GameModeChange constructor_

Argument | Type | Description  
--- | --- | --- 
player | `Player` | player argument
newMode | [`GameMode`](../../api/GameMode.md) | newMode argument

---

### Public Properties for [`GameModeChange`](GameModeChange.md)

##### <a id='newmode'></a>public  readonly property __NewMode__

_Get: Gets the new (changing to) [`GameMode`](../../api/GameMode.md)_

Get | Description
--- | --- 
[`GameMode`](../../api/GameMode.md) | new [`GameMode`](../../api/GameMode.md)



##### <a id='oldmode'></a>public  readonly property __OldMode__

_Get: Gets the old (current) [`GameMode`](../../api/GameMode.md)_

Get | Description
--- | --- 
[`GameMode`](../../api/GameMode.md) | old [`GameMode`](../../api/GameMode.md)



##### <a id='player'></a>public  readonly property __Player__

_Get: Gets the `Player` changing modes_

Get | Description
--- | --- 
`Player` | the `Player`



---

### Public Methods for [`GameModeChange`](GameModeChange.md)

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
	

