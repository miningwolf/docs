## BlockDispenseEvent __class__

>io.wolfscript.event.block.BlockDispenseEvent
>Extends [`BlockEvent`](BlockEvent.md)
>Implements [`Cancellable`](../Cancellable.md)

---

### Class Overview

Called when an item is dispensed from a block. <p> If a Block Dispense event is cancelled, the block will not dispense the item.

Method | Type   
--- | :--- 
new __BlockDispenseEvent__(Block, ItemStack, Vector) <br> _BlockDispenseEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
  property __Item__ <br> _Get: Gets the item that is being dispensed. Modifying the returned item will<br>Set: Sets the item being dispensed._ | `ItemStack`
  property __Velocity__ <br> _Get: Gets the velocity.<br>Set: Sets the velocity of the item being dispensed._ | `Vector`
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

### Public Constructors for [`BlockDispenseEvent`](BlockDispenseEvent.md)

##### <a id='blockdispenseevent'></a>new __BlockDispenseEvent__(Block, ItemStack, Vector) 

_BlockDispenseEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Block | `final` | Block argument
ItemStack | `final` | ItemStack argument
Vector | `final` | Vector argument

---

### Public Properties for [`BlockDispenseEvent`](BlockDispenseEvent.md)

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



##### <a id='item'></a>public   property __Item__

_Get: Gets the item that is being dispensed. Modifying the returned item will have no effect, you must use `#setItem(ItemStack)` instead.<br>Set: Sets the item being dispensed._

Get | Description
--- | --- 
`ItemStack` | An ItemStack for the item being dispensed

Set | Type | Description  
--- | --- | --- 
item | `ItemStack` | the item being dispensed


##### <a id='velocity'></a>public   property __Velocity__

_Get: Gets the velocity. <p> Note: Modifying the returned Vector will not change the velocity, you must use `#setVelocity(Vector)` instead.<br>Set: Sets the velocity of the item being dispensed._

Get | Description
--- | --- 
`Vector` | A Vector for the dispensed item's velocity

Set | Type | Description  
--- | --- | --- 
vel | `Vector` | the velocity of the item being dispensed


##### <a id='cancelled'></a>public  writeonly property __Cancelled__

_Cancelled property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
cancel | `boolean` | cancel argument


---

### Public Methods for [`BlockDispenseEvent`](BlockDispenseEvent.md)

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
	

