## WarpDataAccess __class__

>io.wolfscript.backbone.WarpDataAccess
>Extends [`LocationDataAccess`](..\database\LocationDataAccess.md)

---

### Class Overview

Warp Data Access

Method | Type   
--- | :--- 
new __WarpDataAccess__() <br> _WarpDataAccess constructor_ | _constructor_
 readonly property __Instance__ <br> _Instance property_ | [`WarpDataAccess`](WarpDataAccess.md)
 |
__Inherited items from [`LocationDataAccess`](..\database\LocationDataAccess.md)__ |
new __LocationDataAccess__(tableName) <br> _LocationDataAccess constructor_ | _constructor_
new __LocationDataAccess__(tableName, tableSuffix) <br> _LocationDataAccess constructor_ | _constructor_
 var __world__ <br> _world field_ | `String`
 var __dimension__ <br> _dimension field_ | `String`
 |
__Inherited items from [`PositionDataAccess`](..\database\PositionDataAccess.md)__ |
new __PositionDataAccess__(tableName) <br> _PositionDataAccess constructor_ | _constructor_
new __PositionDataAccess__(tableName, tableSuffix) <br> _PositionDataAccess constructor_ | _constructor_
 var __posX__ <br> _posX field_ | `double`
 var __posY__ <br> _posY field_ | `double`
 var __posZ__ <br> _posZ field_ | `double`
 |
__Inherited items from [`DataAccess`](..\database\DataAccess.md)__ |
abstract readonly property __Instance__ <br> _Get: Construct a new DataAccess object that represents a table_ | [`DataAccess`](..\database\DataAccess.md)
 var __id__ <br> _id field_ | `Integer`









---

### Public Constructors for [`WarpDataAccess`](WarpDataAccess.md)

##### <a id='warpdataaccess'></a>new __WarpDataAccess__() 

_WarpDataAccess constructor_


---

### Public Properties for [`WarpDataAccess`](WarpDataAccess.md)

##### <a id='instance'></a>public  readonly property __Instance__

_Instance property_

Get | 
--- | 
[`WarpDataAccess`](WarpDataAccess.md) |



---

### Public Fields for [`WarpDataAccess`](WarpDataAccess.md)

##### <a id='location'></a>public  var __location__
_Deprecated_

_Name of this warp. /
    @Column(columnName = "name", notNull = true, dataType = DataType.STRING)
    public String name;

    /** Is this warp a player home? /
    @Column(columnName = "isPlayerHome", dataType = DataType.BOOLEAN)
    public boolean isPlayerHome;

    /** Owner of this warp. /
    @Column(columnName = "owner", dataType = DataType.STRING)
    public String owner; // Converting to UUID

    /** groups that can use this warp. /
    @Column(columnName = "groups", dataType = DataType.STRING, isList = true)
    public List<String> groups;

    /** Serialised location of this warp._

>Returns
>  `String`

---
### Public Constructors for [`LocationDataAccess`](..\database\LocationDataAccess.md)

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

### Public Fields for [`LocationDataAccess`](..\database\LocationDataAccess.md)

##### <a id='world'></a>public  var __world__

_world field_

>Returns
>  `String`

##### <a id='dimension'></a>public  var __dimension__

_dimension field_

>Returns
>  `String`

---
### Public Constructors for [`PositionDataAccess`](..\database\PositionDataAccess.md)

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

### Public Fields for [`PositionDataAccess`](..\database\PositionDataAccess.md)

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


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

