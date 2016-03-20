## BlockMultiPlaceEvent __class__

>io.wolfscript.event.block.BlockMultiPlaceEvent
>Extends [`BlockPlaceEvent`](BlockPlaceEvent.md)
``` javascript
this.on('block.BlockMultiPlaceEvent', function (e) { });
```


---

### Class Overview

Fired when a single block placement action of a player triggers the creation of multiple blocks(e.g. placing a bed block). The block returned by `#getBlockPlaced()` and its related methods is the block where the placed block would exist if the placement only affected a single block.

Method | Type   
--- | :--- 
new __BlockMultiPlaceEvent__(clicked, itemInHand, thePlayer, canBuild) <br> _BlockMultiPlaceEvent constructor_ | _constructor_
 readonly property __ReplacedBlockStates__ <br> _Get: Gets a list of blockstates for all blocks which were replaced by the_ | `List<BlockState>`
 |
__Inherited items from [`BlockPlaceEvent`](BlockPlaceEvent.md)__ |
new __BlockPlaceEvent__(Block, BlockState, Block, ItemStack, Player, boolean, EquipmentSlot) <br> _BlockPlaceEvent constructor_ | _constructor_
 readonly property __ItemInHand__ <br> _Get: Gets the item in the player's hand when they placed the block._ | `ItemStack`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __BlockPlaced__ <br> _Get: Clarity method for getting the placed block. Not really needed except_ | [`Block`](../../block/Block.md)
 readonly property __BlockReplacedState__ <br> _Get: Gets the BlockState for the block which was replaced. Material type air_ | [`BlockState`](../../block/BlockState.md)
 readonly property __BlockAgainst__ <br> _Get: Gets the block that this block was placed against_ | [`Block`](../../block/Block.md)
 readonly property __Hand__ <br> _Get: Gets the hand which placed the block_ | [`EquipmentSlot`](../../inventory/EquipmentSlot.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Player__ <br> _Get: Gets the player who placed the block involved in this event._ | `Player`
 writeonly property __Build__ <br> _Set: Sets the canBuild state of this event. Set to true if you want the_ | `void`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __canBuild__() <br> _Gets the value whether the player would be allowed to build here._ | `boolean`
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

### Public Constructors for [`BlockMultiPlaceEvent`](BlockMultiPlaceEvent.md)

##### <a id='blockmultiplaceevent'></a>new __BlockMultiPlaceEvent__(clicked, itemInHand, thePlayer, canBuild) 

_BlockMultiPlaceEvent constructor_

Argument | Type | Description  
--- | --- | --- 
clicked | [`Block`](../../block/Block.md) | clicked argument
itemInHand | `ItemStack` | itemInHand argument
thePlayer | `Player` | thePlayer argument
canBuild | `boolean` | canBuild argument

---

### Public Properties for [`BlockMultiPlaceEvent`](BlockMultiPlaceEvent.md)

##### <a id='replacedblockstates'></a>public  readonly property __ReplacedBlockStates__

_Get: Gets a list of blockstates for all blocks which were replaced by the placement of the new blocks. Most of these blocks will just have a Material type of AIR._

Get | Description
--- | --- 
`List<BlockState>` | immutable list of replaced BlockStates



---
### Public Constructors for [`BlockPlaceEvent`](BlockPlaceEvent.md)

##### <a id='blockplaceevent'></a>new __BlockPlaceEvent__(Block, BlockState, Block, ItemStack, Player, boolean) 
_Deprecated_

_BlockPlaceEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Block | `final` | Block argument
BlockState | `final` | BlockState argument
Block | `final` | Block argument
ItemStack | `final` | ItemStack argument
Player | `final` | Player argument
boolean | `final` | boolean argument

##### <a id='blockplaceevent'></a>new __BlockPlaceEvent__(Block, BlockState, Block, ItemStack, Player, boolean, EquipmentSlot) 

_BlockPlaceEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Block | `final` | Block argument
BlockState | `final` | BlockState argument
Block | `final` | Block argument
ItemStack | `final` | ItemStack argument
Player | `final` | Player argument
boolean | `final` | boolean argument
EquipmentSlot | `final` | EquipmentSlot argument

---

### Public Properties for [`BlockPlaceEvent`](BlockPlaceEvent.md)

##### <a id='iteminhand'></a>public  readonly property __ItemInHand__

_Get: Gets the item in the player's hand when they placed the block._

Get | Description
--- | --- 
`ItemStack` | The ItemStack for the item in the player's hand when they placed the block



##### <a id='handlerlist'></a>public static readonly property __HandlerList__

_HandlerList property_

Get | 
--- | 
[`HandlerList`](../HandlerList.md) |



##### <a id='blockplaced'></a>public  readonly property __BlockPlaced__

_Get: Clarity method for getting the placed block. Not really needed except for reasons of clarity._

Get | Description
--- | --- 
[`Block`](../../block/Block.md) | The Block that was placed



##### <a id='blockreplacedstate'></a>public  readonly property __BlockReplacedState__

_Get: Gets the BlockState for the block which was replaced. Material type air mostly._

Get | Description
--- | --- 
[`BlockState`](../../block/BlockState.md) | The BlockState for the block which was replaced.



##### <a id='blockagainst'></a>public  readonly property __BlockAgainst__

_Get: Gets the block that this block was placed against_

Get | Description
--- | --- 
[`Block`](../../block/Block.md) | Block the block that the new block was placed against



##### <a id='hand'></a>public  readonly property __Hand__

_Get: Gets the hand which placed the block_

Get | Description
--- | --- 
[`EquipmentSlot`](../../inventory/EquipmentSlot.md) | Main or off-hand, depending on which hand was used to place the block



##### <a id='handlers'></a>public  readonly property __Handlers__

_Handlers property_

Get | 
--- | 
[`HandlerList`](../HandlerList.md) |



##### <a id='player'></a>public  readonly property __Player__

_Get: Gets the player who placed the block involved in this event._

Get | Description
--- | --- 
`Player` | The Player who placed the block involved in this event



##### <a id='build'></a>public  writeonly property __Build__

_Set: Sets the canBuild state of this event. Set to true if you want the player to be able to build._

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
canBuild | `boolean` | true if you want the player to be able to build


##### <a id='cancelled'></a>public  writeonly property __Cancelled__

_Cancelled property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
cancel | `boolean` | cancel argument


---

### Public Methods for [`BlockPlaceEvent`](BlockPlaceEvent.md)

##### <a id='canbuild'></a>public  function __canBuild__()

_Gets the value whether the player would be allowed to build here. Defaults to spawn if the server was going to stop them (such as, the player is in Spawn). Note that this is an entirely different check than BLOCK_CANBUILD, as this refers to a player, not universe-physics rule like cactus on dirt._

Returns | Description
--- | --- 
`boolean` | boolean whether the server would allow a player to build here


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


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

