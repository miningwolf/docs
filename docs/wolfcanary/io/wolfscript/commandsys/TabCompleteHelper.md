## TabCompleteHelper __class__

>io.wolfscript.commandsys.TabCompleteHelper

---

### Class Overview

A set of methods to help with doing tab completes

Method | Type   
--- | :--- 
static function __matchToKnownWorld__(arg) <br> _Matches the argument to possible existing [`World`](../api/world/World.md) names_ | `List<String>`
static function __findDispatcherFor__(CommandListener, parent) <br> _Generates a new TabCompleteDispatch for a command._ | [`TabCompleteDispatch`](TabCompleteDispatch.md)
static function __matchToWorldType__() <br> _Matches the last argument of specified arguments to possible existing [`WorldType`](../api/world/WorldType.md) names_ | `List<String>`
static function __matchTo__() <br> _Matches the last argument of specified arguments to the possible matches_ | `List<String>`
static function __matchTo__(arg) <br> _Attempts to get a list of matches that the specified argument could be_ | `List<String>`
static function __matchToWorldType__(arg) <br> _Matches the argument to possible existing [`WorldType`](../api/world/WorldType.md) names_ | `List<String>`
static function __matchToOnlinePlayer__(arg) <br> _Matches the argument to possible online `Player` names_ | `List<String>`
static function __matchToKnownPlayer__(arg) <br> _Matches the argument to possible `Player` names, including offline players_ | `List<String>`
static function __matchToKnownPlayer__() <br> _Matches the last argument of specified arguments to possible `Player` names, including offline players_ | `List<String>`
static function __matchToLoadedWorld__(arg) <br> _Matches the argument to possible loaded [`World`](../api/world/World.md) names_ | `List<String>`
static function __matchToLoadedWorld__() <br> _Matches the last argument of specified arguments to possible loaded [`World`](../api/world/World.md) names_ | `List<String>`
static function __matchToLoadedWorld__(arg, dimensionType) <br> _Matches the argument to possible loaded [`World`](../api/world/World.md) names of specified [`DimensionType`](../api/world/DimensionType.md)_ | `List<String>`
static function __matchToLoadedWorldOfDimension__(dimensionType) <br> _Matches the last argument of specified arguments to possible loaded [`World`](../api/world/World.md) names of specified [`DimensionType`](../api/world/DimensionType.md)_ | `List<String>`
static function __matchToDimension__(arg) <br> _Matches the argument to possible [`DimensionType`](../api/world/DimensionType.md) names of specified [`DimensionType`](../api/world/DimensionType.md)_ | `List<String>`
static function __matchToDimension__() <br> _Matches the last argument of specified arguments to possible [`DimensionType`](../api/world/DimensionType.md) names_ | `List<String>`
static function __matchToKnownWorld__() <br> _Matches the last argument of specified arguments to possible existing [`World`](../api/world/World.md) names_ | `List<String>`
static function __matchToGroup__() <br> _Matches the last argument of specified arguments to possible [`Group`](../user/Group.md) names_ | `List<String>`
static function __matchToGroup__(arg) <br> _Matches the argument to possible [`Group`](../user/Group.md) names_ | `List<String>`
static function __matchToOnlinePlayer__() <br> _Matches the last argument of specified arguments to possible online `Player` names_ | `List<String>`
static function __matchToBannedSubject__(arg) <br> _Matches the argument to possible banned subjects_ | `List<String>`
static function __matchToBannedSubject__() <br> _Matches the last argument of specified arguments to possible banned subjects_ | `List<String>`
static function __matchToKitNames__(arg, caller) <br> _Matches the argument to possible [`Kit`](../kit/Kit.md) names_ | `List<String>`
static function __matchToKitNames__(caller) <br> _Matches the last argument of specified arguments to possible [`Kit`](../kit/Kit.md) names_ | `List<String>`
static function __matchToItemTypeAndData__() <br> _Matches the last argument of specified arguments to possible existing [`ItemType`](../api/inventory/ItemType.md) machine names with data value_ | `List<String>`
static function __matchToItemTypeAndData__(arg) <br> _Matches the argument to possible existing [`ItemType`](../api/inventory/ItemType.md) machine names with data value_ | `List<String>`
static function __matchToItemType__(arg) <br> _Matches the argument to possible existing [`ItemType`](../api/inventory/ItemType.md) machine names_ | `List<String>`
static function __matchToItemType__() <br> _Matches the last argument of specified arguments to possible existing [`ItemType`](../api/inventory/ItemType.md) machine names_ | `List<String>`
static function __matchToPlayerPermission__(playerReference, arg) <br> _Matches the argument to possible [`PlayerReference`](../api/PlayerReference.md) permissions_ | `List<String>`
static function __matchToPlayerPermission__(playerReference) <br> _Matches the argument to possible [`PlayerReference`](../api/PlayerReference.md) permissions_ | `List<String>`
static function __matchToWarpNames__(caller) <br> _Matches the last argument of specified arguments to possible [`Warp`](../warp/Warp.md) names_ | `List<String>`
static function __matchToWarpNames__(arg, caller) <br> _Matches the argument to possible [`Warp`](../warp/Warp.md) names_ | `List<String>`
static function __startsWith__(partial, possible) <br> _Matches a partial `String` to a possible matching `String`_ | `boolean`



---


### Public Methods for [`TabCompleteHelper`](TabCompleteHelper.md)

##### <a id='matchtoknownworld'></a>public static function __matchToKnownWorld__(arg)

_Matches the argument to possible existing [`World`](../api/world/World.md) names_

Argument | Type | Description  
--- | --- | --- 
arg | `String` | the argument to get matches for

Returns | Description
--- | --- 
`List<String>` | list of matching existing [`World`](../api/world/World.md) names found


##### <a id='finddispatcherfor'></a>public static function __findDispatcherFor__(CommandListener, parent)

_Generates a new TabCompleteDispatch for a command. Returns null if nothing suitable was found within the given CommandListener_

Argument | Type | Description  
--- | --- | --- 
CommandListener | `final` | CommandListener argument
parent | `String` | parent argument

Returns | Description
--- | --- 
[`TabCompleteDispatch`](TabCompleteDispatch.md) | new dispatcher on success or null on failure


##### <a id='matchtoworldtype'></a>public static function __matchToWorldType__()

_Matches the last argument of specified arguments to possible existing [`WorldType`](../api/world/WorldType.md) names_

Returns | Description
--- | --- 
`List<String>` | a list of matching existing [`WorldType`](../api/world/WorldType.md) names


##### <a id='matchto'></a>public static function __matchTo__()

_Matches the last argument of specified arguments to the possible matches_

Returns | Description
--- | --- 
`List<String>` | a list of matches found


##### <a id='matchto'></a>public static function __matchTo__(arg)

_Attempts to get a list of matches that the specified argument could be_

Argument | Type | Description  
--- | --- | --- 
arg | `String` | the argument to get matches for

Returns | Description
--- | --- 
`List<String>` | a list of matches found


##### <a id='matchtoworldtype'></a>public static function __matchToWorldType__(arg)

_Matches the argument to possible existing [`WorldType`](../api/world/WorldType.md) names_

Argument | Type | Description  
--- | --- | --- 
arg | `String` | the argument to get matches for

Returns | Description
--- | --- 
`List<String>` | list of matching existing [`WorldType`](../api/world/WorldType.md) names found


##### <a id='matchtoonlineplayer'></a>public static function __matchToOnlinePlayer__(arg)

_Matches the argument to possible online `Player` names_

Argument | Type | Description  
--- | --- | --- 
arg | `String` | the argument to get matches for

Returns | Description
--- | --- 
`List<String>` | list of matching online `Player` names found


##### <a id='matchtoknownplayer'></a>public static function __matchToKnownPlayer__(arg)

_Matches the argument to possible `Player` names, including offline players_

Argument | Type | Description  
--- | --- | --- 
arg | `String` | the argument to get matches for

Returns | Description
--- | --- 
`List<String>` | list of matching `Player` names found


##### <a id='matchtoknownplayer'></a>public static function __matchToKnownPlayer__()

_Matches the last argument of specified arguments to possible `Player` names, including offline players_

Returns | Description
--- | --- 
`List<String>` | a list of matching `Player` names found


##### <a id='matchtoloadedworld'></a>public static function __matchToLoadedWorld__(arg)

_Matches the argument to possible loaded [`World`](../api/world/World.md) names_

Argument | Type | Description  
--- | --- | --- 
arg | `String` | the argument to get matches for

Returns | Description
--- | --- 
`List<String>` | list of matching loaded [`World`](../api/world/World.md) names found


##### <a id='matchtoloadedworld'></a>public static function __matchToLoadedWorld__()

_Matches the last argument of specified arguments to possible loaded [`World`](../api/world/World.md) names_

Returns | Description
--- | --- 
`List<String>` | a list of matching loaded [`World`](../api/world/World.md) names found


##### <a id='matchtoloadedworld'></a>public static function __matchToLoadedWorld__(arg, dimensionType)

_Matches the argument to possible loaded [`World`](../api/world/World.md) names of specified [`DimensionType`](../api/world/DimensionType.md)_

Argument | Type | Description  
--- | --- | --- 
arg | `String` | the argument to get matches for
dimensionType | [`DimensionType`](../api/world/DimensionType.md) | the [`DimensionType`](../api/world/DimensionType.md) of the [`World`](../api/world/World.md)

Returns | Description
--- | --- 
`List<String>` | list of matching loaded [`World`](../api/world/World.md) names found


##### <a id='matchtoloadedworldofdimension'></a>public static function __matchToLoadedWorldOfDimension__(dimensionType)

_Matches the last argument of specified arguments to possible loaded [`World`](../api/world/World.md) names of specified [`DimensionType`](../api/world/DimensionType.md)_

Argument | Type | Description  
--- | --- | --- 
dimensionType | [`DimensionType`](../api/world/DimensionType.md) | the [`DimensionType`](../api/world/DimensionType.md) of the [`World`](../api/world/World.md)

Returns | Description
--- | --- 
`List<String>` | a list of matching loaded [`World`](../api/world/World.md) names found


##### <a id='matchtodimension'></a>public static function __matchToDimension__(arg)

_Matches the argument to possible [`DimensionType`](../api/world/DimensionType.md) names of specified [`DimensionType`](../api/world/DimensionType.md)_

Argument | Type | Description  
--- | --- | --- 
arg | `String` | the argument to get matches for

Returns | Description
--- | --- 
`List<String>` | list of matching [`DimensionType`](../api/world/DimensionType.md) names found


##### <a id='matchtodimension'></a>public static function __matchToDimension__()

_Matches the last argument of specified arguments to possible [`DimensionType`](../api/world/DimensionType.md) names_

Returns | Description
--- | --- 
`List<String>` | a list of matching [`DimensionType`](../api/world/DimensionType.md) names found


##### <a id='matchtoknownworld'></a>public static function __matchToKnownWorld__()

_Matches the last argument of specified arguments to possible existing [`World`](../api/world/World.md) names_

Returns | Description
--- | --- 
`List<String>` | a list of matching existing [`World`](../api/world/World.md) names


##### <a id='matchtogroup'></a>public static function __matchToGroup__()

_Matches the last argument of specified arguments to possible [`Group`](../user/Group.md) names_

Returns | Description
--- | --- 
`List<String>` | a list of matching [`Group`](../user/Group.md) names found


##### <a id='matchtogroup'></a>public static function __matchToGroup__(arg)

_Matches the argument to possible [`Group`](../user/Group.md) names_

Argument | Type | Description  
--- | --- | --- 
arg | `String` | the argument to get matches for

Returns | Description
--- | --- 
`List<String>` | list of matching [`Group`](../user/Group.md) names found


##### <a id='matchtoonlineplayer'></a>public static function __matchToOnlinePlayer__()

_Matches the last argument of specified arguments to possible online `Player` names_

Returns | Description
--- | --- 
`List<String>` | a list of matching online `Player` names found


##### <a id='matchtobannedsubject'></a>public static function __matchToBannedSubject__(arg)

_Matches the argument to possible banned subjects_

Argument | Type | Description  
--- | --- | --- 
arg | `String` | the argument to get matches for

Returns | Description
--- | --- 
`List<String>` | list of matching banned subjects found


##### <a id='matchtobannedsubject'></a>public static function __matchToBannedSubject__()

_Matches the last argument of specified arguments to possible banned subjects_

Returns | Description
--- | --- 
`List<String>` | a list of matching banned subjects found


##### <a id='matchtokitnames'></a>public static function __matchToKitNames__(arg, caller)

_Matches the argument to possible [`Kit`](../kit/Kit.md) names_

Argument | Type | Description  
--- | --- | --- 
arg | `String` | the argument to get matches for
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | the [`MessageReceiver`](../chat/MessageReceiver.md) to use for giving checks

Returns | Description
--- | --- 
`List<String>` | list of matching [`Kit`](../kit/Kit.md) names found


##### <a id='matchtokitnames'></a>public static function __matchToKitNames__(caller)

_Matches the last argument of specified arguments to possible [`Kit`](../kit/Kit.md) names_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | the [`MessageReceiver`](../chat/MessageReceiver.md) to use for giving checks

Returns | Description
--- | --- 
`List<String>` | a list of matching [`Kit`](../kit/Kit.md) names found


##### <a id='matchtoitemtypeanddata'></a>public static function __matchToItemTypeAndData__()

_Matches the last argument of specified arguments to possible existing [`ItemType`](../api/inventory/ItemType.md) machine names with data value_

Returns | Description
--- | --- 
`List<String>` | a list of matching existing [`ItemType`](../api/inventory/ItemType.md) machine names with data value


##### <a id='matchtoitemtypeanddata'></a>public static function __matchToItemTypeAndData__(arg)

_Matches the argument to possible existing [`ItemType`](../api/inventory/ItemType.md) machine names with data value_

Argument | Type | Description  
--- | --- | --- 
arg | `String` | the argument to get matches for

Returns | Description
--- | --- 
`List<String>` | list of matching existing [`ItemType`](../api/inventory/ItemType.md) machine names with data value


##### <a id='matchtoitemtype'></a>public static function __matchToItemType__(arg)

_Matches the argument to possible existing [`ItemType`](../api/inventory/ItemType.md) machine names_

Argument | Type | Description  
--- | --- | --- 
arg | `String` | the argument to get matches for

Returns | Description
--- | --- 
`List<String>` | list of matching existing [`ItemType`](../api/inventory/ItemType.md) machine names


##### <a id='matchtoitemtype'></a>public static function __matchToItemType__()

_Matches the last argument of specified arguments to possible existing [`ItemType`](../api/inventory/ItemType.md) machine names_

Returns | Description
--- | --- 
`List<String>` | a list of matching existing [`ItemType`](../api/inventory/ItemType.md) machine names


##### <a id='matchtoplayerpermission'></a>public static function __matchToPlayerPermission__(playerReference, arg)

_Matches the argument to possible [`PlayerReference`](../api/PlayerReference.md) permissions_

Argument | Type | Description  
--- | --- | --- 
playerReference | `Player` | the [`PlayerReference`](../api/PlayerReference.md) to check permissions off
arg | `String` | the argument to get matches for

Returns | Description
--- | --- 
`List<String>` | list of matching [`PlayerReference`](../api/PlayerReference.md) permissions


##### <a id='matchtoplayerpermission'></a>public static function __matchToPlayerPermission__(playerReference)

_Matches the argument to possible [`PlayerReference`](../api/PlayerReference.md) permissions_

Argument | Type | Description  
--- | --- | --- 
playerReference | [`PlayerReference`](../api/PlayerReference.md) | the [`PlayerReference`](../api/PlayerReference.md) to check permissions off

Returns | Description
--- | --- 
`List<String>` | list of matching [`PlayerReference`](../api/PlayerReference.md) permissions


##### <a id='matchtowarpnames'></a>public static function __matchToWarpNames__(caller)

_Matches the last argument of specified arguments to possible [`Warp`](../warp/Warp.md) names_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | the [`MessageReceiver`](../chat/MessageReceiver.md) to use for giving checks

Returns | Description
--- | --- 
`List<String>` | a list of matching [`Warp`](../warp/Warp.md) names found


##### <a id='matchtowarpnames'></a>public static function __matchToWarpNames__(arg, caller)

_Matches the argument to possible [`Warp`](../warp/Warp.md) names_

Argument | Type | Description  
--- | --- | --- 
arg | `String` | the argument to get matches for
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | the [`MessageReceiver`](../chat/MessageReceiver.md) to use for permission checks

Returns | Description
--- | --- 
`List<String>` | list of matching [`Warp`](../warp/Warp.md) names found


##### <a id='startswith'></a>public static function __startsWith__(partial, possible)

_Matches a partial `String` to a possible matching `String`_

Argument | Type | Description  
--- | --- | --- 
partial | `String` | the partial `String`
possible | `String` | the possible matching `String`

Returns | Description
--- | --- 
`boolean` | `true` if matches or if partial is empty; `false` if not


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

