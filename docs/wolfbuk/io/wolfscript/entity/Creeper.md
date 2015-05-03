## Creeper __interface__

>io.wolfscript.entity.Creeper
>Extends [`Monster`](Monster.md)

---

### Interface Overview

Represents a Creeper

Method | Type   
--- | :--- 
 writeonly property __Powered__ <br> _Set: Checks if this Creeper is powered (Electrocuted)_ | `void`
 |
__Inherited items from [`Monster`](Monster.md)__ |
 |
__Inherited items from [`Creature`](Creature.md)__ |
 readonly property __Target__ <br> _Get: Instructs this Creature to set the specified LivingEntity as its_ | `LivingEntity`







---


### Public Properties for [`Creeper`](Creeper.md)

##### <a id='powered'></a>public  writeonly property __Powered__

_Set: Checks if this Creeper is powered (Electrocuted)_

Get | Description
--- | --- 
`void` | true if this creeper is powered /
    public boolean isPowered();

    /** Sets the Powered status of this Creeper

Set | Type | Description  
--- | --- | --- 
value | `boolean` | New Powered status


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
	

