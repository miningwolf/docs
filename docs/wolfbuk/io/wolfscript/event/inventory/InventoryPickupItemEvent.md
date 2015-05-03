## InventoryPickupItemEvent __class__

>io.wolfscript.event.inventory.InventoryPickupItemEvent
>Extends [`Event`](..\Event.md)
>Implements [`Cancellable`](..\Cancellable.md)

---

### Class Overview

Called when a hopper or hopper minecart picks up a dropped item.

Method | Type   
--- | :--- 
new __InventoryPickupItemEvent__(Inventory, Item) <br> _InventoryPickupItemEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](..\HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](..\HandlerList.md)
 readonly property __Item__ <br> _Get: Gets the Inventory that picked up the item_ | [`Item`](..\..\entity\Item.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`Event`](..\Event.md)__ |
final function __isAsynchronous__() <br> _The default constructor is defined for cleaner code. This constructor_ | `boolean`





---

### Public Constructors for [`InventoryPickupItemEvent`](InventoryPickupItemEvent.md)

##### <a id='inventorypickupitemevent'></a>new __InventoryPickupItemEvent__(Inventory, Item) 

_InventoryPickupItemEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Inventory | `final` | Inventory argument
Item | `final` | Item argument

---

### Public Properties for [`InventoryPickupItemEvent`](InventoryPickupItemEvent.md)

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



##### <a id='item'></a>public  readonly property __Item__

_Get: Gets the Inventory that picked up the item_

Get | Description
--- | --- 
[`Item`](..\..\entity\Item.md) | Inventory /
    public Inventory getInventory() {
        return inventory;
    }

    /** Gets the Item entity that was picked up



##### <a id='cancelled'></a>public  writeonly property __Cancelled__

_Cancelled property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
cancel | `boolean` | cancel argument


---

### Public Methods for [`InventoryPickupItemEvent`](InventoryPickupItemEvent.md)

##### <a id='iscancelled'></a>public  function __isCancelled__()

_isCancelled method_

Returns | 
--- | 
`boolean` |


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


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	
