## DecorateEvent __class__

>io.wolfscript.event.world.DecorateEvent
>Extends [`CancelableHook`](../../hook/CancelableHook.md)
``` javascript
this.on('world.DecorateEvent', function (e) { });
```


---

### Class Overview

Called when decorating terrain with trees, glowstone etc.

Method | Type   
--- | :--- 
 readonly property __DecoratorType__ <br> _Get: Gets the `DecoratorType`_ | `DecoratorType`
 readonly property __World__ <br> _Get: Return the [`World`](../../api/world/World.md)_ | [`World`](../../api/world/World.md)
 readonly property __X__ <br> _Get: Gets the x coordinate_ | `int`
 readonly property __Z__ <br> _Get: Gets the z coordinate_ | `int`
 function __getFromName__(name) <br> _Return a `DecoratorType` from a string_ | `DecoratorType`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](../../hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](../../hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](../../hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](../../hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







---


### Public Properties for [`DecorateEvent`](DecorateEvent.md)

##### <a id='decoratortype'></a>public  readonly property __DecoratorType__

_Get: Gets the `DecoratorType`_

Get | Description
--- | --- 
`DecoratorType` | type



##### <a id='world'></a>public  readonly property __World__

_Get: Return the [`World`](../../api/world/World.md)_

Get | Description
--- | --- 
[`World`](../../api/world/World.md) | world



##### <a id='x'></a>public  readonly property __X__

_Get: Gets the x coordinate_

Get | Description
--- | --- 
`int` | x



##### <a id='z'></a>public  readonly property __Z__

_Get: Gets the z coordinate_

Get | Description
--- | --- 
`int` | z



---

### Public Methods for [`DecorateEvent`](DecorateEvent.md)

##### <a id='getfromname'></a>public  function __getFromName__(name)

_Return a `DecoratorType` from a string_

Argument | Type | Description  
--- | --- | --- 
name | `String` | name argument

Returns | Description
--- | --- 
`DecoratorType` | `DecoratorType#UNKNOWN` if of unknown type.


##### <a id='tostring'></a>public final function __toString__()

_toString method_

Returns | 
--- | 
`String` |


---

### Public Methods for [`CancelableHook`](../../hook/CancelableHook.md)

##### <a id='call'></a>public  function __call__()

_Calls a Hook if not already executed_

Returns | Description
--- | --- 
[`CancelableHook`](../../hook/CancelableHook.md) | this


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


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

