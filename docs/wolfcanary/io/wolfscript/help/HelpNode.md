## HelpNode __class__

>io.wolfscript.help.HelpNode

---

### Class Overview

Contains relevant information about a piece of help. One help node contains the localized description of a command, its tooltip, required permissions, keywords (currently unused), parent and a list of sub commands.

Method | Type   
--- | :--- 
new __HelpNode__(owner, command) <br> _HelpNode constructor_ | _constructor_
 readonly property __Keywords__ <br> _Get: get some keywords for this command._ | `String[]`
 readonly property __Command__ <br> _Get: Gets the first alias (or name) for this command_ | `String`
 readonly property __Description__ <br> _Get: Gets the description for this command_ | `String`
 readonly property __Owner__ <br> _Get: get the Plugin (or WolfScript instance) that has registered this help_ | [`CommandOwner`](../commandsys/CommandOwner.md)
 readonly property __Parent__ <br> _Get: Get the name of this commands parent command._ | `String`
 readonly property __PrintableAliases__ <br> _Get: Returns an uncoloured string that displays all command aliases in the specified color_ | `String`
 readonly property __SubCommands__ <br> _Get: Returns an array of all subcommands for this_ | `String[]`
 readonly property __Tooltip__ <br> _Get: get the tooltip for this command_ | `String`
 function __canUse__(caller) <br> _Checks if a MessageReceiver (Player for instance) can use the command associated with this help node_ | `boolean`
 function __getPrintableAliases__(color) <br> _Returns a coloured string that displays all command aliases in the specified color_ | `String`
 function __hasAlias__(name) <br> _Check if this node has the given alias_ | `boolean`
 function __isSubCommand__() <br> _Returns true if this is a sub command (parent is not empty)_ | `boolean`
 var __subCommands__ <br> _A list of names of sub commands_ | `String[]`



---

### Public Constructors for [`HelpNode`](HelpNode.md)

##### <a id='helpnode'></a>new __HelpNode__(owner, command) 

_HelpNode constructor_

Argument | Type | Description  
--- | --- | --- 
owner | [`CommandOwner`](../commandsys/CommandOwner.md) | owner argument
command | [`WolfCommand`](../commandsys/WolfCommand.md) | command argument

---

### Public Properties for [`HelpNode`](HelpNode.md)

##### <a id='keywords'></a>public  readonly property __Keywords__

_Get: get some keywords for this command. Used for looking up help contexts_

Get | 
--- | 
`String[]` |



##### <a id='command'></a>public  readonly property __Command__

_Get: Gets the first alias (or name) for this command_

Get | 
--- | 
`String` |



##### <a id='description'></a>public  readonly property __Description__

_Get: Gets the description for this command_

Get | 
--- | 
`String` |



##### <a id='owner'></a>public  readonly property __Owner__

_Get: get the Plugin (or WolfScript instance) that has registered this help_

Get | 
--- | 
[`CommandOwner`](../commandsys/CommandOwner.md) |



##### <a id='parent'></a>public  readonly property __Parent__

_Get: Get the name of this commands parent command. Returns an empty string if there is no parent_

Get | 
--- | 
`String` |



##### <a id='printablealiases'></a>public  readonly property __PrintableAliases__

_Get: Returns an uncoloured string that displays all command aliases in the specified color_

Get | 
--- | 
`String` |



##### <a id='subcommands'></a>public  readonly property __SubCommands__

_Get: Returns an array of all subcommands for this_

Get | 
--- | 
`String[]` |



##### <a id='tooltip'></a>public  readonly property __Tooltip__

_Get: get the tooltip for this command_

Get | 
--- | 
`String` |



---

### Public Methods for [`HelpNode`](HelpNode.md)

##### <a id='canuse'></a>public  function __canUse__(caller)

_Checks if a MessageReceiver (Player for instance) can use the command associated with this help node_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../chat/MessageReceiver.md) | caller argument

Returns | Description
--- | --- 
`boolean` | true if player can use this command, false otherwise


##### <a id='getprintablealiases'></a>public  function __getPrintableAliases__(color)

_Returns a coloured string that displays all command aliases in the specified color_

Argument | Type | Description  
--- | --- | --- 
color | `String` | color argument

Returns | 
--- | 
`String` |


##### <a id='hasalias'></a>public  function __hasAlias__(name)

_Check if this node has the given alias_

Argument | Type | Description  
--- | --- | --- 
name | `String` | name argument

Returns | 
--- | 
`boolean` |


##### <a id='issubcommand'></a>public  function __isSubCommand__()

_Returns true if this is a sub command (parent is not empty)_

Returns | 
--- | 
`boolean` |


---

### Public Fields for [`HelpNode`](HelpNode.md)

##### <a id='subcommands'></a>public  var __subCommands__

_A list of names of sub commands_

>Returns
>  `String[]`

---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

