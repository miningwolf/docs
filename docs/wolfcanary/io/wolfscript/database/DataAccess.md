## DataAccess __class__

>io.wolfscript.database.DataAccess

---

### Class Overview

Handle the layout and creation of tables

Method | Type   
--- | :--- 
abstract readonly property __Instance__ <br> _Get: Construct a new DataAccess object that represents a table_ | [`DataAccess`](DataAccess.md)
 var __id__ <br> _id field_ | `Integer`



---


### Public Properties for [`DataAccess`](DataAccess.md)

##### <a id='instance'></a>public abstract readonly property __Instance__

_Get: Construct a new DataAccess object that represents a table in the database with the given name. This AccessObject is empty after it has been created. You need to get data from Database and load it. WolfScript will do this for you. For this simply call Wolf.db().load(yourDataAccess, String[]lookupFields, Object[]whereData); This will fill your AccessObject._

Get | Description
--- | --- 
[`DataAccess`](DataAccess.md) | HashMap that maps the Column meta data to the data present in database.



---

### Public Fields for [`DataAccess`](DataAccess.md)

##### <a id='id'></a>public  var __id__

_id field_

>Returns
>  `Integer`

---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

