## Permissible __interface__

>io.wolfscript.permissions.Permissible
>Extends [`ServerOperator`](ServerOperator.md)

---

### Interface Overview

Represents an object that may be assigned permissions

Method | Type   
--- | :--- 
 readonly property __EffectivePermissions__ <br> _Get: Gets a set containing all of the permissions currently in effect by_ | `Set<PermissionAttachmentInfo>`
 function __addAttachment__(plugin) <br> _Adds a new empty [`PermissionAttachment`](PermissionAttachment.md) to this object_ | [`PermissionAttachment`](PermissionAttachment.md)
 function __addAttachment__(plugin, ticks) <br> _Temporarily adds a new empty [`PermissionAttachment`](PermissionAttachment.md) to this_ | [`PermissionAttachment`](PermissionAttachment.md)
 function __addAttachment__(plugin, name, value, ticks) <br> _Temporarily adds a new [`PermissionAttachment`](PermissionAttachment.md) with a single_ | [`PermissionAttachment`](PermissionAttachment.md)
 function __addAttachment__(plugin, name, value) <br> _Adds a new [`PermissionAttachment`](PermissionAttachment.md) with a single permission by_ | [`PermissionAttachment`](PermissionAttachment.md)
 function __hasPermission__(perm) <br> _Gets the value of the specified permission, if set._ | `boolean`
 function __hasPermission__(name) <br> _Gets the value of the specified permission, if set._ | `boolean`
 function __isPermissionSet__(perm) <br> _Checks if this object contains an override for the specified {@link_ | `boolean`
 function __isPermissionSet__(name) <br> _Checks if this object contains an override for the specified_ | `boolean`
 function __recalculatePermissions__() <br> _Recalculates the permissions for this object, if the attachments have_ | `void`
 function __removeAttachment__(attachment) <br> _Removes the given [`PermissionAttachment`](PermissionAttachment.md) from this object_ | `void`
 |
__Inherited items from [`ServerOperator`](ServerOperator.md)__ |
 writeonly property __Op__ <br> _Set: Sets the operator status of this object_ | `void`
 function __isOp__() <br> _Checks if this object is a server operator_ | `boolean`





---


### Public Properties for [`Permissible`](Permissible.md)

##### <a id='effectivepermissions'></a>public  readonly property __EffectivePermissions__

_Get: Gets a set containing all of the permissions currently in effect by this object_

Get | Description
--- | --- 
`Set<PermissionAttachmentInfo>` | Set of currently effective permissions



---

### Public Methods for [`Permissible`](Permissible.md)

##### <a id='addattachment'></a>public  function __addAttachment__(plugin)

_Adds a new empty [`PermissionAttachment`](PermissionAttachment.md) to this object_

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](../plugin/Plugin.md) | Plugin responsible for this attachment, may not be null or disabled

Returns | Description
--- | --- 
[`PermissionAttachment`](PermissionAttachment.md) | The PermissionAttachment that was just created


##### <a id='addattachment'></a>public  function __addAttachment__(plugin, ticks)

_Temporarily adds a new empty [`PermissionAttachment`](PermissionAttachment.md) to this object_

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](../plugin/Plugin.md) | Plugin responsible for this attachment, may not be null or disabled
ticks | `int` | Amount of ticks to automatically remove this attachment after

Returns | Description
--- | --- 
[`PermissionAttachment`](PermissionAttachment.md) | The PermissionAttachment that was just created


##### <a id='addattachment'></a>public  function __addAttachment__(plugin, name, value, ticks)

_Temporarily adds a new [`PermissionAttachment`](PermissionAttachment.md) with a single permission by name and value_

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](../plugin/Plugin.md) | Plugin responsible for this attachment, may not be null or disabled
name | `String` | Name of the permission to attach
value | `boolean` | Value of the permission
ticks | `int` | Amount of ticks to automatically remove this attachment after

Returns | Description
--- | --- 
[`PermissionAttachment`](PermissionAttachment.md) | The PermissionAttachment that was just created


##### <a id='addattachment'></a>public  function __addAttachment__(plugin, name, value)

_Adds a new [`PermissionAttachment`](PermissionAttachment.md) with a single permission by name and value_

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](../plugin/Plugin.md) | Plugin responsible for this attachment, may not be null or disabled
name | `String` | Name of the permission to attach
value | `boolean` | Value of the permission

Returns | Description
--- | --- 
[`PermissionAttachment`](PermissionAttachment.md) | The PermissionAttachment that was just created


##### <a id='haspermission'></a>public  function __hasPermission__(perm)

_Gets the value of the specified permission, if set. <p> If a permission override is not set on this object, the default value of the permission will be returned_

Argument | Type | Description  
--- | --- | --- 
perm | [`Permission`](Permission.md) | Permission to get

Returns | Description
--- | --- 
`boolean` | Value of the permission


##### <a id='haspermission'></a>public  function __hasPermission__(name)

_Gets the value of the specified permission, if set. <p> If a permission override is not set on this object, the default value of the permission will be returned._

Argument | Type | Description  
--- | --- | --- 
name | `String` | Name of the permission

Returns | Description
--- | --- 
`boolean` | Value of the permission


##### <a id='ispermissionset'></a>public  function __isPermissionSet__(perm)

_Checks if this object contains an override for the specified [`Permission`](Permission.md)_

Argument | Type | Description  
--- | --- | --- 
perm | [`Permission`](Permission.md) | Permission to check

Returns | Description
--- | --- 
`boolean` | true if the permission is set, otherwise false


##### <a id='ispermissionset'></a>public  function __isPermissionSet__(name)

_Checks if this object contains an override for the specified permission, by fully qualified name_

Argument | Type | Description  
--- | --- | --- 
name | `String` | Name of the permission

Returns | Description
--- | --- 
`boolean` | true if the permission is set, otherwise false


##### <a id='recalculatepermissions'></a>public  function __recalculatePermissions__()

_Recalculates the permissions for this object, if the attachments have changed values. <p> This should very rarely need to be called from a plugin._

Returns | 
--- | 
`void` |


##### <a id='removeattachment'></a>public  function __removeAttachment__(attachment)

_Removes the given [`PermissionAttachment`](PermissionAttachment.md) from this object_

Argument | Type | Description  
--- | --- | --- 
attachment | [`PermissionAttachment`](PermissionAttachment.md) | Attachment to remove

Returns | 
--- | 
`void` |


---

### Public Properties for [`ServerOperator`](ServerOperator.md)

##### <a id='op'></a>public  writeonly property __Op__

_Set: Sets the operator status of this object_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
value | `boolean` | New operator value


---

### Public Methods for [`ServerOperator`](ServerOperator.md)

##### <a id='isop'></a>public  function __isOp__()

_Checks if this object is a server operator_

Returns | Description
--- | --- 
`boolean` | true if this is an operator, otherwise false


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

