## PermissionNode __class__

>io.wolfscript.permissionsystem.PermissionNode

---

### Class Overview

A permission node. This represents a permission. Who would have thought

Method | Type   
--- | :--- 
new __PermissionNode__(name, value) <br> _ID in the database_ | _constructor_
  property __Id__ <br> _Get: Get the database ID for this node<br>Set: Set the database ID for this Node._ | `int`
 readonly property __FullPath__ <br> _Get: Returns the full path name for this node starting here,_ | `String`
 readonly property __Name__ <br> _Get: Get the name of this node_ | `String`
  property __Value__ <br> _Get: Get the value of this node<br>Set: Override the initially given value for this node_ | `boolean`
 writeonly property __ParentNode__ <br> _Set: Sets the parent node._ | `void`
 function __hasChildNode__(child) <br> _Check if this child node exists already_ | `boolean`
 function __addPath__(value, index) <br> _addPath method_ | `void`
static function __fromString__(in) <br> _Returns a permission node from a well formatted string._ | [`PermissionNode`](PermissionNode.md)
 function __addChildNode__(child) <br> _Put the given PermissionNode into the child list of this PermissionNode_ | `void`
 function __getChildNode__(child) <br> _Get a child node of this node with the given name_ | [`PermissionNode`](PermissionNode.md)
 function __hasChilds__() <br> _Get all childs for this node_ | `boolean`
 function __isWildcard__() <br> _Check if this is an asterisk permission, granting access to all_ | `boolean`
 function __resolvePath__(index) <br> _Purely resolves a path._ | `boolean`
 function __resolveToValue__(index) <br> _Resolves a given path of permission names into the resulting value._ | `boolean`
 function __toString__() <br> _toString method_ | `String`



---

### Public Constructors for [`PermissionNode`](PermissionNode.md)

##### <a id='permissionnode'></a>new __PermissionNode__(name, value) 

_ID in the database /
    private int id;

    private Map<String, PermissionNode> childs = new HashMap<String, PermissionNode>();

    private PermissionNode parent = null;

    /** Create a new PermissionNode._

Argument | Type | Description  
--- | --- | --- 
name | `String` | the name
value | `boolean` | the value

---

### Public Properties for [`PermissionNode`](PermissionNode.md)

##### <a id='id'></a>public   property __Id__

_Get: Get the database ID for this node<br>Set: Set the database ID for this Node. <b style="color:red">Do not use this unless you're dead sure what you're doing! it is HIGHLY unlikely that you will need this</b>_

Get | Description
--- | --- 
`int` | the id

Set | Type | Description  
--- | --- | --- 
id | `int` | the id to set


##### <a id='fullpath'></a>public  readonly property __FullPath__

_Get: Returns the full path name for this node starting here, upwards to the first node in the inheritance tree_

Get | Description
--- | --- 
`String` | a string representing the path up to this node



##### <a id='name'></a>public  readonly property __Name__

_Get: Get the name of this node_

Get | Description
--- | --- 
`String` | the name



##### <a id='value'></a>public   property __Value__

_Get: Get the value of this node<br>Set: Override the initially given value for this node_

Get | Description
--- | --- 
`boolean` | the value of this node where true means "granted" false means "denied"

Set | Type | Description  
--- | --- | --- 
value | `boolean` | the value for this node


##### <a id='parentnode'></a>public  writeonly property __ParentNode__

_Set: Sets the parent node._

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
parent | [`PermissionNode`](PermissionNode.md) | the new parent


---

### Public Methods for [`PermissionNode`](PermissionNode.md)

##### <a id='haschildnode'></a>public  function __hasChildNode__(child)

_Check if this child node exists already_

Argument | Type | Description  
--- | --- | --- 
child | `String` | child argument

Returns | 
--- | 
`boolean` |


##### <a id='addpath'></a>public  function __addPath__(value, index)

_addPath method_

Argument | Type | Description  
--- | --- | --- 
value | `boolean` | value argument
index | `int` | index argument

Returns | 
--- | 
`void` |


##### <a id='fromstring'></a>public static function __fromString__(in)

_Returns a permission node from a well formatted string.<br> The String should be node.path:value<br> Where value should be true or false. Value is an optional field. It will default to true_

Argument | Type | Description  
--- | --- | --- 
in | `String` | in argument

Returns | 
--- | 
[`PermissionNode`](PermissionNode.md) |


##### <a id='addchildnode'></a>public  function __addChildNode__(child)

_Put the given PermissionNode into the child list of this PermissionNode_

Argument | Type | Description  
--- | --- | --- 
child | [`PermissionNode`](PermissionNode.md) | the child to add

Returns | 
--- | 
`void` |


##### <a id='getchildnode'></a>public  function __getChildNode__(child)

_Get a child node of this node with the given name_

Argument | Type | Description  
--- | --- | --- 
child | `String` | name of the child node

Returns | Description
--- | --- 
[`PermissionNode`](PermissionNode.md) | an instance of the child node. Might be null if the specified child does not exist


##### <a id='haschilds'></a>public  function __hasChilds__()

_Get all childs for this node_

Returns | Description
--- | --- 
`boolean` | a map of name=>permissionNode pairs representing this nodes children /
    public Map<String, PermissionNode> getChilds() {
        return childs;
    }

    /** Check if this node has childs


##### <a id='iswildcard'></a>public  function __isWildcard__()

_Check if this is an asterisk permission, granting access to all subsequent nodes_

Returns | Description
--- | --- 
`boolean` | true if this is a wildcard node, false otherwise


##### <a id='resolvepath'></a>public  function __resolvePath__(index)

_Purely resolves a path. This can be used to see if any given permission path can be fully resolved. Wildcards are taken into account_

Argument | Type | Description  
--- | --- | --- 
index | `int` | the current index in the string array

Returns | Description
--- | --- 
`boolean` | true if path can be resolved, false otherwise


##### <a id='resolvetovalue'></a>public  function __resolveToValue__(index)

_Resolves a given path of permission names into the resulting value. This resolves the permission_

Argument | Type | Description  
--- | --- | --- 
index | `int` | the current index in the string array

Returns | Description
--- | --- 
`boolean` | true if permission on this path is granted, false otherwise


##### <a id='tostring'></a>public  function __toString__()

_toString method_

Returns | 
--- | 
`String` |


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

