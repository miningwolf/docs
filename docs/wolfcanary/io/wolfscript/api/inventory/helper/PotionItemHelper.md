## PotionItemHelper __class__

>io.wolfscript.api.inventory.helper.PotionItemHelper
>Extends `ItemHelper`

---

### Class Overview

Potion Item Helper!

Method | Type   
--- | :--- 
static writeonly property __CustomPotionEffects__ <br> _Set: Sets custom [`PotionEffect`](../../potion/PotionEffect.md)(s) to the Potion [`Item`](../Item.md)_ | `boolean`
static function __addCustomPotionEffects__(potion) <br> _Adds custom [`PotionEffect`](../../potion/PotionEffect.md)(s) to the Potion [`Item`](../Item.md)_ | `boolean`
static function __getCustomPotionEffects__(potion) <br> _Gets an array of [`PotionEffect`](../../potion/PotionEffect.md) attached to the Potion if any_ | `PotionEffect[]`
static function __hasCustomPotionEffects__(potion) <br> _Checks a Potion for custom [`PotionEffect`](../../potion/PotionEffect.md)(s)_ | `boolean`
static function __isPotion__(potion) <br> _Checks a Item for being a Potion_ | `boolean`
static function __removeAllCustomPotionEffects__(potion) <br> _Removes all custom [`PotionEffect`](../../potion/PotionEffect.md)(s) from the Potion_ | `boolean`
static function __removeCustomPotionEffects__(potion) <br> _Removes specified custom [`PotionEffect`](../../potion/PotionEffect.md)(s) from the Potion_ | `boolean`



---


### Public Properties for [`PotionItemHelper`](PotionItemHelper.md)

##### <a id='custompotioneffects'></a>public static writeonly property __CustomPotionEffects__

_Set: Sets custom [`PotionEffect`](../../potion/PotionEffect.md)(s) to the Potion [`Item`](../Item.md)_

Get | Description
--- | --- 
`boolean` | `true` if successful; `false` if not

Set | Type | Description  
--- | --- | --- 
potion | [`Item`](../Item.md) | the potion to set custom effects to


---

### Public Methods for [`PotionItemHelper`](PotionItemHelper.md)

##### <a id='addcustompotioneffects'></a>public static function __addCustomPotionEffects__(potion)

_Adds custom [`PotionEffect`](../../potion/PotionEffect.md)(s) to the Potion [`Item`](../Item.md)_

Argument | Type | Description  
--- | --- | --- 
potion | [`Item`](../Item.md) | the potion to add custom effects to

Returns | Description
--- | --- 
`boolean` | `true` if successful; `false` if not


##### <a id='getcustompotioneffects'></a>public static function __getCustomPotionEffects__(potion)

_Gets an array of [`PotionEffect`](../../potion/PotionEffect.md) attached to the Potion if any_

Argument | Type | Description  
--- | --- | --- 
potion | [`Item`](../Item.md) | the potion to get effects for

Returns | Description
--- | --- 
`PotionEffect[]` | the [`PotionEffect`](../../potion/PotionEffect.md) array or `null` if no effects


##### <a id='hascustompotioneffects'></a>public static function __hasCustomPotionEffects__(potion)

_Checks a Potion for custom [`PotionEffect`](../../potion/PotionEffect.md)(s)_

Argument | Type | Description  
--- | --- | --- 
potion | [`Item`](../Item.md) | the potion to be checked

Returns | Description
--- | --- 
`boolean` | `true` if have custom effect; `false` if not


##### <a id='ispotion'></a>public static function __isPotion__(potion)

_Checks a Item for being a Potion_

Argument | Type | Description  
--- | --- | --- 
potion | [`Item`](../Item.md) | the [`Item`](../Item.md) to check

Returns | Description
--- | --- 
`boolean` | `true` if Potion; `false` if not


##### <a id='removeallcustompotioneffects'></a>public static function __removeAllCustomPotionEffects__(potion)

_Removes all custom [`PotionEffect`](../../potion/PotionEffect.md)(s) from the Potion_

Argument | Type | Description  
--- | --- | --- 
potion | [`Item`](../Item.md) | the potion to remove effects from

Returns | Description
--- | --- 
`boolean` | `true` if successful; `false` if not


##### <a id='removecustompotioneffects'></a>public static function __removeCustomPotionEffects__(potion)

_Removes specified custom [`PotionEffect`](../../potion/PotionEffect.md)(s) from the Potion_

Argument | Type | Description  
--- | --- | --- 
potion | [`Item`](../Item.md) | the potion to remove effects from

Returns | Description
--- | --- 
`boolean` | `true` if successful; `false` if not


---
---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

