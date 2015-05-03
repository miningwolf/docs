## Guardian __interface__

>io.wolfscript.entity.Guardian
>Extends [`Monster`](Monster.md)

---

### Interface Overview

interface Guardian

Method | Type   
--- | :--- 
 writeonly property __Elder__ <br> _Set: Check if the Guardian is an elder Guardian_ | `void`
 |
__Inherited items from [`Monster`](Monster.md)__ |
 |
__Inherited items from [`Creature`](Creature.md)__ |
 readonly property __Target__ <br> _Get: Instructs this Creature to set the specified LivingEntity as its_ | `LivingEntity`







---


### Public Properties for [`Guardian`](Guardian.md)

##### <a id='elder'></a>public  writeonly property __Elder__

_Set: Check if the Guardian is an elder Guardian_

Get | Description
--- | --- 
`void` | true if the Guardian is an Elder Guardian, false if not /
    public boolean isElder();

    /** Set the Guardian to an elder Guardian or not

Set | Type | Description  
--- | --- | --- 
shouldBeElder | `boolean` | True if this Guardian should be a elder Guardian, false if not


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
	

