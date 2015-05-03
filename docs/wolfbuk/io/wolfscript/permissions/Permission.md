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
static function __loadPermission__(name, def) <br> _Returns the unique fully qualified name of this Permission_ | [`Permission`](Permission.md)
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

### Public Methods for [`Permission`](Permission.md)

##### <a id='loadpermission'></a>public static function __loadPermission__(name, def)

_Returns the unique fully qualified name of this Permission_

Argument | Type | Description  
--- | --- | --- 
name | `String` | Name of the parent permission
def | [`PermissionDefault`](PermissionDefault.md) | Default permission value to use if missing

Returns | Description
--- | --- 
[`Permission`](Permission.md) | Fully qualified name /
    public String getName() {
        return name;
    }

    /** Gets the children of this permission. <p> If you change this map in any form, you must call `#recalculatePermissibles()` to recalculate all [`Permissible`](Permissible.md)s


---

### Public Fields for [`Permission`](Permission.md)

##### <a id='default'></a>public static final var __DEFAULT__

_DEFAULT field_

>Returns
>  [`PermissionDefault`](PermissionDefault.md)

---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

