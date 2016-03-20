## PotionType __enum__

>io.wolfscript.potion.PotionType

---

### Enum Overview

This enum reflects and matches each potion state that can be obtained from the Creative mode inventory

Item | Type   
--- | :--- 
null: <br> _null PotionType_ | PotionType
false: <br> _false PotionType_ | PotionType
null: <br> _null PotionType_ | PotionType
false: <br> _false PotionType_ | PotionType
null: <br> _null PotionType_ | PotionType
false: <br> _false PotionType_ | PotionType
null: <br> _null PotionType_ | PotionType
false: <br> _false PotionType_ | PotionType
null: <br> _null PotionType_ | PotionType
false: <br> _false PotionType_ | PotionType
PotionEffectType.NIGHT_VISION: <br> _PotionEffectType.NIGHT_VISION PotionType_ | PotionType
false: <br> _false PotionType_ | PotionType
PotionEffectType.INVISIBILITY: <br> _PotionEffectType.INVISIBILITY PotionType_ | PotionType
false: <br> _false PotionType_ | PotionType
PotionEffectType.JUMP: <br> _PotionEffectType.JUMP PotionType_ | PotionType
true: <br> _true PotionType_ | PotionType
PotionEffectType.FIRE_RESISTANCE: <br> _PotionEffectType.FIRE_RESISTANCE PotionType_ | PotionType
false: <br> _false PotionType_ | PotionType
PotionEffectType.SPEED: <br> _PotionEffectType.SPEED PotionType_ | PotionType
true: <br> _true PotionType_ | PotionType
PotionEffectType.SLOW: <br> _PotionEffectType.SLOW PotionType_ | PotionType
false: <br> _false PotionType_ | PotionType
PotionEffectType.WATER_BREATHING: <br> _PotionEffectType.WATER_BREATHING PotionType_ | PotionType
false: <br> _false PotionType_ | PotionType
PotionEffectType.HEAL: <br> _PotionEffectType.HEAL PotionType_ | PotionType
true: <br> _true PotionType_ | PotionType
PotionEffectType.HARM: <br> _PotionEffectType.HARM PotionType_ | PotionType
true: <br> _true PotionType_ | PotionType
PotionEffectType.POISON: <br> _PotionEffectType.POISON PotionType_ | PotionType
true: <br> _true PotionType_ | PotionType
PotionEffectType.REGENERATION: <br> _PotionEffectType.REGENERATION PotionType_ | PotionType
true: <br> _true PotionType_ | PotionType
PotionEffectType.INCREASE_DAMAGE: <br> _PotionEffectType.INCREASE_DAMAGE PotionType_ | PotionType
true: <br> _true PotionType_ | PotionType
PotionEffectType.WEAKNESS: <br> _PotionEffectType.WEAKNESS PotionType_ | PotionType
false: <br> _false PotionType_ | PotionType
PotionEffectType.LUCK: <br> _PotionEffectType.LUCK PotionType_ | PotionType
false: <br> _false PotionType_ | PotionType
 readonly property __EffectType__ <br> _EffectType property_ | [`PotionEffectType`](PotionEffectType.md)
 readonly property __MaxLevel__ <br> _MaxLevel property_ | `int`
 function __isExtendable__() <br> _Checks if the potion type has an extended state._ | `boolean`
 function __isInstant__() <br> _isInstant method_ | `boolean`
 function __isUpgradeable__() <br> _Checks if the potion type has an upgraded state._ | `boolean`



---


### Public Properties for [`PotionType`](PotionType.md)

##### <a id='damagevalue'></a>public  readonly property __DamageValue__
_Deprecated: Non-functional_

_DamageValue property_

Get | 
--- | 
`int` |



##### <a id='effecttype'></a>public  readonly property __EffectType__

_EffectType property_

Get | 
--- | 
[`PotionEffectType`](PotionEffectType.md) |



##### <a id='maxlevel'></a>public  readonly property __MaxLevel__

_MaxLevel property_

Get | 
--- | 
`int` |



---

### Public Methods for [`PotionType`](PotionType.md)

##### <a id='getbydamagevalue'></a>public static function __getByDamageValue__(damage)
_Deprecated: Non-functional_

_getByDamageValue method_

Argument | Type | Description  
--- | --- | --- 
damage | `int` | damage argument

Returns | 
--- | 
[`PotionType`](PotionType.md) |


##### <a id='getbyeffect'></a>public static function __getByEffect__(effectType)
_Deprecated: Misleading_

_getByEffect method_

Argument | Type | Description  
--- | --- | --- 
effectType | [`PotionEffectType`](PotionEffectType.md) | effectType argument

Returns | 
--- | 
[`PotionType`](PotionType.md) |


##### <a id='isextendable'></a>public  function __isExtendable__()

_Checks if the potion type has an extended state. This refers to the extended duration potions_

Returns | Description
--- | --- 
`boolean` | true if the potion type can be extended


##### <a id='isinstant'></a>public  function __isInstant__()

_isInstant method_

Returns | 
--- | 
`boolean` |


##### <a id='isupgradeable'></a>public  function __isUpgradeable__()

_Checks if the potion type has an upgraded state. This refers to whether or not the potion type can be Tier 2, such as Potion of Fire Resistance II._

Returns | Description
--- | --- 
`boolean` | true if the potion type can be upgraded;


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

