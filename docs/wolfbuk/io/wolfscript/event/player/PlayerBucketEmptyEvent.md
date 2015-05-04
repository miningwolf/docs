## PlayerBucketEmptyEvent __class__

>io.wolfscript.event.player.PlayerBucketEmptyEvent
>Extends [`PlayerBucketEvent`](PlayerBucketEvent.md)

---

### Class Overview

Called when a player empties a bucket

Method | Type   
--- | :--- 
new __PlayerBucketEmptyEvent__(Player, Block, BlockFace, Material, ItemStack) <br> _PlayerBucketEmptyEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
 |
__Inherited items from [`PlayerBucketEvent`](PlayerBucketEvent.md)__ |
new __PlayerBucketEvent__(Player, Block, BlockFace, Material, ItemStack) <br> _PlayerBucketEvent constructor_ | _constructor_
 readonly property __BlockClicked__ <br> _Get: Return the block clicked_ | [`Block`](../../block/Block.md)
 readonly property __BlockFace__ <br> _Get: Get the face on the clicked block_ | [`BlockFace`](../../block/BlockFace.md)
 readonly property __Bucket__ <br> _Get: Returns the bucket used in this event_ | [`Material`](../../Material.md)
  property __ItemStack__ <br> _Get: Get the resulting item in hand after the bucket event<br>Set: Set the item in hand after the event_ | `ItemStack`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`PlayerEvent`](PlayerEvent.md)__ |
new __PlayerEvent__(Player) <br> _PlayerEvent constructor_ | _constructor_
final readonly property __Player__ <br> _Get: Returns the player involved in this event_ | `Player`
 |
__Inherited items from [`Event`](../Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`









---

### Public Constructors for [`PlayerBucketEmptyEvent`](PlayerBucketEmptyEvent.md)

##### <a id='playerbucketemptyevent'></a>new __PlayerBucketEmptyEvent__(Player, Block, BlockFace, Material, ItemStack) 

_PlayerBucketEmptyEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Player | `final` | Player argument
Block | `final` | Block argument
BlockFace | `final` | BlockFace argument
Material | `final` | Material argument
ItemStack | `final` | ItemStack argument

---

### Public Properties for [`PlayerBucketEmptyEvent`](PlayerBucketEmptyEvent.md)

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

##### <a id='blockclicked'></a>public  readonly property __BlockClicked__

_Get: Return the block clicked_

Get | Description
--- | --- 
[`Block`](../../block/Block.md) | the blicked block



##### <a id='blockface'></a>public  readonly property __BlockFace__

_Get: Get the face on the clicked block_

Get | Description
--- | --- 
[`BlockFace`](../../block/BlockFace.md) | the clicked face



##### <a id='bucket'></a>public  readonly property __Bucket__

_Get: Returns the bucket used in this event_

Get | Description
--- | --- 
[`Material`](../../Material.md) | the used bucket



##### <a id='itemstack'></a>public   property __ItemStack__

_Get: Get the resulting item in hand after the bucket event<br>Set: Set the item in hand after the event_

Get | Description
--- | --- 
`ItemStack` | Itemstack hold in hand after the event.

Set | Type | Description  
--- | --- | --- 
itemStack | `ItemStack` | the new held itemstack after the bucket event.


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


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

