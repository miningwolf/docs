## VehicleDestroyEvent __class__

>io.wolfscript.event.entity.VehicleDestroyEvent
>Extends [`Hook`](../Hook.md)
``` javascript
this.on('entity.VehicleDestroyEvent', function (e) { });
```


---

### Class Overview

VehicleDestoryHook<br> Called when a Minecart or Boat is destroyed

Method | Type   
--- | :--- 
 readonly property __Vehicle__ <br> _Get: The [`Vehicle`](../../api/entity/vehicle/Vehicle.md) being destoryed_ | [`Vehicle`](../../api/entity/vehicle/Vehicle.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](../Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](../Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





---


### Public Properties for [`VehicleDestroyEvent`](VehicleDestroyEvent.md)

##### <a id='vehicle'></a>public  readonly property __Vehicle__

_Get: The [`Vehicle`](../../api/entity/vehicle/Vehicle.md) being destoryed_

Get | Description
--- | --- 
[`Vehicle`](../../api/entity/vehicle/Vehicle.md) | the [`Vehicle`](../../api/entity/vehicle/Vehicle.md)



---

### Public Methods for [`VehicleDestroyEvent`](VehicleDestroyEvent.md)

##### <a id='tostring'></a>public final function __toString__()

_toString method_

Returns | 
--- | 
`String` |


---

### Public Properties for [`Hook`](../Hook.md)

##### <a id='hookname'></a>public final readonly property __HookName__

_Get: Get the name of this hook._

Get | Description
--- | --- 
`String` | simple class name



---

### Public Methods for [`Hook`](../Hook.md)

##### <a id='call'></a>public  function __call__()

_Calls a Hook if not already executed_

Returns | Description
--- | --- 
[`Hook`](../Hook.md) | this


##### <a id='hashcode'></a>public  function __hashCode__()

_hashCode method_

Returns | 
--- | 
`int` |


---


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

