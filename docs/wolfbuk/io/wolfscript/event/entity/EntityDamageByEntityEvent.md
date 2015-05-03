## EntityDamageByEntityEvent __class__

>io.wolfscript.event.entity.EntityDamageByEntityEvent
>Extends `EntityDamageEvent`

---

### Class Overview

Called when an entity is damaged by an entity

Method | Type   
--- | :--- 
new __EntityDamageByEntityEvent__(Entity, Entity, DamageCause, int) <br> _EntityDamageByEntityEvent constructor_ | _constructor_
new __EntityDamageByEntityEvent__(Entity, Entity, DamageCause, double) <br> _EntityDamageByEntityEvent constructor_ | _constructor_
new __EntityDamageByEntityEvent__(Entity, Entity, DamageCause, Map, Map, Function) <br> _EntityDamageByEntityEvent constructor_ | _constructor_
 readonly property __Damager__ <br> _Get: Returns the entity that damaged the defender._ | `Entity`



---

### Public Constructors for [`EntityDamageByEntityEvent`](EntityDamageByEntityEvent.md)

##### <a id='entitydamagebyentityevent'></a>new __EntityDamageByEntityEvent__(Entity, Entity, DamageCause, int) 

_EntityDamageByEntityEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Entity | `final` | Entity argument
Entity | `final` | Entity argument
DamageCause | `final` | DamageCause argument
int | `final` | int argument

##### <a id='entitydamagebyentityevent'></a>new __EntityDamageByEntityEvent__(Entity, Entity, DamageCause, double) 

_EntityDamageByEntityEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Entity | `final` | Entity argument
Entity | `final` | Entity argument
DamageCause | `final` | DamageCause argument
double | `final` | double argument

##### <a id='entitydamagebyentityevent'></a>new __EntityDamageByEntityEvent__(Entity, Entity, DamageCause, Map, Map, Function) 

_EntityDamageByEntityEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Entity | `final` | Entity argument
Entity | `final` | Entity argument
DamageCause | `final` | DamageCause argument
Map | `final` | Map argument
Map | `final` | Map argument
Function | `extends` | Function argument

---

### Public Properties for [`EntityDamageByEntityEvent`](EntityDamageByEntityEvent.md)

##### <a id='damager'></a>public  readonly property __Damager__

_Get: Returns the entity that damaged the defender._

Get | Description
--- | --- 
`Entity` | Entity that damaged the defender.



---
---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

