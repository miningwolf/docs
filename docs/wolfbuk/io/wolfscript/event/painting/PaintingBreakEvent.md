## PaintingBreakEvent __class__

>io.wolfscript.event.painting.PaintingBreakEvent
>Extends [`PaintingEvent`](PaintingEvent.md)
>Implements [`Cancellable`](../Cancellable.md)

---

### Class Overview

Triggered when a painting is removed

Method | Type   
--- | :--- 
new __PaintingBreakEvent__(Painting, RemoveCause) <br> _PaintingBreakEvent constructor_ | _constructor_
 readonly property __Cause__ <br> _Get: Gets the cause for the painting's removal_ | `RemoveCause`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`PaintingEvent`](PaintingEvent.md)__ |
 readonly property __Painting__ <br> _Get: Gets the painting involved in this event._ | [`Painting`](../../entity/Painting.md)
 |
__Inherited items from [`Event`](../Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







---

### Public Constructors for [`PaintingBreakEvent`](PaintingBreakEvent.md)

##### <a id='paintingbreakevent'></a>new __PaintingBreakEvent__(Painting, RemoveCause) 

_PaintingBreakEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Painting | `final` | Painting argument
RemoveCause | `final` | RemoveCause argument

---

### Public Properties for [`PaintingBreakEvent`](PaintingBreakEvent.md)

##### <a id='cause'></a>public  readonly property __Cause__

_Get: Gets the cause for the painting's removal_

Get | Description
--- | --- 
`RemoveCause` | the RemoveCause for the painting's removal



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



##### <a id='cancelled'></a>public  writeonly property __Cancelled__

_Cancelled property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
cancel | `boolean` | cancel argument


---

### Public Methods for [`PaintingBreakEvent`](PaintingBreakEvent.md)

##### <a id='iscancelled'></a>public  function __isCancelled__()

_isCancelled method_

Returns | 
--- | 
`boolean` |


---

### Public Properties for [`PaintingEvent`](PaintingEvent.md)

##### <a id='painting'></a>public  readonly property __Painting__

_Get: Gets the painting involved in this event._

Get | Description
--- | --- 
[`Painting`](../../entity/Painting.md) | the painting



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
	

