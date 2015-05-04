## HopperTransfer __class__

>io.wolfscript.event.world.HopperTransfer
>Extends [`CancelableHook`](../../hook/CancelableHook.md)

---

### Class Overview

Hook parameter for when Hoppers Transfer Items

Method | Type   
--- | :--- 
new __HopperTransfer__(hopper, itemTransferred, inputting) <br> _HopperTransfer constructor_ | _constructor_
 readonly property __Hopper__ <br> _Get: Gets the hopper involved with this transfer._ | [`Hopper`](../../api/inventory/Hopper.md)
 readonly property __ItemTransferred__ <br> _Get: Gets the item being transferred in this event._ | [`Item`](../../api/inventory/Item.md)
 function __isInputting__() <br> _Is the transfer inputting into the Hopper?_ | `boolean`
 function __isOutputting__() <br> _Is the transfer outputting into the Hopper?_ | `boolean`
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

### Public Constructors for [`HopperTransfer`](HopperTransfer.md)

##### <a id='hoppertransfer'></a>new __HopperTransfer__(hopper, itemTransferred, inputting) 

_HopperTransfer constructor_

Argument | Type | Description  
--- | --- | --- 
hopper | [`Hopper`](../../api/inventory/Hopper.md) | hopper argument
itemTransferred | [`Item`](../../api/inventory/Item.md) | itemTransferred argument
inputting | `boolean` | inputting argument

---

### Public Properties for [`HopperTransfer`](HopperTransfer.md)

##### <a id='hopper'></a>public  readonly property __Hopper__

_Get: Gets the hopper involved with this transfer. Use instanceof to Check if it is a HopperBlock or HopperMincart._

Get | Description
--- | --- 
[`Hopper`](../../api/inventory/Hopper.md) | The Hopper.



##### <a id='itemtransferred'></a>public  readonly property __ItemTransferred__

_Get: Gets the item being transferred in this event._

Get | Description
--- | --- 
[`Item`](../../api/inventory/Item.md) | The Item.



---

### Public Methods for [`HopperTransfer`](HopperTransfer.md)

##### <a id='isinputting'></a>public  function __isInputting__()

_Is the transfer inputting into the Hopper?_

Returns | Description
--- | --- 
`boolean` | True if the item is being transferred into the hopper.


##### <a id='isoutputting'></a>public  function __isOutputting__()

_Is the transfer outputting into the Hopper?_

Returns | Description
--- | --- 
`boolean` | True if the item is being transferred out of hopper.


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
	

