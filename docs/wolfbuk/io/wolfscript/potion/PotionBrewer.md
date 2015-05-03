## PotionBrewer __interface__

>io.wolfscript.potion.PotionBrewer

---

### Interface Overview

Represents a brewer that can create [`PotionEffect`](PotionEffect.md)s.

Method | Type   
--- | :--- 



---


### Public Methods for [`PotionBrewer`](PotionBrewer.md)

##### <a id='geteffectsfromdamage'></a>public  function __getEffectsFromDamage__(damage)
_Deprecated: Magic value_

_Creates a [`PotionEffect`](PotionEffect.md) from the given [`PotionEffectType`](PotionEffectType.md), applying duration modifiers and checks._

Argument | Type | Description  
--- | --- | --- 
damage | `int` | The data value of the potion

Returns | Description
--- | --- 
`Collection<PotionEffect>` | The resulting potion effect /
    public PotionEffect createEffect(PotionEffectType potion, int duration, int amplifier);

    /** Returns a collection of [`PotionEffect`](PotionEffect.md) that would be applied from a potion with the given data value.


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

