## BlockExplodeEvent __class__

>io.wolfscript.event.block.BlockExplodeEvent
>Extends [`BlockEvent`](BlockEvent.md)
>Implements [`Cancellable`](../Cancellable.md)

---

### Class Overview

Called when a block explodes

Method | Type   
--- | :--- 
new __BlockExplodeEvent__(Block, List, float) <br> _BlockExplodeEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
  property __Yield__ <br> _Get: Returns the percentage of blocks to drop from this explosion<br>Set: Sets the percentage of blocks to drop from this explosion_ | `float`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __blockList__() <br> _Returns the list of blocks that would have been removed or were removed_ | `List<Block>`
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

### Public Constructors for [`BlockExplodeEvent`](BlockExplodeEvent.md)

##### <a id='blockexplodeevent'></a>new __BlockExplodeEvent__(Block, List, float) 

_BlockExplodeEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Block | `final` | Block argument
List | `final` | List argument
float | `final` | float argument

---

### Public Properties for [`BlockExplodeEvent`](BlockExplodeEvent.md)

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



##### <a id='yield'></a>public   property __Yield__

_Get: Returns the percentage of blocks to drop from this explosion<br>Set: Sets the percentage of blocks to drop from this explosion_

Get | Description
--- | --- 
`float` | The yield.

Set | Type | Description  
--- | --- | --- 
yield | `float` | The new yield percentage


##### <a id='cancelled'></a>public  writeonly property __Cancelled__

_Cancelled property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
cancel | `boolean` | cancel argument


---

### Public Methods for [`BlockExplodeEvent`](BlockExplodeEvent.md)

##### <a id='blocklist'></a>public  function __blockList__()

_Returns the list of blocks that would have been removed or were removed from the explosion event._

Returns | Description
--- | --- 
`List<Block>` | All blown-up blocks


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
	

