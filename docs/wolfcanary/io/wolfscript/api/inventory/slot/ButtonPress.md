## ButtonPress __enum__

>io.wolfscript.api.inventory.slot.ButtonPress

---

### Enum Overview

Button press enum for SlotClick

Item | Type   
--- | :--- 
LEFT: <br> _Left Mouse Button_ | ButtonPress
RIGHT: <br> _Right Mouse Button_ | ButtonPress
MIDDLE: <br> _Middle Mouse Button_ | ButtonPress
KEY_1: <br> _Hotbar 1_ | ButtonPress
KEY_2: <br> _Hotbar 2_ | ButtonPress
KEY_3: <br> _Hotbar 3_ | ButtonPress
KEY_4: <br> _Hotbar 4_ | ButtonPress
KEY_5: <br> _Hotbar 5_ | ButtonPress
KEY_6: <br> _Hotbar 6_ | ButtonPress
KEY_7: <br> _Hotbar 7_ | ButtonPress
KEY_8: <br> _Hotbar 8_ | ButtonPress
KEY_9: <br> _Hotbar 9_ | ButtonPress
KEY_DROP: <br> _Drop Key_ | ButtonPress
CTRL_DROP: <br> _Control + Drop key_ | ButtonPress
LEFT_PAINT_START: <br> _Starting Painting with Left Click (or Middle Click)_ | ButtonPress
LEFT_PAINT_PROGRESS: <br> _Slot passed with Left Click Paint (or Middle Click)_ | ButtonPress
LEFT_PAINT_END: <br> _Left Click Paint end (or Middle Click)_ | ButtonPress
RIGHT_PAINT_START: <br> _Starting Painting with Right Click_ | ButtonPress
RIGHT_PAINT_PROGRESS: <br> _Slot passed with Right Click Paint_ | ButtonPress
RIGHT_PAINT_END: <br> _Right Click Paint end_ | ButtonPress
UNKNOWN: <br> _Unknown button pressed_ | ButtonPress
static function __matchButton__(mode, pressed, slot) <br> _Gets the ButtonPress as defined with [`GrabMode`](GrabMode.md), the button id, and the slot id_ | [`ButtonPress`](ButtonPress.md)



---


### Public Methods for [`ButtonPress`](ButtonPress.md)

##### <a id='matchbutton'></a>public static function __matchButton__(mode, pressed, slot)

_Gets the ButtonPress as defined with [`GrabMode`](GrabMode.md), the button id, and the slot id_

Argument | Type | Description  
--- | --- | --- 
mode | [`GrabMode`](GrabMode.md) | the [`GrabMode`](GrabMode.md) to use with matching
pressed | `int` | the button id from the packet
slot | `int` | the slot id

Returns | Description
--- | --- 
[`ButtonPress`](ButtonPress.md) | the ButtonPress constant that matches with the arguments


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

