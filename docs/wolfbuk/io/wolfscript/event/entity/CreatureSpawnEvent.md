## CreatureSpawnEvent __class__

>io.wolfscript.event.entity.CreatureSpawnEvent
>Extends [`EntityEvent`](EntityEvent.md)
>Implements [`Cancellable`](../Cancellable.md)

---

### Class Overview

Called when a creature is spawned into a world. <p> If a Creature Spawn event is cancelled, the creature will not spawn.

Method | Type   
--- | :--- 
new __CreatureSpawnEvent__(LivingEntity, SpawnReason) <br> _CreatureSpawnEvent constructor_ | _constructor_
new __CreatureSpawnEvent__(spawnee, type, loc, reason) <br> _CreatureSpawnEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Entity property_ | `LivingEntity`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Location__ <br> _Get: Gets the location at which the creature is spawning._ | `Location`
 readonly property __SpawnReason__ <br> _Get: Gets the reason for why the creature is being spawned._ | `SpawnReason`
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

### Public Constructors for [`CreatureSpawnEvent`](CreatureSpawnEvent.md)

##### <a id='creaturespawnevent'></a>new __CreatureSpawnEvent__(LivingEntity, SpawnReason) 

_CreatureSpawnEvent constructor_

Argument | Type | Description  
--- | --- | --- 
LivingEntity | `final` | LivingEntity argument
SpawnReason | `final` | SpawnReason argument

##### <a id='creaturespawnevent'></a>new __CreatureSpawnEvent__(spawnee, type, loc, reason) 

_CreatureSpawnEvent constructor_

Argument | Type | Description  
--- | --- | --- 
spawnee | `Entity` | spawnee argument
type | [`CreatureType`](../../entity/CreatureType.md) | type argument
loc | `Location` | loc argument
reason | `SpawnReason` | reason argument

---

### Public Properties for [`CreatureSpawnEvent`](CreatureSpawnEvent.md)

##### <a id='creaturetype'></a>public  readonly property __CreatureType__
_Deprecated: In favour of {@link #getEntityType()}._

_Get: Gets the type of creature being spawned._

Get | Description
--- | --- 
[`CreatureType`](../../entity/CreatureType.md) | A CreatureType value detailing the type of creature being spawned



##### <a id='entity'></a>public  readonly property __Entity__

_Entity property_

Get | 
--- | 
`LivingEntity` |



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



##### <a id='location'></a>public  readonly property __Location__

_Get: Gets the location at which the creature is spawning._

Get | Description
--- | --- 
`Location` | The location at which the creature is spawning



##### <a id='spawnreason'></a>public  readonly property __SpawnReason__

_Get: Gets the reason for why the creature is being spawned._

Get | Description
--- | --- 
`SpawnReason` | A SpawnReason value detailing the reason for the creature being spawned



##### <a id='cancelled'></a>public  writeonly property __Cancelled__

_Cancelled property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
cancel | `boolean` | cancel argument


---

### Public Methods for [`CreatureSpawnEvent`](CreatureSpawnEvent.md)

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
	

