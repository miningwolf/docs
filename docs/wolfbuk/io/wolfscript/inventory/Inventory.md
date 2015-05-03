## Inventory __interface__

>io.wolfscript.inventory.Inventory
>Extends `Iterable<ItemStack`

---

### Interface Overview

Interface to the various inventories. Behavior relating to `Material#AIR` is unspecified.

Method | Type   
--- | :--- 
 function __iterator__(index) <br> _Returns the size of the inventory_ | `ListIterator<ItemStack>`



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


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

