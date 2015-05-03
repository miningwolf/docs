## PlayerDataAccess __class__

>io.wolfscript.backbone.PlayerDataAccess
>Extends [`DataAccess`](..\database\DataAccess.md)

---

### Class Overview

Player Data Access

Method | Type   
--- | :--- 
new __PlayerDataAccess__() <br> _PlayerDataAccess constructor_ | _constructor_
 readonly property __Instance__ <br> _Instance property_ | [`DataAccess`](..\database\DataAccess.md)
final function __toString__() <br> _toString method_ | `String`
 var __subgroups__ <br> _Player uuid for this ban._ | `List<String>`
 |
__Inherited items from [`DataAccess`](..\database\DataAccess.md)__ |
abstract readonly property __Instance__ <br> _Get: Construct a new DataAccess object that represents a table_ | [`DataAccess`](..\database\DataAccess.md)
 var __id__ <br> _id field_ | `Integer`





---

### Public Constructors for [`PlayerDataAccess`](PlayerDataAccess.md)

##### <a id='playerdataaccess'></a>new __PlayerDataAccess__() 

_PlayerDataAccess constructor_


---

### Public Properties for [`PlayerDataAccess`](PlayerDataAccess.md)

##### <a id='instance'></a>public  readonly property __Instance__

_Instance property_

Get | 
--- | 
[`DataAccess`](..\database\DataAccess.md) |



---

### Public Methods for [`PlayerDataAccess`](PlayerDataAccess.md)

##### <a id='tostring'></a>public final function __toString__()

_toString method_

Returns | 
--- | 
`String` |


---

### Public Fields for [`PlayerDataAccess`](PlayerDataAccess.md)

##### <a id='subgroups'></a>public  var __subgroups__

_Player uuid for this ban. /
    @Column(columnName = "uuid", dataType = DataType.STRING)
    public String uuid;

    /** name of the player. /
    @Column(columnName = "name", dataType = DataType.STRING)
    public String name;

    /** Player prefix. /
    @Column(columnName = "prefix", dataType = DataType.STRING)
    public String prefix;

    /** Player group. /
    @Column(columnName = "group", dataType = DataType.STRING)
    public String group;

    /** Is this player muted? /
    @Column(columnName = "isMuted", dataType = DataType.BOOLEAN)
    public boolean isMuted = false;

    /** A list of additional sub groups. Permissions will be solved according to first to come, first to rule. Unless specified otherwise, a players color will be the one of the main group_

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
	

