## PluginLoader __interface__

>io.wolfscript.plugin.PluginLoader

---

### Interface Overview

Represents a plugin loader, which handles direct access to specific types of plugins

Method | Type   
--- | :--- 
 readonly property __PluginFileFilters__ <br> _Get: Loads the plugin contained in the specified file_ | `Pattern[]`
 function __disablePlugin__(plugin) <br> _Disables the specified plugin_ | `void`
 function __enablePlugin__(plugin) <br> _Creates and returns registered listeners for the event classes used in_ | `void`



---


### Public Properties for [`PluginLoader`](PluginLoader.md)

##### <a id='pluginfilefilters'></a>public  readonly property __PluginFileFilters__

_Get: Loads the plugin contained in the specified file_

Get | Description
--- | --- 
`Pattern[]` | Plugin that was contained in the specified file, or null if unsuccessful



---

### Public Methods for [`PluginLoader`](PluginLoader.md)

##### <a id='disableplugin'></a>public  function __disablePlugin__(plugin)

_Disables the specified plugin <p> Attempting to disable a plugin that is not enabled will have no effect_

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](Plugin.md) | Plugin to disable

Returns | 
--- | 
`void` |


##### <a id='enableplugin'></a>public  function __enablePlugin__(plugin)

_Creates and returns registered listeners for the event classes used in this listener_

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](Plugin.md) | The plugin to use when creating registered listeners

Returns | Description
--- | --- 
`void` | The registered listeners. /
    public Map<Class<? extends Event>, Set<RegisteredListener>> createRegisteredListeners(Listener listener, Plugin plugin);

    /** Enables the specified plugin <p> Attempting to enable a plugin that is already enabled will have no effect


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

