## BlockIgniteEvent __class__

>io.wolfscript.event.block.BlockIgniteEvent
>Extends [`BlockEvent`](BlockEvent.md)
>Implements [`Cancellable`](../Cancellable.md)

---

### Class Overview

Called when a block is ignited. If you want to catch when a Player places fire, you need to use [`BlockPlaceEvent`](BlockPlaceEvent.md). <p> If a Block Ignite event is cancelled, the block will not be ignited.

Method | Type   
--- | :--- 
new __BlockIgniteEvent__(Block, IgniteCause, Player) <br> _BlockIgniteEvent constructor_ | _constructor_
new __BlockIgniteEvent__(Block, IgniteCause, Entity) <br> _BlockIgniteEvent constructor_ | _constructor_
new __BlockIgniteEvent__(Block, IgniteCause, Block) <br> _BlockIgniteEvent constructor_ | _constructor_
new __BlockIgniteEvent__(Block, IgniteCause, Entity, Block) <br> _BlockIgniteEvent constructor_ | _constructor_
 readonly property __Cause__ <br> _Get: Gets the cause of block ignite._ | `IgniteCause`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
 readonly property __IgnitingBlock__ <br> _Get: Gets the block who ignited this block_ | [`Block`](../../block/Block.md)
 readonly property __IgnitingEntity__ <br> _Get: Gets the entity who ignited this block_ | `Entity`
 readonly property __Player__ <br> _Get: Gets the player who ignited this block_ | `Player`
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
final function __isAsynchronous__() <br> _Any custom event that should not by synchronized with other events must_ | `boolean`







---

### Public Constructors for [`BlockIgniteEvent`](BlockIgniteEvent.md)

##### <a id='blockigniteevent'></a>new __BlockIgniteEvent__(Block, IgniteCause, Player) 

_BlockIgniteEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Block | `final` | Block argument
IgniteCause | `final` | IgniteCause argument
Player | `final` | Player argument

##### <a id='blockigniteevent'></a>new __BlockIgniteEvent__(Block, IgniteCause, Entity) 

_BlockIgniteEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Block | `final` | Block argument
IgniteCause | `final` | IgniteCause argument
Entity | `final` | Entity argument

##### <a id='blockigniteevent'></a>new __BlockIgniteEvent__(Block, IgniteCause, Block) 

_BlockIgniteEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Block | `final` | Block argument
IgniteCause | `final` | IgniteCause argument
Block | `final` | Block argument

##### <a id='blockigniteevent'></a>new __BlockIgniteEvent__(Block, IgniteCause, Entity, Block) 

_BlockIgniteEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Block | `final` | Block argument
IgniteCause | `final` | IgniteCause argument
Entity | `final` | Entity argument
Block | `final` | Block argument

---

### Public Properties for [`BlockIgniteEvent`](BlockIgniteEvent.md)

##### <a id='cause'></a>public  readonly property __Cause__

_Get: Gets the cause of block ignite._

Get | Description
--- | --- 
`IgniteCause` | An IgniteCause value detailing the cause of block ignition



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



##### <a id='ignitingblock'></a>public  readonly property __IgnitingBlock__

_Get: Gets the block who ignited this block_

Get | Description
--- | --- 
[`Block`](../../block/Block.md) | The Block that placed/ignited the fire block, or null if not ignited by a Block.



##### <a id='ignitingentity'></a>public  readonly property __IgnitingEntity__

_Get: Gets the entity who ignited this block_

Get | Description
--- | --- 
`Entity` | The Entity that placed/ignited the fire block, or null if not ignited by a Entity.



##### <a id='player'></a>public  readonly property __Player__

_Get: Gets the player who ignited this block_

Get | Description
--- | --- 
`Player` | The Player that placed/ignited the fire block, or null if not ignited by a Player.



##### <a id='cancelled'></a>public  writeonly property __Cancelled__

_Cancelled property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
cancel | `boolean` | cancel argument


---

### Public Methods for [`BlockIgniteEvent`](BlockIgniteEvent.md)

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

_Any custom event that should not by synchronized with other events must use the specific constructor. These are the caveats of using an asynchronous event: <ul> <li>The event is never fired from inside code triggered by a synchronous event. Attempting to do so results in an `IllegalStateException`. <li>However, asynchronous event handlers may fire synchronous or asynchronous events <li>The event may be fired multiple times simultaneously and in any order. <li>Any newly registered or unregistered handler is ignored after an event starts execution. <li>The handlers for this event may block for any length of time. <li>Some implementations may selectively declare a specific event use as asynchronous. This behavior should be clearly defined. <li>Asynchronous calls are not calculated in the plugin timing system. </ul>_

Returns | Description
--- | --- 
`boolean` | false by default, true if the event fires asynchronously


---


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	
