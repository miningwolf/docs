## PlayerPreLoginEvent __class__

>io.wolfscript.event.player.PlayerPreLoginEvent
>Extends [`Event`](../Event.md)

---

### Class Overview

Stores details for players attempting to log in

Method | Type   
--- | :--- 
new __PlayerPreLoginEvent__(String, InetAddress, UUID) <br> _PlayerPreLoginEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Address__ <br> _Get: Gets the player IP address._ | `InetAddress`
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
  property __KickMessage__ <br> _Get: Gets the current kick message that will be used if getResult() !=<br>Set: Sets the kick message to display if getResult() != Result.ALLOWED_ | `String`
 readonly property __Name__ <br> _Get: Gets the player's name._ | `String`
  property __Result__ <br> _Get: Gets the current result of the login, as an enum<br>Set: Sets the new result of the login, as an enum_ | `Result`
 readonly property __UniqueId__ <br> _Get: Gets the player's unique ID._ | `UUID`
 function __disallow__(Result, String) <br> _Disallows the player from logging in, with the given reason_ | `void`
 function __allow__() <br> _Allows the player to log in_ | `void`
 |
__Inherited items from [`Event`](../Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`





---

### Public Constructors for [`PlayerPreLoginEvent`](PlayerPreLoginEvent.md)

##### <a id='playerpreloginevent'></a>new __PlayerPreLoginEvent__(String, InetAddress) 
_Deprecated_

_PlayerPreLoginEvent constructor_

Argument | Type | Description  
--- | --- | --- 
String | `final` | String argument
InetAddress | `final` | InetAddress argument

##### <a id='playerpreloginevent'></a>new __PlayerPreLoginEvent__(String, InetAddress, UUID) 

_PlayerPreLoginEvent constructor_

Argument | Type | Description  
--- | --- | --- 
String | `final` | String argument
InetAddress | `final` | InetAddress argument
UUID | `final` | UUID argument

---

### Public Properties for [`PlayerPreLoginEvent`](PlayerPreLoginEvent.md)

##### <a id='handlerlist'></a>public static readonly property __HandlerList__

_HandlerList property_

Get | 
--- | 
[`HandlerList`](../HandlerList.md) |



##### <a id='address'></a>public  readonly property __Address__

_Get: Gets the player IP address._

Get | Description
--- | --- 
`InetAddress` | The IP address



##### <a id='handlers'></a>public  readonly property __Handlers__

_Handlers property_

Get | 
--- | 
[`HandlerList`](../HandlerList.md) |



##### <a id='kickmessage'></a>public   property __KickMessage__

_Get: Gets the current kick message that will be used if getResult() != Result.ALLOWED<br>Set: Sets the kick message to display if getResult() != Result.ALLOWED_

Get | Description
--- | --- 
`String` | Current kick message

Set | Type | Description  
--- | --- | --- 
String | `final` | String argument


##### <a id='name'></a>public  readonly property __Name__

_Get: Gets the player's name._

Get | Description
--- | --- 
`String` | the player's name



##### <a id='result'></a>public   property __Result__

_Get: Gets the current result of the login, as an enum<br>Set: Sets the new result of the login, as an enum_

Get | Description
--- | --- 
`Result` | Current Result of the login

Set | Type | Description  
--- | --- | --- 
Result | `final` | Result argument


##### <a id='uniqueid'></a>public  readonly property __UniqueId__

_Get: Gets the player's unique ID._

Get | Description
--- | --- 
`UUID` | The unique ID



---

### Public Methods for [`PlayerPreLoginEvent`](PlayerPreLoginEvent.md)

##### <a id='disallow'></a>public  function __disallow__(Result, String)

_Disallows the player from logging in, with the given reason_

Argument | Type | Description  
--- | --- | --- 
Result | `final` | Result argument
String | `final` | String argument

Returns | 
--- | 
`void` |


##### <a id='allow'></a>public  function __allow__()

_Allows the player to log in_

Returns | 
--- | 
`void` |


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


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

