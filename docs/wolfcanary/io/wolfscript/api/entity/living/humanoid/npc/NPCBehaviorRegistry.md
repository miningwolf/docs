## NPCBehaviorRegistry __class__

>io.wolfscript.api.entity.living.humanoid.npc.NPCBehaviorRegistry

---

### Class Overview

class NPCBehaviorRegistry

Method | Type   
--- | :--- 
static function __execute__(npc, npcai) <br> _Registers a new [`NPCBehaviorListener`](NPCBehaviorListener.md)_ | `void`



---


### Public Methods for [`NPCBehaviorRegistry`](NPCBehaviorRegistry.md)

##### <a id='execute'></a>public static function __execute__(npc, npcai)

_Registers a new [`NPCBehaviorListener`](NPCBehaviorListener.md)_

Argument | Type | Description  
--- | --- | --- 
npc | [`NonPlayableCharacter`](..\NonPlayableCharacter.md) | the [`NonPlayableCharacter`](..\NonPlayableCharacter.md) associated with the listener
npcai | [`NPCAI`](ai\NPCAI.md) | the AI event called

Returns | Description
--- | --- 
`void` | The [`NPCBehaviorListener`](NPCBehaviorListener.md)  or null if one of that type is not registered to the given [`NonPlayableCharacter`](..\NonPlayableCharacter.md) /
    public static NPCBehaviorListener getRegisteredListener(Class<? extends NPCBehaviorListener> clazz, NonPlayableCharacter npc) {
        NPCBehaviorListener listener = null;
        synchronized (registered) {
            Iterator<NPCBehaviorRegisteredListener> itr = registered.values().iterator();
            while (itr.hasNext()) {
                NPCBehaviorRegisteredListener nbrl = itr.next();
                if (nbrl.isFor(npc) && clazz.equals(nbrl.getListener().getClass())) {
                    listener = nbrl.getListener();
                    break;
                }
            }
        }
        return listener;
    }

    /** Gets a list of all the Registered [`NPCBehaviorListener`](NPCBehaviorListener.md) for manipulation.


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

