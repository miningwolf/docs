## Attacked __class__

>io.wolfscript.api.entity.living.humanoid.npc.ai.Attacked
>Extends [`NPCAI`](NPCAI.md)

---

### Class Overview

AI Container for Attacked NPC

Method | Type   
--- | :--- 
final function __toString__() <br> _Constructs a new Attacked AI Container_ | `String`
final var __attacker__ <br> _attacker field_ | [`Entity`](..\..\..\..\Entity.md)
 |
__Inherited items from [`NPCAI`](NPCAI.md)__ |
final function __call__(npc) <br> _Gets the name of the NPC AI class_ | `void`





---


### Public Methods for [`Attacked`](Attacked.md)

##### <a id='tostring'></a>public final function __toString__()

_Constructs a new Attacked AI Container_

Returns | Description
--- | --- 
`String` | attacker /
    public final Entity getAttacker() {
        return attacker;
    }

    /** {@inheritDoc}


---

### Public Fields for [`Attacked`](Attacked.md)

##### <a id='attacker'></a>public final var __attacker__

_attacker field_

>Returns
>  [`Entity`](..\..\..\..\Entity.md)

---

### Public Methods for [`NPCAI`](NPCAI.md)

##### <a id='call'></a>public final function __call__(npc)

_Gets the name of the NPC AI class_

Argument | Type | Description  
--- | --- | --- 
npc | [`NonPlayableCharacter`](..\..\NonPlayableCharacter.md) | the NPC the event is taking place for

Returns | Description
--- | --- 
`void` | NPCAI subclass name /
    public final String getName() {
        return "NPCAI." + this.getClass().getSimpleName();
    }

    /** Short cut to calling this AI event


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

