## CommandMap __interface__

>io.wolfscript.command.CommandMap

---

### Interface Overview

interface CommandMap

Method | Type   
--- | :--- 
 function __clearCommands__() <br> _Looks for the requested command and executes it if found._ | `void`
 function __getCommand__(name) <br> _Gets the command registered to the specified name_ | [`Command`](Command.md)
 function __register__(label, fallbackPrefix, command) <br> _Registers a command. Returns true on success; false if name is already_ | `boolean`
 function __register__(fallbackPrefix, command) <br> _Registers a command. Returns true on success; false if name is already_ | `boolean`
 function __registerAll__(fallbackPrefix) <br> _Registers all the commands belonging to a certain plugin._ | `void`



---


### Public Methods for [`CommandMap`](CommandMap.md)

##### <a id='clearcommands'></a>public  function __clearCommands__()

_Looks for the requested command and executes it if found._

Returns | Description
--- | --- 
`void` | returns false if no target is found, true otherwise.


##### <a id='getcommand'></a>public  function __getCommand__(name)

_Gets the command registered to the specified name_

Argument | Type | Description  
--- | --- | --- 
name | `String` | Name of the command to retrieve

Returns | Description
--- | --- 
[`Command`](Command.md) | Command with the specified name or null if a command with that label doesn't exist


##### <a id='register'></a>public  function __register__(label, fallbackPrefix, command)

_Registers a command. Returns true on success; false if name is already taken and fallback had to be used. <p> Caller can use:- <ul> <li>command.getName() to determine the label registered for this command <li>command.getAliases() to determine the aliases which where registered </ul>_

Argument | Type | Description  
--- | --- | --- 
label | `String` | the label of the command, without the '/'-prefix.
fallbackPrefix | `String` | a prefix which is prepended to the command with a ':' one or more times to make the command unique
command | [`Command`](Command.md) | the command to register

Returns | Description
--- | --- 
`boolean` | true if command was registered with the passed in label, false otherwise, which indicates the fallbackPrefix was used one or more times


##### <a id='register'></a>public  function __register__(fallbackPrefix, command)

_Registers a command. Returns true on success; false if name is already taken and fallback had to be used. <p> Caller can use:- <ul> <li>command.getName() to determine the label registered for this command <li>command.getAliases() to determine the aliases which where registered </ul>_

Argument | Type | Description  
--- | --- | --- 
fallbackPrefix | `String` | a prefix which is prepended to the command with a ':' one or more times to make the command unique
command | [`Command`](Command.md) | the command to register, from which label is determined from the command name

Returns | Description
--- | --- 
`boolean` | true if command was registered with the passed in label, false otherwise, which indicates the fallbackPrefix was used one or more times


##### <a id='registerall'></a>public  function __registerAll__(fallbackPrefix)

_Registers all the commands belonging to a certain plugin. <p> Caller can use:- <ul> <li>command.getName() to determine the label registered for this command <li>command.getAliases() to determine the aliases which where registered </ul>_

Argument | Type | Description  
--- | --- | --- 
fallbackPrefix | `String` | a prefix which is prepended to each command with a ':' one or more times to make the command unique

Returns | 
--- | 
`void` |


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

