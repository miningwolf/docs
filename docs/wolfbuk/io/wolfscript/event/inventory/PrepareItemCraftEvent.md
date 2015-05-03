## PrepareItemCraftEvent __class__

>io.wolfscript.event.inventory.PrepareItemCraftEvent
>Extends [`InventoryEvent`](InventoryEvent.md)

---

### Class Overview

class PrepareItemCraftEvent

Method | Type   
--- | :--- 
new __PrepareItemCraftEvent__(what, view, isRepair) <br> _PrepareItemCraftEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](..\HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](..\HandlerList.md)
 function __isRepair__() <br> _Get the recipe that has been formed. If this event was triggered by a_ | `boolean`
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

### Public Constructors for [`PrepareItemCraftEvent`](PrepareItemCraftEvent.md)

##### <a id='prepareitemcraftevent'></a>new __PrepareItemCraftEvent__(what, view, isRepair) 

_PrepareItemCraftEvent constructor_

Argument | Type | Description  
--- | --- | --- 
what | [`CraftingInventory`](..\..\inventory\CraftingInventory.md) | what argument
view | `InventoryView` | view argument
isRepair | `boolean` | isRepair argument

---

### Public Properties for [`PrepareItemCraftEvent`](PrepareItemCraftEvent.md)

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

### Public Methods for [`PrepareItemCraftEvent`](PrepareItemCraftEvent.md)

##### <a id='isrepair'></a>public  function __isRepair__()

_Get the recipe that has been formed. If this event was triggered by a tool repair, this will be a temporary shapeless recipe representing the repair._

Returns | Description
--- | --- 
`boolean` | The recipe being crafted. /
    public Recipe getRecipe() {
        return matrix.getRecipe();
    }

    /**


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


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

