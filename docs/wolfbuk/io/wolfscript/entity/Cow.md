## Cow __interface__

>io.wolfscript.entity.Cow
>Extends [`Animals`](Animals.md)

---

### Interface Overview

Represents a Cow.

Method | Type   
--- | :--- 
 |
__Inherited items from [`Animals`](Animals.md)__ |
 |
__Inherited items from [`Ageable`](Ageable.md)__ |
 writeonly property __Breed__ <br> _Set: Gets the age of this animal._ | `void`
 |
__Inherited items from [`Creature`](Creature.md)__ |
 readonly property __Target__ <br> _Get: Instructs this Creature to set the specified LivingEntity as its_ | `LivingEntity`









---


### Public Properties for [`Ageable`](Ageable.md)

##### <a id='breed'></a>public  writeonly property __Breed__

_Set: Gets the age of this animal._

Get | Description
--- | --- 
`void` | Age /
    public int getAge();

    /** Sets the age of this animal.

Set | Type | Description  
--- | --- | --- 
breed | `boolean` | breedability of the animal


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


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

