## DyeColor __enum__

>io.wolfscript.api.DyeColor

---

### Enum Overview

DyeColor

Item | Type   
--- | :--- 
WHITE: 15790320<br> _WHITE DyeColor_ | DyeColor
ORANGE: 15435844<br> _ORANGE DyeColor_ | DyeColor
MAGENTA: 12801229<br> _MAGENTA DyeColor_ | DyeColor
LIGHT_BLUE: 6719955<br> _LIGHT_BLUE DyeColor_ | DyeColor
YELLOW: 14602026<br> _YELLOW DyeColor_ | DyeColor
LIME: 4312372<br> _LIME DyeColor_ | DyeColor
PINK: 14188952<br> _PINK DyeColor_ | DyeColor
GRAY: 4408131<br> _GRAY DyeColor_ | DyeColor
LIGHT_GRAY: 11250603<br> _LIGHT_GRAY DyeColor_ | DyeColor
CYAN: 2651799<br> _CYAN DyeColor_ | DyeColor
PURPLE: 8073150<br> _PURPLE DyeColor_ | DyeColor
BLUE: 2437522<br> _BLUE DyeColor_ | DyeColor
BROWN: 5320730<br> _BROWN DyeColor_ | DyeColor
GREEN: 3887386<br> _GREEN DyeColor_ | DyeColor
RED: 11743532<br> _RED DyeColor_ | DyeColor
BLACK: 1973019<br> _BLACK DyeColor_ | DyeColor
CUSTOM: -1<br> _CUSTOM DyeColor_ | DyeColor
static function __rawColorFromRGB__(red, green, blue) <br> _Gets the Color Code as used for Wool and Wolf Collars_ | `int`



---


### Public Methods for [`DyeColor`](DyeColor.md)

##### <a id='rawcolorfromrgb'></a>public static function __rawColorFromRGB__(red, green, blue)

_Gets the Color Code as used for Wool and Wolf Collars_

Argument | Type | Description  
--- | --- | --- 
red | `int` | the red color
green | `int` | the green color
blue | `int` | the blue color

Returns | Description
--- | --- 
`int` | color code /
    public int getColorCode() {
        return ordinal();
    }

    /** Gets the Color Code as used for Dyes


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

