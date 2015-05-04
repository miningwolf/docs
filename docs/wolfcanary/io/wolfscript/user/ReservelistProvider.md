## ReservelistProvider __class__

>io.wolfscript.user.ReservelistProvider

---

### Class Overview

Reserve List Provider

Method | Type   
--- | :--- 
new __ReservelistProvider__() <br> _ReservelistProvider constructor_ | _constructor_
 readonly property __Reservations__ <br> _Get: Gets all reservations_ | `String[]`
 readonly property __Size__ <br> _Get: gets the current size of the reservelist_ | `int`
 function __addPlayer__(name) <br> _Adds a new whitelist entry_ | `void`
 function __isSlotReserved__(nameOrUUID) <br> _Check if a given player is reservelist._ | `boolean`
 function __isSlotReserved__(playerReference) <br> _isSlotReserved method_ | `boolean`
 function __reload__() <br> _Reload the reservelist from database_ | `void`
 function __removePlayer__(name) <br> _Removes the given player from the reservelist_ | `void`



---

### Public Constructors for [`ReservelistProvider`](ReservelistProvider.md)

##### <a id='reservelistprovider'></a>new __ReservelistProvider__() 

_ReservelistProvider constructor_


---

### Public Properties for [`ReservelistProvider`](ReservelistProvider.md)

##### <a id='reservations'></a>public  readonly property __Reservations__

_Get: Gets all reservations_

Get | 
--- | 
`String[]` |



##### <a id='size'></a>public  readonly property __Size__

_Get: gets the current size of the reservelist_

Get | 
--- | 
`int` |



---

### Public Methods for [`ReservelistProvider`](ReservelistProvider.md)

##### <a id='addplayer'></a>public  function __addPlayer__(name)

_Adds a new whitelist entry_

Argument | Type | Description  
--- | --- | --- 
name | `String` | name argument

Returns | 
--- | 
`void` |


##### <a id='isslotreserved'></a>public  function __isSlotReserved__(nameOrUUID)

_Check if a given player is reservelist._

Argument | Type | Description  
--- | --- | --- 
nameOrUUID | `String` | the player's name or UUID to check

Returns | Description
--- | --- 
`boolean` | `true`


##### <a id='isslotreserved'></a>public  function __isSlotReserved__(playerReference)

_isSlotReserved method_

Argument | Type | Description  
--- | --- | --- 
playerReference | [`PlayerReference`](../api/PlayerReference.md) | playerReference argument

Returns | 
--- | 
`boolean` |


##### <a id='reload'></a>public  function __reload__()

_Reload the reservelist from database_

Returns | 
--- | 
`void` |


##### <a id='removeplayer'></a>public  function __removePlayer__(name)

_Removes the given player from the reservelist_

Argument | Type | Description  
--- | --- | --- 
name | `String` | name argument

Returns | 
--- | 
`void` |


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

