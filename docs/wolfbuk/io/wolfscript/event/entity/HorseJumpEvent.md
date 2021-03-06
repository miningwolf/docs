## HorseJumpEvent __class__

>io.wolfscript.event.entity.HorseJumpEvent
>Extends [`EntityEvent`](EntityEvent.md)
>Implements [`Cancellable`](../Cancellable.md)
``` javascript
this.on('entity.HorseJumpEvent', function (e) { });
```


---

### Class Overview

Called when a horse jumps.

Method | Type   
--- | :--- 
new __HorseJumpEvent__(Horse, float) <br> _HorseJumpEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Entity property_ | `Horse`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`EntityEvent`](EntityEvent.md)__ |
new __EntityEvent__(Entity) <br> _EntityEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Get: Returns the Entity involved in this event_ | `Entity`
 readonly property __EntityType__ <br> _Get: Gets the EntityType of the Entity involved in this event._ | [`EntityType`](../../entity/EntityType.md)
 |
__Inherited items from [`Event`](../Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







---

### Public Constructors for [`HorseJumpEvent`](HorseJumpEvent.md)

##### <a id='horsejumpevent'></a>new __HorseJumpEvent__(Horse, float) 

_HorseJumpEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Horse | `final` | Horse argument
float | `final` | float argument

---

### Public Properties for [`HorseJumpEvent`](HorseJumpEvent.md)

##### <a id='entity'></a>public  readonly property __Entity__

_Entity property_

Get | 
--- | 
`Horse` |



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



##### <a id='power'></a>public   property __Power__
_Deprecated: horse jumping was moved client side._

_Get: Gets the power of the jump. <p> Power is a value that defines how much of the horse's jump strength should be used for the jump. Power is effectively multiplied times the horse's jump strength to determine how high the jump is; 0 represents no jump strength while 1 represents full jump strength. Setting power to a value above 1 will use additional jump strength that the horse does not usually have. <p> Power does not affect how high the horse is capable of jumping, only how much of its jumping capability will be used in this jump. To set the horse's overall jump strength, see `Horse#setJumpStrength(double)`.<br>Set: Sets the power of the jump. <p> Jump power can be set to a value above 1.0 which will increase the strength of this jump above the horse's actual jump strength. <p> Setting the jump power to 0 will result in the jump animation still playing, but the horse not leaving the ground. Only canceling this event will result in no jump animation at all._

Get | 
--- | 
`float` |

Set | Type | Description  
--- | --- | --- 
power | `float` | power of the jump


##### <a id='cancelled'></a>public  writeonly property __Cancelled__
_Deprecated: horse jumping was moved client side._

_Cancelled property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
cancel | `boolean` | cancel argument


---

### Public Methods for [`HorseJumpEvent`](HorseJumpEvent.md)

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

##### <a id='entity'></a>public  readonly property __Entity__

_Get: Returns the Entity involved in this event_

Get | Description
--- | --- 
`Entity` | Entity who is involved in this event



##### <a id='entitytype'></a>public  readonly property __EntityType__

_Get: Gets the EntityType of the Entity involved in this event._

Get | Description
--- | --- 
[`EntityType`](../../entity/EntityType.md) | EntityType of the Entity involved in this event



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
	

