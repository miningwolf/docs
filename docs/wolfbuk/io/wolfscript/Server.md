## Server __interface__

>io.wolfscript.Server
>Extends [`PluginMessageRecipient`](plugin/messaging/PluginMessageRecipient.md)

---

### Interface Overview

Represents a server implementation.

Method | Type   
--- | :--- 
  property __IdleTimeout__ <br> _Get: Gets the idle kick timeout.<br>Set: Set the idle kick timeout. Any players idle for the specified amount of_ | `int`
 readonly property __HelpMap__ <br> _Get: Gets the [`HelpMap`](help/HelpMap.md) providing help topics for this server._ | [`HelpMap`](help/HelpMap.md)
 readonly property __ConsoleSender__ <br> _Get: Gets a `ConsoleCommandSender` that may be used as an input source_ | `ConsoleCommandSender`
  property __DefaultGameMode__ <br> _Get: Gets the default [`GameMode`](GameMode.md) for new players.<br>Set: Sets the default [`GameMode`](GameMode.md) for new players._ | [`GameMode`](GameMode.md)
 readonly property __BannedPlayers__ <br> _Get: Gets a set containing all banned players._ | `Set<OfflinePlayer>`
 readonly property __IPBans__ <br> _Get: Gets a set containing all current IPs that are banned._ | `Set<String>`
 readonly property __GenerateStructures__ <br> _Get: Get generate-structures setting._ | `boolean`
 readonly property __AllowEnd__ <br> _Get: Gets whether this server allows the End or not._ | `boolean`
 readonly property __AllowNether__ <br> _Get: Gets whether this server allows the Nether or not._ | `boolean`
 readonly property __AllowFlight__ <br> _Get: Gets whether this server allows flying or not._ | `boolean`
 readonly property __ConnectionThrottle__ <br> _Get: Gets the value of the connection throttle setting._ | `long`
 readonly property __Name__ <br> _Get: Gets the name of this server implementation._ | `String`
 readonly property __Messenger__ <br> _Get: Gets the [`Messenger`](plugin/messaging/Messenger.md) responsible for this server._ | [`Messenger`](plugin/messaging/Messenger.md)
 readonly property __MaxPlayers__ <br> _Get: Get the maximum amount of players which can login to this server._ | `int`
 readonly property __Ip__ <br> _Get: Get the IP that this server is bound to, or empty string if not_ | `String`
 readonly property __Logger__ <br> _Get: Returns the primary logger associated with this server instance._ | `Logger`
 readonly property __OnlineMode__ <br> _Get: Gets whether the Server is in online mode or not._ | `boolean`
 readonly property __PluginManager__ <br> _Get: Gets the plugin manager for interfacing with plugins._ | [`PluginManager`](plugin/PluginManager.md)
 readonly property __OfflinePlayers__ <br> _Get: Gets every player that has ever played on this server._ | `OfflinePlayer[]`
 readonly property __Operators__ <br> _Get: Gets a set containing all player operators._ | `Set<OfflinePlayer>`
 readonly property __WorldType__ <br> _Get: Get world type (level-type setting) for default world._ | `String`
 readonly property __UpdateFolderFile__ <br> _Get: Gets the update folder. The update folder is used to safely update_ | `File`
 readonly property __TicksPerMonsterSpawns__ <br> _TicksPerMonsterSpawns property_ | `int`
 readonly property __ServicesManager__ <br> _Get: Gets a services manager._ | [`ServicesManager`](plugin/ServicesManager.md)
 readonly property __Port__ <br> _Get: Get the game port that the server runs on._ | `int`
 readonly property __UpdateFolder__ <br> _Get: Gets the name of the update folder. The update folder is used to safely_ | `String`
 readonly property __ServerName__ <br> _Get: Get the name of this server._ | `String`
 readonly property __ServerId__ <br> _Get: Get an ID of this server. The ID is a simple generally alphanumeric ID_ | `String`
 readonly property __Scheduler__ <br> _Get: Gets the scheduler for managing scheduled events._ | [`WolfScriptScheduler`](scheduler/WolfScriptScheduler.md)
 readonly property __TicksPerAnimalSpawns__ <br> _TicksPerAnimalSpawns property_ | `int`
  property __SpawnRadius__ <br> _Get: Gets the radius, in blocks, around each worlds spawn point to protect.<br>Set: Sets the radius, in blocks, around each worlds spawn point to protect._ | `int`
 readonly property __Version__ <br> _Get: Gets the version string of this server implementation._ | `String`
 readonly property __ViewDistance__ <br> _Get: Get the view distance from this server._ | `int`
 readonly property __WarningState__ <br> _Get: Gets the current warning state for the server._ | `WarningState`
 readonly property __WolfScriptVersion__ <br> _Get: Gets the WolfScript version that this server is running._ | `String`
 readonly property __WorldContainer__ <br> _Get: Gets the folder that contains all of the various `World`s._ | `File`
 readonly property __Worlds__ <br> _Get: Gets a list of all worlds on this server._ | `List<World>`
 readonly property __WhitelistedPlayers__ <br> _Get: Gets a list of whitelisted players._ | `Set<OfflinePlayer>`
 writeonly property __Whitelist__ <br> _Set: Sets if the server is whitelisted._ | `void`
 function __createMap__(world) <br> _Create a new map with an automatically assigned ID._ | [`MapView`](map/MapView.md)
 function __getBanList__(type) <br> _Gets a ban list for the supplied type._ | [`BanList`](BanList.md)
 function __banIP__(address) <br> _Bans the specified address from the server._ | `void`
 function __broadcast__(message, permission) <br> _Broadcasts the specified message to every user with the given_ | `int`
 function __clearRecipes__() <br> _Clears the list of crafting recipes._ | `void`
 function __addRecipe__(recipe) <br> _Adds a recipe to the crafting manager._ | `boolean`
 function __configureDbConfig__(config) <br> _Populates a given `ServerConfig` with values attributes to this_ | `void`
 function __broadcastMessage__(message) <br> _Broadcast a message to all players._ | `int`
 function __createWorld__(creator) <br> _Creates or loads a world with the given name using the specified_ | `World`
 function __resetRecipes__() <br> _Resets the list of crafting recipes to the default._ | `void`
 function __getOfflinePlayer__(id) <br> _Gets the player by the given UUID, regardless if they are offline or_ | `OfflinePlayer`
 function __getPluginCommand__(name) <br> _Gets a [`PluginCommand`](command/PluginCommand.md) with the given name or alias._ | [`PluginCommand`](command/PluginCommand.md)
 function __getPlayer__(id) <br> _Gets the player with the given UUID._ | `Player`
 function __getRecipesFor__(result) <br> _Get a list of all recipes for a given item. The stack size is ignored_ | `List<Recipe>`
 function __unloadWorld__(name, save) <br> _Unloads a world with the given name._ | `boolean`
 function __hasWhitelist__() <br> _Gets whether this server has a whitelist or not._ | `boolean`
 function __getWorld__(uid) <br> _Gets the world from the given Unique ID._ | `World`
 function __getWorld__(name) <br> _Gets the world with the given name._ | `World`
 function __unloadWorld__(world, save) <br> _Unloads the given world._ | `boolean`
 function __isHardcore__() <br> _Gets whether the server is in hardcore mode or not._ | `boolean`
 function __reloadWhitelist__() <br> _Reloads the whitelist from disk._ | `void`
 function __savePlayers__() <br> _Writes loaded players to disk._ | `void`
 function __recipeIterator__() <br> _Get an iterator through the list of crafting recipes._ | `Iterator<Recipe>`
 function __reload__() <br> _Reloads the server, refreshing settings and plugin information._ | `void`
 function __shutdown__() <br> _Shutdowns the server, stopping everything._ | `void`
 function __unbanIP__(address) <br> _Unbans the specified address from the server._ | `void`
 function __useExactLoginLocation__() <br> _useExactLoginLocation method_ | `boolean`
static final var __BROADCAST__ <br> _Used for all administrative messages, such as an operator using a_ | `String`
static final var __BROADCAST__ <br> _Used for all announcement messages, such as informing users that a_ | `String`
 |
__Inherited items from [`PluginMessageRecipient`](plugin/messaging/PluginMessageRecipient.md)__ |
 readonly property __ListeningPluginChannels__ <br> _Get: Gets a set containing all the Plugin Channels that this client is_ | `Set<String>`
 function __sendPluginMessage__(source, channel) <br> _Sends this recipient a Plugin Message on the specified outgoing_ | `void`





---


### Public Properties for [`Server`](Server.md)

##### <a id='idletimeout'></a>public   property __IdleTimeout__

_Get: Gets the idle kick timeout.<br>Set: Set the idle kick timeout. Any players idle for the specified amount of time will be automatically kicked. <p> A value of 0 will disable the idle kick timeout._

Get | Description
--- | --- 
`int` | the idle timeout in minutes

Set | Type | Description  
--- | --- | --- 
threshold | `int` | the idle timeout in minutes


##### <a id='helpmap'></a>public  readonly property __HelpMap__

_Get: Gets the [`HelpMap`](help/HelpMap.md) providing help topics for this server._

Get | Description
--- | --- 
[`HelpMap`](help/HelpMap.md) | a help map for this server



##### <a id='consolesender'></a>public  readonly property __ConsoleSender__

_Get: Gets a `ConsoleCommandSender` that may be used as an input source for this server._

Get | Description
--- | --- 
`ConsoleCommandSender` | a console command sender



##### <a id='defaultgamemode'></a>public   property __DefaultGameMode__

_Get: Gets the default [`GameMode`](GameMode.md) for new players.<br>Set: Sets the default [`GameMode`](GameMode.md) for new players._

Get | Description
--- | --- 
[`GameMode`](GameMode.md) | the default game mode

Set | Type | Description  
--- | --- | --- 
mode | [`GameMode`](GameMode.md) | the new game mode


##### <a id='bannedplayers'></a>public  readonly property __BannedPlayers__

_Get: Gets a set containing all banned players._

Get | Description
--- | --- 
`Set<OfflinePlayer>` | a set containing banned players



##### <a id='ipbans'></a>public  readonly property __IPBans__

_Get: Gets a set containing all current IPs that are banned._

Get | Description
--- | --- 
`Set<String>` | a set containing banned IP addresses



##### <a id='generatestructures'></a>public  readonly property __GenerateStructures__

_Get: Get generate-structures setting._

Get | Description
--- | --- 
`boolean` | true if structure generation is enabled, false otherwise



##### <a id='allowend'></a>public  readonly property __AllowEnd__

_Get: Gets whether this server allows the End or not._

Get | Description
--- | --- 
`boolean` | whether this server allows the End or not



##### <a id='allownether'></a>public  readonly property __AllowNether__

_Get: Gets whether this server allows the Nether or not._

Get | Description
--- | --- 
`boolean` | whether this server allows the Nether or not



##### <a id='allowflight'></a>public  readonly property __AllowFlight__

_Get: Gets whether this server allows flying or not._

Get | Description
--- | --- 
`boolean` | true if the server allows flight, false otherwise



##### <a id='connectionthrottle'></a>public  readonly property __ConnectionThrottle__

_Get: Gets the value of the connection throttle setting._

Get | Description
--- | --- 
`long` | the value of the connection throttle setting



##### <a id='name'></a>public  readonly property __Name__

_Get: Gets the name of this server implementation._

Get | Description
--- | --- 
`String` | name of this server implementation



##### <a id='messenger'></a>public  readonly property __Messenger__

_Get: Gets the [`Messenger`](plugin/messaging/Messenger.md) responsible for this server._

Get | Description
--- | --- 
[`Messenger`](plugin/messaging/Messenger.md) | messenger responsible for this server



##### <a id='maxplayers'></a>public  readonly property __MaxPlayers__

_Get: Get the maximum amount of players which can login to this server._

Get | Description
--- | --- 
`int` | the amount of players this server allows



##### <a id='ip'></a>public  readonly property __Ip__

_Get: Get the IP that this server is bound to, or empty string if not specified._

Get | Description
--- | --- 
`String` | the IP string that this server is bound to, otherwise empty string



##### <a id='logger'></a>public  readonly property __Logger__

_Get: Returns the primary logger associated with this server instance._

Get | Description
--- | --- 
`Logger` | Logger associated with this server



##### <a id='onlinemode'></a>public  readonly property __OnlineMode__

_Get: Gets whether the Server is in online mode or not._

Get | Description
--- | --- 
`boolean` | true if the server authenticates clients, false otherwise



##### <a id='pluginmanager'></a>public  readonly property __PluginManager__

_Get: Gets the plugin manager for interfacing with plugins._

Get | Description
--- | --- 
[`PluginManager`](plugin/PluginManager.md) | a plugin manager for this Server instance



##### <a id='offlineplayers'></a>public  readonly property __OfflinePlayers__

_Get: Gets every player that has ever played on this server._

Get | Description
--- | --- 
`OfflinePlayer[]` | an array containing all previous players



##### <a id='operators'></a>public  readonly property __Operators__

_Get: Gets a set containing all player operators._

Get | Description
--- | --- 
`Set<OfflinePlayer>` | a set containing player operators



##### <a id='worldtype'></a>public  readonly property __WorldType__

_Get: Get world type (level-type setting) for default world._

Get | Description
--- | --- 
`String` | the value of level-type (e.g. DEFAULT, FLAT, DEFAULT_1_1)



##### <a id='updatefolderfile'></a>public  readonly property __UpdateFolderFile__

_Get: Gets the update folder. The update folder is used to safely update plugins at the right moment on a plugin load._

Get | Description
--- | --- 
`File` | the update folder



##### <a id='tickspermonsterspawns'></a>public  readonly property __TicksPerMonsterSpawns__

_TicksPerMonsterSpawns property_

Get | 
--- | 
`int` |



##### <a id='servicesmanager'></a>public  readonly property __ServicesManager__

_Get: Gets a services manager._

Get | Description
--- | --- 
[`ServicesManager`](plugin/ServicesManager.md) | s services manager



##### <a id='port'></a>public  readonly property __Port__

_Get: Get the game port that the server runs on._

Get | Description
--- | --- 
`int` | the port number of this server



##### <a id='updatefolder'></a>public  readonly property __UpdateFolder__

_Get: Gets the name of the update folder. The update folder is used to safely update plugins at the right moment on a plugin load. <p> The update folder name is relative to the plugins folder._

Get | Description
--- | --- 
`String` | the name of the update folder



##### <a id='servername'></a>public  readonly property __ServerName__

_Get: Get the name of this server._

Get | Description
--- | --- 
`String` | the name of this server



##### <a id='serverid'></a>public  readonly property __ServerId__

_Get: Get an ID of this server. The ID is a simple generally alphanumeric ID that can be used for uniquely identifying this server._

Get | Description
--- | --- 
`String` | the ID of this server



##### <a id='scheduler'></a>public  readonly property __Scheduler__

_Get: Gets the scheduler for managing scheduled events._

Get | Description
--- | --- 
[`WolfScriptScheduler`](scheduler/WolfScriptScheduler.md) | a scheduling service for this server



##### <a id='ticksperanimalspawns'></a>public  readonly property __TicksPerAnimalSpawns__

_TicksPerAnimalSpawns property_

Get | 
--- | 
`int` |



##### <a id='spawnradius'></a>public   property __SpawnRadius__

_Get: Gets the radius, in blocks, around each worlds spawn point to protect.<br>Set: Sets the radius, in blocks, around each worlds spawn point to protect._

Get | Description
--- | --- 
`int` | spawn radius, or 0 if none

Set | Type | Description  
--- | --- | --- 
value | `int` | new spawn radius, or 0 if none


##### <a id='version'></a>public  readonly property __Version__

_Get: Gets the version string of this server implementation._

Get | Description
--- | --- 
`String` | version of this server implementation



##### <a id='viewdistance'></a>public  readonly property __ViewDistance__

_Get: Get the view distance from this server._

Get | Description
--- | --- 
`int` | the view distance from this server.



##### <a id='warningstate'></a>public  readonly property __WarningState__

_Get: Gets the current warning state for the server._

Get | Description
--- | --- 
`WarningState` | the configured warning state



##### <a id='wolfscriptversion'></a>public  readonly property __WolfScriptVersion__

_Get: Gets the WolfScript version that this server is running._

Get | Description
--- | --- 
`String` | version of WolfScript



##### <a id='worldcontainer'></a>public  readonly property __WorldContainer__

_Get: Gets the folder that contains all of the various `World`s._

Get | Description
--- | --- 
`File` | folder that contains all worlds



##### <a id='worlds'></a>public  readonly property __Worlds__

_Get: Gets a list of all worlds on this server._

Get | Description
--- | --- 
`List<World>` | a list of worlds



##### <a id='whitelistedplayers'></a>public  readonly property __WhitelistedPlayers__

_Get: Gets a list of whitelisted players._

Get | Description
--- | --- 
`Set<OfflinePlayer>` | a set containing all whitelisted players



##### <a id='whitelist'></a>public  writeonly property __Whitelist__

_Set: Sets if the server is whitelisted._

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
value | `boolean` | true for whitelist on, false for off


---

### Public Methods for [`Server`](Server.md)

##### <a id='createmap'></a>public  function __createMap__(world)

_Create a new map with an automatically assigned ID._

Argument | Type | Description  
--- | --- | --- 
world | `World` | the world the map will belong to

Returns | Description
--- | --- 
[`MapView`](map/MapView.md) | a newly created map view


##### <a id='getbanlist'></a>public  function __getBanList__(type)

_Gets a ban list for the supplied type. <p> Bans by name are no longer supported and this method will return null when trying to request them. The replacement is bans by UUID._

Argument | Type | Description  
--- | --- | --- 
type | `Type` | the type of list to fetch, cannot be null

Returns | Description
--- | --- 
[`BanList`](BanList.md) | a ban list of the specified type


##### <a id='banip'></a>public  function __banIP__(address)

_Bans the specified address from the server._

Argument | Type | Description  
--- | --- | --- 
address | `String` | the IP address to ban

Returns | 
--- | 
`void` |


##### <a id='broadcast'></a>public  function __broadcast__(message, permission)

_Broadcasts the specified message to every user with the given permission name._

Argument | Type | Description  
--- | --- | --- 
message | `String` | message to broadcast
permission | `String` | the required permission {@link Permissible permissibles} must have to receive the broadcast

Returns | Description
--- | --- 
`int` | number of message recipients


##### <a id='clearrecipes'></a>public  function __clearRecipes__()

_Clears the list of crafting recipes._

Returns | 
--- | 
`void` |


##### <a id='addrecipe'></a>public  function __addRecipe__(recipe)

_Adds a recipe to the crafting manager._

Argument | Type | Description  
--- | --- | --- 
recipe | [`Recipe`](inventory/Recipe.md) | the recipe to add

Returns | Description
--- | --- 
`boolean` | true if the recipe was added, false if it wasn't for some reason


##### <a id='configuredbconfig'></a>public  function __configureDbConfig__(config)

_Populates a given `ServerConfig` with values attributes to this server._

Argument | Type | Description  
--- | --- | --- 
config | `ServerConfig` | the server config to populate

Returns | 
--- | 
`void` |


##### <a id='broadcastmessage'></a>public  function __broadcastMessage__(message)

_Broadcast a message to all players. <p> This is the same as calling {@link #broadcast(java.lang.String, java.lang.String)} to `#BROADCAST_CHANNEL_USERS`_

Argument | Type | Description  
--- | --- | --- 
message | `String` | the message

Returns | Description
--- | --- 
`int` | the number of players


##### <a id='createworld'></a>public  function __createWorld__(creator)

_Creates or loads a world with the given name using the specified options. <p> If the world is already loaded, it will just return the equivalent of getWorld(creator.name())._

Argument | Type | Description  
--- | --- | --- 
creator | [`WorldCreator`](WorldCreator.md) | the options to use when creating the world

Returns | Description
--- | --- 
`World` | newly created or loaded world


##### <a id='resetrecipes'></a>public  function __resetRecipes__()

_Resets the list of crafting recipes to the default._

Returns | 
--- | 
`void` |


##### <a id='getmap'></a>public  function __getMap__(id)
_Deprecated: Magic value_

_Gets the map from the given item ID._

Argument | Type | Description  
--- | --- | --- 
id | `short` | the id of the map to get

Returns | Description
--- | --- 
[`MapView`](map/MapView.md) | a map view if it exists, or null otherwise


##### <a id='getplayer'></a>public  function __getPlayer__(name)
_Deprecated: Use {@link #getPlayer(UUID)} as player names are no longer guaranteed to be unique_

_Gets a player object by the given username. <p> This method may not return objects for offline players._

Argument | Type | Description  
--- | --- | --- 
name | `String` | the name to look up

Returns | Description
--- | --- 
`Player` | a player if one was found, null otherwise


##### <a id='getplayerexact'></a>public  function __getPlayerExact__(name)
_Deprecated: Use {@link #getPlayer(UUID)} as player names are no longer guaranteed to be unique_

_Gets the player with the exact given name, case insensitive._

Argument | Type | Description  
--- | --- | --- 
name | `String` | Exact name of the player to retrieve

Returns | Description
--- | --- 
`Player` | a player object if one was found, null otherwise


##### <a id='getofflineplayer'></a>public  function __getOfflinePlayer__(id)

_Gets the player by the given UUID, regardless if they are offline or online. <p> This will return an object even if the player does not exist. To this method, all players will exist._

Argument | Type | Description  
--- | --- | --- 
id | `UUID` | the UUID of the player to retrieve

Returns | Description
--- | --- 
`OfflinePlayer` | an offline player


##### <a id='getofflineplayer'></a>public  function __getOfflinePlayer__(name)
_Deprecated: Persistent storage of users should be by UUID as names are no longer unique past a single session._

_Gets the player by the given name, regardless if they are offline or online. <p> This method may involve a blocking web request to get the UUID for the given name. <p> This will return an object even if the player does not exist. To this method, all players will exist._

Argument | Type | Description  
--- | --- | --- 
name | `String` | the name the player to retrieve

Returns | Description
--- | --- 
`OfflinePlayer` | an offline player


##### <a id='getplugincommand'></a>public  function __getPluginCommand__(name)

_Gets a [`PluginCommand`](command/PluginCommand.md) with the given name or alias._

Argument | Type | Description  
--- | --- | --- 
name | `String` | the name of the command to retrieve

Returns | Description
--- | --- 
[`PluginCommand`](command/PluginCommand.md) | a plugin command if found, null otherwise


##### <a id='getplayer'></a>public  function __getPlayer__(id)

_Gets the player with the given UUID._

Argument | Type | Description  
--- | --- | --- 
id | `UUID` | UUID of the player to retrieve

Returns | Description
--- | --- 
`Player` | a player object if one was found, null otherwise


##### <a id='getrecipesfor'></a>public  function __getRecipesFor__(result)

_Get a list of all recipes for a given item. The stack size is ignored in comparisons. If the durability is -1, it will match any data value._

Argument | Type | Description  
--- | --- | --- 
result | `ItemStack` | the item to match against recipe results

Returns | Description
--- | --- 
`List<Recipe>` | a list of recipes with the given result


##### <a id='unloadworld'></a>public  function __unloadWorld__(name, save)

_Unloads a world with the given name._

Argument | Type | Description  
--- | --- | --- 
name | `String` | Name of the world to unload
save | `boolean` | whether to save the chunks before unloading

Returns | Description
--- | --- 
`boolean` | true if successful, false otherwise


##### <a id='haswhitelist'></a>public  function __hasWhitelist__()

_Gets whether this server has a whitelist or not._

Returns | Description
--- | --- 
`boolean` | whether this server has a whitelist or not


##### <a id='getworld'></a>public  function __getWorld__(uid)

_Gets the world from the given Unique ID._

Argument | Type | Description  
--- | --- | --- 
uid | `UUID` | a unique-id of the world to retrieve

Returns | Description
--- | --- 
`World` | a world with the given Unique ID, or null if none exists


##### <a id='getworld'></a>public  function __getWorld__(name)

_Gets the world with the given name._

Argument | Type | Description  
--- | --- | --- 
name | `String` | the name of the world to retrieve

Returns | Description
--- | --- 
`World` | a world with the given name, or null if none exists


##### <a id='unloadworld'></a>public  function __unloadWorld__(world, save)

_Unloads the given world._

Argument | Type | Description  
--- | --- | --- 
world | `World` | the world to unload
save | `boolean` | whether to save the chunks before unloading

Returns | Description
--- | --- 
`boolean` | true if successful, false otherwise


##### <a id='ishardcore'></a>public  function __isHardcore__()

_Gets whether the server is in hardcore mode or not._

Returns | Description
--- | --- 
`boolean` | true if the server mode is hardcore, false otherwise


##### <a id='reloadwhitelist'></a>public  function __reloadWhitelist__()

_Reloads the whitelist from disk._

Returns | 
--- | 
`void` |


##### <a id='saveplayers'></a>public  function __savePlayers__()

_Writes loaded players to disk._

Returns | 
--- | 
`void` |


##### <a id='recipeiterator'></a>public  function __recipeIterator__()

_Get an iterator through the list of crafting recipes._

Returns | Description
--- | --- 
`Iterator<Recipe>` | an iterator


##### <a id='reload'></a>public  function __reload__()

_Reloads the server, refreshing settings and plugin information._

Returns | 
--- | 
`void` |


##### <a id='matchplayer'></a>public  function __matchPlayer__(name)
_Deprecated: Use {@link #getPlayer(UUID)} as player names are no longer guaranteed to be unique_

_Attempts to match any players with the given name, and returns a list of all possibly matches. <p> This list is not sorted in any particular order. If an exact match is found, the returned list will only contain a single result._

Argument | Type | Description  
--- | --- | --- 
name | `String` | the (partial) name to match

Returns | Description
--- | --- 
`List<Player>` | list of all possible players


##### <a id='shutdown'></a>public  function __shutdown__()

_Shutdowns the server, stopping everything._

Returns | 
--- | 
`void` |


##### <a id='unbanip'></a>public  function __unbanIP__(address)

_Unbans the specified address from the server._

Argument | Type | Description  
--- | --- | --- 
address | `String` | the IP address to unban

Returns | 
--- | 
`void` |


##### <a id='useexactloginlocation'></a>public  function __useExactLoginLocation__()

_useExactLoginLocation method_

Returns | 
--- | 
`boolean` |


---

### Public Fields for [`Server`](Server.md)

##### <a id='broadcast'></a>public static final var __BROADCAST__

_Used for all administrative messages, such as an operator using a command. <p> For use in {@link #broadcast(java.lang.String, java.lang.String)}._

>Returns
>  `String`

##### <a id='broadcast'></a>public static final var __BROADCAST__

_Used for all announcement messages, such as informing users that a player has joined. <p> For use in {@link #broadcast(java.lang.String, java.lang.String)}._

>Returns
>  `String`

---

### Public Properties for [`PluginMessageRecipient`](plugin/messaging/PluginMessageRecipient.md)

##### <a id='listeningpluginchannels'></a>public  readonly property __ListeningPluginChannels__

_Get: Gets a set containing all the Plugin Channels that this client is listening on._

Get | Description
--- | --- 
`Set<String>` | Set containing all the channels that this client may accept.



---

### Public Methods for [`PluginMessageRecipient`](plugin/messaging/PluginMessageRecipient.md)

##### <a id='sendpluginmessage'></a>public  function __sendPluginMessage__(source, channel)

_Sends this recipient a Plugin Message on the specified outgoing channel. <p> The message may not be larger than `Messenger#MAX_MESSAGE_SIZE` bytes, and the plugin must be registered to send messages on the specified channel._

Argument | Type | Description  
--- | --- | --- 
source | [`Plugin`](plugin/Plugin.md) | The plugin that sent this message.
channel | `String` | The channel to send this message on.

Returns | 
--- | 
`void` |


---


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

