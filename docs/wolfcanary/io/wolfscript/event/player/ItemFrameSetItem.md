## ItemFrameSetItem __class__

>io.wolfscript.event.player.ItemFrameSetItem
>Extends [`CancelableHook`](..\..\hook\CancelableHook.md)

---

### Class Overview

Called when an `Player` sets and [`Item`](..\..\api\inventory\Item.md) in a [`ItemFrame`](..\..\api\entity\hanging\ItemFrame.md)

Method | Type   
--- | :--- 
new __ItemFrameSetItem__(player, itemFrame, item) <br> _ItemFrameSetItem constructor_ | _constructor_
 readonly property __Item__ <br> _Get: Gets the `Player` interacting with the [`ItemFrame`](..\..\api\entity\hanging\ItemFrame.md)_ | [`Item`](..\..\api\inventory\Item.md)
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

### Public Constructors for [`ItemFrameSetItem`](ItemFrameSetItem.md)

##### <a id='itemframesetitem'></a>new __ItemFrameSetItem__(player, itemFrame, item) 

_ItemFrameSetItem constructor_

Argument | Type | Description  
--- | --- | --- 
player | `Player` | player argument
itemFrame | [`ItemFrame`](..\..\api\entity\hanging\ItemFrame.md) | itemFrame argument
item | [`Item`](..\..\api\inventory\Item.md) | item argument

---

### Public Properties for [`ItemFrameSetItem`](ItemFrameSetItem.md)

##### <a id='item'></a>public  readonly property __Item__

_Get: Gets the `Player` interacting with the [`ItemFrame`](..\..\api\entity\hanging\ItemFrame.md)_

Get | Description
--- | --- 
[`Item`](..\..\api\inventory\Item.md) | the player /
    public final Player getPlayer() {
        return player;
    }

    /** Gets the [`ItemFrame`](..\..\api\entity\hanging\ItemFrame.md) being interacted with



---

### Public Methods for [`ItemFrameSetItem`](ItemFrameSetItem.md)

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
	

