## EndermanPickupBlock __class__

>io.wolfscript.event.entity.EndermanPickupBlock
>Extends [`CancelableHook`](..\..\hook\CancelableHook.md)

---

### Class Overview

Enderman pick up block hook. Contains information about an Enderman picking up a block

Method | Type   
--- | :--- 
 readonly property __Block__ <br> _Get: Constructs a new EndermanPickUpBlockHook_ | [`Block`](..\..\api\world\blocks\Block.md)
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


### Public Properties for [`EndermanPickupBlock`](EndermanPickupBlock.md)

##### <a id='block'></a>public  readonly property __Block__

_Get: Constructs a new EndermanPickUpBlockHook_

Get | Description
--- | --- 
[`Block`](..\..\api\world\blocks\Block.md) | the [`Enderman`](..\..\api\entity\living\monster\Enderman.md) /
    public Enderman getEnderman() {
        return enderman;
    }

    /** Gets the [`Block`](..\..\api\world\blocks\Block.md)



---

### Public Methods for [`EndermanPickupBlock`](EndermanPickupBlock.md)

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
	
