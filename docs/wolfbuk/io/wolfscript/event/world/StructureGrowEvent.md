## StructureGrowEvent __class__

>io.wolfscript.event.world.StructureGrowEvent
>Extends [`WorldEvent`](WorldEvent.md)
>Implements [`Cancellable`](..\Cancellable.md)

---

### Class Overview

Event that is called when an organic structure attempts to grow (Sapling {@literal ->} Tree), (Mushroom {@literal ->} Huge Mushroom), naturally or using bonemeal.

Method | Type   
--- | :--- 
new __StructureGrowEvent__(Location, TreeType, boolean, Player, List) <br> _StructureGrowEvent constructor_ | _constructor_
 readonly property __Blocks__ <br> _Get: Gets the location of the structure._ | `List<BlockState>`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](..\HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](..\HandlerList.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`WorldEvent`](WorldEvent.md)__ |
new __WorldEvent__(World) <br> _WorldEvent constructor_ | _constructor_
 readonly property __World__ <br> _Get: Gets the world primarily involved with this event_ | `World`
 |
__Inherited items from [`Event`](..\Event.md)__ |
final function __isAsynchronous__() <br> _The default constructor is defined for cleaner code. This constructor_ | `boolean`







---

### Public Constructors for [`StructureGrowEvent`](StructureGrowEvent.md)

##### <a id='structuregrowevent'></a>new __StructureGrowEvent__(Location, TreeType, boolean, Player, List) 

_StructureGrowEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Location | `final` | Location argument
TreeType | `final` | TreeType argument
boolean | `final` | boolean argument
Player | `final` | Player argument
List | `final` | List argument

---

### Public Properties for [`StructureGrowEvent`](StructureGrowEvent.md)

##### <a id='blocks'></a>public  readonly property __Blocks__

_Get: Gets the location of the structure._

Get | Description
--- | --- 
`List<BlockState>` | Location of the structure /
    public Location getLocation() {
        return location;
    }

    /** Gets the species type (birch, normal, pine, red mushroom, brown mushroom)



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

### Public Methods for [`StructureGrowEvent`](StructureGrowEvent.md)

##### <a id='iscancelled'></a>public  function __isCancelled__()

_isCancelled method_

Returns | 
--- | 
`boolean` |


---
### Public Constructors for [`WorldEvent`](WorldEvent.md)

##### <a id='worldevent'></a>new __WorldEvent__(World) 

_WorldEvent constructor_

Argument | Type | Description  
--- | --- | --- 
World | `final` | World argument

---

### Public Properties for [`WorldEvent`](WorldEvent.md)

##### <a id='world'></a>public  readonly property __World__

_Get: Gets the world primarily involved with this event_

Get | Description
--- | --- 
`World` | World which caused this event



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
	

