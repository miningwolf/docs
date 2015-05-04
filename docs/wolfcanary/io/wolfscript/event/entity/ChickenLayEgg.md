## ChickenLayEgg __class__

>io.wolfscript.event.entity.ChickenLayEgg
>Extends [`CancelableHook`](../../hook/CancelableHook.md)

---

### Class Overview

Chicken lay egg hook, called when a chicken lay an egg.

Method | Type   
--- | :--- 
new __ChickenLayEgg__(chicken, egg, nextEggIn) <br> _Creates a new ChickenLayEgg_ | _constructor_
 readonly property __Chicken__ <br> _Get: Get the `Chicken` the laid the egg_ | `Chicken`
  property __Egg__ <br> _Get: Get the egg that was laid<br>Set: Change the egg that should be laid_ | [`Item`](../../api/inventory/Item.md)
  property __NextEggIn__ <br> _Get: Get the time until the next egg will be laid for the chicken that laid the egg<br>Set: Set the time until next egg will be laid from the chicken that laid the egg_ | `int`
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

### Public Constructors for [`ChickenLayEgg`](ChickenLayEgg.md)

##### <a id='chickenlayegg'></a>new __ChickenLayEgg__(chicken, egg, nextEggIn) 

_Creates a new ChickenLayEgg_

Argument | Type | Description  
--- | --- | --- 
chicken | `Chicken` | the chicken that laid the egg
egg | [`Item`](../../api/inventory/Item.md) | the egg that has been laid
nextEggIn | `int` | the time until next egg will be laid

---

### Public Properties for [`ChickenLayEgg`](ChickenLayEgg.md)

##### <a id='chicken'></a>public  readonly property __Chicken__

_Get: Get the `Chicken` the laid the egg_

Get | Description
--- | --- 
`Chicken` | the chicken that laid the egg



##### <a id='egg'></a>public   property __Egg__

_Get: Get the egg that was laid<br>Set: Change the egg that should be laid_

Get | Description
--- | --- 
[`Item`](../../api/inventory/Item.md) | the egg that was laid

Set | Type | Description  
--- | --- | --- 
egg | [`Item`](../../api/inventory/Item.md) | the egg that should be laid


##### <a id='nexteggin'></a>public   property __NextEggIn__

_Get: Get the time until the next egg will be laid for the chicken that laid the egg<br>Set: Set the time until next egg will be laid from the chicken that laid the egg_

Get | Description
--- | --- 
`int` | time until next egg will be laid from the current chicken

Set | Type | Description  
--- | --- | --- 
nextEggIn | `int` | time until next egg will be laid


---

### Public Methods for [`ChickenLayEgg`](ChickenLayEgg.md)

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
	

