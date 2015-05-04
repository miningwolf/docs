## InventoryClickEvent __class__

>io.wolfscript.event.inventory.InventoryClickEvent
>Extends [`InventoryInteractEvent`](InventoryInteractEvent.md)

---

### Class Overview

class InventoryClickEvent

Method | Type   
--- | :--- 
new __InventoryClickEvent__(view, type, slot, click, action) <br> _InventoryClickEvent constructor_ | _constructor_
new __InventoryClickEvent__(view, type, slot, click, action, key) <br> _InventoryClickEvent constructor_ | _constructor_
 writeonly property __CurrentItem__ <br> _Set: Sets the ItemStack currently in the clicked slot._ | `void`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __CurrentItem__ <br> _Get: Gets the ItemStack currently in the clicked slot._ | `ItemStack`
 readonly property __Click__ <br> _Get: Gets the ClickType for this event._ | [`ClickType`](ClickType.md)
 readonly property __Action__ <br> _Get: Gets the InventoryAction that triggered this event._ | [`InventoryAction`](InventoryAction.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
 readonly property __HotbarButton__ <br> _Get: If the ClickType is NUMBER_KEY, this method will return the index of_ | `int`
 readonly property __RawSlot__ <br> _Get: The raw slot number clicked, ready for passing to {@link InventoryView_ | `int`
 readonly property __Slot__ <br> _Get: The slot number that was clicked, ready for passing to_ | `int`
 readonly property __SlotType__ <br> _Get: Gets the type of slot that was clicked._ | `SlotType`
 function __isLeftClick__() <br> _Gets whether or not the ClickType for this event represents a left_ | `boolean`
 function __isRightClick__() <br> _Gets whether or not the ClickType for this event represents a right_ | `boolean`
 function __isShiftClick__() <br> _Gets whether the ClickType for this event indicates that the key was_ | `boolean`
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

### Public Constructors for [`InventoryClickEvent`](InventoryClickEvent.md)

##### <a id='inventoryclickevent'></a>new __InventoryClickEvent__(view, type, slot, right, shift) 
_Deprecated_

_InventoryClickEvent constructor_

Argument | Type | Description  
--- | --- | --- 
view | [`InventoryView`](../../inventory/InventoryView.md) | view argument
type | `SlotType` | type argument
slot | `int` | slot argument
right | `boolean` | right argument
shift | `boolean` | shift argument

##### <a id='inventoryclickevent'></a>new __InventoryClickEvent__(view, type, slot, click, action) 

_InventoryClickEvent constructor_

Argument | Type | Description  
--- | --- | --- 
view | [`InventoryView`](../../inventory/InventoryView.md) | view argument
type | `SlotType` | type argument
slot | `int` | slot argument
click | [`ClickType`](ClickType.md) | click argument
action | [`InventoryAction`](InventoryAction.md) | action argument

##### <a id='inventoryclickevent'></a>new __InventoryClickEvent__(view, type, slot, click, action, key) 

_InventoryClickEvent constructor_

Argument | Type | Description  
--- | --- | --- 
view | [`InventoryView`](../../inventory/InventoryView.md) | view argument
type | `SlotType` | type argument
slot | `int` | slot argument
click | [`ClickType`](ClickType.md) | click argument
action | [`InventoryAction`](InventoryAction.md) | action argument
key | `int` | key argument

---

### Public Properties for [`InventoryClickEvent`](InventoryClickEvent.md)

##### <a id='currentitem'></a>public  writeonly property __CurrentItem__

_Set: Sets the ItemStack currently in the clicked slot._

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
stack | `ItemStack` | the item to be placed in the current slot


##### <a id='handlerlist'></a>public static readonly property __HandlerList__

_HandlerList property_

Get | 
--- | 
[`HandlerList`](../HandlerList.md) |



##### <a id='currentitem'></a>public  readonly property __CurrentItem__

_Get: Gets the ItemStack currently in the clicked slot._

Get | Description
--- | --- 
`ItemStack` | the item in the clicked



##### <a id='click'></a>public  readonly property __Click__

_Get: Gets the ClickType for this event. <p> This is insulated against changes to the inventory by other plugins._

Get | Description
--- | --- 
[`ClickType`](ClickType.md) | the type of inventory click



##### <a id='action'></a>public  readonly property __Action__

_Get: Gets the InventoryAction that triggered this event. <p> This action cannot be changed, and represents what the normal outcome of the event will be. To change the behavior of this InventoryClickEvent, changes must be manually applied._

Get | Description
--- | --- 
[`InventoryAction`](InventoryAction.md) | the InventoryAction that triggered this event.



##### <a id='cursor'></a>public   property __Cursor__
_Deprecated: This changes the ItemStack in their hand before any calculations are applied to the Inventory, which has a tendency to create inconsistencies between the Player and the server, and to make unexpected changes in the behavior of the clicked Inventory._

_Get: Gets the current ItemStack on the cursor.<br>Set: Sets the item on the cursor._

Get | 
--- | 
`ItemStack` |

Set | Type | Description  
--- | --- | --- 
stack | `ItemStack` | the new cursor item


##### <a id='handlers'></a>public  readonly property __Handlers__

_Handlers property_

Get | 
--- | 
[`HandlerList`](../HandlerList.md) |



##### <a id='hotbarbutton'></a>public  readonly property __HotbarButton__

_Get: If the ClickType is NUMBER_KEY, this method will return the index of the pressed key (0-8)._

Get | Description
--- | --- 
`int` | the number on the key minus 1 (range 0-8); or -1 if not a NUMBER_KEY action



##### <a id='rawslot'></a>public  readonly property __RawSlot__

_Get: The raw slot number clicked, ready for passing to {@link InventoryView #getItem(int)} This slot number is unique for the view._

Get | Description
--- | --- 
`int` | the slot number



##### <a id='slot'></a>public  readonly property __Slot__

_Get: The slot number that was clicked, ready for passing to `Inventory#getItem(int)`. Note that there may be two slots with the same slot number, since a view links two different inventories._

Get | Description
--- | --- 
`int` | The slot number.



##### <a id='slottype'></a>public  readonly property __SlotType__

_Get: Gets the type of slot that was clicked._

Get | Description
--- | --- 
`SlotType` | the slot type



---

### Public Methods for [`InventoryClickEvent`](InventoryClickEvent.md)

##### <a id='isleftclick'></a>public  function __isLeftClick__()

_Gets whether or not the ClickType for this event represents a left click._

Returns | Description
--- | --- 
`boolean` | true if the ClickType uses the left mouse button.


##### <a id='isrightclick'></a>public  function __isRightClick__()

_Gets whether or not the ClickType for this event represents a right click._

Returns | Description
--- | --- 
`boolean` | true if the ClickType uses the right mouse button.


##### <a id='isshiftclick'></a>public  function __isShiftClick__()

_Gets whether the ClickType for this event indicates that the key was pressed down when the click was made._

Returns | Description
--- | --- 
`boolean` | true if the ClickType uses Shift or Ctrl.


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
	

