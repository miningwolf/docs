## CommandBlockCommandEvent __class__

>io.wolfscript.event.command.CommandBlockCommand
>Extends [`CancelableHook`](../../hook/CancelableHook.md)
``` javascript
this.on('command.CommandBlockCommand', function (e) { });
```


---

### Class Overview

CommandBlockCommandEvent<br> Called when a CommandBlock executes a command.

Method | Type   
--- | :--- 
 readonly property __Arguments__ <br> _Get: Gets the command and arguments_ | `String[]`
 readonly property __CommandBlock__ <br> _Get: Gets the CommandBlock if actually a CommandBlock_ | `CommandBlock`
 readonly property __CommandBlockMinecart__ <br> _Get: Gets the CommandBlockMinecart if actually a CommandBlockMinecart_ | `CommandBlockMinecart`
 readonly property __Reference__ <br> _Reference property_ | [`CommandBlockLogic`](../../api/CommandBlockLogic.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](../../hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](../../hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](../../hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](../../hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







---


### Public Properties for [`CommandBlockCommand`](CommandBlockCommand.md)

##### <a id='arguments'></a>public  readonly property __Arguments__

_Get: Gets the command and arguments_

Get | Description
--- | --- 
`String[]` | the command and arguments



##### <a id='commandblock'></a>public  readonly property __CommandBlock__

_Get: Gets the CommandBlock if actually a CommandBlock_

Get | Description
--- | --- 
`CommandBlock` | the `CommandBlock` if it is one; `null` if its a `CommandBlockMinecart` instead



##### <a id='commandblockminecart'></a>public  readonly property __CommandBlockMinecart__

_Get: Gets the CommandBlockMinecart if actually a CommandBlockMinecart_

Get | Description
--- | --- 
`CommandBlockMinecart` | the `CommandBlockMinecart` if it is one; `null` if its a `CommandBlock` instead



##### <a id='reference'></a>public  readonly property __Reference__

_Reference property_

Get | 
--- | 
[`CommandBlockLogic`](../../api/CommandBlockLogic.md) |



---

### Public Methods for [`CommandBlockCommand`](CommandBlockCommand.md)

##### <a id='tostring'></a>public final function __toString__()

_toString method_

Returns | 
--- | 
`String` |


---

### Public Methods for [`CancelableHook`](../../hook/CancelableHook.md)

##### <a id='call'></a>public  function __call__()

_Calls a Hook if not already executed_

Returns | Description
--- | --- 
[`CancelableHook`](../../hook/CancelableHook.md) | this


##### <a id='iscanceled'></a>public  function __isCanceled__()

_isCanceled method_

Returns | 
--- | 
`boolean` |


##### <a id='setcanceled'></a>public  function __setCanceled__()

_setCanceled method_

Returns | 
--- | 
`void` |


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


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

