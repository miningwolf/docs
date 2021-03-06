## BanEvent __class__

>io.wolfscript.event.player.BanEvent
>Extends [`Hook`](../Hook.md)
``` javascript
this.on('player.BanEvent', function (e) { });
```


---

### Class Overview

Ban event. Contains information about an issued Ban

Method | Type   
--- | :--- 
 readonly property __BannedPlayer__ <br> _BannedPlayer property_ | [`PlayerReference`](../../api/PlayerReference.md)
 readonly property __Bantime__ <br> _Get: Return the ban time as unix timestamp._ | `long`
 readonly property __Ip__ <br> _Get: Gets the banned IP address_ | `String`
 readonly property __Moderator__ <br> _Get: Get the [`MessageReceiver`](../../chat/MessageReceiver.md) that has issued the ban._ | [`MessageReceiver`](../../chat/MessageReceiver.md)
 readonly property __Reason__ <br> _Get: Gets the reason for the ban_ | `String`
 function __isIpBan__() <br> _Checks if this is an IP ban_ | `boolean`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](../Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](../Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





---


### Public Properties for [`BanEvent`](BanEvent.md)

##### <a id='bannedplayer'></a>public  readonly property __BannedPlayer__

_BannedPlayer property_

Get | 
--- | 
[`PlayerReference`](../../api/PlayerReference.md) |



##### <a id='bantime'></a>public  readonly property __Bantime__

_Get: Return the ban time as unix timestamp. This is the amount of seconds this ban lasts_

Get | Description
--- | --- 
`long` | the bantime, -1 if ban is a perma-ban



##### <a id='ip'></a>public  readonly property __Ip__

_Get: Gets the banned IP address_

Get | Description
--- | --- 
`String` | ip if is ipban, null otherwise



##### <a id='moderator'></a>public  readonly property __Moderator__

_Get: Get the [`MessageReceiver`](../../chat/MessageReceiver.md) that has issued the ban._

Get | Description
--- | --- 
[`MessageReceiver`](../../chat/MessageReceiver.md) | moderator



##### <a id='reason'></a>public  readonly property __Reason__

_Get: Gets the reason for the ban_

Get | Description
--- | --- 
`String` | reason



---

### Public Methods for [`BanEvent`](BanEvent.md)

##### <a id='isipban'></a>public  function __isIpBan__()

_Checks if this is an IP ban_

Returns | Description
--- | --- 
`boolean` | true if is IP ban


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
	

