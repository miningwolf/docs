## Configuration __class__

>io.wolfscript.config.Configuration

---

### Class Overview

A caching configuration provider. This class performs file lookup and caching. Use this class to get access to a configuration file.

Method | Type   
--- | :--- 
static readonly property __DbConfig__ <br> _Get: Gets the net configuration_ | [`DatabaseConfiguration`](DatabaseConfiguration.md)
static readonly property __ServerConfig__ <br> _Get: Gets the server configuration_ | [`ServerConfiguration`](ServerConfiguration.md)
static function __clearPluginCachedConfigs__(plugin) <br> _Clears the configuration files of a `Plugin` from the cache_ | `void`
static function __getPluginConfig__(plugin) <br> _Gets the server-wide configuration of a plugin_ | `PropertiesFile`
static function __getPluginConfig__(plugin, module) <br> _Gets the server-wide configuration of a `Plugin`_ | `PropertiesFile`
static function __getPluginConfig__(plugin, world) <br> _Gets the world-specific configuration of a `Plugin` If there is no world-specific configuration, it will take the server-wide_ | `PropertiesFile`
static function __getPluginConfig__(plugin, module, world) <br> _Gets the world-specific configuration of a `Plugin` If there is no world-specific configuration, it will take the server-wide_ | `PropertiesFile`
static function __getWorldConfig__(world) <br> _Get the world configuration for the specified world_ | [`WorldConfiguration`](WorldConfiguration.md)
static function __reload__() <br> _Reload all configuration from disk_ | `void`



---


### Public Properties for [`Configuration`](Configuration.md)

##### <a id='dbconfig'></a>public static readonly property __DbConfig__

_Get: Gets the net configuration_

Get | Description
--- | --- 
[`DatabaseConfiguration`](DatabaseConfiguration.md) | networking configuration file



##### <a id='serverconfig'></a>public static readonly property __ServerConfig__

_Get: Gets the server configuration_

Get | Description
--- | --- 
[`ServerConfiguration`](ServerConfiguration.md) | server configuration file



---

### Public Methods for [`Configuration`](Configuration.md)

##### <a id='clearplugincachedconfigs'></a>public static function __clearPluginCachedConfigs__(plugin)

_Clears the configuration files of a `Plugin` from the cache_

Argument | Type | Description  
--- | --- | --- 
plugin | `Plugin` | the `Plugin` to remove configuration for

Returns | 
--- | 
`void` |


##### <a id='getpluginconfig'></a>public static function __getPluginConfig__(plugin)

_Gets the server-wide configuration of a plugin_

Argument | Type | Description  
--- | --- | --- 
plugin | `Plugin` | the `Plugin` to get configuration for

Returns | Description
--- | --- 
`PropertiesFile` | configuration of a `Plugin`


##### <a id='getpluginconfig'></a>public static function __getPluginConfig__(plugin, module)

_Gets the server-wide configuration of a `Plugin`_

Argument | Type | Description  
--- | --- | --- 
plugin | `Plugin` | the `Plugin` to get configuration for
module | `String` | Used to create multiple configurations for a single `Plugin`.

Returns | Description
--- | --- 
`PropertiesFile` | configuration of a `Plugin`


##### <a id='getpluginconfig'></a>public static function __getPluginConfig__(plugin, world)

_Gets the world-specific configuration of a `Plugin` If there is no world-specific configuration, it will take the server-wide configuration_

Argument | Type | Description  
--- | --- | --- 
plugin | `Plugin` | the `Plugin` to get configuration for
world | [`World`](../api/world/World.md) | the world

Returns | Description
--- | --- 
`PropertiesFile` | configuration of a `Plugin`


##### <a id='getpluginconfig'></a>public static function __getPluginConfig__(plugin, module, world)

_Gets the world-specific configuration of a `Plugin` If there is no world-specific configuration, it will take the server-wide configuration_

Argument | Type | Description  
--- | --- | --- 
plugin | `Plugin` | the `Plugin`
module | `String` | Used to create multiple configurations for a single `Plugin`.
world | [`World`](../api/world/World.md) | the world

Returns | Description
--- | --- 
`PropertiesFile` | configuration of a `Plugin`


##### <a id='getworldconfig'></a>public static function __getWorldConfig__(world)

_Get the world configuration for the specified world_

Argument | Type | Description  
--- | --- | --- 
world | `String` | the getFqName of a world

Returns | Description
--- | --- 
[`WorldConfiguration`](WorldConfiguration.md) | world configuration


##### <a id='reload'></a>public static function __reload__()

_Reload all configuration from disk_

Returns | 
--- | 
`void` |


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

