## EntityEffect __enum__

>io.wolfscript.EntityEffect

---

### Enum Overview

A list of all Effects that can happen to entities.

Item | Type   
--- | :--- 
HURT: 2<br> _When mobs get hurt._ | EntityEffect
DEATH: 3<br> _DEATH EntityEffect_ | EntityEffect
WOLF_SMOKE: 6<br> _The smoke when taming a wolf fails._ | EntityEffect
WOLF_HEARTS: 7<br> _The hearts when taming a wolf succeeds._ | EntityEffect
WOLF_SHAKE: 8<br> _When a wolf shakes (after being wet)._ | EntityEffect
SHEEP_EAT: 10<br> _When a sheep eats a LONG_GRASS block._ | EntityEffect
IRON_GOLEM_ROSE: 11<br> _When an Iron Golem gives a rose._ | EntityEffect
VILLAGER_HEART: 12<br> _Hearts from a villager._ | EntityEffect
VILLAGER_ANGRY: 13<br> _When a villager is angry._ | EntityEffect
VILLAGER_HAPPY: 14<br> _Happy particles from a villager._ | EntityEffect
WITCH_MAGIC: 15<br> _Magic particles from a witch._ | EntityEffect
ZOMBIE_TRANSFORM: 16<br> _When a zombie transforms into a villager by shaking violently._ | EntityEffect
FIREWORK_EXPLODE: 17<br> _When a firework explodes._ | EntityEffect



---


### Public Properties for [`EntityEffect`](EntityEffect.md)

##### <a id='data'></a>public  readonly property __Data__
_Deprecated: Magic value_

_Get: Gets the data value of this EntityEffect_

Get | Description
--- | --- 
`byte` | The data value



---

### Public Methods for [`EntityEffect`](EntityEffect.md)

##### <a id='getbydata'></a>public static function __getByData__(byte)
_Deprecated: Magic value_

_Gets the EntityEffect with the given data value_

Argument | Type | Description  
--- | --- | --- 
byte | `final` | byte argument

Returns | Description
--- | --- 
[`EntityEffect`](EntityEffect.md) | The [`EntityEffect`](EntityEffect.md) representing the given value, or null if it doesn't exist


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

