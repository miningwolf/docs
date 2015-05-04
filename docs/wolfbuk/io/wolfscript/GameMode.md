## GameMode __enum__

>io.wolfscript.GameMode

---

### Enum Overview

Represents the various type of game modes that `HumanEntity`s may have

Item | Type   
--- | :--- 
CREATIVE: 1<br> _Creative mode may fly, build instantly, become invulnerable and create_ | GameMode
SURVIVAL: 0<br> _Survival mode is the "normal" gameplay type, with no special features._ | GameMode
ADVENTURE: 2<br> _Adventure mode cannot break blocks without the correct tools._ | GameMode
SPECTATOR: 3<br> _Spectator mode cannot interact with the world in anyway and is_ | GameMode



---


### Public Properties for [`GameMode`](GameMode.md)

##### <a id='value'></a>public  readonly property __Value__
_Deprecated: Magic value_

_Get: Gets the mode value associated with this GameMode_

Get | Description
--- | --- 
`int` | An integer value of this gamemode



---

### Public Methods for [`GameMode`](GameMode.md)

##### <a id='getbyvalue'></a>public static function __getByValue__(int)
_Deprecated: Magic value_

_Gets the GameMode represented by the specified value_

Argument | Type | Description  
--- | --- | --- 
int | `final` | int argument

Returns | Description
--- | --- 
[`GameMode`](GameMode.md) | Associative [`GameMode`](GameMode.md) with the given value, or null if it doesn't exist


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

