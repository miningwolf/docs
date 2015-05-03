## ArmorStandModify __class__

>io.wolfscript.event.player.ArmorStandModify
>Extends [`CancelableHook`](..\..\hook\CancelableHook.md)

---

### Class Overview

Called when a @{link Player} places/replaces armor in an `ArmorStand`

Method | Type   
--- | :--- 
new __ArmorStandModify__(armorStand, player, slotId, current, setting) <br> _ArmorStandModify constructor_ | _constructor_
 readonly property __SettingItem__ <br> _Get: Gets the `Player` modifying the ArmorStand_ | [`Item`](..\..\api\inventory\Item.md)
 readonly property __SlotId__ <br> _SlotId property_ | `int`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](..\..\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](..\..\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](..\..\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](..\..\hook\Hook.md)







---

### Public Constructors for [`ArmorStandModify`](ArmorStandModify.md)

##### <a id='armorstandmodify'></a>new __ArmorStandModify__(armorStand, player, slotId, current, setting) 

_ArmorStandModify constructor_

Argument | Type | Description  
--- | --- | --- 
armorStand | `ArmorStand` | armorStand argument
player | `Player` | player argument
slotId | `int` | slotId argument
current | [`Item`](..\..\api\inventory\Item.md) | current argument
setting | [`Item`](..\..\api\inventory\Item.md) | setting argument

---

### Public Properties for [`ArmorStandModify`](ArmorStandModify.md)

##### <a id='settingitem'></a>public  readonly property __SettingItem__

_Get: Gets the `Player` modifying the ArmorStand_

Get | Description
--- | --- 
[`Item`](..\..\api\inventory\Item.md) | the `Player` /
    public Player getPlayer() {
        return player;
    }

    /** Gets the [`Item`](..\..\api\inventory\Item.md) currently in the ArmorStand



##### <a id='slotid'></a>public  readonly property __SlotId__

_SlotId property_

Get | 
--- | 
`int` |



---

### Public Methods for [`ArmorStandModify`](ArmorStandModify.md)

##### <a id='tostring'></a>public final function __toString__()

_toString method_

Returns | 
--- | 
`String` |


---

### Public Methods for [`CancelableHook`](..\..\hook\CancelableHook.md)

##### <a id='call'></a>public  function __call__()

_Calls a Hook if not already executed_

Returns | Description
--- | --- 
[`CancelableHook`](..\..\hook\CancelableHook.md) | this


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

### Public Methods for [`Hook`](..\..\hook\Hook.md)

##### <a id='call'></a>public  function __call__()

_Get the name of this hook._

Returns | Description
--- | --- 
[`Hook`](..\..\hook\Hook.md) | simple class name /
    public final String getHookName() {
        return getClass().getSimpleName();
    }

    @Override
    public int hashCode() {
        int hash = getClass().getSimpleName().length();

        return hash getClass().getSimpleName().hashCode() + 2;
    }

    /** Calls a Hook if not already executed


---


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

