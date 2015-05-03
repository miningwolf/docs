## BackboneBans __class__

>io.wolfscript.backbone.BackboneBans
>Extends [`Backbone`](Backbone.md)

---

### Class Overview

Backbone to the ban System. This contains NO logic, it is only the data source access!

Method | Type   
--- | :--- 
new __BackboneBans__() <br> _BackboneBans constructor_ | _constructor_
 function __loadBans__() <br> _Add a new Ban to the list of bans._ | `List<Ban>`
 |
__Inherited items from [`Backbone`](Backbone.md)__ |
new __Backbone__(system) <br> _Backbone constructor_ | _constructor_
 readonly property __System__ <br> _Get: Get the System of this backbone_ | `System`





---

### Public Constructors for [`BackboneBans`](BackboneBans.md)

##### <a id='backbonebans'></a>new __BackboneBans__() 

_BackboneBans constructor_


---

### Public Methods for [`BackboneBans`](BackboneBans.md)

##### <a id='loadbans'></a>public  function __loadBans__()

_Add a new Ban to the list of bans._

Returns | Description
--- | --- 
`List<Ban>` | Returns a ban object if that ban was found, null otherwise /
    public Ban getBan(String uuid) {
        BanDataAccess data = new BanDataAccess();

        try {
            HashMap<String, Object> filter = new HashMap<String, Object>();
            filter.put("uuid", uuid);
            Database.get().load(data, filter);
        }
        catch (DatabaseReadException e) {
            log.error(e.getMessage(), e);
        }
        if (!data.hasData()) {
            return null;
        }
        Ban newBan = new Ban();
        newBan.setUUID(data.uuid);
        newBan.setIp(data.ip);
        newBan.setIsIpBan(!data.ip.contains("xxx"));
        newBan.setReason(data.reason);
        newBan.setSubject(data.player);
        newBan.setExpiration(data.unbanDate);
        newBan.setIssuedDate(data.issuedDate);
        newBan.setBanningPlayer(data.banningPlayer);
        return newBan;
    }

    /** Update a ban.


---
### Public Constructors for [`Backbone`](Backbone.md)

##### <a id='backbone'></a>new __Backbone__(system) 

_Backbone constructor_

Argument | Type | Description  
--- | --- | --- 
system | `System` | system argument

---

### Public Properties for [`Backbone`](Backbone.md)

##### <a id='system'></a>public  readonly property __System__

_Get: Get the System of this backbone_

Get | Description
--- | --- 
`System` | The System instance.



---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

