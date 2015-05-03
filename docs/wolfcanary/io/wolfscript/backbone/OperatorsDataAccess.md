## OperatorsDataAccess __class__

>io.wolfscript.backbone.OperatorsDataAccess
>Extends [`DataAccess`](..\database\DataAccess.md)

---

### Class Overview

Operators Data Access

Method | Type   
--- | :--- 
new __OperatorsDataAccess__() <br> _OperatorsDataAccess constructor_ | _constructor_
 readonly property __Instance__ <br> _Instance property_ | [`DataAccess`](..\database\DataAccess.md)
 var __player__ <br> _Playername for this operator entry_ | `String`
 |
__Inherited items from [`DataAccess`](..\database\DataAccess.md)__ |
abstract readonly property __Instance__ <br> _Get: Construct a new DataAccess object that represents a table_ | [`DataAccess`](..\database\DataAccess.md)
 var __id__ <br> _id field_ | `Integer`





---

### Public Constructors for [`OperatorsDataAccess`](OperatorsDataAccess.md)

##### <a id='operatorsdataaccess'></a>new __OperatorsDataAccess__() 

_OperatorsDataAccess constructor_


---

### Public Properties for [`OperatorsDataAccess`](OperatorsDataAccess.md)

##### <a id='instance'></a>public  readonly property __Instance__

_Instance property_

Get | 
--- | 
[`DataAccess`](..\database\DataAccess.md) |



---

### Public Fields for [`OperatorsDataAccess`](OperatorsDataAccess.md)

##### <a id='player'></a>public  var __player__

_Playername for this operator entry_

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
	

