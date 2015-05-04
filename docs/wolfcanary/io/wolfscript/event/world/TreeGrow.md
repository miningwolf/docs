## TreeGrow __class__

>io.wolfscript.event.world.TreeGrow
>Extends [`CancelableHook`](../../hook/CancelableHook.md)

this.on('world.TreeGrow', function (e) { });

---

### Class Overview

class TreeGrow

Method | Type   
--- | :--- 
new __TreeGrow__(sapling) <br> _Constructs a new TreeGrow_ | _constructor_
 readonly property __Sapling__ <br> _Get: Gets the sapling trying to grow_ | [`Block`](../../api/world/blocks/Block.md)
final function __toString__() <br> _{@inheritDoc}_ | `String`
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

### Public Constructors for [`TreeGrow`](TreeGrow.md)

##### <a id='treegrow'></a>new __TreeGrow__(sapling) 

_Constructs a new TreeGrow_

Argument | Type | Description  
--- | --- | --- 
sapling | [`Block`](../../api/world/blocks/Block.md) | the sapling trying to grow

---

### Public Properties for [`TreeGrow`](TreeGrow.md)

##### <a id='sapling'></a>public  readonly property __Sapling__

_Get: Gets the sapling trying to grow_

Get | Description
--- | --- 
[`Block`](../../api/world/blocks/Block.md) | the sapling



---

### Public Methods for [`TreeGrow`](TreeGrow.md)

##### <a id='tostring'></a>public final function __toString__()

_{@inheritDoc}_

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
	

