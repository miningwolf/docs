## MultiworldPermissionProvider __class__

>io.wolfscript.permissionsystem.MultiworldPermissionProvider
>Implements [`PermissionProvider`](PermissionProvider.md)

---

### Class Overview

A PermissionProvider implementation based on PermissionNode objects, with multiworld support

Method | Type   
--- | :--- 
 writeonly property __Owner__ <br> _Owner property_ | `void`
 readonly property __Parent__ <br> _Parent property_ | [`PermissionProvider`](PermissionProvider.md)
 readonly property __PermissionMap__ <br> _PermissionMap property_ | `List<PermissionNode>`
 readonly property __PermissionsAsStringList__ <br> _PermissionsAsStringList property_ | `List<String>`
 readonly property __World__ <br> _World property_ | `String`
 writeonly property __Type__ <br> _Type property_ | `void`
 function __addPermission__(path, value, id) <br> _addPermission method_ | `void`
 function __addPermission__(path, value) <br> _addPermission method_ | `void`
 function __flushCache__() <br> _flushCache method_ | `void`
 function __pathExists__(permission) <br> _pathExists method_ | `boolean`
 function __printPermissionsToCaller__(caller) <br> _printPermissionsToCaller method_ | `void`
 function __queryPermission__(permission) <br> _queryPermission method_ | `boolean`
 function __reload__() <br> _reload method_ | `void`



---


### Public Properties for [`MultiworldPermissionProvider`](MultiworldPermissionProvider.md)

##### <a id='owner'></a>public  writeonly property __Owner__

_Owner property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
owner | `String` | owner argument


##### <a id='parent'></a>public  readonly property __Parent__

_Parent property_

Get | 
--- | 
[`PermissionProvider`](PermissionProvider.md) |



##### <a id='permissionmap'></a>public  readonly property __PermissionMap__

_PermissionMap property_

Get | 
--- | 
`List<PermissionNode>` |



##### <a id='permissionsasstringlist'></a>public  readonly property __PermissionsAsStringList__

_PermissionsAsStringList property_

Get | 
--- | 
`List<String>` |



##### <a id='world'></a>public  readonly property __World__

_World property_

Get | 
--- | 
`String` |



##### <a id='type'></a>public  writeonly property __Type__

_Type property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
isPlayerProvider | `boolean` | isPlayerProvider argument


---

### Public Methods for [`MultiworldPermissionProvider`](MultiworldPermissionProvider.md)

##### <a id='addpermission'></a>public  function __addPermission__(path, value, id)

_addPermission method_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument
value | `boolean` | value argument
id | `int` | id argument

Returns | 
--- | 
`void` |


##### <a id='addpermission'></a>public  function __addPermission__(path, value)

_addPermission method_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument
value | `boolean` | value argument

Returns | 
--- | 
`void` |


##### <a id='flushcache'></a>public  function __flushCache__()

_flushCache method_

Returns | 
--- | 
`void` |


##### <a id='pathexists'></a>public  function __pathExists__(permission)

_pathExists method_

Argument | Type | Description  
--- | --- | --- 
permission | `String` | permission argument

Returns | 
--- | 
`boolean` |


##### <a id='printpermissionstocaller'></a>public  function __printPermissionsToCaller__(caller)

_printPermissionsToCaller method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](..\chat\MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='querypermission'></a>public  function __queryPermission__(permission)

_queryPermission method_

Argument | Type | Description  
--- | --- | --- 
permission | `String` | permission argument

Returns | 
--- | 
`boolean` |


##### <a id='reload'></a>public  function __reload__()

_reload method_

Returns | 
--- | 
`void` |


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

