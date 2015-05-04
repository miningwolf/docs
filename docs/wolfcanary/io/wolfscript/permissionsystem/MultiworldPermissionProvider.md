## MultiworldPermissionProvider __class__

>io.wolfscript.permissionsystem.MultiworldPermissionProvider
>Implements [`PermissionProvider`](PermissionProvider.md)

---

### Class Overview

A PermissionProvider implementation based on PermissionNode objects, with multiworld support

Method | Type   
--- | :--- 
new __MultiworldPermissionProvider__(world, isPlayer, owner) <br> _Constructs a new PermissionProvider that's valid for the given world_ | _constructor_
new __MultiworldPermissionProvider__() <br> _Testing constructor. Use only for testing changes to this provider_ | _constructor_
new __MultiworldPermissionProvider__(parent) <br> _Testing constructor. Use only for testing changes to this provider_ | _constructor_
 writeonly property __Owner__ <br> _Owner property_ | `void`
 readonly property __Parent__ <br> _Parent property_ | [`PermissionProvider`](PermissionProvider.md)
 readonly property __PermissionMap__ <br> _PermissionMap property_ | `List<PermissionNode>`
 readonly property __PermissionsAsStringList__ <br> _PermissionsAsStringList property_ | `List<String>`
 readonly property __World__ <br> _World property_ | `String`
 writeonly property __Type__ <br> _Type property_ | `void`
 function __getChildNodes__(node) <br> _getChildNodes method_ | `List<PermissionNode>`
 function __addPermission__(path, value) <br> _addPermission method_ | `void`
 function __addPermission__(path, value, id) <br> _addPermission method_ | `void`
 function __flushCache__() <br> _flushCache method_ | `void`
 function __pathExists__(permission) <br> _pathExists method_ | `boolean`
 function __printPermissionsToCaller__(caller) <br> _printPermissionsToCaller method_ | `void`
 function __queryPermission__(permission) <br> _queryPermission method_ | `boolean`
 function __reload__() <br> _reload method_ | `void`



---

### Public Constructors for [`MultiworldPermissionProvider`](MultiworldPermissionProvider.md)

##### <a id='multiworldpermissionprovider'></a>new __MultiworldPermissionProvider__(world, isPlayer, owner) 

_Constructs a new PermissionProvider that's valid for the given world_

Argument | Type | Description  
--- | --- | --- 
world | `String` | the world
isPlayer | `boolean` | isPlayer argument
owner | `String` | owner argument

##### <a id='multiworldpermissionprovider'></a>new __MultiworldPermissionProvider__() 

_Testing constructor. Use only for testing changes to this provider_


##### <a id='multiworldpermissionprovider'></a>new __MultiworldPermissionProvider__(parent) 

_Testing constructor. Use only for testing changes to this provider_

Argument | Type | Description  
--- | --- | --- 
parent | [`MultiworldPermissionProvider`](MultiworldPermissionProvider.md) | parent argument

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

##### <a id='getchildnodes'></a>public  function __getChildNodes__(node)

_getChildNodes method_

Argument | Type | Description  
--- | --- | --- 
node | [`PermissionNode`](PermissionNode.md) | node argument

Returns | 
--- | 
`List<PermissionNode>` |


##### <a id='addpermission'></a>public  function __addPermission__(path, value)

_addPermission method_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument
value | `boolean` | value argument

Returns | 
--- | 
`void` |


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
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

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


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

