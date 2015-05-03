## PlayerRespawning __class__

>io.wolfscript.event.player.PlayerRespawning
>Extends [`Hook`](..\..\hook\Hook.md)

---

### Class Overview

Player pre-respawn hook. This hook is called before the new location and repsawn point for a player is determined. Use it to alter those information.

Method | Type   
--- | :--- 
new __PlayerRespawning__(player, respawn, bedSpawn) <br> _PlayerRespawning constructor_ | _constructor_
 function __isBedSpawn__() <br> _Gets the `Player`_ | `boolean`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](..\..\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](..\..\hook\Hook.md)





---

### Public Constructors for [`PlayerRespawning`](PlayerRespawning.md)

##### <a id='playerrespawning'></a>new __PlayerRespawning__(player, respawn, bedSpawn) 

_PlayerRespawning constructor_

Argument | Type | Description  
--- | --- | --- 
player | `Player` | player argument
respawn | `Location` | respawn argument
bedSpawn | `boolean` | bedSpawn argument

---

### Public Methods for [`PlayerRespawning`](PlayerRespawning.md)

##### <a id='isbedspawn'></a>public  function __isBedSpawn__()

_Gets the `Player`_

Returns | Description
--- | --- 
`boolean` | `Player` /
    public Player getPlayer() {
        return player;
    }

    /** Gets the respawn `Location`


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
	

