## Enderman __interface__

>io.wolfscript.entity.Enderman
>Extends [`Monster`](Monster.md)

---

### Interface Overview

Represents an Enderman.

Method | Type   
--- | :--- 
 writeonly property __CarriedMaterial__ <br> _Set: Get the id and data of the block that the Enderman is carrying._ | `void`
 |
__Inherited items from [`Monster`](Monster.md)__ |
 |
__Inherited items from [`Creature`](Creature.md)__ |
 readonly property __Target__ <br> _Get: Instructs this Creature to set the specified LivingEntity as its_ | `LivingEntity`







---


### Public Properties for [`Enderman`](Enderman.md)

##### <a id='carriedmaterial'></a>public  writeonly property __CarriedMaterial__

_Set: Get the id and data of the block that the Enderman is carrying._

Get | Description
--- | --- 
`void` | MaterialData containing the id and data of the block /
    public MaterialData getCarriedMaterial();

    /** Set the id and data of the block that the Enderman is carring.

Set | Type | Description  
--- | --- | --- 
material | [`MaterialData`](..\material\MaterialData.md) | data to set the carried block to


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
	

