## PermissionCheck __class__

>io.wolfscript.event.system.PermissionCheck
>Extends [`Hook`](../../hook/Hook.md)

---

### Class Overview

This hook is called after the PermissionProvider has resolved the permission, to alter the final outcome and eventually temporary allow a permission to a player

Method | Type   
--- | :--- 
new __PermissionCheck__(permission, player, result) <br> _PermissionCheck constructor_ | _constructor_
 readonly property __Permission__ <br> _Get: Gets the permission that was checked_ | `String`
  property __Result__ <br> _Get: Get the result of the check.<br>Set: Override the final result for the permission check_ | `boolean`
 readonly property __Subject__ <br> _Get: Get the MessageReceiver for whom the permission check was issued_ | [`MessageReceiver`](../../chat/MessageReceiver.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](../../hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](../../hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





---

### Public Constructors for [`PermissionCheck`](PermissionCheck.md)

##### <a id='permissioncheck'></a>new __PermissionCheck__(permission, player, result) 

_PermissionCheck constructor_

Argument | Type | Description  
--- | --- | --- 
permission | `String` | permission argument
player | [`MessageReceiver`](../../chat/MessageReceiver.md) | player argument
result | `boolean` | result argument

---

### Public Properties for [`PermissionCheck`](PermissionCheck.md)

##### <a id='permission'></a>public  readonly property __Permission__

_Get: Gets the permission that was checked_

Get | 
--- | 
`String` |



##### <a id='result'></a>public   property __Result__

_Get: Get the result of the check.<br>Set: Override the final result for the permission check_

Get | 
--- | 
`boolean` |

Set | Type | Description  
--- | --- | --- 
result | `boolean` | result argument


##### <a id='subject'></a>public  readonly property __Subject__

_Get: Get the MessageReceiver for whom the permission check was issued_

Get | 
--- | 
[`MessageReceiver`](../../chat/MessageReceiver.md) |



---

### Public Methods for [`PermissionCheck`](PermissionCheck.md)

##### <a id='tostring'></a>public final function __toString__()

_toString method_

Returns | 
--- | 
`String` |


---

### Public Properties for [`Hook`](../../hook/Hook.md)

##### <a id='hookname'></a>public final readonly property __HookName__

_Get: Get the name of this hook._

Get | Description
--- | --- 
`String` | simple class name



---

### Public Methods for [`Hook`](../../hook/Hook.md)

##### <a id='call'></a>public  function __call__()

_Calls a Hook if not already executed_

Returns | Description
--- | --- 
[`Hook`](../../hook/Hook.md) | this


##### <a id='hashcode'></a>public  function __hashCode__()

_hashCode method_

Returns | 
--- | 
`int` |


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

