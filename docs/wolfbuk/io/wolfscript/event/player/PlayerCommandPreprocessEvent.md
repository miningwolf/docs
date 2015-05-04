## PlayerCommandPreprocessEvent __class__

>io.wolfscript.event.player.PlayerCommandPreprocessEvent
>Extends [`PlayerEvent`](PlayerEvent.md)
>Implements [`Cancellable`](../Cancellable.md)
``` javascript
this.on('player.PlayerCommandPreprocessEvent', function (e) { });
```


---

### Class Overview

class PlayerCommandPreprocessEvent

Method | Type   
--- | :--- 
new __PlayerCommandPreprocessEvent__(Player, String) <br> _PlayerCommandPreprocessEvent constructor_ | _constructor_
new __PlayerCommandPreprocessEvent__(Player, String, Set) <br> _PlayerCommandPreprocessEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Message__ <br> _Get: Gets the command that the player is attempting to send._ | `String`
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
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







---

### Public Constructors for [`PlayerCommandPreprocessEvent`](PlayerCommandPreprocessEvent.md)

##### <a id='playercommandpreprocessevent'></a>new __PlayerCommandPreprocessEvent__(Player, String) 

_PlayerCommandPreprocessEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Player | `final` | Player argument
String | `final` | String argument

##### <a id='playercommandpreprocessevent'></a>new __PlayerCommandPreprocessEvent__(Player, String, Set) 

_PlayerCommandPreprocessEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Player | `final` | Player argument
String | `final` | String argument
Set | `final` | Set argument

---

### Public Properties for [`PlayerCommandPreprocessEvent`](PlayerCommandPreprocessEvent.md)

##### <a id='format'></a>public   property __Format__
_Deprecated: This method is provided for backward compatibility with no guarantee to the effect of modifying the format._

_Get: Gets the format to use to display this chat message<br>Set: Sets the format to use to display this chat message_

Get | 
--- | 
`String` |

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



##### <a id='message'></a>public  readonly property __Message__

_Get: Gets the command that the player is attempting to send. <p> All commands begin with a special character; implementations do not consider the first character when executing the content._

Get | Description
--- | --- 
`String` | Message the player is attempting to send



##### <a id='recipients'></a>public  readonly property __Recipients__
_Deprecated: This method is provided for backward compatibility with no guarantee to the effect of viewing or modifying the set._

_Get: Gets a set of recipients that this chat message will be displayed to. <p> The set returned is not guaranteed to be mutable and may auto-populate on access. Any listener accessing the returned set should be aware that it may reduce performance for a lazy set implementation. Listeners should be aware that modifying the list may throw `UnsupportedOperationException` if the event caller provides an unmodifiable set._

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

### Public Methods for [`PlayerCommandPreprocessEvent`](PlayerCommandPreprocessEvent.md)

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


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

