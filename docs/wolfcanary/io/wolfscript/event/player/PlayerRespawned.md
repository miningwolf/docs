## PlayerRespawnedEvent __class__

>io.wolfscript.event.player.PlayerRespawned
>Extends [`Hook`](../../hook/Hook.md)
``` javascript
this.on('player.PlayerRespawned', function (e) { });
```


---

### Class Overview

Player respawned event. Contains the reference to the freshly spawned player entity and the location it spawned in. The location can not be overridden at this point. If you need the player to go somewhere else, use `Player#teleportTo(Location)` etc

Method | Type   
--- | :--- 
 readonly property __Location__ <br> _Get: Gets the [`Location`](../../api/world/position/Location.md) where this player will finally spawn_ | [`Location`](../../api/world/position/Location.md)
 readonly property __Player__ <br> _Get: Gets the `Player`_ | `Player`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](../../hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](../../hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





---


### Public Properties for [`PlayerRespawned`](PlayerRespawned.md)

##### <a id='location'></a>public  readonly property __Location__

_Get: Gets the [`Location`](../../api/world/position/Location.md) where this player will finally spawn_

Get | Description
--- | --- 
[`Location`](../../api/world/position/Location.md) | spawn location



##### <a id='player'></a>public  readonly property __Player__

_Get: Gets the `Player`_

Get | Description
--- | --- 
`Player` | the `Player`



---

### Public Methods for [`PlayerRespawned`](PlayerRespawned.md)

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


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

