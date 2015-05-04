## BackboneUsers __class__

>io.wolfscript.backbone.BackboneUsers
>Extends [`Backbone`](Backbone.md)

---

### Class Overview

Backbone to the Player System. This contains NO logic, it is only the data source access!

Method | Type   
--- | :--- 
new __BackboneUsers__() <br> _BackboneUsers constructor_ | _constructor_
 function __addUser__(player) <br> _Add a new Player to the data source._ | `void`
 function __addUser__(nameOrUUID, group) <br> _Used to update a player. This can not override existing player entries._ | `void`
static function __createDefaults__() <br> _createDefaults method_ | `void`
 function __getModularGroups__(uuid) <br> _Returns the additional groups for the given player_ | `Group[]`
 function __removeUser__(uuid) <br> _Remove a player from the data source_ | `void`
 function __updatePlayer__(player) <br> _Update a Player._ | `void`
 function __validateUsers__() <br> _Validate all user entries in the database._ | `void`
 |
__Inherited items from [`Backbone`](Backbone.md)__ |
new __Backbone__(system) <br> _Backbone constructor_ | _constructor_
 readonly property __System__ <br> _Get: Get the System of this backbone_ | `System`





---

### Public Constructors for [`BackboneUsers`](BackboneUsers.md)

##### <a id='backboneusers'></a>new __BackboneUsers__() 

_BackboneUsers constructor_


---

### Public Methods for [`BackboneUsers`](BackboneUsers.md)

##### <a id='adduser'></a>public  function __addUser__(player)

_Add a new Player to the data source._

Argument | Type | Description  
--- | --- | --- 
player | `Player` | Player to add to the data source.

Returns | 
--- | 
`void` |


##### <a id='adduser'></a>public  function __addUser__(nameOrUUID, group)

_Used to update a player. This can not override existing player entries. If there is a player with the uuid name, nothing will happen_

Argument | Type | Description  
--- | --- | --- 
nameOrUUID | `String` | the player's name or uuid
group | `String` | the group's name

Returns | 
--- | 
`void` |


##### <a id='createdefaults'></a>public static function __createDefaults__()

_createDefaults method_

Returns | 
--- | 
`void` |


##### <a id='getmodulargroups'></a>public  function __getModularGroups__(uuid)

_Returns the additional groups for the given player_

Argument | Type | Description  
--- | --- | --- 
uuid | `String` | the player's name

Returns | Description
--- | --- 
`Group[]` | Group array


##### <a id='removeuser'></a>public  function __removeUser__(uuid)

_Remove a player from the data source_

Argument | Type | Description  
--- | --- | --- 
uuid | `String` | Player to remove from the data source.

Returns | 
--- | 
`void` |


##### <a id='updateplayer'></a>public  function __updatePlayer__(player)

_Update a Player._

Argument | Type | Description  
--- | --- | --- 
player | [`PlayerReference`](../api/PlayerReference.md) | Player to update to the data source.

Returns | 
--- | 
`void` |


##### <a id='validateusers'></a>public  function __validateUsers__()

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
	

