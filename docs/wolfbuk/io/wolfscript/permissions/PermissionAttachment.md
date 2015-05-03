## PermissionAttachment __class__

>io.wolfscript.permissions.PermissionAttachment

---

### Class Overview

Holds information about a permission attachment on a [`Permissible`](Permissible.md) object

Method | Type   
--- | :--- 
new __PermissionAttachment__(plugin, Permissible) <br> _PermissionAttachment constructor_ | _constructor_
 function __remove__() <br> _Gets the plugin responsible for this attachment_ | `boolean`



---

### Public Constructors for [`PermissionAttachment`](PermissionAttachment.md)

##### <a id='permissionattachment'></a>new __PermissionAttachment__(plugin, Permissible) 

_PermissionAttachment constructor_

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](..\plugin\Plugin.md) | plugin argument
Permissible | [`Permissible`](Permissible.md) | Permissible argument

---

### Public Methods for [`PermissionAttachment`](PermissionAttachment.md)

##### <a id='remove'></a>public  function __remove__()

_Gets the plugin responsible for this attachment_

Returns | Description
--- | --- 
`boolean` | Plugin responsible for this permission attachment /
    public Plugin getPlugin() {
        return plugin;
    }

    /** Sets an object to be called for when this attachment is removed from a [`Permissible`](Permissible.md). May be null.


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

