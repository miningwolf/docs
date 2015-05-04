## PlayerInteractEvent __class__

>io.wolfscript.event.player.PlayerInteractEvent
>Extends [`PlayerEvent`](PlayerEvent.md)
>Implements [`Cancellable`](../Cancellable.md)

---

### Class Overview

Called when a player interacts with an object or air. <p> This event will fire as cancelled if the vanilla behavior is to do nothing (e.g interacting with air)

Method | Type   
--- | :--- 
new __PlayerInteractEvent__(Player, Action, ItemStack, Block, BlockFace) <br> _PlayerInteractEvent constructor_ | _constructor_
 readonly property __ClickedBlock__ <br> _Get: Returns the clicked block_ | [`Block`](../../block/Block.md)
 readonly property __Action__ <br> _Get: Returns the action type_ | [`Action`](../block/Action.md)
 readonly property __BlockFace__ <br> _Get: Returns the face of the block that was clicked_ | [`BlockFace`](../../block/BlockFace.md)
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Material__ <br> _Get: Convenience method. Returns the material of the item represented by_ | [`Material`](../../Material.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Item__ <br> _Get: Returns the item in hand represented by this event_ | `ItemStack`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 writeonly property __UseInteractedBlock__ <br> _UseInteractedBlock property_ | `void`
 writeonly property __UseItemInHand__ <br> _UseItemInHand property_ | `void`
 function __useInteractedBlock__() <br> _This controls the action to take with the block (if any) that was_ | `Result`
 function __hasBlock__() <br> _Check if this event involved a block_ | `boolean`
 function __hasItem__() <br> _Check if this event involved an item_ | `boolean`
 function __isBlockInHand__() <br> _Convenience method to inform the user whether this was a block_ | `boolean`
 function __isCancelled__() <br> _Gets the cancellation state of this event. Set to true if you want to_ | `boolean`
 function __useItemInHand__() <br> _This controls the action to take with the item the player is holding._ | `Result`
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

### Public Constructors for [`PlayerInteractEvent`](PlayerInteractEvent.md)

##### <a id='playerinteractevent'></a>new __PlayerInteractEvent__(Player, Action, ItemStack, Block, BlockFace) 

_PlayerInteractEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Player | `final` | Player argument
Action | `final` | Action argument
ItemStack | `final` | ItemStack argument
Block | `final` | Block argument
BlockFace | `final` | BlockFace argument

---

### Public Properties for [`PlayerInteractEvent`](PlayerInteractEvent.md)

##### <a id='clickedblock'></a>public  readonly property __ClickedBlock__

_Get: Returns the clicked block_

Get | Description
--- | --- 
[`Block`](../../block/Block.md) | Block returns the block clicked with this item.



##### <a id='action'></a>public  readonly property __Action__

_Get: Returns the action type_

Get | Description
--- | --- 
[`Action`](../block/Action.md) | Action returns the type of interaction



##### <a id='blockface'></a>public  readonly property __BlockFace__

_Get: Returns the face of the block that was clicked_

Get | Description
--- | --- 
[`BlockFace`](../../block/BlockFace.md) | BlockFace returns the face of the block that was clicked



##### <a id='handlerlist'></a>public static readonly property __HandlerList__

_HandlerList property_

Get | 
--- | 
[`HandlerList`](../HandlerList.md) |



##### <a id='material'></a>public  readonly property __Material__

_Get: Convenience method. Returns the material of the item represented by this event_

Get | Description
--- | --- 
[`Material`](../../Material.md) | Material the material of the item used



##### <a id='handlers'></a>public  readonly property __Handlers__

_Handlers property_

Get | 
--- | 
[`HandlerList`](../HandlerList.md) |



##### <a id='item'></a>public  readonly property __Item__

_Get: Returns the item in hand represented by this event_

Get | Description
--- | --- 
`ItemStack` | ItemStack the item used



##### <a id='cancelled'></a>public  writeonly property __Cancelled__

_Cancelled property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
cancel | `boolean` | cancel argument


##### <a id='useinteractedblock'></a>public  writeonly property __UseInteractedBlock__

_UseInteractedBlock property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
useInteractedBlock | `Result` | the action to take with the interacted block


##### <a id='useiteminhand'></a>public  writeonly property __UseItemInHand__

_UseItemInHand property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
useItemInHand | `Result` | the action to take with the item in hand


---

### Public Methods for [`PlayerInteractEvent`](PlayerInteractEvent.md)

##### <a id='useinteractedblock'></a>public  function __useInteractedBlock__()

_This controls the action to take with the block (if any) that was clicked on. This event gets processed for all blocks, but most don't have a default action_

Returns | Description
--- | --- 
`Result` | the action to take with the interacted block


##### <a id='hasblock'></a>public  function __hasBlock__()

_Check if this event involved a block_

Returns | Description
--- | --- 
`boolean` | boolean true if it did


##### <a id='hasitem'></a>public  function __hasItem__()

_Check if this event involved an item_

Returns | Description
--- | --- 
`boolean` | boolean true if it did


##### <a id='isblockinhand'></a>public  function __isBlockInHand__()

_Convenience method to inform the user whether this was a block placement event._

Returns | Description
--- | --- 
`boolean` | boolean true if the item in hand was a block


##### <a id='iscancelled'></a>public  function __isCancelled__()

_Gets the cancellation state of this event. Set to true if you want to prevent buckets from placing water and so forth_

Returns | Description
--- | --- 
`boolean` | boolean cancellation state


##### <a id='useiteminhand'></a>public  function __useItemInHand__()

_This controls the action to take with the item the player is holding. This includes both blocks and items (such as flint and steel or records). When this is set to default, it will be allowed if no action is taken on the interacted block._

Returns | Description
--- | --- 
`Result` | the action to take with the item in hand


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
	

