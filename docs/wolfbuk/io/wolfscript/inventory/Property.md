## Property __enum__

>io.wolfscript.inventory.Property

---

### Enum Overview

Represents a view linking two inventories and a single player (whose inventory may or may not be one of the two). <p> Note: If you implement this interface but fail to satisfy the expected contracts of certain methods, there's no guarantee that the game will work as it should. /
public abstract class InventoryView {
    public final static int OUTSIDE = -999;
    /** Represents various extra properties of certain inventory windows.

Item | Type   
--- | :--- 
0: <br> _0 Property_ | Property
0: <br> _0 Property_ | Property
1: <br> _1 Property_ | Property
2: <br> _2 Property_ | Property
inventory: <br> _inventory Property_ | Property
0: <br> _0 Property_ | Property
inventory: <br> _inventory Property_ | Property
1: <br> _1 Property_ | Property
inventory: <br> _inventory Property_ | Property
2: <br> _2 Property_ | Property



---


### Public Properties for [`Property`](Property.md)

##### <a id='id'></a>public  readonly property __Id__
_Deprecated: Magic value_

_Get: The progress of the down-pointing arrow in a brewing inventory. /
        BREW_TIME(0, InventoryType.BREWING),
        /** The progress of the right-pointing arrow in a furnace inventory. /
        COOK_TIME(0, InventoryType.FURNACE),
        /** The progress of the flame in a furnace inventory. /
        BURN_TIME(1, InventoryType.FURNACE),
        /** How many total ticks the current fuel should last. /
        TICKS_FOR_CURRENT_FUEL(2, InventoryType.FURNACE),
        /** In an enchanting inventory, the top button's experience level value. /
        ENCHANT_BUTTON1(0, InventoryType.ENCHANTING),
        /** In an enchanting inventory, the middle button's experience level value. /
        ENCHANT_BUTTON2(1, InventoryType.ENCHANTING),
        /** In an enchanting inventory, the bottom button's experience level value. /
        ENCHANT_BUTTON3(2, InventoryType.ENCHANTING);
        int id;
        InventoryType style;
        private Property(int id, InventoryType appliesTo) {
            this.id = id;
            style = appliesTo;
        }

        public InventoryType getType() {
            return style;
        }

        /**_

Get | Description
--- | --- 
`int` | the id of this view



---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

