## BackboneWhitelist __class__

>io.wolfscript.backbone.BackboneWhitelist
>Extends [`Backbone`](Backbone.md)

---

### Class Overview

Backbone to the whitelist system. This contains NO logic, it is only the data source access!

Method | Type   
--- | :--- 
new __BackboneWhitelist__() <br> _BackboneWhitelist constructor_ | _constructor_
 function __validateReserveList__() <br> _Checks if the player is whitelisted_ | `void`
 |
__Inherited items from [`Backbone`](Backbone.md)__ |
new __Backbone__(system) <br> _Backbone constructor_ | _constructor_
 readonly property __System__ <br> _Get: Get the System of this backbone_ | `System`





---

### Public Constructors for [`BackboneWhitelist`](BackboneWhitelist.md)

##### <a id='backbonewhitelist'></a>new __BackboneWhitelist__() 

_BackboneWhitelist constructor_


---

### Public Methods for [`BackboneWhitelist`](BackboneWhitelist.md)

##### <a id='validatereservelist'></a>public  function __validateReserveList__()

_Checks if the player is whitelisted_

Returns | Description
--- | --- 
`void` | `true` if whitelisted; `false` otherwise /
    public boolean isWhitelisted(String player) {
        WhitelistDataAccess data = new WhitelistDataAccess();

        try {
            HashMap<String, Object> filter = new HashMap<String, Object>();
            if (ToolBox.isUUID(player)) {
                filter.put("uuid", player);
            }
            else {
                filter.put("uuid", ToolBox.usernameToUUID(player));
            }
            Database.get().load(data, filter);
        }
        catch (DatabaseReadException e) {
            log.error(e.getMessage(), e);
        }
        return data.hasData();
    }

    /** Add a new whitelist entry


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
	

