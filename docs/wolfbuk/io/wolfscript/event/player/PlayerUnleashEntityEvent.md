## PlayerUnleashEntityEvent __class__

>io.wolfscript.event.player.PlayerUnleashEntityEvent
>Extends [`EntityUnleashEvent`](..\entity\EntityUnleashEvent.md)
>Implements [`Cancellable`](..\Cancellable.md)

---

### Class Overview

Called prior to an entity being unleashed due to a player's action.

Method | Type   
--- | :--- 
new __PlayerUnleashEntityEvent__(entity, player) <br> _PlayerUnleashEntityEvent constructor_ | _constructor_
 readonly property __Player__ <br> _Get: Returns the player who is unleashing the entity._ | `Player`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`EntityUnleashEvent`](..\entity\EntityUnleashEvent.md)__ |
new __EntityUnleashEvent__(entity, reason) <br> _EntityUnleashEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](..\HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](..\HandlerList.md)
 readonly property __Reason__ <br> _Get: Returns the reason for the unleashing._ | `UnleashReason`
 |
__Inherited items from [`EntityEvent`](..\entity\EntityEvent.md)__ |
new __EntityEvent__(Entity) <br> _EntityEvent constructor_ | _constructor_
 readonly property __EntityType__ <br> _Get: Returns the Entity involved in this event_ | [`EntityType`](..\..\entity\EntityType.md)
 |
__Inherited items from [`Event`](..\Event.md)__ |
final function __isAsynchronous__() <br> _The default constructor is defined for cleaner code. This constructor_ | `boolean`









---

### Public Constructors for [`PlayerUnleashEntityEvent`](PlayerUnleashEntityEvent.md)

##### <a id='playerunleashentityevent'></a>new __PlayerUnleashEntityEvent__(entity, player) 

_PlayerUnleashEntityEvent constructor_

Argument | Type | Description  
--- | --- | --- 
entity | `Entity` | entity argument
player | `Player` | player argument

---

### Public Properties for [`PlayerUnleashEntityEvent`](PlayerUnleashEntityEvent.md)

##### <a id='player'></a>public  readonly property __Player__

_Get: Returns the player who is unleashing the entity._

Get | Description
--- | --- 
`Player` | The player



##### <a id='cancelled'></a>public  writeonly property __Cancelled__

_Cancelled property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
cancel | `boolean` | cancel argument


---

### Public Methods for [`PlayerUnleashEntityEvent`](PlayerUnleashEntityEvent.md)

##### <a id='iscancelled'></a>public  function __isCancelled__()

_isCancelled method_

Returns | 
--- | 
`boolean` |


---
### Public Constructors for [`EntityUnleashEvent`](..\entity\EntityUnleashEvent.md)

##### <a id='entityunleashevent'></a>new __EntityUnleashEvent__(entity, reason) 

_EntityUnleashEvent constructor_

Argument | Type | Description  
--- | --- | --- 
entity | `Entity` | entity argument
reason | `UnleashReason` | reason argument

---

### Public Properties for [`EntityUnleashEvent`](..\entity\EntityUnleashEvent.md)

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



##### <a id='reason'></a>public  readonly property __Reason__

_Get: Returns the reason for the unleashing._

Get | Description
--- | --- 
`UnleashReason` | The reason



---
### Public Constructors for [`EntityEvent`](..\entity\EntityEvent.md)

##### <a id='entityevent'></a>new __EntityEvent__(Entity) 

_EntityEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Entity | `final` | Entity argument

---

### Public Properties for [`EntityEvent`](..\entity\EntityEvent.md)

##### <a id='entitytype'></a>public  readonly property __EntityType__

_Get: Returns the Entity involved in this event_

Get | Description
--- | --- 
[`EntityType`](..\..\entity\EntityType.md) | Entity who is involved in this event /
    public Entity getEntity() {
        return entity;
    }

    /** Gets the EntityType of the Entity involved in this event.



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


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

