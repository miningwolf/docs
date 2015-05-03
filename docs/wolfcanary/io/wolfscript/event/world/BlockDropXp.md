## BlockDropXp __class__

>io.wolfscript.event.world.BlockDropXp
>Extends [`CancelableHook`](..\..\hook\CancelableHook.md)

---

### Class Overview

Event thrown when a block that drop experience (spawner, ore, redstone ore) is destroyed

Method | Type   
--- | :--- 
new __BlockDropXp__(block, xp) <br> _BlockDropXp constructor_ | _constructor_
 writeonly property __Xp__ <br> _Set: Get the block that gives the dropped experience_ | `void`
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

### Public Constructors for [`BlockDropXp`](BlockDropXp.md)

##### <a id='blockdropxp'></a>new __BlockDropXp__(block, xp) 

_BlockDropXp constructor_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](..\..\api\world\blocks\Block.md) | block argument
xp | `int` | xp argument

---

### Public Properties for [`BlockDropXp`](BlockDropXp.md)

##### <a id='xp'></a>public  writeonly property __Xp__

_Set: Get the block that gives the dropped experience_

Get | Description
--- | --- 
`void` | The block /
    public Block getBlock() {
        return block;
    }

    /** Get the experience amount that will be dropped.

Set | Type | Description  
--- | --- | --- 
xp | `int` | The experience amount that will be dropped


---

### Public Methods for [`BlockDropXp`](BlockDropXp.md)

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
	

