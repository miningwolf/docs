## Enderman __interface__

>io.wolfscript.entity.Enderman
>Extends [`Monster`](Monster.md)

---

### Interface Overview

Represents an Enderman.

Method | Type   
--- | :--- 
  property __CarriedMaterial__ <br> _Get: Get the id and data of the block that the Enderman is carrying.<br>Set: Set the id and data of the block that the Enderman is carring._ | [`MaterialData`](../material/MaterialData.md)
 |
__Inherited items from [`Monster`](Monster.md)__ |
 |
__Inherited items from [`Creature`](Creature.md)__ |
  property __Target__ <br> _Get: Gets the current target of this Creature<br>Set: Instructs this Creature to set the specified LivingEntity as its_ | `LivingEntity`







---


### Public Properties for [`Enderman`](Enderman.md)

##### <a id='carriedmaterial'></a>public   property __CarriedMaterial__

_Get: Get the id and data of the block that the Enderman is carrying.<br>Set: Set the id and data of the block that the Enderman is carring._

Get | Description
--- | --- 
[`MaterialData`](../material/MaterialData.md) | MaterialData containing the id and data of the block

Set | Type | Description  
--- | --- | --- 
material | [`MaterialData`](../material/MaterialData.md) | data to set the carried block to


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
	

