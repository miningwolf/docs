## ArmorStandModifyEvent __class__

>io.wolfscript.event.player.ArmorStandModifyEvent
>Extends [`CancelableHook`](../CancelableHook.md)
``` javascript
this.on('player.ArmorStandModifyEvent', function (e) { });
```


---

### Class Overview

class ArmorStandModifyEvent

Method | Type   
--- | :--- 
 readonly property __CurrentItem__ <br> _Get: Gets the [`Item`](../../api/inventory/Item.md) currently in the ArmorStand_ | [`Item`](../../api/inventory/Item.md)
 readonly property __Player__ <br> _Get: Gets the `Player` modifying the ArmorStand_ | `Player`
 readonly property __SettingItem__ <br> _SettingItem property_ | [`Item`](../../api/inventory/Item.md)
 readonly property __SlotId__ <br> _SlotId property_ | `int`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](../CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](../CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](../Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](../Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







---


### Public Properties for [`ArmorStandModifyEvent`](ArmorStandModifyEvent.md)

##### <a id='currentitem'></a>public  readonly property __CurrentItem__

_Get: Gets the [`Item`](../../api/inventory/Item.md) currently in the ArmorStand_

Get | Description
--- | --- 
[`Item`](../../api/inventory/Item.md) | the current [`Item`](../../api/inventory/Item.md) or `null` if currently no item is in the slot



##### <a id='player'></a>public  readonly property __Player__

_Get: Gets the `Player` modifying the ArmorStand_

Get | Description
--- | --- 
`Player` | the `Player`



##### <a id='settingitem'></a>public  readonly property __SettingItem__

_SettingItem property_

Get | 
--- | 
[`Item`](../../api/inventory/Item.md) |



##### <a id='slotid'></a>public  readonly property __SlotId__

_SlotId property_

Get | 
--- | 
`int` |



---

### Public Methods for [`ArmorStandModifyEvent`](ArmorStandModifyEvent.md)

##### <a id='tostring'></a>public final function __toString__()

_toString method_

Returns | 
--- | 
`String` |


---

### Public Methods for [`CancelableHook`](../CancelableHook.md)

##### <a id='call'></a>public  function __call__()

_Calls a Hook if not already executed_

Returns | Description
--- | --- 
[`CancelableHook`](../CancelableHook.md) | this


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

### Public Properties for [`Hook`](../Hook.md)

##### <a id='hookname'></a>public final readonly property __HookName__

_Get: Get the name of this hook._

Get | Description
--- | --- 
`String` | simple class name



---

### Public Methods for [`Hook`](../Hook.md)

##### <a id='call'></a>public  function __call__()

_Calls a Hook if not already executed_

Returns | Description
--- | --- 
[`Hook`](../Hook.md) | this


##### <a id='hashcode'></a>public  function __hashCode__()

_hashCode method_

Returns | 
--- | 
`int` |


---


---


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

