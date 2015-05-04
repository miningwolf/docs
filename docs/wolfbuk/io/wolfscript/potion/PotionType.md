## PotionType __enum__

>io.wolfscript.potion.PotionType

---

### Enum Overview

enum PotionType

Item | Type   
--- | :--- 
0: <br> _0 PotionType_ | PotionType
null: <br> _null PotionType_ | PotionType
1: <br> _1 PotionType_ | PotionType
PotionEffectType.REGENERATION: <br> _PotionEffectType.REGENERATION PotionType_ | PotionType
2: <br> _2 PotionType_ | PotionType
PotionEffectType.SPEED: <br> _PotionEffectType.SPEED PotionType_ | PotionType
3: <br> _3 PotionType_ | PotionType
PotionEffectType.FIRE_RESISTANCE: <br> _PotionEffectType.FIRE_RESISTANCE PotionType_ | PotionType
4: <br> _4 PotionType_ | PotionType
PotionEffectType.POISON: <br> _PotionEffectType.POISON PotionType_ | PotionType
5: <br> _5 PotionType_ | PotionType
PotionEffectType.HEAL: <br> _PotionEffectType.HEAL PotionType_ | PotionType
6: <br> _6 PotionType_ | PotionType
PotionEffectType.NIGHT_VISION: <br> _PotionEffectType.NIGHT_VISION PotionType_ | PotionType
8: <br> _8 PotionType_ | PotionType
PotionEffectType.WEAKNESS: <br> _PotionEffectType.WEAKNESS PotionType_ | PotionType
9: <br> _9 PotionType_ | PotionType
PotionEffectType.INCREASE_DAMAGE: <br> _PotionEffectType.INCREASE_DAMAGE PotionType_ | PotionType
10: <br> _10 PotionType_ | PotionType
PotionEffectType.SLOW: <br> _PotionEffectType.SLOW PotionType_ | PotionType
11: <br> _11 PotionType_ | PotionType
PotionEffectType.JUMP: <br> _PotionEffectType.JUMP PotionType_ | PotionType
12: <br> _12 PotionType_ | PotionType
PotionEffectType.HARM: <br> _PotionEffectType.HARM PotionType_ | PotionType
13: <br> _13 PotionType_ | PotionType
PotionEffectType.WATER_BREATHING: <br> _PotionEffectType.WATER_BREATHING PotionType_ | PotionType
14: <br> _14 PotionType_ | PotionType
PotionEffectType.INVISIBILITY: <br> _PotionEffectType.INVISIBILITY PotionType_ | PotionType
 readonly property __EffectType__ <br> _EffectType property_ | [`PotionEffectType`](PotionEffectType.md)
 readonly property __MaxLevel__ <br> _MaxLevel property_ | `int`
static function __getByEffect__(effectType) <br> _getByEffect method_ | [`PotionType`](PotionType.md)
 function __isInstant__() <br> _isInstant method_ | `boolean`



---


### Public Properties for [`PotionType`](PotionType.md)

##### <a id='damagevalue'></a>public  readonly property __DamageValue__
_Deprecated: Magic value_

_DamageValue property_

Get | Description
--- | --- 
`int` | the damage value



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
_Deprecated: Magic value_

_getByDamageValue method_

Argument | Type | Description  
--- | --- | --- 
damage | `int` | the damage value

Returns | Description
--- | --- 
[`PotionType`](PotionType.md) | the matching potion type or null


##### <a id='getbyeffect'></a>public static function __getByEffect__(effectType)

_getByEffect method_

Argument | Type | Description  
--- | --- | --- 
effectType | [`PotionEffectType`](PotionEffectType.md) | effectType argument

Returns | 
--- | 
[`PotionType`](PotionType.md) |


##### <a id='isinstant'></a>public  function __isInstant__()

_isInstant method_

Returns | 
--- | 
`boolean` |


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

