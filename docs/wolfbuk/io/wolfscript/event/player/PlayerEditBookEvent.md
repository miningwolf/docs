## PlayerEditBookEvent __class__

>io.wolfscript.event.player.PlayerEditBookEvent
>Extends [`PlayerEvent`](PlayerEvent.md)
>Implements [`Cancellable`](../Cancellable.md)

---

### Class Overview

Called when a player edits or signs a book and quill item. If the event is cancelled, no changes are made to the BookMeta

Method | Type   
--- | :--- 
new __PlayerEditBookEvent__(who, slot, previousBookMeta, newBookMeta, isSigning) <br> _PlayerEditBookEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
 readonly property __NewBookMeta__ <br> _Get: Gets the book meta that the player is attempting to add to the book._ | [`BookMeta`](../../inventory/meta/BookMeta.md)
 readonly property __PreviousBookMeta__ <br> _Get: Gets the book meta currently on the book._ | [`BookMeta`](../../inventory/meta/BookMeta.md)
 readonly property __Slot__ <br> _Get: Gets the inventory slot number for the book item that triggered this_ | `int`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 writeonly property __Signing__ <br> _Set: Sets whether or not the book is being signed. If a book is signed the_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 function __isSigning__() <br> _Gets whether or not the book is being signed. If a book is signed the_ | `boolean`
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

### Public Constructors for [`PlayerEditBookEvent`](PlayerEditBookEvent.md)

##### <a id='playereditbookevent'></a>new __PlayerEditBookEvent__(who, slot, previousBookMeta, newBookMeta, isSigning) 

_PlayerEditBookEvent constructor_

Argument | Type | Description  
--- | --- | --- 
who | `Player` | who argument
slot | `int` | slot argument
previousBookMeta | [`BookMeta`](../../inventory/meta/BookMeta.md) | previousBookMeta argument
newBookMeta | [`BookMeta`](../../inventory/meta/BookMeta.md) | newBookMeta argument
isSigning | `boolean` | isSigning argument

---

### Public Properties for [`PlayerEditBookEvent`](PlayerEditBookEvent.md)

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



##### <a id='newbookmeta'></a>public  readonly property __NewBookMeta__

_Get: Gets the book meta that the player is attempting to add to the book. <p> Note: this is a copy of the proposed new book meta. Use `#setNewBookMeta(BookMeta)` to change what will actually be added to the book._

Get | Description
--- | --- 
[`BookMeta`](../../inventory/meta/BookMeta.md) | the book meta that the player is attempting to add



##### <a id='previousbookmeta'></a>public  readonly property __PreviousBookMeta__

_Get: Gets the book meta currently on the book. <p> Note: this is a copy of the book meta. You cannot use this object to change the existing book meta._

Get | Description
--- | --- 
[`BookMeta`](../../inventory/meta/BookMeta.md) | the book meta currently on the book



##### <a id='slot'></a>public  readonly property __Slot__

_Get: Gets the inventory slot number for the book item that triggered this event. <p> This is a slot number on the player's hotbar in the range 0-8._

Get | Description
--- | --- 
`int` | the inventory slot number that the book item occupies



##### <a id='cancelled'></a>public  writeonly property __Cancelled__

_Cancelled property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
cancel | `boolean` | cancel argument


##### <a id='signing'></a>public  writeonly property __Signing__

_Set: Sets whether or not the book is being signed. If a book is signed the Material changes from BOOK_AND_QUILL to WRITTEN_BOOK._

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
signing | `boolean` | whether or not the book is being signed.


---

### Public Methods for [`PlayerEditBookEvent`](PlayerEditBookEvent.md)

##### <a id='iscancelled'></a>public  function __isCancelled__()

_isCancelled method_

Returns | 
--- | 
`boolean` |


##### <a id='issigning'></a>public  function __isSigning__()

_Gets whether or not the book is being signed. If a book is signed the Material changes from BOOK_AND_QUILL to WRITTEN_BOOK._

Returns | Description
--- | --- 
`boolean` | true if the book is being signed


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


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

