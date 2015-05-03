## EntityMount __class__

>io.wolfscript.event.entity.EntityMount
>Extends [`CancelableHook`](..\..\hook\CancelableHook.md)

---

### Class Overview

Called when one entity is trying to mount another

Method | Type   
--- | :--- 
new __EntityMount__(entity, rider) <br> _EntityMount constructor_ | _constructor_
 readonly property __Rider__ <br> _Get: Get the entity that is about to mount another one_ | [`LivingBase`](..\..\api\entity\living\LivingBase.md)
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

### Public Constructors for [`EntityMount`](EntityMount.md)

##### <a id='entitymount'></a>new __EntityMount__(entity, rider) 

_EntityMount constructor_

Argument | Type | Description  
--- | --- | --- 
entity | [`LivingBase`](..\..\api\entity\living\LivingBase.md) | entity argument
rider | [`LivingBase`](..\..\api\entity\living\LivingBase.md) | rider argument

---

### Public Properties for [`EntityMount`](EntityMount.md)

##### <a id='rider'></a>public  readonly property __Rider__

_Get: Get the entity that is about to mount another one_

Get | Description
--- | --- 
[`LivingBase`](..\..\api\entity\living\LivingBase.md) | the entering Entity /
    public LivingBase getEntity() {
        return entity;
    }

    /** Get the entity that is about to mount the other one



---

### Public Methods for [`EntityMount`](EntityMount.md)

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
	

