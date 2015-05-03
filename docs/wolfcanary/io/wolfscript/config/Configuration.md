## Configuration __class__

>io.wolfscript.config.Configuration

---

### Class Overview

A caching configuration provider. This class performs file lookup and caching. Use this class to get access to a configuration file.

Method | Type   
--- | :--- 
static function __clearPluginCachedConfigs__(plugin) <br> _Reload all configuration from disk_ | `void`



---


### Public Methods for [`Configuration`](Configuration.md)

##### <a id='clearplugincachedconfigs'></a>public static function __clearPluginCachedConfigs__(plugin)

_Reload all configuration from disk /
    public static void reload() {
        serverConfig.reload();
        dbConfig.reload();

        // Reload world configurations
        for (WorldConfiguration wc : worldConfigs.values()) {
            wc.reload();
        }

        // Clear the cache
        plugin_cfg_cache.clear();
    }

    private static PropertiesFile getPluginCachedConfig(Plugin plugin, String filepath) {
        if (!plugin_cfg_cache.containsKey(plugin)) {
            plugin_cfg_cache.put(plugin, new HashMap<String, PropertiesFile>());
        }
        if (!plugin_cfg_cache.get(plugin).containsKey(filepath)) {
            PropertiesFile file = new PropertiesFile(filepath);
            file.save();

            plugin_cfg_cache.get(plugin).put(filepath, file);
        }
        return plugin_cfg_cache.get(plugin).get(filepath);
    }

    /** Gets the server configuration_

Argument | Type | Description  
--- | --- | --- 
plugin | `Plugin` | the `Plugin` to get configuration for

Returns | Description
--- | --- 
`void` | server configuration file /
    public static ServerConfiguration getServerConfig() {
        return serverConfig;
    }

    /** Gets the net configuration


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

