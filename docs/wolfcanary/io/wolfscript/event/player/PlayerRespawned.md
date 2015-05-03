## PlayerRespawned __class__

>io.wolfscript.event.player.PlayerRespawned
>Extends [`Hook`](..\..\hook\Hook.md)

---

### Class Overview

Player respawned hook. Contains the reference to the freshly spawned player entity and the location it spawned in. The location can not be overridden at this point. If you need the player to go somewhere else, use `Player#teleportTo(Location)` etc

Method | Type   
--- | :--- 
new __PlayerRespawned__(player, location) <br> _PlayerRespawned constructor_ | _constructor_
 readonly property __Location__ <br> _Get: Gets the `Player`_ | `Location`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](..\..\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](..\..\hook\Hook.md)





---

### Public Constructors for [`PlayerRespawned`](PlayerRespawned.md)

##### <a id='playerrespawned'></a>new __PlayerRespawned__(player, location) 

_PlayerRespawned constructor_

Argument | Type | Description  
--- | --- | --- 
player | `Player` | player argument
location | `Location` | location argument

---

### Public Properties for [`PlayerRespawned`](PlayerRespawned.md)

##### <a id='location'></a>public  readonly property __Location__

_Get: Gets the `Player`_

Get | Description
--- | --- 
`Location` | the `Player` /
    public Player getPlayer() {
        return player;
    }

    /** Gets the `Location` where this player will finally spawn



---

### Public Methods for [`PlayerRespawned`](PlayerRespawned.md)

##### <a id='tostring'></a>public final function __toString__()

_toString method_

Returns | 
--- | 
`String` |


---

### Public Methods for [`Hook`](..\..\hook\Hook.md)

##### <a id='call'></a>public  function __call__()

_Get the name of this hook._

Returns | Description
--- | --- 
[`Hook`](..\..\hook\Hook.md) | simple class name /
    public final String getHookName() {
        return getClass().getSimpleName();
    }

    @Override
    public int hashCode() {
        int hash = getClass().getSimpleName().length();

        return hash getClass().getSimpleName().hashCode() + 2;
    }

    /** Calls a Hook if not already executed


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

