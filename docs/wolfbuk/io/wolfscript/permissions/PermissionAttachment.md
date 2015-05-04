## PermissionAttachment __class__

>io.wolfscript.permissions.PermissionAttachment

---

### Class Overview

Holds information about a permission attachment on a [`Permissible`](Permissible.md) object

Method | Type   
--- | :--- 
new __PermissionAttachment__(plugin, Permissible) <br> _PermissionAttachment constructor_ | _constructor_
 readonly property __Permissible__ <br> _Get: Gets the Permissible that this is attached to_ | [`Permissible`](Permissible.md)
 readonly property __Plugin__ <br> _Get: Gets the plugin responsible for this attachment_ | [`Plugin`](../plugin/Plugin.md)
  property __RemovalCallback__ <br> _Get: Gets the class that was previously set to be called when this<br>Set: Sets an object to be called for when this attachment is removed from a_ | [`PermissionRemovedExecutor`](PermissionRemovedExecutor.md)
 function __remove__() <br> _Removes this attachment from its registered [`Permissible`](Permissible.md)_ | `boolean`
 function __setPermission__(name, value) <br> _Sets a permission to the given value, by its fully qualified name_ | `void`
 function __setPermission__(perm, value) <br> _Sets a permission to the given value_ | `void`
 function __unsetPermission__(name) <br> _Removes the specified permission from this attachment._ | `void`
 function __unsetPermission__(perm) <br> _Removes the specified permission from this attachment._ | `void`



---

### Public Constructors for [`PermissionAttachment`](PermissionAttachment.md)

##### <a id='permissionattachment'></a>new __PermissionAttachment__(plugin, Permissible) 

_PermissionAttachment constructor_

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](../plugin/Plugin.md) | plugin argument
Permissible | [`Permissible`](Permissible.md) | Permissible argument

---

### Public Properties for [`PermissionAttachment`](PermissionAttachment.md)

##### <a id='permissible'></a>public  readonly property __Permissible__

_Get: Gets the Permissible that this is attached to_

Get | Description
--- | --- 
[`Permissible`](Permissible.md) | Permissible containing this attachment



##### <a id='plugin'></a>public  readonly property __Plugin__

_Get: Gets the plugin responsible for this attachment_

Get | Description
--- | --- 
[`Plugin`](../plugin/Plugin.md) | Plugin responsible for this permission attachment



##### <a id='removalcallback'></a>public   property __RemovalCallback__

_Get: Gets the class that was previously set to be called when this attachment was removed from a [`Permissible`](Permissible.md). May be null.<br>Set: Sets an object to be called for when this attachment is removed from a [`Permissible`](Permissible.md). May be null._

Get | Description
--- | --- 
[`PermissionRemovedExecutor`](PermissionRemovedExecutor.md) | Object to be called when this is removed

Set | Type | Description  
--- | --- | --- 
ex | [`PermissionRemovedExecutor`](PermissionRemovedExecutor.md) | Object to be called when this is removed


---

### Public Methods for [`PermissionAttachment`](PermissionAttachment.md)

##### <a id='remove'></a>public  function __remove__()

_Removes this attachment from its registered [`Permissible`](Permissible.md)_

Returns | Description
--- | --- 
`boolean` | true if the permissible was removed successfully, false if it did not exist


##### <a id='setpermission'></a>public  function __setPermission__(name, value)

_Sets a permission to the given value, by its fully qualified name_

Argument | Type | Description  
--- | --- | --- 
name | `String` | Name of the permission
value | `boolean` | New value of the permission

Returns | 
--- | 
`void` |


##### <a id='setpermission'></a>public  function __setPermission__(perm, value)

_Sets a permission to the given value_

Argument | Type | Description  
--- | --- | --- 
perm | [`Permission`](Permission.md) | Permission to set
value | `boolean` | New value of the permission

Returns | 
--- | 
`void` |


##### <a id='unsetpermission'></a>public  function __unsetPermission__(name)

_Removes the specified permission from this attachment. <p> If the permission does not exist in this attachment, nothing will happen._

Argument | Type | Description  
--- | --- | --- 
name | `String` | Name of the permission to remove

Returns | 
--- | 
`void` |


##### <a id='unsetpermission'></a>public  function __unsetPermission__(perm)

_Removes the specified permission from this attachment. <p> If the permission does not exist in this attachment, nothing will happen._

Argument | Type | Description  
--- | --- | --- 
perm | [`Permission`](Permission.md) | Permission to remove

Returns | 
--- | 
`void` |


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

