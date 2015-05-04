## PermissibleBase __class__

>io.wolfscript.permissions.PermissibleBase
>Implements [`Permissible`](Permissible.md)

---

### Class Overview

Base Permissible for use in any Permissible object via proxy or extension

Method | Type   
--- | :--- 
new __PermissibleBase__(opable) <br> _PermissibleBase constructor_ | _constructor_
new __RemoveAttachmentRunnable__(attachment) <br> _RemoveAttachmentRunnable constructor_ | _constructor_
 readonly property __EffectivePermissions__ <br> _EffectivePermissions property_ | `Set<PermissionAttachmentInfo>`
 writeonly property __Op__ <br> _Op property_ | `void`
 function __addAttachment__(plugin) <br> _addAttachment method_ | [`PermissionAttachment`](PermissionAttachment.md)
 function __isOp__() <br> _isOp method_ | `boolean`
 function __addAttachment__(plugin, ticks) <br> _addAttachment method_ | [`PermissionAttachment`](PermissionAttachment.md)
 function __hasPermission__(inName) <br> _hasPermission method_ | `boolean`
 function __hasPermission__(perm) <br> _hasPermission method_ | `boolean`
 function __addAttachment__(plugin, name, value) <br> _addAttachment method_ | [`PermissionAttachment`](PermissionAttachment.md)
 function __addAttachment__(plugin, name, value, ticks) <br> _addAttachment method_ | [`PermissionAttachment`](PermissionAttachment.md)
 function __isPermissionSet__(perm) <br> _isPermissionSet method_ | `boolean`
 function __isPermissionSet__(name) <br> _isPermissionSet method_ | `boolean`
 function __recalculatePermissions__() <br> _recalculatePermissions method_ | `void`
 function __removeAttachment__(attachment) <br> _removeAttachment method_ | `void`
 function __run__() <br> _run method_ | `void`



---

### Public Constructors for [`PermissibleBase`](PermissibleBase.md)

##### <a id='permissiblebase'></a>new __PermissibleBase__(opable) 

_PermissibleBase constructor_

Argument | Type | Description  
--- | --- | --- 
opable | [`ServerOperator`](ServerOperator.md) | opable argument

##### <a id='removeattachmentrunnable'></a>new __RemoveAttachmentRunnable__(attachment) 

_RemoveAttachmentRunnable constructor_

Argument | Type | Description  
--- | --- | --- 
attachment | [`PermissionAttachment`](PermissionAttachment.md) | attachment argument

---

### Public Properties for [`PermissibleBase`](PermissibleBase.md)

##### <a id='effectivepermissions'></a>public  readonly property __EffectivePermissions__

_EffectivePermissions property_

Get | 
--- | 
`Set<PermissionAttachmentInfo>` |



##### <a id='op'></a>public  writeonly property __Op__

_Op property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
value | `boolean` | value argument


---

### Public Methods for [`PermissibleBase`](PermissibleBase.md)

##### <a id='addattachment'></a>public  function __addAttachment__(plugin)

_addAttachment method_

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](../plugin/Plugin.md) | plugin argument

Returns | 
--- | 
[`PermissionAttachment`](PermissionAttachment.md) |


##### <a id='isop'></a>public  function __isOp__()

_isOp method_

Returns | 
--- | 
`boolean` |


##### <a id='addattachment'></a>public  function __addAttachment__(plugin, ticks)

_addAttachment method_

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](../plugin/Plugin.md) | plugin argument
ticks | `int` | ticks argument

Returns | 
--- | 
[`PermissionAttachment`](PermissionAttachment.md) |


##### <a id='haspermission'></a>public  function __hasPermission__(inName)

_hasPermission method_

Argument | Type | Description  
--- | --- | --- 
inName | `String` | inName argument

Returns | 
--- | 
`boolean` |


##### <a id='haspermission'></a>public  function __hasPermission__(perm)

_hasPermission method_

Argument | Type | Description  
--- | --- | --- 
perm | [`Permission`](Permission.md) | perm argument

Returns | 
--- | 
`boolean` |


##### <a id='addattachment'></a>public  function __addAttachment__(plugin, name, value)

_addAttachment method_

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](../plugin/Plugin.md) | plugin argument
name | `String` | name argument
value | `boolean` | value argument

Returns | 
--- | 
[`PermissionAttachment`](PermissionAttachment.md) |


##### <a id='addattachment'></a>public  function __addAttachment__(plugin, name, value, ticks)

_addAttachment method_

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](../plugin/Plugin.md) | plugin argument
name | `String` | name argument
value | `boolean` | value argument
ticks | `int` | ticks argument

Returns | 
--- | 
[`PermissionAttachment`](PermissionAttachment.md) |


##### <a id='ispermissionset'></a>public  function __isPermissionSet__(perm)

_isPermissionSet method_

Argument | Type | Description  
--- | --- | --- 
perm | [`Permission`](Permission.md) | perm argument

Returns | 
--- | 
`boolean` |


##### <a id='ispermissionset'></a>public  function __isPermissionSet__(name)

_isPermissionSet method_

Argument | Type | Description  
--- | --- | --- 
name | `String` | name argument

Returns | 
--- | 
`boolean` |


##### <a id='recalculatepermissions'></a>public  function __recalculatePermissions__()

_recalculatePermissions method_

Returns | 
--- | 
`void` |


##### <a id='removeattachment'></a>public  function __removeAttachment__(attachment)

_removeAttachment method_

Argument | Type | Description  
--- | --- | --- 
attachment | [`PermissionAttachment`](PermissionAttachment.md) | attachment argument

Returns | 
--- | 
`void` |


##### <a id='run'></a>public  function __run__()

_run method_

Returns | 
--- | 
`void` |


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

