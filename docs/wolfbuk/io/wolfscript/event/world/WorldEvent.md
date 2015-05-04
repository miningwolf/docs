## WorldEvent __class__

>io.wolfscript.event.world.WorldEvent
>Extends [`Event`](../Event.md)

this.on('world.WorldEvent', function (e) { });

---

### Class Overview

Represents events within a world

Method | Type   
--- | :--- 
new __WorldEvent__(World) <br> _WorldEvent constructor_ | _constructor_
 readonly property __World__ <br> _Get: Gets the world primarily involved with this event_ | `World`
 |
__Inherited items from [`Event`](../Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`





---

### Public Constructors for [`WorldEvent`](WorldEvent.md)

##### <a id='worldevent'></a>new __WorldEvent__(World) 

_WorldEvent constructor_

Argument | Type | Description  
--- | --- | --- 
World | `final` | World argument

---

### Public Properties for [`WorldEvent`](WorldEvent.md)

##### <a id='world'></a>public  readonly property __World__

_Get: Gets the world primarily involved with this event_

Get | Description
--- | --- 
`World` | World which caused this event



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


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

