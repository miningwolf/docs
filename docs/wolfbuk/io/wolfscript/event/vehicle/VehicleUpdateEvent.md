## VehicleUpdateEvent __class__

>io.wolfscript.event.vehicle.VehicleUpdateEvent
>Extends [`VehicleEvent`](VehicleEvent.md)
``` javascript
this.on('vehicle.VehicleUpdateEvent', function (e) { });
```


---

### Class Overview

Called when a vehicle updates

Method | Type   
--- | :--- 
new __VehicleUpdateEvent__(Vehicle) <br> _VehicleUpdateEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
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

### Public Constructors for [`VehicleUpdateEvent`](VehicleUpdateEvent.md)

##### <a id='vehicleupdateevent'></a>new __VehicleUpdateEvent__(Vehicle) 

_VehicleUpdateEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Vehicle | `final` | Vehicle argument

---

### Public Properties for [`VehicleUpdateEvent`](VehicleUpdateEvent.md)

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


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

