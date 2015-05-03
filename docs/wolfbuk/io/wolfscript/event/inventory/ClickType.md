## ClickType __enum__

>io.wolfscript.event.inventory.ClickType

---

### Enum Overview

What the client did to trigger this action (not the result).

Item | Type   
--- | :--- 
UNKNOWN: <br> _The left (or primary) mouse button._ | ClickType
 function __isShiftClick__() <br> _The left (or primary) mouse button._ | `boolean`



---


### Public Methods for [`ClickType`](ClickType.md)

##### <a id='isshiftclick'></a>public  function __isShiftClick__()

_The left (or primary) mouse button. /
    LEFT,
    /** Holding shift while pressing the left mouse button. /
    SHIFT_LEFT,
    /** The right mouse button. /
    RIGHT,
    /** Holding shift while pressing the right mouse button. /
    SHIFT_RIGHT,
    /** Clicking the left mouse button on the grey area around the inventory. /
    WINDOW_BORDER_LEFT,
    /** Clicking the right mouse button on the grey area around the inventory. /
    WINDOW_BORDER_RIGHT,
    /** The middle mouse button, or a "scrollwheel click". /
    MIDDLE,
    /** One of the number keys 1-9, correspond to slots on the hotbar. /
    NUMBER_KEY,
    /** Pressing the left mouse button twice in quick succession. /
    DOUBLE_CLICK,
    /** The "Drop" key (defaults to Q). /
    DROP,
    /** Holding Ctrl while pressing the "Drop" key (defaults to Q). /
    CONTROL_DROP,
    /** Any action done with the Creative inventory open. /
    CREATIVE,
    /** A type of inventory manipulation not yet recognized by WolfScript. <p> This is only for transitional purposes on a new Minecraft update, and should never be relied upon. <p> Any ClickType.UNKNOWN is called on a best-effort basis. /
    UNKNOWN,
    ;

    /** Gets whether this ClickType represents the pressing of a key on a keyboard._

Returns | Description
--- | --- 
`boolean` | true if this ClickType represents the pressing of a key /
    public boolean isKeyboardClick() {
        return (this == ClickType.NUMBER_KEY) || (this == ClickType.DROP) || (this == ClickType.CONTROL_DROP);
    }

    /** Gets whether this ClickType represents an action that can only be performed by a Player in creative mode.


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

