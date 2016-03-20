## PlayerSwapHandItemsEvent __class__

>io.wolfscript.event.player.PlayerSwapHandItemsEvent
>Extends [`PlayerEvent`](PlayerEvent.md)
>Implements [`Cancellable`](../Cancellable.md)
``` javascript
this.on('player.PlayerSwapHandItemsEvent', function (e) { });
```


---

### Class Overview

Called when a player swap items between main hand and off hand using the hotkey.

Method | Type   
--- | :--- 
new __PlayerSwapHandItemsEvent__(player, mainHandItem, offHandItem) <br> _PlayerSwapHandItemsEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
  property __MainHandItem__ <br> _Get: Gets the item switched to the main hand.<br>Set: Sets the item in the main hand._ | `ItemStack`
  property __OffHandItem__ <br> _Get: Gets the item switched to the off hand.<br>Set: Sets the item in the off hand._ | `ItemStack`
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

### Public Constructors for [`PlayerSwapHandItemsEvent`](PlayerSwapHandItemsEvent.md)

##### <a id='playerswaphanditemsevent'></a>new __PlayerSwapHandItemsEvent__(player, mainHandItem, offHandItem) 

_PlayerSwapHandItemsEvent constructor_

Argument | Type | Description  
--- | --- | --- 
player | `Player` | player argument
mainHandItem | `ItemStack` | mainHandItem argument
offHandItem | `ItemStack` | offHandItem argument

---

### Public Properties for [`PlayerSwapHandItemsEvent`](PlayerSwapHandItemsEvent.md)

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



##### <a id='mainhanditem'></a>public   property __MainHandItem__

_Get: Gets the item switched to the main hand.<br>Set: Sets the item in the main hand._

Get | Description
--- | --- 
`ItemStack` | item in the main hand

Set | Type | Description  
--- | --- | --- 
mainHandItem | `ItemStack` | new item in the main hand


##### <a id='offhanditem'></a>public   property __OffHandItem__

_Get: Gets the item switched to the off hand.<br>Set: Sets the item in the off hand._

Get | Description
--- | --- 
`ItemStack` | item in the off hand

Set | Type | Description  
--- | --- | --- 
offHandItem | `ItemStack` | new item in the off hand


##### <a id='cancelled'></a>public  writeonly property __Cancelled__

_Cancelled property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
cancel | `boolean` | cancel argument


---

### Public Methods for [`PlayerSwapHandItemsEvent`](PlayerSwapHandItemsEvent.md)

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


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

