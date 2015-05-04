## CreeperPowerEvent __class__

>io.wolfscript.event.entity.CreeperPowerEvent
>Extends [`EntityEvent`](EntityEvent.md)
>Implements [`Cancellable`](../Cancellable.md)

---

### Class Overview

Called when a Creeper is struck by lightning. <p> If a Creeper Power event is cancelled, the Creeper will not be powered.

Method | Type   
--- | :--- 
new __CreeperPowerEvent__(Creeper, LightningStrike, PowerCause) <br> _CreeperPowerEvent constructor_ | _constructor_
new __CreeperPowerEvent__(Creeper, PowerCause) <br> _CreeperPowerEvent constructor_ | _constructor_
 readonly property __Cause__ <br> _Get: Gets the cause of the creeper being (un)powered._ | `PowerCause`
 readonly property __Entity__ <br> _Entity property_ | [`Creeper`](../../entity/Creeper.md)
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Lightning__ <br> _Get: Gets the lightning bolt which is striking the Creeper._ | [`LightningStrike`](../../entity/LightningStrike.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
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
final function __isAsynchronous__() <br> _Any custom event that should not by synchronized with other events must_ | `boolean`







---

### Public Constructors for [`CreeperPowerEvent`](CreeperPowerEvent.md)

##### <a id='creeperpowerevent'></a>new __CreeperPowerEvent__(Creeper, LightningStrike, PowerCause) 

_CreeperPowerEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Creeper | `final` | Creeper argument
LightningStrike | `final` | LightningStrike argument
PowerCause | `final` | PowerCause argument

##### <a id='creeperpowerevent'></a>new __CreeperPowerEvent__(Creeper, PowerCause) 

_CreeperPowerEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Creeper | `final` | Creeper argument
PowerCause | `final` | PowerCause argument

---

### Public Properties for [`CreeperPowerEvent`](CreeperPowerEvent.md)

##### <a id='cause'></a>public  readonly property __Cause__

_Get: Gets the cause of the creeper being (un)powered._

Get | Description
--- | --- 
`PowerCause` | A PowerCause value detailing the cause of change in power.



##### <a id='entity'></a>public  readonly property __Entity__

_Entity property_

Get | 
--- | 
[`Creeper`](../../entity/Creeper.md) |



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



##### <a id='lightning'></a>public  readonly property __Lightning__

_Get: Gets the lightning bolt which is striking the Creeper._

Get | Description
--- | --- 
[`LightningStrike`](../../entity/LightningStrike.md) | The Entity for the lightning bolt which is striking the Creeper



##### <a id='cancelled'></a>public  writeonly property __Cancelled__

_Cancelled property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
cancel | `boolean` | cancel argument


---

### Public Methods for [`CreeperPowerEvent`](CreeperPowerEvent.md)

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

_Any custom event that should not by synchronized with other events must use the specific constructor. These are the caveats of using an asynchronous event: <ul> <li>The event is never fired from inside code triggered by a synchronous event. Attempting to do so results in an `IllegalStateException`. <li>However, asynchronous event handlers may fire synchronous or asynchronous events <li>The event may be fired multiple times simultaneously and in any order. <li>Any newly registered or unregistered handler is ignored after an event starts execution. <li>The handlers for this event may block for any length of time. <li>Some implementations may selectively declare a specific event use as asynchronous. This behavior should be clearly defined. <li>Asynchronous calls are not calculated in the plugin timing system. </ul>_

Returns | Description
--- | --- 
`boolean` | false by default, true if the event fires asynchronously


---


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

