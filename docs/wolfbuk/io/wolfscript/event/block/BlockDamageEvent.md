## BlockDamageEvent __class__

>io.wolfscript.event.block.BlockDamageEvent
>Extends [`BlockEvent`](BlockEvent.md)
>Implements [`Cancellable`](../Cancellable.md)

---

### Class Overview

Called when a block is damaged by a player. <p> If a Block Damage event is cancelled, the block will not be damaged.

Method | Type   
--- | :--- 
new __BlockDamageEvent__(Player, Block, ItemStack, boolean) <br> _BlockDamageEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
  property __InstaBreak__ <br> _Get: Gets if the block is set to instantly break when damaged by the player.<br>Set: Sets if the block should instantly break when damaged by the player._ | `boolean`
 readonly property __ItemInHand__ <br> _Get: Gets the ItemStack for the item currently in the player's hand._ | `ItemStack`
 readonly property __Player__ <br> _Get: Gets the player damaging the block involved in this event._ | `Player`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`BlockEvent`](BlockEvent.md)__ |
new __BlockEvent__(Block) <br> _BlockEvent constructor_ | _constructor_
final readonly property __Block__ <br> _Get: Gets the block involved in this event._ | [`Block`](../../block/Block.md)
 |
__Inherited items from [`Event`](../Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







---

### Public Constructors for [`BlockDamageEvent`](BlockDamageEvent.md)

##### <a id='blockdamageevent'></a>new __BlockDamageEvent__(Player, Block, ItemStack, boolean) 

_BlockDamageEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Player | `final` | Player argument
Block | `final` | Block argument
ItemStack | `final` | ItemStack argument
boolean | `final` | boolean argument

---

### Public Properties for [`BlockDamageEvent`](BlockDamageEvent.md)

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



##### <a id='instabreak'></a>public   property __InstaBreak__

_Get: Gets if the block is set to instantly break when damaged by the player.<br>Set: Sets if the block should instantly break when damaged by the player._

Get | Description
--- | --- 
`boolean` | true if the block should instantly break when damaged by the player

Set | Type | Description  
--- | --- | --- 
bool | `boolean` | true if you want the block to instantly break when damaged by the player


##### <a id='iteminhand'></a>public  readonly property __ItemInHand__

_Get: Gets the ItemStack for the item currently in the player's hand._

Get | Description
--- | --- 
`ItemStack` | The ItemStack for the item currently in the player's hand



##### <a id='player'></a>public  readonly property __Player__

_Get: Gets the player damaging the block involved in this event._

Get | Description
--- | --- 
`Player` | The player damaging the block involved in this event



##### <a id='cancelled'></a>public  writeonly property __Cancelled__

_Cancelled property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
cancel | `boolean` | cancel argument


---

### Public Methods for [`BlockDamageEvent`](BlockDamageEvent.md)

##### <a id='iscancelled'></a>public  function __isCancelled__()

_isCancelled method_

Returns | 
--- | 
`boolean` |


---
### Public Constructors for [`BlockEvent`](BlockEvent.md)

##### <a id='blockevent'></a>new __BlockEvent__(Block) 

_BlockEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Block | `final` | Block argument

---

### Public Properties for [`BlockEvent`](BlockEvent.md)

##### <a id='block'></a>public final readonly property __Block__

_Get: Gets the block involved in this event._

Get | Description
--- | --- 
[`Block`](../../block/Block.md) | The Block which block is involved in this event



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
	

