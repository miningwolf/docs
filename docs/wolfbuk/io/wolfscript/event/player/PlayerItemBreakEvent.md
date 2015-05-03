## PlayerItemBreakEvent __class__

>io.wolfscript.event.player.PlayerItemBreakEvent
>Extends [`PlayerEvent`](PlayerEvent.md)

---

### Class Overview

Fired when a player's item breaks (such as a shovel or flint and steel). <p> The item that's breaking will exist in the inventory with a stack size of 0. After the event, the item's durability will be reset to 0.

Method | Type   
--- | :--- 
new __PlayerItemBreakEvent__(Player, ItemStack) <br> _PlayerItemBreakEvent constructor_ | _constructor_
 readonly property __BrokenItem__ <br> _Get: Gets the item that broke_ | `ItemStack`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](..\HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](..\HandlerList.md)
 |
__Inherited items from [`PlayerEvent`](PlayerEvent.md)__ |
new __PlayerEvent__(Player) <br> _PlayerEvent constructor_ | _constructor_
final readonly property __Player__ <br> _Get: Returns the player involved in this event_ | `Player`
 |
__Inherited items from [`Event`](..\Event.md)__ |
final function __isAsynchronous__() <br> _The default constructor is defined for cleaner code. This constructor_ | `boolean`







---

### Public Constructors for [`PlayerItemBreakEvent`](PlayerItemBreakEvent.md)

##### <a id='playeritembreakevent'></a>new __PlayerItemBreakEvent__(Player, ItemStack) 

_PlayerItemBreakEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Player | `final` | Player argument
ItemStack | `final` | ItemStack argument

---

### Public Properties for [`PlayerItemBreakEvent`](PlayerItemBreakEvent.md)

##### <a id='brokenitem'></a>public  readonly property __BrokenItem__

_Get: Gets the item that broke_

Get | Description
--- | --- 
`ItemStack` | The broken item



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
	

