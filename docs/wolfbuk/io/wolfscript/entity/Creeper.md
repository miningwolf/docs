## Creeper __interface__

>io.wolfscript.entity.Creeper
>Extends [`Monster`](Monster.md)

---

### Interface Overview

Represents a Creeper

Method | Type   
--- | :--- 
 writeonly property __Powered__ <br> _Set: Sets the Powered status of this Creeper_ | `void`
 function __isPowered__() <br> _Checks if this Creeper is powered (Electrocuted)_ | `boolean`
 |
__Inherited items from [`Monster`](Monster.md)__ |
 |
__Inherited items from [`Creature`](Creature.md)__ |
  property __Target__ <br> _Get: Gets the current target of this Creature<br>Set: Instructs this Creature to set the specified LivingEntity as its_ | `LivingEntity`







---


### Public Properties for [`Creeper`](Creeper.md)

##### <a id='powered'></a>public  writeonly property __Powered__

_Set: Sets the Powered status of this Creeper_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
value | `boolean` | New Powered status


---

### Public Methods for [`Creeper`](Creeper.md)

##### <a id='ispowered'></a>public  function __isPowered__()

_Checks if this Creeper is powered (Electrocuted)_

Returns | Description
--- | --- 
`boolean` | true if this creeper is powered


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


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

