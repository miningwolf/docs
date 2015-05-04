## AsyncPlayerChatEvent __class__

>io.wolfscript.event.player.AsyncPlayerChatEvent
>Extends [`PlayerEvent`](PlayerEvent.md)
>Implements [`Cancellable`](../Cancellable.md)

---

### Class Overview

This event will sometimes fire synchronously, depending on how it was triggered. <p> The constructor provides a boolean to indicate if the event was fired synchronously or asynchronously. When asynchronous, this event can be called from any thread, sans the main thread, and has limited access to the API. <p> If a player is the direct cause of this event by an incoming packet, this event will be asynchronous. If a plugin triggers this event by compelling a player to chat, this event will be synchronous. <p> Care should be taken to check `#isAsynchronous()` and treat the event appropriately.

Method | Type   
--- | :--- 
new __AsyncPlayerChatEvent__(boolean, Player, String, Set) <br> _AsyncPlayerChatEvent constructor_ | _constructor_
 readonly property __Format__ <br> _Get: Gets the format to use to display this chat message._ | `String`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
  property __Message__ <br> _Get: Gets the message that the player is attempting to send. This message<br>Set: Sets the message that the player will send. This message will be used_ | `String`
 readonly property __Recipients__ <br> _Get: Sets the format to use to display this chat message._ | `Set<Player>`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
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
final function __isAsynchronous__() <br> _Any custom event that should not by synchronized with other events must_ | `boolean`







---

### Public Constructors for [`AsyncPlayerChatEvent`](AsyncPlayerChatEvent.md)

##### <a id='asyncplayerchatevent'></a>new __AsyncPlayerChatEvent__(boolean, Player, String, Set) 

_AsyncPlayerChatEvent constructor_

Argument | Type | Description  
--- | --- | --- 
boolean | `final` | boolean argument
Player | `final` | Player argument
String | `final` | String argument
Set | `final` | Set argument

---

### Public Properties for [`AsyncPlayerChatEvent`](AsyncPlayerChatEvent.md)

##### <a id='format'></a>public  readonly property __Format__

_Get: Gets the format to use to display this chat message. <p> When this event finishes execution, the first format parameter is the `Player#getDisplayName()` and the second parameter is `#getMessage()`_

Get | Description
--- | --- 
`String` | {@link String#format(String, Object...)} compatible format string



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

_Get: Gets the message that the player is attempting to send. This message will be used with `#getFormat()`.<br>Set: Sets the message that the player will send. This message will be used with `#getFormat()`._

Get | Description
--- | --- 
`String` | Message the player is attempting to send

Set | Type | Description  
--- | --- | --- 
message | `String` | New message that the player will send


##### <a id='recipients'></a>public  readonly property __Recipients__

_Get: Sets the format to use to display this chat message. <p> When this event finishes execution, the first format parameter is the `Player#getDisplayName()` and the second parameter is `#getMessage()`_

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


---

### Public Methods for [`AsyncPlayerChatEvent`](AsyncPlayerChatEvent.md)

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

_Any custom event that should not by synchronized with other events must use the specific constructor. These are the caveats of using an asynchronous event: <ul> <li>The event is never fired from inside code triggered by a synchronous event. Attempting to do so results in an `IllegalStateException`. <li>However, asynchronous event handlers may fire synchronous or asynchronous events <li>The event may be fired multiple times simultaneously and in any order. <li>Any newly registered or unregistered handler is ignored after an event starts execution. <li>The handlers for this event may block for any length of time. <li>Some implementations may selectively declare a specific event use as asynchronous. This behavior should be clearly defined. <li>Asynchronous calls are not calculated in the plugin timing system. </ul>_

Returns | Description
--- | --- 
`boolean` | false by default, true if the event fires asynchronously


---


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

