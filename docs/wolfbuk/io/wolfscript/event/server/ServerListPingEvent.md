## ServerListPingEvent __class__

>io.wolfscript.event.server.ServerListPingEvent
>Extends [`ServerEvent`](ServerEvent.md)
>Implements `Iterable<Player`
``` javascript
this.on('server.ServerListPingEvent', function (e) { });
```


---

### Class Overview

Called when a server list ping is coming in. Displayed players can be checked and removed by {@link #iterator() iterating} over this event.

Method | Type   
--- | :--- 
new __ServerListPingEvent__(InetAddress, String, int, int) <br> _ServerListPingEvent constructor_ | _constructor_
 readonly property __Address__ <br> _Get: Get the address the ping is coming from._ | `InetAddress`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
  property __MaxPlayers__ <br> _Get: Get the maximum number of players sent.<br>Set: Set the maximum number of players sent._ | `int`
  property __Motd__ <br> _Get: Get the message of the day message.<br>Set: Change the message of the day message._ | `String`
 readonly property __NumPlayers__ <br> _Get: Get the number of players sent._ | `int`
 |
__Inherited items from [`ServerEvent`](ServerEvent.md)__ |
 |
__Inherited items from [`Event`](../Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







---

### Public Constructors for [`ServerListPingEvent`](ServerListPingEvent.md)

##### <a id='serverlistpingevent'></a>new __ServerListPingEvent__(InetAddress, String, int, int) 

_ServerListPingEvent constructor_

Argument | Type | Description  
--- | --- | --- 
InetAddress | `final` | InetAddress argument
String | `final` | String argument
int | `final` | int argument
int | `final` | int argument

---

### Public Properties for [`ServerListPingEvent`](ServerListPingEvent.md)

##### <a id='address'></a>public  readonly property __Address__

_Get: Get the address the ping is coming from._

Get | Description
--- | --- 
`InetAddress` | the address



##### <a id='handlerlist'></a>public static readonly property __HandlerList__

_HandlerList property_

Get | 
--- | 
[`HandlerList`](../HandlerList.md) |



##### <a id='handlers'></a>public  readonly property __Handlers__

_Handlers property_

Get | 
--- | 
[`HandlerList`](../HandlerList.md) |



##### <a id='maxplayers'></a>public   property __MaxPlayers__

_Get: Get the maximum number of players sent.<br>Set: Set the maximum number of players sent._

Get | Description
--- | --- 
`int` | the maximum number of players

Set | Type | Description  
--- | --- | --- 
maxPlayers | `int` | the maximum number of player


##### <a id='motd'></a>public   property __Motd__

_Get: Get the message of the day message.<br>Set: Change the message of the day message._

Get | Description
--- | --- 
`String` | the message of the day

Set | Type | Description  
--- | --- | --- 
motd | `String` | the message of the day


##### <a id='numplayers'></a>public  readonly property __NumPlayers__

_Get: Get the number of players sent._

Get | Description
--- | --- 
`int` | the number of players



---
### Public Constructors for [`Event`](../Event.md)

##### <a id='event'></a>new __Event__() 

_The default constructor is defined for cleaner code. This constructor assumes the event is synchronous._


##### <a id='event'></a>new __Event__(isAsync) 

_This constructor is used to explicitly declare an event as synchronous or asynchronous._

Argument | Type | Description  
--- | --- | --- 
isAsync | `boolean` | true indicates the event will fire asynchronously, false by default from default constructor

---

### Public Properties for [`Event`](../Event.md)

##### <a id='eventname'></a>public  readonly property __EventName__

_Get: Convenience method for providing a user-friendly identifier. By default, it is the event's class's {@linkplain Class#getSimpleName() simple name}._

Get | Description
--- | --- 
`String` | name of this event



##### <a id='handlers'></a>public abstract readonly property __Handlers__

_Handlers property_

Get | 
--- | 
[`HandlerList`](../HandlerList.md) |



---

### Public Methods for [`Event`](../Event.md)

##### <a id='isasynchronous'></a>public final function __isAsynchronous__()

_isAsynchronous method_

Returns | 
--- | 
`boolean` |


---


---


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

