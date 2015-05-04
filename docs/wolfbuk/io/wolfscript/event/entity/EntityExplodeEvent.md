## EntityExplodeEvent __class__

>io.wolfscript.event.entity.EntityExplodeEvent
>Extends [`EntityEvent`](EntityEvent.md)
>Implements [`Cancellable`](../Cancellable.md)
``` javascript
this.on('entity.EntityExplodeEvent', function (e) { });
```


---

### Class Overview

Called when an entity explodes

Method | Type   
--- | :--- 
new __EntityExplodeEvent__(Entity, Location, List, float) <br> _EntityExplodeEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Location__ <br> _Get: Returns the location where the explosion happened._ | `Location`
  property __Yield__ <br> _Get: Returns the percentage of blocks to drop from this explosion<br>Set: Sets the percentage of blocks to drop from this explosion_ | `float`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __blockList__() <br> _Returns the list of blocks that would have been removed or were removed_ | `List<Block>`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`EntityEvent`](EntityEvent.md)__ |
new __EntityEvent__(Entity) <br> _EntityEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Get: Returns the Entity involved in this event_ | `Entity`
 readonly property __EntityType__ <br> _Get: Gets the EntityType of the Entity involved in this event._ | [`EntityType`](../../entity/EntityType.md)
 |
__Inherited items from [`Event`](../Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







---

### Public Constructors for [`EntityExplodeEvent`](EntityExplodeEvent.md)

##### <a id='entityexplodeevent'></a>new __EntityExplodeEvent__(Entity, Location, List, float) 

_EntityExplodeEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Entity | `final` | Entity argument
Location | `final` | Location argument
List | `final` | List argument
float | `final` | float argument

---

### Public Properties for [`EntityExplodeEvent`](EntityExplodeEvent.md)

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



##### <a id='location'></a>public  readonly property __Location__

_Get: Returns the location where the explosion happened. <p> It is not possible to get this value from the Entity as the Entity no longer exists in the world._

Get | Description
--- | --- 
`Location` | The location of the explosion



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

### Public Methods for [`EntityExplodeEvent`](EntityExplodeEvent.md)

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
### Public Constructors for [`EntityEvent`](EntityEvent.md)

##### <a id='entityevent'></a>new __EntityEvent__(Entity) 

_EntityEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Entity | `final` | Entity argument

---

### Public Properties for [`EntityEvent`](EntityEvent.md)

##### <a id='entity'></a>public  readonly property __Entity__

_Get: Returns the Entity involved in this event_

Get | Description
--- | --- 
`Entity` | Entity who is involved in this event



##### <a id='entitytype'></a>public  readonly property __EntityType__

_Get: Gets the EntityType of the Entity involved in this event._

Get | Description
--- | --- 
[`EntityType`](../../entity/EntityType.md) | EntityType of the Entity involved in this event



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
	

