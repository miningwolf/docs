## EntityCombustByBlockEvent __class__

>io.wolfscript.event.entity.EntityCombustByBlockEvent
>Extends [`EntityCombustEvent`](EntityCombustEvent.md)

---

### Class Overview

Called when a block causes an entity to combust.

Method | Type   
--- | :--- 
new __EntityCombustByBlockEvent__(Block, Entity, int) <br> _EntityCombustByBlockEvent constructor_ | _constructor_
 readonly property __Combuster__ <br> _Get: The combuster can be lava or a block that is on fire._ | [`Block`](../../block/Block.md)
 |
__Inherited items from [`EntityCombustEvent`](EntityCombustEvent.md)__ |
new __EntityCombustEvent__(Entity, int) <br> _EntityCombustEvent constructor_ | _constructor_
  property __Duration__ <br> _Duration property<br>Set: The number of seconds the combustee should be alight for._ | `int`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
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

### Public Constructors for [`EntityCombustByBlockEvent`](EntityCombustByBlockEvent.md)

##### <a id='entitycombustbyblockevent'></a>new __EntityCombustByBlockEvent__(Block, Entity, int) 

_EntityCombustByBlockEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Block | `final` | Block argument
Entity | `final` | Entity argument
int | `final` | int argument

---

### Public Properties for [`EntityCombustByBlockEvent`](EntityCombustByBlockEvent.md)

##### <a id='combuster'></a>public  readonly property __Combuster__

_Get: The combuster can be lava or a block that is on fire. <p> WARNING: block may be null._

Get | Description
--- | --- 
[`Block`](../../block/Block.md) | the Block that set the combustee alight.



---
### Public Constructors for [`EntityCombustEvent`](EntityCombustEvent.md)

##### <a id='entitycombustevent'></a>new __EntityCombustEvent__(Entity, int) 

_EntityCombustEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Entity | `final` | Entity argument
int | `final` | int argument

---

### Public Properties for [`EntityCombustEvent`](EntityCombustEvent.md)

##### <a id='duration'></a>public   property __Duration__

_Duration property<br>Set: The number of seconds the combustee should be alight for. <p> This value will only ever increase the combustion time, not decrease existing combustion times._

Get | Description
--- | --- 
`int` | the amount of time (in seconds) the combustee should be alight for

Set | Type | Description  
--- | --- | --- 
duration | `int` | the time in seconds to be alight for.


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

### Public Methods for [`EntityCombustEvent`](EntityCombustEvent.md)

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


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

