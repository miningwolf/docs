## BackbonePermissions __class__

>io.wolfscript.backbone.BackbonePermissions
>Extends [`Backbone`](Backbone.md)

---

### Class Overview

Backbone to the permissions System. This contains NO logic, it is only the data source access!

Method | Type   
--- | :--- 
new __BackbonePermissions__() <br> _BackbonePermissions constructor_ | _constructor_
 function __removePermissions__(group) <br> _Remove all permissions that belong to the given group!_ | `void`
 function __loadGroupPermissions__(name, world) <br> _Load permissions for a group_ | [`PermissionProvider`](../permissionsystem/PermissionProvider.md)
static function __createDefaultPermissionSet__() <br> _Creates a range of default permissions for the default groups defined in BackboneGroups_ | `void`
 function __addPermission__(path, value, owner, type, world) <br> _Add a new Permission to database and return its proper object._ | `int`
 function __loadPlayerPermissions__(uuid, world) <br> _Load permissions for a player_ | [`PermissionProvider`](../permissionsystem/PermissionProvider.md)
 function __pathExists__(path, owner, type, world) <br> _pathExists method_ | `boolean`
 function __removePermission__(path, world) <br> _Remove a permission from database. This also removes any relations to groups and players_ | `void`
 function __removePermission__(path, subject, world, isPlayer) <br> _Removes a permission specific to a player or group_ | `void`
 function __saveGroupPermissions__(g) <br> _Saves group permissions. This also adds new permissions + relations if there are any and_ | `void`
 function __saveUserPermissions__(p) <br> _Save user permissions to file and add new ones if needed + update relations_ | `void`
 function __updatePermission__(path, owner, type, world, value) <br> _Update a permission node with the given values._ | `int`
 function __validatePlayerPermissions__(world) <br> _Validate that player permissions have a UUID and not a playername._ | `void`
 |
__Inherited items from [`Backbone`](Backbone.md)__ |
new __Backbone__(system) <br> _Backbone constructor_ | _constructor_
 readonly property __System__ <br> _Get: Get the System of this backbone_ | `System`





---

### Public Constructors for [`BackbonePermissions`](BackbonePermissions.md)

##### <a id='backbonepermissions'></a>new __BackbonePermissions__() 

_BackbonePermissions constructor_


---

### Public Methods for [`BackbonePermissions`](BackbonePermissions.md)

##### <a id='removepermissions'></a>public  function __removePermissions__(group)

_Remove all permissions that belong to the given group!_

Argument | Type | Description  
--- | --- | --- 
group | [`Group`](../user/Group.md) | group argument

Returns | 
--- | 
`void` |


##### <a id='loadgrouppermissions'></a>public  function __loadGroupPermissions__(name, world)

_Load permissions for a group_

Argument | Type | Description  
--- | --- | --- 
name | `String` | the group name
world | `String` | the world name

Returns | Description
--- | --- 
[`PermissionProvider`](../permissionsystem/PermissionProvider.md) | PermissionsProvider instance for this group.


##### <a id='createdefaultpermissionset'></a>public static function __createDefaultPermissionSet__()

_Creates a range of default permissions for the default groups defined in BackboneGroups_

Returns | 
--- | 
`void` |


##### <a id='addpermission'></a>public  function __addPermission__(path, value, owner, type, world)

_Add a new Permission to database and return its proper object. If the permission already exists, it will be updated instead and the appropriate ID will be returned._

Argument | Type | Description  
--- | --- | --- 
path | `String` | String representation of the permission to add.<br> EXAMPLE: "wolf.command.player.compass"
value | `boolean` | Whether permission is true or false.
owner | `String` | Name of the owner. Can be a player UUID or a group name.
type | `String` | "player" or "group".
world | `String` | The fully qualified world name as given by `World#getFqName()`<br> Can be null to access the global permissions table.

Returns | Description
--- | --- 
`int` | The ID for the permission.


##### <a id='loadplayerpermissions'></a>public  function __loadPlayerPermissions__(uuid, world)

_Load permissions for a player_

Argument | Type | Description  
--- | --- | --- 
uuid | `String` | uuid of the player.
world | `String` | the world name

Returns | Description
--- | --- 
[`PermissionProvider`](../permissionsystem/PermissionProvider.md) | PermissionProvider for this player.


##### <a id='pathexists'></a>public  function __pathExists__(path, owner, type, world)

_pathExists method_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument
owner | `String` | owner argument
type | `String` | type argument
world | `String` | world argument

Returns | 
--- | 
`boolean` |


##### <a id='removepermission'></a>public  function __removePermission__(path, world)

_Remove a permission from database. This also removes any relations to groups and players_

Argument | Type | Description  
--- | --- | --- 
path | `String` | String representation of the permission to remove.<br> EXAMPLE: "wolf.command.player.compass"
world | `String` | The fully qualified world name as given by `World#getFqName()`<br> Can be null to access the global permissions table.

Returns | 
--- | 
`void` |


##### <a id='removepermission'></a>public  function __removePermission__(path, subject, world, isPlayer)

_Removes a permission specific to a player or group_

Argument | Type | Description  
--- | --- | --- 
path | `String` | the permission node
subject | `String` | the name of the subject (either group or player uuid)
world | `String` | The fully qualified world name as given by `World#getFqName()`<br> Can be null to access the global permissions table.
isPlayer | `boolean` | `true` if player; `false` if not

Returns | 
--- | 
`void` |


##### <a id='savegrouppermissions'></a>public  function __saveGroupPermissions__(g)

_Saves group permissions. This also adds new permissions + relations if there are any and and updates existing ones_

Argument | Type | Description  
--- | --- | --- 
g | [`Group`](../user/Group.md) | Group to save permission from to the database.

Returns | 
--- | 
`void` |


##### <a id='saveuserpermissions'></a>public  function __saveUserPermissions__(p)

_Save user permissions to file and add new ones if needed + update relations_

Argument | Type | Description  
--- | --- | --- 
p | `Player` | Player to save permissions for to the database.

Returns | 
--- | 
`void` |


##### <a id='updatepermission'></a>public  function __updatePermission__(path, owner, type, world, value)

_Update a permission node with the given values. The values given must clearly identify the node to update._

Argument | Type | Description  
--- | --- | --- 
path | `String` | String representation of the permission to add.<br> EXAMPLE: "wolf.command.player.compass"
owner | `String` | Name of the owner. Can be a player UUID or a group name.
type | `String` | "player" or "group".
world | `String` | The fully qualified world name as given by `World#getFqName()`<br> Can be null to access the global permissions table.
value | `boolean` | True or false

Returns | Description
--- | --- 
`int` | The ID of the updated permission


##### <a id='validateplayerpermissions'></a>public  function __validatePlayerPermissions__(world)

_Validate that player permissions have a UUID and not a playername._

Argument | Type | Description  
--- | --- | --- 
world | `String` | world argument

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
	

