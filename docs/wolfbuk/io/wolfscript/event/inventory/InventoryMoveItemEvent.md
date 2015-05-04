## InventoryMoveItemEvent __class__

>io.wolfscript.event.inventory.InventoryMoveItemEvent
>Extends [`Event`](../Event.md)
>Implements [`Cancellable`](../Cancellable.md)
``` javascript
this.on('inventory.InventoryMoveItemEvent', function (e) { });
```


---

### Class Overview

Called when some entity or block (e.g. hopper) tries to move items directly from one inventory to another. <p> When this event is called, the initiator may already have removed the item from the source inventory and is ready to move it into the destination inventory. <p> If this event is cancelled, the items will be returned to the source inventory, if needed. <p> If this event is not cancelled, the initiator will try to put the ItemStack into the destination inventory. If this is not possible and the ItemStack has not been modified, the source inventory slot will be restored to its former state. Otherwise any additional items will be discarded.

Method | Type   
--- | :--- 
new __InventoryMoveItemEvent__(Inventory, ItemStack, Inventory, boolean) <br> _InventoryMoveItemEvent constructor_ | _constructor_
 readonly property __Destination__ <br> _Get: Gets the Inventory that the ItemStack is being put into_ | [`Inventory`](../../inventory/Inventory.md)
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Initiator__ <br> _Get: Gets the Inventory that initiated the transfer. This will always be_ | [`Inventory`](../../inventory/Inventory.md)
  property __Item__ <br> _Get: Gets the ItemStack being moved; if modified, the original item will not<br>Set: Sets the ItemStack being moved; if this is different from the original_ | `ItemStack`
 readonly property __Source__ <br> _Get: Gets the Inventory that the ItemStack is being taken from_ | [`Inventory`](../../inventory/Inventory.md)
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

##### <a id='destination'></a>public  readonly property __Destination__

_Get: Gets the Inventory that the ItemStack is being put into_

Get | Description
--- | --- 
[`Inventory`](../../inventory/Inventory.md) | Inventory that the ItemStack is being put into



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



##### <a id='initiator'></a>public  readonly property __Initiator__

_Get: Gets the Inventory that initiated the transfer. This will always be either the destination or source Inventory._

Get | Description
--- | --- 
[`Inventory`](../../inventory/Inventory.md) | Inventory that initiated the transfer



##### <a id='item'></a>public   property __Item__

_Get: Gets the ItemStack being moved; if modified, the original item will not be removed from the source inventory.<br>Set: Sets the ItemStack being moved; if this is different from the original ItemStack, the original item will not be removed from the source inventory._

Get | Description
--- | --- 
`ItemStack` | ItemStack

Set | Type | Description  
--- | --- | --- 
itemStack | `ItemStack` | The ItemStack


##### <a id='source'></a>public  readonly property __Source__

_Get: Gets the Inventory that the ItemStack is being taken from_

Get | Description
--- | --- 
[`Inventory`](../../inventory/Inventory.md) | Inventory that the ItemStack is being taken from



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
	

