## Zombie __interface__

>io.wolfscript.entity.Zombie
>Extends [`Monster`](Monster.md)

---

### Interface Overview

Represents a Zombie.

Method | Type   
--- | :--- 
 writeonly property __Villager__ <br> _Set: Gets whether the zombie is a baby_ | `void`
 |
__Inherited items from [`Monster`](Monster.md)__ |
 |
__Inherited items from [`Creature`](Creature.md)__ |
 readonly property __Target__ <br> _Get: Instructs this Creature to set the specified LivingEntity as its_ | `LivingEntity`







---


### Public Properties for [`Zombie`](Zombie.md)

##### <a id='villager'></a>public  writeonly property __Villager__

_Set: Gets whether the zombie is a baby_

Get | Description
--- | --- 
`void` | Whether the zombie is a baby /
    public boolean isBaby();

    /** Sets whether the zombie is a baby

Set | Type | Description  
--- | --- | --- 
flag | `boolean` | Whether the zombie is a baby /
    public void setBaby(boolean flag);

    /** Gets whether the zombie is a villager


---

### Public Properties for [`Creature`](Creature.md)

##### <a id='target'></a>public  readonly property __Target__

_Get: Instructs this Creature to set the specified LivingEntity as its target. <p> Hostile creatures may attack their target, and friendly creatures may follow their target._

Get | Description
--- | --- 
`LivingEntity` | Current target of this creature, or null if none exists



---
---


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

