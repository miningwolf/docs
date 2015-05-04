## PlayerMoveEvent __class__

>io.wolfscript.event.player.PlayerMoveEvent
>Extends [`PlayerEvent`](PlayerEvent.md)
>Implements [`Cancellable`](../Cancellable.md)

---

### Class Overview

Holds information for player movement events

Method | Type   
--- | :--- 
new __PlayerMoveEvent__(Player, Location, Location) <br> _PlayerMoveEvent constructor_ | _constructor_
  property __From__ <br> _Get: Gets the location this player moved from<br>Set: Sets the location to mark as where the player moved from_ | `Location`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
  property __To__ <br> _Get: Gets the location this player moved to<br>Set: Sets the location that this player will move to_ | `Location`
 writeonly property __Cancelled__ <br> _Set: Sets the cancellation state of this event. A cancelled event will not_ | `void`
 function __isCancelled__() <br> _Gets the cancellation state of this event. A cancelled event will not_ | `boolean`
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

### Public Constructors for [`PlayerMoveEvent`](PlayerMoveEvent.md)

##### <a id='playermoveevent'></a>new __PlayerMoveEvent__(Player, Location, Location) 

_PlayerMoveEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Player | `final` | Player argument
Location | `final` | Location argument
Location | `final` | Location argument

---

### Public Properties for [`PlayerMoveEvent`](PlayerMoveEvent.md)

##### <a id='from'></a>public   property __From__

_Get: Gets the location this player moved from<br>Set: Sets the location to mark as where the player moved from_

Get | Description
--- | --- 
`Location` | Location the player moved from

Set | Type | Description  
--- | --- | --- 
from | `Location` | New location to mark as the players previous location


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



##### <a id='to'></a>public   property __To__

_Get: Gets the location this player moved to<br>Set: Sets the location that this player will move to_

Get | Description
--- | --- 
`Location` | Location the player moved to

Set | Type | Description  
--- | --- | --- 
to | `Location` | New Location this player will move to


##### <a id='cancelled'></a>public  writeonly property __Cancelled__

_Set: Sets the cancellation state of this event. A cancelled event will not be executed in the server, but will still pass to other plugins <p> If a move or teleport event is cancelled, the player will be moved or teleported back to the Location as defined by getFrom(). This will not fire an event_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
cancel | `boolean` | true if you wish to cancel this event


---

### Public Methods for [`PlayerMoveEvent`](PlayerMoveEvent.md)

##### <a id='iscancelled'></a>public  function __isCancelled__()

_Gets the cancellation state of this event. A cancelled event will not be executed in the server, but will still pass to other plugins <p> If a move or teleport event is cancelled, the player will be moved or teleported back to the Location as defined by getFrom(). This will not fire an event_

Returns | Description
--- | --- 
`boolean` | true if this event is cancelled


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
	

