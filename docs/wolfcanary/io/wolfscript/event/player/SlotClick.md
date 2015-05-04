## SlotClick __class__

>io.wolfscript.event.player.SlotClick
>Extends [`CancelableHook`](../../hook/CancelableHook.md)

this.on('player.SlotClick', function (e) { });

---

### Class Overview

class SlotClick

Method | Type   
--- | :--- 
new __SlotClick__(player, inventory, item, slotType, secondarySlotType, grabMode, button, slotId, transNum) <br> _Constructs a new SlotClick_ | _constructor_
 readonly property __ButtonPress__ <br> _Get: Gets the button pressed_ | [`ButtonPress`](../../api/inventory/slot/ButtonPress.md)
 readonly property __Player__ <br> _Get: Gets the `Player` doing the clicking_ | `Player`
 readonly property __Item__ <br> _Get: Gets the [`Item`](../../api/inventory/Item.md) in the slot clicked_ | [`Item`](../../api/inventory/Item.md)
 readonly property __ItemOnCursor__ <br> _Get: Gets the [`Item`](../../api/inventory/Item.md) on the player's cursor_ | [`Item`](../../api/inventory/Item.md)
 readonly property __GrabMode__ <br> _Get: Gets the [`GrabMode`](../../api/inventory/slot/GrabMode.md) used in the click_ | [`GrabMode`](../../api/inventory/slot/GrabMode.md)
 readonly property __Inventory__ <br> _Get: Gets the [`Inventory`](../../api/inventory/Inventory.md) that is open and being clicked in_ | [`Inventory`](../../api/inventory/Inventory.md)
 readonly property __SecondarySlotType__ <br> _Get: Gets the secondary type of the Slot being clicked_ | [`SecondarySlotType`](../../api/inventory/slot/SecondarySlotType.md)
 readonly property __SlotId__ <br> _Get: Gets the id of the slot clicked_ | `short`
 readonly property __SlotType__ <br> _Get: Gets the type of Slot being clicked_ | [`SlotType`](../../api/inventory/slot/SlotType.md)
 readonly property __TransactionNumber__ <br> _Get: Gets the transaction number (increments up by 1 while the window is open)_ | `short`
 writeonly property __DoUpdate__ <br> _Set: Sets whether to notify the client of an update_ | `void`
 function __doUpdate__() <br> _Gets whether to notify the client of a update if canceled_ | `boolean`
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

### Public Constructors for [`SlotClick`](SlotClick.md)

##### <a id='slotclick'></a>new __SlotClick__(player, inventory, item, slotType, secondarySlotType, grabMode, button, slotId, transNum) 

_Constructs a new SlotClick_

Argument | Type | Description  
--- | --- | --- 
player | `Player` | the `Player` clicking
inventory | [`Inventory`](../../api/inventory/Inventory.md) | the [`Inventory`](../../api/inventory/Inventory.md) thats open
item | [`Item`](../../api/inventory/Item.md) | the [`Item`](../../api/inventory/Item.md) in the slot clicked
slotType | [`SlotType`](../../api/inventory/slot/SlotType.md) | the [`SlotType`](../../api/inventory/slot/SlotType.md) being clicked
secondarySlotType | [`SecondarySlotType`](../../api/inventory/slot/SecondarySlotType.md) | the [`SecondarySlotType`](../../api/inventory/slot/SecondarySlotType.md) being clicked
grabMode | [`GrabMode`](../../api/inventory/slot/GrabMode.md) | the [`GrabMode`](../../api/inventory/slot/GrabMode.md) of the link
button | [`ButtonPress`](../../api/inventory/slot/ButtonPress.md) | the [`ButtonPress`](../../api/inventory/slot/ButtonPress.md)
slotId | `short` | the slot id
transNum | `short` | the transaction number

---

### Public Properties for [`SlotClick`](SlotClick.md)

##### <a id='buttonpress'></a>public  readonly property __ButtonPress__

_Get: Gets the button pressed_

Get | Description
--- | --- 
[`ButtonPress`](../../api/inventory/slot/ButtonPress.md) | The [`ButtonPress`](../../api/inventory/slot/ButtonPress.md)



##### <a id='player'></a>public  readonly property __Player__

_Get: Gets the `Player` doing the clicking_

Get | Description
--- | --- 
`Player` | the `Player` clicking



##### <a id='item'></a>public  readonly property __Item__

_Get: Gets the [`Item`](../../api/inventory/Item.md) in the slot clicked_

Get | Description
--- | --- 
[`Item`](../../api/inventory/Item.md) | the [`Item`](../../api/inventory/Item.md) clicked; `null` if there isn't an item in the slot



##### <a id='itemoncursor'></a>public  readonly property __ItemOnCursor__

_Get: Gets the [`Item`](../../api/inventory/Item.md) on the player's cursor_

Get | Description
--- | --- 
[`Item`](../../api/inventory/Item.md) | the [`Item`](../../api/inventory/Item.md) on the cursor; `null` if there isn't an item on the cursor



##### <a id='grabmode'></a>public  readonly property __GrabMode__

_Get: Gets the [`GrabMode`](../../api/inventory/slot/GrabMode.md) used in the click_

Get | Description
--- | --- 
[`GrabMode`](../../api/inventory/slot/GrabMode.md) | the [`GrabMode`](../../api/inventory/slot/GrabMode.md)



##### <a id='inventory'></a>public  readonly property __Inventory__

_Get: Gets the [`Inventory`](../../api/inventory/Inventory.md) that is open and being clicked in_

Get | Description
--- | --- 
[`Inventory`](../../api/inventory/Inventory.md) | the open [`Inventory`](../../api/inventory/Inventory.md)



##### <a id='secondaryslottype'></a>public  readonly property __SecondarySlotType__

_Get: Gets the secondary type of the Slot being clicked_

Get | Description
--- | --- 
[`SecondarySlotType`](../../api/inventory/slot/SecondarySlotType.md) | the [`SecondarySlotType`](../../api/inventory/slot/SecondarySlotType.md) clicked



##### <a id='slotid'></a>public  readonly property __SlotId__

_Get: Gets the id of the slot clicked_

Get | Description
--- | --- 
`short` | the slot id



##### <a id='slottype'></a>public  readonly property __SlotType__

_Get: Gets the type of Slot being clicked_

Get | Description
--- | --- 
[`SlotType`](../../api/inventory/slot/SlotType.md) | the [`SlotType`](../../api/inventory/slot/SlotType.md) clicked



##### <a id='transactionnumber'></a>public  readonly property __TransactionNumber__

_Get: Gets the transaction number (increments up by 1 while the window is open)_

Get | Description
--- | --- 
`short` | the transaction number



##### <a id='doupdate'></a>public  writeonly property __DoUpdate__

_Set: Sets whether to notify the client of an update_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
update | `boolean` | `true` to notify; `false` otherwise


---

### Public Methods for [`SlotClick`](SlotClick.md)

##### <a id='doupdate'></a>public  function __doUpdate__()

_Gets whether to notify the client of a update if canceled_

Returns | Description
--- | --- 
`boolean` | `true` if notify; `false` otherwise


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
	

