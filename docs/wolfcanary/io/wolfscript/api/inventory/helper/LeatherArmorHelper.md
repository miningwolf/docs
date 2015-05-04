## LeatherArmorHelper __class__

>io.wolfscript.api.inventory.helper.LeatherArmorHelper

---

### Class Overview

Leather Armor Helper

Method | Type   
--- | :--- 
static function __getColor__(leather_armor) <br> _Gets the color of the Leather armor_ | `int`
static function __isColored__(leather_armor) <br> _Checks if the Leather Armor has color_ | `boolean`
static function __isLeatherArmor__(leather_armor) <br> _Checks if the specified [`Item`](../Item.md) is Leather armor_ | `boolean`
static function __setColor__(leather_armor, rgb) <br> _Sets the color of the armor based on an RGB value_ | `void`
static function __setColor__(leather_armor, red, green, blue) <br> _Sets the color of the armor with specified red, green, and blue color values_ | `void`



---


### Public Methods for [`LeatherArmorHelper`](LeatherArmorHelper.md)

##### <a id='getcolor'></a>public static function __getColor__(leather_armor)

_Gets the color of the Leather armor_

Argument | Type | Description  
--- | --- | --- 
leather_armor | [`Item`](../Item.md) | the leather armor to get color of

Returns | Description
--- | --- 
`int` | the color of the armor or -1 if there is no color


##### <a id='iscolored'></a>public static function __isColored__(leather_armor)

_Checks if the Leather Armor has color_

Argument | Type | Description  
--- | --- | --- 
leather_armor | [`Item`](../Item.md) | the leather armor to be checked

Returns | Description
--- | --- 
`boolean` | `true` if colored; `false` if not


##### <a id='isleatherarmor'></a>public static function __isLeatherArmor__(leather_armor)

_Checks if the specified [`Item`](../Item.md) is Leather armor_

Argument | Type | Description  
--- | --- | --- 
leather_armor | [`Item`](../Item.md) | the [`Item`](../Item.md) to be checked

Returns | Description
--- | --- 
`boolean` | `true` if leather armor; `false` if not


##### <a id='setcolor'></a>public static function __setColor__(leather_armor, rgb)

_Sets the color of the armor based on an RGB value_

Argument | Type | Description  
--- | --- | --- 
leather_armor | [`Item`](../Item.md) | the leather armor to set color of
rgb | `int` | the RGB color value to set

Returns | 
--- | 
`void` |


##### <a id='setcolor'></a>public static function __setColor__(leather_armor, red, green, blue)

_Sets the color of the armor with specified red, green, and blue color values_

Argument | Type | Description  
--- | --- | --- 
leather_armor | [`Item`](../Item.md) | the leather armor to set color of
red | `int` | the red color value
green | `int` | the green color value
blue | `int` | the blue color value

Returns | 
--- | 
`void` |


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

