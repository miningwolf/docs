## BanDataAccess __class__

>io.wolfscript.backbone.BanDataAccess
>Extends [`DataAccess`](..\database\DataAccess.md)

---

### Class Overview

Ban Data Access

Method | Type   
--- | :--- 
new __BanDataAccess__() <br> _BanDataAccess constructor_ | _constructor_
 readonly property __Instance__ <br> _Instance property_ | [`DataAccess`](..\database\DataAccess.md)
 var __issuedDate__ <br> _Player uuid for this ban._ | `long`
 |
__Inherited items from [`DataAccess`](..\database\DataAccess.md)__ |
abstract readonly property __Instance__ <br> _Get: Construct a new DataAccess object that represents a table_ | [`DataAccess`](..\database\DataAccess.md)
 var __id__ <br> _id field_ | `Integer`





---

### Public Constructors for [`BanDataAccess`](BanDataAccess.md)

##### <a id='bandataaccess'></a>new __BanDataAccess__() 

_BanDataAccess constructor_


---

### Public Properties for [`BanDataAccess`](BanDataAccess.md)

##### <a id='instance'></a>public  readonly property __Instance__

_Instance property_

Get | 
--- | 
[`DataAccess`](..\database\DataAccess.md) |



---

### Public Fields for [`BanDataAccess`](BanDataAccess.md)

##### <a id='issueddate'></a>public  var __issuedDate__

_Player uuid for this ban. /
    @Column(columnName = "uuid", dataType = DataType.STRING)
    public String uuid;

    /** Player name for this ban. /
    @Column(columnName = "player", dataType = DataType.STRING)
    public String player;

    /** IP Address for this ban. /
    @Column(columnName = "ip", dataType = DataType.STRING)
    public String ip;

    /** Reason for this ban. /
    @Column(columnName = "reason", dataType = DataType.STRING)
    public String reason;

    /** Player who banned this player. /
    @Column(columnName = "banningPlayer", dataType = DataType.STRING)
    public String banningPlayer;

    /** Date to unban. /
    @Column(columnName = "unbanDate", dataType = DataType.LONG)
    public long unbanDate = -1;

    /** Date ban issued._

>Returns
>  `long`

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
	

