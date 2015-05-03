## InventoryCreativeEvent __class__

>io.wolfscript.event.inventory.InventoryCreativeEvent
>Extends [`InventoryClickEvent`](InventoryClickEvent.md)

---

### Class Overview

This event is called when a player in creative mode puts down or picks up an item in their inventory / hotbar and when they drop items from their Inventory while in creative mode.

Method | Type   
--- | :--- 
new __InventoryCreativeEvent__(what, type, slot, newItem) <br> _InventoryCreativeEvent constructor_ | _constructor_
  property __Cursor__ <br> _Cursor property_ | `ItemStack`
 |
__Inherited items from [`InventoryClickEvent`](InventoryClickEvent.md)__ |
new __InventoryClickEvent__(view, type, slot, right, shift) <br> _InventoryClickEvent constructor_ | _constructor_
new __InventoryClickEvent__(view, type, slot, click, action) <br> _InventoryClickEvent constructor_ | _constructor_
new __InventoryClickEvent__(view, type, slot, click, action, key) <br> _InventoryClickEvent constructor_ | _constructor_
 readonly property __Click__ <br> _Get: Gets the type of slot that was clicked._ | [`ClickType`](ClickType.md)
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](..\HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](..\HandlerList.md)
 |
__Inherited items from [`InventoryInteractEvent`](InventoryInteractEvent.md)__ |
new __InventoryInteractEvent__(transaction) <br> _InventoryInteractEvent constructor_ | _constructor_
 writeonly property __Cancelled__ <br> _Set: Gets the player who performed the click._ | `void`
 |
__Inherited items from [`InventoryEvent`](InventoryEvent.md)__ |
new __InventoryEvent__(transaction) <br> _InventoryEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](..\HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](..\HandlerList.md)
 readonly property __View__ <br> _Get: Gets the primary Inventory involved in this transaction_ | `InventoryView`
 |
__Inherited items from [`Event`](..\Event.md)__ |
final function __isAsynchronous__() <br> _The default constructor is defined for cleaner code. This constructor_ | `boolean`











---

### Public Constructors for [`InventoryCreativeEvent`](InventoryCreativeEvent.md)

##### <a id='inventorycreativeevent'></a>new __InventoryCreativeEvent__(what, type, slot, newItem) 

_InventoryCreativeEvent constructor_

Argument | Type | Description  
--- | --- | --- 
what | `InventoryView` | what argument
type | `SlotType` | type argument
slot | `int` | slot argument
newItem | `ItemStack` | newItem argument

---

### Public Properties for [`InventoryCreativeEvent`](InventoryCreativeEvent.md)

##### <a id='cursor'></a>public   property __Cursor__

_Cursor property_

Get | 
--- | 
`ItemStack` |

Set | Type | Description  
--- | --- | --- 
item | `ItemStack` | item argument


---
### Public Constructors for [`InventoryClickEvent`](InventoryClickEvent.md)

##### <a id='inventoryclickevent'></a>new __InventoryClickEvent__(view, type, slot, right, shift) 

_InventoryClickEvent constructor_

Argument | Type | Description  
--- | --- | --- 
view | `InventoryView` | view argument
type | `SlotType` | type argument
slot | `int` | slot argument
right | `boolean` | right argument
shift | `boolean` | shift argument

##### <a id='inventoryclickevent'></a>new __InventoryClickEvent__(view, type, slot, click, action) 

_InventoryClickEvent constructor_

Argument | Type | Description  
--- | --- | --- 
view | `InventoryView` | view argument
type | `SlotType` | type argument
slot | `int` | slot argument
click | [`ClickType`](ClickType.md) | click argument
action | [`InventoryAction`](InventoryAction.md) | action argument

##### <a id='inventoryclickevent'></a>new __InventoryClickEvent__(view, type, slot, click, action, key) 

_InventoryClickEvent constructor_

Argument | Type | Description  
--- | --- | --- 
view | `InventoryView` | view argument
type | `SlotType` | type argument
slot | `int` | slot argument
click | [`ClickType`](ClickType.md) | click argument
action | [`InventoryAction`](InventoryAction.md) | action argument
key | `int` | key argument

---

### Public Properties for [`InventoryClickEvent`](InventoryClickEvent.md)

##### <a id='click'></a>public  readonly property __Click__

_Get: Gets the type of slot that was clicked._

Get | Description
--- | --- 
[`ClickType`](ClickType.md) | the slot type /
    public SlotType getSlotType() {
        return slot_type;
    }

    /** Gets the current ItemStack on the cursor.



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



---
### Public Constructors for [`InventoryInteractEvent`](InventoryInteractEvent.md)

##### <a id='inventoryinteractevent'></a>new __InventoryInteractEvent__(transaction) 

_InventoryInteractEvent constructor_

Argument | Type | Description  
--- | --- | --- 
transaction | `InventoryView` | transaction argument

---

### Public Properties for [`InventoryInteractEvent`](InventoryInteractEvent.md)

##### <a id='cancelled'></a>public  writeonly property __Cancelled__

_Set: Gets the player who performed the click._

Get | Description
--- | --- 
`void` | The clicking player. /
    public HumanEntity getWhoClicked() {
        return getView().getPlayer();
    }

    /** Sets the result of this event. This will change whether or not this event is considered cancelled.

Set | Type | Description  
--- | --- | --- 
toCancel | `boolean` | result becomes DENY if true, ALLOW if false


---
### Public Constructors for [`InventoryEvent`](InventoryEvent.md)

##### <a id='inventoryevent'></a>new __InventoryEvent__(transaction) 

_InventoryEvent constructor_

Argument | Type | Description  
--- | --- | --- 
transaction | `InventoryView` | transaction argument

---

### Public Properties for [`InventoryEvent`](InventoryEvent.md)

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



##### <a id='view'></a>public  readonly property __View__

_Get: Gets the primary Inventory involved in this transaction_

Get | Description
--- | --- 
`InventoryView` | The upper inventory. /
    public Inventory getInventory() {
        return transaction.getTopInventory();
    }

    /** Gets the list of players viewing the primary (upper) inventory involved in this event



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


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

