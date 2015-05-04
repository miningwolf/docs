## PistonRetract __class__

>io.wolfscript.event.world.PistonRetract
>Extends [`CancelableHook`](../../hook/CancelableHook.md)

---

### Class Overview

Piston Retract hook<br> Called when a piston retracts

Method | Type   
--- | :--- 
new __PistonRetract__(piston, moving) <br> _PistonRetract constructor_ | _constructor_
 readonly property __Moving__ <br> _Moving property_ | [`Block`](../../api/world/blocks/Block.md)
 readonly property __Piston__ <br> _Get: Gets the piston [`Block`](../../api/world/blocks/Block.md)_ | [`Block`](../../api/world/blocks/Block.md)
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

### Public Constructors for [`PistonRetract`](PistonRetract.md)

##### <a id='pistonretract'></a>new __PistonRetract__(piston, moving) 

_PistonRetract constructor_

Argument | Type | Description  
--- | --- | --- 
piston | [`Block`](../../api/world/blocks/Block.md) | piston argument
moving | [`Block`](../../api/world/blocks/Block.md) | moving argument

---

### Public Properties for [`PistonRetract`](PistonRetract.md)

##### <a id='moving'></a>public  readonly property __Moving__

_Moving property_

Get | 
--- | 
[`Block`](../../api/world/blocks/Block.md) |



##### <a id='piston'></a>public  readonly property __Piston__

_Get: Gets the piston [`Block`](../../api/world/blocks/Block.md)_

Get | Description
--- | --- 
[`Block`](../../api/world/blocks/Block.md) | piston



---

### Public Methods for [`PistonRetract`](PistonRetract.md)

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


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

