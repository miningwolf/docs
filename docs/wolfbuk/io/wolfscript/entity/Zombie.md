## Zombie __interface__

>io.wolfscript.entity.Zombie
>Extends [`Monster`](Monster.md)

---

### Interface Overview

Represents a Zombie.

Method | Type   
--- | :--- 
  property __VillagerProfession__ <br> _Get: Returns the villager profession of the zombie if the<br>Set: Sets whether the zombie is a villager_ | `Profession`
 writeonly property __Baby__ <br> _Set: Sets whether the zombie is a baby_ | `void`
 function __isBaby__() <br> _Gets whether the zombie is a baby_ | `boolean`
 function __isVillager__() <br> _Gets whether the zombie is a villager_ | `boolean`
 |
__Inherited items from [`Monster`](Monster.md)__ |
 |
__Inherited items from [`Creature`](Creature.md)__ |
  property __Target__ <br> _Get: Gets the current target of this Creature<br>Set: Instructs this Creature to set the specified LivingEntity as its_ | `LivingEntity`







---


### Public Properties for [`Zombie`](Zombie.md)

##### <a id='villagerprofession'></a>public   property __VillagerProfession__

_Get: Returns the villager profession of the zombie if the zombie is a villager<br>Set: Sets whether the zombie is a villager_

Get | Description
--- | --- 
`Profession` | the profession or null

Set | Type | Description  
--- | --- | --- 
profession | [`Profession`](Profession.md) | the profession of the villager or null to clear


##### <a id='baby'></a>public  writeonly property __Baby__

_Set: Sets whether the zombie is a baby_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
flag | `boolean` | Whether the zombie is a baby


##### <a id='villager'></a>public  writeonly property __Villager__
_Deprecated: Defaults to a basic villager_

_Set: Sets whether the zombie is a villager_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
flag | `boolean` | Whether the zombie is a villager


---

### Public Methods for [`Zombie`](Zombie.md)

##### <a id='isbaby'></a>public  function __isBaby__()

_Gets whether the zombie is a baby_

Returns | Description
--- | --- 
`boolean` | Whether the zombie is a baby


##### <a id='isvillager'></a>public  function __isVillager__()

_Gets whether the zombie is a villager_

Returns | Description
--- | --- 
`boolean` | Whether the zombie is a villager


---

### Public Properties for [`Creature`](Creature.md)

##### <a id='target'></a>public   property __Target__

_Get: Gets the current target of this Creature<br>Set: Instructs this Creature to set the specified LivingEntity as its target. <p> Hostile creatures may attack their target, and friendly creatures may follow their target._

Get | Description
--- | --- 
`LivingEntity` | Current target of this creature, or null if none exists

Set | Type | Description  
--- | --- | --- 
target | `LivingEntity` | New LivingEntity to target, or null to clear the target


---
---


---


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

