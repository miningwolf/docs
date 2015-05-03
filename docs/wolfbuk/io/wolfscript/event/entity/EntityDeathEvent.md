## EntityDeathEvent __class__

>io.wolfscript.event.entity.EntityDeathEvent
>Extends [`EntityEvent`](EntityEvent.md)

---

### Class Overview

Thrown whenever a LivingEntity dies

Method | Type   
--- | :--- 
new __EntityDeathEvent__(LivingEntity, List) <br> _EntityDeathEvent constructor_ | _constructor_
new __EntityDeathEvent__(LivingEntity, List, int) <br> _EntityDeathEvent constructor_ | _constructor_
 readonly property __Drops__ <br> _Get: Gets how much EXP should be dropped from this death._ | `List<ItemStack>`
 readonly property __Entity__ <br> _Entity property_ | `LivingEntity`
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

### Public Constructors for [`EntityDeathEvent`](EntityDeathEvent.md)

##### <a id='entitydeathevent'></a>new __EntityDeathEvent__(LivingEntity, List) 

_EntityDeathEvent constructor_

Argument | Type | Description  
--- | --- | --- 
LivingEntity | `final` | LivingEntity argument
List | `final` | List argument

##### <a id='entitydeathevent'></a>new __EntityDeathEvent__(LivingEntity, List, int) 

_EntityDeathEvent constructor_

Argument | Type | Description  
--- | --- | --- 
LivingEntity | `final` | LivingEntity argument
List | `final` | List argument
int | `final` | int argument

---

### Public Properties for [`EntityDeathEvent`](EntityDeathEvent.md)

##### <a id='drops'></a>public  readonly property __Drops__

_Get: Gets how much EXP should be dropped from this death. <p> This does not indicate how much EXP should be taken from the entity in question, merely how much should be created after its death._

Get | Description
--- | --- 
`List<ItemStack>` | Amount of EXP to drop. /
    public int getDroppedExp() {
        return dropExp;
    }

    /** Sets how much EXP should be dropped from this death. <p> This does not indicate how much EXP should be taken from the entity in question, merely how much should be created after its death.



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
	

