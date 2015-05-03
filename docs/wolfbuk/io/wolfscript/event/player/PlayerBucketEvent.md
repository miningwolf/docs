## PlayerBucketEvent __class__

>io.wolfscript.event.player.PlayerBucketEvent
>Extends [`PlayerEvent`](PlayerEvent.md)
>Implements [`Cancellable`](..\Cancellable.md)

---

### Class Overview

Called when a player interacts with a Bucket

Method | Type   
--- | :--- 
new __PlayerBucketEvent__(Player, Block, BlockFace, Material, ItemStack) <br> _PlayerBucketEvent constructor_ | _constructor_
 readonly property __BlockFace__ <br> _Get: Returns the bucket used in this event_ | [`BlockFace`](..\..\block\BlockFace.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`PlayerEvent`](PlayerEvent.md)__ |
new __PlayerEvent__(Player) <br> _PlayerEvent constructor_ | _constructor_
final readonly property __Player__ <br> _Get: Returns the player involved in this event_ | `Player`
 |
__Inherited items from [`Event`](..\Event.md)__ |
final function __isAsynchronous__() <br> _The default constructor is defined for cleaner code. This constructor_ | `boolean`







---

### Public Constructors for [`PlayerBucketEvent`](PlayerBucketEvent.md)

##### <a id='playerbucketevent'></a>new __PlayerBucketEvent__(Player, Block, BlockFace, Material, ItemStack) 

_PlayerBucketEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Player | `final` | Player argument
Block | `final` | Block argument
BlockFace | `final` | BlockFace argument
Material | `final` | Material argument
ItemStack | `final` | ItemStack argument

---

### Public Properties for [`PlayerBucketEvent`](PlayerBucketEvent.md)

##### <a id='blockface'></a>public  readonly property __BlockFace__

_Get: Returns the bucket used in this event_

Get | Description
--- | --- 
[`BlockFace`](..\..\block\BlockFace.md) | the used bucket /
    public Material getBucket() {
        return bucket;
    }

    /** Get the resulting item in hand after the bucket event



##### <a id='cancelled'></a>public  writeonly property __Cancelled__

_Cancelled property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
cancel | `boolean` | cancel argument


---

### Public Methods for [`PlayerBucketEvent`](PlayerBucketEvent.md)

##### <a id='iscancelled'></a>public  function __isCancelled__()

_isCancelled method_

Returns | 
--- | 
`boolean` |


---
### Public Constructors for [`PlayerEvent`](PlayerEvent.md)

##### <a id='playerevent'></a>new __PlayerEvent__(Player) 

_PlayerEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Player | `final` | Player argument

---

### Public Properties for [`PlayerEvent`](PlayerEvent.md)

##### <a id='player'></a>public final readonly property __Player__

_Get: Returns the player involved in this event_

Get | Description
--- | --- 
`Player` | Player who is involved in this event



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


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

