## VehicleEntityCollisionEvent __class__

>io.wolfscript.event.vehicle.VehicleEntityCollisionEvent
>Extends [`VehicleCollisionEvent`](VehicleCollisionEvent.md)
>Implements [`Cancellable`](../Cancellable.md)
``` javascript
this.on('vehicle.VehicleEntityCollisionEvent', function (e) { });
```


---

### Class Overview

Raised when a vehicle collides with an entity.

Method | Type   
--- | :--- 
new __VehicleEntityCollisionEvent__(Vehicle, Entity) <br> _VehicleEntityCollisionEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Entity property_ | `Entity`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 writeonly property __CollisionCancelled__ <br> _CollisionCancelled property_ | `void`
 writeonly property __PickupCancelled__ <br> _PickupCancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 function __isCollisionCancelled__() <br> _isCollisionCancelled method_ | `boolean`
 function __isPickupCancelled__() <br> _isPickupCancelled method_ | `boolean`
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

### Public Constructors for [`VehicleEntityCollisionEvent`](VehicleEntityCollisionEvent.md)

##### <a id='vehicleentitycollisionevent'></a>new __VehicleEntityCollisionEvent__(Vehicle, Entity) 

_VehicleEntityCollisionEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Vehicle | `final` | Vehicle argument
Entity | `final` | Entity argument

---

### Public Properties for [`VehicleEntityCollisionEvent`](VehicleEntityCollisionEvent.md)

##### <a id='entity'></a>public  readonly property __Entity__

_Entity property_

Get | 
--- | 
`Entity` |



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



##### <a id='cancelled'></a>public  writeonly property __Cancelled__

_Cancelled property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
cancel | `boolean` | cancel argument


##### <a id='collisioncancelled'></a>public  writeonly property __CollisionCancelled__

_CollisionCancelled property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
cancel | `boolean` | cancel argument


##### <a id='pickupcancelled'></a>public  writeonly property __PickupCancelled__

_PickupCancelled property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
cancel | `boolean` | cancel argument


---

### Public Methods for [`VehicleEntityCollisionEvent`](VehicleEntityCollisionEvent.md)

##### <a id='iscancelled'></a>public  function __isCancelled__()

_isCancelled method_

Returns | 
--- | 
`boolean` |


##### <a id='iscollisioncancelled'></a>public  function __isCollisionCancelled__()

_isCollisionCancelled method_

Returns | 
--- | 
`boolean` |


##### <a id='ispickupcancelled'></a>public  function __isPickupCancelled__()

_isPickupCancelled method_

Returns | 
--- | 
`boolean` |


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


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

