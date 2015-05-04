## Wolf __class__

>io.wolfscript.Wolf
>Implements [`TaskOwner`](tasks/TaskOwner.md)

---

### Class Overview

The interface to the brains of the bird! AKA Utils

Method | Type   
--- | :--- 
static readonly property __WorkingPath__ <br> _Get: Gets the Working Directory path as a string_ | `String`
static readonly property __WorkingDirectory__ <br> _Get: Attempts to get a Canonical File of the working directory with fall back to absolute_ | `File`
static readonly property __WolfJarPath__ <br> _Get: Gets the file path for the Wolf jar file_ | `String`
static readonly property __BuildNumber__ <br> _BuildNumber property_ | `long`
static readonly property __ImplementationTitle__ <br> _Get: Gets the Implementation Title_ | `String`
static readonly property __ImplementationVersion__ <br> _Get: Gets the Implementation Version_ | `String`
static readonly property __SpecificationTitle__ <br> _Get: Gets the Specification Title_ | `String`
static readonly property __SpecificationVersion__ <br> _Get: Sets the Specification Version_ | `String`
static  property __Server__ <br> _Get: Get the Server for managing server related stuff<br>Set: Set the server instance for this Wolf_ | `Server`
static writeonly property __Wolf__ <br> _Set: Set the wolf instance_ | `void`
static function __playerSelector__() <br> _Gets the [`PlayerSelector`](commandsys/PlayerSelector.md)_ | [`PlayerSelector`](commandsys/PlayerSelector.md)
static function __bans__() <br> _Get the ban System to manage bans_ | [`BanManager`](bansystem/BanManager.md)
static function __addSerializer__() <br> _Add a serializer to the system_ | `void`
static function __instance__() <br> _Get the wolf instance_ | [`Wolf`](Wolf.md)
static function __jsonNBT__() <br> _Retrieves the JsonNBT Utility_ | [`JsonNBTUtility`](util/JsonNBTUtility.md)
static function __hooks__() <br> _Get the Hook executor to fire hooks_ | [`HookExecutor`](event/HookExecutor.md)
static function __db__() <br> _Get the database interface for managing system data and custom plugin data_ | [`Database`](database/Database.md)
static function __help__() <br> _Get the help manager, used to register and unregister help commands, and creating help visualizations_ | [`HelpManager`](help/HelpManager.md)
static function __commands__() <br> _Get the command manager, used to register and unregister commands._ | [`CommandManager`](commandsys/CommandManager.md)
static function __factory__() <br> _Gets the [`Factory`](api/factory/Factory.md) manager_ | [`Factory`](api/factory/Factory.md)
static function __channels__() <br> _Gets the [`ChannelManager`](channels/ChannelManager.md)_ | [`ChannelManager`](channels/ChannelManager.md)
static function __enableEarlyPlugins__() <br> _Enables all early plugins._ | `void`
static function __enableLatePlugins__() <br> _Enables all late plugins._ | `void`
static function __scoreboards__() <br> _Gets the [`ScoreboardManager`](api/scoreboard/ScoreboardManager.md)_ | [`ScoreboardManager`](api/scoreboard/ScoreboardManager.md)
static function __kits__() <br> _Get the Kit Provider to manage kits_ | [`KitProvider`](kit/KitProvider.md)
static function __permissionManager__() <br> _Get the permission loader._ | [`PermissionManager`](permissionsystem/PermissionManager.md)
 function __reload__() <br> _Reload all subsystems and the whole of wolf._ | `void`
static function __ops__() <br> _Get the operators provider for managing the ops_ | [`OperatorsProvider`](user/OperatorsProvider.md)
static function __motd__() <br> _motd method_ | [`MessageOfTheDay`](motd/MessageOfTheDay.md)
static function __reservelist__() <br> _Get the reservelist provider for managing the reservelist_ | [`ReservelistProvider`](user/ReservelistProvider.md)
static function __pluginManager__() <br> _pluginManager method_ | [`PluginManager`](plugin/PluginManager.md)
static function __usersAndGroups__() <br> _Get the Groups provider to manage groups_ | [`UserAndGroupsProvider`](user/UserAndGroupsProvider.md)
static function __warps__() <br> _Get the Warps provider to manage warps and homes_ | [`WarpProvider`](warp/WarpProvider.md)
static function __whitelist__() <br> _Get the whitelist provider for managing the whitelist_ | [`WhitelistProvider`](user/WhitelistProvider.md)
final static var __log__ <br> _log field_ | [`Logman`](logger/Logman.md)



---


### Public Properties for [`Wolf`](Wolf.md)

##### <a id='workingpath'></a>public static readonly property __WorkingPath__

_Get: Gets the Working Directory path as a string_

Get | Description
--- | --- 
`String` | working directory path



##### <a id='workingdirectory'></a>public static readonly property __WorkingDirectory__

_Get: Attempts to get a Canonical File of the working directory with fall back to absolute_

Get | Description
--- | --- 
`File` | the working directory file



##### <a id='wolfjarpath'></a>public static readonly property __WolfJarPath__

_Get: Gets the file path for the Wolf jar file_

Get | Description
--- | --- 
`String` | the Wolf Jar file path



##### <a id='buildnumber'></a>public static readonly property __BuildNumber__

_BuildNumber property_

Get | 
--- | 
`long` |



##### <a id='implementationtitle'></a>public static readonly property __ImplementationTitle__

_Get: Gets the Implementation Title_

Get | Description
--- | --- 
`String` | implementation title



##### <a id='implementationversion'></a>public static readonly property __ImplementationVersion__

_Get: Gets the Implementation Version_

Get | Description
--- | --- 
`String` | implementation version



##### <a id='specificationtitle'></a>public static readonly property __SpecificationTitle__

_Get: Gets the Specification Title_

Get | Description
--- | --- 
`String` | specification title



##### <a id='specificationversion'></a>public static readonly property __SpecificationVersion__

_Get: Sets the Specification Version_

Get | Description
--- | --- 
`String` | specification version



##### <a id='server'></a>public static  property __Server__

_Get: Get the Server for managing server related stuff<br>Set: Set the server instance for this Wolf_

Get | Description
--- | --- 
`Server` | `Server`

Set | Type | Description  
--- | --- | --- 
server | `Server` | the `Server` instance


##### <a id='wolf'></a>public static writeonly property __Wolf__

_Set: Set the wolf instance_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
wolf | [`Wolf`](Wolf.md) | the [`Wolf`](Wolf.md) instance


---

### Public Methods for [`Wolf`](Wolf.md)

##### <a id='playerselector'></a>public static function __playerSelector__()

_Gets the [`PlayerSelector`](commandsys/PlayerSelector.md)_

Returns | Description
--- | --- 
[`PlayerSelector`](commandsys/PlayerSelector.md) | [`PlayerSelector`](commandsys/PlayerSelector.md)


##### <a id='bans'></a>public static function __bans__()

_Get the ban System to manage bans_

Returns | Description
--- | --- 
[`BanManager`](bansystem/BanManager.md) | [`BanManager`](bansystem/BanManager.md)


##### <a id='addserializer'></a>public static function __addSerializer__()

_Add a serializer to the system_

Returns | 
--- | 
`void` |


##### <a id='instance'></a>public static function __instance__()

_Get the wolf instance_

Returns | Description
--- | --- 
[`Wolf`](Wolf.md) | [`Wolf`](Wolf.md)


##### <a id='jsonnbt'></a>public static function __jsonNBT__()

_Retrieves the JsonNBT Utility_

Returns | Description
--- | --- 
[`JsonNBTUtility`](util/JsonNBTUtility.md) | JsonNBTUtility


##### <a id='hooks'></a>public static function __hooks__()

_Get the Hook executor to fire hooks_

Returns | Description
--- | --- 
[`HookExecutor`](event/HookExecutor.md) | [`HookExecutor`](event/HookExecutor.md)


##### <a id='db'></a>public static function __db__()

_Get the database interface for managing system data and custom plugin data_

Returns | Description
--- | --- 
[`Database`](database/Database.md) | [`Database`](database/Database.md)


##### <a id='help'></a>public static function __help__()

_Get the help manager, used to register and unregister help commands, and creating help visualizations_

Returns | Description
--- | --- 
[`HelpManager`](help/HelpManager.md) | [`HelpManager`](help/HelpManager.md)


##### <a id='commands'></a>public static function __commands__()

_Get the command manager, used to register and unregister commands._

Returns | Description
--- | --- 
[`CommandManager`](commandsys/CommandManager.md) | The current [`CommandManager`](commandsys/CommandManager.md) instance.


##### <a id='factory'></a>public static function __factory__()

_Gets the [`Factory`](api/factory/Factory.md) manager_

Returns | Description
--- | --- 
[`Factory`](api/factory/Factory.md) | [`Factory`](api/factory/Factory.md)


##### <a id='channels'></a>public static function __channels__()

_Gets the [`ChannelManager`](channels/ChannelManager.md)_

Returns | Description
--- | --- 
[`ChannelManager`](channels/ChannelManager.md) | [`ChannelManager`](channels/ChannelManager.md)


##### <a id='enableearlyplugins'></a>public static function __enableEarlyPlugins__()

_Enables all early plugins. That means: All plugins that don't require sub systems to be functioning, such as warps._

Returns | 
--- | 
`void` |


##### <a id='enablelateplugins'></a>public static function __enableLatePlugins__()

_Enables all late plugins. That means: All plugins that require sub systems to be functioning, such as warps._

Returns | 
--- | 
`void` |


##### <a id='scoreboards'></a>public static function __scoreboards__()

_Gets the [`ScoreboardManager`](api/scoreboard/ScoreboardManager.md)_

Returns | Description
--- | --- 
[`ScoreboardManager`](api/scoreboard/ScoreboardManager.md) | [`ScoreboardManager`](api/scoreboard/ScoreboardManager.md)


##### <a id='kits'></a>public static function __kits__()

_Get the Kit Provider to manage kits_

Returns | Description
--- | --- 
[`KitProvider`](kit/KitProvider.md) | [`KitProvider`](kit/KitProvider.md)


##### <a id='permissionmanager'></a>public static function __permissionManager__()

_Get the permission loader. Note: As plugin author will rarely need to use this. Use the PermissionProviders with Groups and players instead!_

Returns | Description
--- | --- 
[`PermissionManager`](permissionsystem/PermissionManager.md) | [`PermissionManager`](permissionsystem/PermissionManager.md)


##### <a id='reload'></a>public  function __reload__()

_Reload all subsystems and the whole of wolf. Don't over-use this method, it slows down the server. It is used by the reload command and should not be used by anything else!_

Returns | 
--- | 
`void` |


##### <a id='ops'></a>public static function __ops__()

_Get the operators provider for managing the ops_

Returns | Description
--- | --- 
[`OperatorsProvider`](user/OperatorsProvider.md) | [`OperatorsProvider`](user/OperatorsProvider.md)


##### <a id='motd'></a>public static function __motd__()

_motd method_

Returns | 
--- | 
[`MessageOfTheDay`](motd/MessageOfTheDay.md) |


##### <a id='reservelist'></a>public static function __reservelist__()

_Get the reservelist provider for managing the reservelist_

Returns | Description
--- | --- 
[`ReservelistProvider`](user/ReservelistProvider.md) | [`ReservelistProvider`](user/ReservelistProvider.md)


##### <a id='manager'></a>public static function __manager__()
_Deprecated: use pluginManager() instead_

_Get the Plugin Manager to load, enable or disable plugins and manage plugin dependencies_

Returns | Description
--- | --- 
[`PluginManager`](plugin/PluginManager.md) | [`DefaultPluginManager`](plugin/DefaultPluginManager.md)


##### <a id='pluginmanager'></a>public static function __pluginManager__()

_pluginManager method_

Returns | 
--- | 
[`PluginManager`](plugin/PluginManager.md) |


##### <a id='usersandgroups'></a>public static function __usersAndGroups__()

_Get the Groups provider to manage groups_

Returns | Description
--- | --- 
[`UserAndGroupsProvider`](user/UserAndGroupsProvider.md) | [`UserAndGroupsProvider`](user/UserAndGroupsProvider.md)


##### <a id='warps'></a>public static function __warps__()

_Get the Warps provider to manage warps and homes_

Returns | Description
--- | --- 
[`WarpProvider`](warp/WarpProvider.md) | [`WarpProvider`](warp/WarpProvider.md)


##### <a id='whitelist'></a>public static function __whitelist__()

_Get the whitelist provider for managing the whitelist_

Returns | Description
--- | --- 
[`WhitelistProvider`](user/WhitelistProvider.md) | [`WhitelistProvider`](user/WhitelistProvider.md)


---

### Public Fields for [`Wolf`](Wolf.md)

##### <a id='log'></a>public final static var __log__

_log field_

>Returns
>  [`Logman`](logger/Logman.md)

---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

