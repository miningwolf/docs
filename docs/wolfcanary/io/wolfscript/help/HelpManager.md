## HelpManager __class__

>io.wolfscript.help.HelpManager

---

### Class Overview

class HelpManager

Method | Type   
--- | :--- 
new __HelpManager__() <br> _HelpManager constructor_ | _constructor_
 readonly property __EntriesPerPage__ <br> _Get: Get the maximum number of entries in one page_ | `int`
 function __getRawHelp__(caller) <br> _Returns all help nodes that the player has access too._ | `List<HelpNode>`
 function __getRawHelp__(command) <br> _getRawHelp method_ | [`HelpNode`](HelpNode.md)
 function __getHelp__(caller, commandName) <br> _Displays the given commands description and toolTip,_ | `void`
 function __getHelp__(player, page) <br> _Searches through available help nodes for the given array of words_ | `List<String>`
 function __getHelp__(player, page) <br> _Returns a formatted list (each entry is one line) of commands_ | `List<String>`
 function __hasHelp__(command) <br> _Check if this command name already is registered_ | `boolean`
 function __registerCommand__(owner, command, lookup) <br> _registerCommand method_ | `boolean`
 function __registerCommand__(owner, command) <br> _Registers a command. This is called from CommandManager upon registering a command._ | `boolean`
 function __unregisterCommand__(plugin, command) <br> _Unregister a command_ | `boolean`
 function __unregisterCommands__(owner) <br> _Unregisters all commands assigned to the given plugin_ | `void`



---

### Public Constructors for [`HelpManager`](HelpManager.md)

##### <a id='helpmanager'></a>new __HelpManager__() 

_HelpManager constructor_


---

### Public Properties for [`HelpManager`](HelpManager.md)

##### <a id='entriesperpage'></a>public  readonly property __EntriesPerPage__

_Get: Get the maximum number of entries in one page_

Get | 
--- | 
`int` |



---

### Public Methods for [`HelpManager`](HelpManager.md)

##### <a id='getrawhelp'></a>public  function __getRawHelp__(caller)

_Returns all help nodes that the player has access too._

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | 
--- | 
`List<HelpNode>` |


##### <a id='getrawhelp'></a>public  function __getRawHelp__(command)

_getRawHelp method_

Argument | Type | Description  
--- | --- | --- 
command | `String` | command argument

Returns | 
--- | 
[`HelpNode`](HelpNode.md) |


##### <a id='gethelp'></a>public  function __getHelp__(caller, commandName)

_Displays the given commands description and toolTip, if the permissions allow it._

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | The MR to show the help for
commandName | `String` | The command for which help is required

Returns | 
--- | 
`void` |


##### <a id='gethelp'></a>public  function __getHelp__(player, page)

_Searches through available help nodes for the given array of words and returns help messages according to `Player` permissions_

Argument | Type | Description  
--- | --- | --- 
player | `Player` | player argument
page | `int` | page argument

Returns | 
--- | 
`List<String>` |


##### <a id='gethelp'></a>public  function __getHelp__(player, page)

_Returns a formatted list (each entry is one line) of commands_

Argument | Type | Description  
--- | --- | --- 
player | `Player` | player argument
page | `int` | page argument

Returns | 
--- | 
`List<String>` |


##### <a id='hashelp'></a>public  function __hasHelp__(command)

_Check if this command name already is registered_

Argument | Type | Description  
--- | --- | --- 
command | `String` | command argument

Returns | 
--- | 
`boolean` |


##### <a id='registercommand'></a>public  function __registerCommand__(owner, command, lookup)

_registerCommand method_

Argument | Type | Description  
--- | --- | --- 
owner | [`CommandOwner`](../commandsys/CommandOwner.md) | owner argument
command | [`WolfCommand`](../commandsys/WolfCommand.md) | command argument
lookup | `String` | lookup argument

Returns | 
--- | 
`boolean` |


##### <a id='registercommand'></a>public  function __registerCommand__(owner, command)

_Registers a command. This is called from CommandManager upon registering a command. Typically you don't need to call this yourself, however if you need to add custom help content, then this is the right place for it._

Argument | Type | Description  
--- | --- | --- 
owner | [`CommandOwner`](../commandsys/CommandOwner.md) | owner argument
command | [`WolfCommand`](../commandsys/WolfCommand.md) | command argument

Returns | 
--- | 
`boolean` |


##### <a id='unregistercommand'></a>public  function __unregisterCommand__(plugin, command)

_Unregister a command_

Argument | Type | Description  
--- | --- | --- 
plugin | [`CommandOwner`](../commandsys/CommandOwner.md) | plugin argument
command | `String` | command argument

Returns | Description
--- | --- 
`boolean` | true on success, false on failure


##### <a id='unregistercommands'></a>public  function __unregisterCommands__(owner)

_Unregisters all commands assigned to the given plugin_

Argument | Type | Description  
--- | --- | --- 
owner | [`CommandOwner`](../commandsys/CommandOwner.md) | owner argument

Returns | 
--- | 
`void` |


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

