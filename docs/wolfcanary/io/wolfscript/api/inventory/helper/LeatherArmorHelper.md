## LeatherArmorHelper __class__

>io.wolfscript.api.inventory.helper.LeatherArmorHelper

---

### Class Overview

Leather Armor Helper

Method | Type   
--- | :--- 
static function __setColor__(leather_armor, red, green, blue) <br> _Checks if the specified [`Item`](..\Item.md) is Leather armor_ | `void`



---


### Public Methods for [`LeatherArmorHelper`](LeatherArmorHelper.md)

##### <a id='setcolor'></a>public static function __setColor__(leather_armor, red, green, blue)

_Checks if the specified [`Item`](..\Item.md) is Leather armor_

Argument | Type | Description  
--- | --- | --- 
leather_armor | [`Item`](..\Item.md) | the [`Item`](..\Item.md) to be checked
red | `int` | the red color value
green | `int` | the green color value
blue | `int` | the blue color value

Returns | Description
--- | --- 
`void` | `true` if leather armor; `false` if not /
    public static boolean isLeatherArmor(Item leather_armor) {
        if (leather_armor == null) {
            return false;
        }
        switch (leather_armor.getId()) {
            case 298:
            case 299:
            case 300:
            case 301:
                return true;
            default:
                return false;
        }
    }

    /** Checks if the Leather Armor has color


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

