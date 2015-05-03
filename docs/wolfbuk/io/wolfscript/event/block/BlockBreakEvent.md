## BlockBreakEvent __class__

>io.wolfscript.event.block.BlockBreakEvent
>Extends [`BlockExpEvent`](BlockExpEvent.md)
>Implements [`Cancellable`](..\Cancellable.md)

---

### Class Overview

Called when a block is broken by a player. <p> If you wish to have the block drop experience, you must set the experience value above 0. By default, experience will be set in the event if: <ol> <li>The player is not in creative or adventure mode <li>The player can loot the block (ie: does not destroy it completely, by using the correct tool) <li>The player does not have silk touch <li>The block drops experience in vanilla Minecraft </ol> <p> Note: Plugins wanting to simulate a traditional block drop should set the block to air and utilize their own methods for determining what the default drop for the block being broken is and what to do about it, if anything. <p> If a Block Break event is cancelled, the block will not break and experience will not drop.

Method | Type   
--- | :--- 
new __BlockBreakEvent__(Block, Player) <br> _BlockBreakEvent constructor_ | _constructor_
 readonly property __Player__ <br> _Get: Gets the Player that is breaking the block involved in this event._ | `Player`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`BlockExpEvent`](BlockExpEvent.md)__ |
new __BlockExpEvent__(block, exp) <br> _BlockExpEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](..\HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](..\HandlerList.md)
 writeonly property __ExpToDrop__ <br> _Set: Get the experience dropped by the block after the event has processed_ | `void`
 |
__Inherited items from [`BlockEvent`](BlockEvent.md)__ |
new __BlockEvent__(Block) <br> _BlockEvent constructor_ | _constructor_
final readonly property __Block__ <br> _Get: Gets the block involved in this event._ | [`Block`](..\..\block\Block.md)
 |
__Inherited items from [`Event`](..\Event.md)__ |
final function __isAsynchronous__() <br> _The default constructor is defined for cleaner code. This constructor_ | `boolean`









---

### Public Constructors for [`BlockBreakEvent`](BlockBreakEvent.md)

##### <a id='blockbreakevent'></a>new __BlockBreakEvent__(Block, Player) 

_BlockBreakEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Block | `final` | Block argument
Player | `final` | Player argument

---

### Public Properties for [`BlockBreakEvent`](BlockBreakEvent.md)

##### <a id='player'></a>public  readonly property __Player__

_Get: Gets the Player that is breaking the block involved in this event._

Get | Description
--- | --- 
`Player` | The Player that is breaking the block involved in this event



##### <a id='cancelled'></a>public  writeonly property __Cancelled__

_Cancelled property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
cancel | `boolean` | cancel argument


---

### Public Methods for [`BlockBreakEvent`](BlockBreakEvent.md)

##### <a id='iscancelled'></a>public  function __isCancelled__()

_isCancelled method_

Returns | 
--- | 
`boolean` |


---
### Public Constructors for [`BlockExpEvent`](BlockExpEvent.md)

##### <a id='blockexpevent'></a>new __BlockExpEvent__(block, exp) 

_BlockExpEvent constructor_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](..\..\block\Block.md) | block argument
exp | `int` | exp argument

---

### Public Properties for [`BlockExpEvent`](BlockExpEvent.md)

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



##### <a id='exptodrop'></a>public  writeonly property __ExpToDrop__

_Set: Get the experience dropped by the block after the event has processed_

Get | Description
--- | --- 
`void` | The experience to drop /
    public int getExpToDrop() {
        return exp;
    }

    /** Set the amount of experience dropped by the block after the event has processed

Set | Type | Description  
--- | --- | --- 
exp | `int` | 1 or higher to drop experience, else nothing will drop


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
	

