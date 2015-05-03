## RegisteredPluginListener __class__

>io.wolfscript.plugin.RegisteredPluginListener

---

### Class Overview

Container for registered plugin listeners

Method | Type   
--- | :--- 
new __RegisteredPluginListener__(l, plugin, executor, priority) <br> _RegisteredPluginListener constructor_ | _constructor_
 readonly property __Listener__ <br> _Listener property_ | [`PluginListener`](PluginListener.md)
 readonly property __MethodPriority__ <br> _MethodPriority property_ | [`Priority`](Priority.md)
 readonly property __Plugin__ <br> _Plugin property_ | `Plugin`
 readonly property __PluginPriority__ <br> _PluginPriority property_ | `int`
 function __execute__(hook) <br> _Execute the event on the listener registered_ | `void`



---

### Public Constructors for [`RegisteredPluginListener`](RegisteredPluginListener.md)

##### <a id='registeredpluginlistener'></a>new __RegisteredPluginListener__(l, plugin, executor, priority) 

_RegisteredPluginListener constructor_

Argument | Type | Description  
--- | --- | --- 
l | [`PluginListener`](PluginListener.md) | l argument
plugin | `Plugin` | plugin argument
executor | [`Dispatcher`](..\hook\Dispatcher.md) | executor argument
priority | [`Priority`](Priority.md) | priority argument

---

### Public Properties for [`RegisteredPluginListener`](RegisteredPluginListener.md)

##### <a id='listener'></a>public  readonly property __Listener__

_Listener property_

Get | 
--- | 
[`PluginListener`](PluginListener.md) |



##### <a id='methodpriority'></a>public  readonly property __MethodPriority__

_MethodPriority property_

Get | 
--- | 
[`Priority`](Priority.md) |



##### <a id='plugin'></a>public  readonly property __Plugin__

_Plugin property_

Get | 
--- | 
`Plugin` |



##### <a id='pluginpriority'></a>public  readonly property __PluginPriority__

_PluginPriority property_

Get | 
--- | 
`int` |



---

### Public Methods for [`RegisteredPluginListener`](RegisteredPluginListener.md)

##### <a id='execute'></a>public  function __execute__(hook)

_Execute the event on the listener registered_

Argument | Type | Description  
--- | --- | --- 
hook | [`Hook`](..\hook\Hook.md) | hook argument

Returns | 
--- | 
`void` |


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

