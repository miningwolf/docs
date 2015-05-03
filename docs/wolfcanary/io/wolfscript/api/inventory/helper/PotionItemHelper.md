## PotionItemHelper __class__

>io.wolfscript.api.inventory.helper.PotionItemHelper
>Extends `ItemHelper`

---

### Class Overview

Potion Item Helper!

Method | Type   
--- | :--- 
static function __removeAllCustomPotionEffects__(potion) <br> _Checks a Item for being a Potion_ | `boolean`



---


### Public Methods for [`PotionItemHelper`](PotionItemHelper.md)

##### <a id='removeallcustompotioneffects'></a>public static function __removeAllCustomPotionEffects__(potion)

_Checks a Item for being a Potion_

Argument | Type | Description  
--- | --- | --- 
potion | [`Item`](..\Item.md) | the [`Item`](..\Item.md) to check

Returns | Description
--- | --- 
`boolean` | `true` if Potion; `false` if not /
    public static boolean isPotion(Item potion) {
        return potion != null && potion.getType() == Potion;
    }

    /** Checks a Potion for custom [`PotionEffect`](..\..\potion\PotionEffect.md)(s)


---
---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

