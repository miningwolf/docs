## WarpProvider __class__

>io.wolfscript.warp.WarpProvider

---

### Class Overview

Access to the backbone for the whitelist

Method | Type   
--- | :--- 
new __WarpProvider__() <br> _WarpProvider constructor_ | _constructor_
 readonly property __AllWarps__ <br> _Get: Return a non-modifiable list of all available warps_ | `List<Warp>`
 function __addWarp__(warp) <br> _Add new warp_ | `void`
 function __getHome__(player) <br> _Returns this players home_ | [`Warp`](Warp.md)
 function __getHome__(identity) <br> _Return home for a player with this name_ | [`Warp`](Warp.md)
 function __getWarp__(name) <br> _Returns warp that has the given name or null if not exists_ | [`Warp`](Warp.md)
 function __reload__() <br> _reload method_ | `void`
 function __removeWarp__(warp) <br> _Remove a warp_ | `void`
 function __setHome__(player, location) <br> _Set home for player, this updates a player home if there already is one_ | `void`
 function __warpExists__(name) <br> _warpExists method_ | `boolean`



---

### Public Constructors for [`WarpProvider`](WarpProvider.md)

##### <a id='warpprovider'></a>new __WarpProvider__() 

_WarpProvider constructor_


---

### Public Properties for [`WarpProvider`](WarpProvider.md)

##### <a id='allwarps'></a>public  readonly property __AllWarps__

_Get: Return a non-modifiable list of all available warps_

Get | 
--- | 
`List<Warp>` |



---

### Public Methods for [`WarpProvider`](WarpProvider.md)

##### <a id='addwarp'></a>public  function __addWarp__(warp)

_Add new warp_

Argument | Type | Description  
--- | --- | --- 
warp | [`Warp`](Warp.md) | warp argument

Returns | 
--- | 
`void` |


##### <a id='gethome'></a>public  function __getHome__(player)

_Returns this players home_

Argument | Type | Description  
--- | --- | --- 
player | `Player` | player argument

Returns | 
--- | 
[`Warp`](Warp.md) |


##### <a id='gethome'></a>public  function __getHome__(identity)

_Return home for a player with this name_

Argument | Type | Description  
--- | --- | --- 
identity | `String` | identity argument

Returns | 
--- | 
[`Warp`](Warp.md) |


##### <a id='getwarp'></a>public  function __getWarp__(name)

_Returns warp that has the given name or null if not exists_

Argument | Type | Description  
--- | --- | --- 
name | `String` | name argument

Returns | 
--- | 
[`Warp`](Warp.md) |


##### <a id='reload'></a>public  function __reload__()

_reload method_

Returns | 
--- | 
`void` |


##### <a id='removewarp'></a>public  function __removeWarp__(warp)

_Remove a warp_

Argument | Type | Description  
--- | --- | --- 
warp | [`Warp`](Warp.md) | warp argument

Returns | 
--- | 
`void` |


##### <a id='sethome'></a>public  function __setHome__(player, location)

_Set home for player, this updates a player home if there already is one_

Argument | Type | Description  
--- | --- | --- 
player | `Player` | player argument
location | [`Location`](../api/world/position/Location.md) | location argument

Returns | 
--- | 
`void` |


##### <a id='warpexists'></a>public  function __warpExists__(name)

_warpExists method_

Argument | Type | Description  
--- | --- | --- 
name | `String` | name argument

Returns | 
--- | 
`boolean` |


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

