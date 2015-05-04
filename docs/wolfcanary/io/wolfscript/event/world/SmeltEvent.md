## SmeltEvent __class__

>io.wolfscript.event.world.SmeltEvent
>Extends [`CancelableHook`](../../hook/CancelableHook.md)
``` javascript
this.on('world.SmeltEvent', function (e) { });
```


---

### Class Overview

class SmeltEvent

Method | Type   
--- | :--- 
 readonly property __Furnace__ <br> _Get: Gets the [`Furnace`](../../api/world/blocks/Furnace.md) doing the smelting_ | [`Furnace`](../../api/world/blocks/Furnace.md)
 readonly property __Result__ <br> _Get: Gets the [`Item`](../../api/inventory/Item.md) result_ | [`Item`](../../api/inventory/Item.md)
 readonly property __Smelted__ <br> _Get: Gets the [`Item`](../../api/inventory/Item.md) that was smelted_ | [`Item`](../../api/inventory/Item.md)
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


### Public Properties for [`SmeltEvent`](SmeltEvent.md)

##### <a id='furnace'></a>public  readonly property __Furnace__

_Get: Gets the [`Furnace`](../../api/world/blocks/Furnace.md) doing the smelting_

Get | Description
--- | --- 
[`Furnace`](../../api/world/blocks/Furnace.md) | the [`Furnace`](../../api/world/blocks/Furnace.md)



##### <a id='result'></a>public  readonly property __Result__

_Get: Gets the [`Item`](../../api/inventory/Item.md) result_

Get | Description
--- | --- 
[`Item`](../../api/inventory/Item.md) | the [`Item`](../../api/inventory/Item.md)



##### <a id='smelted'></a>public  readonly property __Smelted__

_Get: Gets the [`Item`](../../api/inventory/Item.md) that was smelted_

Get | Description
--- | --- 
[`Item`](../../api/inventory/Item.md) | the [`Item`](../../api/inventory/Item.md) smelted



---

### Public Methods for [`SmeltEvent`](SmeltEvent.md)

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
	

