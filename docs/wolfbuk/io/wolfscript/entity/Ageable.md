## Ageable __interface__

>io.wolfscript.entity.Ageable
>Extends [`Creature`](Creature.md)

---

### Interface Overview

Represents an entity that can age and breed.

Method | Type   
--- | :--- 
  property __Age__ <br> _Get: Gets the age of this animal.<br>Set: Sets the age of this animal._ | `int`
  property __AgeLock__ <br> _Get: Gets the current agelock.<br>Set: Lock the age of the animal, setting this will prevent the animal from_ | `boolean`
 writeonly property __Breed__ <br> _Set: Set breedability of the animal, if the animal is a baby and set to_ | `void`
 function __canBreed__() <br> _Return the ability to breed of the animal._ | `boolean`
 function __isAdult__() <br> _Returns true if the animal is an adult._ | `boolean`
 function __setAdult__() <br> _Sets the age of the animal to an adult_ | `void`
 function __setBaby__() <br> _Sets the age of the animal to a baby_ | `void`
 |
__Inherited items from [`Creature`](Creature.md)__ |
  property __Target__ <br> _Get: Gets the current target of this Creature<br>Set: Instructs this Creature to set the specified LivingEntity as its_ | `LivingEntity`





---


### Public Properties for [`Ageable`](Ageable.md)

##### <a id='age'></a>public   property __Age__

_Get: Gets the age of this animal.<br>Set: Sets the age of this animal._

Get | Description
--- | --- 
`int` | Age

Set | Type | Description  
--- | --- | --- 
age | `int` | New age


##### <a id='agelock'></a>public   property __AgeLock__

_Get: Gets the current agelock.<br>Set: Lock the age of the animal, setting this will prevent the animal from maturing or getting ready for mating._

Get | Description
--- | --- 
`boolean` | the current agelock

Set | Type | Description  
--- | --- | --- 
lock | `boolean` | new lock


##### <a id='breed'></a>public  writeonly property __Breed__

_Set: Set breedability of the animal, if the animal is a baby and set to breed it will instantly grow up._

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
breed | `boolean` | breedability of the animal


---

### Public Methods for [`Ageable`](Ageable.md)

##### <a id='canbreed'></a>public  function __canBreed__()

_Return the ability to breed of the animal._

Returns | Description
--- | --- 
`boolean` | the ability to breed of the animal


##### <a id='isadult'></a>public  function __isAdult__()

_Returns true if the animal is an adult._

Returns | Description
--- | --- 
`boolean` | return true if the animal is an adult


##### <a id='setadult'></a>public  function __setAdult__()

_Sets the age of the animal to an adult_

Returns | 
--- | 
`void` |


##### <a id='setbaby'></a>public  function __setBaby__()

_Sets the age of the animal to a baby_

Returns | 
--- | 
`void` |


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


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

