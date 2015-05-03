## BackboneKits __class__

>io.wolfscript.backbone.BackboneKits
>Extends [`Backbone`](Backbone.md)

---

### Class Overview

Backbone to the kits System. This contains NO logic, it is only the data source access!

Method | Type   
--- | :--- 
new __BackboneKits__() <br> _BackboneKits constructor_ | _constructor_
 function __loadKits__() <br> _Add a new Kit to the list of Kits._ | `List<Kit>`
 |
__Inherited items from [`Backbone`](Backbone.md)__ |
new __Backbone__(system) <br> _Backbone constructor_ | _constructor_
 readonly property __System__ <br> _Get: Get the System of this backbone_ | `System`





---

### Public Constructors for [`BackboneKits`](BackboneKits.md)

##### <a id='backbonekits'></a>new __BackboneKits__() 

_BackboneKits constructor_


---

### Public Methods for [`BackboneKits`](BackboneKits.md)

##### <a id='loadkits'></a>public  function __loadKits__()

_Add a new Kit to the list of Kits._

Returns | Description
--- | --- 
`List<Kit>` | a Kit object if that Kit was found, null otherwise /
    public Kit getKit(String name) {
        KitDataAccess data = new KitDataAccess();

        try {
            HashMap<String, Object> filter = new HashMap<String, Object>();
            filter.put("name", name);
            Database.get().load(data, filter);
            if (!data.hasData()) {
                return null;
            }
            Kit kit = new Kit();

            kit.setContentFromStrings(data.items);
            kit.setDelay(data.useDelay);
            kit.setGroups(data.groups.toArray(new String[data.groups.size()]));
            kit.setName(data.name);
            kit.setOwner(data.owners.toArray(new String[data.owners.size()]));
            kit.setId(data.id);
            return kit;
        }
        catch (DatabaseReadException e) {
            log.error(e.getMessage(), e);
        }
        return null;
    }

    /** Update a Kit


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
	

