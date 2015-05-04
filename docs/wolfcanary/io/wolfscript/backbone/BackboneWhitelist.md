## BackboneWhitelist __class__

>io.wolfscript.backbone.BackboneWhitelist
>Extends [`Backbone`](Backbone.md)

---

### Class Overview

Backbone to the whitelist system. This contains NO logic, it is only the data source access!

Method | Type   
--- | :--- 
new __BackboneWhitelist__() <br> _BackboneWhitelist constructor_ | _constructor_
 function __addWhitelistEntry__(player) <br> _Add a new whitelist entry_ | `void`
 function __isWhitelisted__(player) <br> _Checks if the player is whitelisted_ | `boolean`
 function __loadWhitelist__() <br> _Load and return all recorded bans_ | `List<String>`
 function __removeWhitelistEntry__(subject) <br> _Removes a player from the whitelist_ | `void`
 function __validateReserveList__() <br> _Validate all user entries in the database._ | `void`
 |
__Inherited items from [`Backbone`](Backbone.md)__ |
new __Backbone__(system) <br> _Backbone constructor_ | _constructor_
 readonly property __System__ <br> _Get: Get the System of this backbone_ | `System`





---

### Public Constructors for [`BackboneWhitelist`](BackboneWhitelist.md)

##### <a id='backbonewhitelist'></a>new __BackboneWhitelist__() 

_BackboneWhitelist constructor_


---

### Public Methods for [`BackboneWhitelist`](BackboneWhitelist.md)

##### <a id='addwhitelistentry'></a>public  function __addWhitelistEntry__(player)

_Add a new whitelist entry_

Argument | Type | Description  
--- | --- | --- 
player | `String` | the player's name or uuid

Returns | 
--- | 
`void` |


##### <a id='iswhitelisted'></a>public  function __isWhitelisted__(player)

_Checks if the player is whitelisted_

Argument | Type | Description  
--- | --- | --- 
player | `String` | the player's name or uuid to check

Returns | Description
--- | --- 
`boolean` | `true` if whitelisted; `false` otherwise


##### <a id='loadwhitelist'></a>public  function __loadWhitelist__()

_Load and return all recorded bans_

Returns | Description
--- | --- 
`List<String>` | An array list of all recorded ban instances.


##### <a id='removewhitelistentry'></a>public  function __removeWhitelistEntry__(subject)

_Removes a player from the whitelist_

Argument | Type | Description  
--- | --- | --- 
subject | `String` | the player's name or uuid

Returns | 
--- | 
`void` |


##### <a id='validatereservelist'></a>public  function __validateReserveList__()

_Validate all user entries in the database. At this time it merely checks that all entries have a valid UUID.  If an entry does not, it attempts to retrieve it from Mojang's web service and_

Returns | 
--- | 
`void` |


---
### Public Constructors for [`Backbone`](Backbone.md)

##### <a id='backbone'></a>new __Backbone__(system) 

_Backbone constructor_

Argument | Type | Description  
--- | --- | --- 
system | `System` | system argument

---

### Public Properties for [`Backbone`](Backbone.md)

##### <a id='system'></a>public  readonly property __System__

_Get: Get the System of this backbone_

Get | Description
--- | --- 
`System` | The System instance.



---


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

