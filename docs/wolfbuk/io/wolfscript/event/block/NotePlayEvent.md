## NotePlayEvent __class__

>io.wolfscript.event.block.NotePlayEvent
>Extends [`BlockEvent`](BlockEvent.md)
>Implements [`Cancellable`](../Cancellable.md)
``` javascript
this.on('block.NotePlayEvent', function (e) { });
```


---

### Class Overview

Called when a note block is being played through player interaction or a redstone current.

Method | Type   
--- | :--- 
new __NotePlayEvent__(block, instrument, note) <br> _NotePlayEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
  property __Instrument__ <br> _Get: Gets the [`Instrument`](../../Instrument.md) to be used.<br>Set: Overrides the [`Instrument`](../../Instrument.md) to be used._ | [`Instrument`](../../Instrument.md)
  property __Note__ <br> _Get: Gets the [`Note`](../../Note.md) to be played.<br>Set: Overrides the [`Note`](../../Note.md) to be played._ | [`Note`](../../Note.md)
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

### Public Constructors for [`NotePlayEvent`](NotePlayEvent.md)

##### <a id='noteplayevent'></a>new __NotePlayEvent__(block, instrument, note) 

_NotePlayEvent constructor_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../block/Block.md) | block argument
instrument | [`Instrument`](../../Instrument.md) | instrument argument
note | [`Note`](../../Note.md) | note argument

---

### Public Properties for [`NotePlayEvent`](NotePlayEvent.md)

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



##### <a id='instrument'></a>public   property __Instrument__

_Get: Gets the [`Instrument`](../../Instrument.md) to be used.<br>Set: Overrides the [`Instrument`](../../Instrument.md) to be used._

Get | Description
--- | --- 
[`Instrument`](../../Instrument.md) | the Instrument;

Set | Type | Description  
--- | --- | --- 
instrument | [`Instrument`](../../Instrument.md) | the Instrument. Has no effect if null.


##### <a id='note'></a>public   property __Note__

_Get: Gets the [`Note`](../../Note.md) to be played.<br>Set: Overrides the [`Note`](../../Note.md) to be played._

Get | Description
--- | --- 
[`Note`](../../Note.md) | the Note.

Set | Type | Description  
--- | --- | --- 
note | [`Note`](../../Note.md) | the Note. Has no effect if null.


##### <a id='cancelled'></a>public  writeonly property __Cancelled__

_Cancelled property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
cancel | `boolean` | cancel argument


---

### Public Methods for [`NotePlayEvent`](NotePlayEvent.md)

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
	

