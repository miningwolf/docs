## InventoryDragEvent __class__

>io.wolfscript.event.inventory.InventoryDragEvent
>Extends [`InventoryInteractEvent`](InventoryInteractEvent.md)

---

### Class Overview

class InventoryDragEvent

Method | Type   
--- | :--- 
new __InventoryDragEvent__(what, newCursor, oldCursor, right) <br> _InventoryDragEvent constructor_ | _constructor_
  property __Cursor__ <br> _Get: Gets the result cursor after the drag is done. The returned value is<br>Set: Sets the result cursor after the drag is done._ | `ItemStack`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
 readonly property __InventorySlots__ <br> _Get: Gets the slots to be changed in this drag._ | `Set<Integer>`
 readonly property __OldCursor__ <br> _Get: Gets an ItemStack representing the cursor prior to any modifications_ | `ItemStack`
 readonly property __RawSlots__ <br> _Get: Gets the raw slot ids to be changed in this drag._ | `Set<Integer>`
 readonly property __Type__ <br> _Get: Gets the DragType that describes the behavior of ItemStacks placed_ | [`DragType`](DragType.md)
 |
__Inherited items from [`InventoryInteractEvent`](InventoryInteractEvent.md)__ |
new __InventoryInteractEvent__(transaction) <br> _InventoryInteractEvent constructor_ | _constructor_
  property __Result__ <br> _Get: Gets the `Result` of this event. The Result describes the<br>Set: Sets the result of this event. This will change whether or not this_ | `Result`
 readonly property __WhoClicked__ <br> _Get: Gets the player who performed the click._ | `HumanEntity`
 writeonly property __Cancelled__ <br> _Set: Proxy method to `#setResult(Result)` for the Cancellable_ | `void`
 function __isCancelled__() <br> _Gets whether or not this event is cancelled. This is based off of the_ | `boolean`
 |
__Inherited items from [`InventoryEvent`](InventoryEvent.md)__ |
new __InventoryEvent__(transaction) <br> _InventoryEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Inventory__ <br> _Get: Gets the primary Inventory involved in this transaction_ | [`Inventory`](../../inventory/Inventory.md)
 readonly property __View__ <br> _Get: Gets the view object itself_ | [`InventoryView`](../../inventory/InventoryView.md)
 readonly property __Viewers__ <br> _Get: Gets the list of players viewing the primary (upper) inventory involved_ | `List<HumanEntity>`
 |
__Inherited items from [`Event`](../Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`









---

### Public Constructors for [`InventoryDragEvent`](InventoryDragEvent.md)

##### <a id='inventorydragevent'></a>new __InventoryDragEvent__(what, newCursor, oldCursor, right) 

_InventoryDragEvent constructor_

Argument | Type | Description  
--- | --- | --- 
what | [`InventoryView`](../../inventory/InventoryView.md) | what argument
newCursor | `ItemStack` | newCursor argument
oldCursor | `ItemStack` | oldCursor argument
right | `boolean` | right argument

---

### Public Properties for [`InventoryDragEvent`](InventoryDragEvent.md)

##### <a id='cursor'></a>public   property __Cursor__

_Get: Gets the result cursor after the drag is done. The returned value is mutable.<br>Set: Sets the result cursor after the drag is done. <p> Changing this item stack changes the cursor item. Note that changing the affected "dragged" slots does not change this ItemStack, nor does changing this ItemStack affect the "dragged" slots._

Get | Description
--- | --- 
`ItemStack` | the result cursor

Set | Type | Description  
--- | --- | --- 
newCursor | `ItemStack` | the new cursor ItemStack


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



##### <a id='inventoryslots'></a>public  readonly property __InventorySlots__

_Get: Gets the slots to be changed in this drag._

Get | Description
--- | --- 
`Set<Integer>` | list of converted slot ids, suitable for `Inventory#getItem(int)`.



##### <a id='oldcursor'></a>public  readonly property __OldCursor__

_Get: Gets an ItemStack representing the cursor prior to any modifications as a result of this drag._

Get | Description
--- | --- 
`ItemStack` | the original cursor



##### <a id='rawslots'></a>public  readonly property __RawSlots__

_Get: Gets the raw slot ids to be changed in this drag._

Get | Description
--- | --- 
`Set<Integer>` | list of raw slot ids, suitable for getView().getItem(int)



##### <a id='type'></a>public  readonly property __Type__

_Get: Gets the DragType that describes the behavior of ItemStacks placed after this InventoryDragEvent. <p> The ItemStacks and the raw slots that they're being applied to can be found using `#getNewItems()`._

Get | Description
--- | --- 
[`DragType`](DragType.md) | the DragType of this InventoryDragEvent



---
### Public Constructors for [`InventoryInteractEvent`](InventoryInteractEvent.md)

##### <a id='inventoryinteractevent'></a>new __InventoryInteractEvent__(transaction) 

_InventoryInteractEvent constructor_

Argument | Type | Description  
--- | --- | --- 
transaction | [`InventoryView`](../../inventory/InventoryView.md) | transaction argument

---

### Public Properties for [`InventoryInteractEvent`](InventoryInteractEvent.md)

##### <a id='result'></a>public   property __Result__

_Get: Gets the `Result` of this event. The Result describes the behavior that will be applied to the inventory in relation to this event.<br>Set: Sets the result of this event. This will change whether or not this event is considered cancelled._

Get | 
--- | 
`Result` |

Set | Type | Description  
--- | --- | --- 
newResult | `Result` | the new `Result` for this event


##### <a id='whoclicked'></a>public  readonly property __WhoClicked__

_Get: Gets the player who performed the click._

Get | Description
--- | --- 
`HumanEntity` | The clicking player.



##### <a id='cancelled'></a>public  writeonly property __Cancelled__

_Set: Proxy method to `#setResult(Result)` for the Cancellable interface. `#setResult(Result)` is preferred, as it allows you to specify the Result beyond Result.DENY and Result.ALLOW. <p> {@inheritDoc}_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
toCancel | `boolean` | result becomes DENY if true, ALLOW if false


---

### Public Methods for [`InventoryInteractEvent`](InventoryInteractEvent.md)

##### <a id='iscancelled'></a>public  function __isCancelled__()

_Gets whether or not this event is cancelled. This is based off of the Result value returned by `#getResult()`.  Result.ALLOW and Result.DEFAULT will result in a returned value of false, but Result.DENY will result in a returned value of true. <p> {@inheritDoc}_

Returns | Description
--- | --- 
`boolean` | whether the event is cancelled


---
### Public Constructors for [`InventoryEvent`](InventoryEvent.md)

##### <a id='inventoryevent'></a>new __InventoryEvent__(transaction) 

_InventoryEvent constructor_

Argument | Type | Description  
--- | --- | --- 
transaction | [`InventoryView`](../../inventory/InventoryView.md) | transaction argument

---

### Public Properties for [`InventoryEvent`](InventoryEvent.md)

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



##### <a id='inventory'></a>public  readonly property __Inventory__

_Get: Gets the primary Inventory involved in this transaction_

Get | Description
--- | --- 
[`Inventory`](../../inventory/Inventory.md) | The upper inventory.



##### <a id='view'></a>public  readonly property __View__

_Get: Gets the view object itself_

Get | Description
--- | --- 
[`InventoryView`](../../inventory/InventoryView.md) | InventoryView



##### <a id='viewers'></a>public  readonly property __Viewers__

_Get: Gets the list of players viewing the primary (upper) inventory involved in this event_

Get | Description
--- | --- 
`List<HumanEntity>` | A list of people viewing.



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
	

