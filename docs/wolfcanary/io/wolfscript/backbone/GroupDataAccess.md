## GroupDataAccess __class__

>io.wolfscript.backbone.GroupDataAccess
>Extends [`DataAccess`](../database/DataAccess.md)

---

### Class Overview

Group Data Access

Method | Type   
--- | :--- 
new __GroupDataAccess__() <br> _GroupDataAccess constructor_ | _constructor_
 readonly property __Instance__ <br> _Instance property_ | [`DataAccess`](../database/DataAccess.md)
 var __name__ <br> _Name of this group._ | `String`
 var __prefix__ <br> _Chat prefix for this group._ | `String`
 var __parent__ <br> _Parent group for this group._ | `String`
 var __isDefault__ <br> _Is this the default group?_ | `boolean`
 var __worldName__ <br> _Then world name for this group. May be null if group is global_ | `String`
 |
__Inherited items from [`DataAccess`](../database/DataAccess.md)__ |
new __DataAccess__(tableName) <br> _Construct a new DataAccess object that represents a table_ | _constructor_
new __DataAccess__(tableName, tableSuffix) <br> _DataAccess constructor_ | _constructor_
abstract readonly property __Instance__ <br> _Get: Returns an empty instance of this [`DataAccess`](../database/DataAccess.md) object_ | [`DataAccess`](../database/DataAccess.md)
final readonly property __Name__ <br> _Get: This shall return the name of the Table this DataAccess belongs to_ | `String`
final function __getColumnForName__(name) <br> _Retrieves a Column with the given name from this DataAccess._ | `Column`
final function __hasColumn__(name) <br> _Checks if this [`DataAccess`](../database/DataAccess.md) has a Column with the given name._ | `boolean`
final function __hasData__() <br> _Check if there is data in this DataAccess object._ | `boolean`
final function __isInconsistent__() <br> _Returns true if this DataAccess object has been marked as inconsistent._ | `boolean`
final function __isLoaded__() <br> _Check if this DataAccess has been loaded properly_ | `boolean`
 function __toString__() <br> _Converts this DataAccess object into a string representation._ | `String`
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
[`DataAccess`](../database/DataAccess.md) |



---

### Public Fields for [`GroupDataAccess`](GroupDataAccess.md)

##### <a id='name'></a>public  var __name__

_Name of this group._

>Returns
>  `String`

##### <a id='prefix'></a>public  var __prefix__

_Chat prefix for this group._

>Returns
>  `String`

##### <a id='parent'></a>public  var __parent__

_Parent group for this group._

>Returns
>  `String`

##### <a id='isdefault'></a>public  var __isDefault__

_Is this the default group?_

>Returns
>  `boolean`

##### <a id='worldname'></a>public  var __worldName__

_Then world name for this group. May be null if group is global_

>Returns
>  `String`

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

_Get: This shall return the name of the Table this DataAccess belongs to_

Get | Description
--- | --- 
`String` | the table name



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


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

