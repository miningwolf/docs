## ChunkUnloadEvent __class__

>io.wolfscript.event.world.ChunkUnloadEvent
>Extends [`ChunkEvent`](ChunkEvent.md)
>Implements [`Cancellable`](..\Cancellable.md)

---

### Class Overview

Called when a chunk is unloaded

Method | Type   
--- | :--- 
new __ChunkUnloadEvent__(Chunk) <br> _ChunkUnloadEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](..\HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](..\HandlerList.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`ChunkEvent`](ChunkEvent.md)__ |
 readonly property __Chunk__ <br> _Get: Gets the chunk being loaded/unloaded_ | [`Chunk`](..\..\Chunk.md)
 |
__Inherited items from [`WorldEvent`](WorldEvent.md)__ |
new __WorldEvent__(World) <br> _WorldEvent constructor_ | _constructor_
 readonly property __World__ <br> _Get: Gets the world primarily involved with this event_ | `World`
 |
__Inherited items from [`Event`](..\Event.md)__ |
final function __isAsynchronous__() <br> _The default constructor is defined for cleaner code. This constructor_ | `boolean`









---

### Public Constructors for [`ChunkUnloadEvent`](ChunkUnloadEvent.md)

##### <a id='chunkunloadevent'></a>new __ChunkUnloadEvent__(Chunk) 

_ChunkUnloadEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Chunk | `final` | Chunk argument

---

### Public Properties for [`ChunkUnloadEvent`](ChunkUnloadEvent.md)

##### <a id='handlerlist'></a>public static readonly property __HandlerList__

_HandlerList property_

Get | 
--- | 
[`HandlerList`](..\HandlerList.md) |



##### <a id='handlers'></a>public  readonly property __Handlers__

_Handlers property_

Get | 
--- | 
[`HandlerList`](..\HandlerList.md) |



##### <a id='cancelled'></a>public  writeonly property __Cancelled__

_Cancelled property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
cancel | `boolean` | cancel argument


---

### Public Methods for [`ChunkUnloadEvent`](ChunkUnloadEvent.md)

##### <a id='iscancelled'></a>public  function __isCancelled__()

_isCancelled method_

Returns | 
--- | 
`boolean` |


---

### Public Properties for [`ChunkEvent`](ChunkEvent.md)

##### <a id='chunk'></a>public  readonly property __Chunk__

_Get: Gets the chunk being loaded/unloaded_

Get | Description
--- | --- 
[`Chunk`](..\..\Chunk.md) | Chunk that triggered this event



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

### Public Methods for [`Event`](..\Event.md)

##### <a id='isasynchronous'></a>public final function __isAsynchronous__()

_The default constructor is defined for cleaner code. This constructor assumes the event is synchronous. /
    public Event() {
        this(false);
    }

    /** This constructor is used to explicitly declare an event as synchronous or asynchronous._

Returns | Description
--- | --- 
`boolean` | name of this event /
    public String getEventName() {
        if (name == null) {
            name = getClass().getSimpleName();
        }
        return name;
    }

    public abstract HandlerList getHandlers();

    /** Any custom event that should not by synchronized with other events must use the specific constructor. These are the caveats of using an asynchronous event: <ul> <li>The event is never fired from inside code triggered by a synchronous event. Attempting to do so results in an `IllegalStateException`. <li>However, asynchronous event handlers may fire synchronous or asynchronous events <li>The event may be fired multiple times simultaneously and in any order. <li>Any newly registered or unregistered handler is ignored after an event starts execution. <li>The handlers for this event may block for any length of time. <li>Some implementations may selectively declare a specific event use as asynchronous. This behavior should be clearly defined. <li>Asynchronous calls are not calculated in the plugin timing system. </ul>


---


---


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

