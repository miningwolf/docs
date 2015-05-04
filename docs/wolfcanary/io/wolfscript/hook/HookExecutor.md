## HookExecutor __class__

>io.wolfscript.hook.HookExecutor
>Implements [`HookExecutorInterface`](HookExecutorInterface.md)

---

### Class Overview

Stores registered listeners and performs hook dispatches.

Method | Type   
--- | :--- 
 function __callHook__(hook) <br> _Call a system hook_ | `void`
 function __compare__(o1, o2) <br> _compare method_ | `int`
 function __registerHook__(listener, plugin, dispatcher, priority) <br> _A more flexible hook interface used internally. Adds flexibility required for Scala hook registration._ | `void`
 function __registerListener__(listener, plugin) <br> _Register a [`PluginListener`](../plugin/PluginListener.md) for a system hook_ | `void`
 function __unregisterPluginListener__(listener) <br> _unregisterPluginListener method_ | `void`
 function __unregisterPluginListeners__(plugin) <br> _Unregisters all listeners for specified plugin_ | `void`



---


### Public Methods for [`HookExecutor`](HookExecutor.md)

##### <a id='callhook'></a>public  function __callHook__(hook)

_Call a system hook_

Argument | Type | Description  
--- | --- | --- 
hook | [`Hook`](Hook.md) | hook argument

Returns | 
--- | 
`void` |


##### <a id='compare'></a>public  function __compare__(o1, o2)

_compare method_

Argument | Type | Description  
--- | --- | --- 
o1 | [`RegisteredPluginListener`](../plugin/RegisteredPluginListener.md) | o1 argument
o2 | [`RegisteredPluginListener`](../plugin/RegisteredPluginListener.md) | o2 argument

Returns | 
--- | 
`int` |


##### <a id='registerhook'></a>public  function __registerHook__(listener, plugin, dispatcher, priority)

_A more flexible hook interface used internally. Adds flexibility required for Scala hook registration._

Argument | Type | Description  
--- | --- | --- 
listener | [`PluginListener`](../plugin/PluginListener.md) | listener argument
plugin | `Plugin` | plugin argument
dispatcher | [`Dispatcher`](Dispatcher.md) | dispatcher argument
priority | [`Priority`](../plugin/Priority.md) | priority argument

Returns | 
--- | 
`void` |


##### <a id='registerlistener'></a>public  function __registerListener__(listener, plugin)

_Register a [`PluginListener`](../plugin/PluginListener.md) for a system hook_

Argument | Type | Description  
--- | --- | --- 
listener | [`PluginListener`](../plugin/PluginListener.md) | listener argument
plugin | `Plugin` | plugin argument

Returns | 
--- | 
`void` |


##### <a id='unregisterpluginlistener'></a>public  function __unregisterPluginListener__(listener)

_unregisterPluginListener method_

Argument | Type | Description  
--- | --- | --- 
listener | [`PluginListener`](../plugin/PluginListener.md) | listener argument

Returns | 
--- | 
`void` |


##### <a id='unregisterpluginlisteners'></a>public  function __unregisterPluginListeners__(plugin)

_Unregisters all listeners for specified plugin_

Argument | Type | Description  
--- | --- | --- 
plugin | `Plugin` | the `Plugin` instance

Returns | 
--- | 
`void` |


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

