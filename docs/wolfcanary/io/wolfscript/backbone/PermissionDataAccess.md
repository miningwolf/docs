## PermissionDataAccess __class__

>io.wolfscript.backbone.PermissionDataAccess
>Extends [`DataAccess`](..\database\DataAccess.md)

---

### Class Overview

Permission Data Access

Method | Type   
--- | :--- 
new __PermissionDataAccess__(suffix) <br> _Create this data access with an additional suffix_ | _constructor_
 readonly property __Instance__ <br> _Instance property_ | [`DataAccess`](..\database\DataAccess.md)
 var __type__ <br> _Create this data access with an additional suffix_ | `String`
 |
__Inherited items from [`DataAccess`](..\database\DataAccess.md)__ |
abstract readonly property __Instance__ <br> _Get: Construct a new DataAccess object that represents a table_ | [`DataAccess`](..\database\DataAccess.md)
 var __id__ <br> _id field_ | `Integer`





---

### Public Constructors for [`PermissionDataAccess`](PermissionDataAccess.md)

##### <a id='permissiondataaccess'></a>new __PermissionDataAccess__(suffix) 

_Create this data access with an additional suffix_

Argument | Type | Description  
--- | --- | --- 
suffix | `String` | the suffix

---

### Public Properties for [`PermissionDataAccess`](PermissionDataAccess.md)

##### <a id='instance'></a>public  readonly property __Instance__

_Instance property_

Get | 
--- | 
[`DataAccess`](..\database\DataAccess.md) |



---

### Public Fields for [`PermissionDataAccess`](PermissionDataAccess.md)

##### <a id='type'></a>public  var __type__

_Create this data access with an additional suffix_

>Returns
>  `String`

---

### Public Properties for [`DataAccess`](..\database\DataAccess.md)

##### <a id='instance'></a>public abstract readonly property __Instance__

_Get: Construct a new DataAccess object that represents a table in the database with the given name. This AccessObject is empty after it has been created. You need to get data from Database and load it. WolfScript will do this for you. For this simply call Wolf.db().load(yourDataAccess, String[]lookupFields, Object[]whereData); This will fill your AccessObject._

Get | Description
--- | --- 
[`DataAccess`](..\database\DataAccess.md) | HashMap that maps the Column meta data to the data present in database.



---

### Public Fields for [`DataAccess`](..\database\DataAccess.md)

##### <a id='id'></a>public  var __id__

_id field_

>Returns
>  `Integer`

---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

