## HangingBreakEvent __class__

>io.wolfscript.event.hanging.HangingBreakEvent
>Extends [`HangingEvent`](HangingEvent.md)
>Implements [`Cancellable`](../Cancellable.md)

this.on('hanging.HangingBreakEvent', function (e) { });

---

### Class Overview

Triggered when a hanging entity is removed

Method | Type   
--- | :--- 
new __HangingBreakEvent__(Hanging, HangingBreakEvent) <br> _HangingBreakEvent constructor_ | _constructor_
 readonly property __Cause__ <br> _Get: Gets the cause for the hanging entity's removal_ | `RemoveCause`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`HangingEvent`](HangingEvent.md)__ |
 readonly property __Entity__ <br> _Get: Gets the hanging entity involved in this event._ | `Hanging`
 |
__Inherited items from [`Event`](../Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







---

### Public Constructors for [`HangingBreakEvent`](HangingBreakEvent.md)

##### <a id='hangingbreakevent'></a>new __HangingBreakEvent__(Hanging, HangingBreakEvent) 

_HangingBreakEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Hanging | `final` | Hanging argument
HangingBreakEvent | `final` | HangingBreakEvent argument

---

### Public Properties for [`HangingBreakEvent`](HangingBreakEvent.md)

##### <a id='cause'></a>public  readonly property __Cause__

_Get: Gets the cause for the hanging entity's removal_

Get | Description
--- | --- 
`RemoveCause` | the RemoveCause for the hanging entity's removal



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

### Public Methods for [`HangingBreakEvent`](HangingBreakEvent.md)

##### <a id='iscancelled'></a>public  function __isCancelled__()

_isCancelled method_

Returns | 
--- | 
`boolean` |


---

### Public Properties for [`HangingEvent`](HangingEvent.md)

##### <a id='entity'></a>public  readonly property __Entity__

_Get: Gets the hanging entity involved in this event._

Get | Description
--- | --- 
`Hanging` | the hanging entity



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
	

