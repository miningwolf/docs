## EntityDamageByBlockEvent __class__

>io.wolfscript.event.entity.EntityDamageByBlockEvent
>Extends `EntityDamageEvent`

---

### Class Overview

Called when an entity is damaged by a block

Method | Type   
--- | :--- 
new __EntityDamageByBlockEvent__(Block, Entity, DamageCause, int) <br> _EntityDamageByBlockEvent constructor_ | _constructor_
new __EntityDamageByBlockEvent__(Block, Entity, DamageCause, double) <br> _EntityDamageByBlockEvent constructor_ | _constructor_
new __EntityDamageByBlockEvent__(Block, Entity, DamageCause, Map, Map, Function) <br> _EntityDamageByBlockEvent constructor_ | _constructor_
 readonly property __Damager__ <br> _Get: Returns the block that damaged the player._ | [`Block`](..\..\block\Block.md)



---

### Public Constructors for [`EntityDamageByBlockEvent`](EntityDamageByBlockEvent.md)

##### <a id='entitydamagebyblockevent'></a>new __EntityDamageByBlockEvent__(Block, Entity, DamageCause, int) 

_EntityDamageByBlockEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Block | `final` | Block argument
Entity | `final` | Entity argument
DamageCause | `final` | DamageCause argument
int | `final` | int argument

##### <a id='entitydamagebyblockevent'></a>new __EntityDamageByBlockEvent__(Block, Entity, DamageCause, double) 

_EntityDamageByBlockEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Block | `final` | Block argument
Entity | `final` | Entity argument
DamageCause | `final` | DamageCause argument
double | `final` | double argument

##### <a id='entitydamagebyblockevent'></a>new __EntityDamageByBlockEvent__(Block, Entity, DamageCause, Map, Map, Function) 

_EntityDamageByBlockEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Block | `final` | Block argument
Entity | `final` | Entity argument
DamageCause | `final` | DamageCause argument
Map | `final` | Map argument
Map | `final` | Map argument
Function | `extends` | Function argument

---

### Public Properties for [`EntityDamageByBlockEvent`](EntityDamageByBlockEvent.md)

##### <a id='damager'></a>public  readonly property __Damager__

_Get: Returns the block that damaged the player._

Get | Description
--- | --- 
[`Block`](..\..\block\Block.md) | Block that damaged the player



---
---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

