## PaintingPlaceEvent __class__

>io.wolfscript.event.painting.PaintingPlaceEvent
>Extends [`PaintingEvent`](PaintingEvent.md)
>Implements [`Cancellable`](..\Cancellable.md)

---

### Class Overview

Triggered when a painting is created in the world

Method | Type   
--- | :--- 
new __PaintingPlaceEvent__(Painting, Player, Block, BlockFace) <br> _PaintingPlaceEvent constructor_ | _constructor_
 readonly property __BlockFace__ <br> _Get: Returns the player placing the painting_ | [`BlockFace`](..\..\block\BlockFace.md)
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](..\HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](..\HandlerList.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`PaintingEvent`](PaintingEvent.md)__ |
 readonly property __Painting__ <br> _Get: Gets the painting involved in this event._ | [`Painting`](..\..\entity\Painting.md)
 |
__Inherited items from [`Event`](..\Event.md)__ |
final function __isAsynchronous__() <br> _The default constructor is defined for cleaner code. This constructor_ | `boolean`







---

### Public Constructors for [`PaintingPlaceEvent`](PaintingPlaceEvent.md)

##### <a id='paintingplaceevent'></a>new __PaintingPlaceEvent__(Painting, Player, Block, BlockFace) 

_PaintingPlaceEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Painting | `final` | Painting argument
Player | `final` | Player argument
Block | `final` | Block argument
BlockFace | `final` | BlockFace argument

---

### Public Properties for [`PaintingPlaceEvent`](PaintingPlaceEvent.md)

##### <a id='blockface'></a>public  readonly property __BlockFace__

_Get: Returns the player placing the painting_

Get | Description
--- | --- 
[`BlockFace`](..\..\block\BlockFace.md) | Entity returns the player placing the painting /
    public Player getPlayer() {
        return player;
    }

    /** Returns the block that the painting was placed on



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



##### <a id='cancelled'></a>public  writeonly property __Cancelled__

_Cancelled property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
cancel | `boolean` | cancel argument


---

### Public Methods for [`PaintingPlaceEvent`](PaintingPlaceEvent.md)

##### <a id='iscancelled'></a>public  function __isCancelled__()

_isCancelled method_

Returns | 
--- | 
`boolean` |


---

### Public Properties for [`PaintingEvent`](PaintingEvent.md)

##### <a id='painting'></a>public  readonly property __Painting__

_Get: Gets the painting involved in this event._

Get | Description
--- | --- 
[`Painting`](..\..\entity\Painting.md) | the painting



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
	

