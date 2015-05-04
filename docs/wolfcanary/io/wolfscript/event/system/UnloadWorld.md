## UnloadWorld __class__

>io.wolfscript.event.system.UnloadWorld
>Extends [`Hook`](../../hook/Hook.md)

this.on('system.UnloadWorld', function (e) { });

---

### Class Overview

Called before a world is unloaded.<br> Before a world is unloaded, it will be saved! After a world is unloaded it will not be processed in the tick loop anymore. A world can not be unloaded if it still has players on it. For informational use - to give plugins a chance to null their references to that world, if they have any.

Method | Type   
--- | :--- 
new __UnloadWorld__(world) <br> _UnloadWorld constructor_ | _constructor_
 readonly property __World__ <br> _Get: Returns the world that is about to be unloaded_ | [`World`](../../api/world/World.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](../../hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](../../hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





---

### Public Constructors for [`UnloadWorld`](UnloadWorld.md)

##### <a id='unloadworld'></a>new __UnloadWorld__(world) 

_UnloadWorld constructor_

Argument | Type | Description  
--- | --- | --- 
world | [`World`](../../api/world/World.md) | world argument

---

### Public Properties for [`UnloadWorld`](UnloadWorld.md)

##### <a id='world'></a>public  readonly property __World__

_Get: Returns the world that is about to be unloaded_

Get | Description
--- | --- 
[`World`](../../api/world/World.md) | the world



---

### Public Methods for [`UnloadWorld`](UnloadWorld.md)

##### <a id='tostring'></a>public final function __toString__()

_toString method_

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
	

