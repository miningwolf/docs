## AsyncPlayerPreLoginEvent __class__

>io.wolfscript.event.player.AsyncPlayerPreLoginEvent
>Extends [`Event`](../Event.md)

this.on('player.AsyncPlayerPreLoginEvent', function (e) { });

---

### Class Overview

Stores details for players attempting to log in. <p> This event is asynchronous, and not run using main thread.

Method | Type   
--- | :--- 
new __AsyncPlayerPreLoginEvent__(String, InetAddress, UUID) <br> _AsyncPlayerPreLoginEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Address__ <br> _Get: Gets the player IP address._ | `InetAddress`
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
  property __KickMessage__ <br> _Get: Gets the current kick message that will be used if getResult() !=<br>Set: Sets the kick message to display if getResult() != Result.ALLOWED_ | `String`
  property __LoginResult__ <br> _Get: Gets the current result of the login, as an enum<br>Set: Sets the new result of the login, as an enum_ | `Result`
 readonly property __Name__ <br> _Get: Gets the player's name._ | `String`
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

### Public Constructors for [`AsyncPlayerPreLoginEvent`](AsyncPlayerPreLoginEvent.md)

##### <a id='asyncplayerpreloginevent'></a>new __AsyncPlayerPreLoginEvent__(String, InetAddress) 
_Deprecated_

_AsyncPlayerPreLoginEvent constructor_

Argument | Type | Description  
--- | --- | --- 
String | `final` | String argument
InetAddress | `final` | InetAddress argument

##### <a id='asyncplayerpreloginevent'></a>new __AsyncPlayerPreLoginEvent__(String, InetAddress, UUID) 

_AsyncPlayerPreLoginEvent constructor_

Argument | Type | Description  
--- | --- | --- 
String | `final` | String argument
InetAddress | `final` | InetAddress argument
UUID | `final` | UUID argument

---

### Public Properties for [`AsyncPlayerPreLoginEvent`](AsyncPlayerPreLoginEvent.md)

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


##### <a id='loginresult'></a>public   property __LoginResult__

_Get: Gets the current result of the login, as an enum<br>Set: Sets the new result of the login, as an enum_

Get | Description
--- | --- 
`Result` | Current Result of the login

Set | Type | Description  
--- | --- | --- 
Result | `final` | Result argument


##### <a id='name'></a>public  readonly property __Name__

_Get: Gets the player's name._

Get | Description
--- | --- 
`String` | the player's name



##### <a id='result'></a>public   property __Result__
_Deprecated: This method uses a deprecated enum from {@link io.wolfscript.event.player.PlayerPreLoginEvent}_

_Get: Gets the current result of the login, as an enum<br>Set: Sets the new result of the login, as an enum_

Get | 
--- | 
`Result` |

Set | Type | Description  
--- | --- | --- 
PlayerPreLoginEvent | `final` | PlayerPreLoginEvent argument


##### <a id='uniqueid'></a>public  readonly property __UniqueId__

_Get: Gets the player's unique ID._

Get | Description
--- | --- 
`UUID` | The unique ID



---

### Public Methods for [`AsyncPlayerPreLoginEvent`](AsyncPlayerPreLoginEvent.md)

##### <a id='disallow'></a>public  function __disallow__(Result, String)

_Disallows the player from logging in, with the given reason_

Argument | Type | Description  
--- | --- | --- 
Result | `final` | Result argument
String | `final` | String argument

Returns | 
--- | 
`void` |


##### <a id='disallow'></a>public  function __disallow__(PlayerPreLoginEvent, String)
_Deprecated: This method uses a deprecated enum from {@link io.wolfscript.event.player.PlayerPreLoginEvent}_

_Disallows the player from logging in, with the given reason_

Argument | Type | Description  
--- | --- | --- 
PlayerPreLoginEvent | `final` | PlayerPreLoginEvent argument
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


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

