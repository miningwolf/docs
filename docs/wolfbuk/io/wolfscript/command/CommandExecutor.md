## CommandExecutor __interface__

>io.wolfscript.command.CommandExecutor

---

### Interface Overview

Represents a class which contains a single method for executing commands

Method | Type   
--- | :--- 
 function __onCommand__(sender, command, label) <br> _Executes the given command, returning its success_ | `boolean`



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


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

