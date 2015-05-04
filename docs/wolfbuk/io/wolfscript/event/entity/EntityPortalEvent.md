## EntityPortalEvent __class__

>io.wolfscript.event.entity.EntityPortalEvent
>Extends [`EntityTeleportEvent`](EntityTeleportEvent.md)

this.on('entity.EntityPortalEvent', function (e) { });

---

### Class Overview

Called when a non-player entity is about to teleport because it is in contact with a portal. <p> For players see [`PlayerPortalEvent`](../player/PlayerPortalEvent.md)

Method | Type   
--- | :--- 
new __EntityPortalEvent__(Entity, Location, Location, TravelAgent) <br> _EntityPortalEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
  property __PortalTravelAgent__ <br> _Get: Gets the Travel Agent used (or not) in this event.<br>Set: Sets the Travel Agent used (or not) in this event._ | [`TravelAgent`](../../TravelAgent.md)
 function __useTravelAgent__(useTravelAgent) <br> _Sets whether or not the Travel Agent will be used._ | `void`
 function __useTravelAgent__() <br> _Gets whether or not the Travel Agent will be used._ | `boolean`
 |
__Inherited items from [`EntityTeleportEvent`](EntityTeleportEvent.md)__ |
new __EntityTeleportEvent__(what, from, to) <br> _EntityTeleportEvent constructor_ | _constructor_
  property __From__ <br> _Get: Gets the location that this entity moved from<br>Set: Sets the location that this entity moved from_ | `Location`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
  property __To__ <br> _Get: Gets the location that this entity moved to<br>Set: Sets the location that this entity moved to_ | `Location`
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
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`









---

### Public Constructors for [`EntityPortalEvent`](EntityPortalEvent.md)

##### <a id='entityportalevent'></a>new __EntityPortalEvent__(Entity, Location, Location, TravelAgent) 

_EntityPortalEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Entity | `final` | Entity argument
Location | `final` | Location argument
Location | `final` | Location argument
TravelAgent | `final` | TravelAgent argument

---

### Public Properties for [`EntityPortalEvent`](EntityPortalEvent.md)

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



##### <a id='portaltravelagent'></a>public   property __PortalTravelAgent__

_Get: Gets the Travel Agent used (or not) in this event.<br>Set: Sets the Travel Agent used (or not) in this event._

Get | Description
--- | --- 
[`TravelAgent`](../../TravelAgent.md) | the Travel Agent used (or not) in this event

Set | Type | Description  
--- | --- | --- 
travelAgent | [`TravelAgent`](../../TravelAgent.md) | the Travel Agent used (or not) in this event


---

### Public Methods for [`EntityPortalEvent`](EntityPortalEvent.md)

##### <a id='usetravelagent'></a>public  function __useTravelAgent__(useTravelAgent)

_Sets whether or not the Travel Agent will be used. <p> If this is set to true, the TravelAgent will try to find a Portal at the `#getTo()` Location, and will try to create one if there is none. <p> If this is set to false, the `#getEntity()` will only be teleported to the `#getTo()` Location._

Argument | Type | Description  
--- | --- | --- 
useTravelAgent | `boolean` | whether to use the Travel Agent

Returns | 
--- | 
`void` |


##### <a id='usetravelagent'></a>public  function __useTravelAgent__()

_Gets whether or not the Travel Agent will be used. <p> If this is set to true, the TravelAgent will try to find a Portal at the `#getTo()` Location, and will try to create one if there is none. <p> If this is set to false, the `#getEntity()` will only be teleported to the `#getTo()` Location._

Returns | Description
--- | --- 
`boolean` | whether to use the Travel Agent


---
### Public Constructors for [`EntityTeleportEvent`](EntityTeleportEvent.md)

##### <a id='entityteleportevent'></a>new __EntityTeleportEvent__(what, from, to) 

_EntityTeleportEvent constructor_

Argument | Type | Description  
--- | --- | --- 
what | `Entity` | what argument
from | `Location` | from argument
to | `Location` | to argument

---

### Public Properties for [`EntityTeleportEvent`](EntityTeleportEvent.md)

##### <a id='from'></a>public   property __From__

_Get: Gets the location that this entity moved from<br>Set: Sets the location that this entity moved from_

Get | Description
--- | --- 
`Location` | Location this entity moved from

Set | Type | Description  
--- | --- | --- 
from | `Location` | New location this entity moved from


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



##### <a id='to'></a>public   property __To__

_Get: Gets the location that this entity moved to<br>Set: Sets the location that this entity moved to_

Get | Description
--- | --- 
`Location` | Location the entity moved to

Set | Type | Description  
--- | --- | --- 
to | `Location` | New Location this entity moved to


##### <a id='cancelled'></a>public  writeonly property __Cancelled__

_Cancelled property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
cancel | `boolean` | cancel argument


---

### Public Methods for [`EntityTeleportEvent`](EntityTeleportEvent.md)

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


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

