## GrabMode __enum__

>io.wolfscript.api.inventory.slot.GrabMode

---

### Enum Overview

The Grab mode used with SlotClick

Item | Type   
--- | :--- 
UNKNOWN: <br> _Default slot clicking_ | GrabMode
static function __fromInt__(opt) <br> _Default slot clicking_ | [`GrabMode`](GrabMode.md)



---


### Public Methods for [`GrabMode`](GrabMode.md)

##### <a id='fromint'></a>public static function __fromInt__(opt)

_Default slot clicking /
    DEFAULT,
    //

    /** Holding shift while clicking /
    SHIFT_CLICK,
    //

    /** Center mouse button click /
    PICK_BLOCK,
    //

    /** Hovering over an Item and hitting a HotBar key (0-9) /
    HOVER_SWAP,
    //

    /** Drop key press while hovering over an Item or clicking outside window without an item /
    DROP,
    //

    /** Clicking outside with an Item stack and dragging it over the window /
    PAINT,
    //

    /** Double (left) clicking a slot /
    DOUBLE_CLICK,
    //

    /** Unknown mode /
    UNKNOWN,
    //
    ;

    /** Gets the grab mode based on the integer from the packet_

Argument | Type | Description  
--- | --- | --- 
opt | `int` | the mode id

Returns | Description
--- | --- 
[`GrabMode`](GrabMode.md) | the GrabMode for the mode id


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

