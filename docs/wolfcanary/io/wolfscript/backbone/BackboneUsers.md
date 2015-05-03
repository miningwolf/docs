## BackboneUsers __class__

>io.wolfscript.backbone.BackboneUsers
>Extends [`Backbone`](Backbone.md)

---

### Class Overview

Backbone to the Player System. This contains NO logic, it is only the data source access!

Method | Type   
--- | :--- 
new __BackboneUsers__() <br> _BackboneUsers constructor_ | _constructor_
 function __validateUsers__() <br> _Add a new Player to the data source._ | `void`
 |
__Inherited items from [`Backbone`](Backbone.md)__ |
new __Backbone__(system) <br> _Backbone constructor_ | _constructor_
 readonly property __System__ <br> _Get: Get the System of this backbone_ | `System`





---

### Public Constructors for [`BackboneUsers`](BackboneUsers.md)

##### <a id='backboneusers'></a>new __BackboneUsers__() 

_BackboneUsers constructor_


---

### Public Methods for [`BackboneUsers`](BackboneUsers.md)

##### <a id='validateusers'></a>public  function __validateUsers__()

_Add a new Player to the data source._

Returns | Description
--- | --- 
`void` | true if user exists, false otherwise /
    private boolean userExists(String uuid) {
        PlayerDataAccess data = new PlayerDataAccess();

        try {
            HashMap<String, Object> filter = new HashMap<String, Object>();
            filter.put("uuid", uuid);
            Database.get().load(data, filter);
        }
        catch (DatabaseReadException e) {
            log.error(e.getMessage(), e);
        }

        return data.hasData();
    }

    /** Remove a player from the data source


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
	

