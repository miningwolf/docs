## Permission __class__

>io.wolfscript.permissions.Permission

---

### Class Overview

Represents a unique permission that may be attached to a [`Permissible`](Permissible.md)

Method | Type   
--- | :--- 
new __Permission__(name) <br> _Permission constructor_ | _constructor_
new __Permission__(name, description) <br> _Permission constructor_ | _constructor_
new __Permission__(name, defaultValue) <br> _Permission constructor_ | _constructor_
new __Permission__(name, description, defaultValue) <br> _Permission constructor_ | _constructor_
new __Permission__(name) <br> _Permission constructor_ | _constructor_
new __Permission__(name, description) <br> _Permission constructor_ | _constructor_
new __Permission__(name, defaultValue) <br> _Permission constructor_ | _constructor_
new __Permission__(name, description, defaultValue) <br> _Permission constructor_ | _constructor_
 readonly property __Name__ <br> _Get: Returns the unique fully qualified name of this Permission_ | `String`
  property __Description__ <br> _Get: Gets a brief description of this permission, if set<br>Set: Sets the description of this permission._ | `String`
  property __Default__ <br> _Get: Gets the children of this permission.<br>Set: Sets the default value of this permission._ | [`PermissionDefault`](PermissionDefault.md)
 readonly property __Permissibles__ <br> _Get: Gets a set containing every [`Permissible`](Permissible.md) that has this_ | `Set<Permissible>`
 function __recalculatePermissibles__() <br> _Recalculates all [`Permissible`](Permissible.md)s that contain this permission._ | `void`
 function __addParent__(perm, value) <br> _Adds this permission to the specified parent permission._ | `void`
 function __addParent__(name, value) <br> _Adds this permission to the specified parent permission._ | [`Permission`](Permission.md)
static function __loadPermission__(name) <br> _Loads a Permission from a map of data, usually used from retrieval from_ | [`Permission`](Permission.md)
static function __loadPermission__(name, def) <br> _Loads a Permission from a map of data, usually used from retrieval from_ | [`Permission`](Permission.md)
static function __loadPermissions__(error, def) <br> _Loads a list of Permissions from a map of data, usually used from_ | `List<Permission>`
static final var __DEFAULT__ <br> _DEFAULT field_ | [`PermissionDefault`](PermissionDefault.md)



---

### Public Constructors for [`Permission`](Permission.md)

##### <a id='permission'></a>new __Permission__(name) 

_Permission constructor_

Argument | Type | Description  
--- | --- | --- 
name | `String` | name argument

##### <a id='permission'></a>new __Permission__(name, description) 

_Permission constructor_

Argument | Type | Description  
--- | --- | --- 
name | `String` | name argument
description | `String` | description argument

##### <a id='permission'></a>new __Permission__(name, defaultValue) 

_Permission constructor_

Argument | Type | Description  
--- | --- | --- 
name | `String` | name argument
defaultValue | [`PermissionDefault`](PermissionDefault.md) | defaultValue argument

##### <a id='permission'></a>new __Permission__(name, description, defaultValue) 

_Permission constructor_

Argument | Type | Description  
--- | --- | --- 
name | `String` | name argument
description | `String` | description argument
defaultValue | [`PermissionDefault`](PermissionDefault.md) | defaultValue argument

##### <a id='permission'></a>new __Permission__(name) 

_Permission constructor_

Argument | Type | Description  
--- | --- | --- 
name | `String` | name argument

##### <a id='permission'></a>new __Permission__(name, description) 

_Permission constructor_

Argument | Type | Description  
--- | --- | --- 
name | `String` | name argument
description | `String` | description argument

##### <a id='permission'></a>new __Permission__(name, defaultValue) 

_Permission constructor_

Argument | Type | Description  
--- | --- | --- 
name | `String` | name argument
defaultValue | [`PermissionDefault`](PermissionDefault.md) | defaultValue argument

##### <a id='permission'></a>new __Permission__(name, description, defaultValue) 

_Permission constructor_

Argument | Type | Description  
--- | --- | --- 
name | `String` | name argument
description | `String` | description argument
defaultValue | [`PermissionDefault`](PermissionDefault.md) | defaultValue argument

---

### Public Properties for [`Permission`](Permission.md)

##### <a id='name'></a>public  readonly property __Name__

_Get: Returns the unique fully qualified name of this Permission_

Get | Description
--- | --- 
`String` | Fully qualified name



##### <a id='description'></a>public   property __Description__

_Get: Gets a brief description of this permission, if set<br>Set: Sets the description of this permission. <p> This will not be saved to disk, and is a temporary operation until the server reloads permissions._

Get | Description
--- | --- 
`String` | Brief description of this permission

Set | Type | Description  
--- | --- | --- 
value | `String` | The new description to set


##### <a id='default'></a>public   property __Default__

_Get: Gets the children of this permission. <p> If you change this map in any form, you must call `#recalculatePermissibles()` to recalculate all [`Permissible`](Permissible.md)s<br>Set: Sets the default value of this permission. <p> This will not be saved to disk, and is a temporary operation until the server reloads permissions. Changing this default will cause all [`Permissible`](Permissible.md)s that contain this permission to recalculate their permissions_

Get | Description
--- | --- 
[`PermissionDefault`](PermissionDefault.md) | Permission children /
    public Map<String, Boolean> getChildren() {
        return children;
    }

    /** Gets the default value of this permission.

Set | Type | Description  
--- | --- | --- 
value | [`PermissionDefault`](PermissionDefault.md) | The new default to set


##### <a id='permissibles'></a>public  readonly property __Permissibles__

_Get: Gets a set containing every [`Permissible`](Permissible.md) that has this permission. <p> This set cannot be modified._

Get | Description
--- | --- 
`Set<Permissible>` | Set containing permissibles with this permission



---

### Public Methods for [`Permission`](Permission.md)

##### <a id='recalculatepermissibles'></a>public  function __recalculatePermissibles__()

_Recalculates all [`Permissible`](Permissible.md)s that contain this permission. <p> This should be called after modifying the children, and is automatically called after modifying the default value_

Returns | 
--- | 
`void` |


##### <a id='addparent'></a>public  function __addParent__(perm, value)

_Adds this permission to the specified parent permission._

Argument | Type | Description  
--- | --- | --- 
perm | [`Permission`](Permission.md) | Parent permission to register with
value | `boolean` | The value to set this permission to

Returns | 
--- | 
`void` |


##### <a id='addparent'></a>public  function __addParent__(name, value)

_Adds this permission to the specified parent permission. <p> If the parent permission does not exist, it will be created and registered._

Argument | Type | Description  
--- | --- | --- 
name | `String` | Name of the parent permission
value | `boolean` | The value to set this permission to

Returns | Description
--- | --- 
[`Permission`](Permission.md) | Parent permission it created or loaded


##### <a id='loadpermission'></a>public static function __loadPermission__(name)

_Loads a Permission from a map of data, usually used from retrieval from a yaml file. <p> The data may contain the following keys: <ul> <li>default: Boolean true or false. If not specified, false. <li>children: {@code Map<String, Boolean>} of child permissions. If not specified, empty list. <li>description: Short string containing a very small description of this description. If not specified, empty string. </ul>_

Argument | Type | Description  
--- | --- | --- 
name | `String` | Name of the permission

Returns | Description
--- | --- 
[`Permission`](Permission.md) | Permission object


##### <a id='loadpermission'></a>public static function __loadPermission__(name, def)

_Loads a Permission from a map of data, usually used from retrieval from a yaml file. <p> The data may contain the following keys: <ul> <li>default: Boolean true or false. If not specified, false. <li>children: {@code Map<String, Boolean>} of child permissions. If not specified, empty list. <li>description: Short string containing a very small description of this description. If not specified, empty string. </ul>_

Argument | Type | Description  
--- | --- | --- 
name | `String` | Name of the permission
def | [`PermissionDefault`](PermissionDefault.md) | Default permission value to use if not set

Returns | Description
--- | --- 
[`Permission`](Permission.md) | Permission object


##### <a id='loadpermissions'></a>public static function __loadPermissions__(error, def)

_Loads a list of Permissions from a map of data, usually used from retrieval from a yaml file. <p> The data may contain a list of name:data, where the data contains the following keys: <ul> <li>default: Boolean true or false. If not specified, false. <li>children: {@code Map<String, Boolean>} of child permissions. If not specified, empty list. <li>description: Short string containing a very small description of this description. If not specified, empty string. </ul>_

Argument | Type | Description  
--- | --- | --- 
error | `String` | An error message to show if a permission is invalid.
def | [`PermissionDefault`](PermissionDefault.md) | Default permission value to use if missing

Returns | Description
--- | --- 
`List<Permission>` | Permission object


---

### Public Fields for [`Permission`](Permission.md)

##### <a id='default'></a>public static final var __DEFAULT__

_DEFAULT field_

>Returns
>  [`PermissionDefault`](PermissionDefault.md)

---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

