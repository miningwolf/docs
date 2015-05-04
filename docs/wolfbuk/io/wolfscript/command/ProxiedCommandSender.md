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
 readonly property __Name__ <br> _Get: Gets the name of this command sender_ | `String`
 readonly property __Server__ <br> _Get: Returns the server instance that this command is running on_ | [`Server`](../Server.md)
 function __sendMessage__(message) <br> _Sends this sender a message_ | `void`
 function __sendMessage__() <br> _Sends this sender multiple messages_ | `void`
 |
__Inherited items from [`Permissible`](../permissions/Permissible.md)__ |
 readonly property __EffectivePermissions__ <br> _Get: Gets a set containing all of the permissions currently in effect by_ | `Set<PermissionAttachmentInfo>`
 function __addAttachment__(plugin) <br> _Adds a new empty [`PermissionAttachment`](../permissions/PermissionAttachment.md) to this object_ | [`PermissionAttachment`](../permissions/PermissionAttachment.md)
 function __addAttachment__(plugin, ticks) <br> _Temporarily adds a new empty [`PermissionAttachment`](../permissions/PermissionAttachment.md) to this_ | [`PermissionAttachment`](../permissions/PermissionAttachment.md)
 function __addAttachment__(plugin, name, value, ticks) <br> _Temporarily adds a new [`PermissionAttachment`](../permissions/PermissionAttachment.md) with a single_ | [`PermissionAttachment`](../permissions/PermissionAttachment.md)
 function __addAttachment__(plugin, name, value) <br> _Adds a new [`PermissionAttachment`](../permissions/PermissionAttachment.md) with a single permission by_ | [`PermissionAttachment`](../permissions/PermissionAttachment.md)
 function __hasPermission__(perm) <br> _Gets the value of the specified permission, if set._ | `boolean`
 function __hasPermission__(name) <br> _Gets the value of the specified permission, if set._ | `boolean`
 function __isPermissionSet__(perm) <br> _Checks if this object contains an override for the specified {@link_ | `boolean`
 function __isPermissionSet__(name) <br> _Checks if this object contains an override for the specified_ | `boolean`
 function __recalculatePermissions__() <br> _Recalculates the permissions for this object, if the attachments have_ | `void`
 function __removeAttachment__(attachment) <br> _Removes the given [`PermissionAttachment`](../permissions/PermissionAttachment.md) from this object_ | `void`
 |
__Inherited items from [`ServerOperator`](../permissions/ServerOperator.md)__ |
 writeonly property __Op__ <br> _Set: Sets the operator status of this object_ | `void`
 function __isOp__() <br> _Checks if this object is a server operator_ | `boolean`









---


### Public Properties for [`CommandSender`](CommandSender.md)

##### <a id='name'></a>public  readonly property __Name__

_Get: Gets the name of this command sender_

Get | Description
--- | --- 
`String` | Name of the sender



##### <a id='server'></a>public  readonly property __Server__

_Get: Returns the server instance that this command is running on_

Get | Description
--- | --- 
[`Server`](../Server.md) | Server instance



---

### Public Methods for [`CommandSender`](CommandSender.md)

##### <a id='sendmessage'></a>public  function __sendMessage__(message)

_Sends this sender a message_

Argument | Type | Description  
--- | --- | --- 
message | `String` | Message to be displayed

Returns | 
--- | 
`void` |


##### <a id='sendmessage'></a>public  function __sendMessage__()

_Sends this sender multiple messages_

Returns | 
--- | 
`void` |


---

### Public Properties for [`Permissible`](../permissions/Permissible.md)

##### <a id='effectivepermissions'></a>public  readonly property __EffectivePermissions__

_Get: Gets a set containing all of the permissions currently in effect by this object_

Get | Description
--- | --- 
`Set<PermissionAttachmentInfo>` | Set of currently effective permissions



---

### Public Methods for [`Permissible`](../permissions/Permissible.md)

##### <a id='addattachment'></a>public  function __addAttachment__(plugin)

_Adds a new empty [`PermissionAttachment`](../permissions/PermissionAttachment.md) to this object_

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](../plugin/Plugin.md) | Plugin responsible for this attachment, may not be null or disabled

Returns | Description
--- | --- 
[`PermissionAttachment`](../permissions/PermissionAttachment.md) | The PermissionAttachment that was just created


##### <a id='addattachment'></a>public  function __addAttachment__(plugin, ticks)

_Temporarily adds a new empty [`PermissionAttachment`](../permissions/PermissionAttachment.md) to this object_

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](../plugin/Plugin.md) | Plugin responsible for this attachment, may not be null or disabled
ticks | `int` | Amount of ticks to automatically remove this attachment after

Returns | Description
--- | --- 
[`PermissionAttachment`](../permissions/PermissionAttachment.md) | The PermissionAttachment that was just created


##### <a id='addattachment'></a>public  function __addAttachment__(plugin, name, value, ticks)

_Temporarily adds a new [`PermissionAttachment`](../permissions/PermissionAttachment.md) with a single permission by name and value_

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](../plugin/Plugin.md) | Plugin responsible for this attachment, may not be null or disabled
name | `String` | Name of the permission to attach
value | `boolean` | Value of the permission
ticks | `int` | Amount of ticks to automatically remove this attachment after

Returns | Description
--- | --- 
[`PermissionAttachment`](../permissions/PermissionAttachment.md) | The PermissionAttachment that was just created


##### <a id='addattachment'></a>public  function __addAttachment__(plugin, name, value)

_Adds a new [`PermissionAttachment`](../permissions/PermissionAttachment.md) with a single permission by name and value_

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](../plugin/Plugin.md) | Plugin responsible for this attachment, may not be null or disabled
name | `String` | Name of the permission to attach
value | `boolean` | Value of the permission

Returns | Description
--- | --- 
[`PermissionAttachment`](../permissions/PermissionAttachment.md) | The PermissionAttachment that was just created


##### <a id='haspermission'></a>public  function __hasPermission__(perm)

_Gets the value of the specified permission, if set. <p> If a permission override is not set on this object, the default value of the permission will be returned_

Argument | Type | Description  
--- | --- | --- 
perm | [`Permission`](../permissions/Permission.md) | Permission to get

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

_Checks if this object contains an override for the specified [`Permission`](../permissions/Permission.md)_

Argument | Type | Description  
--- | --- | --- 
perm | [`Permission`](../permissions/Permission.md) | Permission to check

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

_Removes the given [`PermissionAttachment`](../permissions/PermissionAttachment.md) from this object_

Argument | Type | Description  
--- | --- | --- 
attachment | [`PermissionAttachment`](../permissions/PermissionAttachment.md) | Attachment to remove

Returns | 
--- | 
`void` |


---

### Public Properties for [`ServerOperator`](../permissions/ServerOperator.md)

##### <a id='op'></a>public  writeonly property __Op__

_Set: Sets the operator status of this object_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
value | `boolean` | New operator value


---

### Public Methods for [`ServerOperator`](../permissions/ServerOperator.md)

##### <a id='isop'></a>public  function __isOp__()

_Checks if this object is a server operator_

Returns | Description
--- | --- 
`boolean` | true if this is an operator, otherwise false


---


---


---


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

