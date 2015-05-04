## InventoryAction __enum__

>io.wolfscript.event.inventory.InventoryAction

---

### Enum Overview

An estimation of what the result will be.

Item | Type   
--- | :--- 
NOTHING: <br> _Nothing will happen from the click._ | InventoryAction
PICKUP_ALL: <br> _All of the items on the clicked slot are moved to the cursor._ | InventoryAction
PICKUP_SOME: <br> _Some of the items on the clicked slot are moved to the cursor._ | InventoryAction
PICKUP_HALF: <br> _Half of the items on the clicked slot are moved to the cursor._ | InventoryAction
PICKUP_ONE: <br> _One of the items on the clicked slot are moved to the cursor._ | InventoryAction
PLACE_ALL: <br> _All of the items on the cursor are moved to the clicked slot._ | InventoryAction
PLACE_SOME: <br> _Some of the items from the cursor are moved to the clicked slot_ | InventoryAction
PLACE_ONE: <br> _A single item from the cursor is moved to the clicked slot._ | InventoryAction
SWAP_WITH_CURSOR: <br> _The clicked item and the cursor are exchanged._ | InventoryAction
DROP_ALL_CURSOR: <br> _The entire cursor item is dropped._ | InventoryAction
DROP_ONE_CURSOR: <br> _One item is dropped from the cursor._ | InventoryAction
DROP_ALL_SLOT: <br> _The entire clicked slot is dropped._ | InventoryAction
DROP_ONE_SLOT: <br> _One item is dropped from the clicked slot._ | InventoryAction
MOVE_TO_OTHER_INVENTORY: <br> _The item is moved to the opposite inventory if a space is found._ | InventoryAction
HOTBAR_MOVE_AND_READD: <br> _The clicked item is moved to the hotbar, and the item currently there_ | InventoryAction
HOTBAR_SWAP: <br> _The clicked slot and the picked hotbar slot are swapped._ | InventoryAction
CLONE_STACK: <br> _A max-size stack of the clicked item is put on the cursor._ | InventoryAction
COLLECT_TO_CURSOR: <br> _The inventory is searched for the same material, and they are put on_ | InventoryAction
UNKNOWN: <br> _An unrecognized ClickType._ | InventoryAction



---



##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

