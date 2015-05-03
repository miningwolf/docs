## PlayerInventory __interface__

>io.wolfscript.inventory.PlayerInventory
>Extends [`Inventory`](Inventory.md)

---

### Interface Overview

Interface to the inventory of a Player, including the four armor slots.

Method | Type   
--- | :--- 
 readonly property __Holder__ <br> _Holder property_ | `HumanEntity`
 |
__Inherited items from [`Inventory`](Inventory.md)__ |
 function __iterator__(index) <br> _Returns the size of the inventory_ | `ListIterator<ItemStack>`





---


### Public Properties for [`PlayerInventory`](PlayerInventory.md)

##### <a id='holder'></a>public  readonly property __Holder__

_Holder property_

Get | 
--- | 
`HumanEntity` |



---

### Public Methods for [`PlayerInventory`](PlayerInventory.md)

##### <a id='clear'></a>public  function __clear__(id, data)
_Deprecated: Magic value_

_Get all ItemStacks from the armor slots_

Argument | Type | Description  
--- | --- | --- 
id | `int` | the id of the item you want to clear from the inventory
data | `int` | the data of the item you want to clear from the inventory

Returns | Description
--- | --- 
`int` | All the ItemStacks from the armor slots /
    public ItemStack[] getArmorContents();

    /** Return the ItemStack from the helmet slot


---

### Public Methods for [`Inventory`](Inventory.md)

##### <a id='iterator'></a>public  function __iterator__(index)

_Returns the size of the inventory_

Argument | Type | Description  
--- | --- | --- 
index | `int` | The index of the Slot's ItemStack to return

Returns | Description
--- | --- 
`ListIterator<ItemStack>` | The size of the inventory /
    public int getSize();

    /** Returns the maximum stack size for an ItemStack in this inventory.


---
---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

