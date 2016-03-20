## CauldronLevelChangeEvent __class__

>io.wolfscript.event.block.CauldronLevelChangeEvent
>Extends [`BlockEvent`](BlockEvent.md)
>Implements [`Cancellable`](../Cancellable.md)
``` javascript
this.on('block.CauldronLevelChangeEvent', function (e) { });
```


---

### Class Overview

class CauldronLevelChangeEvent

Method | Type   
--- | :--- 
new __CauldronLevelChangeEvent__(block, entity, reason, oldLevel, newLevel) <br> _CauldronLevelChangeEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Get: Get entity which did this. May be null._ | `Entity`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
  property __NewLevel__ <br> _NewLevel property_ | `int`
 readonly property __OldLevel__ <br> _OldLevel property_ | `int`
 readonly property __Reason__ <br> _Reason property_ | `ChangeReason`
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

### Public Constructors for [`CauldronLevelChangeEvent`](CauldronLevelChangeEvent.md)

##### <a id='cauldronlevelchangeevent'></a>new __CauldronLevelChangeEvent__(block, entity, reason, oldLevel, newLevel) 

_CauldronLevelChangeEvent constructor_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../block/Block.md) | block argument
entity | `Entity` | entity argument
reason | `ChangeReason` | reason argument
oldLevel | `int` | oldLevel argument
newLevel | `int` | newLevel argument

---

### Public Properties for [`CauldronLevelChangeEvent`](CauldronLevelChangeEvent.md)

##### <a id='entity'></a>public  readonly property __Entity__

_Get: Get entity which did this. May be null._

Get | Description
--- | --- 
`Entity` | acting entity



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



##### <a id='newlevel'></a>public   property __NewLevel__

_NewLevel property_

Get | 
--- | 
`int` |

Set | Type | Description  
--- | --- | --- 
newLevel | `int` | newLevel argument


##### <a id='oldlevel'></a>public  readonly property __OldLevel__

_OldLevel property_

Get | 
--- | 
`int` |



##### <a id='reason'></a>public  readonly property __Reason__

_Reason property_

Get | 
--- | 
`ChangeReason` |



##### <a id='cancelled'></a>public  writeonly property __Cancelled__

_Cancelled property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
cancelled | `boolean` | cancelled argument


---

### Public Methods for [`CauldronLevelChangeEvent`](CauldronLevelChangeEvent.md)

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


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

