## HangingEntityDestroy __class__

>io.wolfscript.event.entity.HangingEntityDestroy
>Extends [`CancelableHook`](..\..\hook\CancelableHook.md)

---

### Class Overview

HangingEntity destroy hook. Contains information about a painting or item frame being destroyed. In case the it was destroyed by a player, you will get this player too.

Method | Type   
--- | :--- 
new __HangingEntityDestroy__(hanging, player, source) <br> _HangingEntityDestroy constructor_ | _constructor_
 readonly property __DamageSource__ <br> _Get: Gets the [`HangingEntity`](..\..\api\entity\hanging\HangingEntity.md)_ | [`DamageSource`](..\..\api\DamageSource.md)
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

### Public Constructors for [`HangingEntityDestroy`](HangingEntityDestroy.md)

##### <a id='hangingentitydestroy'></a>new __HangingEntityDestroy__(hanging, player, source) 

_HangingEntityDestroy constructor_

Argument | Type | Description  
--- | --- | --- 
hanging | [`HangingEntity`](..\..\api\entity\hanging\HangingEntity.md) | hanging argument
player | `Player` | player argument
source | [`DamageSource`](..\..\api\DamageSource.md) | source argument

---

### Public Properties for [`HangingEntityDestroy`](HangingEntityDestroy.md)

##### <a id='damagesource'></a>public  readonly property __DamageSource__

_Get: Gets the [`HangingEntity`](..\..\api\entity\hanging\HangingEntity.md)_

Get | Description
--- | --- 
[`DamageSource`](..\..\api\DamageSource.md) | hanging entity /
    public HangingEntity getPainting() {
        return hanging;
    }

    /** Gets the `Player` who destroyed the item frame or painting. If the hook was not caused by a player, this will return null.



---

### Public Methods for [`HangingEntityDestroy`](HangingEntityDestroy.md)

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
	

