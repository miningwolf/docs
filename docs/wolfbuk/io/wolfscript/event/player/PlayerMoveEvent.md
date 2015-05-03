## PlayerMoveEvent __class__

>io.wolfscript.event.player.PlayerMoveEvent
>Extends [`PlayerEvent`](PlayerEvent.md)
>Implements [`Cancellable`](..\Cancellable.md)

---

### Class Overview

Holds information for player movement events

Method | Type   
--- | :--- 
new __PlayerMoveEvent__(Player, Location, Location) <br> _PlayerMoveEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](..\HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](..\HandlerList.md)
 writeonly property __To__ <br> _Set: Gets the cancellation state of this event. A cancelled event will not_ | `void`
 |
__Inherited items from [`PlayerEvent`](PlayerEvent.md)__ |
new __PlayerEvent__(Player) <br> _PlayerEvent constructor_ | _constructor_
final readonly property __Player__ <br> _Get: Returns the player involved in this event_ | `Player`
 |
__Inherited items from [`Event`](..\Event.md)__ |
final function __isAsynchronous__() <br> _The default constructor is defined for cleaner code. This constructor_ | `boolean`







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

##### <a id='handlerlist'></a>public static readonly property __HandlerList__

_HandlerList property_

Get | 
--- | 
[`HandlerList`](..\HandlerList.md) |



##### <a id='handlers'></a>public  readonly property __Handlers__

_Handlers property_

Get | 
--- | 
[`HandlerList`](..\HandlerList.md) |



##### <a id='to'></a>public  writeonly property __To__

_Set: Gets the cancellation state of this event. A cancelled event will not be executed in the server, but will still pass to other plugins <p> If a move or teleport event is cancelled, the player will be moved or teleported back to the Location as defined by getFrom(). This will not fire an event_

Get | Description
--- | --- 
`void` | true if this event is cancelled /
    public boolean isCancelled() {
        return cancel;
    }

    /** Sets the cancellation state of this event. A cancelled event will not be executed in the server, but will still pass to other plugins <p> If a move or teleport event is cancelled, the player will be moved or teleported back to the Location as defined by getFrom(). This will not fire an event

Set | Type | Description  
--- | --- | --- 
to | `Location` | New Location this player will move to


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

### Public Methods for [`Event`](..\Event.md)

##### <a id='isasynchronous'></a>public final function __isAsynchronous__()

_The default constructor is defined for cleaner code. This constructor assumes the event is synchronous. /
    public Event() {
        this(false);
    }

    /** This constructor is used to explicitly declare an event as synchronous or asynchronous._

Returns | Description
--- | --- 
`boolean` | name of this event /
    public String getEventName() {
        if (name == null) {
            name = getClass().getSimpleName();
        }
        return name;
    }

    public abstract HandlerList getHandlers();

    /** Any custom event that should not by synchronized with other events must use the specific constructor. These are the caveats of using an asynchronous event: <ul> <li>The event is never fired from inside code triggered by a synchronous event. Attempting to do so results in an `IllegalStateException`. <li>However, asynchronous event handlers may fire synchronous or asynchronous events <li>The event may be fired multiple times simultaneously and in any order. <li>Any newly registered or unregistered handler is ignored after an event starts execution. <li>The handlers for this event may block for any length of time. <li>Some implementations may selectively declare a specific event use as asynchronous. This behavior should be clearly defined. <li>Asynchronous calls are not calculated in the plugin timing system. </ul>


---


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	
