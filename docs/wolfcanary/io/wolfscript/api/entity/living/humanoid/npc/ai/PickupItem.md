## PickupItem __class__

>io.wolfscript.api.entity.living.humanoid.npc.ai.PickupItem
>Extends [`NPCAI`](NPCAI.md)

---

### Class Overview

AI Container for NPC item pickup

Method | Type   
--- | :--- 
new __PickupItem__(pickedUp) <br> _Constructs a new PickupItem AI Container_ | _constructor_
final readonly property __ItemPickedUp__ <br> _Get: Gets the [`Item`](../../../../../inventory/Item.md) being picked up_ | [`Item`](../../../../../inventory/Item.md)
final function __toString__() <br> _{@inheritDoc}_ | `String`
 |
__Inherited items from [`NPCAI`](NPCAI.md)__ |
final readonly property __Name__ <br> _Get: Gets the name of the NPC AI class_ | `String`
final function __call__(npc) <br> _Short cut to calling this AI event_ | `void`





---

### Public Constructors for [`PickupItem`](PickupItem.md)

##### <a id='pickupitem'></a>new __PickupItem__(pickedUp) 

_Constructs a new PickupItem AI Container_

Argument | Type | Description  
--- | --- | --- 
pickedUp | [`Item`](../../../../../inventory/Item.md) | the [`Item`](../../../../../inventory/Item.md) being picked up

---

### Public Properties for [`PickupItem`](PickupItem.md)

##### <a id='itempickedup'></a>public final readonly property __ItemPickedUp__

_Get: Gets the [`Item`](../../../../../inventory/Item.md) being picked up_

Get | Description
--- | --- 
[`Item`](../../../../../inventory/Item.md) | picked up item



---

### Public Methods for [`PickupItem`](PickupItem.md)

##### <a id='tostring'></a>public final function __toString__()

_{@inheritDoc}_

Returns | 
--- | 
`String` |


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
	

