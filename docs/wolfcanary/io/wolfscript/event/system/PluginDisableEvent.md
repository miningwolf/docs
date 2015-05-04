## PluginDisableEvent __class__

>io.wolfscript.event.system.PluginDisableEvent
>Extends [`Hook`](../../hook/Hook.md)
``` javascript
this.on('system.PluginDisableEvent', function (e) { });
```


---

### Class Overview

Called when a plugin is disabled

Method | Type   
--- | :--- 
 readonly property __Plugin__ <br> _Get: Retrieve the plugin that is disabled_ | `Plugin`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](../../hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](../../hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





---


### Public Properties for [`PluginDisableEvent`](PluginDisableEvent.md)

##### <a id='plugin'></a>public  readonly property __Plugin__

_Get: Retrieve the plugin that is disabled_

Get | Description
--- | --- 
`Plugin` | The plugin that is disabled



---

### Public Methods for [`PluginDisableEvent`](PluginDisableEvent.md)

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
	

