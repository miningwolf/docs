## PermissionManager __class__

>io.wolfscript.permissionsystem.PermissionManager

---

### Class Overview

This handles the loading of permission providers for groups and players

Method | Type   
--- | :--- 
new __PermissionManager__() <br> _PermissionManager constructor_ | _constructor_
 function __addPermission__(path, value, owner, type, world) <br> _addPermission method_ | `int`
 function __getGroupsProvider__(name, worldname) <br> _Load the permission set for the group with the given name._ | [`PermissionProvider`](PermissionProvider.md)
 function __getPlayerProvider__(uuid, worldname) <br> _Load the permission set for the group with the given name._ | [`PermissionProvider`](PermissionProvider.md)
 function __removeAllGroupPermissions__(group) <br> _removeAllGroupPermissions method_ | `void`
 function __removeGroupPermission__(path, group) <br> _removeGroupPermission method_ | `void`
 function __removePermissions__(path, world) <br> _removePermissions method_ | `void`
 function __removePlayerPermission__(path, player) <br> _removePlayerPermission method_ | `void`
 function __removePlayerPermission__(path, player, world) <br> _removePlayerPermission method_ | `void`
 function __savePermissionsFromGroup__(g) <br> _savePermissionsFromGroup method_ | `void`
 function __savePermissionsFromPlayer__(p) <br> _savePermissionsFromPlayer method_ | `void`



---

### Public Constructors for [`PermissionManager`](PermissionManager.md)

##### <a id='permissionmanager'></a>new __PermissionManager__() 

_PermissionManager constructor_


---

### Public Methods for [`PermissionManager`](PermissionManager.md)

##### <a id='addpermission'></a>public  function __addPermission__(path, value, owner, type, world)

_addPermission method_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument
value | `boolean` | value argument
owner | `String` | owner argument
type | `String` | type argument
world | `String` | world argument

Returns | 
--- | 
`int` |


##### <a id='getgroupsprovider'></a>public  function __getGroupsProvider__(name, worldname)

_Load the permission set for the group with the given name._

Argument | Type | Description  
--- | --- | --- 
name | `String` | name argument
worldname | `String` | The Fully qualified name of the world to load permissions for

Returns | Description
--- | --- 
[`PermissionProvider`](PermissionProvider.md) | [`PermissionProvider`](PermissionProvider.md)


##### <a id='getplayerprovider'></a>public  function __getPlayerProvider__(uuid, worldname)

_Load the permission set for the group with the given name._

Argument | Type | Description  
--- | --- | --- 
uuid | `String` | uuid argument
worldname | `String` | The Fully qualified name of the world to load permissions for

Returns | Description
--- | --- 
[`PermissionProvider`](PermissionProvider.md) | [`PermissionProvider`](PermissionProvider.md)


##### <a id='removeallgrouppermissions'></a>public  function __removeAllGroupPermissions__(group)

_removeAllGroupPermissions method_

Argument | Type | Description  
--- | --- | --- 
group | [`Group`](../user/Group.md) | group argument

Returns | 
--- | 
`void` |


##### <a id='removegrouppermission'></a>public  function __removeGroupPermission__(path, group)

_removeGroupPermission method_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument
group | [`Group`](../user/Group.md) | group argument

Returns | 
--- | 
`void` |


##### <a id='removepermissions'></a>public  function __removePermissions__(path, world)

_removePermissions method_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument
world | `String` | world argument

Returns | 
--- | 
`void` |


##### <a id='removeplayerpermission'></a>public  function __removePlayerPermission__(path, player)

_removePlayerPermission method_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument
player | [`PlayerReference`](../api/PlayerReference.md) | player argument

Returns | 
--- | 
`void` |


##### <a id='removeplayerpermission'></a>public  function __removePlayerPermission__(path, player, world)

_removePlayerPermission method_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument
player | `String` | player argument
world | `String` | world argument

Returns | 
--- | 
`void` |


##### <a id='savepermissionsfromgroup'></a>public  function __savePermissionsFromGroup__(g)

_savePermissionsFromGroup method_

Argument | Type | Description  
--- | --- | --- 
g | [`Group`](../user/Group.md) | g argument

Returns | 
--- | 
`void` |


##### <a id='savepermissionsfromplayer'></a>public  function __savePermissionsFromPlayer__(p)

_savePermissionsFromPlayer method_

Argument | Type | Description  
--- | --- | --- 
p | `Player` | p argument

Returns | 
--- | 
`void` |


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

