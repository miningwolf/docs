## StructureGrowEvent __class__

>io.wolfscript.event.world.StructureGrowEvent
>Extends [`WorldEvent`](WorldEvent.md)
>Implements [`Cancellable`](../Cancellable.md)

---

### Class Overview

Event that is called when an organic structure attempts to grow (Sapling {@literal ->} Tree), (Mushroom {@literal ->} Huge Mushroom), naturally or using bonemeal.

Method | Type   
--- | :--- 
new __StructureGrowEvent__(Location, TreeType, boolean, Player, List) <br> _StructureGrowEvent constructor_ | _constructor_
 readonly property __Blocks__ <br> _Get: Gets an ArrayList of all blocks associated with the structure._ | `List<BlockState>`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Location__ <br> _Get: Gets the location of the structure._ | `Location`
 readonly property __Player__ <br> _Get: Gets the player that created the structure._ | `Player`
 readonly property __Species__ <br> _Get: Gets the species type (birch, normal, pine, red mushroom, brown_ | [`TreeType`](../../TreeType.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 function __isFromBonemeal__() <br> _Checks if structure was grown using bonemeal._ | `boolean`
 |
__Inherited items from [`WorldEvent`](WorldEvent.md)__ |
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

### Public Constructors for [`StructureGrowEvent`](StructureGrowEvent.md)

##### <a id='structuregrowevent'></a>new __StructureGrowEvent__(Location, TreeType, boolean, Player, List) 

_StructureGrowEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Location | `final` | Location argument
TreeType | `final` | TreeType argument
boolean | `final` | boolean argument
Player | `final` | Player argument
List | `final` | List argument

---

### Public Properties for [`StructureGrowEvent`](StructureGrowEvent.md)

##### <a id='blocks'></a>public  readonly property __Blocks__

_Get: Gets an ArrayList of all blocks associated with the structure._

Get | Description
--- | --- 
`List<BlockState>` | ArrayList of all blocks associated with the structure.



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

_Get: Gets the location of the structure._

Get | Description
--- | --- 
`Location` | Location of the structure



##### <a id='player'></a>public  readonly property __Player__

_Get: Gets the player that created the structure._

Get | Description
--- | --- 
`Player` | Player that created the structure, null if was not created manually



##### <a id='species'></a>public  readonly property __Species__

_Get: Gets the species type (birch, normal, pine, red mushroom, brown mushroom)_

Get | Description
--- | --- 
[`TreeType`](../../TreeType.md) | Structure species



##### <a id='cancelled'></a>public  writeonly property __Cancelled__

_Cancelled property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
cancel | `boolean` | cancel argument


---

### Public Methods for [`StructureGrowEvent`](StructureGrowEvent.md)

##### <a id='iscancelled'></a>public  function __isCancelled__()

_isCancelled method_

Returns | 
--- | 
`boolean` |


##### <a id='isfrombonemeal'></a>public  function __isFromBonemeal__()

_Checks if structure was grown using bonemeal._

Returns | Description
--- | --- 
`boolean` | True if the structure was grown using bonemeal.


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


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

