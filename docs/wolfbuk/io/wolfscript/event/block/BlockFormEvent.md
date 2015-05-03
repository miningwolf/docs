## BlockFormEvent __class__

>io.wolfscript.event.block.BlockFormEvent
>Extends [`BlockGrowEvent`](BlockGrowEvent.md)
>Implements [`Cancellable`](..\Cancellable.md)

---

### Class Overview

Called when a block is formed or spreads based on world conditions. <p> Use [`BlockSpreadEvent`](BlockSpreadEvent.md) to catch blocks that actually spread and don't just "randomly" form. <p> Examples: <ul> <li>Snow forming due to a snow storm. <li>Ice forming in a snowy Biome like Taiga or Tundra. </ul> <p> If a Block Form event is cancelled, the block will not be formed.

Method | Type   
--- | :--- 
new __BlockFormEvent__(Block, BlockState) <br> _BlockFormEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](..\HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](..\HandlerList.md)
 |
__Inherited items from [`BlockGrowEvent`](BlockGrowEvent.md)__ |
new __BlockGrowEvent__(Block, BlockState) <br> _BlockGrowEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](..\HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](..\HandlerList.md)
 readonly property __NewState__ <br> _Get: Gets the state of the block where it will form or spread to._ | [`BlockState`](..\..\block\BlockState.md)
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

### Public Constructors for [`BlockFormEvent`](BlockFormEvent.md)

##### <a id='blockformevent'></a>new __BlockFormEvent__(Block, BlockState) 

_BlockFormEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Block | `final` | Block argument
BlockState | `final` | BlockState argument

---

### Public Properties for [`BlockFormEvent`](BlockFormEvent.md)

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
### Public Constructors for [`BlockGrowEvent`](BlockGrowEvent.md)

##### <a id='blockgrowevent'></a>new __BlockGrowEvent__(Block, BlockState) 

_BlockGrowEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Block | `final` | Block argument
BlockState | `final` | BlockState argument

---

### Public Properties for [`BlockGrowEvent`](BlockGrowEvent.md)

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



##### <a id='newstate'></a>public  readonly property __NewState__

_Get: Gets the state of the block where it will form or spread to._

Get | Description
--- | --- 
[`BlockState`](..\..\block\BlockState.md) | The block state for this events block



##### <a id='cancelled'></a>public  writeonly property __Cancelled__

_Cancelled property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
cancel | `boolean` | cancel argument


---

### Public Methods for [`BlockGrowEvent`](BlockGrowEvent.md)

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
	

