## KickEvent __class__

>io.wolfscript.event.player.KickEvent
>Extends [`Hook`](../Hook.md)
``` javascript
this.on('player.KickEvent', function (e) { });
```


---

### Class Overview

Kick event. Contains the player who was kicked and the MessageReceiver who kicked them

Method | Type   
--- | :--- 
 readonly property __KickedPlayer__ <br> _Get: Get the `Player` being kicked_ | `Player`
 readonly property __Moderator__ <br> _Get: Get the [`MessageReceiver`](../../chat/MessageReceiver.md) that has issued the kick_ | [`MessageReceiver`](../../chat/MessageReceiver.md)
 readonly property __Reason__ <br> _Get: Gets the reason for the kick_ | `String`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](../Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](../Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





---


### Public Properties for [`KickEvent`](KickEvent.md)

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

### Public Methods for [`KickEvent`](KickEvent.md)

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
	

