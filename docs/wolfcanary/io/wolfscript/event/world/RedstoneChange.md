## RedstoneChangeEvent __class__

>io.wolfscript.event.world.RedstoneChange
>Extends [`CancelableHook`](../../hook/CancelableHook.md)
``` javascript
this.on('world.RedstoneChange', function (e) { });
```


---

### Class Overview

RedstoneChange event. Contains information about power flowing from one block to another

Method | Type   
--- | :--- 
 readonly property __NewLevel__ <br> _Get: get the powerlevel for redstone that it would be after the change_ | `int`
 readonly property __OldLevel__ <br> _Get: Get the power level for the redstone before the change_ | `int`
 readonly property __SourceBlock__ <br> _Get: Gets the [`Block`](../../api/world/blocks/Block.md) the redstone is on_ | [`Block`](../../api/world/blocks/Block.md)
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


### Public Properties for [`RedstoneChange`](RedstoneChange.md)

##### <a id='newlevel'></a>public  readonly property __NewLevel__

_Get: get the powerlevel for redstone that it would be after the change_

Get | 
--- | 
`int` |



##### <a id='oldlevel'></a>public  readonly property __OldLevel__

_Get: Get the power level for the redstone before the change_

Get | 
--- | 
`int` |



##### <a id='sourceblock'></a>public  readonly property __SourceBlock__

_Get: Gets the [`Block`](../../api/world/blocks/Block.md) the redstone is on_

Get | 
--- | 
[`Block`](../../api/world/blocks/Block.md) |



---

### Public Methods for [`RedstoneChange`](RedstoneChange.md)

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
	

