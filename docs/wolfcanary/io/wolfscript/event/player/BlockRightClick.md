## BlockRightClick __class__

>io.wolfscript.event.player.BlockRightClick
>Extends [`CancelableHook`](../../hook/CancelableHook.md)

---

### Class Overview

Is called when a player right-clicks a block, eg. uses it.

Method | Type   
--- | :--- 
new __BlockRightClick__(player, clicked) <br> _Construct a new BlockRightClick_ | _constructor_
 readonly property __BlockClicked__ <br> _Get: Get the [`Block`](../../api/world/blocks/Block.md) that was clicked._ | [`Block`](../../api/world/blocks/Block.md)
 readonly property __Player__ <br> _Get: Get the `Player` who clicked the [`Block`](../../api/world/blocks/Block.md)_ | `Player`
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

### Public Constructors for [`BlockRightClick`](BlockRightClick.md)

##### <a id='blockrightclick'></a>new __BlockRightClick__(player, clicked) 

_Construct a new BlockRightClick_

Argument | Type | Description  
--- | --- | --- 
player | `Player` | the Player doing the clicking
clicked | [`Block`](../../api/world/blocks/Block.md) | the block being clicked

---

### Public Properties for [`BlockRightClick`](BlockRightClick.md)

##### <a id='blockclicked'></a>public  readonly property __BlockClicked__

_Get: Get the [`Block`](../../api/world/blocks/Block.md) that was clicked._

Get | Description
--- | --- 
[`Block`](../../api/world/blocks/Block.md) | the [`Block`](../../api/world/blocks/Block.md) that was clicked



##### <a id='player'></a>public  readonly property __Player__

_Get: Get the `Player` who clicked the [`Block`](../../api/world/blocks/Block.md)_

Get | Description
--- | --- 
`Player` | the `Player` clicking



---

### Public Methods for [`BlockRightClick`](BlockRightClick.md)

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
	

