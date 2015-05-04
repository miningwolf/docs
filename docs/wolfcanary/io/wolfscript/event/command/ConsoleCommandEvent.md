## ConsoleCommandEvent __class__

>io.wolfscript.event.command.ConsoleCommandEvent
>Extends [`CancelableHook`](../CancelableHook.md)
``` javascript
this.on('command.ConsoleCommandEvent', function (e) { });
```


---

### Class Overview

Server command event. Contains the command issued by the server

Method | Type   
--- | :--- 
 readonly property __Caller__ <br> _Caller property_ | [`MessageReceiver`](../../chat/MessageReceiver.md)
 readonly property __Command__ <br> _Get: Get command that was issued by the console_ | `String[]`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](../CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](../CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](../Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](../Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







---


### Public Properties for [`ConsoleCommandEvent`](ConsoleCommandEvent.md)

##### <a id='caller'></a>public  readonly property __Caller__

_Caller property_

Get | 
--- | 
[`MessageReceiver`](../../chat/MessageReceiver.md) |



##### <a id='command'></a>public  readonly property __Command__

_Get: Get command that was issued by the console_

Get | Description
--- | --- 
`String[]` | String array of the arguments



---

### Public Methods for [`ConsoleCommandEvent`](ConsoleCommandEvent.md)

##### <a id='tostring'></a>public final function __toString__()

_toString method_

Returns | 
--- | 
`String` |


---

### Public Methods for [`CancelableHook`](../CancelableHook.md)

##### <a id='call'></a>public  function __call__()

_Calls a Hook if not already executed_

Returns | Description
--- | --- 
[`CancelableHook`](../CancelableHook.md) | this


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

### Public Properties for [`Hook`](../Hook.md)

##### <a id='hookname'></a>public final readonly property __HookName__

_Get: Get the name of this hook._

Get | Description
--- | --- 
`String` | simple class name



---

### Public Methods for [`Hook`](../Hook.md)

##### <a id='call'></a>public  function __call__()

_Calls a Hook if not already executed_

Returns | Description
--- | --- 
[`Hook`](../Hook.md) | this


##### <a id='hashcode'></a>public  function __hashCode__()

_hashCode method_

Returns | 
--- | 
`int` |


---


---


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

