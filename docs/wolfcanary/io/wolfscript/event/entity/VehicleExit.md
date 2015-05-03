## VehicleExit __class__

>io.wolfscript.event.entity.VehicleExit
>Extends [`CancelableHook`](..\..\hook\CancelableHook.md)

---

### Class Overview

Is called when a LivingEntity exits a vehicle

Method | Type   
--- | :--- 
new __VehicleExit__(vehicle, entity) <br> _VehicleExit constructor_ | _constructor_
 readonly property __Entity__ <br> _Entity property_ | [`LivingBase`](..\..\api\entity\living\LivingBase.md)
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

### Public Constructors for [`VehicleExit`](VehicleExit.md)

##### <a id='vehicleexit'></a>new __VehicleExit__(vehicle, entity) 

_VehicleExit constructor_

Argument | Type | Description  
--- | --- | --- 
vehicle | [`Vehicle`](..\..\api\entity\vehicle\Vehicle.md) | vehicle argument
entity | [`LivingBase`](..\..\api\entity\living\LivingBase.md) | entity argument

---

### Public Properties for [`VehicleExit`](VehicleExit.md)

##### <a id='entity'></a>public  readonly property __Entity__

_Entity property_

Get | Description
--- | --- 
[`LivingBase`](..\..\api\entity\living\LivingBase.md) | the vehicle /
    public Vehicle getVehicle() {
        return vehicle;
    }

    /**



---

### Public Methods for [`VehicleExit`](VehicleExit.md)

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
	

