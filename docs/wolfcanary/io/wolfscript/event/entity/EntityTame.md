## EntityTame __class__

>io.wolfscript.event.entity.EntityTame
>Extends [`CancelableHook`](..\..\hook\CancelableHook.md)

---

### Class Overview

Entity tame hook

Method | Type   
--- | :--- 
new __EntityTame__(animal, player, isTamed) <br> _EntityTame constructor_ | _constructor_
 readonly property __Animal__ <br> _Get: Check the default tame result._ | [`EntityAnimal`](..\..\api\entity\living\animal\EntityAnimal.md)
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

### Public Constructors for [`EntityTame`](EntityTame.md)

##### <a id='entitytame'></a>new __EntityTame__(animal, player, isTamed) 

_EntityTame constructor_

Argument | Type | Description  
--- | --- | --- 
animal | [`EntityAnimal`](..\..\api\entity\living\animal\EntityAnimal.md) | animal argument
player | `Player` | player argument
isTamed | `boolean` | isTamed argument

---

### Public Properties for [`EntityTame`](EntityTame.md)

##### <a id='animal'></a>public  readonly property __Animal__

_Get: Check the default tame result._

Get | Description
--- | --- 
[`EntityAnimal`](..\..\api\entity\living\animal\EntityAnimal.md) | True if the animal was tamed, false otherwise /
    public boolean isTamed() {
        return isTamed;
    }

    /** Override the tame result.



---

### Public Methods for [`EntityTame`](EntityTame.md)

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
	

