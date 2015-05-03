## Update __class__

>io.wolfscript.api.entity.living.humanoid.npc.ai.Update
>Extends [`NPCAI`](NPCAI.md)

---

### Class Overview

AI Container for NPC Updates

Method | Type   
--- | :--- 
final function __toString__() <br> _{@inheritDoc}_ | `String`
 |
__Inherited items from [`NPCAI`](NPCAI.md)__ |
final function __call__(npc) <br> _Gets the name of the NPC AI class_ | `void`





---


### Public Methods for [`Update`](Update.md)

##### <a id='tostring'></a>public final function __toString__()

_{@inheritDoc}_

Returns | 
--- | 
`String` |


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
	

