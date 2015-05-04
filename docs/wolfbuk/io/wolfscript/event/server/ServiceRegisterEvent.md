## ServiceRegisterEvent __class__

>io.wolfscript.event.server.ServiceRegisterEvent
>Extends [`ServiceEvent`](ServiceEvent.md)
``` javascript
this.on('server.ServiceRegisterEvent', function (e) { });
```


---

### Class Overview

This event is called when a service is registered. <p> Warning: The order in which register and unregister events are called should not be relied upon.

Method | Type   
--- | :--- 
new __ServiceRegisterEvent__() <br> _ServiceRegisterEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
 |
__Inherited items from [`ServiceEvent`](ServiceEvent.md)__ |
new __ServiceEvent__(RegisteredServiceProvider) <br> _ServiceEvent constructor_ | _constructor_
 readonly property __Provider__ <br> _Provider property_ | `RegisteredServiceProvider<?>`
 |
__Inherited items from [`ServerEvent`](ServerEvent.md)__ |
 |
__Inherited items from [`Event`](../Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`









---

### Public Constructors for [`ServiceRegisterEvent`](ServiceRegisterEvent.md)

##### <a id='serviceregisterevent'></a>new __ServiceRegisterEvent__() 

_ServiceRegisterEvent constructor_


---

### Public Properties for [`ServiceRegisterEvent`](ServiceRegisterEvent.md)

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
### Public Constructors for [`ServiceEvent`](ServiceEvent.md)

##### <a id='serviceevent'></a>new __ServiceEvent__(RegisteredServiceProvider) 

_ServiceEvent constructor_

Argument | Type | Description  
--- | --- | --- 
RegisteredServiceProvider | `final` | RegisteredServiceProvider argument

---

### Public Properties for [`ServiceEvent`](ServiceEvent.md)

##### <a id='provider'></a>public  readonly property __Provider__

_Provider property_

Get | 
--- | 
`RegisteredServiceProvider<?>` |



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


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

