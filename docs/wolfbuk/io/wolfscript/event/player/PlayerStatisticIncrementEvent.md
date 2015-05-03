## PlayerStatisticIncrementEvent __class__

>io.wolfscript.event.player.PlayerStatisticIncrementEvent
>Extends [`PlayerEvent`](PlayerEvent.md)
>Implements [`Cancellable`](..\Cancellable.md)

---

### Class Overview

Called when a player statistic is incremented. <p> This event is not called for `Statistic#PLAY_ONE_TICK` or movement based statistics.

Method | Type   
--- | :--- 
new __PlayerStatisticIncrementEvent__(player, statistic, initialValue, newValue) <br> _PlayerStatisticIncrementEvent constructor_ | _constructor_
new __PlayerStatisticIncrementEvent__(player, statistic, initialValue, newValue, entityType) <br> _PlayerStatisticIncrementEvent constructor_ | _constructor_
new __PlayerStatisticIncrementEvent__(player, statistic, initialValue, newValue, material) <br> _PlayerStatisticIncrementEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](..\HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](..\HandlerList.md)
 readonly property __Material__ <br> _Get: Gets the statistic that is being incremented._ | [`Material`](..\..\Material.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`PlayerEvent`](PlayerEvent.md)__ |
new __PlayerEvent__(Player) <br> _PlayerEvent constructor_ | _constructor_
final readonly property __Player__ <br> _Get: Returns the player involved in this event_ | `Player`
 |
__Inherited items from [`Event`](..\Event.md)__ |
final function __isAsynchronous__() <br> _The default constructor is defined for cleaner code. This constructor_ | `boolean`







---

### Public Constructors for [`PlayerStatisticIncrementEvent`](PlayerStatisticIncrementEvent.md)

##### <a id='playerstatisticincrementevent'></a>new __PlayerStatisticIncrementEvent__(player, statistic, initialValue, newValue) 

_PlayerStatisticIncrementEvent constructor_

Argument | Type | Description  
--- | --- | --- 
player | `Player` | player argument
statistic | `Statistic` | statistic argument
initialValue | `int` | initialValue argument
newValue | `int` | newValue argument

##### <a id='playerstatisticincrementevent'></a>new __PlayerStatisticIncrementEvent__(player, statistic, initialValue, newValue, entityType) 

_PlayerStatisticIncrementEvent constructor_

Argument | Type | Description  
--- | --- | --- 
player | `Player` | player argument
statistic | `Statistic` | statistic argument
initialValue | `int` | initialValue argument
newValue | `int` | newValue argument
entityType | [`EntityType`](..\..\entity\EntityType.md) | entityType argument

##### <a id='playerstatisticincrementevent'></a>new __PlayerStatisticIncrementEvent__(player, statistic, initialValue, newValue, material) 

_PlayerStatisticIncrementEvent constructor_

Argument | Type | Description  
--- | --- | --- 
player | `Player` | player argument
statistic | `Statistic` | statistic argument
initialValue | `int` | initialValue argument
newValue | `int` | newValue argument
material | [`Material`](..\..\Material.md) | material argument

---

### Public Properties for [`PlayerStatisticIncrementEvent`](PlayerStatisticIncrementEvent.md)

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



##### <a id='material'></a>public  readonly property __Material__

_Get: Gets the statistic that is being incremented._

Get | Description
--- | --- 
[`Material`](..\..\Material.md) | the incremented statistic /
    public Statistic getStatistic() {
        return statistic;
    }

    /** Gets the previous value of the statistic.



##### <a id='cancelled'></a>public  writeonly property __Cancelled__

_Cancelled property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
cancel | `boolean` | cancel argument


---

### Public Methods for [`PlayerStatisticIncrementEvent`](PlayerStatisticIncrementEvent.md)

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
	

