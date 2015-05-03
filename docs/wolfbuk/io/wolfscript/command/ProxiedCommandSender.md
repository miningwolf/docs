## ProxiedCommandSender __interface__

>io.wolfscript.command.ProxiedCommandSender
>Extends [`CommandSender`](CommandSender.md)

---

### Interface Overview

interface ProxiedCommandSender

Method | Type   
--- | :--- 
 |
__Inherited items from [`CommandSender`](CommandSender.md)__ |
 readonly property __Name__ <br> _Get: Sends this sender a message_ | `String`
 |
__Inherited items from [`Permissible`](..\permissions\Permissible.md)__ |
 readonly property __EffectivePermissions__ <br> _Get: Checks if this object contains an override for the specified_ | `Set<PermissionAttachmentInfo>`
 |
__Inherited items from [`ServerOperator`](..\permissions\ServerOperator.md)__ |
 writeonly property __Op__ <br> _Set: Checks if this object is a server operator_ | `void`









---


### Public Properties for [`CommandSender`](CommandSender.md)

##### <a id='name'></a>public  readonly property __Name__

_Get: Sends this sender a message_

Get | Description
--- | --- 
`String` | Server instance /
    public Server getServer();

    /** Gets the name of this command sender



---

### Public Properties for [`Permissible`](..\permissions\Permissible.md)

##### <a id='effectivepermissions'></a>public  readonly property __EffectivePermissions__

_Get: Checks if this object contains an override for the specified permission, by fully qualified name_

Get | Description
--- | --- 
`Set<PermissionAttachmentInfo>` | true if the permission is set, otherwise false /
    public boolean isPermissionSet(String name);

    /** Checks if this object contains an override for the specified [`Permission`](..\permissions\Permission.md)



---

### Public Properties for [`ServerOperator`](..\permissions\ServerOperator.md)

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


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

