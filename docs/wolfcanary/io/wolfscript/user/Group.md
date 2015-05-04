## Group __class__

>io.wolfscript.user.Group

---

### Class Overview

Represents a player group

Method | Type   
--- | :--- 
  property __Name__ <br> _Name property_ | `String`
  property __Id__ <br> _Id property_ | `int`
  property __WorldName__ <br> _WorldName property_ | `String`
  property __Prefix__ <br> _Get: Gets the prefix of the Group<br>Set: Sets the prefix of the Group_ | `String`
 readonly property __Children__ <br> _Get: Return am live list of children._ | `List<Group>`
  property __PermissionProvider__ <br> _PermissionProvider property_ | [`PermissionProvider`](../permissionsystem/PermissionProvider.md)
  property __Parent__ <br> _Parent property<br>Set: Set a new parent._ | [`Group`](Group.md)
 writeonly property __DefaultGroup__ <br> _DefaultGroup property_ | `void`
 function __canIgnorerestrictions__() <br> _ID for retrieving permissions from the database_ | `boolean`
 function __canBuild__() <br> _Checks if this group can build_ | `boolean`
 function __addChild__(g) <br> _addChild method_ | `void`
 function __hasPermission__(permission) <br> _Checks in this group and its's parent (and the parent of the parent etc etc) if it has permission_ | `boolean`
 function __detachChild__(g) <br> _detachChild method_ | `void`
 function __hasControlOver__(g) <br> _Check if this group has control over the given group, specifically, check_ | `boolean`
 function __hasParent__() <br> _hasParent method_ | `boolean`
 function __childsToList__() <br> _Returns all the children groups_ | `List<Group>`
 function __isDefaultGroup__() <br> _isDefaultGroup method_ | `boolean`
 function __isAdministratorGroup__() <br> _Check if this group is an administrative groups_ | `boolean`
 function __isGlobal__() <br> _Checks if this group is applied globally (not assigned to a specific world)_ | `boolean`
 function __parentsToList__() <br> _Returns all the parents from this group upwards_ | `List<Group>`
 function __toDataAccess__() <br> _Creates a [`GroupDataAccess`](../backbone/GroupDataAccess.md) of this Group_ | [`GroupDataAccess`](../backbone/GroupDataAccess.md)



---


### Public Properties for [`Group`](Group.md)

##### <a id='name'></a>public   property __Name__

_Name property_

Get | 
--- | 
`String` |

Set | Type | Description  
--- | --- | --- 
name | `String` | name argument


##### <a id='id'></a>public   property __Id__

_Id property_

Get | 
--- | 
`int` |

Set | Type | Description  
--- | --- | --- 
id | `int` | id argument


##### <a id='worldname'></a>public   property __WorldName__

_WorldName property_

Get | Description
--- | --- 
`String` | the worldName fully qualified name for a world

Set | Type | Description  
--- | --- | --- 
worldName | `String` | the worldName to set


##### <a id='prefix'></a>public   property __Prefix__

_Get: Gets the prefix of the Group<br>Set: Sets the prefix of the Group_

Get | Description
--- | --- 
`String` | the prefix

Set | Type | Description  
--- | --- | --- 
prefix | `String` | the prefix to set


##### <a id='children'></a>public  readonly property __Children__

_Get: Return am live list of children. Modify this list only if you know what you're doing. For changing group inheritance use setParent();_

Get | 
--- | 
`List<Group>` |



##### <a id='permissionprovider'></a>public   property __PermissionProvider__

_PermissionProvider property_

Get | 
--- | 
[`PermissionProvider`](../permissionsystem/PermissionProvider.md) |

Set | Type | Description  
--- | --- | --- 
provider | [`PermissionProvider`](../permissionsystem/PermissionProvider.md) | provider argument


##### <a id='parent'></a>public   property __Parent__

_Parent property<br>Set: Set a new parent. This will remove the group from its old parent and add it to the new parents childs list_

Get | 
--- | 
[`Group`](Group.md) |

Set | Type | Description  
--- | --- | --- 
group | [`Group`](Group.md) | group argument


##### <a id='defaultgroup'></a>public  writeonly property __DefaultGroup__

_DefaultGroup property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
defaultGroup | `boolean` | defaultGroup argument


---

### Public Methods for [`Group`](Group.md)

##### <a id='canignorerestrictions'></a>public  function __canIgnorerestrictions__()

_ID for retrieving permissions from the database /
    private int id;

    /** Group Name /
    private String name;

    /** Group Prefix/Color /
    private String prefix = null;

    /** The fully qualified world name valid for this group. If this group is valid for all worlds, this may be null /
    private String worldName = null;

    /** The permission provider for querying permissions etc. /
    private PermissionProvider permissions;

    /** List of groups this group inherits/has control over /
    private List<Group> childGroups = new ArrayList<Group>();

    /** The parent group (the group this group is a child of). Parents have control over their childs /
    private Group parent = null;

    /** Is true if it's the default group /
    private boolean defaultGroup = false;

    /** Check if this group can ignore restrictions_

Returns | Description
--- | --- 
`boolean` | `true` if can Ignore Restrictions


##### <a id='canbuild'></a>public  function __canBuild__()

_Checks if this group can build_

Returns | Description
--- | --- 
`boolean` | `true` if can build


##### <a id='addchild'></a>public  function __addChild__(g)

_addChild method_

Argument | Type | Description  
--- | --- | --- 
g | [`Group`](Group.md) | g argument

Returns | 
--- | 
`void` |


##### <a id='haspermission'></a>public  function __hasPermission__(permission)

_Checks in this group and its's parent (and the parent of the parent etc etc) if it has permission and if the value is true. The first found "true" will be returned, false if there was no "true" or the node had false as value (ie. this group does not have this permission)_

Argument | Type | Description  
--- | --- | --- 
permission | `String` | permission argument

Returns | Description
--- | --- 
`boolean` | `true` if has permission


##### <a id='detachchild'></a>public  function __detachChild__(g)

_detachChild method_

Argument | Type | Description  
--- | --- | --- 
g | [`Group`](Group.md) | g argument

Returns | 
--- | 
`void` |


##### <a id='hascontrolover'></a>public  function __hasControlOver__(g)

_Check if this group has control over the given group, specifically, check if the given group is a child of this group, or if this group is admin.<br>_

Argument | Type | Description  
--- | --- | --- 
g | [`Group`](Group.md) | the group to check control of

Returns | Description
--- | --- 
`boolean` | `true` if has control over


##### <a id='hasparent'></a>public  function __hasParent__()

_hasParent method_

Returns | 
--- | 
`boolean` |


##### <a id='childstolist'></a>public  function __childsToList__()

_Returns all the children groups_

Returns | Description
--- | --- 
`List<Group>` | the list of children groups


##### <a id='isdefaultgroup'></a>public  function __isDefaultGroup__()

_isDefaultGroup method_

Returns | 
--- | 
`boolean` |


##### <a id='isadministratorgroup'></a>public  function __isAdministratorGroup__()

_Check if this group is an administrative groups_

Returns | Description
--- | --- 
`boolean` | `true` if administrator group


##### <a id='isglobal'></a>public  function __isGlobal__()

_Checks if this group is applied globally (not assigned to a specific world)_

Returns | Description
--- | --- 
`boolean` | `true` if global; `false` if not


##### <a id='parentstolist'></a>public  function __parentsToList__()

_Returns all the parents from this group upwards_

Returns | Description
--- | --- 
`List<Group>` | the list of parent groups


##### <a id='todataaccess'></a>public  function __toDataAccess__()

_Creates a [`GroupDataAccess`](../backbone/GroupDataAccess.md) of this Group_

Returns | Description
--- | --- 
[`GroupDataAccess`](../backbone/GroupDataAccess.md) | [`GroupDataAccess`](../backbone/GroupDataAccess.md)


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

