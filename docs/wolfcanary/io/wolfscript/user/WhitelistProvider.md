## WhitelistProvider __class__

>io.wolfscript.user.WhitelistProvider

---

### Class Overview

Access to the backbone for whitelist

Method | Type   
--- | :--- 
new __WhitelistProvider__() <br> _WhitelistProvider constructor_ | _constructor_
 readonly property __Size__ <br> _Get: gets the current size of the whitelist_ | `int`
 readonly property __Whitelisted__ <br> _Whitelisted property_ | `String[]`
 function __addPlayer__(subject) <br> _Adds a new whitelist entry_ | `void`
 function __isWhitelisted__(subject) <br> _Check if a given player is whitelisted._ | `boolean`
 function __reload__() <br> _Reload the whitelist from database_ | `void`
 function __removePlayer__(subject) <br> _Removes the given player from the whitelist_ | `void`



---

### Public Constructors for [`WhitelistProvider`](WhitelistProvider.md)

##### <a id='whitelistprovider'></a>new __WhitelistProvider__() 

_WhitelistProvider constructor_


---

### Public Properties for [`WhitelistProvider`](WhitelistProvider.md)

##### <a id='size'></a>public  readonly property __Size__

_Get: gets the current size of the whitelist_

Get | 
--- | 
`int` |



##### <a id='whitelisted'></a>public  readonly property __Whitelisted__

_Whitelisted property_

Get | 
--- | 
`String[]` |



---

### Public Methods for [`WhitelistProvider`](WhitelistProvider.md)

##### <a id='addplayer'></a>public  function __addPlayer__(subject)

_Adds a new whitelist entry_

Argument | Type | Description  
--- | --- | --- 
subject | `String` | player name or uuid

Returns | 
--- | 
`void` |


##### <a id='iswhitelisted'></a>public  function __isWhitelisted__(subject)

_Check if a given player is whitelisted._

Argument | Type | Description  
--- | --- | --- 
subject | `String` | player name or uuid

Returns | 
--- | 
`boolean` |


##### <a id='reload'></a>public  function __reload__()

_Reload the whitelist from database_

Returns | 
--- | 
`void` |


##### <a id='removeplayer'></a>public  function __removePlayer__(subject)

_Removes the given player from the whitelist_

Argument | Type | Description  
--- | --- | --- 
subject | `String` | player name or uuid

Returns | 
--- | 
`void` |


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

