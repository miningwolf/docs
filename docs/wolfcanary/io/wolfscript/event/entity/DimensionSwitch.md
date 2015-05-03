## DimensionSwitch __class__

>io.wolfscript.event.entity.DimensionSwitch
>Extends [`CancelableHook`](..\..\hook\CancelableHook.md)

---

### Class Overview

Dimension switch hook. Contains information about an entity changeing dimentions

Method | Type   
--- | :--- 
new __DimensionSwitch__(entity, to, from) <br> _DimensionSwitch constructor_ | _constructor_
 readonly property __LocationFrom__ <br> _Get: Get the entity involved here._ | `Location`
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

### Public Constructors for [`DimensionSwitch`](DimensionSwitch.md)

##### <a id='dimensionswitch'></a>new __DimensionSwitch__(entity, to, from) 

_DimensionSwitch constructor_

Argument | Type | Description  
--- | --- | --- 
entity | [`Entity`](..\..\api\entity\Entity.md) | entity argument
to | `Location` | to argument
from | `Location` | from argument

---

### Public Properties for [`DimensionSwitch`](DimensionSwitch.md)

##### <a id='locationfrom'></a>public  readonly property __LocationFrom__

_Get: Get the entity involved here._

Get | Description
--- | --- 
`Location` | The entity. /
    public Entity getEntity() {
        return this.entity;
    }

    /** Get the entities current location.



---

### Public Methods for [`DimensionSwitch`](DimensionSwitch.md)

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
	

