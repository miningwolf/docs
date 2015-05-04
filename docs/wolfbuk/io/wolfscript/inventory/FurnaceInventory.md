## FurnaceInventory __interface__

>io.wolfscript.inventory.FurnaceInventory
>Extends [`Inventory`](Inventory.md)

---

### Interface Overview

Interface to the inventory of a Furnace.

Method | Type   
--- | :--- 
 |
__Inherited items from [`Inventory`](Inventory.md)__ |
 readonly property __Size__ <br> _Get: Returns the size of the inventory_ | `int`
 readonly property __Holder__ <br> _Get: Gets the block or entity belonging to the open inventory_ | [`InventoryHolder`](InventoryHolder.md)
 readonly property __Name__ <br> _Get: Returns the name of the inventory_ | `String`
 readonly property __Contents__ <br> _Get: Returns all ItemStacks from the inventory_ | `ItemStack[]`
  property __MaxStackSize__ <br> _MaxStackSize property_ | `int`
 readonly property __Title__ <br> _Get: Returns the title of this inventory._ | `String`
 readonly property __Type__ <br> _Get: Returns what type of inventory this is._ | [`InventoryType`](../event/inventory/InventoryType.md)
 readonly property __Viewers__ <br> _Get: Gets a list of players viewing the inventory. Note that a player is_ | `List<HumanEntity>`
 function __getItem__(index) <br> _Returns the ItemStack found in the slot at the given index_ | `ItemStack`
 function __clear__() <br> _Clears out the whole Inventory._ | `void`
 function __contains__(item) <br> _Checks if the inventory contains any ItemStacks matching the given_ | `boolean`
 function __contains__(item, amount) <br> _Checks if the inventory contains at least the minimum amount specified_ | `boolean`
 function __containsAtLeast__(item, amount) <br> _Checks if the inventory contains ItemStacks matching the given_ | `boolean`
 function __first__(item) <br> _Returns the first slot in the inventory containing an ItemStack with_ | `int`
 function __firstEmpty__() <br> _Returns the first empty Slot._ | `int`
 function __clear__(index) <br> _Clears out a particular slot in the index._ | `void`
 function __iterator__() <br> _iterator method_ | `ListIterator<ItemStack>`
 function __iterator__(index) <br> _Returns an iterator starting at the given index. If the index is_ | `ListIterator<ItemStack>`
 function __remove__(item) <br> _Removes all stacks in the inventory matching the given stack._ | `void`
 function __setItem__(index, item) <br> _Stores the ItemStack at the given index of the inventory._ | `void`





---


### Public Properties for [`Inventory`](Inventory.md)

##### <a id='size'></a>public  readonly property __Size__

_Get: Returns the size of the inventory_

Get | Description
--- | --- 
`int` | The size of the inventory



##### <a id='holder'></a>public  readonly property __Holder__

_Get: Gets the block or entity belonging to the open inventory_

Get | Description
--- | --- 
[`InventoryHolder`](InventoryHolder.md) | The holder of the inventory; null if it has no holder.



##### <a id='name'></a>public  readonly property __Name__

_Get: Returns the name of the inventory_

Get | Description
--- | --- 
`String` | The String with the name of the inventory



##### <a id='contents'></a>public  readonly property __Contents__

_Get: Returns all ItemStacks from the inventory_

Get | Description
--- | --- 
`ItemStack[]` | An array of ItemStacks from the inventory.



##### <a id='maxstacksize'></a>public   property __MaxStackSize__

_MaxStackSize property_

Get | Description
--- | --- 
`int` | The maximum size for an ItemStack in this inventory.

Set | Type | Description  
--- | --- | --- 
size | `int` | size argument


##### <a id='title'></a>public  readonly property __Title__

_Get: Returns the title of this inventory._

Get | Description
--- | --- 
`String` | A String with the title.



##### <a id='type'></a>public  readonly property __Type__

_Get: Returns what type of inventory this is._

Get | Description
--- | --- 
[`InventoryType`](../event/inventory/InventoryType.md) | The InventoryType representing the type of inventory.



##### <a id='viewers'></a>public  readonly property __Viewers__

_Get: Gets a list of players viewing the inventory. Note that a player is considered to be viewing their own inventory and internal crafting screen even when said inventory is not open. They will normally be considered to be viewing their inventory even when they have a different inventory screen open, but it's possible for customized inventory screens to exclude the viewer's inventory, so this should never be assumed to be non-empty._

Get | Description
--- | --- 
`List<HumanEntity>` | A list of HumanEntities who are viewing this Inventory.



---

### Public Methods for [`Inventory`](Inventory.md)

##### <a id='first'></a>public  function __first__(materialId)
_Deprecated: Magic value_

_Finds the first slot in the inventory containing an ItemStack with the given materialId._

Argument | Type | Description  
--- | --- | --- 
materialId | `int` | The materialId to look for

Returns | Description
--- | --- 
`int` | The slot index of the given materialId or -1 if not found


##### <a id='getitem'></a>public  function __getItem__(index)

_Returns the ItemStack found in the slot at the given index_

Argument | Type | Description  
--- | --- | --- 
index | `int` | The index of the Slot's ItemStack to return

Returns | Description
--- | --- 
`ItemStack` | The ItemStack in the slot


##### <a id='clear'></a>public  function __clear__()

_Clears out the whole Inventory._

Returns | 
--- | 
`void` |


##### <a id='contains'></a>public  function __contains__(materialId)
_Deprecated: Magic value_

_Checks if the inventory contains any ItemStacks with the given materialId_

Argument | Type | Description  
--- | --- | --- 
materialId | `int` | The materialId to check for

Returns | Description
--- | --- 
`boolean` | true if an ItemStack in this inventory contains the materialId


##### <a id='contains'></a>public  function __contains__(item)

_Checks if the inventory contains any ItemStacks matching the given ItemStack. <p> This will only return true if both the type and the amount of the stack match._

Argument | Type | Description  
--- | --- | --- 
item | `ItemStack` | The ItemStack to match against

Returns | Description
--- | --- 
`boolean` | false if item is null, true if any exactly matching ItemStacks were found


##### <a id='contains'></a>public  function __contains__(materialId, amount)
_Deprecated: Magic value_

_Checks if the inventory contains any ItemStacks with the given materialId, adding to at least the minimum amount specified._

Argument | Type | Description  
--- | --- | --- 
materialId | `int` | The materialId to check for
amount | `int` | The minimum amount to look for

Returns | Description
--- | --- 
`boolean` | true if this contains any matching ItemStack with the given materialId and amount


##### <a id='contains'></a>public  function __contains__(item, amount)

_Checks if the inventory contains at least the minimum amount specified of exactly matching ItemStacks. <p> An ItemStack only counts if both the type and the amount of the stack match._

Argument | Type | Description  
--- | --- | --- 
item | `ItemStack` | the ItemStack to match against
amount | `int` | how many identical stacks to check for

Returns | Description
--- | --- 
`boolean` | false if item is null, true if amount less than 1, true if amount of exactly matching ItemStacks were found


##### <a id='containsatleast'></a>public  function __containsAtLeast__(item, amount)

_Checks if the inventory contains ItemStacks matching the given ItemStack whose amounts sum to at least the minimum amount specified._

Argument | Type | Description  
--- | --- | --- 
item | `ItemStack` | the ItemStack to match against
amount | `int` | the minimum amount

Returns | Description
--- | --- 
`boolean` | false if item is null, true if amount less than 1, true if enough ItemStacks were found to add to the given amount


##### <a id='first'></a>public  function __first__(item)

_Returns the first slot in the inventory containing an ItemStack with the given stack. This will only match a slot if both the type and the amount of the stack match_

Argument | Type | Description  
--- | --- | --- 
item | `ItemStack` | The ItemStack to match against

Returns | Description
--- | --- 
`int` | The slot index of the given ItemStack or -1 if not found


##### <a id='firstempty'></a>public  function __firstEmpty__()

_Returns the first empty Slot._

Returns | Description
--- | --- 
`int` | The first empty Slot found, or -1 if no empty slots.


##### <a id='clear'></a>public  function __clear__(index)

_Clears out a particular slot in the index._

Argument | Type | Description  
--- | --- | --- 
index | `int` | The index to empty.

Returns | 
--- | 
`void` |


##### <a id='iterator'></a>public  function __iterator__()

_iterator method_

Returns | 
--- | 
`ListIterator<ItemStack>` |


##### <a id='iterator'></a>public  function __iterator__(index)

_Returns an iterator starting at the given index. If the index is positive, then the first call to next() will return the item at that index; if it is negative, the first call to previous will return the item at index (getSize() + index)._

Argument | Type | Description  
--- | --- | --- 
index | `int` | The index.

Returns | Description
--- | --- 
`ListIterator<ItemStack>` | An iterator.


##### <a id='remove'></a>public  function __remove__(item)

_Removes all stacks in the inventory matching the given stack. <p> This will only match a slot if both the type and the amount of the stack match_

Argument | Type | Description  
--- | --- | --- 
item | `ItemStack` | The ItemStack to match against

Returns | 
--- | 
`void` |


##### <a id='remove'></a>public  function __remove__(materialId)
_Deprecated: Magic value_

_Removes all stacks in the inventory matching the given materialId._

Argument | Type | Description  
--- | --- | --- 
materialId | `int` | The material to remove

Returns | 
--- | 
`void` |


##### <a id='setitem'></a>public  function __setItem__(index, item)

_Stores the ItemStack at the given index of the inventory._

Argument | Type | Description  
--- | --- | --- 
index | `int` | The index where to put the ItemStack
item | `ItemStack` | The ItemStack to set

Returns | 
--- | 
`void` |


---
---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

