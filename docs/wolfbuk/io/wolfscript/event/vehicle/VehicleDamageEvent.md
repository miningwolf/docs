## VehicleDamageEvent __class__

>io.wolfscript.event.vehicle.VehicleDamageEvent
>Extends [`VehicleEvent`](VehicleEvent.md)
>Implements [`Cancellable`](../Cancellable.md)
``` javascript
this.on('vehicle.VehicleDamageEvent', function (e) { });
```


---

### Class Overview

Raised when a vehicle receives damage.

Method | Type   
--- | :--- 
new __VehicleDamageEvent__(Vehicle, Entity, double) <br> _VehicleDamageEvent constructor_ | _constructor_
 readonly property __Attacker__ <br> _Get: Gets the Entity that is attacking the vehicle_ | `Entity`
  property __Damage__ <br> _Get: Gets the damage done to the vehicle<br>Set: Sets the damage done to the vehicle_ | `double`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
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

### Public Constructors for [`VehicleDamageEvent`](VehicleDamageEvent.md)

##### <a id='vehicledamageevent'></a>new __VehicleDamageEvent__(Vehicle, Entity, int) 
_Deprecated_

_VehicleDamageEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Vehicle | `final` | Vehicle argument
Entity | `final` | Entity argument
int | `final` | int argument

##### <a id='vehicledamageevent'></a>new __VehicleDamageEvent__(Vehicle, Entity, double) 

_VehicleDamageEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Vehicle | `final` | Vehicle argument
Entity | `final` | Entity argument
double | `final` | double argument

---

### Public Properties for [`VehicleDamageEvent`](VehicleDamageEvent.md)

##### <a id='attacker'></a>public  readonly property __Attacker__

_Get: Gets the Entity that is attacking the vehicle_

Get | Description
--- | --- 
`Entity` | the Entity that is attacking the vehicle



##### <a id='damage'></a>public   property __Damage__

_Get: Gets the damage done to the vehicle<br>Set: Sets the damage done to the vehicle_

Get | Description
--- | --- 
`double` | the damage done to the vehicle

Set | Type | Description  
--- | --- | --- 
damage | `double` | The damage


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


---

### Public Methods for [`VehicleDamageEvent`](VehicleDamageEvent.md)

##### <a id='iscancelled'></a>public  function __isCancelled__()

_isCancelled method_

Returns | 
--- | 
`boolean` |


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
	

