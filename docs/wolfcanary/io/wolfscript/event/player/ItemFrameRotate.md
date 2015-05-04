## ItemFrameRotate __class__

>io.wolfscript.event.player.ItemFrameRotate
>Extends [`CancelableHook`](../../hook/CancelableHook.md)

---

### Class Overview

Called when a `Player` rotates an [`Item`](../../api/inventory/Item.md) in an [`ItemFrame`](../../api/entity/hanging/ItemFrame.md)

Method | Type   
--- | :--- 
new __ItemFrameRotate__(player, itemFrame) <br> _ItemFrameRotate constructor_ | _constructor_
 readonly property __CurrentRotation__ <br> _Get: Gets the current rotation of the [`Item`](../../api/inventory/Item.md) in the [`ItemFrame`](../../api/entity/hanging/ItemFrame.md)_ | `int`
final readonly property __ItemFrame__ <br> _Get: Gets the [`ItemFrame`](../../api/entity/hanging/ItemFrame.md) being interacted with_ | [`ItemFrame`](../../api/entity/hanging/ItemFrame.md)
  property __NewRotation__ <br> _Get: Gets the new rotation that the [`Item`](../../api/inventory/Item.md) in the [`ItemFrame`](../../api/entity/hanging/ItemFrame.md) will be at.<br>Set: Sets the new rotation._ | `int`
final readonly property __Player__ <br> _Get: Gets the `Player` interacting with the [`ItemFrame`](../../api/entity/hanging/ItemFrame.md)_ | `Player`
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

### Public Constructors for [`ItemFrameRotate`](ItemFrameRotate.md)

##### <a id='itemframerotate'></a>new __ItemFrameRotate__(player, itemFrame) 

_ItemFrameRotate constructor_

Argument | Type | Description  
--- | --- | --- 
player | `Player` | player argument
itemFrame | [`ItemFrame`](../../api/entity/hanging/ItemFrame.md) | itemFrame argument

---

### Public Properties for [`ItemFrameRotate`](ItemFrameRotate.md)

##### <a id='currentrotation'></a>public  readonly property __CurrentRotation__

_Get: Gets the current rotation of the [`Item`](../../api/inventory/Item.md) in the [`ItemFrame`](../../api/entity/hanging/ItemFrame.md)<br/> This is the same as calling `ItemFrame#getItemRotation`_

Get | Description
--- | --- 
`int` | item rotation



##### <a id='itemframe'></a>public final readonly property __ItemFrame__

_Get: Gets the [`ItemFrame`](../../api/entity/hanging/ItemFrame.md) being interacted with_

Get | Description
--- | --- 
[`ItemFrame`](../../api/entity/hanging/ItemFrame.md) | the item frame



##### <a id='newrotation'></a>public   property __NewRotation__

_Get: Gets the new rotation that the [`Item`](../../api/inventory/Item.md) in the [`ItemFrame`](../../api/entity/hanging/ItemFrame.md) will be at.<br>Set: Sets the new rotation._

Get | Description
--- | --- 
`int` | new rotation

Set | Type | Description  
--- | --- | --- 
rotation | `int` | new rotation value (0-3)


##### <a id='player'></a>public final readonly property __Player__

_Get: Gets the `Player` interacting with the [`ItemFrame`](../../api/entity/hanging/ItemFrame.md)_

Get | Description
--- | --- 
`Player` | the player



---

### Public Methods for [`ItemFrameRotate`](ItemFrameRotate.md)

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
	

