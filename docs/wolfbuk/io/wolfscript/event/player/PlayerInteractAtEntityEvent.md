## PlayerInteractAtEntityEvent __class__

>io.wolfscript.event.player.PlayerInteractAtEntityEvent
>Extends [`PlayerInteractEntityEvent`](PlayerInteractEntityEvent.md)
``` javascript
this.on('player.PlayerInteractAtEntityEvent', function (e) { });
```


---

### Class Overview

Represents an event that is called when a player right clicks an entity with a location on the entity the was clicked.

Method | Type   
--- | :--- 
new __PlayerInteractAtEntityEvent__(who, clickedEntity, position) <br> _PlayerInteractAtEntityEvent constructor_ | _constructor_
new __PlayerInteractAtEntityEvent__(who, clickedEntity, position, hand) <br> _PlayerInteractAtEntityEvent constructor_ | _constructor_
 readonly property __ClickedPosition__ <br> _ClickedPosition property_ | `Vector`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
 |
__Inherited items from [`PlayerInteractEntityEvent`](PlayerInteractEntityEvent.md)__ |
new __PlayerInteractEntityEvent__(Player, Entity) <br> _PlayerInteractEntityEvent constructor_ | _constructor_
new __PlayerInteractEntityEvent__(Player, Entity, EquipmentSlot) <br> _PlayerInteractEntityEvent constructor_ | _constructor_
 readonly property __Hand__ <br> _Get: The hand used to perform this interaction._ | [`EquipmentSlot`](../../inventory/EquipmentSlot.md)
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
 readonly property __RightClicked__ <br> _Get: Gets the entity that was rightclicked by the player._ | `Entity`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
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

### Public Constructors for [`PlayerInteractAtEntityEvent`](PlayerInteractAtEntityEvent.md)

##### <a id='playerinteractatentityevent'></a>new __PlayerInteractAtEntityEvent__(who, clickedEntity, position) 

_PlayerInteractAtEntityEvent constructor_

Argument | Type | Description  
--- | --- | --- 
who | `Player` | who argument
clickedEntity | `Entity` | clickedEntity argument
position | `Vector` | position argument

##### <a id='playerinteractatentityevent'></a>new __PlayerInteractAtEntityEvent__(who, clickedEntity, position, hand) 

_PlayerInteractAtEntityEvent constructor_

Argument | Type | Description  
--- | --- | --- 
who | `Player` | who argument
clickedEntity | `Entity` | clickedEntity argument
position | `Vector` | position argument
hand | [`EquipmentSlot`](../../inventory/EquipmentSlot.md) | hand argument

---

### Public Properties for [`PlayerInteractAtEntityEvent`](PlayerInteractAtEntityEvent.md)

##### <a id='clickedposition'></a>public  readonly property __ClickedPosition__

_ClickedPosition property_

Get | 
--- | 
`Vector` |



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
### Public Constructors for [`PlayerInteractEntityEvent`](PlayerInteractEntityEvent.md)

##### <a id='playerinteractentityevent'></a>new __PlayerInteractEntityEvent__(Player, Entity) 

_PlayerInteractEntityEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Player | `final` | Player argument
Entity | `final` | Entity argument

##### <a id='playerinteractentityevent'></a>new __PlayerInteractEntityEvent__(Player, Entity, EquipmentSlot) 

_PlayerInteractEntityEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Player | `final` | Player argument
Entity | `final` | Entity argument
EquipmentSlot | `final` | EquipmentSlot argument

---

### Public Properties for [`PlayerInteractEntityEvent`](PlayerInteractEntityEvent.md)

##### <a id='hand'></a>public  readonly property __Hand__

_Get: The hand used to perform this interaction._

Get | Description
--- | --- 
[`EquipmentSlot`](../../inventory/EquipmentSlot.md) | the hand used to interact



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



##### <a id='rightclicked'></a>public  readonly property __RightClicked__

_Get: Gets the entity that was rightclicked by the player._

Get | Description
--- | --- 
`Entity` | entity right clicked by player



##### <a id='cancelled'></a>public  writeonly property __Cancelled__

_Cancelled property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
cancel | `boolean` | cancel argument


---

### Public Methods for [`PlayerInteractEntityEvent`](PlayerInteractEntityEvent.md)

##### <a id='iscancelled'></a>public  function __isCancelled__()

_isCancelled method_

Returns | 
--- | 
`boolean` |


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


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

