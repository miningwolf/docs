## BlockDestroy __class__

>io.wolfscript.event.player.BlockDestroy
>Extends [`CancelableHook`](../../hook/CancelableHook.md)

this.on('player.BlockDestroy', function (e) { });

---

### Class Overview

Called when a player destroy a block

Method | Type   
--- | :--- 
new __BlockDestroy__(player, block) <br> _BlockDestroy constructor_ | _constructor_
 readonly property __Block__ <br> _Get: Get the [`Block`](../../api/world/blocks/Block.md) the `Player` is left clicking_ | [`Block`](../../api/world/blocks/Block.md)
 readonly property __Player__ <br> _Get: Gets the `Player` clicking_ | `Player`
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

### Public Constructors for [`BlockDestroy`](BlockDestroy.md)

##### <a id='blockdestroy'></a>new __BlockDestroy__(player, block) 

_BlockDestroy constructor_

Argument | Type | Description  
--- | --- | --- 
player | `Player` | player argument
block | [`Block`](../../api/world/blocks/Block.md) | block argument

---

### Public Properties for [`BlockDestroy`](BlockDestroy.md)

##### <a id='block'></a>public  readonly property __Block__

_Get: Get the [`Block`](../../api/world/blocks/Block.md) the `Player` is left clicking_

Get | Description
--- | --- 
[`Block`](../../api/world/blocks/Block.md) | block if player is clicking a block, null otherwise



##### <a id='player'></a>public  readonly property __Player__

_Get: Gets the `Player` clicking_

Get | Description
--- | --- 
`Player` | player



---

### Public Methods for [`BlockDestroy`](BlockDestroy.md)

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
	

