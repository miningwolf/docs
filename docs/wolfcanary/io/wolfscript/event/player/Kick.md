## Kick __class__

>io.wolfscript.event.player.Kick
>Extends [`Hook`](../../hook/Hook.md)

---

### Class Overview

Kick hook. Contains the player who was kicked and the MessageReceiver who kicked them

Method | Type   
--- | :--- 
new __Kick__(kickedPlayer, moderator, reason) <br> _Kick constructor_ | _constructor_
 readonly property __KickedPlayer__ <br> _Get: Get the `Player` being kicked_ | `Player`
 readonly property __Moderator__ <br> _Get: Get the [`MessageReceiver`](../../chat/MessageReceiver.md) that has issued the kick_ | [`MessageReceiver`](../../chat/MessageReceiver.md)
 readonly property __Reason__ <br> _Get: Gets the reason for the kick_ | `String`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](../../hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](../../hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





---

### Public Constructors for [`Kick`](Kick.md)

##### <a id='kick'></a>new __Kick__(kickedPlayer, moderator, reason) 

_Kick constructor_

Argument | Type | Description  
--- | --- | --- 
kickedPlayer | `Player` | kickedPlayer argument
moderator | [`MessageReceiver`](../../chat/MessageReceiver.md) | moderator argument
reason | `String` | reason argument

---

### Public Properties for [`Kick`](Kick.md)

##### <a id='kickedplayer'></a>public  readonly property __KickedPlayer__

_Get: Get the `Player` being kicked_

Get | Description
--- | --- 
`Player` | the `Player` kicked



##### <a id='moderator'></a>public  readonly property __Moderator__

_Get: Get the [`MessageReceiver`](../../chat/MessageReceiver.md) that has issued the kick_

Get | Description
--- | --- 
[`MessageReceiver`](../../chat/MessageReceiver.md) | the [`MessageReceiver`](../../chat/MessageReceiver.md) that issued the kick



##### <a id='reason'></a>public  readonly property __Reason__

_Get: Gets the reason for the kick_

Get | Description
--- | --- 
`String` | the kick reason



---

### Public Methods for [`Kick`](Kick.md)

##### <a id='tostring'></a>public final function __toString__()

_toString method_

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


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

