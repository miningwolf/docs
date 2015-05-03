## TabCommandExecutor __interface__

>io.wolfscript.command.TabCommandExecutor
>Extends [`CommandExecutor`](CommandExecutor.md)

---

### Interface Overview

Represents a class which can handle command tab completion and commands

Method | Type   
--- | :--- 
 function __onTabComplete__() <br> _onTabComplete method_ | `List<String>`
 |
__Inherited items from [`CommandExecutor`](CommandExecutor.md)__ |
 function __onCommand__(sender, command, label) <br> _Executes the given command, returning its success_ | `boolean`





---


### Public Methods for [`TabCommandExecutor`](TabCommandExecutor.md)

##### <a id='ontabcomplete'></a>public  function __onTabComplete__()

_onTabComplete method_

Returns | 
--- | 
`List<String>` |


---

### Public Methods for [`CommandExecutor`](CommandExecutor.md)

##### <a id='oncommand'></a>public  function __onCommand__(sender, command, label)

_Executes the given command, returning its success_

Argument | Type | Description  
--- | --- | --- 
sender | [`CommandSender`](CommandSender.md) | Source of the command
command | [`Command`](Command.md) | Command which was executed
label | `String` | Alias of the command which was used

Returns | Description
--- | --- 
`boolean` | true if a valid command, otherwise false


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

