## Plugin __interface__

>io.wolfscript.plugin.Plugin
>Extends `TabExecutor`

---

### Interface Overview

Represents a Plugin <p> The use of [`PluginBase`](PluginBase.md) is recommended for actual Implementation

Method | Type   
--- | :--- 
 readonly property __DataFolder__ <br> _Get: Returns the folder that the plugin data's files are located in. The_ | `File`
 readonly property __Config__ <br> _Get: Gets a [`FileConfiguration`](../configuration/file/FileConfiguration.md) for this plugin, read through_ | [`FileConfiguration`](../configuration/file/FileConfiguration.md)
 readonly property __Name__ <br> _Get: Returns the name of the plugin._ | `String`
 readonly property __Logger__ <br> _Get: Returns the plugin logger associated with this server's logger. The_ | `Logger`
 readonly property __Database__ <br> _Database property_ | `EbeanServer`
 readonly property __Description__ <br> _Get: Returns the plugin.yaml file containing the details for this plugin_ | [`PluginDescriptionFile`](PluginDescriptionFile.md)
 readonly property __PluginLoader__ <br> _Get: Gets the associated PluginLoader responsible for this plugin_ | [`PluginLoader`](PluginLoader.md)
 readonly property __Server__ <br> _Get: Returns the Server instance currently running this plugin_ | [`Server`](../Server.md)
 writeonly property __Naggable__ <br> _Set: Set naggable state_ | `void`
 function __isEnabled__() <br> _Returns a value indicating whether or not this plugin is currently_ | `boolean`
 function __onDisable__() <br> _Called when this plugin is disabled_ | `void`
 function __getDefaultWorldGenerator__(worldName, id) <br> _Gets a [`ChunkGenerator`](../generator/ChunkGenerator.md) for use in a default world, as specified_ | [`ChunkGenerator`](../generator/ChunkGenerator.md)
 function __isNaggable__() <br> _Simple boolean if we can still nag to the logs about things_ | `boolean`
 function __getResource__(filename) <br> _Gets an embedded resource in this plugin_ | `InputStream`
 function __onEnable__() <br> _Called when this plugin is enabled_ | `void`
 function __onLoad__() <br> _Called after a plugin is loaded but before it has been enabled._ | `void`
 function __reloadConfig__() <br> _Discards any data in `#getConfig()` and reloads from disk._ | `void`
 function __saveConfig__() <br> _Saves the [`FileConfiguration`](../configuration/file/FileConfiguration.md) retrievable by `#getConfig()`._ | `void`
 function __saveDefaultConfig__() <br> _Saves the raw contents of the default config.yml file to the location_ | `void`
 function __saveResource__(resourcePath, replace) <br> _Saves the raw contents of any resource embedded with a plugin's .jar_ | `void`



---


### Public Properties for [`Plugin`](Plugin.md)

##### <a id='datafolder'></a>public  readonly property __DataFolder__

_Get: Returns the folder that the plugin data's files are located in. The folder may not yet exist._

Get | Description
--- | --- 
`File` | The folder



##### <a id='config'></a>public  readonly property __Config__

_Get: Gets a [`FileConfiguration`](../configuration/file/FileConfiguration.md) for this plugin, read through "config.yml" <p> If there is a default config.yml embedded in this plugin, it will be provided as a default for this Configuration._

Get | Description
--- | --- 
[`FileConfiguration`](../configuration/file/FileConfiguration.md) | Plugin configuration



##### <a id='name'></a>public  readonly property __Name__

_Get: Returns the name of the plugin. <p> This should return the bare name of the plugin and should be used for comparison._

Get | Description
--- | --- 
`String` | name of the plugin



##### <a id='logger'></a>public  readonly property __Logger__

_Get: Returns the plugin logger associated with this server's logger. The returned logger automatically tags all log messages with the plugin's name._

Get | Description
--- | --- 
`Logger` | Logger associated with this plugin



##### <a id='database'></a>public  readonly property __Database__

_Database property_

Get | 
--- | 
`EbeanServer` |



##### <a id='description'></a>public  readonly property __Description__

_Get: Returns the plugin.yaml file containing the details for this plugin_

Get | Description
--- | --- 
[`PluginDescriptionFile`](PluginDescriptionFile.md) | Contents of the plugin.yaml file



##### <a id='pluginloader'></a>public  readonly property __PluginLoader__

_Get: Gets the associated PluginLoader responsible for this plugin_

Get | Description
--- | --- 
[`PluginLoader`](PluginLoader.md) | PluginLoader that controls this plugin



##### <a id='server'></a>public  readonly property __Server__

_Get: Returns the Server instance currently running this plugin_

Get | Description
--- | --- 
[`Server`](../Server.md) | Server running this plugin



##### <a id='naggable'></a>public  writeonly property __Naggable__

_Set: Set naggable state_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
canNag | `boolean` | is this plugin still naggable?


---

### Public Methods for [`Plugin`](Plugin.md)

##### <a id='isenabled'></a>public  function __isEnabled__()

_Returns a value indicating whether or not this plugin is currently enabled_

Returns | Description
--- | --- 
`boolean` | true if this plugin is enabled, otherwise false


##### <a id='ondisable'></a>public  function __onDisable__()

_Called when this plugin is disabled_

Returns | 
--- | 
`void` |


##### <a id='getdefaultworldgenerator'></a>public  function __getDefaultWorldGenerator__(worldName, id)

_Gets a [`ChunkGenerator`](../generator/ChunkGenerator.md) for use in a default world, as specified in the server configuration_

Argument | Type | Description  
--- | --- | --- 
worldName | `String` | Name of the world that this will be applied to
id | `String` | Unique ID, if any, that was specified to indicate which generator was requested

Returns | Description
--- | --- 
[`ChunkGenerator`](../generator/ChunkGenerator.md) | ChunkGenerator for use in the default world generation


##### <a id='isnaggable'></a>public  function __isNaggable__()

_Simple boolean if we can still nag to the logs about things_

Returns | Description
--- | --- 
`boolean` | boolean whether we can nag


##### <a id='getresource'></a>public  function __getResource__(filename)

_Gets an embedded resource in this plugin_

Argument | Type | Description  
--- | --- | --- 
filename | `String` | Filename of the resource

Returns | Description
--- | --- 
`InputStream` | File if found, otherwise null


##### <a id='onenable'></a>public  function __onEnable__()

_Called when this plugin is enabled_

Returns | 
--- | 
`void` |


##### <a id='onload'></a>public  function __onLoad__()

_Called after a plugin is loaded but before it has been enabled. <p> When mulitple plugins are loaded, the onLoad() for all plugins is called before any onEnable() is called._

Returns | 
--- | 
`void` |


##### <a id='reloadconfig'></a>public  function __reloadConfig__()

_Discards any data in `#getConfig()` and reloads from disk._

Returns | 
--- | 
`void` |


##### <a id='saveconfig'></a>public  function __saveConfig__()

_Saves the [`FileConfiguration`](../configuration/file/FileConfiguration.md) retrievable by `#getConfig()`._

Returns | 
--- | 
`void` |


##### <a id='savedefaultconfig'></a>public  function __saveDefaultConfig__()

_Saves the raw contents of the default config.yml file to the location retrievable by `#getConfig()`. If there is no default config.yml embedded in the plugin, an empty config.yml file is saved. This should fail silently if the config.yml already exists._

Returns | 
--- | 
`void` |


##### <a id='saveresource'></a>public  function __saveResource__(resourcePath, replace)

_Saves the raw contents of any resource embedded with a plugin's .jar file assuming it can be found using `#getResource(String)`. <p> The resource is saved into the plugin's data folder using the same hierarchy as the .jar file (subdirectories are preserved)._

Argument | Type | Description  
--- | --- | --- 
resourcePath | `String` | the embedded resource path to look for within the plugin's .jar file. (No preceding slash).
replace | `boolean` | if true, the embedded resource will overwrite the contents of an existing file.

Returns | 
--- | 
`void` |


---
---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

