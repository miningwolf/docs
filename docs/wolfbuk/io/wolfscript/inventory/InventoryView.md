## InventoryView __class__

>io.wolfscript.inventory.InventoryView

---

### Class Overview

Represents a view linking two inventories and a single player (whose inventory may or may not be one of the two). <p> Note: If you implement this interface but fail to satisfy the expected contracts of certain methods, there's no guarantee that the game will work as it should.

Method | Type   
--- | :--- 
final readonly property __Title__ <br> _Get: Get the title of this inventory window._ | `String`
abstract readonly property __BottomInventory__ <br> _Get: Get the lower inventory involved in this transaction._ | [`Inventory`](Inventory.md)
abstract readonly property __Player__ <br> _Get: Get the player viewing._ | `HumanEntity`
final  property __Cursor__ <br> _Get: Get the item on the cursor of one of the viewing players.<br>Set: Sets the item on the cursor of one of the viewing players._ | `ItemStack`
abstract readonly property __TopInventory__ <br> _Get: Get the upper inventory involved in this transaction._ | [`Inventory`](Inventory.md)
abstract readonly property __Type__ <br> _Get: Determine the type of inventory involved in the transaction. This_ | [`InventoryType`](../event/inventory/InventoryType.md)
 readonly property __Type__ <br> _Type property_ | [`InventoryType`](../event/inventory/InventoryType.md)
 function __getItem__(slot) <br> _Gets one item in this inventory view by its raw slot ID._ | `ItemStack`
final function __countSlots__() <br> _Check the total number of slots in this view, combining the upper and_ | `int`
final function __close__() <br> _Closes the inventory view._ | `void`
final function __convertSlot__(rawSlot) <br> _Converts a raw slot ID into its local slot ID into whichever of the two_ | `int`
 function __setItem__(slot, item) <br> _Sets one item in this inventory view by its raw slot ID._ | `void`
final function __setProperty__(prop, value) <br> _Sets an extra property of this inventory if supported by that_ | `boolean`
final static var __OUTSIDE__ <br> _OUTSIDE field_ | `int`



---


### Public Properties for [`InventoryView`](InventoryView.md)

##### <a id='title'></a>public final readonly property __Title__

_Get: Get the title of this inventory window._

Get | Description
--- | --- 
`String` | The title.



##### <a id='bottominventory'></a>public abstract readonly property __BottomInventory__

_Get: Get the lower inventory involved in this transaction._

Get | Description
--- | --- 
[`Inventory`](Inventory.md) | the inventory



##### <a id='player'></a>public abstract readonly property __Player__

_Get: Get the player viewing._

Get | Description
--- | --- 
`HumanEntity` | the player



##### <a id='id'></a>public  readonly property __Id__
_Deprecated: Magic value_

_Id property_

Get | Description
--- | --- 
`int` | the id of this view



##### <a id='cursor'></a>public final  property __Cursor__

_Get: Get the item on the cursor of one of the viewing players.<br>Set: Sets the item on the cursor of one of the viewing players._

Get | Description
--- | --- 
`ItemStack` | The item on the player's cursor, or null if they aren't holding one.

Set | Type | Description  
--- | --- | --- 
item | `ItemStack` | The item to put on the cursor, or null to remove the item on their cursor.


##### <a id='topinventory'></a>public abstract readonly property __TopInventory__

_Get: Get the upper inventory involved in this transaction._

Get | Description
--- | --- 
[`Inventory`](Inventory.md) | the inventory



##### <a id='type'></a>public abstract readonly property __Type__

_Get: Determine the type of inventory involved in the transaction. This indicates the window style being shown. It will never return PLAYER, since that is common to all windows._

Get | Description
--- | --- 
[`InventoryType`](../event/inventory/InventoryType.md) | the inventory type



##### <a id='type'></a>public  readonly property __Type__

_Type property_

Get | 
--- | 
[`InventoryType`](../event/inventory/InventoryType.md) |



---

### Public Methods for [`InventoryView`](InventoryView.md)

##### <a id='getitem'></a>public  function __getItem__(slot)

_Gets one item in this inventory view by its raw slot ID._

Argument | Type | Description  
--- | --- | --- 
slot | `int` | The ID as returned by InventoryClickEvent.getRawSlot()

Returns | Description
--- | --- 
`ItemStack` | The item currently in the slot.


##### <a id='countslots'></a>public final function __countSlots__()

_Check the total number of slots in this view, combining the upper and lower inventories. <p> Note though that it's possible for this to be greater than the sum of the two inventories if for example some slots are not being used._

Returns | Description
--- | --- 
`int` | The total size


##### <a id='close'></a>public final function __close__()

_Closes the inventory view._

Returns | 
--- | 
`void` |


##### <a id='convertslot'></a>public final function __convertSlot__(rawSlot)

_Converts a raw slot ID into its local slot ID into whichever of the two inventories the slot points to. <p> If the raw slot refers to the upper inventory, it will be returned unchanged and thus be suitable for getTopInventory().getItem(); if it refers to the lower inventory, the output will differ from the input and be suitable for getBottomInventory().getItem()._

Argument | Type | Description  
--- | --- | --- 
rawSlot | `int` | The raw slot ID.

Returns | Description
--- | --- 
`int` | The converted slot ID.


##### <a id='setitem'></a>public  function __setItem__(slot, item)

_Sets one item in this inventory view by its raw slot ID. <p> Note: If slot ID -999 is chosen, it may be expected that the item is dropped on the ground. This is not required behaviour, however._

Argument | Type | Description  
--- | --- | --- 
slot | `int` | The ID as returned by InventoryClickEvent.getRawSlot()
item | `ItemStack` | The new item to put in the slot, or null to clear it.

Returns | 
--- | 
`void` |


##### <a id='setproperty'></a>public final function __setProperty__(prop, value)

_Sets an extra property of this inventory if supported by that inventory, for example the state of a progress bar._

Argument | Type | Description  
--- | --- | --- 
prop | `Property` | the window property to update
value | `int` | the new value for the window property

Returns | Description
--- | --- 
`boolean` | true if the property was updated successfully, false if the property is not supported by that inventory


---

### Public Fields for [`InventoryView`](InventoryView.md)

##### <a id='outside'></a>public final static var __OUTSIDE__

_OUTSIDE field_

>Returns
>  `int`

---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

