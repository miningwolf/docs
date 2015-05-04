## CommandManager __class__

>io.wolfscript.commandsys.CommandManager

---

### Class Overview

Manages all commands. Add commands using one of the methods below.

Method | Type   
--- | :--- 
 function __canUseCommand__(user, command) <br> _canUseCommand method_ | `boolean`
 function __hasCommand__(command) <br> _hasCommand method_ | `boolean`
 function __matchCommand__(caller, command, onlySubcommands) <br> _Build a list of commands matching the given string._ | `StringBuilder`
 function __matchCommandNames__(caller, partial, includeSubs) <br> _Gets a list of matching [`WolfCommand`](WolfCommand.md) names a [`MessageReceiver`](../chat/MessageReceiver.md) can use_ | `List<String>`
 function __parseCommand__(caller, command) <br> _Performs a lookup for a command of the given name and executes it if_ | `boolean`
 function __tabComplete__(msgrec, command) <br> _Gets the tabComplete for a specified Command name_ | `List<String>`
 function __unregisterCommand__(name) <br> _unregisterCommand method_ | `boolean`
 function __unregisterCommands__(owner) <br> _Remove all commands that belong to the specified command owner._ | `void`



---


### Public Methods for [`CommandManager`](CommandManager.md)

##### <a id='canusecommand'></a>public  function __canUseCommand__(user, command)

_canUseCommand method_

Argument | Type | Description  
--- | --- | --- 
user | [`MessageReceiver`](../chat/MessageReceiver.md) | user argument
command | `String` | command argument

Returns | 
--- | 
`boolean` |


##### <a id='hascommand'></a>public  function __hasCommand__(command)

_hasCommand method_

Argument | Type | Description  
--- | --- | --- 
command | `String` | command argument

Returns | 
--- | 
`boolean` |


##### <a id='matchcommand'></a>public  function __matchCommand__(caller, command, onlySubcommands)

_Build a list of commands matching the given string._

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | the [`MessageReceiver`](../chat/MessageReceiver.md)
command | `String` | the command name
onlySubcommands | `boolean` | onlySubcommands argument

Returns | Description
--- | --- 
`StringBuilder` | nullchar separated stringbuilder


##### <a id='matchcommandnames'></a>public  function __matchCommandNames__(caller, partial, includeSubs)

_Gets a list of matching [`WolfCommand`](WolfCommand.md) names a [`MessageReceiver`](../chat/MessageReceiver.md) can use_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | the [`MessageReceiver`](../chat/MessageReceiver.md) to check permission on
partial | `String` | the partial command name to match (or empty to match all commands)
includeSubs | `boolean` | `true` to include sub commands; `false` to not include them

Returns | Description
--- | --- 
`List<String>` | a list of matching command names


##### <a id='parsecommand'></a>public  function __parseCommand__(caller, command)

_Performs a lookup for a command of the given name and executes it if found. Returns false if the command wasn't found or if the caller doesn't have the permission to run it. <br> In Short: Use this to fire commands._

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | The [`MessageReceiver`](../chat/MessageReceiver.md) to send messages back to (assumed to be the caller)
command | `String` | The command to run

Returns | Description
--- | --- 
`boolean` | true if `command` executed successfully, false otherwise


##### <a id='tabcomplete'></a>public  function __tabComplete__(msgrec, command)

_Gets the tabComplete for a specified Command name_

Argument | Type | Description  
--- | --- | --- 
msgrec | [`MessageReceiver`](../chat/MessageReceiver.md) | the caller of the tab complete
command | `String` | the name of the command to get a tab complete for

Returns | Description
--- | --- 
`List<String>` | list string of possible completion


##### <a id='unregistercommand'></a>public  function __unregisterCommand__(name)

_unregisterCommand method_

Argument | Type | Description  
--- | --- | --- 
name | `String` | name argument

Returns | 
--- | 
`boolean` |


##### <a id='unregistercommands'></a>public  function __unregisterCommands__(owner)

_Remove all commands that belong to the specified command owner._

Argument | Type | Description  
--- | --- | --- 
owner | [`CommandOwner`](CommandOwner.md) | The owner. That can be a plugin or the server

Returns | 
--- | 
`void` |


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

