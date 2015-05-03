## IronGolem __interface__

>io.wolfscript.entity.IronGolem
>Extends [`Golem`](Golem.md)

---

### Interface Overview

An iron Golem that protects Villages.

Method | Type   
--- | :--- 
 writeonly property __PlayerCreated__ <br> _Set: Gets whether this iron golem was built by a player._ | `void`
 |
__Inherited items from [`Golem`](Golem.md)__ |
 |
__Inherited items from [`Creature`](Creature.md)__ |
 readonly property __Target__ <br> _Get: Instructs this Creature to set the specified LivingEntity as its_ | `LivingEntity`







---


### Public Properties for [`IronGolem`](IronGolem.md)

##### <a id='playercreated'></a>public  writeonly property __PlayerCreated__

_Set: Gets whether this iron golem was built by a player._

Get | Description
--- | --- 
`void` | Whether this iron golem was built by a player /
    public boolean isPlayerCreated();

    /** Sets whether this iron golem was built by a player or not.

Set | Type | Description  
--- | --- | --- 
playerCreated | `boolean` | true if you want to set the iron golem as being player created, false if you want it to be a natural village golem.


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
	

