## Guardian __interface__

>io.wolfscript.entity.Guardian
>Extends [`Monster`](Monster.md)

---

### Interface Overview

interface Guardian

Method | Type   
--- | :--- 
 writeonly property __Elder__ <br> _Set: Set the Guardian to an elder Guardian or not_ | `void`
 function __isElder__() <br> _Check if the Guardian is an elder Guardian_ | `boolean`
 |
__Inherited items from [`Monster`](Monster.md)__ |
 |
__Inherited items from [`Creature`](Creature.md)__ |
  property __Target__ <br> _Get: Gets the current target of this Creature<br>Set: Instructs this Creature to set the specified LivingEntity as its_ | `LivingEntity`







---


### Public Properties for [`Guardian`](Guardian.md)

##### <a id='elder'></a>public  writeonly property __Elder__

_Set: Set the Guardian to an elder Guardian or not_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
shouldBeElder | `boolean` | True if this Guardian should be a elder Guardian, false if not


---

### Public Methods for [`Guardian`](Guardian.md)

##### <a id='iselder'></a>public  function __isElder__()

_Check if the Guardian is an elder Guardian_

Returns | Description
--- | --- 
`boolean` | true if the Guardian is an Elder Guardian, false if not


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
	

