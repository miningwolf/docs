## Permissible __interface__

>io.wolfscript.permissions.Permissible
>Extends [`ServerOperator`](ServerOperator.md)

---

### Interface Overview

Represents an object that may be assigned permissions

Method | Type   
--- | :--- 
 readonly property __EffectivePermissions__ <br> _Get: Checks if this object contains an override for the specified_ | `Set<PermissionAttachmentInfo>`
 |
__Inherited items from [`ServerOperator`](ServerOperator.md)__ |
 writeonly property __Op__ <br> _Set: Checks if this object is a server operator_ | `void`





---


### Public Properties for [`Permissible`](Permissible.md)

##### <a id='effectivepermissions'></a>public  readonly property __EffectivePermissions__

_Get: Checks if this object contains an override for the specified permission, by fully qualified name_

Get | Description
--- | --- 
`Set<PermissionAttachmentInfo>` | true if the permission is set, otherwise false /
    public boolean isPermissionSet(String name);

    /** Checks if this object contains an override for the specified [`Permission`](Permission.md)



---

### Public Properties for [`ServerOperator`](ServerOperator.md)

##### <a id='op'></a>public  writeonly property __Op__

_Set: Checks if this object is a server operator_

Get | Description
--- | --- 
`void` | true if this is an operator, otherwise false /
    public boolean isOp();

    /** Sets the operator status of this object

Set | Type | Description  
--- | --- | --- 
value | `boolean` | New operator value


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

