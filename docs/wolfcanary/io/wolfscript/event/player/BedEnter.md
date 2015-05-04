## BedEnter __class__

>io.wolfscript.event.player.BedEnter
>Extends [`CancelableHook`](../../hook/CancelableHook.md)

---

### Class Overview

Bed enter hook, called when a player enters a bed

Method | Type   
--- | :--- 
new __BedEnter__(player, bed) <br> _Create a new BedEnter_ | _constructor_
 readonly property __Bed__ <br> _Get: Get the bed [`Block`](../../api/world/blocks/Block.md) the `Player` is entering_ | [`Block`](../../api/world/blocks/Block.md)
 readonly property __Player__ <br> _Get: Gets the `Player` entering the bed_ | `Player`
 function __toString__() <br> _toString method_ | `String`
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

### Public Constructors for [`BedEnter`](BedEnter.md)

##### <a id='bedenter'></a>new __BedEnter__(player, bed) 

_Create a new BedEnter_

Argument | Type | Description  
--- | --- | --- 
player | `Player` | the player that entered the bed
bed | [`Block`](../../api/world/blocks/Block.md) | the bed that the player entered

---

### Public Properties for [`BedEnter`](BedEnter.md)

##### <a id='bed'></a>public  readonly property __Bed__

_Get: Get the bed [`Block`](../../api/world/blocks/Block.md) the `Player` is entering_

Get | Description
--- | --- 
[`Block`](../../api/world/blocks/Block.md) | bed block player is entering



##### <a id='player'></a>public  readonly property __Player__

_Get: Gets the `Player` entering the bed_

Get | Description
--- | --- 
`Player` | player



---

### Public Methods for [`BedEnter`](BedEnter.md)

##### <a id='tostring'></a>public  function __toString__()

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
	

