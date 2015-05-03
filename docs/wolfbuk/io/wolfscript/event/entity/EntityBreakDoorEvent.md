## EntityBreakDoorEvent __class__

>io.wolfscript.event.entity.EntityBreakDoorEvent
>Extends [`EntityChangeBlockEvent`](EntityChangeBlockEvent.md)

---

### Class Overview

Called when an `Entity` breaks a door <p> Cancelling the event will cause the event to be delayed

Method | Type   
--- | :--- 
new __EntityBreakDoorEvent__(LivingEntity, Block) <br> _EntityBreakDoorEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Entity property_ | `LivingEntity`
 |
__Inherited items from [`EntityChangeBlockEvent`](EntityChangeBlockEvent.md)__ |
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](..\HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](..\HandlerList.md)
 |
__Inherited items from [`EntityEvent`](EntityEvent.md)__ |
new __EntityEvent__(Entity) <br> _EntityEvent constructor_ | _constructor_
 readonly property __EntityType__ <br> _Get: Returns the Entity involved in this event_ | [`EntityType`](..\..\entity\EntityType.md)
 |
__Inherited items from [`Event`](..\Event.md)__ |
final function __isAsynchronous__() <br> _The default constructor is defined for cleaner code. This constructor_ | `boolean`









---

### Public Constructors for [`EntityBreakDoorEvent`](EntityBreakDoorEvent.md)

##### <a id='entitybreakdoorevent'></a>new __EntityBreakDoorEvent__(LivingEntity, Block) 

_EntityBreakDoorEvent constructor_

Argument | Type | Description  
--- | --- | --- 
LivingEntity | `final` | LivingEntity argument
Block | `final` | Block argument

---

### Public Properties for [`EntityBreakDoorEvent`](EntityBreakDoorEvent.md)

##### <a id='entity'></a>public  readonly property __Entity__

_Entity property_

Get | 
--- | 
`LivingEntity` |



---

### Public Properties for [`EntityChangeBlockEvent`](EntityChangeBlockEvent.md)

##### <a id='data'></a>public  readonly property __Data__
_Deprecated: Provided as a backward compatibility before the data byte was provided, and type increased to all entities /
    @Deprecated
    public EntityChangeBlockEvent(final LivingEntity what, final Block block, final Material to) {
        this (what, block, to, (byte) 0);
    }

    /** Magic value /
    @Deprecated
    public EntityChangeBlockEvent(final Entity what, final Block block, final Material to, final byte data) {
        super(what);
        this.block = block;
        this.cancel = false;
        this.to = to;
        this.data = data;
    }

    /** Gets the block the entity is changing Magic value_

_Data property_

Get | Description
--- | --- 
`byte` | the block that is changing /
    public Block getBlock() {
        return block;
    }

    public boolean isCancelled() {
        return cancel;
    }

    public void setCancelled(boolean cancel) {
        this.cancel = cancel;
    }

    /** Gets the Material that the block is changing into



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
	

