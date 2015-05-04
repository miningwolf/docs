## PlayerArmorStandManipulateEvent __class__

>io.wolfscript.event.player.PlayerArmorStandManipulateEvent
>Extends [`PlayerInteractEntityEvent`](PlayerInteractEntityEvent.md)

---

### Class Overview

Called when a player interacts with an armor stand and will either swap, retrieve or place an item.

Method | Type   
--- | :--- 
new __PlayerArmorStandManipulateEvent__(Player, ArmorStand, ItemStack, ItemStack, EquipmentSlot) <br> _PlayerArmorStandManipulateEvent constructor_ | _constructor_
 readonly property __ArmorStandItem__ <br> _Get: Returns the item held by the armor stand._ | `ItemStack`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
 readonly property __PlayerItem__ <br> _Get: Returns the item held by the player. If this Item is null and the armor stand Item is also null,_ | `ItemStack`
 readonly property __RightClicked__ <br> _RightClicked property_ | [`ArmorStand`](../../entity/ArmorStand.md)
 readonly property __Slot__ <br> _Get: Returns the raw item slot of the armor stand in this event._ | [`EquipmentSlot`](../../inventory/EquipmentSlot.md)
 |
__Inherited items from [`PlayerInteractEntityEvent`](PlayerInteractEntityEvent.md)__ |
new __PlayerInteractEntityEvent__(Player, Entity) <br> _PlayerInteractEntityEvent constructor_ | _constructor_
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

### Public Constructors for [`PlayerArmorStandManipulateEvent`](PlayerArmorStandManipulateEvent.md)

##### <a id='playerarmorstandmanipulateevent'></a>new __PlayerArmorStandManipulateEvent__(Player, ArmorStand, ItemStack, ItemStack, EquipmentSlot) 

_PlayerArmorStandManipulateEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Player | `final` | Player argument
ArmorStand | `final` | ArmorStand argument
ItemStack | `final` | ItemStack argument
ItemStack | `final` | ItemStack argument
EquipmentSlot | `final` | EquipmentSlot argument

---

### Public Properties for [`PlayerArmorStandManipulateEvent`](PlayerArmorStandManipulateEvent.md)

##### <a id='armorstanditem'></a>public  readonly property __ArmorStandItem__

_Get: Returns the item held by the armor stand. If this Item is null and the player's Item is also null, there will be no transaction between the player and the armor stand. If the Player's item is null, but the armor stand item is not then the player will obtain the armor stand item. In the case that the Player's item is not null, but the armor stand item is null, the players item will be placed on the armor stand. If both items are not null, the items will be swapped. In the case that the event is cancelled the original items will remain the same._

Get | Description
--- | --- 
`ItemStack` | the item held by the armor stand.



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



##### <a id='playeritem'></a>public  readonly property __PlayerItem__

_Get: Returns the item held by the player. If this Item is null and the armor stand Item is also null, there will be no transaction between the player and the armor stand. If the Player's item is null, but the armor stand item is not then the player will obtain the armor stand item. In the case that the Player's item is not null, but the armor stand item is null, the players item will be placed on the armor stand. If both items are not null, the items will be swapped. In the case that the event is cancelled the original items will remain the same._

Get | Description
--- | --- 
`ItemStack` | the item held by the player.



##### <a id='rightclicked'></a>public  readonly property __RightClicked__

_RightClicked property_

Get | 
--- | 
[`ArmorStand`](../../entity/ArmorStand.md) |



##### <a id='slot'></a>public  readonly property __Slot__

_Get: Returns the raw item slot of the armor stand in this event._

Get | Description
--- | --- 
[`EquipmentSlot`](../../inventory/EquipmentSlot.md) | the index of the item obtained or placed of the armor stand.



---
### Public Constructors for [`PlayerInteractEntityEvent`](PlayerInteractEntityEvent.md)

##### <a id='playerinteractentityevent'></a>new __PlayerInteractEntityEvent__(Player, Entity) 

_PlayerInteractEntityEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Player | `final` | Player argument
Entity | `final` | Entity argument

---

### Public Properties for [`PlayerInteractEntityEvent`](PlayerInteractEntityEvent.md)

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


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

