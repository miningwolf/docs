## WarpDataAccess __class__

>io.wolfscript.backbone.WarpDataAccess
>Extends [`LocationDataAccess`](../database/LocationDataAccess.md)

---

### Class Overview

Warp Data Access

Method | Type   
--- | :--- 
new __WarpDataAccess__() <br> _WarpDataAccess constructor_ | _constructor_
 readonly property __Instance__ <br> _Instance property_ | [`WarpDataAccess`](WarpDataAccess.md)
 var __name__ <br> _Name of this warp._ | `String`
 var __isPlayerHome__ <br> _Is this warp a player home?_ | `boolean`
 var __owner__ <br> _Owner of this warp._ | `String`
 var __groups__ <br> _groups that can use this warp._ | `List<String>`
 |
__Inherited items from [`LocationDataAccess`](../database/LocationDataAccess.md)__ |
new __LocationDataAccess__(tableName) <br> _LocationDataAccess constructor_ | _constructor_
new __LocationDataAccess__(tableName, tableSuffix) <br> _LocationDataAccess constructor_ | _constructor_
 var __world__ <br> _world field_ | `String`
 var __dimension__ <br> _dimension field_ | `String`
 |
__Inherited items from [`PositionDataAccess`](../database/PositionDataAccess.md)__ |
new __PositionDataAccess__(tableName) <br> _PositionDataAccess constructor_ | _constructor_
new __PositionDataAccess__(tableName, tableSuffix) <br> _PositionDataAccess constructor_ | _constructor_
 var __posX__ <br> _posX field_ | `double`
 var __posY__ <br> _posY field_ | `double`
 var __posZ__ <br> _posZ field_ | `double`
 |
__Inherited items from [`DataAccess`](../database/DataAccess.md)__ |
new __DataAccess__(tableName) <br> _Construct a new DataAccess object that represents a table_ | _constructor_
new __DataAccess__(tableName, tableSuffix) <br> _DataAccess constructor_ | _constructor_
abstract readonly property __Instance__ <br> _Get: Returns an empty instance of this [`DataAccess`](../database/DataAccess.md) object_ | [`DataAccess`](../database/DataAccess.md)
final readonly property __Name__ <br> _Get: Load a Data set into this DataAccess object_ | `String`
final function __getColumnForName__(name) <br> _Retrieves a Column with the given name from this DataAccess._ | `Column`
final function __hasColumn__(name) <br> _Checks if this [`DataAccess`](../database/DataAccess.md) has a Column with the given name._ | `boolean`
final function __hasData__() <br> _Check if there is data in this DataAccess object._ | `boolean`
final function __isInconsistent__() <br> _Returns true if this DataAccess object has been marked as inconsistent._ | `boolean`
final function __isLoaded__() <br> _Check if this DataAccess has been loaded properly_ | `boolean`
 function __toString__() <br> _Converts this DataAccess object into a string representation._ | `String`
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

##### <a id='name'></a>public  var __name__

_Name of this warp._

>Returns
>  `String`

##### <a id='isplayerhome'></a>public  var __isPlayerHome__

_Is this warp a player home?_

>Returns
>  `boolean`

##### <a id='owner'></a>public  var __owner__

_Owner of this warp._

>Returns
>  `String`

##### <a id='groups'></a>public  var __groups__

_groups that can use this warp._

>Returns
>  `List<String>`

##### <a id='location'></a>public  var __location__
_Deprecated_

_Serialised location of this warp._

>Returns
>  `String`

---
### Public Constructors for [`LocationDataAccess`](../database/LocationDataAccess.md)

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

### Public Fields for [`LocationDataAccess`](../database/LocationDataAccess.md)

##### <a id='world'></a>public  var __world__

_world field_

>Returns
>  `String`

##### <a id='dimension'></a>public  var __dimension__

_dimension field_

>Returns
>  `String`

---
### Public Constructors for [`PositionDataAccess`](../database/PositionDataAccess.md)

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

### Public Fields for [`PositionDataAccess`](../database/PositionDataAccess.md)

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
### Public Constructors for [`DataAccess`](../database/DataAccess.md)

##### <a id='dataaccess'></a>new __DataAccess__(tableName) 

_Construct a new DataAccess object that represents a table in the database with the given name. This AccessObject is empty after it has been created. You need to get data from Database and load it. WolfScript will do this for you. For this simply call Wolf.db().load(yourDataAccess, String[]lookupFields, Object[]whereData); This will fill your AccessObject._

Argument | Type | Description  
--- | --- | --- 
tableName | `String` | The table name

##### <a id='dataaccess'></a>new __DataAccess__(tableName, tableSuffix) 

_DataAccess constructor_

Argument | Type | Description  
--- | --- | --- 
tableName | `String` | tableName argument
tableSuffix | `String` | tableSuffix argument

---

### Public Properties for [`DataAccess`](../database/DataAccess.md)

##### <a id='instance'></a>public abstract readonly property __Instance__

_Get: Returns an empty instance of this [`DataAccess`](../database/DataAccess.md) object_

Get | Description
--- | --- 
[`DataAccess`](../database/DataAccess.md) | instance



##### <a id='name'></a>public final readonly property __Name__

_Get: Load a Data set into this DataAccess object_

Get | Description
--- | --- 
`String` | HashMap that maps the Column meta data to the data present in database.



---

### Public Methods for [`DataAccess`](../database/DataAccess.md)

##### <a id='getcolumnforname'></a>public final function __getColumnForName__(name)

_Retrieves a Column with the given name from this DataAccess._

Argument | Type | Description  
--- | --- | --- 
name | `String` | the column name

Returns | Description
--- | --- 
`Column` | a column or null if there is no column with the name given


##### <a id='hascolumn'></a>public final function __hasColumn__(name)

_Checks if this [`DataAccess`](../database/DataAccess.md) has a Column with the given name._

Argument | Type | Description  
--- | --- | --- 
name | `String` | the name to check for

Returns | Description
--- | --- 
`boolean` | true if DataAccess has this column, false otherwise


##### <a id='hasdata'></a>public final function __hasData__()

_Check if there is data in this DataAccess object. This will also return false if there was an exception while the data has been loaded_

Returns | Description
--- | --- 
`boolean` | true if this [`DataAccess`](../database/DataAccess.md) contains data


##### <a id='isinconsistent'></a>public final function __isInconsistent__()

_Returns true if this DataAccess object has been marked as inconsistent. Inconsistent DataAccess objects will not be saved into the database. This is probably rarely going to be true but it's an extra security measure to keep the data safe and consistent_

Returns | Description
--- | --- 
`boolean` | true if this object is inconsistent to the database schema, false otherwise


##### <a id='isloaded'></a>public final function __isLoaded__()

_Check if this DataAccess has been loaded properly_

Returns | Description
--- | --- 
`boolean` | true if a load has been attempted for this [`DataAccess`](../database/DataAccess.md)


##### <a id='tostring'></a>public  function __toString__()

_Converts this DataAccess object into a string representation.<br> Format: Table : tableName { [`columnName`,'fieldName'] }_

Returns | Description
--- | --- 
`String` | string representation


---

### Public Fields for [`DataAccess`](../database/DataAccess.md)

##### <a id='id'></a>public  var __id__

_id field_

>Returns
>  `Integer`

---


---


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

