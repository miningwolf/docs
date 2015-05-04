## CommandList __class__

>io.wolfscript.commandsys.CommandList
>Implements [`CommandListener`](CommandListener.md)

---

### Class Overview

Wolf "native" commands

Method | Type   
--- | :--- 
 writeonly property __HomeCommand__ <br> _HomeCommand property_ | `void`
 writeonly property __block__ <br> _block property_ | `void`
 writeonly property __WarpCommand__ <br> _WarpCommand property_ | `void`
 function __whitelistAddCommand__(caller) <br> _whitelistAddCommand method_ | `void`
 function __groupBase__(caller) <br> _groupBase method_ | `void`
 function __groupAdd__(caller) <br> _groupAdd method_ | `void`
 function __deleteworldTabComplete__(caller) <br> _deleteworldTabComplete method_ | `List<String>`
 function __deleteworld__(caller) <br> _deleteworld method_ | `void`
 function __createWorldTabComplete__(caller) <br> _createWorldTabComplete method_ | `List<String>`
 function __createWorld__(caller) <br> _createWorld method_ | `void`
 function __delWarpCommand__(caller) <br> _delWarpCommand method_ | `void`
 function __give__(caller) <br> _give method_ | `void`
 function __gamerule__(caller) <br> _gamerule method_ | `void`
 function __gamemode__(caller) <br> _gamemode method_ | `void`
 function __fill__(caller) <br> _fill method_ | `void`
 function __execute__(caller) <br> _execute method_ | `void`
 function __entitydata__(caller) <br> _entitydata method_ | `void`
 function __enchant__(caller) <br> _enchant method_ | `void`
 function __emote__(caller) <br> _emote method_ | `void`
 function __effect__(caller) <br> _effect method_ | `void`
 function __difficulty__(caller) <br> _difficulty method_ | `void`
 function __defaultspawnpoint__(caller) <br> _defaultspawnpoint method_ | `void`
 function __defaultgamemode__(caller) <br> _defaultgamemode method_ | `void`
 function __compassCommand__(caller) <br> _compassCommand method_ | `void`
 function __getPosCommand__(caller) <br> _getPosCommand method_ | `void`
 function __godCommand__(caller) <br> _godCommand method_ | `void`
 function __debug__(caller) <br> _debug method_ | `void`
 function __clone__(caller) <br> _clone method_ | `void`
 function __clear__(caller) <br> _clear method_ | `void`
 function __broadcast__(caller) <br> _broadcast method_ | `void`
 function __blockdata__(caller) <br> _blockdata method_ | `void`
 function __achievement__(caller) <br> _achievement method_ | `void`
 function __disablePluginCommand__(caller) <br> _disablePluginCommand method_ | `void`
 function __enablePluginCommand__(caller) <br> _enablePluginCommand method_ | `void`
 function __deopTabComplete__(caller) <br> _deopTabComplete method_ | `List<String>`
 function __deop__(caller) <br> _deop method_ | `void`
 function __createVanillaCommand__(caller) <br> _createVanillaCommand method_ | `void`
 function __banTabComplete__(caller) <br> _banTabComplete method_ | `List<String>`
 function __banCommand__(caller) <br> _banCommand method_ | `void`
 function __groupCheck__(caller) <br> _groupCheck method_ | `void`
 function __matchOnlinePlayer__(caller) <br> _matchOnlinePlayer method_ | `List<String>`
 function __matchKnownPlayer__(caller) <br> _matchKnownPlayer method_ | `List<String>`
 function __loadWorld__(caller) <br> _loadWorld method_ | `void`
 function __groupmodAddTabComplete__(caller) <br> _groupmodAddTabComplete method_ | `List<String>`
 function __groupPerms__(caller) <br> _groupPerms method_ | `void`
 function __groupmodPermissionTabComplete__(caller) <br> _groupmodPermissionTabComplete method_ | `List<String>`
 function __groupPermissionsAdd__(caller) <br> _groupPermissionsAdd method_ | `void`
 function __groupPermissionsRemove__(caller) <br> _groupPermissionsRemove method_ | `void`
 function __listWarpsCommand__(caller) <br> _listWarpsCommand method_ | `void`
 function __homeCommand__(caller) <br> _homeCommand method_ | `void`
 function __groupPermissionsCheck__(caller) <br> _groupPermissionsCheck method_ | `void`
 function __groupmodPermissionAddRemoveCheckTabComplete__(caller) <br> _groupmodPermissionAddRemoveCheckTabComplete method_ | `List<String>`
 function __groupPermissionsList__(caller) <br> _groupPermissionsList method_ | `void`
 function __helpCommand__(caller) <br> _helpCommand method_ | `void`
 function __ipBanCommand__(caller) <br> _ipBanCommand method_ | `void`
 function __kickCommand__(caller) <br> _kickCommand method_ | `void`
 function __kitCommand__(caller) <br> _kitCommand method_ | `void`
 function __kitCreateCommand__(caller) <br> _kitCreateCommand method_ | `void`
 function __kitGiveCommand__(caller) <br> _kitGiveCommand method_ | `void`
 function __kitListCommand__(caller) <br> _kitListCommand method_ | `void`
 function __kitDeleteCommand__(caller) <br> _kitDeleteCommand method_ | `void`
 function __kitTabComplete__(caller) <br> _kitTabComplete method_ | `List<String>`
 function __listPluginsCommand__(caller) <br> _listPluginsCommand method_ | `void`
 function __groupFlush__(caller) <br> _groupFlush method_ | `void`
 function __groupList__(caller) <br> _groupList method_ | `void`
 function __groupRemove__(caller) <br> _groupRemove method_ | `void`
 function __groupRename__(caller) <br> _groupRename method_ | `void`
 function __groupPrefix__(caller) <br> _groupPrefix method_ | `void`
 function __groupParent__(caller) <br> _groupParent method_ | `void`
 function __groupmodParentTabComplete__(caller) <br> _groupmodParentTabComplete method_ | `List<String>`
 function __killCommand__(caller) <br> _killCommand method_ | `void`
 function __groupBaseTabComplete__(caller) <br> _groupBaseTabComplete method_ | `List<String>`
 function __spawnpoint__(caller) <br> _spawnpoint method_ | `void`
 function __matchPluginName__(caller) <br> _matchPluginName method_ | `List<String>`
 function __spreadplayers__(caller) <br> _spreadplayers method_ | `void`
 function __playerRemove__(caller) <br> _playerRemove method_ | `void`
 function __playerGroupSet__(caller) <br> _playerGroupSet method_ | `void`
 function __mobspawnerTabComplete__(caller) <br> _mobspawnerTabComplete method_ | `List<String>`
 function __mobspawnercheck__(caller) <br> _mobspawnercheck method_ | `void`
 function __mobspawnerset__(caller) <br> _mobspawnerset method_ | `void`
 function __mobspawner__(caller) <br> _mobspawner method_ | `void`
 function __mobTabComplete__(caller) <br> _mobTabComplete method_ | `List<String>`
 function __mobcount__(caller) <br> _mobcount method_ | `void`
 function __mobclear__(caller) <br> _mobclear method_ | `void`
 function __mob__(caller) <br> _mob method_ | `void`
 function __matchWorldNameDimension__(caller) <br> _matchWorldNameDimension method_ | `List<String>`
 function __playerGroupAdd__(caller) <br> _playerGroupAdd method_ | `void`
 function __playerGroupList__(caller) <br> _playerGroupList method_ | `void`
 function __playerGroupCheck__(caller) <br> _playerGroupCheck method_ | `void`
 function __playerGroupRemove__(caller) <br> _playerGroupRemove method_ | `void`
 function __matchWarpNames__(caller) <br> _matchWarpNames method_ | `List<String>`
 function __playerPrefix__(caller) <br> _playerPrefix method_ | `void`
 function __playerPermissions__(caller) <br> _playerPermissions method_ | `void`
 function __playerAddTabComplete__(caller) <br> _playerAddTabComplete method_ | `List<String>`
 function __playerAdd__(caller) <br> _playerAdd method_ | `void`
 function __playerBaseTabComplete__(caller) <br> _playerBaseTabComplete method_ | `List<String>`
 function __playerBase__(caller) <br> _playerBase method_ | `void`
 function __playerPermissionsAdd__(caller) <br> _playerPermissionsAdd method_ | `void`
 function __matchToGroupTabComplete__(caller) <br> _matchToGroupTabComplete method_ | `List<String>`
 function __playerPermissionsRemove__(caller) <br> _playerPermissionsRemove method_ | `void`
 function __playerListCommand__(caller) <br> _playerListCommand method_ | `void`
 function __playerGroupTabComplete__(caller) <br> _playerGroupTabComplete method_ | `List<String>`
 function __oplist__(caller) <br> _oplist method_ | `void`
 function __playerGroup__(caller) <br> _playerGroup method_ | `void`
 function __op__(caller) <br> _op method_ | `void`
 function __muteCommand__(caller) <br> _muteCommand method_ | `void`
 function __motdCommand__(caller) <br> _motdCommand method_ | `void`
 function __matchWorldNamePlayerName__(caller) <br> _matchWorldNamePlayerName method_ | `List<String>`
 function __playerPermissionsCheck__(caller) <br> _playerPermissionsCheck method_ | `void`
 function __playerPermissionsList__(caller) <br> _playerPermissionsList method_ | `void`
 function __message__(caller) <br> _message method_ | `void`
 function __messageraw__(caller) <br> _messageraw method_ | `void`
 function __particle__(caller) <br> _particle method_ | `void`
 function __whitelistTabComplete__(caller) <br> _whitelistTabComplete method_ | `List<String>`
 function __playsound__(caller) <br> _playsound method_ | `void`
 function __playermodGroupAddRemoveSet__(caller) <br> _playermodGroupAddRemoveSet method_ | `List<String>`
 function __playerinfo__(caller) <br> _playerinfo method_ | `void`
 function __playermodPermissionRemove__(caller) <br> _playermodPermissionRemove method_ | `List<String>`
 function __whitelistReloadCommand__(caller) <br> _whitelistReloadCommand method_ | `void`
 function __reservelistCommand__(caller) <br> _reservelistCommand method_ | `void`
 function __reloadCommand__(caller) <br> _reloadCommand method_ | `void`
 function __reservelistAdd__(caller) <br> _reservelistAdd method_ | `void`
 function __reloadPluginCommand__(caller) <br> _reloadPluginCommand method_ | `void`
 function __replaceitem__(caller) <br> _replaceitem method_ | `void`
 function __worldCreate__(caller) <br> _worldCreate method_ | `void`
 function __scoreboard__(caller) <br> _scoreboard method_ | `void`
 function __reservelistRemove__(caller) <br> _reservelistRemove method_ | `void`
 function __reservelistShow__(caller) <br> _reservelistShow method_ | `void`
 function __reservelistTabComplete__(caller) <br> _reservelistTabComplete method_ | `List<String>`
 function __saveall__(caller) <br> _saveall method_ | `void`
 function __saveoff__(caller) <br> _saveoff method_ | `void`
 function __saveon__(caller) <br> _saveon method_ | `void`
 function __whitelistShowCommand__(caller) <br> _whitelistShowCommand method_ | `void`
 function __teleport__(caller) <br> _teleport method_ | `void`
 function __stopCommand__(caller) <br> _stopCommand method_ | `void`
 function __sysinfo__(caller) <br> _sysinfo method_ | `void`
 function __spawnCommand__(caller) <br> _spawnCommand method_ | `void`
 function __stats__(caller) <br> _stats method_ | `void`
 function __summon__(caller) <br> _summon method_ | `void`
 function __unloadWorld__(caller) <br> _unloadWorld method_ | `void`
 function __warpUse__(caller) <br> _warpUse method_ | `void`
 function __testforblock__(caller) <br> _testforblock method_ | `void`
 function __title__(caller) <br> _title method_ | `void`
 function __testfor__(caller) <br> _testfor method_ | `void`
 function __testforblocks__(caller) <br> _testforblocks method_ | `void`
 function __time__(caller) <br> _time method_ | `void`
 function __unbanCommand__(caller) <br> _unbanCommand method_ | `void`
 function __unbanTabComplete__(caller) <br> _unbanTabComplete method_ | `List<String>`
 function __uptime__(caller) <br> _uptime method_ | `void`
 function __trigger__(caller) <br> _trigger method_ | `void`
 function __toggledownfall__(caller) <br> _toggledownfall method_ | `void`
 function __worldDelete__(caller) <br> _worldDelete method_ | `void`
 function __weather__(caller) <br> _weather method_ | `void`
 function __wolfscriptInfoCommand__(caller) <br> _wolfscriptInfoCommand method_ | `void`
 function __worldLoad__(caller) <br> _worldLoad method_ | `void`
 function __whitelistCommand__(caller) <br> _whitelistCommand method_ | `void`
 function __worldInfo__(caller) <br> _worldInfo method_ | `void`
 function __world__(caller) <br> _world method_ | `void`
 function __whitelistRemoveCommand__(caller) <br> _whitelistRemoveCommand method_ | `void`
 function __worldList__(caller) <br> _worldList method_ | `void`
 function __whitelistDisableCommand__(caller) <br> _whitelistDisableCommand method_ | `void`
 function __whitelistEnableCommand__(caller) <br> _whitelistEnableCommand method_ | `void`
 function __worldUnload__(caller) <br> _worldUnload method_ | `void`
 function __worldborder__(caller) <br> _worldborder method_ | `void`
 function __xp__(caller) <br> _xp method_ | `void`



---


### Public Properties for [`CommandList`](CommandList.md)

##### <a id='homecommand'></a>public  writeonly property __HomeCommand__

_HomeCommand property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument


##### <a id='block'></a>public  writeonly property __block__

_block property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument


##### <a id='warpcommand'></a>public  writeonly property __WarpCommand__

_WarpCommand property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument


---

### Public Methods for [`CommandList`](CommandList.md)

##### <a id='whitelistaddcommand'></a>public  function __whitelistAddCommand__(caller)

_whitelistAddCommand method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='groupbase'></a>public  function __groupBase__(caller)

_groupBase method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='groupadd'></a>public  function __groupAdd__(caller)

_groupAdd method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='deleteworldtabcomplete'></a>public  function __deleteworldTabComplete__(caller)

_deleteworldTabComplete method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`List<String>` |


##### <a id='deleteworld'></a>public  function __deleteworld__(caller)

_deleteworld method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='createworldtabcomplete'></a>public  function __createWorldTabComplete__(caller)

_createWorldTabComplete method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`List<String>` |


##### <a id='createworld'></a>public  function __createWorld__(caller)

_createWorld method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='delwarpcommand'></a>public  function __delWarpCommand__(caller)

_delWarpCommand method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='give'></a>public  function __give__(caller)

_give method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='gamerule'></a>public  function __gamerule__(caller)

_gamerule method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='gamemode'></a>public  function __gamemode__(caller)

_gamemode method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='fill'></a>public  function __fill__(caller)

_fill method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='execute'></a>public  function __execute__(caller)

_execute method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='entitydata'></a>public  function __entitydata__(caller)

_entitydata method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='enchant'></a>public  function __enchant__(caller)

_enchant method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='emote'></a>public  function __emote__(caller)

_emote method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='effect'></a>public  function __effect__(caller)

_effect method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='difficulty'></a>public  function __difficulty__(caller)

_difficulty method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='defaultspawnpoint'></a>public  function __defaultspawnpoint__(caller)

_defaultspawnpoint method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='defaultgamemode'></a>public  function __defaultgamemode__(caller)

_defaultgamemode method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='compasscommand'></a>public  function __compassCommand__(caller)

_compassCommand method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='getposcommand'></a>public  function __getPosCommand__(caller)

_getPosCommand method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='godcommand'></a>public  function __godCommand__(caller)

_godCommand method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='debug'></a>public  function __debug__(caller)

_debug method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='clone'></a>public  function __clone__(caller)

_clone method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='clear'></a>public  function __clear__(caller)

_clear method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='broadcast'></a>public  function __broadcast__(caller)

_broadcast method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='blockdata'></a>public  function __blockdata__(caller)

_blockdata method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='achievement'></a>public  function __achievement__(caller)

_achievement method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='disableplugincommand'></a>public  function __disablePluginCommand__(caller)

_disablePluginCommand method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='enableplugincommand'></a>public  function __enablePluginCommand__(caller)

_enablePluginCommand method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='deoptabcomplete'></a>public  function __deopTabComplete__(caller)

_deopTabComplete method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`List<String>` |


##### <a id='deop'></a>public  function __deop__(caller)

_deop method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='createvanillacommand'></a>public  function __createVanillaCommand__(caller)

_createVanillaCommand method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='bantabcomplete'></a>public  function __banTabComplete__(caller)

_banTabComplete method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`List<String>` |


##### <a id='bancommand'></a>public  function __banCommand__(caller)

_banCommand method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='groupcheck'></a>public  function __groupCheck__(caller)

_groupCheck method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='matchonlineplayer'></a>public  function __matchOnlinePlayer__(caller)

_matchOnlinePlayer method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`List<String>` |


##### <a id='matchknownplayer'></a>public  function __matchKnownPlayer__(caller)

_matchKnownPlayer method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`List<String>` |


##### <a id='loadworld'></a>public  function __loadWorld__(caller)

_loadWorld method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='groupmodaddtabcomplete'></a>public  function __groupmodAddTabComplete__(caller)

_groupmodAddTabComplete method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`List<String>` |


##### <a id='groupperms'></a>public  function __groupPerms__(caller)

_groupPerms method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='groupmodpermissiontabcomplete'></a>public  function __groupmodPermissionTabComplete__(caller)

_groupmodPermissionTabComplete method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`List<String>` |


##### <a id='grouppermissionsadd'></a>public  function __groupPermissionsAdd__(caller)

_groupPermissionsAdd method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='grouppermissionsremove'></a>public  function __groupPermissionsRemove__(caller)

_groupPermissionsRemove method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='listwarpscommand'></a>public  function __listWarpsCommand__(caller)

_listWarpsCommand method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='homecommand'></a>public  function __homeCommand__(caller)

_homeCommand method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='grouppermissionscheck'></a>public  function __groupPermissionsCheck__(caller)

_groupPermissionsCheck method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='groupmodpermissionaddremovechecktabcomplete'></a>public  function __groupmodPermissionAddRemoveCheckTabComplete__(caller)

_groupmodPermissionAddRemoveCheckTabComplete method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`List<String>` |


##### <a id='grouppermissionslist'></a>public  function __groupPermissionsList__(caller)

_groupPermissionsList method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='helpcommand'></a>public  function __helpCommand__(caller)

_helpCommand method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='ipbancommand'></a>public  function __ipBanCommand__(caller)

_ipBanCommand method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='kickcommand'></a>public  function __kickCommand__(caller)

_kickCommand method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='kitcommand'></a>public  function __kitCommand__(caller)

_kitCommand method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='kitcreatecommand'></a>public  function __kitCreateCommand__(caller)

_kitCreateCommand method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='kitgivecommand'></a>public  function __kitGiveCommand__(caller)

_kitGiveCommand method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='kitlistcommand'></a>public  function __kitListCommand__(caller)

_kitListCommand method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='kitdeletecommand'></a>public  function __kitDeleteCommand__(caller)

_kitDeleteCommand method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='kittabcomplete'></a>public  function __kitTabComplete__(caller)

_kitTabComplete method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`List<String>` |


##### <a id='listpluginscommand'></a>public  function __listPluginsCommand__(caller)

_listPluginsCommand method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='groupflush'></a>public  function __groupFlush__(caller)

_groupFlush method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='grouplist'></a>public  function __groupList__(caller)

_groupList method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='groupremove'></a>public  function __groupRemove__(caller)

_groupRemove method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='grouprename'></a>public  function __groupRename__(caller)

_groupRename method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='groupprefix'></a>public  function __groupPrefix__(caller)

_groupPrefix method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='groupparent'></a>public  function __groupParent__(caller)

_groupParent method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='groupmodparenttabcomplete'></a>public  function __groupmodParentTabComplete__(caller)

_groupmodParentTabComplete method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`List<String>` |


##### <a id='killcommand'></a>public  function __killCommand__(caller)

_killCommand method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='groupbasetabcomplete'></a>public  function __groupBaseTabComplete__(caller)

_groupBaseTabComplete method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`List<String>` |


##### <a id='spawnpoint'></a>public  function __spawnpoint__(caller)

_spawnpoint method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='matchpluginname'></a>public  function __matchPluginName__(caller)

_matchPluginName method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`List<String>` |


##### <a id='spreadplayers'></a>public  function __spreadplayers__(caller)

_spreadplayers method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='playerremove'></a>public  function __playerRemove__(caller)

_playerRemove method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='playergroupset'></a>public  function __playerGroupSet__(caller)

_playerGroupSet method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='mobspawnertabcomplete'></a>public  function __mobspawnerTabComplete__(caller)

_mobspawnerTabComplete method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`List<String>` |


##### <a id='mobspawnercheck'></a>public  function __mobspawnercheck__(caller)

_mobspawnercheck method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='mobspawnerset'></a>public  function __mobspawnerset__(caller)

_mobspawnerset method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='mobspawner'></a>public  function __mobspawner__(caller)

_mobspawner method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='mobtabcomplete'></a>public  function __mobTabComplete__(caller)

_mobTabComplete method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`List<String>` |


##### <a id='mobcount'></a>public  function __mobcount__(caller)

_mobcount method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='mobclear'></a>public  function __mobclear__(caller)

_mobclear method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='mob'></a>public  function __mob__(caller)

_mob method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='matchworldnamedimension'></a>public  function __matchWorldNameDimension__(caller)

_matchWorldNameDimension method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`List<String>` |


##### <a id='playergroupadd'></a>public  function __playerGroupAdd__(caller)

_playerGroupAdd method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='playergrouplist'></a>public  function __playerGroupList__(caller)

_playerGroupList method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='playergroupcheck'></a>public  function __playerGroupCheck__(caller)

_playerGroupCheck method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='playergroupremove'></a>public  function __playerGroupRemove__(caller)

_playerGroupRemove method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='matchwarpnames'></a>public  function __matchWarpNames__(caller)

_matchWarpNames method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`List<String>` |


##### <a id='playerprefix'></a>public  function __playerPrefix__(caller)

_playerPrefix method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='playerpermissions'></a>public  function __playerPermissions__(caller)

_playerPermissions method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='playeraddtabcomplete'></a>public  function __playerAddTabComplete__(caller)

_playerAddTabComplete method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`List<String>` |


##### <a id='playeradd'></a>public  function __playerAdd__(caller)

_playerAdd method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='playerbasetabcomplete'></a>public  function __playerBaseTabComplete__(caller)

_playerBaseTabComplete method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`List<String>` |


##### <a id='playerbase'></a>public  function __playerBase__(caller)

_playerBase method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='playerpermissionsadd'></a>public  function __playerPermissionsAdd__(caller)

_playerPermissionsAdd method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='matchtogrouptabcomplete'></a>public  function __matchToGroupTabComplete__(caller)

_matchToGroupTabComplete method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`List<String>` |


##### <a id='playerpermissionsremove'></a>public  function __playerPermissionsRemove__(caller)

_playerPermissionsRemove method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='playerlistcommand'></a>public  function __playerListCommand__(caller)

_playerListCommand method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='playergrouptabcomplete'></a>public  function __playerGroupTabComplete__(caller)

_playerGroupTabComplete method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`List<String>` |


##### <a id='oplist'></a>public  function __oplist__(caller)

_oplist method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='playergroup'></a>public  function __playerGroup__(caller)

_playerGroup method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='op'></a>public  function __op__(caller)

_op method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='mutecommand'></a>public  function __muteCommand__(caller)

_muteCommand method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='motdcommand'></a>public  function __motdCommand__(caller)

_motdCommand method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='matchworldnameplayername'></a>public  function __matchWorldNamePlayerName__(caller)

_matchWorldNamePlayerName method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`List<String>` |


##### <a id='playerpermissionscheck'></a>public  function __playerPermissionsCheck__(caller)

_playerPermissionsCheck method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='playerpermissionslist'></a>public  function __playerPermissionsList__(caller)

_playerPermissionsList method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='message'></a>public  function __message__(caller)

_message method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='messageraw'></a>public  function __messageraw__(caller)

_messageraw method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='particle'></a>public  function __particle__(caller)

_particle method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='whitelisttabcomplete'></a>public  function __whitelistTabComplete__(caller)

_whitelistTabComplete method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`List<String>` |


##### <a id='playsound'></a>public  function __playsound__(caller)

_playsound method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='playermodgroupaddremoveset'></a>public  function __playermodGroupAddRemoveSet__(caller)

_playermodGroupAddRemoveSet method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`List<String>` |


##### <a id='playerinfo'></a>public  function __playerinfo__(caller)

_playerinfo method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='playermodpermissionremove'></a>public  function __playermodPermissionRemove__(caller)

_playermodPermissionRemove method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`List<String>` |


##### <a id='whitelistreloadcommand'></a>public  function __whitelistReloadCommand__(caller)

_whitelistReloadCommand method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='reservelistcommand'></a>public  function __reservelistCommand__(caller)

_reservelistCommand method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='reloadcommand'></a>public  function __reloadCommand__(caller)

_reloadCommand method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='reservelistadd'></a>public  function __reservelistAdd__(caller)

_reservelistAdd method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='reloadplugincommand'></a>public  function __reloadPluginCommand__(caller)

_reloadPluginCommand method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='replaceitem'></a>public  function __replaceitem__(caller)

_replaceitem method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='worldcreate'></a>public  function __worldCreate__(caller)

_worldCreate method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='scoreboard'></a>public  function __scoreboard__(caller)

_scoreboard method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='reservelistremove'></a>public  function __reservelistRemove__(caller)

_reservelistRemove method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='reservelistshow'></a>public  function __reservelistShow__(caller)

_reservelistShow method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='reservelisttabcomplete'></a>public  function __reservelistTabComplete__(caller)

_reservelistTabComplete method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`List<String>` |


##### <a id='saveall'></a>public  function __saveall__(caller)

_saveall method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='saveoff'></a>public  function __saveoff__(caller)

_saveoff method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='saveon'></a>public  function __saveon__(caller)

_saveon method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='whitelistshowcommand'></a>public  function __whitelistShowCommand__(caller)

_whitelistShowCommand method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='teleport'></a>public  function __teleport__(caller)

_teleport method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='stopcommand'></a>public  function __stopCommand__(caller)

_stopCommand method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='sysinfo'></a>public  function __sysinfo__(caller)

_sysinfo method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='spawncommand'></a>public  function __spawnCommand__(caller)

_spawnCommand method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='stats'></a>public  function __stats__(caller)

_stats method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='summon'></a>public  function __summon__(caller)

_summon method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='unloadworld'></a>public  function __unloadWorld__(caller)

_unloadWorld method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='warpuse'></a>public  function __warpUse__(caller)

_warpUse method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='testforblock'></a>public  function __testforblock__(caller)

_testforblock method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='title'></a>public  function __title__(caller)

_title method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='testfor'></a>public  function __testfor__(caller)

_testfor method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='testforblocks'></a>public  function __testforblocks__(caller)

_testforblocks method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='time'></a>public  function __time__(caller)

_time method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='unbancommand'></a>public  function __unbanCommand__(caller)

_unbanCommand method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='unbantabcomplete'></a>public  function __unbanTabComplete__(caller)

_unbanTabComplete method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`List<String>` |


##### <a id='uptime'></a>public  function __uptime__(caller)

_uptime method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='trigger'></a>public  function __trigger__(caller)

_trigger method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='toggledownfall'></a>public  function __toggledownfall__(caller)

_toggledownfall method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='worlddelete'></a>public  function __worldDelete__(caller)

_worldDelete method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='weather'></a>public  function __weather__(caller)

_weather method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='wolfscriptinfocommand'></a>public  function __wolfscriptInfoCommand__(caller)

_wolfscriptInfoCommand method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='worldload'></a>public  function __worldLoad__(caller)

_worldLoad method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='whitelistcommand'></a>public  function __whitelistCommand__(caller)

_whitelistCommand method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='worldinfo'></a>public  function __worldInfo__(caller)

_worldInfo method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='world'></a>public  function __world__(caller)

_world method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='whitelistremovecommand'></a>public  function __whitelistRemoveCommand__(caller)

_whitelistRemoveCommand method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='worldlist'></a>public  function __worldList__(caller)

_worldList method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='whitelistdisablecommand'></a>public  function __whitelistDisableCommand__(caller)

_whitelistDisableCommand method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='whitelistenablecommand'></a>public  function __whitelistEnableCommand__(caller)

_whitelistEnableCommand method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='worldunload'></a>public  function __worldUnload__(caller)

_worldUnload method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='worldborder'></a>public  function __worldborder__(caller)

_worldborder method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


##### <a id='xp'></a>public  function __xp__(caller)

_xp method_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`void` |


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

