## BlockSpreadEvent __class__

>io.wolfscript.event.block.BlockSpreadEvent
>Extends [`BlockFormEvent`](BlockFormEvent.md)
``` javascript
this.on('block.BlockSpreadEvent', function (e) { });
```


---

### Class Overview

class BlockSpreadEvent

Method | Type   
--- | :--- 
new __BlockSpreadEvent__(Block, Block, BlockState) <br> _BlockSpreadEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Source__ <br> _Get: Gets the source block involved in this event._ | [`Block`](../../block/Block.md)
 |
__Inherited items from [`BlockFormEvent`](BlockFormEvent.md)__ |
new __BlockFormEvent__(Block, BlockState) <br> _BlockFormEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
 |
__Inherited items from [`BlockGrowEvent`](BlockGrowEvent.md)__ |
new __BlockGrowEvent__(Block, BlockState) <br> _BlockGrowEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
 readonly property __NewState__ <br> _Get: Gets the state of the block where it will form or spread to._ | [`BlockState`](../../block/BlockState.md)
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

### Public Constructors for [`BlockSpreadEvent`](BlockSpreadEvent.md)

##### <a id='blockspreadevent'></a>new __BlockSpreadEvent__(Block, Block, BlockState) 

_BlockSpreadEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Block | `final` | Block argument
Block | `final` | Block argument
BlockState | `final` | BlockState argument

---

### Public Properties for [`BlockSpreadEvent`](BlockSpreadEvent.md)

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



##### <a id='source'></a>public  readonly property __Source__

_Get: Gets the source block involved in this event._

Get | Description
--- | --- 
[`Block`](../../block/Block.md) | the Block for the source block involved in this event.



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
[`HandlerList`](../HandlerList.md) |



##### <a id='handlers'></a>public  readonly property __Handlers__

_Handlers property_

Get | 
--- | 
[`HandlerList`](../HandlerList.md) |



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
[`HandlerList`](../HandlerList.md) |



##### <a id='handlers'></a>public  readonly property __Handlers__

_Handlers property_

Get | 
--- | 
[`HandlerList`](../HandlerList.md) |



##### <a id='newstate'></a>public  readonly property __NewState__

_Get: Gets the state of the block where it will form or spread to._

Get | Description
--- | --- 
[`BlockState`](../../block/BlockState.md) | The block state for this events block



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


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

