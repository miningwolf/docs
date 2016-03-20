## PotionBrewer __interface__

>io.wolfscript.potion.PotionBrewer

---

### Interface Overview

Represents a brewer that can create [`PotionEffect`](PotionEffect.md)s.

Method | Type   
--- | :--- 
 function __createEffect__(potion, duration, amplifier) <br> _Creates a [`PotionEffect`](PotionEffect.md) from the given [`PotionEffectType`](PotionEffectType.md),_ | [`PotionEffect`](PotionEffect.md)
 function __getEffects__(type, upgraded, extended) <br> _Returns a collection of [`PotionEffect`](PotionEffect.md) that would be applied from_ | `Collection<PotionEffect>`



---


### Public Methods for [`PotionBrewer`](PotionBrewer.md)

##### <a id='createeffect'></a>public  function __createEffect__(potion, duration, amplifier)

_Creates a [`PotionEffect`](PotionEffect.md) from the given [`PotionEffectType`](PotionEffectType.md), applying duration modifiers and checks._

Argument | Type | Description  
--- | --- | --- 
potion | [`PotionEffectType`](PotionEffectType.md) | The type of potion
duration | `int` | The duration in ticks
amplifier | `int` | The amplifier of the effect

Returns | Description
--- | --- 
[`PotionEffect`](PotionEffect.md) | The resulting potion effect


##### <a id='geteffects'></a>public  function __getEffects__(type, upgraded, extended)

_Returns a collection of [`PotionEffect`](PotionEffect.md) that would be applied from a potion with the given type._

Argument | Type | Description  
--- | --- | --- 
type | [`PotionType`](PotionType.md) | The type of the potion
upgraded | `boolean` | upgraded argument
extended | `boolean` | extended argument

Returns | Description
--- | --- 
`Collection<PotionEffect>` | The list of effects


##### <a id='geteffectsfromdamage'></a>public  function __getEffectsFromDamage__(damage)
_Deprecated: Non-Functional_

_Returns a collection of [`PotionEffect`](PotionEffect.md) that would be applied from a potion with the given data value._

Argument | Type | Description  
--- | --- | --- 
damage | `int` | The data value of the potion

Returns | Description
--- | --- 
`Collection<PotionEffect>` | The list of effects


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

