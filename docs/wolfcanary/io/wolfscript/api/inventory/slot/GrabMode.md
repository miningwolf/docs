## GrabMode __enum__

>io.wolfscript.api.inventory.slot.GrabMode

---

### Enum Overview

The Grab mode used with SlotClickEvent

Item | Type   
--- | :--- 
DEFAULT: <br> _Default slot clicking_ | GrabMode
SHIFT_CLICK: <br> _Holding shift while clicking_ | GrabMode
PICK_BLOCK: <br> _Center mouse button click_ | GrabMode
HOVER_SWAP: <br> _Hovering over an Item and hitting a HotBar key (0-9)_ | GrabMode
DROP: <br> _Drop key press while hovering over an Item or clicking outside window without an item_ | GrabMode
PAINT: <br> _Clicking outside with an Item stack and dragging it over the window_ | GrabMode
DOUBLE_CLICK: <br> _Double (left) clicking a slot_ | GrabMode
UNKNOWN: <br> _Unknown mode_ | GrabMode
static function __fromInt__(opt) <br> _Gets the grab mode based on the integer from the packet_ | [`GrabMode`](GrabMode.md)



---


### Public Methods for [`GrabMode`](GrabMode.md)

##### <a id='fromint'></a>public static function __fromInt__(opt)

_Gets the grab mode based on the integer from the packet_

Argument | Type | Description  
--- | --- | --- 
opt | `int` | the mode id

Returns | Description
--- | --- 
[`GrabMode`](GrabMode.md) | the GrabMode for the mode id


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

