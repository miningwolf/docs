## BlockMultiPlaceEvent __class__

>io.wolfscript.event.block.BlockMultiPlaceEvent
>Extends [`BlockPlaceEvent`](BlockPlaceEvent.md)

---

### Class Overview

Fired when a single block placement action of a player triggers the creation of multiple blocks(e.g. placing a bed block). The block returned by `#getBlockPlaced()` and its related methods is the block where the placed block would exist if the placement only affected a single block.

Method | Type   
--- | :--- 
new __BlockMultiPlaceEvent__(clicked, itemInHand, thePlayer, canBuild) <br> _BlockMultiPlaceEvent constructor_ | _constructor_
 readonly property __ReplacedBlockStates__ <br> _Get: Gets a list of blockstates for all blocks which were replaced by the_ | `List<BlockState>`
 |
__Inherited items from [`BlockPlaceEvent`](BlockPlaceEvent.md)__ |
new __BlockPlaceEvent__(Block, BlockState, Block, ItemStack, Player, boolean) <br> _BlockPlaceEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](..\HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](..\HandlerList.md)
 writeonly property __Build__ <br> _Set: Gets the player who placed the block involved in this event._ | `void`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`BlockEvent`](BlockEvent.md)__ |
new __BlockEvent__(Block) <br> _BlockEvent constructor_ | _constructor_
final readonly property __Block__ <br> _Get: Gets the block involved in this event._ | [`Block`](..\..\block\Block.md)
 |
__Inherited items from [`Event`](..\Event.md)__ |
final function __isAsynchronous__() <br> _The default constructor is defined for cleaner code. This constructor_ | `boolean`









---

### Public Constructors for [`BlockMultiPlaceEvent`](BlockMultiPlaceEvent.md)

##### <a id='blockmultiplaceevent'></a>new __BlockMultiPlaceEvent__(clicked, itemInHand, thePlayer, canBuild) 

_BlockMultiPlaceEvent constructor_

Argument | Type | Description  
--- | --- | --- 
clicked | [`Block`](..\..\block\Block.md) | clicked argument
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

_BlockPlaceEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Block | `final` | Block argument
BlockState | `final` | BlockState argument
Block | `final` | Block argument
ItemStack | `final` | ItemStack argument
Player | `final` | Player argument
boolean | `final` | boolean argument

---

### Public Properties for [`BlockPlaceEvent`](BlockPlaceEvent.md)

##### <a id='handlerlist'></a>public static readonly property __HandlerList__

_HandlerList property_

Get | 
--- | 
[`HandlerList`](..\HandlerList.md) |



##### <a id='handlers'></a>public  readonly property __Handlers__

_Handlers property_

Get | 
--- | 
[`HandlerList`](..\HandlerList.md) |



##### <a id='build'></a>public  writeonly property __Build__

_Set: Gets the player who placed the block involved in this event._

Get | Description
--- | --- 
`void` | The Player who placed the block involved in this event /
    public Player getPlayer() {
        return player;
    }

    /** Clarity method for getting the placed block. Not really needed except for reasons of clarity.

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
[`Block`](..\..\block\Block.md) | The Block which block is involved in this event



---

### Public Methods for [`Event`](..\Event.md)

##### <a id='isasynchronous'></a>public final function __isAsynchronous__()

_The default constructor is defined for cleaner code. This constructor assumes the event is synchronous. /
    public Event() {
        this(false);
    }

    /** This constructor is used to explicitly declare an event as synchronous or asynchronous._

Returns | Description
--- | --- 
`boolean` | name of this event /
    public String getEventName() {
        if (name == null) {
            name = getClass().getSimpleName();
        }
        return name;
    }

    public abstract HandlerList getHandlers();

    /** Any custom event that should not by synchronized with other events must use the specific constructor. These are the caveats of using an asynchronous event: <ul> <li>The event is never fired from inside code triggered by a synchronous event. Attempting to do so results in an `IllegalStateException`. <li>However, asynchronous event handlers may fire synchronous or asynchronous events <li>The event may be fired multiple times simultaneously and in any order. <li>Any newly registered or unregistered handler is ignored after an event starts execution. <li>The handlers for this event may block for any length of time. <li>Some implementations may selectively declare a specific event use as asynchronous. This behavior should be clearly defined. <li>Asynchronous calls are not calculated in the plugin timing system. </ul>


---


---


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

