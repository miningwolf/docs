## HangingPlaceEvent __class__

>io.wolfscript.event.hanging.HangingPlaceEvent
>Extends [`HangingEvent`](HangingEvent.md)
>Implements [`Cancellable`](../Cancellable.md)

this.on('hanging.HangingPlaceEvent', function (e) { });

---

### Class Overview

Triggered when a hanging entity is created in the world

Method | Type   
--- | :--- 
new __HangingPlaceEvent__(Hanging, Player, Block, BlockFace) <br> _HangingPlaceEvent constructor_ | _constructor_
 readonly property __Block__ <br> _Get: Returns the block that the hanging entity was placed on_ | [`Block`](../../block/Block.md)
 readonly property __BlockFace__ <br> _Get: Returns the face of the block that the hanging entity was placed on_ | [`BlockFace`](../../block/BlockFace.md)
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Player__ <br> _Get: Returns the player placing the hanging entity_ | `Player`
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

### Public Constructors for [`HangingPlaceEvent`](HangingPlaceEvent.md)

##### <a id='hangingplaceevent'></a>new __HangingPlaceEvent__(Hanging, Player, Block, BlockFace) 

_HangingPlaceEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Hanging | `final` | Hanging argument
Player | `final` | Player argument
Block | `final` | Block argument
BlockFace | `final` | BlockFace argument

---

### Public Properties for [`HangingPlaceEvent`](HangingPlaceEvent.md)

##### <a id='block'></a>public  readonly property __Block__

_Get: Returns the block that the hanging entity was placed on_

Get | Description
--- | --- 
[`Block`](../../block/Block.md) | the block that the hanging entity was placed on



##### <a id='blockface'></a>public  readonly property __BlockFace__

_Get: Returns the face of the block that the hanging entity was placed on_

Get | Description
--- | --- 
[`BlockFace`](../../block/BlockFace.md) | the face of the block that the hanging entity was placed on



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



##### <a id='player'></a>public  readonly property __Player__

_Get: Returns the player placing the hanging entity_

Get | Description
--- | --- 
`Player` | the player placing the hanging entity



##### <a id='cancelled'></a>public  writeonly property __Cancelled__

_Cancelled property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
cancel | `boolean` | cancel argument


---

### Public Methods for [`HangingPlaceEvent`](HangingPlaceEvent.md)

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
	

