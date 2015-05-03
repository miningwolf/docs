## EntityCreatePortalEvent __class__

>io.wolfscript.event.entity.EntityCreatePortalEvent
>Extends [`EntityEvent`](EntityEvent.md)
>Implements [`Cancellable`](..\Cancellable.md)

---

### Class Overview

Thrown when a Living Entity creates a portal in a world.

Method | Type   
--- | :--- 
new __EntityCreatePortalEvent__(LivingEntity, List, PortalType) <br> _EntityCreatePortalEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Entity property_ | `LivingEntity`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](..\HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](..\HandlerList.md)
 readonly property __PortalType__ <br> _Get: Gets a list of all blocks associated with the portal._ | [`PortalType`](..\..\PortalType.md)
 |
__Inherited items from [`EntityEvent`](EntityEvent.md)__ |
new __EntityEvent__(Entity) <br> _EntityEvent constructor_ | _constructor_
 readonly property __EntityType__ <br> _Get: Returns the Entity involved in this event_ | [`EntityType`](..\..\entity\EntityType.md)
 |
__Inherited items from [`Event`](..\Event.md)__ |
final function __isAsynchronous__() <br> _The default constructor is defined for cleaner code. This constructor_ | `boolean`







---

### Public Constructors for [`EntityCreatePortalEvent`](EntityCreatePortalEvent.md)

##### <a id='entitycreateportalevent'></a>new __EntityCreatePortalEvent__(LivingEntity, List, PortalType) 

_EntityCreatePortalEvent constructor_

Argument | Type | Description  
--- | --- | --- 
LivingEntity | `final` | LivingEntity argument
List | `final` | List argument
PortalType | `final` | PortalType argument

---

### Public Properties for [`EntityCreatePortalEvent`](EntityCreatePortalEvent.md)

##### <a id='entity'></a>public  readonly property __Entity__

_Entity property_

Get | 
--- | 
`LivingEntity` |



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



##### <a id='portaltype'></a>public  readonly property __PortalType__

_Get: Gets a list of all blocks associated with the portal._

Get | Description
--- | --- 
[`PortalType`](..\..\PortalType.md) | List of blocks that will be changed. /
    public List<BlockState> getBlocks() {
        return blocks;
    }

    public boolean isCancelled() {
        return cancelled;
    }

    public void setCancelled(boolean cancel) {
        this.cancelled = cancel;
    }

    /** Gets the type of portal that is trying to be created.



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


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

