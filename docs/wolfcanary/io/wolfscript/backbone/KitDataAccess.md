## KitDataAccess __class__

>io.wolfscript.backbone.KitDataAccess
>Extends [`DataAccess`](..\database\DataAccess.md)

---

### Class Overview

Kit Data Access

Method | Type   
--- | :--- 
new __KitDataAccess__() <br> _KitDataAccess constructor_ | _constructor_
 readonly property __Instance__ <br> _Instance property_ | [`DataAccess`](..\database\DataAccess.md)
 var __items__ <br> _Delay in seconds to receive this kit._ | `List<String>`
 |
__Inherited items from [`DataAccess`](..\database\DataAccess.md)__ |
abstract readonly property __Instance__ <br> _Get: Construct a new DataAccess object that represents a table_ | [`DataAccess`](..\database\DataAccess.md)
 var __id__ <br> _id field_ | `Integer`





---

### Public Constructors for [`KitDataAccess`](KitDataAccess.md)

##### <a id='kitdataaccess'></a>new __KitDataAccess__() 

_KitDataAccess constructor_


---

### Public Properties for [`KitDataAccess`](KitDataAccess.md)

##### <a id='instance'></a>public  readonly property __Instance__

_Instance property_

Get | 
--- | 
[`DataAccess`](..\database\DataAccess.md) |



---

### Public Fields for [`KitDataAccess`](KitDataAccess.md)

##### <a id='items'></a>public  var __items__

_Delay in seconds to receive this kit. /
    @Column(columnName = "useDelay", dataType = DataType.INTEGER)
    public int useDelay;

    /** List of Users names who can use this kit. /
    @Column(columnName = "owners", dataType = DataType.STRING, isList = true)
    public List<String> owners;

    /** List of groups who can use this kit. /
    @Column(columnName = "groups", dataType = DataType.STRING, isList = true)
    public List<String> groups;

    /** Name of this kit. /
    @Column(columnName = "name", dataType = DataType.STRING)
    public String name;

    /** Items to give from this kit._

>Returns
>  `List<String>`

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
	

