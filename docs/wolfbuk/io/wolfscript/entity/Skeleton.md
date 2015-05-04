## Skeleton __interface__

>io.wolfscript.entity.Skeleton
>Extends [`Monster`](Monster.md)

---

### Interface Overview

Represents a Skeleton.

Method | Type   
--- | :--- 
  property __SkeletonType__ <br> _Get: Gets the current type of this skeleton.<br>Set: Sets the new type of this skeleton._ | `SkeletonType`
 |
__Inherited items from [`Monster`](Monster.md)__ |
 |
__Inherited items from [`Creature`](Creature.md)__ |
  property __Target__ <br> _Get: Gets the current target of this Creature<br>Set: Instructs this Creature to set the specified LivingEntity as its_ | `LivingEntity`







---


### Public Properties for [`Skeleton`](Skeleton.md)

##### <a id='id'></a>public  readonly property __Id__
_Deprecated: Magic value_

_Get: Gets the ID of this skeleton type._

Get | Description
--- | --- 
`int` | Skeleton type ID



##### <a id='skeletontype'></a>public   property __SkeletonType__

_Get: Gets the current type of this skeleton.<br>Set: Sets the new type of this skeleton._

Get | Description
--- | --- 
`SkeletonType` | Current type

Set | Type | Description  
--- | --- | --- 
type | `SkeletonType` | New type


---

### Public Methods for [`Skeleton`](Skeleton.md)

##### <a id='gettype'></a>public static function __getType__(id)
_Deprecated: Magic value_

_Gets a skeleton type by its ID._

Argument | Type | Description  
--- | --- | --- 
id | `int` | ID of the skeleton type to get.

Returns | Description
--- | --- 
`SkeletonType` | Resulting skeleton type, or null if not found.


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
	

