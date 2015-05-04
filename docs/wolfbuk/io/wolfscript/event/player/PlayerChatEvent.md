## PlayerChatEvent __class__

>io.wolfscript.event.player.PlayerChatEvent
>Extends [`PlayerEvent`](PlayerEvent.md)
>Implements [`Cancellable`](../Cancellable.md)

---

### Class Overview

Holds information for player chat and commands

Method | Type   
--- | :--- 
new __PlayerChatEvent__(Player, String) <br> _PlayerChatEvent constructor_ | _constructor_
new __PlayerChatEvent__(Player, String, String, Set) <br> _PlayerChatEvent constructor_ | _constructor_
  property __Format__ <br> _Get: Gets the format to use to display this chat message<br>Set: Sets the format to use to display this chat message_ | `String`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
  property __Message__ <br> _Get: Gets the message that the player is attempting to send<br>Set: Sets the message that the player will send_ | `String`
 readonly property __Recipients__ <br> _Get: Gets a set of recipients that this chat message will be displayed to_ | `Set<Player>`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 writeonly property __Player__ <br> _Set: Sets the player that this message will display as, or command will be_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
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

### Public Constructors for [`PlayerChatEvent`](PlayerChatEvent.md)

##### <a id='playerchatevent'></a>new __PlayerChatEvent__(Player, String) 

_PlayerChatEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Player | `final` | Player argument
String | `final` | String argument

##### <a id='playerchatevent'></a>new __PlayerChatEvent__(Player, String, String, Set) 

_PlayerChatEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Player | `final` | Player argument
String | `final` | String argument
String | `final` | String argument
Set | `final` | Set argument

---

### Public Properties for [`PlayerChatEvent`](PlayerChatEvent.md)

##### <a id='format'></a>public   property __Format__

_Get: Gets the format to use to display this chat message<br>Set: Sets the format to use to display this chat message_

Get | Description
--- | --- 
`String` | String.Format compatible format string

Set | Type | Description  
--- | --- | --- 
String | `final` | String argument


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



##### <a id='message'></a>public   property __Message__

_Get: Gets the message that the player is attempting to send<br>Set: Sets the message that the player will send_

Get | Description
--- | --- 
`String` | Message the player is attempting to send

Set | Type | Description  
--- | --- | --- 
message | `String` | New message that the player will send


##### <a id='recipients'></a>public  readonly property __Recipients__

_Get: Gets a set of recipients that this chat message will be displayed to_

Get | Description
--- | --- 
`Set<Player>` | All Players who will see this chat message



##### <a id='cancelled'></a>public  writeonly property __Cancelled__

_Cancelled property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
cancel | `boolean` | cancel argument


##### <a id='player'></a>public  writeonly property __Player__

_Set: Sets the player that this message will display as, or command will be executed as_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
Player | `final` | Player argument


---

### Public Methods for [`PlayerChatEvent`](PlayerChatEvent.md)

##### <a id='iscancelled'></a>public  function __isCancelled__()

_isCancelled method_

Returns | 
--- | 
`boolean` |


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


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

