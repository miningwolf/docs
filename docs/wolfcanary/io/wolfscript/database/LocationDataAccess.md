## LocationDataAccess __class__

>io.wolfscript.database.LocationDataAccess
>Extends [`PositionDataAccess`](PositionDataAccess.md)

---

### Class Overview

Location assistant DataAccess object

Method | Type   
--- | :--- 
new __LocationDataAccess__(tableName) <br> _LocationDataAccess constructor_ | _constructor_
new __LocationDataAccess__(tableName, tableSuffix) <br> _LocationDataAccess constructor_ | _constructor_
 var __world__ <br> _world field_ | `String`
 var __dimension__ <br> _dimension field_ | `String`
 |
__Inherited items from [`PositionDataAccess`](PositionDataAccess.md)__ |
new __PositionDataAccess__(tableName) <br> _PositionDataAccess constructor_ | _constructor_
new __PositionDataAccess__(tableName, tableSuffix) <br> _PositionDataAccess constructor_ | _constructor_
 var __posX__ <br> _posX field_ | `double`
 var __posY__ <br> _posY field_ | `double`
 var __posZ__ <br> _posZ field_ | `double`
 |
__Inherited items from [`DataAccess`](DataAccess.md)__ |
abstract readonly property __Instance__ <br> _Get: Construct a new DataAccess object that represents a table_ | [`DataAccess`](DataAccess.md)
 var __id__ <br> _id field_ | `Integer`







---

### Public Constructors for [`LocationDataAccess`](LocationDataAccess.md)

##### <a id='locationdataaccess'></a>new __LocationDataAccess__(tableName) 

_LocationDataAccess constructor_

Argument | Type | Description  
--- | --- | --- 
tableName | `String` | tableName argument

##### <a id='locationdataaccess'></a>new __LocationDataAccess__(tableName, tableSuffix) 

_LocationDataAccess constructor_

Argument | Type | Description  
--- | --- | --- 
tableName | `String` | tableName argument
tableSuffix | `String` | tableSuffix argument

---

### Public Fields for [`LocationDataAccess`](LocationDataAccess.md)

##### <a id='world'></a>public  var __world__

_world field_

>Returns
>  `String`

##### <a id='dimension'></a>public  var __dimension__

_dimension field_

>Returns
>  `String`

---
### Public Constructors for [`PositionDataAccess`](PositionDataAccess.md)

##### <a id='positiondataaccess'></a>new __PositionDataAccess__(tableName) 

_PositionDataAccess constructor_

Argument | Type | Description  
--- | --- | --- 
tableName | `String` | tableName argument

##### <a id='positiondataaccess'></a>new __PositionDataAccess__(tableName, tableSuffix) 

_PositionDataAccess constructor_

Argument | Type | Description  
--- | --- | --- 
tableName | `String` | tableName argument
tableSuffix | `String` | tableSuffix argument

---

### Public Fields for [`PositionDataAccess`](PositionDataAccess.md)

##### <a id='posx'></a>public  var __posX__

_posX field_

>Returns
>  `double`

##### <a id='posy'></a>public  var __posY__

_posY field_

>Returns
>  `double`

##### <a id='posz'></a>public  var __posZ__

_posZ field_

>Returns
>  `double`

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


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

