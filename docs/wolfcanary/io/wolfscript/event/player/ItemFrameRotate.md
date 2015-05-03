## ItemFrameRotate __class__

>io.wolfscript.event.player.ItemFrameRotate
>Extends [`CancelableHook`](..\..\hook\CancelableHook.md)

---

### Class Overview

Called when a `Player` rotates an [`Item`](..\..\api\inventory\Item.md) in an [`ItemFrame`](..\..\api\entity\hanging\ItemFrame.md)

Method | Type   
--- | :--- 
new __ItemFrameRotate__(player, itemFrame) <br> _ItemFrameRotate constructor_ | _constructor_
 writeonly property __NewRotation__ <br> _Set: Gets the `Player` interacting with the [`ItemFrame`](..\..\api\entity\hanging\ItemFrame.md)_ | `void`
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

### Public Constructors for [`ItemFrameRotate`](ItemFrameRotate.md)

##### <a id='itemframerotate'></a>new __ItemFrameRotate__(player, itemFrame) 

_ItemFrameRotate constructor_

Argument | Type | Description  
--- | --- | --- 
player | `Player` | player argument
itemFrame | [`ItemFrame`](..\..\api\entity\hanging\ItemFrame.md) | itemFrame argument

---

### Public Properties for [`ItemFrameRotate`](ItemFrameRotate.md)

##### <a id='newrotation'></a>public  writeonly property __NewRotation__

_Set: Gets the `Player` interacting with the [`ItemFrame`](..\..\api\entity\hanging\ItemFrame.md)_

Get | Description
--- | --- 
`void` | the player /
    public final Player getPlayer() {
        return player;
    }

    /** Gets the [`ItemFrame`](..\..\api\entity\hanging\ItemFrame.md) being interacted with

Set | Type | Description  
--- | --- | --- 
rotation | `int` | new rotation value (0-3)


---

### Public Methods for [`ItemFrameRotate`](ItemFrameRotate.md)

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
	

