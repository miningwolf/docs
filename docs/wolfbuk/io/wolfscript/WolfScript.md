## WolfScript __class__

>io.wolfscript.WolfScript

---

### Class Overview

Represents the WolfScript core, for version and Server singleton handling

Method | Type   
--- | :--- 
static  property __Server__ <br> _Get: Gets the current [`Server`](Server.md) singleton<br>Set: Attempts to set the [`Server`](Server.md) singleton._ | [`Server`](Server.md)
static readonly property __Name__ <br> _Get: Gets the name of this server implementation._ | `String`
static readonly property __MaxPlayers__ <br> _Get: Get the maximum amount of players which can login to this server._ | `int`
static readonly property __Port__ <br> _Get: Get the game port that the server runs on._ | `int`
static  property __IdleTimeout__ <br> _Get: Gets the idle kick timeout.<br>Set: Set the idle kick timeout. Any players idle for the specified amount of_ | `int`
static readonly property __Ip__ <br> _Get: Get the IP that this server is bound to, or empty string if not_ | `String`
static readonly property __ScoreboardManager__ <br> _Get: Gets the instance of the scoreboard manager._ | [`ScoreboardManager`](scoreboard/ScoreboardManager.md)
static readonly property __ItemFactory__ <br> _Get: Gets the instance of the item factory (for `ItemMeta`)._ | [`ItemFactory`](inventory/ItemFactory.md)
static readonly property __Motd__ <br> _Get: Gets the message that is displayed on the server list._ | `String`
static readonly property __GenerateStructures__ <br> _Get: Get generate-structures setting._ | `boolean`
static readonly property __AllowEnd__ <br> _Get: Gets whether this server allows the End or not._ | `boolean`
static readonly property __AllowNether__ <br> _Get: Gets whether this server allows the Nether or not._ | `boolean`
static readonly property __AmbientSpawnLimit__ <br> _Get: Gets user-specified limit for number of ambient mobs that can spawn in_ | `int`
static readonly property __AnimalSpawnLimit__ <br> _Get: Gets user-specified limit for number of animals that can spawn in a_ | `int`
static readonly property __MonsterSpawnLimit__ <br> _Get: Gets user-specified limit for number of monsters that can spawn in a_ | `int`
static readonly property __HelpMap__ <br> _Get: Gets the [`HelpMap`](help/HelpMap.md) providing help topics for this server._ | [`HelpMap`](help/HelpMap.md)
static readonly property __ConnectionThrottle__ <br> _Get: Gets the value of the connection throttle setting._ | `long`
static readonly property __Messenger__ <br> _Get: Gets the [`Messenger`](plugin/messaging/Messenger.md) responsible for this server._ | [`Messenger`](plugin/messaging/Messenger.md)
static readonly property __OfflinePlayers__ <br> _Get: Gets every player that has ever played on this server._ | `OfflinePlayer[]`
static readonly property __ConsoleSender__ <br> _Get: Gets a `ConsoleCommandSender` that may be used as an input source_ | `ConsoleCommandSender`
static readonly property __PluginManager__ <br> _Get: Gets the plugin manager for interfacing with plugins._ | [`PluginManager`](plugin/PluginManager.md)
static readonly property __Scheduler__ <br> _Get: Gets the scheduler for managing scheduled events._ | [`WolfScriptScheduler`](scheduler/WolfScriptScheduler.md)
static  property __DefaultGameMode__ <br> _Get: Gets the default [`GameMode`](GameMode.md) for new players.<br>Set: Sets the default [`GameMode`](GameMode.md) for new players._ | [`GameMode`](GameMode.md)
static readonly property __Operators__ <br> _Get: Gets a set containing all player operators._ | `Set<OfflinePlayer>`
static readonly property __BannedPlayers__ <br> _Get: Gets a set containing all banned players._ | `Set<OfflinePlayer>`
static readonly property __IPBans__ <br> _Get: Gets a set containing all current IPs that are banned._ | `Set<String>`
static readonly property __Logger__ <br> _Get: Returns the primary logger associated with this server instance._ | `Logger`
static readonly property __AllowFlight__ <br> _Get: Gets whether this server allows flying or not._ | `boolean`
static readonly property __OnlineMode__ <br> _Get: Gets whether the Server is in online mode or not._ | `boolean`
static readonly property __TicksPerMonsterSpawns__ <br> _TicksPerMonsterSpawns property_ | `int`
static  property __SpawnRadius__ <br> _Get: Gets the radius, in blocks, around each worlds spawn point to protect.<br>Set: Sets the radius, in blocks, around each worlds spawn point to protect._ | `int`
static readonly property __ServerIcon__ <br> _Get: Gets an instance of the server's default server-icon._ | [`CachedServerIcon`](util/CachedServerIcon.md)
static readonly property __ServerName__ <br> _Get: Get the name of this server._ | `String`
static readonly property __ServerId__ <br> _Get: Get an ID of this server. The ID is a simple generally alphanumeric ID_ | `String`
static readonly property __ShutdownMessage__ <br> _Get: Gets the default message that is displayed when the server is stopped._ | `String`
static readonly property __ServicesManager__ <br> _Get: Gets a services manager._ | [`ServicesManager`](plugin/ServicesManager.md)
static readonly property __TicksPerAnimalSpawns__ <br> _TicksPerAnimalSpawns property_ | `int`
static readonly property __WhitelistedPlayers__ <br> _Get: Gets a list of whitelisted players._ | `Set<OfflinePlayer>`
static readonly property __Version__ <br> _Get: Gets the version string of this server implementation._ | `String`
static readonly property __WolfScriptVersion__ <br> _Get: Gets the WolfScript version that this server is running._ | `String`
static readonly property __ViewDistance__ <br> _Get: Get the view distance from this server._ | `int`
static readonly property __WarningState__ <br> _Get: Gets the current warning state for the server._ | `WarningState`
static readonly property __WaterAnimalSpawnLimit__ <br> _Get: Gets user-specified limit for number of water animals that can spawn in_ | `int`
static readonly property __UpdateFolder__ <br> _Get: Gets the name of the update folder. The update folder is used to safely_ | `String`
static readonly property __UpdateFolderFile__ <br> _Get: Gets the update folder. The update folder is used to safely update_ | `File`
static readonly property __WorldType__ <br> _Get: Get world type (level-type setting) for default world._ | `String`
static readonly property __WorldContainer__ <br> _Get: Gets the folder that contains all of the various `World`s._ | `File`
static readonly property __Worlds__ <br> _Get: Gets a list of all worlds on this server._ | `List<World>`
static writeonly property __Whitelist__ <br> _Set: Sets if the server is whitelisted._ | `void`
static function __addRecipe__(recipe) <br> _Adds a recipe to the crafting manager._ | `boolean`
static function __createBossBar__(title, color, style) <br> _Creates a boss bar instance to display to players. The progress_ | [`BossBar`](boss/BossBar.md)
static function __createChunkData__(world) <br> _Create a ChunkData for use in a generator._ | `ChunkData`
static function __createInventory__(owner, type, title) <br> _Creates an empty inventory with the specified type and title. If the type_ | [`Inventory`](inventory/Inventory.md)
static function __broadcastMessage__(message) <br> _Broadcast a message to all players._ | `int`
static function __createInventory__(owner, type) <br> _Creates an empty inventory of the specified type. If the type is {@link_ | [`Inventory`](inventory/Inventory.md)
static function __getPlayer__(id) <br> _Gets the player with the given UUID._ | `Player`
static function __createWorld__(creator) <br> _Creates or loads a world with the given name using the specified_ | `World`
static function __getBanList__(type) <br> _Gets a ban list for the supplied type._ | [`BanList`](BanList.md)
static function __banIP__(address) <br> _Bans the specified address from the server._ | `void`
static function __createMap__(world) <br> _Create a new map with an automatically assigned ID._ | [`MapView`](map/MapView.md)
static function __getOfflinePlayer__(id) <br> _Gets the player by the given UUID, regardless if they are offline or_ | `OfflinePlayer`
static function __getPluginCommand__(name) <br> _Gets a [`PluginCommand`](command/PluginCommand.md) with the given name or alias._ | [`PluginCommand`](command/PluginCommand.md)
static function __configureDbConfig__(config) <br> _Populates a given `ServerConfig` with values attributes to this_ | `void`
static function __broadcast__(message, permission) <br> _Broadcasts the specified message to every user with the given_ | `int`
static function __getRecipesFor__(result) <br> _Get a list of all recipes for a given item. The stack size is ignored_ | `List<Recipe>`
static function __clearRecipes__() <br> _Clears the list of crafting recipes._ | `void`
static function __reloadWhitelist__() <br> _Reloads the whitelist from disk._ | `void`
static function __getWorld__(uid) <br> _Gets the world from the given Unique ID._ | `World`
static function __getWorld__(name) <br> _Gets the world with the given name._ | `World`
static function __savePlayers__() <br> _Writes loaded players to disk._ | `void`
static function __resetRecipes__() <br> _Resets the list of crafting recipes to the default._ | `void`
static function __hasWhitelist__() <br> _Gets whether this server has a whitelist or not._ | `boolean`
static function __isPrimaryThread__() <br> _isPrimaryThread method_ | `boolean`
static function __reload__() <br> _Reloads the server, refreshing settings and plugin information._ | `void`
static function __recipeIterator__() <br> _Get an iterator through the list of crafting recipes._ | `Iterator<Recipe>`
static function __isHardcore__() <br> _Gets whether the server is in hardcore mode or not._ | `boolean`
static function __shutdown__() <br> _Shutdowns the server, stopping everything._ | `void`
static function __unbanIP__(address) <br> _Unbans the specified address from the server._ | `void`
static function __unloadWorld__(name, save) <br> _Unloads a world with the given name._ | `boolean`
static function __unloadWorld__(world, save) <br> _Unloads the given world._ | `boolean`



---


### Public Properties for [`WolfScript`](WolfScript.md)

##### <a id='server'></a>public static  property __Server__

_Get: Gets the current [`Server`](Server.md) singleton<br>Set: Attempts to set the [`Server`](Server.md) singleton. <p> This cannot be done if the Server is already set._

Get | Description
--- | --- 
[`Server`](Server.md) | Server instance being ran

Set | Type | Description  
--- | --- | --- 
server | [`Server`](Server.md) | Server instance


##### <a id='name'></a>public static readonly property __Name__

_Get: Gets the name of this server implementation._

Get | Description
--- | --- 
`String` | name of this server implementation



##### <a id='maxplayers'></a>public static readonly property __MaxPlayers__

_Get: Get the maximum amount of players which can login to this server._

Get | Description
--- | --- 
`int` | the amount of players this server allows



##### <a id='port'></a>public static readonly property __Port__

_Get: Get the game port that the server runs on._

Get | Description
--- | --- 
`int` | the port number of this server



##### <a id='idletimeout'></a>public static  property __IdleTimeout__

_Get: Gets the idle kick timeout.<br>Set: Set the idle kick timeout. Any players idle for the specified amount of time will be automatically kicked. <p> A value of 0 will disable the idle kick timeout._

Get | Description
--- | --- 
`int` | the idle timeout in minutes

Set | Type | Description  
--- | --- | --- 
threshold | `int` | the idle timeout in minutes


##### <a id='ip'></a>public static readonly property __Ip__

_Get: Get the IP that this server is bound to, or empty string if not specified._

Get | Description
--- | --- 
`String` | the IP string that this server is bound to, otherwise empty string



##### <a id='scoreboardmanager'></a>public static readonly property __ScoreboardManager__

_Get: Gets the instance of the scoreboard manager. <p> This will only exist after the first world has loaded._

Get | Description
--- | --- 
[`ScoreboardManager`](scoreboard/ScoreboardManager.md) | the scoreboard manager or null if no worlds are loaded.



##### <a id='itemfactory'></a>public static readonly property __ItemFactory__

_Get: Gets the instance of the item factory (for `ItemMeta`)._

Get | Description
--- | --- 
[`ItemFactory`](inventory/ItemFactory.md) | the item factory



##### <a id='motd'></a>public static readonly property __Motd__

_Get: Gets the message that is displayed on the server list._

Get | Description
--- | --- 
`String` | the servers MOTD



##### <a id='generatestructures'></a>public static readonly property __GenerateStructures__

_Get: Get generate-structures setting._

Get | Description
--- | --- 
`boolean` | true if structure generation is enabled, false otherwise



##### <a id='allowend'></a>public static readonly property __AllowEnd__

_Get: Gets whether this server allows the End or not._

Get | Description
--- | --- 
`boolean` | whether this server allows the End or not



##### <a id='allownether'></a>public static readonly property __AllowNether__

_Get: Gets whether this server allows the Nether or not._

Get | Description
--- | --- 
`boolean` | whether this server allows the Nether or not



##### <a id='ambientspawnlimit'></a>public static readonly property __AmbientSpawnLimit__

_Get: Gets user-specified limit for number of ambient mobs that can spawn in a chunk._

Get | Description
--- | --- 
`int` | the ambient spawn limit



##### <a id='animalspawnlimit'></a>public static readonly property __AnimalSpawnLimit__

_Get: Gets user-specified limit for number of animals that can spawn in a chunk._

Get | Description
--- | --- 
`int` | the animal spawn limit



##### <a id='monsterspawnlimit'></a>public static readonly property __MonsterSpawnLimit__

_Get: Gets user-specified limit for number of monsters that can spawn in a chunk._

Get | Description
--- | --- 
`int` | the monster spawn limit



##### <a id='helpmap'></a>public static readonly property __HelpMap__

_Get: Gets the [`HelpMap`](help/HelpMap.md) providing help topics for this server._

Get | Description
--- | --- 
[`HelpMap`](help/HelpMap.md) | a help map for this server



##### <a id='connectionthrottle'></a>public static readonly property __ConnectionThrottle__

_Get: Gets the value of the connection throttle setting._

Get | Description
--- | --- 
`long` | the value of the connection throttle setting



##### <a id='messenger'></a>public static readonly property __Messenger__

_Get: Gets the [`Messenger`](plugin/messaging/Messenger.md) responsible for this server._

Get | Description
--- | --- 
[`Messenger`](plugin/messaging/Messenger.md) | messenger responsible for this server



##### <a id='offlineplayers'></a>public static readonly property __OfflinePlayers__

_Get: Gets every player that has ever played on this server._

Get | Description
--- | --- 
`OfflinePlayer[]` | an array containing all previous players



##### <a id='consolesender'></a>public static readonly property __ConsoleSender__

_Get: Gets a `ConsoleCommandSender` that may be used as an input source for this server._

Get | Description
--- | --- 
`ConsoleCommandSender` | a console command sender



##### <a id='pluginmanager'></a>public static readonly property __PluginManager__

_Get: Gets the plugin manager for interfacing with plugins._

Get | Description
--- | --- 
[`PluginManager`](plugin/PluginManager.md) | a plugin manager for this Server instance



##### <a id='scheduler'></a>public static readonly property __Scheduler__

_Get: Gets the scheduler for managing scheduled events._

Get | Description
--- | --- 
[`WolfScriptScheduler`](scheduler/WolfScriptScheduler.md) | a scheduling service for this server



##### <a id='defaultgamemode'></a>public static  property __DefaultGameMode__

_Get: Gets the default [`GameMode`](GameMode.md) for new players.<br>Set: Sets the default [`GameMode`](GameMode.md) for new players._

Get | Description
--- | --- 
[`GameMode`](GameMode.md) | the default game mode

Set | Type | Description  
--- | --- | --- 
mode | [`GameMode`](GameMode.md) | the new game mode


##### <a id='operators'></a>public static readonly property __Operators__

_Get: Gets a set containing all player operators._

Get | Description
--- | --- 
`Set<OfflinePlayer>` | a set containing player operators



##### <a id='bannedplayers'></a>public static readonly property __BannedPlayers__

_Get: Gets a set containing all banned players._

Get | Description
--- | --- 
`Set<OfflinePlayer>` | a set containing banned players



##### <a id='ipbans'></a>public static readonly property __IPBans__

_Get: Gets a set containing all current IPs that are banned._

Get | Description
--- | --- 
`Set<String>` | a set containing banned IP addresses



##### <a id='logger'></a>public static readonly property __Logger__

_Get: Returns the primary logger associated with this server instance._

Get | Description
--- | --- 
`Logger` | Logger associated with this server



##### <a id='allowflight'></a>public static readonly property __AllowFlight__

_Get: Gets whether this server allows flying or not._

Get | Description
--- | --- 
`boolean` | true if the server allows flight, false otherwise



##### <a id='onlinemode'></a>public static readonly property __OnlineMode__

_Get: Gets whether the Server is in online mode or not._

Get | Description
--- | --- 
`boolean` | true if the server authenticates clients, false otherwise



##### <a id='tickspermonsterspawns'></a>public static readonly property __TicksPerMonsterSpawns__

_TicksPerMonsterSpawns property_

Get | 
--- | 
`int` |



##### <a id='spawnradius'></a>public static  property __SpawnRadius__

_Get: Gets the radius, in blocks, around each worlds spawn point to protect.<br>Set: Sets the radius, in blocks, around each worlds spawn point to protect._

Get | Description
--- | --- 
`int` | spawn radius, or 0 if none

Set | Type | Description  
--- | --- | --- 
value | `int` | new spawn radius, or 0 if none


##### <a id='servericon'></a>public static readonly property __ServerIcon__

_Get: Gets an instance of the server's default server-icon._

Get | Description
--- | --- 
[`CachedServerIcon`](util/CachedServerIcon.md) | the default server-icon; null values may be used by the implementation to indicate no defined icon, but this behavior is not guaranteed



##### <a id='servername'></a>public static readonly property __ServerName__

_Get: Get the name of this server._

Get | Description
--- | --- 
`String` | the name of this server



##### <a id='serverid'></a>public static readonly property __ServerId__

_Get: Get an ID of this server. The ID is a simple generally alphanumeric ID that can be used for uniquely identifying this server._

Get | Description
--- | --- 
`String` | the ID of this server



##### <a id='shutdownmessage'></a>public static readonly property __ShutdownMessage__

_Get: Gets the default message that is displayed when the server is stopped._

Get | Description
--- | --- 
`String` | the shutdown message



##### <a id='servicesmanager'></a>public static readonly property __ServicesManager__

_Get: Gets a services manager._

Get | Description
--- | --- 
[`ServicesManager`](plugin/ServicesManager.md) | s services manager



##### <a id='unsafe'></a>public static readonly property __Unsafe__
_Deprecated_

_Unsafe property_

Get | Description
--- | --- 
[`UnsafeValues`](UnsafeValues.md) | the unsafe values instance



##### <a id='ticksperanimalspawns'></a>public static readonly property __TicksPerAnimalSpawns__

_TicksPerAnimalSpawns property_

Get | 
--- | 
`int` |



##### <a id='whitelistedplayers'></a>public static readonly property __WhitelistedPlayers__

_Get: Gets a list of whitelisted players._

Get | Description
--- | --- 
`Set<OfflinePlayer>` | a set containing all whitelisted players



##### <a id='version'></a>public static readonly property __Version__

_Get: Gets the version string of this server implementation._

Get | Description
--- | --- 
`String` | version of this server implementation



##### <a id='wolfscriptversion'></a>public static readonly property __WolfScriptVersion__

_Get: Gets the WolfScript version that this server is running._

Get | Description
--- | --- 
`String` | version of WolfScript



##### <a id='viewdistance'></a>public static readonly property __ViewDistance__

_Get: Get the view distance from this server._

Get | Description
--- | --- 
`int` | the view distance from this server.



##### <a id='warningstate'></a>public static readonly property __WarningState__

_Get: Gets the current warning state for the server._

Get | Description
--- | --- 
`WarningState` | the configured warning state



##### <a id='wateranimalspawnlimit'></a>public static readonly property __WaterAnimalSpawnLimit__

_Get: Gets user-specified limit for number of water animals that can spawn in a chunk._

Get | Description
--- | --- 
`int` | the water animal spawn limit



##### <a id='updatefolder'></a>public static readonly property __UpdateFolder__

_Get: Gets the name of the update folder. The update folder is used to safely update plugins at the right moment on a plugin load. <p> The update folder name is relative to the plugins folder._

Get | Description
--- | --- 
`String` | the name of the update folder



##### <a id='updatefolderfile'></a>public static readonly property __UpdateFolderFile__

_Get: Gets the update folder. The update folder is used to safely update plugins at the right moment on a plugin load._

Get | Description
--- | --- 
`File` | the update folder



##### <a id='worldtype'></a>public static readonly property __WorldType__

_Get: Get world type (level-type setting) for default world._

Get | Description
--- | --- 
`String` | the value of level-type (e.g. DEFAULT, FLAT, DEFAULT_1_1)



##### <a id='worldcontainer'></a>public static readonly property __WorldContainer__

_Get: Gets the folder that contains all of the various `World`s._

Get | Description
--- | --- 
`File` | folder that contains all worlds



##### <a id='worlds'></a>public static readonly property __Worlds__

_Get: Gets a list of all worlds on this server._

Get | Description
--- | --- 
`List<World>` | a list of worlds



##### <a id='whitelist'></a>public static writeonly property __Whitelist__

_Set: Sets if the server is whitelisted._

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
value | `boolean` | true for whitelist on, false for off


---

### Public Methods for [`WolfScript`](WolfScript.md)

##### <a id='addrecipe'></a>public static function __addRecipe__(recipe)

_Adds a recipe to the crafting manager._

Argument | Type | Description  
--- | --- | --- 
recipe | [`Recipe`](inventory/Recipe.md) | the recipe to add

Returns | Description
--- | --- 
`boolean` | true if the recipe was added, false if it wasn't for some reason


##### <a id='createbossbar'></a>public static function __createBossBar__(title, color, style)

_Creates a boss bar instance to display to players. The progress defaults to 1.0_

Argument | Type | Description  
--- | --- | --- 
title | `String` | the title of the boss bar
color | [`BarColor`](boss/BarColor.md) | the color of the boss bar
style | [`BarStyle`](boss/BarStyle.md) | the style of the boss bar

Returns | Description
--- | --- 
[`BossBar`](boss/BossBar.md) | the created boss bar


##### <a id='createchunkdata'></a>public static function __createChunkData__(world)

_Create a ChunkData for use in a generator. See {@link ChunkGenerator#generateChunkData(io.wolfscript.World, java.util.Random, int, int, io.wolfscript.generator.ChunkGenerator.BiomeGrid)}_

Argument | Type | Description  
--- | --- | --- 
world | `World` | the world to create the ChunkData for

Returns | Description
--- | --- 
`ChunkData` | a new ChunkData for the world


##### <a id='createinventory'></a>public static function __createInventory__(owner, type, title)

_Creates an empty inventory with the specified type and title. If the type is `InventoryType#CHEST`, the new inventory has a size of 27; otherwise the new inventory has the normal size for its type.<br> It should be noted that some inventory types do not support titles and may not render with said titles on the Minecraft client._

Argument | Type | Description  
--- | --- | --- 
owner | [`InventoryHolder`](inventory/InventoryHolder.md) | The holder of the inventory; can be null if there's no holder.
type | [`InventoryType`](event/inventory/InventoryType.md) | The type of inventory to create.
title | `String` | The title of the inventory, to be displayed when it is viewed.

Returns | Description
--- | --- 
[`Inventory`](inventory/Inventory.md) | The new inventory.


##### <a id='broadcastmessage'></a>public static function __broadcastMessage__(message)

_Broadcast a message to all players. <p> This is the same as calling {@link #broadcast(java.lang.String, java.lang.String)} to `Server#BROADCAST_CHANNEL_USERS`_

Argument | Type | Description  
--- | --- | --- 
message | `String` | the message

Returns | Description
--- | --- 
`int` | the number of players


##### <a id='createinventory'></a>public static function __createInventory__(owner, type)

_Creates an empty inventory of the specified type. If the type is `InventoryType#CHEST`, the new inventory has a size of 27; otherwise the new inventory has the normal size for its type._

Argument | Type | Description  
--- | --- | --- 
owner | [`InventoryHolder`](inventory/InventoryHolder.md) | the holder of the inventory, or null to indicate no holder
type | [`InventoryType`](event/inventory/InventoryType.md) | the type of inventory to create

Returns | Description
--- | --- 
[`Inventory`](inventory/Inventory.md) | a new inventory


##### <a id='getplayer'></a>public static function __getPlayer__(name)
_Deprecated: Use {@link #getPlayer(UUID)} as player names are no longer guaranteed to be unique_

_Gets a player object by the given username. <p> This method may not return objects for offline players._

Argument | Type | Description  
--- | --- | --- 
name | `String` | the name to look up

Returns | Description
--- | --- 
`Player` | a player if one was found, null otherwise


##### <a id='getplayerexact'></a>public static function __getPlayerExact__(name)
_Deprecated: Use {@link #getPlayer(UUID)} as player names are no longer guaranteed to be unique_

_Gets the player with the exact given name, case insensitive._

Argument | Type | Description  
--- | --- | --- 
name | `String` | Exact name of the player to retrieve

Returns | Description
--- | --- 
`Player` | a player object if one was found, null otherwise


##### <a id='getplayer'></a>public static function __getPlayer__(id)

_Gets the player with the given UUID._

Argument | Type | Description  
--- | --- | --- 
id | `UUID` | UUID of the player to retrieve

Returns | Description
--- | --- 
`Player` | a player object if one was found, null otherwise


##### <a id='createworld'></a>public static function __createWorld__(creator)

_Creates or loads a world with the given name using the specified options. <p> If the world is already loaded, it will just return the equivalent of getWorld(creator.name())._

Argument | Type | Description  
--- | --- | --- 
creator | [`WorldCreator`](WorldCreator.md) | the options to use when creating the world

Returns | Description
--- | --- 
`World` | newly created or loaded world


##### <a id='getbanlist'></a>public static function __getBanList__(type)

_Gets a ban list for the supplied type. <p> Bans by name are no longer supported and this method will return null when trying to request them. The replacement is bans by UUID._

Argument | Type | Description  
--- | --- | --- 
type | `Type` | the type of list to fetch, cannot be null

Returns | Description
--- | --- 
[`BanList`](BanList.md) | a ban list of the specified type


##### <a id='banip'></a>public static function __banIP__(address)

_Bans the specified address from the server._

Argument | Type | Description  
--- | --- | --- 
address | `String` | the IP address to ban

Returns | 
--- | 
`void` |


##### <a id='getmap'></a>public static function __getMap__(id)
_Deprecated: Magic value_

_Gets the map from the given item ID._

Argument | Type | Description  
--- | --- | --- 
id | `short` | the id of the map to get

Returns | Description
--- | --- 
[`MapView`](map/MapView.md) | a map view if it exists, or null otherwise


##### <a id='createmap'></a>public static function __createMap__(world)

_Create a new map with an automatically assigned ID._

Argument | Type | Description  
--- | --- | --- 
world | `World` | the world the map will belong to

Returns | Description
--- | --- 
[`MapView`](map/MapView.md) | a newly created map view


##### <a id='getofflineplayer'></a>public static function __getOfflinePlayer__(id)

_Gets the player by the given UUID, regardless if they are offline or online. <p> This will return an object even if the player does not exist. To this method, all players will exist._

Argument | Type | Description  
--- | --- | --- 
id | `UUID` | the UUID of the player to retrieve

Returns | Description
--- | --- 
`OfflinePlayer` | an offline player


##### <a id='getplugincommand'></a>public static function __getPluginCommand__(name)

_Gets a [`PluginCommand`](command/PluginCommand.md) with the given name or alias._

Argument | Type | Description  
--- | --- | --- 
name | `String` | the name of the command to retrieve

Returns | Description
--- | --- 
[`PluginCommand`](command/PluginCommand.md) | a plugin command if found, null otherwise


##### <a id='getofflineplayer'></a>public static function __getOfflinePlayer__(name)
_Deprecated: Persistent storage of users should be by UUID as names are no longer unique past a single session._

_Gets the player by the given name, regardless if they are offline or online. <p> This method may involve a blocking web request to get the UUID for the given name. <p> This will return an object even if the player does not exist. To this method, all players will exist._

Argument | Type | Description  
--- | --- | --- 
name | `String` | the name the player to retrieve

Returns | Description
--- | --- 
`OfflinePlayer` | an offline player


##### <a id='configuredbconfig'></a>public static function __configureDbConfig__(config)

_Populates a given `ServerConfig` with values attributes to this server._

Argument | Type | Description  
--- | --- | --- 
config | `ServerConfig` | the server config to populate

Returns | 
--- | 
`void` |


##### <a id='broadcast'></a>public static function __broadcast__(message, permission)

_Broadcasts the specified message to every user with the given permission name._

Argument | Type | Description  
--- | --- | --- 
message | `String` | message to broadcast
permission | `String` | the required permission {@link Permissible permissibles} must have to receive the broadcast

Returns | Description
--- | --- 
`int` | number of message recipients


##### <a id='getrecipesfor'></a>public static function __getRecipesFor__(result)

_Get a list of all recipes for a given item. The stack size is ignored in comparisons. If the durability is -1, it will match any data value._

Argument | Type | Description  
--- | --- | --- 
result | `ItemStack` | the item to match against recipe results

Returns | Description
--- | --- 
`List<Recipe>` | a list of recipes with the given result


##### <a id='clearrecipes'></a>public static function __clearRecipes__()

_Clears the list of crafting recipes._

Returns | 
--- | 
`void` |


##### <a id='reloadwhitelist'></a>public static function __reloadWhitelist__()

_Reloads the whitelist from disk._

Returns | 
--- | 
`void` |


##### <a id='getworld'></a>public static function __getWorld__(uid)

_Gets the world from the given Unique ID._

Argument | Type | Description  
--- | --- | --- 
uid | `UUID` | a unique-id of the world to retrieve

Returns | Description
--- | --- 
`World` | a world with the given Unique ID, or null if none exists


##### <a id='getworld'></a>public static function __getWorld__(name)

_Gets the world with the given name._

Argument | Type | Description  
--- | --- | --- 
name | `String` | the name of the world to retrieve

Returns | Description
--- | --- 
`World` | a world with the given name, or null if none exists


##### <a id='matchplayer'></a>public static function __matchPlayer__(name)
_Deprecated: Use {@link #getPlayer(UUID)} as player names are no longer guaranteed to be unique_

_Attempts to match any players with the given name, and returns a list of all possibly matches. <p> This list is not sorted in any particular order. If an exact match is found, the returned list will only contain a single result._

Argument | Type | Description  
--- | --- | --- 
name | `String` | the (partial) name to match

Returns | Description
--- | --- 
`List<Player>` | list of all possible players


##### <a id='saveplayers'></a>public static function __savePlayers__()

_Writes loaded players to disk._

Returns | 
--- | 
`void` |


##### <a id='resetrecipes'></a>public static function __resetRecipes__()

_Resets the list of crafting recipes to the default._

Returns | 
--- | 
`void` |


##### <a id='haswhitelist'></a>public static function __hasWhitelist__()

_Gets whether this server has a whitelist or not._

Returns | Description
--- | --- 
`boolean` | whether this server has a whitelist or not


##### <a id='isprimarythread'></a>public static function __isPrimaryThread__()

_isPrimaryThread method_

Returns | 
--- | 
`boolean` |


##### <a id='reload'></a>public static function __reload__()

_Reloads the server, refreshing settings and plugin information._

Returns | 
--- | 
`void` |


##### <a id='recipeiterator'></a>public static function __recipeIterator__()

_Get an iterator through the list of crafting recipes._

Returns | Description
--- | --- 
`Iterator<Recipe>` | an iterator


##### <a id='ishardcore'></a>public static function __isHardcore__()

_Gets whether the server is in hardcore mode or not._

Returns | Description
--- | --- 
`boolean` | true if the server mode is hardcore, false otherwise


##### <a id='shutdown'></a>public static function __shutdown__()

_Shutdowns the server, stopping everything._

Returns | 
--- | 
`void` |


##### <a id='unbanip'></a>public static function __unbanIP__(address)

_Unbans the specified address from the server._

Argument | Type | Description  
--- | --- | --- 
address | `String` | the IP address to unban

Returns | 
--- | 
`void` |


##### <a id='unloadworld'></a>public static function __unloadWorld__(name, save)

_Unloads a world with the given name._

Argument | Type | Description  
--- | --- | --- 
name | `String` | Name of the world to unload
save | `boolean` | whether to save the chunks before unloading

Returns | Description
--- | --- 
`boolean` | true if successful, false otherwise


##### <a id='unloadworld'></a>public static function __unloadWorld__(world, save)

_Unloads the given world._

Argument | Type | Description  
--- | --- | --- 
world | `World` | the world to unload
save | `boolean` | whether to save the chunks before unloading

Returns | Description
--- | --- 
`boolean` | true if successful, false otherwise


##### <a id='useexactloginlocation'></a>public static function __useExactLoginLocation__()
_Deprecated_

_useExactLoginLocation method_

Returns | 
--- | 
`boolean` |


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

