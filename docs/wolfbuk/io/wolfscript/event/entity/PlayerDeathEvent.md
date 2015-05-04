## PlayerDeathEvent __class__

>io.wolfscript.event.entity.PlayerDeathEvent
>Extends [`EntityDeathEvent`](EntityDeathEvent.md)
``` javascript
this.on('entity.PlayerDeathEvent', function (e) { });
```


---

### Class Overview

Thrown whenever a `Player` dies

Method | Type   
--- | :--- 
new __PlayerDeathEvent__(Player, List, int, String) <br> _PlayerDeathEvent constructor_ | _constructor_
new __PlayerDeathEvent__(Player, List, int, int, String) <br> _PlayerDeathEvent constructor_ | _constructor_
new __PlayerDeathEvent__(Player, List, int, int, int, int, String) <br> _PlayerDeathEvent constructor_ | _constructor_
 writeonly property __NewLevel__ <br> _Set: Sets the Level the Player should have at respawn._ | `void`
 readonly property __Entity__ <br> _Entity property_ | `Player`
  property __DeathMessage__ <br> _Get: Get the death message that will appear to everyone on the server.<br>Set: Set the death message that will appear to everyone on the server._ | `String`
  property __KeepInventory__ <br> _Get: Gets if the Player keeps inventory on death.<br>Set: Sets if the Player keeps inventory on death._ | `boolean`
  property __KeepLevel__ <br> _Get: Gets if the Player should keep all EXP at respawn.<br>Set: Sets if the Player should keep all EXP at respawn._ | `boolean`
  property __NewExp__ <br> _Get: Gets how much EXP the Player should have at respawn.<br>Set: Sets how much EXP the Player should have at respawn._ | `int`
 readonly property __NewLevel__ <br> _Get: Gets the Level the Player should have at respawn._ | `int`
  property __NewTotalExp__ <br> _Get: Gets the Total EXP the Player should have at respawn.<br>Set: Sets the Total EXP the Player should have at respawn._ | `int`
 |
__Inherited items from [`EntityDeathEvent`](EntityDeathEvent.md)__ |
new __EntityDeathEvent__(LivingEntity, List) <br> _EntityDeathEvent constructor_ | _constructor_
new __EntityDeathEvent__(LivingEntity, List, int) <br> _EntityDeathEvent constructor_ | _constructor_
  property __DroppedExp__ <br> _Get: Gets how much EXP should be dropped from this death.<br>Set: Sets how much EXP should be dropped from this death._ | `int`
 readonly property __Drops__ <br> _Get: Gets all the items which will drop when the entity dies_ | `List<ItemStack>`
 readonly property __Entity__ <br> _Entity property_ | `LivingEntity`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
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

### Public Constructors for [`PlayerDeathEvent`](PlayerDeathEvent.md)

##### <a id='playerdeathevent'></a>new __PlayerDeathEvent__(Player, List, int, String) 

_PlayerDeathEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Player | `final` | Player argument
List | `final` | List argument
int | `final` | int argument
String | `final` | String argument

##### <a id='playerdeathevent'></a>new __PlayerDeathEvent__(Player, List, int, int, String) 

_PlayerDeathEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Player | `final` | Player argument
List | `final` | List argument
int | `final` | int argument
int | `final` | int argument
String | `final` | String argument

##### <a id='playerdeathevent'></a>new __PlayerDeathEvent__(Player, List, int, int, int, int, String) 

_PlayerDeathEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Player | `final` | Player argument
List | `final` | List argument
int | `final` | int argument
int | `final` | int argument
int | `final` | int argument
int | `final` | int argument
String | `final` | String argument

---

### Public Properties for [`PlayerDeathEvent`](PlayerDeathEvent.md)

##### <a id='newlevel'></a>public  writeonly property __NewLevel__

_Set: Sets the Level the Player should have at respawn._

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
level | `int` | New Level of the respawned player


##### <a id='entity'></a>public  readonly property __Entity__

_Entity property_

Get | 
--- | 
`Player` |



##### <a id='deathmessage'></a>public   property __DeathMessage__

_Get: Get the death message that will appear to everyone on the server.<br>Set: Set the death message that will appear to everyone on the server._

Get | Description
--- | --- 
`String` | Message to appear to other players on the server.

Set | Type | Description  
--- | --- | --- 
deathMessage | `String` | Message to appear to other players on the server.


##### <a id='keepinventory'></a>public   property __KeepInventory__

_Get: Gets if the Player keeps inventory on death.<br>Set: Sets if the Player keeps inventory on death._

Get | Description
--- | --- 
`boolean` | True if the player keeps inventory on death

Set | Type | Description  
--- | --- | --- 
keepInventory | `boolean` | True to keep the inventory


##### <a id='keeplevel'></a>public   property __KeepLevel__

_Get: Gets if the Player should keep all EXP at respawn. <p> This flag overrides other EXP settings<br>Set: Sets if the Player should keep all EXP at respawn. <p> This overrides all other EXP settings <p> This doesn't prevent prevent the EXP from dropping. `#setDroppedExp(int)` should be used stop the EXP from dropping._

Get | Description
--- | --- 
`boolean` | True if Player should keep all pre-death exp

Set | Type | Description  
--- | --- | --- 
keepLevel | `boolean` | True to keep all current value levels


##### <a id='newexp'></a>public   property __NewExp__

_Get: Gets how much EXP the Player should have at respawn. <p> This does not indicate how much EXP should be dropped, please see `#getDroppedExp()` for that.<br>Set: Sets how much EXP the Player should have at respawn. <p> This does not indicate how much EXP should be dropped, please see `#setDroppedExp(int)` for that._

Get | Description
--- | --- 
`int` | New EXP of the respawned player

Set | Type | Description  
--- | --- | --- 
exp | `int` | New EXP of the respawned player


##### <a id='newlevel'></a>public  readonly property __NewLevel__

_Get: Gets the Level the Player should have at respawn._

Get | Description
--- | --- 
`int` | New Level of the respawned player



##### <a id='newtotalexp'></a>public   property __NewTotalExp__

_Get: Gets the Total EXP the Player should have at respawn.<br>Set: Sets the Total EXP the Player should have at respawn._

Get | Description
--- | --- 
`int` | New Total EXP of the respawned player

Set | Type | Description  
--- | --- | --- 
totalExp | `int` | New Total EXP of the respawned player


---
### Public Constructors for [`EntityDeathEvent`](EntityDeathEvent.md)

##### <a id='entitydeathevent'></a>new __EntityDeathEvent__(LivingEntity, List) 

_EntityDeathEvent constructor_

Argument | Type | Description  
--- | --- | --- 
LivingEntity | `final` | LivingEntity argument
List | `final` | List argument

##### <a id='entitydeathevent'></a>new __EntityDeathEvent__(LivingEntity, List, int) 

_EntityDeathEvent constructor_

Argument | Type | Description  
--- | --- | --- 
LivingEntity | `final` | LivingEntity argument
List | `final` | List argument
int | `final` | int argument

---

### Public Properties for [`EntityDeathEvent`](EntityDeathEvent.md)

##### <a id='droppedexp'></a>public   property __DroppedExp__

_Get: Gets how much EXP should be dropped from this death. <p> This does not indicate how much EXP should be taken from the entity in question, merely how much should be created after its death.<br>Set: Sets how much EXP should be dropped from this death. <p> This does not indicate how much EXP should be taken from the entity in question, merely how much should be created after its death._

Get | Description
--- | --- 
`int` | Amount of EXP to drop.

Set | Type | Description  
--- | --- | --- 
exp | `int` | Amount of EXP to drop.


##### <a id='drops'></a>public  readonly property __Drops__

_Get: Gets all the items which will drop when the entity dies_

Get | Description
--- | --- 
`List<ItemStack>` | Items to drop when the entity dies



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
	

