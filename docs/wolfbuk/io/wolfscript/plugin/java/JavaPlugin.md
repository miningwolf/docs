## JavaPlugin __class__

>io.wolfscript.plugin.java.JavaPlugin
>Extends [`PluginBase`](../PluginBase.md)

---

### Class Overview

Represents a Java plugin

Method | Type   
--- | :--- 
new __JavaPlugin__() <br> _JavaPlugin constructor_ | _constructor_
final readonly property __DataFolder__ <br> _Get: Returns the folder that the plugin data's files are located in. The_ | `File`
 readonly property __Config__ <br> _Config property_ | [`FileConfiguration`](../../configuration/file/FileConfiguration.md)
final readonly property __Server__ <br> _Get: Returns the Server instance currently running this plugin_ | [`Server`](../../Server.md)
final readonly property __Description__ <br> _Get: Returns the plugin.yaml file containing the details for this plugin_ | [`PluginDescriptionFile`](../PluginDescriptionFile.md)
 readonly property __Database__ <br> _Database property_ | `EbeanServer`
 readonly property __DatabaseClasses__ <br> _Get: Provides a list of all classes that should be persisted in the database_ | `List<Class<?>>`
static readonly property __ProvidingPlugin__ <br> _Get: This method provides fast access to the plugin that has provided the_ | [`JavaPlugin`](JavaPlugin.md)
final readonly property __Logger__ <br> _Logger property_ | `Logger`
final readonly property __PluginLoader__ <br> _Get: Gets the associated PluginLoader responsible for this plugin_ | [`PluginLoader`](../PluginLoader.md)
final writeonly property __Naggable__ <br> _Naggable property_ | `void`
 function __onCommand__(sender, command, label) <br> _{@inheritDoc}_ | `boolean`
 function __getCommand__(name) <br> _Gets the command with the given name, specific to this plugin. Commands_ | [`PluginCommand`](../../command/PluginCommand.md)
 function __getDefaultWorldGenerator__(worldName, id) <br> _getDefaultWorldGenerator method_ | [`ChunkGenerator`](../../generator/ChunkGenerator.md)
 function __onDisable__() <br> _onDisable method_ | `void`
 function __saveConfig__() <br> _saveConfig method_ | `void`
final function __isEnabled__() <br> _Returns a value indicating whether or not this plugin is currently_ | `boolean`
 function __getResource__(filename) <br> _getResource method_ | `InputStream`
final function __isNaggable__() <br> _isNaggable method_ | `boolean`
 function __onEnable__() <br> _onEnable method_ | `void`
 function __onLoad__() <br> _onLoad method_ | `void`
 function __onTabComplete__(sender, command, alias) <br> _{@inheritDoc}_ | `List<String>`
 function __reloadConfig__() <br> _reloadConfig method_ | `void`
 function __saveDefaultConfig__() <br> _saveDefaultConfig method_ | `void`
 function __saveResource__(resourcePath, replace) <br> _saveResource method_ | `void`
 function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`PluginBase`](../PluginBase.md)__ |
final readonly property __Name__ <br> _Name property_ | `String`
final function __equals__(obj) <br> _equals method_ | `boolean`
final function __hashCode__() <br> _hashCode method_ | `int`





---

### Public Constructors for [`JavaPlugin`](JavaPlugin.md)

##### <a id='javaplugin'></a>new __JavaPlugin__() 

_JavaPlugin constructor_


---

### Public Properties for [`JavaPlugin`](JavaPlugin.md)

##### <a id='datafolder'></a>public final readonly property __DataFolder__

_Get: Returns the folder that the plugin data's files are located in. The folder may not yet exist._

Get | Description
--- | --- 
`File` | The folder.



##### <a id='config'></a>public  readonly property __Config__

_Config property_

Get | 
--- | 
[`FileConfiguration`](../../configuration/file/FileConfiguration.md) |



##### <a id='server'></a>public final readonly property __Server__

_Get: Returns the Server instance currently running this plugin_

Get | Description
--- | --- 
[`Server`](../../Server.md) | Server running this plugin



##### <a id='description'></a>public final readonly property __Description__

_Get: Returns the plugin.yaml file containing the details for this plugin_

Get | Description
--- | --- 
[`PluginDescriptionFile`](../PluginDescriptionFile.md) | Contents of the plugin.yaml file



##### <a id='database'></a>public  readonly property __Database__

_Database property_

Get | 
--- | 
`EbeanServer` |



##### <a id='databaseclasses'></a>public  readonly property __DatabaseClasses__

_Get: Provides a list of all classes that should be persisted in the database_

Get | Description
--- | --- 
`List<Class<?>>` | List of Classes that are Ebeans



##### <a id='providingplugin'></a>public static readonly property __ProvidingPlugin__

_Get: This method provides fast access to the plugin that has provided the given class._

Get | Description
--- | --- 
[`JavaPlugin`](JavaPlugin.md) | the plugin that provided the class



##### <a id='logger'></a>public final readonly property __Logger__

_Logger property_

Get | 
--- | 
`Logger` |



##### <a id='pluginloader'></a>public final readonly property __PluginLoader__

_Get: Gets the associated PluginLoader responsible for this plugin_

Get | Description
--- | --- 
[`PluginLoader`](../PluginLoader.md) | PluginLoader that controls this plugin



##### <a id='naggable'></a>public final writeonly property __Naggable__

_Naggable property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
canNag | `boolean` | canNag argument


---

### Public Methods for [`JavaPlugin`](JavaPlugin.md)

##### <a id='oncommand'></a>public  function __onCommand__(sender, command, label)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
sender | [`CommandSender`](../../command/CommandSender.md) | sender argument
command | [`Command`](../../command/Command.md) | command argument
label | `String` | label argument

Returns | 
--- | 
`boolean` |


##### <a id='getcommand'></a>public  function __getCommand__(name)

_Gets the command with the given name, specific to this plugin. Commands need to be registered in the {@link PluginDescriptionFile#getCommands() PluginDescriptionFile} to exist at runtime._

Argument | Type | Description  
--- | --- | --- 
name | `String` | name or alias of the command

Returns | Description
--- | --- 
[`PluginCommand`](../../command/PluginCommand.md) | the plugin command if found, otherwise null


##### <a id='getdefaultworldgenerator'></a>public  function __getDefaultWorldGenerator__(worldName, id)

_getDefaultWorldGenerator method_

Argument | Type | Description  
--- | --- | --- 
worldName | `String` | worldName argument
id | `String` | id argument

Returns | 
--- | 
[`ChunkGenerator`](../../generator/ChunkGenerator.md) |


##### <a id='ondisable'></a>public  function __onDisable__()

_onDisable method_

Returns | 
--- | 
`void` |


##### <a id='saveconfig'></a>public  function __saveConfig__()

_saveConfig method_

Returns | 
--- | 
`void` |


##### <a id='isinitialized'></a>public final function __isInitialized__()
_Deprecated: This method cannot return false, as {@link io.wolfscript.plugin.java.JavaPlugin} is now initialized in the constructor._

_Gets the initialization status of this plugin_

Returns | Description
--- | --- 
`boolean` | true if this plugin is initialized, otherwise false


##### <a id='isenabled'></a>public final function __isEnabled__()

_Returns a value indicating whether or not this plugin is currently enabled_

Returns | Description
--- | --- 
`boolean` | true if this plugin is enabled, otherwise false


##### <a id='getresource'></a>public  function __getResource__(filename)

_getResource method_

Argument | Type | Description  
--- | --- | --- 
filename | `String` | filename argument

Returns | 
--- | 
`InputStream` |


##### <a id='isnaggable'></a>public final function __isNaggable__()

_isNaggable method_

Returns | 
--- | 
`boolean` |


##### <a id='onenable'></a>public  function __onEnable__()

_onEnable method_

Returns | 
--- | 
`void` |


##### <a id='onload'></a>public  function __onLoad__()

_onLoad method_

Returns | 
--- | 
`void` |


##### <a id='ontabcomplete'></a>public  function __onTabComplete__(sender, command, alias)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
sender | [`CommandSender`](../../command/CommandSender.md) | sender argument
command | [`Command`](../../command/Command.md) | command argument
alias | `String` | alias argument

Returns | 
--- | 
`List<String>` |


##### <a id='reloadconfig'></a>public  function __reloadConfig__()

_reloadConfig method_

Returns | 
--- | 
`void` |


##### <a id='savedefaultconfig'></a>public  function __saveDefaultConfig__()

_saveDefaultConfig method_

Returns | 
--- | 
`void` |


##### <a id='saveresource'></a>public  function __saveResource__(resourcePath, replace)

_saveResource method_

Argument | Type | Description  
--- | --- | --- 
resourcePath | `String` | resourcePath argument
replace | `boolean` | replace argument

Returns | 
--- | 
`void` |


##### <a id='tostring'></a>public  function __toString__()

_toString method_

Returns | 
--- | 
`String` |


---

### Public Properties for [`PluginBase`](../PluginBase.md)

##### <a id='name'></a>public final readonly property __Name__

_Name property_

Get | 
--- | 
`String` |



---

### Public Methods for [`PluginBase`](../PluginBase.md)

##### <a id='equals'></a>public final function __equals__(obj)

_equals method_

Argument | Type | Description  
--- | --- | --- 
obj | `Object` | obj argument

Returns | 
--- | 
`boolean` |


##### <a id='hashcode'></a>public final function __hashCode__()

_hashCode method_

Returns | 
--- | 
`int` |


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

