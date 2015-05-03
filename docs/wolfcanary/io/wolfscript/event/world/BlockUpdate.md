## BlockUpdate __class__

>io.wolfscript.event.world.BlockUpdate
>Extends [`CancelableHook`](..\..\hook\CancelableHook.md)

---

### Class Overview

Block update hook. Contains information about a block updating.

Method | Type   
--- | :--- 
 readonly property __NewBlockType__ <br> _NewBlockType property_ | [`BlockType`](..\..\api\world\blocks\BlockType.md)
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


### Public Properties for [`BlockUpdate`](BlockUpdate.md)

##### <a id='newblocktype'></a>public  readonly property __NewBlockType__

_NewBlockType property_

Get | Description
--- | --- 
[`BlockType`](..\..\api\world\blocks\BlockType.md) | The [`Block`](..\..\api\world\blocks\Block.md) updated. /
    public Block getBlock() {
        return block;
    }

    /** Gets the block id of the new [`Block`](..\..\api\world\blocks\Block.md)



---

### Public Methods for [`BlockUpdate`](BlockUpdate.md)

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
	

