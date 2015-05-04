## WeatherChange __class__

>io.wolfscript.event.world.WeatherChange
>Extends [`CancelableHook`](../../hook/CancelableHook.md)

this.on('world.WeatherChange', function (e) { });

---

### Class Overview

WeatherChange Hook

Method | Type   
--- | :--- 
new __WeatherChange__(world, on, thunder) <br> _Constructs a new WeatherChange_ | _constructor_
 readonly property __World__ <br> _Get: Gets the [`World`](../../api/world/World.md) of the change_ | [`World`](../../api/world/World.md)
 function __isThunderChange__() <br> _Checks if it's a thunder change or rain change_ | `boolean`
final function __toString__() <br> _toString method_ | `String`
 function __turningOn__() <br> _Checks if weather is turning on or off_ | `boolean`
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

### Public Constructors for [`WeatherChange`](WeatherChange.md)

##### <a id='weatherchange'></a>new __WeatherChange__(world, on, thunder) 

_Constructs a new WeatherChange_

Argument | Type | Description  
--- | --- | --- 
world | [`World`](../../api/world/World.md) | the World where weather is changing
on | `boolean` | whether weather is turning on or off
thunder | `boolean` | whether or not thunder is changing

---

### Public Properties for [`WeatherChange`](WeatherChange.md)

##### <a id='world'></a>public  readonly property __World__

_Get: Gets the [`World`](../../api/world/World.md) of the change_

Get | Description
--- | --- 
[`World`](../../api/world/World.md) | the [`World`](../../api/world/World.md) the weather is changing



---

### Public Methods for [`WeatherChange`](WeatherChange.md)

##### <a id='isthunderchange'></a>public  function __isThunderChange__()

_Checks if it's a thunder change or rain change_

Returns | Description
--- | --- 
`boolean` | `true` if thunder is changing; `false` if rain is changing


##### <a id='tostring'></a>public final function __toString__()

_toString method_

Returns | 
--- | 
`String` |


##### <a id='turningon'></a>public  function __turningOn__()

_Checks if weather is turning on or off_

Returns | Description
--- | --- 
`boolean` | `true` if turning on; `false` if turning off


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
	

