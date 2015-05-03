## BackboneReservelist __class__

>io.wolfscript.backbone.BackboneReservelist
>Extends [`Backbone`](Backbone.md)

---

### Class Overview

Backbone to the reservelist system. This contains NO logic, it is only the data source access!

Method | Type   
--- | :--- 
new __BackboneReservelist__() <br> _BackboneReservelist constructor_ | _constructor_
 function __validateReserveList__() <br> _Checks if the player has a reserved slot_ | `void`
 |
__Inherited items from [`Backbone`](Backbone.md)__ |
new __Backbone__(system) <br> _Backbone constructor_ | _constructor_
 readonly property __System__ <br> _Get: Get the System of this backbone_ | `System`





---

### Public Constructors for [`BackboneReservelist`](BackboneReservelist.md)

##### <a id='backbonereservelist'></a>new __BackboneReservelist__() 

_BackboneReservelist constructor_


---

### Public Methods for [`BackboneReservelist`](BackboneReservelist.md)

##### <a id='validatereservelist'></a>public  function __validateReserveList__()

_Checks if the player has a reserved slot_

Returns | Description
--- | --- 
`void` | `true` if slot reserved; `false` otherwise /
    public boolean isSlotReserved(String player) {
        WhitelistDataAccess data = new WhitelistDataAccess();

        try {
            HashMap<String, Object> filter = new HashMap<String, Object>();
            if (ToolBox.isUUID(player)) {
                filter.put("uuid", player);
            }
            else {
                filter.put("player", player);
            }
            Database.get().load(data, filter);
        }
        catch (DatabaseReadException e) {
            log.error(e.getMessage(), e);
        }
        return data.hasData();
    }

    /** Add a new reservelist entry


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
	

