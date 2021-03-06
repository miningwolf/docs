## RemoteServerCommandEvent __class__

>io.wolfscript.event.server.RemoteServerCommandEvent
>Extends [`ServerCommandEvent`](ServerCommandEvent.md)
``` javascript
this.on('server.RemoteServerCommandEvent', function (e) { });
```


---

### Class Overview

This event is called when a command is recieved over RCON. See the javadocs of [`ServerCommandEvent`](ServerCommandEvent.md) for more information.

Method | Type   
--- | :--- 
new __RemoteServerCommandEvent__(CommandSender, String) <br> _RemoteServerCommandEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
 |
__Inherited items from [`ServerCommandEvent`](ServerCommandEvent.md)__ |
new __ServerCommandEvent__(CommandSender, String) <br> _ServerCommandEvent constructor_ | _constructor_
  property __Command__ <br> _Get: Gets the command that the user is attempting to execute from the<br>Set: Sets the command that the server will execute_ | `String`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Sender__ <br> _Get: Get the command sender._ | [`CommandSender`](../../command/CommandSender.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
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

### Public Constructors for [`RemoteServerCommandEvent`](RemoteServerCommandEvent.md)

##### <a id='remoteservercommandevent'></a>new __RemoteServerCommandEvent__(CommandSender, String) 

_RemoteServerCommandEvent constructor_

Argument | Type | Description  
--- | --- | --- 
CommandSender | `final` | CommandSender argument
String | `final` | String argument

---

### Public Properties for [`RemoteServerCommandEvent`](RemoteServerCommandEvent.md)

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



---
### Public Constructors for [`ServerCommandEvent`](ServerCommandEvent.md)

##### <a id='servercommandevent'></a>new __ServerCommandEvent__(CommandSender, String) 

_ServerCommandEvent constructor_

Argument | Type | Description  
--- | --- | --- 
CommandSender | `final` | CommandSender argument
String | `final` | String argument

---

### Public Properties for [`ServerCommandEvent`](ServerCommandEvent.md)

##### <a id='command'></a>public   property __Command__

_Get: Gets the command that the user is attempting to execute from the console<br>Set: Sets the command that the server will execute_

Get | Description
--- | --- 
`String` | Command the user is attempting to execute

Set | Type | Description  
--- | --- | --- 
message | `String` | New message that the server will execute


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



##### <a id='sender'></a>public  readonly property __Sender__

_Get: Get the command sender._

Get | Description
--- | --- 
[`CommandSender`](../../command/CommandSender.md) | The sender



##### <a id='cancelled'></a>public  writeonly property __Cancelled__

_Cancelled property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
cancel | `boolean` | cancel argument


---

### Public Methods for [`ServerCommandEvent`](ServerCommandEvent.md)

##### <a id='iscancelled'></a>public  function __isCancelled__()

_isCancelled method_

Returns | 
--- | 
`boolean` |


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


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

