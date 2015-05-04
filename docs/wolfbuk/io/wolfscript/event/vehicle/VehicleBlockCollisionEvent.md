## VehicleBlockCollisionEvent __class__

>io.wolfscript.event.vehicle.VehicleBlockCollisionEvent
>Extends [`VehicleCollisionEvent`](VehicleCollisionEvent.md)

---

### Class Overview

Raised when a vehicle collides with a block.

Method | Type   
--- | :--- 
new __VehicleBlockCollisionEvent__(Vehicle, Block) <br> _VehicleBlockCollisionEvent constructor_ | _constructor_
 readonly property __Block__ <br> _Get: Gets the block the vehicle collided with_ | [`Block`](../../block/Block.md)
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
 |
__Inherited items from [`VehicleCollisionEvent`](VehicleCollisionEvent.md)__ |
new __VehicleCollisionEvent__(Vehicle) <br> _VehicleCollisionEvent constructor_ | _constructor_
 |
__Inherited items from [`VehicleEvent`](VehicleEvent.md)__ |
new __VehicleEvent__(Vehicle) <br> _VehicleEvent constructor_ | _constructor_
final readonly property __Vehicle__ <br> _Get: Get the vehicle._ | [`Vehicle`](../../entity/Vehicle.md)
 |
__Inherited items from [`Event`](../Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`









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
[`Block`](../../block/Block.md) | the block the vehicle collided with



##### <a id='handlerlist'></a>public static readonly property __HandlerList__

_HandlerList property_

Get | 
--- | 
[`HandlerList`](../HandlerList.md) |



##### <a id='handlers'></a>public  readonly property __Handlers__

_Handlers property_

Get | 
--- | 
[`HandlerList`](../HandlerList.md) |



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
[`Vehicle`](../../entity/Vehicle.md) | the vehicle



---
### Public Constructors for [`Event`](../Event.md)

##### <a id='event'></a>new __Event__() 

_The default constructor is defined for cleaner code. This constructor assumes the event is synchronous._


##### <a id='event'></a>new __Event__(isAsync) 

_This constructor is used to explicitly declare an event as synchronous or asynchronous._

Argument | Type | Description  
--- | --- | --- 
isAsync | `boolean` | true indicates the event will fire asynchronously, false by default from default constructor

---

### Public Properties for [`Event`](../Event.md)

##### <a id='eventname'></a>public  readonly property __EventName__

_Get: Convenience method for providing a user-friendly identifier. By default, it is the event's class's {@linkplain Class#getSimpleName() simple name}._

Get | Description
--- | --- 
`String` | name of this event



##### <a id='handlers'></a>public abstract readonly property __Handlers__

_Handlers property_

Get | 
--- | 
[`HandlerList`](../HandlerList.md) |



---

### Public Methods for [`Event`](../Event.md)

##### <a id='isasynchronous'></a>public final function __isAsynchronous__()

_isAsynchronous method_

Returns | 
--- | 
`boolean` |


---


---


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

