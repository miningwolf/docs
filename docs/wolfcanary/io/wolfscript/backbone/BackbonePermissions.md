## BackbonePermissions __class__

>io.wolfscript.backbone.BackbonePermissions
>Extends [`Backbone`](Backbone.md)

---

### Class Overview

Backbone to the permissions System. This contains NO logic, it is only the data source access!

Method | Type   
--- | :--- 
new __BackbonePermissions__() <br> _BackbonePermissions constructor_ | _constructor_
 function __validatePlayerPermissions__(world) <br> _Load permissions for a group_ | `void`
 |
__Inherited items from [`Backbone`](Backbone.md)__ |
new __Backbone__(system) <br> _Backbone constructor_ | _constructor_
 readonly property __System__ <br> _Get: Get the System of this backbone_ | `System`





---

### Public Constructors for [`BackbonePermissions`](BackbonePermissions.md)

##### <a id='backbonepermissions'></a>new __BackbonePermissions__() 

_BackbonePermissions constructor_


---

### Public Methods for [`BackbonePermissions`](BackbonePermissions.md)

##### <a id='validateplayerpermissions'></a>public  function __validatePlayerPermissions__(world)

_Load permissions for a group_

Argument | Type | Description  
--- | --- | --- 
world | `String` | the world name

Returns | Description
--- | --- 
`void` | PermissionsProvider instance for this group. /
    public PermissionProvider loadGroupPermissions(String name, String world) {
        if (world != null && world.isEmpty()) {
            world = null;
        }
        PermissionProvider provider = new MultiworldPermissionProvider(world, false, name);
        ArrayList<DataAccess> dataList = new ArrayList<DataAccess>();
        log.debug("Loading permissions for " + name + ". World: " + ((world != null && !world.isEmpty()) ? world : "none"));
        try {
            HashMap<String, Object> filter = new HashMap<String, Object>();
            filter.put("owner", name);
            filter.put("type", "group");
            Database.get().loadAll(new PermissionDataAccess(world), dataList, filter);
            for (DataAccess da : dataList) {
                PermissionDataAccess data = (PermissionDataAccess)da;

                provider.addPermission(data.path, data.value, data.id);
            }
        }
        catch (DatabaseReadException e) {
            log.error(e.getMessage(), e);
        }

        return provider;
    }

    /** Load permissions for a player


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
	

