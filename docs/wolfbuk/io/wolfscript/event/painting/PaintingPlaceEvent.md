## PaintingPlaceEvent __class__

>io.wolfscript.event.painting.PaintingPlaceEvent
>Extends [`PaintingEvent`](PaintingEvent.md)
>Implements [`Cancellable`](../Cancellable.md)

---

### Class Overview

Triggered when a painting is created in the world

Method | Type   
--- | :--- 
new __PaintingPlaceEvent__(Painting, Player, Block, BlockFace) <br> _PaintingPlaceEvent constructor_ | _constructor_
 readonly property __Block__ <br> _Get: Returns the block that the painting was placed on_ | [`Block`](../../block/Block.md)
 readonly property __BlockFace__ <br> _Get: Returns the face of the block that the painting was placed on_ | [`BlockFace`](../../block/BlockFace.md)
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Player__ <br> _Get: Returns the player placing the painting_ | `Player`
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
final function __isAsynchronous__() <br> _Any custom event that should not by synchronized with other events must_ | `boolean`







---

### Public Constructors for [`PaintingPlaceEvent`](PaintingPlaceEvent.md)

##### <a id='paintingplaceevent'></a>new __PaintingPlaceEvent__(Painting, Player, Block, BlockFace) 

_PaintingPlaceEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Painting | `final` | Painting argument
Player | `final` | Player argument
Block | `final` | Block argument
BlockFace | `final` | BlockFace argument

---

### Public Properties for [`PaintingPlaceEvent`](PaintingPlaceEvent.md)

##### <a id='block'></a>public  readonly property __Block__

_Get: Returns the block that the painting was placed on_

Get | Description
--- | --- 
[`Block`](../../block/Block.md) | Block returns the block painting placed on



##### <a id='blockface'></a>public  readonly property __BlockFace__

_Get: Returns the face of the block that the painting was placed on_

Get | Description
--- | --- 
[`BlockFace`](../../block/BlockFace.md) | BlockFace returns the face of the block the painting was placed on



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

_Get: Returns the player placing the painting_

Get | Description
--- | --- 
`Player` | Entity returns the player placing the painting



##### <a id='cancelled'></a>public  writeonly property __Cancelled__

_Cancelled property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
cancel | `boolean` | cancel argument


---

### Public Methods for [`PaintingPlaceEvent`](PaintingPlaceEvent.md)

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

_Any custom event that should not by synchronized with other events must use the specific constructor. These are the caveats of using an asynchronous event: <ul> <li>The event is never fired from inside code triggered by a synchronous event. Attempting to do so results in an `IllegalStateException`. <li>However, asynchronous event handlers may fire synchronous or asynchronous events <li>The event may be fired multiple times simultaneously and in any order. <li>Any newly registered or unregistered handler is ignored after an event starts execution. <li>The handlers for this event may block for any length of time. <li>Some implementations may selectively declare a specific event use as asynchronous. This behavior should be clearly defined. <li>Asynchronous calls are not calculated in the plugin timing system. </ul>_

Returns | Description
--- | --- 
`boolean` | false by default, true if the event fires asynchronously


---


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

