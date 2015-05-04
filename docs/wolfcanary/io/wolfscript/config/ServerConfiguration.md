## ServerConfiguration __class__

>io.wolfscript.config.ServerConfiguration
>Implements [`ConfigurationContainer`](ConfigurationContainer.md)

---

### Class Overview

Server Configuration Container

Method | Type   
--- | :--- 
new __ServerConfiguration__(path) <br> _ServerConfiguration constructor_ | _constructor_
 readonly property __PluginDevModeEnabled__ <br> _Get: Gets the plugin dev mode state_ | `boolean`
 readonly property __AnnounceAchievements__ <br> _AnnounceAchievements property_ | `boolean`
 readonly property __DefaultBannedMessage__ <br> _Get: Gets the ban default message_ | `String`
 readonly property __BanExpireDateMessage__ <br> _Get: Gets the ban expiration date message_ | `String`
 readonly property __ChatFormat__ <br> _Get: Gets the chat format placeholder_ | `String`
 readonly property __BungeecordSupport__ <br> _Get: Checks if bungeecord support is enabled_ | `boolean`
 readonly property __CommandBlockGroupName__ <br> _Get: Gets the group name to apply to the Command Block for permissions_ | `String`
 readonly property __MaxTickTime__ <br> _Get: Gets the max time a tick may take_ | `int`
 readonly property __DefaultMaxWorldSize__ <br> _Get: Gets the default max world size_ | `int`
 readonly property __DatasourceType__ <br> _Get: Get datasource type_ | `String`
 readonly property __DateFormat__ <br> _Get: Gets the date format to use with timestamps_ | `String`
 readonly property __DefaultWorldName__ <br> _Get: Get the default world name defined in the config_ | `String`
 readonly property __NetworkCompressionThreshold__ <br> _Get: Gets the Network Compression Threshold_ | `int`
 readonly property __BindIp__ <br> _Get: Get the IP address which to server binds to_ | `String`
 readonly property __File__ <br> _Get: Get the configuration file_ | `PropertiesFile`
 readonly property __FlightDetectTicks__ <br> _Get: Gets the number of ticks a Player is allowed to float before triggering the anti-flying_ | `int`
 readonly property __LoggerLevel__ <br> _Get: Gets the Level of message to log_ | `Level`
 readonly property __MaxPlayers__ <br> _Get: Get maximum amount of player allowed online_ | `int`
 readonly property __Motd__ <br> _Get: Get the message of the day, the message shown in the server list._ | `String`
 readonly property __PlayerlistTicks__ <br> _Get: Get the number of ticks between playerlist updates_ | `int`
  property __PlayerIdleTimeout__ <br> _Get: Gets the time in minutes before a player is kicked for idling<br>Set: Sets the time in minutes before a player is kicked for idling_ | `int`
 readonly property __PlayerlistAutoUpdate__ <br> _Get: Get whether the player list is auto-updated_ | `boolean`
 readonly property __ShowUnknownCommand__ <br> _Get: Get whether 'Unknown Command' must be shown when an unknown command is used._ | `boolean`
 readonly property __QueryPort__ <br> _Get: Get the port used for query_ | `int`
 readonly property __RconPort__ <br> _Get: Get the port used for remote control_ | `int`
 readonly property __RconPassword__ <br> _Get: Get the password used for remote control_ | `String`
 readonly property __ReservelistMessage__ <br> _Get: Get the message to be displayed when someone is not on the reserve list._ | `String`
 readonly property __ServerFullMessage__ <br> _Get: Gets the message to send to a connecting player when the Server is full_ | `String`
 readonly property __Port__ <br> _Get: Get the port number used to receive player-connections_ | `int`
 readonly property __ServerLocale__ <br> _Get: Gets the server's default locale_ | `String`
 readonly property __WorldCacheTimeout__ <br> _Get: Gets the World Cache timeout_ | `long`
 readonly property __WhitelistMessage__ <br> _Get: Get the message shown to players who are not whitelisted._ | `String`
 readonly property __SpamProtectionLevel__ <br> _Get: Gets the spam protection level_ | `String`
 readonly property __StrictSignCharacterChecks__ <br> _Get: Gets whether characters on signs are checked for validity or not_ | `boolean`
 readonly property __TexturePack__ <br> _Get: Server Texture/Resource Pack name_ | `String`
 readonly property __ViewDistance__ <br> _Get: Get the view distance of clients: maximum radius of loaded chunks around a player_ | `int`
 function __isQueryEnabled__() <br> _Get whether server query-ing is enabled_ | `boolean`
 function __allowEnchantmentStacking__() <br> _Checks if items are allowed to be stack with enchantments applied_ | `boolean`
 function __isPlayerListEnabled__() <br> _Get whether the player list is enabled._ | `boolean`
 function __isCommandBlockEnabled__() <br> _Checks if the Command Block is enabled or not_ | `boolean`
 function __isOnlineMode__() <br> _Whether the server is in online mode._ | `boolean`
 function __isFlightKickEnabled__() <br> _Checks if players will be kicked when floating too long._ | `boolean`
 function __isCommandBlockOpped__() <br> _Gets whether the Command Block is considered Operator_ | `boolean`
 function __isCommandBlockSilent__() <br> _Gets whether the Command Block is silent_ | `boolean`
 function __isDeathMessageEnabled__() <br> _Get whether the death message is enabled_ | `boolean`
 function __isDebugMode__() <br> _Whether this server is in debug mode._ | `boolean`
 function __isPlayerlistColorsEnabled__() <br> _Get whether playerlist colors are enabled._ | `boolean`
 function __isRconEnabled__() <br> _Whether Remote Control (RCON) is enabled._ | `boolean`
 function __isReservelistEnabled__() <br> _Get whether the reservelist is enabled_ | `boolean`
 function __isSaveHomesEnabled__() <br> _Get whether home-saving is enabled._ | `boolean`
 function __isSnooperEnabled__() <br> _Gets whether the Mojang snooper is enabled or not_ | `boolean`
 function __isWhitelistEnabled__() <br> _Get whether the whitelist is enabled._ | `boolean`
 function __isWorldCacheTimerEnabled__() <br> _Checks if the World Cache Timer is enabled_ | `boolean`
 function __reload__() <br> _Reloads the configuration file_ | `void`
 function __updateLang__() <br> _Gets whether to update the Server Lang files or not_ | `boolean`



---

### Public Constructors for [`ServerConfiguration`](ServerConfiguration.md)

##### <a id='serverconfiguration'></a>new __ServerConfiguration__(path) 

_ServerConfiguration constructor_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument

---

### Public Properties for [`ServerConfiguration`](ServerConfiguration.md)

##### <a id='plugindevmodeenabled'></a>public  readonly property __PluginDevModeEnabled__

_Get: Gets the plugin dev mode state_

Get | Description
--- | --- 
`boolean` | `true` if enabled; `false` if not



##### <a id='announceachievements'></a>public  readonly property __AnnounceAchievements__

_AnnounceAchievements property_

Get | 
--- | 
`boolean` |



##### <a id='defaultbannedmessage'></a>public  readonly property __DefaultBannedMessage__

_Get: Gets the ban default message_

Get | Description
--- | --- 
`String` | ban default message



##### <a id='banexpiredatemessage'></a>public  readonly property __BanExpireDateMessage__

_Get: Gets the ban expiration date message_

Get | Description
--- | --- 
`String` | ban expiration date message



##### <a id='chatformat'></a>public  readonly property __ChatFormat__

_Get: Gets the chat format placeholder_

Get | Description
--- | --- 
`String` | chat format



##### <a id='bungeecordsupport'></a>public  readonly property __BungeecordSupport__

_Get: Checks if bungeecord support is enabled_

Get | Description
--- | --- 
`boolean` | `true` if enabled; `false` if not



##### <a id='commandblockgroupname'></a>public  readonly property __CommandBlockGroupName__

_Get: Gets the group name to apply to the Command Block for permissions_

Get | Description
--- | --- 
`String` | command block group name



##### <a id='maxticktime'></a>public  readonly property __MaxTickTime__

_Get: Gets the max time a tick may take_

Get | Description
--- | --- 
`int` | max tick time



##### <a id='defaultmaxworldsize'></a>public  readonly property __DefaultMaxWorldSize__

_Get: Gets the default max world size_

Get | Description
--- | --- 
`int` | default max world size



##### <a id='datasourcetype'></a>public  readonly property __DatasourceType__

_Get: Get datasource type_

Get | Description
--- | --- 
`String` | datasource type



##### <a id='dateformat'></a>public  readonly property __DateFormat__

_Get: Gets the date format to use with timestamps_

Get | Description
--- | --- 
`String` | timestamp date format



##### <a id='defaultworldname'></a>public  readonly property __DefaultWorldName__

_Get: Get the default world name defined in the config_

Get | Description
--- | --- 
`String` | default world name



##### <a id='networkcompressionthreshold'></a>public  readonly property __NetworkCompressionThreshold__

_Get: Gets the Network Compression Threshold_

Get | Description
--- | --- 
`int` | network compression threshold



##### <a id='bindip'></a>public  readonly property __BindIp__

_Get: Get the IP address which to server binds to_

Get | Description
--- | --- 
`String` | server ip



##### <a id='file'></a>public  readonly property __File__

_Get: Get the configuration file_

Get | 
--- | 
`PropertiesFile` |



##### <a id='flightdetectticks'></a>public  readonly property __FlightDetectTicks__

_Get: Gets the number of ticks a Player is allowed to float before triggering the anti-flying_

Get | Description
--- | --- 
`int` | the number of ticks



##### <a id='loggerlevel'></a>public  readonly property __LoggerLevel__

_Get: Gets the Level of message to log_

Get | Description
--- | --- 
`Level` | logger level



##### <a id='maxplayers'></a>public  readonly property __MaxPlayers__

_Get: Get maximum amount of player allowed online_

Get | Description
--- | --- 
`int` | max players



##### <a id='motd'></a>public  readonly property __Motd__

_Get: Get the message of the day, the message shown in the server list._

Get | Description
--- | --- 
`String` | A string containing the message



##### <a id='playerlistticks'></a>public  readonly property __PlayerlistTicks__

_Get: Get the number of ticks between playerlist updates_

Get | Description
--- | --- 
`int` | playerlist ticks



##### <a id='playeridletimeout'></a>public   property __PlayerIdleTimeout__

_Get: Gets the time in minutes before a player is kicked for idling<br>Set: Sets the time in minutes before a player is kicked for idling_

Get | Description
--- | --- 
`int` | player idle timeout

Set | Type | Description  
--- | --- | --- 
timeout | `int` | the idle timeout


##### <a id='playerlistautoupdate'></a>public  readonly property __PlayerlistAutoUpdate__

_Get: Get whether the player list is auto-updated_

Get | Description
--- | --- 
`boolean` | true if auto-updated, false otherwise. Default is false.



##### <a id='showunknowncommand'></a>public  readonly property __ShowUnknownCommand__

_Get: Get whether 'Unknown Command' must be shown when an unknown command is used._

Get | Description
--- | --- 
`boolean` | True when enabled, false otherwise. Default is true.



##### <a id='queryport'></a>public  readonly property __QueryPort__

_Get: Get the port used for query_

Get | Description
--- | --- 
`int` | query port



##### <a id='rconport'></a>public  readonly property __RconPort__

_Get: Get the port used for remote control_

Get | Description
--- | --- 
`int` | RCON port



##### <a id='rconpassword'></a>public  readonly property __RconPassword__

_Get: Get the password used for remote control_

Get | Description
--- | --- 
`String` | RCON password



##### <a id='reservelistmessage'></a>public  readonly property __ReservelistMessage__

_Get: Get the message to be displayed when someone is not on the reserve list._

Get | Description
--- | --- 
`String` | A string containing the message.



##### <a id='serverfullmessage'></a>public  readonly property __ServerFullMessage__

_Get: Gets the message to send to a connecting player when the Server is full_

Get | Description
--- | --- 
`String` | server full message



##### <a id='port'></a>public  readonly property __Port__

_Get: Get the port number used to receive player-connections_

Get | Description
--- | --- 
`int` | port



##### <a id='serverlocale'></a>public  readonly property __ServerLocale__

_Get: Gets the server's default locale_

Get | Description
--- | --- 
`String` | default server locale



##### <a id='worldcachetimeout'></a>public  readonly property __WorldCacheTimeout__

_Get: Gets the World Cache timeout_

Get | Description
--- | --- 
`long` | world cache timeout



##### <a id='whitelistmessage'></a>public  readonly property __WhitelistMessage__

_Get: Get the message shown to players who are not whitelisted._

Get | Description
--- | --- 
`String` | A string containing the message.



##### <a id='spamprotectionlevel'></a>public  readonly property __SpamProtectionLevel__

_Get: Gets the spam protection level<br/> default - on for restricted users; off - totally off; all - on for all users_

Get | Description
--- | --- 
`String` | the spam protection level



##### <a id='strictsigncharacterchecks'></a>public  readonly property __StrictSignCharacterChecks__

_Get: Gets whether characters on signs are checked for validity or not_

Get | Description
--- | --- 
`boolean` | `true` if strict checks are preformed; `false` if not



##### <a id='texturepack'></a>public  readonly property __TexturePack__

_Get: Server Texture/Resource Pack name_

Get | Description
--- | --- 
`String` | the server texture/resource pack name



##### <a id='viewdistance'></a>public  readonly property __ViewDistance__

_Get: Get the view distance of clients: maximum radius of loaded chunks around a player_

Get | Description
--- | --- 
`int` | view distance



---

### Public Methods for [`ServerConfiguration`](ServerConfiguration.md)

##### <a id='isqueryenabled'></a>public  function __isQueryEnabled__()

_Get whether server query-ing is enabled_

Returns | Description
--- | --- 
`boolean` | `true` if enabled; `false` if not


##### <a id='allowenchantmentstacking'></a>public  function __allowEnchantmentStacking__()

_Checks if items are allowed to be stack with enchantments applied_

Returns | Description
--- | --- 
`boolean` | `true` if allowed; `false` if not


##### <a id='isplayerlistenabled'></a>public  function __isPlayerListEnabled__()

_Get whether the player list is enabled._

Returns | Description
--- | --- 
`boolean` | true when enabled, false otherwise. Default is true.


##### <a id='iscommandblockenabled'></a>public  function __isCommandBlockEnabled__()

_Checks if the Command Block is enabled or not_

Returns | Description
--- | --- 
`boolean` | `true` if enabled; `false` if not


##### <a id='isonlinemode'></a>public  function __isOnlineMode__()

_Whether the server is in online mode. When a server is in online mode, all players are verificated against the servers of Mojang. This will ensure all players have paid. When allowing unpaid users, the server is vulnerable to griefing and attacks._

Returns | Description
--- | --- 
`boolean` | `true` if online mode is enabled; `false` if not


##### <a id='isflightkickenabled'></a>public  function __isFlightKickEnabled__()

_Checks if players will be kicked when floating too long._

Returns | Description
--- | --- 
`boolean` | `true` if kick enabled; `false` if not


##### <a id='iscommandblockopped'></a>public  function __isCommandBlockOpped__()

_Gets whether the Command Block is considered Operator_

Returns | Description
--- | --- 
`boolean` | `true` if opped; `false` otherwise


##### <a id='iscommandblocksilent'></a>public  function __isCommandBlockSilent__()

_Gets whether the Command Block is silent_

Returns | Description
--- | --- 
`boolean` | `true` if silent; `false` otherwise


##### <a id='isdeathmessageenabled'></a>public  function __isDeathMessageEnabled__()

_Get whether the death message is enabled_

Returns | Description
--- | --- 
`boolean` | true when enabled; false otherwise


##### <a id='isdebugmode'></a>public  function __isDebugMode__()

_Whether this server is in debug mode. Use debug mode when developing plugins, WolfLib or WolfScript._

Returns | Description
--- | --- 
`boolean` | `true` if debug mode enabled; `false` if not


##### <a id='isplayerlistcolorsenabled'></a>public  function __isPlayerlistColorsEnabled__()

_Get whether playerlist colors are enabled. Note that using colors in the playerlist breaks usage of playername-completion in chat._

Returns | Description
--- | --- 
`boolean` | true when enabled, false otherwise. Default is true.


##### <a id='isrconenabled'></a>public  function __isRconEnabled__()

_Whether Remote Control (RCON) is enabled._

Returns | Description
--- | --- 
`boolean` | `true` if enabled; `false` if not


##### <a id='isreservelistenabled'></a>public  function __isReservelistEnabled__()

_Get whether the reservelist is enabled_

Returns | Description
--- | --- 
`boolean` | true when enabled, false otherwise. Default is false.


##### <a id='issavehomesenabled'></a>public  function __isSaveHomesEnabled__()

_Get whether home-saving is enabled._

Returns | Description
--- | --- 
`boolean` | true when enabled, false otherwise. Default is true.


##### <a id='issnooperenabled'></a>public  function __isSnooperEnabled__()

_Gets whether the Mojang snooper is enabled or not_

Returns | Description
--- | --- 
`boolean` | `true` if enabled; `false` if not


##### <a id='iswhitelistenabled'></a>public  function __isWhitelistEnabled__()

_Get whether the whitelist is enabled._

Returns | Description
--- | --- 
`boolean` | True when enabled, false otherwise. Default is false.


##### <a id='isworldcachetimerenabled'></a>public  function __isWorldCacheTimerEnabled__()

_Checks if the World Cache Timer is enabled_

Returns | Description
--- | --- 
`boolean` | `true` if enabled; `false` if not


##### <a id='reload'></a>public  function __reload__()

_Reloads the configuration file_

Returns | 
--- | 
`void` |


##### <a id='updatelang'></a>public  function __updateLang__()

_Gets whether to update the Server Lang files or not_

Returns | Description
--- | --- 
`boolean` | `true` to update; `false` if not


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

