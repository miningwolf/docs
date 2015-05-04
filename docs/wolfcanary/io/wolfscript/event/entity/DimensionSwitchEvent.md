## DimensionSwitchEvent __class__

>io.wolfscript.event.entity.DimensionSwitchEvent
>Extends [`CancelableHook`](../CancelableHook.md)
``` javascript
this.on('entity.DimensionSwitchEvent', function (e) { });
```


---

### Class Overview

Dimension switch event. Contains information about an entity changeing dimentions

Method | Type   
--- | :--- 
 readonly property __Entity__ <br> _Get: Get the entity involved here._ | [`Entity`](../../api/entity/Entity.md)
 readonly property __LocationFrom__ <br> _Get: Get the location the entity is warping to._ | [`Location`](../../api/world/position/Location.md)
 readonly property __LocationTo__ <br> _Get: Get the entities current location._ | [`Location`](../../api/world/position/Location.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](../CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](../CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](../Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](../Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







---


### Public Properties for [`DimensionSwitchEvent`](DimensionSwitchEvent.md)

##### <a id='entity'></a>public  readonly property __Entity__

_Get: Get the entity involved here._

Get | Description
--- | --- 
[`Entity`](../../api/entity/Entity.md) | The entity.



##### <a id='locationfrom'></a>public  readonly property __LocationFrom__

_Get: Get the location the entity is warping to._

Get | Description
--- | --- 
[`Location`](../../api/world/position/Location.md) | Location to.



##### <a id='locationto'></a>public  readonly property __LocationTo__

_Get: Get the entities current location._

Get | Description
--- | --- 
[`Location`](../../api/world/position/Location.md) | Current Location



---

### Public Methods for [`DimensionSwitchEvent`](DimensionSwitchEvent.md)

##### <a id='tostring'></a>public final function __toString__()

_toString method_

Returns | 
--- | 
`String` |


---

### Public Methods for [`CancelableHook`](../CancelableHook.md)

##### <a id='call'></a>public  function __call__()

_Calls a Hook if not already executed_

Returns | Description
--- | --- 
[`CancelableHook`](../CancelableHook.md) | this


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


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

