## EntityPortalExitEvent __class__

>io.wolfscript.event.entity.EntityPortalExitEvent
>Extends [`EntityTeleportEvent`](EntityTeleportEvent.md)

---

### Class Overview

Called before an entity exits a portal. <p> This event allows you to modify the velocity of the entity after they have successfully exited the portal.

Method | Type   
--- | :--- 
new __EntityPortalExitEvent__(Entity, Location, Location, Vector, Vector) <br> _EntityPortalExitEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](..\HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](..\HandlerList.md)
 writeonly property __After__ <br> _Set: Gets a copy of the velocity that the entity has before entering the_ | `void`
 |
__Inherited items from [`EntityTeleportEvent`](EntityTeleportEvent.md)__ |
new __EntityTeleportEvent__(what, from, to) <br> _EntityTeleportEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](..\HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](..\HandlerList.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 writeonly property __To__ <br> _Set: Gets the location that this entity moved from_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`EntityEvent`](EntityEvent.md)__ |
new __EntityEvent__(Entity) <br> _EntityEvent constructor_ | _constructor_
 readonly property __EntityType__ <br> _Get: Returns the Entity involved in this event_ | [`EntityType`](..\..\entity\EntityType.md)
 |
__Inherited items from [`Event`](..\Event.md)__ |
final function __isAsynchronous__() <br> _The default constructor is defined for cleaner code. This constructor_ | `boolean`









---

### Public Constructors for [`EntityPortalExitEvent`](EntityPortalExitEvent.md)

##### <a id='entityportalexitevent'></a>new __EntityPortalExitEvent__(Entity, Location, Location, Vector, Vector) 

_EntityPortalExitEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Entity | `final` | Entity argument
Location | `final` | Location argument
Location | `final` | Location argument
Vector | `final` | Vector argument
Vector | `final` | Vector argument

---

### Public Properties for [`EntityPortalExitEvent`](EntityPortalExitEvent.md)

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



##### <a id='after'></a>public  writeonly property __After__

_Set: Gets a copy of the velocity that the entity has before entering the portal._

Get | Description
--- | --- 
`void` | velocity of entity before entering the portal /
    public Vector getBefore() {
        return this.before.clone();
    }

    /** Gets a copy of the velocity that the entity will have after exiting the portal.

Set | Type | Description  
--- | --- | --- 
after | `Vector` | the velocity after exiting the portal


---
### Public Constructors for [`EntityTeleportEvent`](EntityTeleportEvent.md)

##### <a id='entityteleportevent'></a>new __EntityTeleportEvent__(what, from, to) 

_EntityTeleportEvent constructor_

Argument | Type | Description  
--- | --- | --- 
what | `Entity` | what argument
from | `Location` | from argument
to | `Location` | to argument

---

### Public Properties for [`EntityTeleportEvent`](EntityTeleportEvent.md)

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


##### <a id='to'></a>public  writeonly property __To__

_Set: Gets the location that this entity moved from_

Get | Description
--- | --- 
`void` | Location this entity moved from /
    public Location getFrom() {
        return from;
    }

    /** Sets the location that this entity moved from

Set | Type | Description  
--- | --- | --- 
to | `Location` | New Location this entity moved to


---

### Public Methods for [`EntityTeleportEvent`](EntityTeleportEvent.md)

##### <a id='iscancelled'></a>public  function __isCancelled__()

_isCancelled method_

Returns | 
--- | 
`boolean` |


---
### Public Constructors for [`EntityEvent`](EntityEvent.md)

##### <a id='entityevent'></a>new __EntityEvent__(Entity) 

_EntityEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Entity | `final` | Entity argument

---

### Public Properties for [`EntityEvent`](EntityEvent.md)

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
	

