## UnloadWorldEvent __class__

>io.wolfscript.event.system.UnloadWorldEvent
>Extends [`Hook`](../Hook.md)
``` javascript
this.on('system.UnloadWorldEvent', function (e) { });
```


---

### Class Overview

Called before a world is unloaded.<br> Before a world is unloaded, it will be saved! After a world is unloaded it will not be processed in the tick loop anymore. A world can not be unloaded if it still has players on it. For informational use - to give plugins a chance to null their references to that world, if they have any.

Method | Type   
--- | :--- 
 readonly property __World__ <br> _Get: Returns the world that is about to be unloaded_ | [`World`](../../api/world/World.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](../Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](../Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





---


### Public Properties for [`UnloadWorldEvent`](UnloadWorldEvent.md)

##### <a id='world'></a>public  readonly property __World__

_Get: Returns the world that is about to be unloaded_

Get | Description
--- | --- 
[`World`](../../api/world/World.md) | the world



---

### Public Methods for [`UnloadWorldEvent`](UnloadWorldEvent.md)

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
	

