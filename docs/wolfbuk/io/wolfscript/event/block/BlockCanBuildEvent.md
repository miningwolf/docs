## BlockCanBuildEvent __class__

>io.wolfscript.event.block.BlockCanBuildEvent
>Extends [`BlockEvent`](BlockEvent.md)

---

### Class Overview

Called when we try to place a block, to see if we can build it here or not. <p> Note: <ul> <li>The Block returned by getBlock() is the block we are trying to place on, not the block we are trying to place. <li>If you want to figure out what is being placed, use `#getMaterial()` or `#getMaterialId()` instead. </ul>

Method | Type   
--- | :--- 
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Material__ <br> _Get: Gets the Material that we are trying to place._ | [`Material`](../../Material.md)
 writeonly property __Buildable__ <br> _Set: Sets whether the block can be built here or not._ | `void`
 function __isBuildable__() <br> _Gets whether or not the block can be built here._ | `boolean`
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
final function __isAsynchronous__() <br> _Any custom event that should not by synchronized with other events must_ | `boolean`







---

### Public Constructors for [`BlockCanBuildEvent`](BlockCanBuildEvent.md)

##### <a id='blockcanbuildevent'></a>new __BlockCanBuildEvent__(Block, int, boolean) 
_Deprecated: Magic value /
    @Deprecated
    protected int material;

    /** Magic value_

_BlockCanBuildEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Block | `final` | Block argument
int | `final` | int argument
boolean | `final` | boolean argument

---

### Public Properties for [`BlockCanBuildEvent`](BlockCanBuildEvent.md)

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



##### <a id='material'></a>public  readonly property __Material__

_Get: Gets the Material that we are trying to place._

Get | Description
--- | --- 
[`Material`](../../Material.md) | The Material that we are trying to place



##### <a id='materialid'></a>public  readonly property __MaterialId__
_Deprecated: Magic value_

_Get: Gets the Material ID for the Material that we are trying to place._

Get | Description
--- | --- 
`int` | The Material ID for the Material that we are trying to place



##### <a id='buildable'></a>public  writeonly property __Buildable__

_Set: Sets whether the block can be built here or not._

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
cancel | `boolean` | true if you want to allow the block to be built here despite Minecraft's default behaviour


---

### Public Methods for [`BlockCanBuildEvent`](BlockCanBuildEvent.md)

##### <a id='isbuildable'></a>public  function __isBuildable__()

_Gets whether or not the block can be built here. <p> By default, returns Minecraft's answer on whether the block can be built here or not._

Returns | Description
--- | --- 
`boolean` | boolean whether or not the block can be built


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

_Any custom event that should not by synchronized with other events must use the specific constructor. These are the caveats of using an asynchronous event: <ul> <li>The event is never fired from inside code triggered by a synchronous event. Attempting to do so results in an `IllegalStateException`. <li>However, asynchronous event handlers may fire synchronous or asynchronous events <li>The event may be fired multiple times simultaneously and in any order. <li>Any newly registered or unregistered handler is ignored after an event starts execution. <li>The handlers for this event may block for any length of time. <li>Some implementations may selectively declare a specific event use as asynchronous. This behavior should be clearly defined. <li>Asynchronous calls are not calculated in the plugin timing system. </ul>_

Returns | Description
--- | --- 
`boolean` | false by default, true if the event fires asynchronously


---


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

