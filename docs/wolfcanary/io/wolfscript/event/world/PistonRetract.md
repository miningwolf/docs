## PistonRetract __class__

>io.wolfscript.event.world.PistonRetract
>Extends [`CancelableHook`](..\..\hook\CancelableHook.md)

---

### Class Overview

Piston Retract hook<br> Called when a piston retracts

Method | Type   
--- | :--- 
new __PistonRetract__(piston, moving) <br> _PistonRetract constructor_ | _constructor_
 readonly property __Moving__ <br> _Get: Gets the piston [`Block`](..\..\api\world\blocks\Block.md)_ | [`Block`](..\..\api\world\blocks\Block.md)
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

### Public Constructors for [`PistonRetract`](PistonRetract.md)

##### <a id='pistonretract'></a>new __PistonRetract__(piston, moving) 

_PistonRetract constructor_

Argument | Type | Description  
--- | --- | --- 
piston | [`Block`](..\..\api\world\blocks\Block.md) | piston argument
moving | [`Block`](..\..\api\world\blocks\Block.md) | moving argument

---

### Public Properties for [`PistonRetract`](PistonRetract.md)

##### <a id='moving'></a>public  readonly property __Moving__

_Get: Gets the piston [`Block`](..\..\api\world\blocks\Block.md)_

Get | Description
--- | --- 
[`Block`](..\..\api\world\blocks\Block.md) | piston /
    public Block getPiston() {
        return piston;
    }

    /** Gets the [`Block`](..\..\api\world\blocks\Block.md) the piston is pushing/pulling



---

### Public Methods for [`PistonRetract`](PistonRetract.md)

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
	

