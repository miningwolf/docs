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
 readonly property __ColorCode__ <br> _Get: Gets the Color Code as used for Wool and Wolf Collars_ | `int`
 readonly property __DecimalCode__ <br> _Get: Gets the decimal representation of the DyeColor_ | `int`
 readonly property __DyeColorCode__ <br> _Get: Gets the Color Code as used for Dyes_ | `int`
static function __fromColorCode__(code) <br> _Gets a DyeColor from a Color Code_ | [`DyeColor`](DyeColor.md)
static function __fromDecimalCode__(code) <br> _Gets the DyeColor from the decimal code_ | [`DyeColor`](DyeColor.md)
static function __fromDyeColorCode__(code) <br> _Gets a DyeColor from a Dye Color Code_ | [`DyeColor`](DyeColor.md)
static function __rawColorFromRGB__(red, green, blue) <br> _Gets a raw color code from R G B values_ | `int`



---


### Public Properties for [`DyeColor`](DyeColor.md)

##### <a id='colorcode'></a>public  readonly property __ColorCode__

_Get: Gets the Color Code as used for Wool and Wolf Collars_

Get | Description
--- | --- 
`int` | color code



##### <a id='decimalcode'></a>public  readonly property __DecimalCode__

_Get: Gets the decimal representation of the DyeColor_

Get | Description
--- | --- 
`int` | the decimal code



##### <a id='dyecolorcode'></a>public  readonly property __DyeColorCode__

_Get: Gets the Color Code as used for Dyes_

Get | Description
--- | --- 
`int` | dye color code



---

### Public Methods for [`DyeColor`](DyeColor.md)

##### <a id='fromcolorcode'></a>public static function __fromColorCode__(code)

_Gets a DyeColor from a Color Code_

Argument | Type | Description  
--- | --- | --- 
code | `int` | the code to get a DyeColor for

Returns | Description
--- | --- 
[`DyeColor`](DyeColor.md) | the DyeColor


##### <a id='fromdecimalcode'></a>public static function __fromDecimalCode__(code)

_Gets the DyeColor from the decimal code_

Argument | Type | Description  
--- | --- | --- 
code | `int` | the decimal code to get a DyeColor for

Returns | Description
--- | --- 
[`DyeColor`](DyeColor.md) | the DyeColor


##### <a id='fromdyecolorcode'></a>public static function __fromDyeColorCode__(code)

_Gets a DyeColor from a Dye Color Code_

Argument | Type | Description  
--- | --- | --- 
code | `int` | the dye code to get a DyeColor for

Returns | Description
--- | --- 
[`DyeColor`](DyeColor.md) | the DyeColor


##### <a id='rawcolorfromrgb'></a>public static function __rawColorFromRGB__(red, green, blue)

_Gets a raw color code from R G B values_

Argument | Type | Description  
--- | --- | --- 
red | `int` | the red color
green | `int` | the green color
blue | `int` | the blue color

Returns | Description
--- | --- 
`int` | the rgb color


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

