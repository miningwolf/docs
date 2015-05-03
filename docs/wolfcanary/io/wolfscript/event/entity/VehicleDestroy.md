## VehicleDestroy __class__

>io.wolfscript.event.entity.VehicleDestroy
>Extends [`Hook`](..\..\hook\Hook.md)

---

### Class Overview

VehicleDestoryHook<br> Called when a Minecart or Boat is destroyed

Method | Type   
--- | :--- 
new __VehicleDestroy__(vehicle) <br> _VehicleDestroy constructor_ | _constructor_
 readonly property __Vehicle__ <br> _Get: The [`Vehicle`](..\..\api\entity\vehicle\Vehicle.md) being destoryed_ | [`Vehicle`](..\..\api\entity\vehicle\Vehicle.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](..\..\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](..\..\hook\Hook.md)





---

### Public Constructors for [`VehicleDestroy`](VehicleDestroy.md)

##### <a id='vehicledestroy'></a>new __VehicleDestroy__(vehicle) 

_VehicleDestroy constructor_

Argument | Type | Description  
--- | --- | --- 
vehicle | [`Vehicle`](..\..\api\entity\vehicle\Vehicle.md) | vehicle argument

---

### Public Properties for [`VehicleDestroy`](VehicleDestroy.md)

##### <a id='vehicle'></a>public  readonly property __Vehicle__

_Get: The [`Vehicle`](..\..\api\entity\vehicle\Vehicle.md) being destoryed_

Get | Description
--- | --- 
[`Vehicle`](..\..\api\entity\vehicle\Vehicle.md) | the [`Vehicle`](..\..\api\entity\vehicle\Vehicle.md)



---

### Public Methods for [`VehicleDestroy`](VehicleDestroy.md)

##### <a id='tostring'></a>public final function __toString__()

_toString method_

Returns | 
--- | 
`String` |


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


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

