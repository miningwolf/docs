## Flow __class__

>io.wolfscript.event.world.Flow
>Extends [`CancelableHook`](../../hook/CancelableHook.md)

this.on('world.Flow', function (e) { });

---

### Class Overview

Flow hook. Contains information about a liquid flowing from one block to another

Method | Type   
--- | :--- 
new __Flow__(from, to) <br> _Flow constructor_ | _constructor_
 readonly property __BlockFrom__ <br> _Get: Gets the [`Block`](../../api/world/blocks/Block.md) flowing from_ | [`Block`](../../api/world/blocks/Block.md)
 readonly property __BlockTo__ <br> _Get: Gets the [`Block`](../../api/world/blocks/Block.md) flowing to_ | [`Block`](../../api/world/blocks/Block.md)
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

### Public Constructors for [`Flow`](Flow.md)

##### <a id='flow'></a>new __Flow__(from, to) 

_Flow constructor_

Argument | Type | Description  
--- | --- | --- 
from | [`Block`](../../api/world/blocks/Block.md) | from argument
to | [`Block`](../../api/world/blocks/Block.md) | to argument

---

### Public Properties for [`Flow`](Flow.md)

##### <a id='blockfrom'></a>public  readonly property __BlockFrom__

_Get: Gets the [`Block`](../../api/world/blocks/Block.md) flowing from_

Get | Description
--- | --- 
[`Block`](../../api/world/blocks/Block.md) | the [`Block`](../../api/world/blocks/Block.md)



##### <a id='blockto'></a>public  readonly property __BlockTo__

_Get: Gets the [`Block`](../../api/world/blocks/Block.md) flowing to_

Get | Description
--- | --- 
[`Block`](../../api/world/blocks/Block.md) | the [`Block`](../../api/world/blocks/Block.md)



---

### Public Methods for [`Flow`](Flow.md)

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
	

