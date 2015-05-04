## BlockBreakEvent __class__

>io.wolfscript.event.block.BlockBreakEvent
>Extends [`BlockExpEvent`](BlockExpEvent.md)
>Implements [`Cancellable`](../Cancellable.md)

---

### Class Overview

class BlockBreakEvent

Method | Type   
--- | :--- 
new __BlockBreakEvent__(Block, Player) <br> _BlockBreakEvent constructor_ | _constructor_
 readonly property __Player__ <br> _Get: Gets the Player that is breaking the block involved in this event._ | `Player`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`BlockExpEvent`](BlockExpEvent.md)__ |
new __BlockExpEvent__(block, exp) <br> _BlockExpEvent constructor_ | _constructor_
  property __ExpToDrop__ <br> _Get: Get the experience dropped by the block after the event has processed<br>Set: Set the amount of experience dropped by the block after the event has_ | `int`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
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
block | [`Block`](../../block/Block.md) | block argument
exp | `int` | exp argument

---

### Public Properties for [`BlockExpEvent`](BlockExpEvent.md)

##### <a id='exptodrop'></a>public   property __ExpToDrop__

_Get: Get the experience dropped by the block after the event has processed<br>Set: Set the amount of experience dropped by the block after the event has processed_

Get | Description
--- | --- 
`int` | The experience to drop

Set | Type | Description  
--- | --- | --- 
exp | `int` | 1 or higher to drop experience, else nothing will drop


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


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

