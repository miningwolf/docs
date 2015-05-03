## ButtonPress __enum__

>io.wolfscript.api.inventory.slot.ButtonPress

---

### Enum Overview

Button press enum for SlotClick

Item | Type   
--- | :--- 
UNKNOWN: <br> _Left Mouse Button_ | ButtonPress
static function __matchButton__(mode, pressed, slot) <br> _Left Mouse Button_ | [`ButtonPress`](ButtonPress.md)



---


### Public Methods for [`ButtonPress`](ButtonPress.md)

##### <a id='matchbutton'></a>public static function __matchButton__(mode, pressed, slot)

_Left Mouse Button /
    LEFT,
    //
    /** Right Mouse Button /
    RIGHT,
    //
    /** Middle Mouse Button /
    MIDDLE,
    //
    /** Hotbar 1 /
    KEY_1,
    //
    /** Hotbar 2 /
    KEY_2,
    //
    /** Hotbar 3 /
    KEY_3,
    //
    /** Hotbar 4 /
    KEY_4,
    //
    /** Hotbar 5 /
    KEY_5,
    //
    /** Hotbar 6 /
    KEY_6,
    //
    /** Hotbar 7 /
    KEY_7,
    //
    /** Hotbar 8 /
    KEY_8,
    //
    /** Hotbar 9 /
    KEY_9,
    //
    /** Drop Key /
    KEY_DROP,
    //
    /** Control + Drop key /
    CTRL_DROP,
    //
    /** Starting Painting with Left Click (or Middle Click) /
    LEFT_PAINT_START,
    //
    /** Slot passed with Left Click Paint (or Middle Click) /
    LEFT_PAINT_PROGRESS,
    //
    /** Left Click Paint end (or Middle Click) /
    LEFT_PAINT_END,
    //
    /** Starting Painting with Right Click /
    RIGHT_PAINT_START,
    //
    /** Slot passed with Right Click Paint /
    RIGHT_PAINT_PROGRESS,
    //
    /** Right Click Paint end /
    RIGHT_PAINT_END,
    //
    /** Unknown button pressed /
    UNKNOWN,
    //
    ;

    /** Gets the ButtonPress as defined with [`GrabMode`](GrabMode.md), the button id, and the slot id_

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
	

