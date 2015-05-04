## NPCBehaviorRegistry __class__

>io.wolfscript.api.entity.living.humanoid.npc.NPCBehaviorRegistry

---

### Class Overview

class NPCBehaviorRegistry

Method | Type   
--- | :--- 
static function __execute__(npc, npcai) <br> _Parses a NPC AI Event to the [`NPCBehaviorListener`](NPCBehaviorListener.md)s_ | `void`
static function __getRegisteredListener__(NPCBehaviorListener, npc) <br> _Gets the Registered [`NPCBehaviorListener`](NPCBehaviorListener.md) for manipulation._ | [`NPCBehaviorListener`](NPCBehaviorListener.md)
static function __getRegisteredListeners__(npc) <br> _Gets a list of all the Registered [`NPCBehaviorListener`](NPCBehaviorListener.md) for manipulation._ | `List<NPCBehaviorListener>`
static function __registerNPCListener__(NPCBehaviorListener, NonPlayableCharacter, boolean) <br> _Registers a new [`NPCBehaviorListener`](NPCBehaviorListener.md)_ | `void`
static function __unregister__(listener) <br> _Unregisters a [`NPCBehaviorListener`](NPCBehaviorListener.md)_ | `void`
static function __unregister__(npc) <br> _Unregisters a [`NPCBehaviorListener`](NPCBehaviorListener.md) using the associated [`NonPlayableCharacter`](../NonPlayableCharacter.md)_ | `void`



---


### Public Methods for [`NPCBehaviorRegistry`](NPCBehaviorRegistry.md)

##### <a id='execute'></a>public static function __execute__(npc, npcai)

_Parses a NPC AI Event to the [`NPCBehaviorListener`](NPCBehaviorListener.md)s_

Argument | Type | Description  
--- | --- | --- 
npc | [`NonPlayableCharacter`](../NonPlayableCharacter.md) | the [`NonPlayableCharacter`](../NonPlayableCharacter.md) the event is called for
npcai | [`NPCAI`](ai/NPCAI.md) | the AI event called

Returns | 
--- | 
`void` |


##### <a id='getregisteredlistener'></a>public static function __getRegisteredListener__(NPCBehaviorListener, npc)

_Gets the Registered [`NPCBehaviorListener`](NPCBehaviorListener.md) for manipulation._

Argument | Type | Description  
--- | --- | --- 
NPCBehaviorListener | `extends` | NPCBehaviorListener argument
npc | [`NonPlayableCharacter`](../NonPlayableCharacter.md) | The [`NonPlayableCharacter`](../NonPlayableCharacter.md) for which the [`NPCBehaviorListener`](NPCBehaviorListener.md) should be registered to.

Returns | Description
--- | --- 
[`NPCBehaviorListener`](NPCBehaviorListener.md) | The [`NPCBehaviorListener`](NPCBehaviorListener.md)  or null if one of that type is not registered to the given [`NonPlayableCharacter`](../NonPlayableCharacter.md)


##### <a id='getregisteredlisteners'></a>public static function __getRegisteredListeners__(npc)

_Gets a list of all the Registered [`NPCBehaviorListener`](NPCBehaviorListener.md) for manipulation._

Argument | Type | Description  
--- | --- | --- 
npc | [`NonPlayableCharacter`](../NonPlayableCharacter.md) | The [`NonPlayableCharacter`](../NonPlayableCharacter.md) for which the [`NPCBehaviorListener`](NPCBehaviorListener.md) should be registered to.

Returns | Description
--- | --- 
`List<NPCBehaviorListener>` | The list of [`NPCBehaviorListener`](NPCBehaviorListener.md) registered to the given [`NonPlayableCharacter`](../NonPlayableCharacter.md)


##### <a id='registernpclistener'></a>public static function __registerNPCListener__(NPCBehaviorListener, NonPlayableCharacter, boolean)

_Registers a new [`NPCBehaviorListener`](NPCBehaviorListener.md)_

Argument | Type | Description  
--- | --- | --- 
NPCBehaviorListener | `final` | NPCBehaviorListener argument
NonPlayableCharacter | `final` | NonPlayableCharacter argument
boolean | `final` | boolean argument

Returns | 
--- | 
`void` |


##### <a id='unregister'></a>public static function __unregister__(listener)

_Unregisters a [`NPCBehaviorListener`](NPCBehaviorListener.md)_

Argument | Type | Description  
--- | --- | --- 
listener | [`NPCBehaviorListener`](NPCBehaviorListener.md) | the listener to unregister

Returns | 
--- | 
`void` |


##### <a id='unregister'></a>public static function __unregister__(npc)

_Unregisters a [`NPCBehaviorListener`](NPCBehaviorListener.md) using the associated [`NonPlayableCharacter`](../NonPlayableCharacter.md)_

Argument | Type | Description  
--- | --- | --- 
npc | [`NonPlayableCharacter`](../NonPlayableCharacter.md) | the npc associated with the listener to be unregistered

Returns | 
--- | 
`void` |


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

