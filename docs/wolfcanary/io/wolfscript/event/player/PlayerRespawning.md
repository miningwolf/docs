## PlayerRespawning __class__

>io.wolfscript.event.player.PlayerRespawning
>Extends [`Hook`](../../hook/Hook.md)

---

### Class Overview

Player pre-respawn hook. This hook is called before the new location and repsawn point for a player is determined. Use it to alter those information.

Method | Type   
--- | :--- 
new __PlayerRespawning__(player, respawn, bedSpawn) <br> _PlayerRespawning constructor_ | _constructor_
 readonly property __Player__ <br> _Get: Gets the `Player`_ | `Player`
  property __RespawnLocation__ <br> _Get: Gets the respawn [`Location`](../../api/world/position/Location.md)<br>Set: Sets the respawn [`Location`](../../api/world/position/Location.md)_ | [`Location`](../../api/world/position/Location.md)
 function __isBedSpawn__() <br> _Returns true if the player is supposed to respawn at his bed_ | `boolean`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](../../hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](../../hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





---

### Public Constructors for [`PlayerRespawning`](PlayerRespawning.md)

##### <a id='playerrespawning'></a>new __PlayerRespawning__(player, respawn, bedSpawn) 

_PlayerRespawning constructor_

Argument | Type | Description  
--- | --- | --- 
player | `Player` | player argument
respawn | [`Location`](../../api/world/position/Location.md) | respawn argument
bedSpawn | `boolean` | bedSpawn argument

---

### Public Properties for [`PlayerRespawning`](PlayerRespawning.md)

##### <a id='player'></a>public  readonly property __Player__

_Get: Gets the `Player`_

Get | Description
--- | --- 
`Player` | `Player`



##### <a id='respawnlocation'></a>public   property __RespawnLocation__

_Get: Gets the respawn [`Location`](../../api/world/position/Location.md)<br>Set: Sets the respawn [`Location`](../../api/world/position/Location.md)_

Get | Description
--- | --- 
[`Location`](../../api/world/position/Location.md) | respawn location

Set | Type | Description  
--- | --- | --- 
respawn | [`Location`](../../api/world/position/Location.md) | the respawn location


---

### Public Methods for [`PlayerRespawning`](PlayerRespawning.md)

##### <a id='isbedspawn'></a>public  function __isBedSpawn__()

_Returns true if the player is supposed to respawn at his bed_

Returns | Description
--- | --- 
`boolean` | `true` if bed spawn


##### <a id='tostring'></a>public final function __toString__()

_toString method_

Returns | 
--- | 
`String` |


---

### Public Properties for [`Hook`](../../hook/Hook.md)

##### <a id='hookname'></a>public final readonly property __HookName__

_Get: Get the name of this hook._

Get | Description
--- | --- 
`String` | simple class name



---

### Public Methods for [`Hook`](../../hook/Hook.md)

##### <a id='call'></a>public  function __call__()

_Calls a Hook if not already executed_

Returns | Description
--- | --- 
[`Hook`](../../hook/Hook.md) | this


##### <a id='hashcode'></a>public  function __hashCode__()

_hashCode method_

Returns | 
--- | 
`int` |


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

