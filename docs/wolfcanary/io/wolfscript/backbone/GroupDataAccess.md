## GroupDataAccess __class__

>io.wolfscript.backbone.GroupDataAccess
>Extends [`DataAccess`](..\database\DataAccess.md)

---

### Class Overview

Group Data Access

Method | Type   
--- | :--- 
new __GroupDataAccess__() <br> _GroupDataAccess constructor_ | _constructor_
 readonly property __Instance__ <br> _Instance property_ | [`DataAccess`](..\database\DataAccess.md)
 var __worldName__ <br> _Name of this group._ | `String`
 |
__Inherited items from [`DataAccess`](..\database\DataAccess.md)__ |
abstract readonly property __Instance__ <br> _Get: Construct a new DataAccess object that represents a table_ | [`DataAccess`](..\database\DataAccess.md)
 var __id__ <br> _id field_ | `Integer`





---

### Public Constructors for [`GroupDataAccess`](GroupDataAccess.md)

##### <a id='groupdataaccess'></a>new __GroupDataAccess__() 

_GroupDataAccess constructor_


---

### Public Properties for [`GroupDataAccess`](GroupDataAccess.md)

##### <a id='instance'></a>public  readonly property __Instance__

_Instance property_

Get | 
--- | 
[`DataAccess`](..\database\DataAccess.md) |



---

### Public Fields for [`GroupDataAccess`](GroupDataAccess.md)

##### <a id='worldname'></a>public  var __worldName__

_Name of this group. /
    @Column(columnName = "name", dataType = DataType.STRING)
    public String name;

    /** Chat prefix for this group. /
    @Column(columnName = "prefix", dataType = DataType.STRING)
    public String prefix;

    /** Parent group for this group. /
    @Column(columnName = "parent", dataType = DataType.STRING)
    public String parent;

    /** Is this the default group? /
    @Column(columnName = "isDefault", dataType = DataType.BOOLEAN)
    public boolean isDefault;

    /** Then world name for this group. May be null if group is global_

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
	

