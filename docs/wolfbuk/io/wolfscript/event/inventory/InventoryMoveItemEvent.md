## InventoryMoveItemEvent __class__

>io.wolfscript.event.inventory.InventoryMoveItemEvent
>Extends [`Event`](..\Event.md)
>Implements [`Cancellable`](..\Cancellable.md)

---

### Class Overview

Called when some entity or block (e.g. hopper) tries to move items directly from one inventory to another. <p> When this event is called, the initiator may already have removed the item from the source inventory and is ready to move it into the destination inventory. <p> If this event is cancelled, the items will be returned to the source inventory, if needed. <p> If this event is not cancelled, the initiator will try to put the ItemStack into the destination inventory. If this is not possible and the ItemStack has not been modified, the source inventory slot will be restored to its former state. Otherwise any additional items will be discarded.

Method | Type   
--- | :--- 
new __InventoryMoveItemEvent__(Inventory, ItemStack, Inventory, boolean) <br> _InventoryMoveItemEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](..\HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](..\HandlerList.md)
 readonly property __Initiator__ <br> _Get: Gets the Inventory that the ItemStack is being taken from_ | [`Inventory`](..\..\inventory\Inventory.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`Event`](..\Event.md)__ |
final function __isAsynchronous__() <br> _The default constructor is defined for cleaner code. This constructor_ | `boolean`





---

### Public Constructors for [`InventoryMoveItemEvent`](InventoryMoveItemEvent.md)

##### <a id='inventorymoveitemevent'></a>new __InventoryMoveItemEvent__(Inventory, ItemStack, Inventory, boolean) 

_InventoryMoveItemEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Inventory | `final` | Inventory argument
ItemStack | `final` | ItemStack argument
Inventory | `final` | Inventory argument
boolean | `final` | boolean argument

---

### Public Properties for [`InventoryMoveItemEvent`](InventoryMoveItemEvent.md)

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



##### <a id='initiator'></a>public  readonly property __Initiator__

_Get: Gets the Inventory that the ItemStack is being taken from_

Get | Description
--- | --- 
[`Inventory`](..\..\inventory\Inventory.md) | Inventory that the ItemStack is being taken from /
    public Inventory getSource() {
        return sourceInventory;
    }

    /** Gets the ItemStack being moved; if modified, the original item will not be removed from the source inventory.



##### <a id='cancelled'></a>public  writeonly property __Cancelled__

_Cancelled property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
cancel | `boolean` | cancel argument


---

### Public Methods for [`InventoryMoveItemEvent`](InventoryMoveItemEvent.md)

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
	

