## UserAndGroupsProvider __class__

>io.wolfscript.user.UserAndGroupsProvider

---

### Class Overview

Access to the backbone for users and groups

Method | Type   
--- | :--- 
new __UserAndGroupsProvider__() <br> _Instantiate a groups provider_ | _constructor_
 readonly property __Players__ <br> _Get: Get the names of all players in the user table_ | `String[]`
 readonly property __Groups__ <br> _Get: Return array of all existent groups_ | `Group[]`
 readonly property __GroupNames__ <br> _Get: Return array of all existent group names_ | `String[]`
 readonly property __DefaultGroup__ <br> _Get: Get the default group_ | [`Group`](Group.md)
 function __getPlayerData__(uuid) <br> _Returns a String array containing data in this order:_ | `String[]`
 function __addGroup__(g) <br> _Add a new Group_ | `void`
 function __getModuleGroupsForPlayer__(uuid) <br> _Returns all additional groups for a player_ | `Group[]`
 function __addOrUpdateOfflinePlayer__(player) <br> _addOrUpdateOfflinePlayer method_ | `void`
 function __addOfflinePlayer__(name, group) <br> _Add a player that is currently offline._ | `void`
 function __addOrUpdatePlayerData__(player) <br> _Add or update the given player_ | `void`
 function __getGroup__(name) <br> _Returns group files under the given name or the default group if the specified one doesn't exist_ | [`Group`](Group.md)
 function __updateGroup__(g, reload) <br> _updateGroup method_ | `void`
 function __removeGroup__(g) <br> _Remove this group_ | `void`
 function __nameChanged__(reference) <br> _Checks if a [`PlayerReference`](../api/PlayerReference.md) has changed names compared to the database_ | `boolean`
 function __playerExists__(uuid) <br> _Check if there is a set of data present for the given player UUID_ | `boolean`
 function __groupExists__(g) <br> _Check if the given group is filed in this groups provider_ | `boolean`
 function __groupExists__(name) <br> _Check if a group by the given name exists_ | `boolean`
 function __reloadAll__() <br> _reloadAll method_ | `void`
 function __reloadUserData__() <br> _reloadUserData method_ | `void`
 function __reloadGroupsData__() <br> _reloadGroupsData method_ | `void`
 function __removeUserData__(uuid) <br> _Remove permissions and other data for this player from uuid_ | `void`
 function __renameGroup__(group, newName) <br> _Rename a group_ | `void`



---

### Public Constructors for [`UserAndGroupsProvider`](UserAndGroupsProvider.md)

##### <a id='userandgroupsprovider'></a>new __UserAndGroupsProvider__() 

_Instantiate a groups provider_


---

### Public Properties for [`UserAndGroupsProvider`](UserAndGroupsProvider.md)

##### <a id='players'></a>public  readonly property __Players__

_Get: Get the names of all players in the user table_

Get | 
--- | 
`String[]` |



##### <a id='groups'></a>public  readonly property __Groups__

_Get: Return array of all existent groups_

Get | 
--- | 
`Group[]` |



##### <a id='groupnames'></a>public  readonly property __GroupNames__

_Get: Return array of all existent group names_

Get | Description
--- | --- 
`String[]` | group names



##### <a id='defaultgroup'></a>public  readonly property __DefaultGroup__

_Get: Get the default group_

Get | Description
--- | --- 
[`Group`](Group.md) | default Group object



---

### Public Methods for [`UserAndGroupsProvider`](UserAndGroupsProvider.md)

##### <a id='getplayerdata'></a>public  function __getPlayerData__(uuid)

_Returns a String array containing data in this order: Prefix, Group, isMuted_

Argument | Type | Description  
--- | --- | --- 
uuid | `String` | uuid argument

Returns | 
--- | 
`String[]` |


##### <a id='addgroup'></a>public  function __addGroup__(g)

_Add a new Group_

Argument | Type | Description  
--- | --- | --- 
g | [`Group`](Group.md) | g argument

Returns | 
--- | 
`void` |


##### <a id='getmodulegroupsforplayer'></a>public  function __getModuleGroupsForPlayer__(uuid)

_Returns all additional groups for a player_

Argument | Type | Description  
--- | --- | --- 
uuid | `String` | uuid argument

Returns | 
--- | 
`Group[]` |


##### <a id='addorupdateofflineplayer'></a>public  function __addOrUpdateOfflinePlayer__(player)

_addOrUpdateOfflinePlayer method_

Argument | Type | Description  
--- | --- | --- 
player | [`OfflinePlayer`](../api/OfflinePlayer.md) | player argument

Returns | 
--- | 
`void` |


##### <a id='addofflineplayer'></a>public  function __addOfflinePlayer__(name, group)

_Add a player that is currently offline. It will assume default values for any unspecified data_

Argument | Type | Description  
--- | --- | --- 
name | `String` | name argument
group | `String` | group argument

Returns | 
--- | 
`void` |


##### <a id='addorupdateplayerdata'></a>public  function __addOrUpdatePlayerData__(player)

_Add or update the given player_

Argument | Type | Description  
--- | --- | --- 
player | `Player` | player argument

Returns | 
--- | 
`void` |


##### <a id='getgroup'></a>public  function __getGroup__(name)

_Returns group files under the given name or the default group if the specified one doesn't exist_

Argument | Type | Description  
--- | --- | --- 
name | `String` | name argument

Returns | Description
--- | --- 
[`Group`](Group.md) | the group with the assigned name; or `defaultGroup` if no group with assigned name is found


##### <a id='updategroup'></a>public  function __updateGroup__(g, reload)

_updateGroup method_

Argument | Type | Description  
--- | --- | --- 
g | [`Group`](Group.md) | g argument
reload | `boolean` | reload argument

Returns | 
--- | 
`void` |


##### <a id='removegroup'></a>public  function __removeGroup__(g)

_Remove this group_

Argument | Type | Description  
--- | --- | --- 
g | [`Group`](Group.md) | the group to remove

Returns | 
--- | 
`void` |


##### <a id='namechanged'></a>public  function __nameChanged__(reference)

_Checks if a [`PlayerReference`](../api/PlayerReference.md) has changed names compared to the database_

Argument | Type | Description  
--- | --- | --- 
reference | [`PlayerReference`](../api/PlayerReference.md) | the [`PlayerReference`](../api/PlayerReference.md) to check

Returns | Description
--- | --- 
`boolean` | `true` if the name is different in the database; `false` if not


##### <a id='playerexists'></a>public  function __playerExists__(uuid)

_Check if there is a set of data present for the given player UUID_

Argument | Type | Description  
--- | --- | --- 
uuid | `String` | the players UUID

Returns | Description
--- | --- 
`boolean` | true if there is a set of data present, false otherwise


##### <a id='groupexists'></a>public  function __groupExists__(g)

_Check if the given group is filed in this groups provider_

Argument | Type | Description  
--- | --- | --- 
g | [`Group`](Group.md) | g argument

Returns | 
--- | 
`boolean` |


##### <a id='groupexists'></a>public  function __groupExists__(name)

_Check if a group by the given name exists_

Argument | Type | Description  
--- | --- | --- 
name | `String` | name argument

Returns | Description
--- | --- 
`boolean` | `true` if exists; `false` if not


##### <a id='reloadall'></a>public  function __reloadAll__()

_reloadAll method_

Returns | 
--- | 
`void` |


##### <a id='reloaduserdata'></a>public  function __reloadUserData__()

_reloadUserData method_

Returns | 
--- | 
`void` |


##### <a id='reloadgroupsdata'></a>public  function __reloadGroupsData__()

_reloadGroupsData method_

Returns | 
--- | 
`void` |


##### <a id='removeuserdata'></a>public  function __removeUserData__(uuid)

_Remove permissions and other data for this player from uuid_

Argument | Type | Description  
--- | --- | --- 
uuid | `String` | UUID for the player

Returns | 
--- | 
`void` |


##### <a id='renamegroup'></a>public  function __renameGroup__(group, newName)

_Rename a group_

Argument | Type | Description  
--- | --- | --- 
group | [`Group`](Group.md) | Group in question
newName | `String` | the new name

Returns | 
--- | 
`void` |


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

