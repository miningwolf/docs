## BlockPhysics __class__

>io.wolfscript.event.world.BlockPhysics
>Extends [`CancelableHook`](..\..\hook\CancelableHook.md)

---

### Class Overview

Block physics hook. Contains information about a block's physics being updated.

Method | Type   
--- | :--- 
new __BlockPhysics__(block, placed) <br> _BlockPhysics constructor_ | _constructor_
final function __toString__() <br> _toString method_ | `String`
 function __wasPlaced__() <br> _Gets the [`Block`](..\..\api\world\blocks\Block.md)_ | `boolean`
 |
__Inherited items from [`CancelableHook`](..\..\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](..\..\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](..\..\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](..\..\hook\Hook.md)







---

### Public Constructors for [`BlockPhysics`](BlockPhysics.md)

##### <a id='blockphysics'></a>new __BlockPhysics__(block, placed) 

_BlockPhysics constructor_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](..\..\api\world\blocks\Block.md) | block argument
placed | `boolean` | placed argument

---

### Public Methods for [`BlockPhysics`](BlockPhysics.md)

##### <a id='tostring'></a>public final function __toString__()

_toString method_

Returns | 
--- | 
`String` |


##### <a id='wasplaced'></a>public  function __wasPlaced__()

_Gets the [`Block`](..\..\api\world\blocks\Block.md)_

Returns | Description
--- | --- 
`boolean` | block /
    public Block getBlock() {
        return block;
    }

    /** Gets whether this [`Block`](..\..\api\world\blocks\Block.md) was just placed


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
	

