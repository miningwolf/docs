## ServerListPingEvent __class__

>io.wolfscript.event.system.ServerListPingEvent
>Extends [`CancelableHook`](../../hook/CancelableHook.md)
``` javascript
this.on('system.ServerListPingEvent', function (e) { });
```


---

### Class Overview

Called when a client ping the server

Method | Type   
--- | :--- 
 writeonly property __Motd__ <br> _Set: Set the MOTD that will be sent to the client_ | `void`
 readonly property __RequesterAddress__ <br> _Get: Gets the `InetAddress` (IP) of the requesting party_ | `InetAddress`
  property __Favicon__ <br> _Favicon property_ | `String`
 readonly property __HostNamePinged__ <br> _Get: Gets the HostName (or IP) used by the requester to connect to the server_ | `String`
 readonly property __PortPinged__ <br> _Get: Gets the port the Requester has stated it has pinged_ | `int`
  property __Motd__ <br> _Get: Retrieve the MOTD that will be sent to the client<br>Set: Set the MOTD that will be sent to the client_ | [`ChatComponent`](../../api/chat/ChatComponent.md)
  property __MaxPlayers__ <br> _MaxPlayers property_ | `int`
  property __CurrentPlayers__ <br> _Get: Retrieve the current amount of players connected to the server that will be sent to the client.<br>Set: Set the current amount of players connected to the server that will be sent to the client_ | `int`
 readonly property __Profiles__ <br> _Get: Gets the `GameProfile`s to be sent_ | `List<GameProfile>`
 readonly property __RequesterPort__ <br> _Get: Gets the port used by the requesting party_ | `int`
 readonly property __RequesterProtocol__ <br> _Get: Gets the protocol version for the requesting party_ | `int`
 function __toString__() <br> _toString method_ | `String`
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


### Public Properties for [`ServerListPingEvent`](ServerListPingEvent.md)

##### <a id='motd'></a>public  writeonly property __Motd__

_Set: Set the MOTD that will be sent to the client_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
motd | `String` | The new MOTD


##### <a id='requesteraddress'></a>public  readonly property __RequesterAddress__

_Get: Gets the `InetAddress` (IP) of the requesting party_

Get | Description
--- | --- 
`InetAddress` | `InetAddress` of requesting party



##### <a id='favicon'></a>public   property __Favicon__

_Favicon property_

Get | Description
--- | --- 
`String` | the favicon string

Set | Type | Description  
--- | --- | --- 
favicon | `String` | favicon argument


##### <a id='hostnamepinged'></a>public  readonly property __HostNamePinged__

_Get: Gets the HostName (or IP) used by the requester to connect to the server_

Get | Description
--- | --- 
`String` | host name (or IP) used



##### <a id='portpinged'></a>public  readonly property __PortPinged__

_Get: Gets the port the Requester has stated it has pinged_

Get | Description
--- | --- 
`int` | port pinged



##### <a id='motd'></a>public   property __Motd__

_Get: Retrieve the MOTD that will be sent to the client<br>Set: Set the MOTD that will be sent to the client_

Get | Description
--- | --- 
[`ChatComponent`](../../api/chat/ChatComponent.md) | The MOTD that will be sent to the client

Set | Type | Description  
--- | --- | --- 
motd | [`ChatComponent`](../../api/chat/ChatComponent.md) | The new MOTD


##### <a id='maxplayers'></a>public   property __MaxPlayers__

_MaxPlayers property_

Get | Description
--- | --- 
`int` | The maximum amount of players

Set | Type | Description  
--- | --- | --- 
maxPlayers | `int` | maxPlayers argument


##### <a id='currentplayers'></a>public   property __CurrentPlayers__

_Get: Retrieve the current amount of players connected to the server that will be sent to the client.<br>Set: Set the current amount of players connected to the server that will be sent to the client_

Get | Description
--- | --- 
`int` | The current amount of players

Set | Type | Description  
--- | --- | --- 
currentPlayers | `int` | the current amount of players connected to the server


##### <a id='profiles'></a>public  readonly property __Profiles__

_Get: Gets the `GameProfile`s to be sent_

Get | Description
--- | --- 
`List<GameProfile>` | profile list



##### <a id='requesterport'></a>public  readonly property __RequesterPort__

_Get: Gets the port used by the requesting party_

Get | Description
--- | --- 
`int` | port



##### <a id='requesterprotocol'></a>public  readonly property __RequesterProtocol__

_Get: Gets the protocol version for the requesting party_

Get | Description
--- | --- 
`int` | requester's protocol version



---

### Public Methods for [`ServerListPingEvent`](ServerListPingEvent.md)

##### <a id='tostring'></a>public  function __toString__()

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
	

