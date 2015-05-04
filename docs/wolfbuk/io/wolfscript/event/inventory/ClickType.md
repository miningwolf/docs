## ClickType __enum__

>io.wolfscript.event.inventory.ClickType

---

### Enum Overview

What the client did to trigger this action (not the result).

Item | Type   
--- | :--- 
LEFT: <br> _The left (or primary) mouse button._ | ClickType
SHIFT_LEFT: <br> _Holding shift while pressing the left mouse button._ | ClickType
RIGHT: <br> _The right mouse button._ | ClickType
SHIFT_RIGHT: <br> _Holding shift while pressing the right mouse button._ | ClickType
WINDOW_BORDER_LEFT: <br> _Clicking the left mouse button on the grey area around the inventory._ | ClickType
WINDOW_BORDER_RIGHT: <br> _Clicking the right mouse button on the grey area around the inventory._ | ClickType
MIDDLE: <br> _The middle mouse button, or a "scrollwheel click"._ | ClickType
NUMBER_KEY: <br> _One of the number keys 1-9, correspond to slots on the hotbar._ | ClickType
DOUBLE_CLICK: <br> _Pressing the left mouse button twice in quick succession._ | ClickType
DROP: <br> _The "Drop" key (defaults to Q)._ | ClickType
CONTROL_DROP: <br> _Holding Ctrl while pressing the "Drop" key (defaults to Q)._ | ClickType
CREATIVE: <br> _Any action done with the Creative inventory open._ | ClickType
UNKNOWN: <br> _A type of inventory manipulation not yet recognized by WolfScript._ | ClickType
 function __isCreativeAction__() <br> _Gets whether this ClickType represents an action that can only be_ | `boolean`
 function __isKeyboardClick__() <br> _The left (or primary) mouse button._ | `boolean`
 function __isLeftClick__() <br> _Gets whether this ClickType represents a left click._ | `boolean`
 function __isRightClick__() <br> _Gets whether this ClickType represents a right click._ | `boolean`
 function __isShiftClick__() <br> _Gets whether this ClickType indicates that the shift key was pressed_ | `boolean`



---


### Public Methods for [`ClickType`](ClickType.md)

##### <a id='iscreativeaction'></a>public  function __isCreativeAction__()

_Gets whether this ClickType represents an action that can only be performed by a Player in creative mode._

Returns | Description
--- | --- 
`boolean` | true if this action requires Creative mode


##### <a id='iskeyboardclick'></a>public  function __isKeyboardClick__()

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
`boolean` | true if this ClickType represents the pressing of a key


##### <a id='isleftclick'></a>public  function __isLeftClick__()

_Gets whether this ClickType represents a left click._

Returns | Description
--- | --- 
`boolean` | true if this ClickType represents a left click


##### <a id='isrightclick'></a>public  function __isRightClick__()

_Gets whether this ClickType represents a right click._

Returns | Description
--- | --- 
`boolean` | true if this ClickType represents a right click


##### <a id='isshiftclick'></a>public  function __isShiftClick__()

_Gets whether this ClickType indicates that the shift key was pressed down when the click was made._

Returns | Description
--- | --- 
`boolean` | true if the action uses Shift.


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

