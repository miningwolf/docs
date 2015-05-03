## PermissionAttachmentInfo __class__

>io.wolfscript.permissions.PermissionAttachmentInfo

---

### Class Overview

Holds information on a permission and which [`PermissionAttachment`](PermissionAttachment.md) provides it

Method | Type   
--- | :--- 
new __PermissionAttachmentInfo__(permissible, permission, attachment, value) <br> _PermissionAttachmentInfo constructor_ | _constructor_
 readonly property __Value__ <br> _Get: Gets the permissible this is attached to_ | `boolean`



---

### Public Constructors for [`PermissionAttachmentInfo`](PermissionAttachmentInfo.md)

##### <a id='permissionattachmentinfo'></a>new __PermissionAttachmentInfo__(permissible, permission, attachment, value) 

_PermissionAttachmentInfo constructor_

Argument | Type | Description  
--- | --- | --- 
permissible | [`Permissible`](Permissible.md) | permissible argument
permission | `String` | permission argument
attachment | [`PermissionAttachment`](PermissionAttachment.md) | attachment argument
value | `boolean` | value argument

---

### Public Properties for [`PermissionAttachmentInfo`](PermissionAttachmentInfo.md)

##### <a id='value'></a>public  readonly property __Value__

_Get: Gets the permissible this is attached to_

Get | Description
--- | --- 
`boolean` | Permissible this permission is for /
    public Permissible getPermissible() {
        return permissible;
    }

    /** Gets the permission being set



---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

