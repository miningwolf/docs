## BlockPistonRetractEvent __class__

>io.wolfscript.event.block.BlockPistonRetractEvent
>Extends [`BlockPistonEvent`](BlockPistonEvent.md)

---

### Class Overview

Called when a piston retracts

Method | Type   
--- | :--- 
new __BlockPistonRetractEvent__(Block, List, BlockFace) <br> _BlockPistonRetractEvent constructor_ | _constructor_
 readonly property __Blocks__ <br> _Get: Gets the location where the possible moving block might be if the_ | `List<Block>`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](..\HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](..\HandlerList.md)
 |
__Inherited items from [`BlockPistonEvent`](BlockPistonEvent.md)__ |
new __BlockPistonEvent__(Block, BlockFace) <br> _BlockPistonEvent constructor_ | _constructor_
 readonly property __Direction__ <br> _Get: Returns true if the Piston in the event is sticky._ | [`BlockFace`](..\..\block\BlockFace.md)
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

### Public Constructors for [`BlockPistonRetractEvent`](BlockPistonRetractEvent.md)

##### <a id='blockpistonretractevent'></a>new __BlockPistonRetractEvent__(Block, List, BlockFace) 

_BlockPistonRetractEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Block | `final` | Block argument
List | `final` | List argument
BlockFace | `final` | BlockFace argument

---

### Public Properties for [`BlockPistonRetractEvent`](BlockPistonRetractEvent.md)

##### <a id='blocks'></a>public  readonly property __Blocks__

_Get: Gets the location where the possible moving block might be if the retracting piston is sticky._

Get | Description
--- | --- 
`List<Block>` | The possible location of the possibly moving block. /
    @Deprecated
    public Location getRetractLocation() {
        return getBlock().getRelative(getDirection(), 2).getLocation();
    }
    
    /** Get an immutable list of the blocks which will be moved by the extending.



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



---
### Public Constructors for [`BlockPistonEvent`](BlockPistonEvent.md)

##### <a id='blockpistonevent'></a>new __BlockPistonEvent__(Block, BlockFace) 

_BlockPistonEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Block | `final` | Block argument
BlockFace | `final` | BlockFace argument

---

### Public Properties for [`BlockPistonEvent`](BlockPistonEvent.md)

##### <a id='direction'></a>public  readonly property __Direction__

_Get: Returns true if the Piston in the event is sticky._

Get | Description
--- | --- 
[`BlockFace`](..\..\block\BlockFace.md) | stickiness of the piston /
    public boolean isSticky() {
        return block.getType() == Material.PISTON_STICKY_BASE || block.getType() == Material.PISTON_MOVING_PIECE;
    }

    /** Return the direction in which the piston will operate.



##### <a id='cancelled'></a>public  writeonly property __Cancelled__

_Cancelled property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
cancelled | `boolean` | cancelled argument


---

### Public Methods for [`BlockPistonEvent`](BlockPistonEvent.md)

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
	

