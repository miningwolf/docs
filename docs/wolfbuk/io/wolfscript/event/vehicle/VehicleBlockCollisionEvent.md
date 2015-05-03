## VehicleBlockCollisionEvent __class__

>io.wolfscript.event.vehicle.VehicleBlockCollisionEvent
>Extends [`VehicleCollisionEvent`](VehicleCollisionEvent.md)

---

### Class Overview

Raised when a vehicle collides with a block.

Method | Type   
--- | :--- 
new __VehicleBlockCollisionEvent__(Vehicle, Block) <br> _VehicleBlockCollisionEvent constructor_ | _constructor_
 readonly property __Block__ <br> _Get: Gets the block the vehicle collided with_ | [`Block`](..\..\block\Block.md)
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](..\HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](..\HandlerList.md)
 |
__Inherited items from [`VehicleCollisionEvent`](VehicleCollisionEvent.md)__ |
new __VehicleCollisionEvent__(Vehicle) <br> _VehicleCollisionEvent constructor_ | _constructor_
 |
__Inherited items from [`VehicleEvent`](VehicleEvent.md)__ |
new __VehicleEvent__(Vehicle) <br> _VehicleEvent constructor_ | _constructor_
final readonly property __Vehicle__ <br> _Get: Get the vehicle._ | [`Vehicle`](..\..\entity\Vehicle.md)
 |
__Inherited items from [`Event`](..\Event.md)__ |
final function __isAsynchronous__() <br> _The default constructor is defined for cleaner code. This constructor_ | `boolean`









---

### Public Constructors for [`VehicleBlockCollisionEvent`](VehicleBlockCollisionEvent.md)

##### <a id='vehicleblockcollisionevent'></a>new __VehicleBlockCollisionEvent__(Vehicle, Block) 

_VehicleBlockCollisionEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Vehicle | `final` | Vehicle argument
Block | `final` | Block argument

---

### Public Properties for [`VehicleBlockCollisionEvent`](VehicleBlockCollisionEvent.md)

##### <a id='block'></a>public  readonly property __Block__

_Get: Gets the block the vehicle collided with_

Get | Description
--- | --- 
[`Block`](..\..\block\Block.md) | the block the vehicle collided with



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
### Public Constructors for [`VehicleCollisionEvent`](VehicleCollisionEvent.md)

##### <a id='vehiclecollisionevent'></a>new __VehicleCollisionEvent__(Vehicle) 

_VehicleCollisionEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Vehicle | `final` | Vehicle argument

---
### Public Constructors for [`VehicleEvent`](VehicleEvent.md)

##### <a id='vehicleevent'></a>new __VehicleEvent__(Vehicle) 

_VehicleEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Vehicle | `final` | Vehicle argument

---

### Public Properties for [`VehicleEvent`](VehicleEvent.md)

##### <a id='vehicle'></a>public final readonly property __Vehicle__

_Get: Get the vehicle._

Get | Description
--- | --- 
[`Vehicle`](..\..\entity\Vehicle.md) | the vehicle



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
	

