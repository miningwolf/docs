## VehicleDamage __class__

>io.wolfscript.event.entity.VehicleDamage
>Extends [`CancelableHook`](..\..\hook\CancelableHook.md)

---

### Class Overview

Vehicle Damage hook. Contains information about a vehicle receiving damage.

Method | Type   
--- | :--- 
new __VehicleDamage__(vehicle, attacker, source, dealt) <br> _VehicleDamage constructor_ | _constructor_
 readonly property __DamageDealt__ <br> _Get: Get the vehicle that is about to be damaged_ | `float`
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

### Public Constructors for [`VehicleDamage`](VehicleDamage.md)

##### <a id='vehicledamage'></a>new __VehicleDamage__(vehicle, attacker, source, dealt) 

_VehicleDamage constructor_

Argument | Type | Description  
--- | --- | --- 
vehicle | [`Vehicle`](..\..\api\entity\vehicle\Vehicle.md) | vehicle argument
attacker | [`Entity`](..\..\api\entity\Entity.md) | attacker argument
source | [`DamageSource`](..\..\api\DamageSource.md) | source argument
dealt | `float` | dealt argument

---

### Public Properties for [`VehicleDamage`](VehicleDamage.md)

##### <a id='damagedealt'></a>public  readonly property __DamageDealt__

_Get: Get the vehicle that is about to be damaged_

Get | Description
--- | --- 
`float` | attacker if there is one, null otherwise /
    public Vehicle getVehicle() {
        return vehicle;
    }

    /** Get the entity that is inflicting the damage to the vehicle



---

### Public Methods for [`VehicleDamage`](VehicleDamage.md)

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
	

