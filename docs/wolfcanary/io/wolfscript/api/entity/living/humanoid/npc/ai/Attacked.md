## Attacked __class__

>io.wolfscript.api.entity.living.humanoid.npc.ai.Attacked
>Extends [`NPCAI`](NPCAI.md)

---

### Class Overview

AI Container for Attacked NPC

Method | Type   
--- | :--- 
new __Attacked__(attacker) <br> _Constructs a new Attacked AI Container_ | _constructor_
final readonly property __Attacker__ <br> _Get: Gets the [`Entity`](../../../../Entity.md) attacker_ | [`Entity`](../../../../Entity.md)
final function __toString__() <br> _{@inheritDoc}_ | `String`
final var __attacker__ <br> _attacker field_ | [`Entity`](../../../../Entity.md)
 |
__Inherited items from [`NPCAI`](NPCAI.md)__ |
final readonly property __Name__ <br> _Get: Gets the name of the NPC AI class_ | `String`
final function __call__(npc) <br> _Short cut to calling this AI event_ | `void`





---

### Public Constructors for [`Attacked`](Attacked.md)

##### <a id='attacked'></a>new __Attacked__(attacker) 

_Constructs a new Attacked AI Container_

Argument | Type | Description  
--- | --- | --- 
attacker | [`Entity`](../../../../Entity.md) | the [`Entity`](../../../../Entity.md) attacking the NPC

---

### Public Properties for [`Attacked`](Attacked.md)

##### <a id='attacker'></a>public final readonly property __Attacker__

_Get: Gets the [`Entity`](../../../../Entity.md) attacker_

Get | Description
--- | --- 
[`Entity`](../../../../Entity.md) | attacker



---

### Public Methods for [`Attacked`](Attacked.md)

##### <a id='tostring'></a>public final function __toString__()

_{@inheritDoc}_

Returns | 
--- | 
`String` |


---

### Public Fields for [`Attacked`](Attacked.md)

##### <a id='attacker'></a>public final var __attacker__

_attacker field_

>Returns
>  [`Entity`](../../../../Entity.md)

---

### Public Properties for [`NPCAI`](NPCAI.md)

##### <a id='name'></a>public final readonly property __Name__

_Get: Gets the name of the NPC AI class_

Get | Description
--- | --- 
`String` | NPCAI subclass name



---

### Public Methods for [`NPCAI`](NPCAI.md)

##### <a id='call'></a>public final function __call__(npc)

_Short cut to calling this AI event_

Argument | Type | Description  
--- | --- | --- 
npc | [`NonPlayableCharacter`](../../NonPlayableCharacter.md) | the NPC the event is taking place for

Returns | 
--- | 
`void` |


---


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

