## BlockPistonRetractEvent __class__

>io.wolfscript.event.block.BlockPistonRetractEvent
>Extends [`BlockPistonEvent`](BlockPistonEvent.md)

---

### Class Overview

Called when a piston retracts

Method | Type   
--- | :--- 
new __BlockPistonRetractEvent__(Block, List, BlockFace) <br> _BlockPistonRetractEvent constructor_ | _constructor_
 readonly property __Blocks__ <br> _Get: Get an immutable list of the blocks which will be moved by the_ | `List<Block>`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
 |
__Inherited items from [`BlockPistonEvent`](BlockPistonEvent.md)__ |
new __BlockPistonEvent__(Block, BlockFace) <br> _BlockPistonEvent constructor_ | _constructor_
 readonly property __Direction__ <br> _Get: Return the direction in which the piston will operate._ | [`BlockFace`](../../block/BlockFace.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 function __isSticky__() <br> _Returns true if the Piston in the event is sticky._ | `boolean`
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

_Get: Get an immutable list of the blocks which will be moved by the extending._

Get | Description
--- | --- 
`List<Block>` | Immutable list of the moved blocks.



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



##### <a id='retractlocation'></a>public  readonly property __RetractLocation__
_Deprecated_

_Get: Gets the location where the possible moving block might be if the retracting piston is sticky._

Get | Description
--- | --- 
`Location` | The possible location of the possibly moving block.



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

_Get: Return the direction in which the piston will operate._

Get | Description
--- | --- 
[`BlockFace`](../../block/BlockFace.md) | direction of the piston



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


##### <a id='issticky'></a>public  function __isSticky__()

_Returns true if the Piston in the event is sticky._

Returns | Description
--- | --- 
`boolean` | stickiness of the piston


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
	

