## LiquidDestroy __class__

>io.wolfscript.event.world.LiquidDestroy
>Extends [`CancelableHook`](..\..\hook\CancelableHook.md)

---

### Class Overview

Is called when a liquid is about to destroy something (crops, popping off torches etc)

Method | Type   
--- | :--- 
new __LiquidDestroy__(block) <br> _LiquidDestroy constructor_ | _constructor_
new __LiquidDestroy__(liquidType, toDestroy) <br> _LiquidDestroy constructor_ | _constructor_
 writeonly property __ForceDestroy__ <br> _Set: Get the block that would be destroyed by the liquid flow_ | `void`
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

### Public Constructors for [`LiquidDestroy`](LiquidDestroy.md)

##### <a id='liquiddestroy'></a>new __LiquidDestroy__(block) 

_LiquidDestroy constructor_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](..\..\api\world\blocks\Block.md) | block argument

##### <a id='liquiddestroy'></a>new __LiquidDestroy__(liquidType, toDestroy) 

_LiquidDestroy constructor_

Argument | Type | Description  
--- | --- | --- 
liquidType | [`BlockType`](..\..\api\world\blocks\BlockType.md) | liquidType argument
toDestroy | [`Block`](..\..\api\world\blocks\Block.md) | toDestroy argument

---

### Public Properties for [`LiquidDestroy`](LiquidDestroy.md)

##### <a id='forcedestroy'></a>public  writeonly property __ForceDestroy__

_Set: Get the block that would be destroyed by the liquid flow_

Get | Description
--- | --- 
`void` | the [`Block`](..\..\api\world\blocks\Block.md) /
    public Block getBlock() {
        return block;
    }

    /** Returns the [`BlockType`](..\..\api\world\blocks\BlockType.md) of the liquid. Always returns the Flowing variant.

Set | Type | Description  
--- | --- | --- 
forceDestroy | `boolean` | `true` for force destroy


---

### Public Methods for [`LiquidDestroy`](LiquidDestroy.md)

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
	

