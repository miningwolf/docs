## PotionEffectType __enum__

>io.wolfscript.api.potion.PotionEffectType

---

### Enum Overview

Enum of all possible potion types.

Item | Type   
--- | :--- 
MOVESPEED: 1<br> _MOVESPEED PotionEffectType_ | PotionEffectType
MOVESLOWDOWN: 2<br> _MOVESLOWDOWN PotionEffectType_ | PotionEffectType
DIGSPEED: 3<br> _DIGSPEED PotionEffectType_ | PotionEffectType
DIGSLOWDOWN: 4<br> _DIGSLOWDOWN PotionEffectType_ | PotionEffectType
DAMAGEBOOST: 5<br> _DAMAGEBOOST PotionEffectType_ | PotionEffectType
HEAL: 6<br> _HEAL PotionEffectType_ | PotionEffectType
HARM: 7<br> _HARM PotionEffectType_ | PotionEffectType
JUMP: 8<br> _JUMP PotionEffectType_ | PotionEffectType
CONFUSION: 9<br> _CONFUSION PotionEffectType_ | PotionEffectType
REGENERATION: 10<br> _REGENERATION PotionEffectType_ | PotionEffectType
RESISTANCE: 11<br> _RESISTANCE PotionEffectType_ | PotionEffectType
FIRERESISTANCE: 12<br> _FIRERESISTANCE PotionEffectType_ | PotionEffectType
WATERBREATHING: 13<br> _WATERBREATHING PotionEffectType_ | PotionEffectType
INVISIBILITY: 14<br> _INVISIBILITY PotionEffectType_ | PotionEffectType
BLINDNESS: 15<br> _BLINDNESS PotionEffectType_ | PotionEffectType
NIGHTVISION: 16<br> _NIGHTVISION PotionEffectType_ | PotionEffectType
HUNGER: 17<br> _HUNGER PotionEffectType_ | PotionEffectType
WEAKNESS: 18<br> _WEAKNESS PotionEffectType_ | PotionEffectType
POISON: 19<br> _POISON PotionEffectType_ | PotionEffectType
WITHER: 20<br> _WITHER PotionEffectType_ | PotionEffectType
HEALTHBOOST: 21<br> _HEALTHBOOST PotionEffectType_ | PotionEffectType
ABSORPTION: 22<br> _ABSORPTION PotionEffectType_ | PotionEffectType
SATURATION: 23<br> _SATURATION PotionEffectType_ | PotionEffectType
 readonly property __ID__ <br> _Get: Gets the PotionEffect ID_ | `int`
static function __fromId__(int) <br> _Gets a PotionEffectType from an ID_ | [`PotionEffectType`](PotionEffectType.md)
static function __fromName__(name) <br> _Get a [`PotionEffectType`](PotionEffectType.md) from a name_ | [`PotionEffectType`](PotionEffectType.md)



---


### Public Properties for [`PotionEffectType`](PotionEffectType.md)

##### <a id='id'></a>public  readonly property __ID__

_Get: Gets the PotionEffect ID_

Get | Description
--- | --- 
`int` | the id



---

### Public Methods for [`PotionEffectType`](PotionEffectType.md)

##### <a id='fromid'></a>public static function __fromId__(int)

_Gets a PotionEffectType from an ID_

Argument | Type | Description  
--- | --- | --- 
int | `final` | int argument

Returns | Description
--- | --- 
[`PotionEffectType`](PotionEffectType.md) | the PotionEffectType


##### <a id='fromname'></a>public static function __fromName__(name)

_Get a [`PotionEffectType`](PotionEffectType.md) from a name_

Argument | Type | Description  
--- | --- | --- 
name | `String` | the name of the PotionEffect

Returns | Description
--- | --- 
[`PotionEffectType`](PotionEffectType.md) | PotionType or null if not valid name


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

