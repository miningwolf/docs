## LoadWorldEvent __class__

>io.wolfscript.event.system.LoadWorld
>Extends [`Hook`](../../hook/Hook.md)
``` javascript
this.on('system.LoadWorld', function (e) { });
```


---

### Class Overview

class LoadWorldEvent

Method | Type   
--- | :--- 
 readonly property __World__ <br> _Get: Gets the [`World`](../../api/world/World.md) that has loaded_ | [`World`](../../api/world/World.md)
 function __toString__() <br> _{@inheritDoc}_ | `String`
 |
__Inherited items from [`Hook`](../../hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](../../hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





---


### Public Properties for [`LoadWorld`](LoadWorld.md)

##### <a id='world'></a>public  readonly property __World__

_Get: Gets the [`World`](../../api/world/World.md) that has loaded_

Get | Description
--- | --- 
[`World`](../../api/world/World.md) | the [`World`](../../api/world/World.md) that loaded



---

### Public Methods for [`LoadWorld`](LoadWorld.md)

##### <a id='tostring'></a>public  function __toString__()

_{@inheritDoc}_

Returns | 
--- | 
`String` |


---

### Public Properties for [`Hook`](../../hook/Hook.md)

##### <a id='hookname'></a>public final readonly property __HookName__

_Get: Get the name of this hook._

Get | Description
--- | --- 
`String` | simple class name



---

### Public Methods for [`Hook`](../../hook/Hook.md)

##### <a id='call'></a>public  function __call__()

_Calls a Hook if not already executed_

Returns | Description
--- | --- 
[`Hook`](../../hook/Hook.md) | this


##### <a id='hashcode'></a>public  function __hashCode__()

_hashCode method_

Returns | 
--- | 
`int` |


---


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

