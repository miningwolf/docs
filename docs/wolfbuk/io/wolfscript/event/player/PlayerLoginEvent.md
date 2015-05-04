## PlayerLoginEvent __class__

>io.wolfscript.event.player.PlayerLoginEvent
>Extends [`PlayerEvent`](PlayerEvent.md)

this.on('player.PlayerLoginEvent', function (e) { });

---

### Class Overview

Stores details for players attempting to log in

Method | Type   
--- | :--- 
new __PlayerLoginEvent__(Player, String, InetAddress) <br> _This constructor defaults message to an empty string, and result to_ | _constructor_
new __PlayerLoginEvent__(Player, hostname, InetAddress, Result, String) <br> _This constructor pre-configures the event with a result and message_ | _constructor_
 readonly property __Address__ <br> _Get: Gets the `InetAddress` for the Player associated with this event._ | `InetAddress`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Hostname__ <br> _Get: Gets the hostname that the player used to connect to the server, or_ | `String`
  property __KickMessage__ <br> _Get: Gets the current kick message that will be used if getResult() !=<br>Set: Sets the kick message to display if getResult() != Result.ALLOWED_ | `String`
  property __Result__ <br> _Get: Gets the current result of the login, as an enum<br>Set: Sets the new result of the login, as an enum_ | `Result`
 function __allow__() <br> _Allows the player to log in_ | `void`
 function __disallow__(Result, String) <br> _Disallows the player from logging in, with the given reason_ | `void`
 |
__Inherited items from [`PlayerEvent`](PlayerEvent.md)__ |
new __PlayerEvent__(Player) <br> _PlayerEvent constructor_ | _constructor_
final readonly property __Player__ <br> _Get: Returns the player involved in this event_ | `Player`
 |
__Inherited items from [`Event`](../Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







---

### Public Constructors for [`PlayerLoginEvent`](PlayerLoginEvent.md)

##### <a id='playerloginevent'></a>new __PlayerLoginEvent__(Player) 
_Deprecated: Address should be provided in other constructor_

_PlayerLoginEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Player | `final` | Player argument

##### <a id='playerloginevent'></a>new __PlayerLoginEvent__(Player, String) 
_Deprecated: Address should be provided in other constructor_

_PlayerLoginEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Player | `final` | Player argument
String | `final` | String argument

##### <a id='playerloginevent'></a>new __PlayerLoginEvent__(Player, String, InetAddress) 

_This constructor defaults message to an empty string, and result to ALLOWED_

Argument | Type | Description  
--- | --- | --- 
Player | `final` | Player argument
String | `final` | String argument
InetAddress | `final` | InetAddress argument

##### <a id='playerloginevent'></a>new __PlayerLoginEvent__(Player, Result, String) 
_Deprecated: Address and hostname should be provided in other constructor_

_PlayerLoginEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Player | `final` | Player argument
Result | `final` | Result argument
String | `final` | String argument

##### <a id='playerloginevent'></a>new __PlayerLoginEvent__(Player, hostname, InetAddress, Result, String) 

_This constructor pre-configures the event with a result and message_

Argument | Type | Description  
--- | --- | --- 
Player | `final` | Player argument
hostname | `String` | The hostname that was used to connect to the server
InetAddress | `final` | InetAddress argument
Result | `final` | Result argument
String | `final` | String argument

---

### Public Properties for [`PlayerLoginEvent`](PlayerLoginEvent.md)

##### <a id='address'></a>public  readonly property __Address__

_Get: Gets the `InetAddress` for the Player associated with this event. This method is provided as a workaround for player.getAddress() returning null during PlayerLoginEvent._

Get | Description
--- | --- 
`InetAddress` | The address for this player. For legacy compatibility, this may be null.



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



##### <a id='hostname'></a>public  readonly property __Hostname__

_Get: Gets the hostname that the player used to connect to the server, or blank if unknown_

Get | Description
--- | --- 
`String` | The hostname



##### <a id='kickmessage'></a>public   property __KickMessage__

_Get: Gets the current kick message that will be used if getResult() != Result.ALLOWED<br>Set: Sets the kick message to display if getResult() != Result.ALLOWED_

Get | Description
--- | --- 
`String` | Current kick message

Set | Type | Description  
--- | --- | --- 
String | `final` | String argument


##### <a id='result'></a>public   property __Result__

_Get: Gets the current result of the login, as an enum<br>Set: Sets the new result of the login, as an enum_

Get | Description
--- | --- 
`Result` | Current Result of the login

Set | Type | Description  
--- | --- | --- 
Result | `final` | Result argument


---

### Public Methods for [`PlayerLoginEvent`](PlayerLoginEvent.md)

##### <a id='allow'></a>public  function __allow__()

_Allows the player to log in_

Returns | 
--- | 
`void` |


##### <a id='disallow'></a>public  function __disallow__(Result, String)

_Disallows the player from logging in, with the given reason_

Argument | Type | Description  
--- | --- | --- 
Result | `final` | Result argument
String | `final` | String argument

Returns | 
--- | 
`void` |


---
### Public Constructors for [`PlayerEvent`](PlayerEvent.md)

##### <a id='playerevent'></a>new __PlayerEvent__(Player) 

_PlayerEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Player | `final` | Player argument

---

### Public Properties for [`PlayerEvent`](PlayerEvent.md)

##### <a id='player'></a>public final readonly property __Player__

_Get: Returns the player involved in this event_

Get | Description
--- | --- 
`Player` | Player who is involved in this event



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
	

