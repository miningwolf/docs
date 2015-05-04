## InventoryPickupItemEvent __class__

>io.wolfscript.event.inventory.InventoryPickupItemEvent
>Extends [`Event`](../Event.md)
>Implements [`Cancellable`](../Cancellable.md)

this.on('inventory.InventoryPickupItemEvent', function (e) { });

---

### Class Overview

Called when a hopper or hopper minecart picks up a dropped item.

Method | Type   
--- | :--- 
new __InventoryPickupItemEvent__(Inventory, Item) <br> _InventoryPickupItemEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Inventory__ <br> _Get: Gets the Inventory that picked up the item_ | [`Inventory`](../../inventory/Inventory.md)
 readonly property __Item__ <br> _Get: Gets the Item entity that was picked up_ | [`Item`](../../entity/Item.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`Event`](../Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`





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
[`HandlerList`](../HandlerList.md) |



##### <a id='handlers'></a>public  readonly property __Handlers__

_Handlers property_

Get | 
--- | 
[`HandlerList`](../HandlerList.md) |



##### <a id='inventory'></a>public  readonly property __Inventory__

_Get: Gets the Inventory that picked up the item_

Get | Description
--- | --- 
[`Inventory`](../../inventory/Inventory.md) | Inventory



##### <a id='item'></a>public  readonly property __Item__

_Get: Gets the Item entity that was picked up_

Get | Description
--- | --- 
[`Item`](../../entity/Item.md) | Item



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


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

