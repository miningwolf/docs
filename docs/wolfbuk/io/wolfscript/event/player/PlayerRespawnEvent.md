## PlayerRespawnEvent __class__

>io.wolfscript.event.player.PlayerRespawnEvent
>Extends [`PlayerEvent`](PlayerEvent.md)

---

### Class Overview

Called when a player respawns.

Method | Type   
--- | :--- 
new __PlayerRespawnEvent__(Player, Location, boolean) <br> _PlayerRespawnEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
  property __RespawnLocation__ <br> _Get: Gets the current respawn location<br>Set: Sets the new respawn location_ | `Location`
 function __isBedSpawn__() <br> _Gets whether the respawn location is the player's bed._ | `boolean`
 |
__Inherited items from [`PlayerEvent`](PlayerEvent.md)__ |
new __PlayerEvent__(Player) <br> _PlayerEvent constructor_ | _constructor_
final readonly property __Player__ <br> _Get: Returns the player involved in this event_ | `Player`
 |
__Inherited items from [`Event`](../Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







---

### Public Constructors for [`PlayerRespawnEvent`](PlayerRespawnEvent.md)

##### <a id='playerrespawnevent'></a>new __PlayerRespawnEvent__(Player, Location, boolean) 

_PlayerRespawnEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Player | `final` | Player argument
Location | `final` | Location argument
boolean | `final` | boolean argument

---

### Public Properties for [`PlayerRespawnEvent`](PlayerRespawnEvent.md)

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



##### <a id='respawnlocation'></a>public   property __RespawnLocation__

_Get: Gets the current respawn location<br>Set: Sets the new respawn location_

Get | Description
--- | --- 
`Location` | Location current respawn location

Set | Type | Description  
--- | --- | --- 
respawnLocation | `Location` | new location for the respawn


---

### Public Methods for [`PlayerRespawnEvent`](PlayerRespawnEvent.md)

##### <a id='isbedspawn'></a>public  function __isBedSpawn__()

_Gets whether the respawn location is the player's bed._

Returns | Description
--- | --- 
`boolean` | true if the respawn location is the player's bed.


---
### Public Constructors for [`PlayerEvent`](PlayerEvent.md)

##### <a id='playerevent'></a>new __PlayerEvent__(Player) 

_PlayerEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Player | `final` | Player argument

---

### Public Properties for [`PlayerEvent`](PlayerEvent.md)

##### <a id='player'></a>public final readonly property __Player__

_Get: Returns the player involved in this event_

Get | Description
--- | --- 
`Player` | Player who is involved in this event



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


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

