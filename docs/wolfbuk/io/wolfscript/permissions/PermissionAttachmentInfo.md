## PermissionAttachmentInfo __class__

>io.wolfscript.permissions.PermissionAttachmentInfo

---

### Class Overview

Holds information on a permission and which [`PermissionAttachment`](PermissionAttachment.md) provides it

Method | Type   
--- | :--- 
new __PermissionAttachmentInfo__(permissible, permission, attachment, value) <br> _PermissionAttachmentInfo constructor_ | _constructor_
 readonly property __Attachment__ <br> _Get: Gets the attachment providing this permission. This may be null for_ | [`PermissionAttachment`](PermissionAttachment.md)
 readonly property __Permissible__ <br> _Get: Gets the permissible this is attached to_ | [`Permissible`](Permissible.md)
 readonly property __Permission__ <br> _Get: Gets the permission being set_ | `String`
 readonly property __Value__ <br> _Get: Gets the value of this permission_ | `boolean`



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

##### <a id='attachment'></a>public  readonly property __Attachment__

_Get: Gets the attachment providing this permission. This may be null for default permissions (usually parent permissions)._

Get | Description
--- | --- 
[`PermissionAttachment`](PermissionAttachment.md) | Attachment



##### <a id='permissible'></a>public  readonly property __Permissible__

_Get: Gets the permissible this is attached to_

Get | Description
--- | --- 
[`Permissible`](Permissible.md) | Permissible this permission is for



##### <a id='permission'></a>public  readonly property __Permission__

_Get: Gets the permission being set_

Get | Description
--- | --- 
`String` | Name of the permission



##### <a id='value'></a>public  readonly property __Value__

_Get: Gets the value of this permission_

Get | Description
--- | --- 
`boolean` | Value of the permission



---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

