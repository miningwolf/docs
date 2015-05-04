## PluginLoader __interface__

>io.wolfscript.plugin.PluginLoader

---

### Interface Overview

Represents a plugin loader, which handles direct access to specific types of plugins

Method | Type   
--- | :--- 
 readonly property __PluginFileFilters__ <br> _Get: Returns a list of all filename filters expected by this PluginLoader_ | `Pattern[]`
 function __disablePlugin__(plugin) <br> _Disables the specified plugin_ | `void`
 function __enablePlugin__(plugin) <br> _Enables the specified plugin_ | `void`



---


### Public Properties for [`PluginLoader`](PluginLoader.md)

##### <a id='pluginfilefilters'></a>public  readonly property __PluginFileFilters__

_Get: Returns a list of all filename filters expected by this PluginLoader_

Get | Description
--- | --- 
`Pattern[]` | The filters



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

_Enables the specified plugin <p> Attempting to enable a plugin that is already enabled will have no effect_

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](Plugin.md) | Plugin to enable

Returns | 
--- | 
`void` |


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

