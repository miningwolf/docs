## PlayerLeashEntityEvent __class__

>io.wolfscript.event.entity.PlayerLeashEntityEvent
>Extends [`Event`](../Event.md)
>Implements [`Cancellable`](../Cancellable.md)
``` javascript
this.on('entity.PlayerLeashEntityEvent', function (e) { });
```


---

### Class Overview

Called immediately prior to a creature being leashed by a player.

Method | Type   
--- | :--- 
new __PlayerLeashEntityEvent__(what, leashHolder, leasher) <br> _PlayerLeashEntityEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Get: Returns the entity being leashed._ | `Entity`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
 readonly property __LeashHolder__ <br> _Get: Returns the entity that is holding the leash._ | `Entity`
final readonly property __Player__ <br> _Get: Returns the player involved in this event_ | `Player`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`Event`](../Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`





---

### Public Constructors for [`PlayerLeashEntityEvent`](PlayerLeashEntityEvent.md)

##### <a id='playerleashentityevent'></a>new __PlayerLeashEntityEvent__(what, leashHolder, leasher) 

_PlayerLeashEntityEvent constructor_

Argument | Type | Description  
--- | --- | --- 
what | `Entity` | what argument
leashHolder | `Entity` | leashHolder argument
leasher | `Player` | leasher argument

---

### Public Properties for [`PlayerLeashEntityEvent`](PlayerLeashEntityEvent.md)

##### <a id='entity'></a>public  readonly property __Entity__

_Get: Returns the entity being leashed._

Get | Description
--- | --- 
`Entity` | The entity



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



##### <a id='leashholder'></a>public  readonly property __LeashHolder__

_Get: Returns the entity that is holding the leash._

Get | Description
--- | --- 
`Entity` | The leash holder



##### <a id='player'></a>public final readonly property __Player__

_Get: Returns the player involved in this event_

Get | Description
--- | --- 
`Player` | Player who is involved in this event



##### <a id='cancelled'></a>public  writeonly property __Cancelled__

_Cancelled property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
cancel | `boolean` | cancel argument


---

### Public Methods for [`PlayerLeashEntityEvent`](PlayerLeashEntityEvent.md)

##### <a id='iscancelled'></a>public  function __isCancelled__()

_isCancelled method_

Returns | 
--- | 
`boolean` |


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


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

