## TabCompleter __interface__

>io.wolfscript.command.TabCompleter

---

### Interface Overview

Represents a class which can suggest tab completions for commands.

Method | Type   
--- | :--- 
 function __onTabComplete__(sender, command, alias) <br> _Requests a list of possible completions for a command argument._ | `List<String>`



---


### Public Methods for [`TabCompleter`](TabCompleter.md)

##### <a id='ontabcomplete'></a>public  function __onTabComplete__(sender, command, alias)

_Requests a list of possible completions for a command argument._

Argument | Type | Description  
--- | --- | --- 
sender | [`CommandSender`](CommandSender.md) | Source of the command
command | [`Command`](Command.md) | Command which was executed
alias | `String` | The alias used

Returns | Description
--- | --- 
`List<String>` | A List of possible completions for the final argument, or null to default to the command executor


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

