## CommandMap __interface__

>io.wolfscript.command.CommandMap

---

### Interface Overview

interface CommandMap

Method | Type   
--- | :--- 
 function __clearCommands__() <br> _Clears all registered commands._ | `void`
 function __getCommand__(name) <br> _Gets the command registered to the specified name_ | [`Command`](Command.md)
 function __register__(label, fallbackPrefix, command) <br> _register method_ | `boolean`
 function __register__(fallbackPrefix, command) <br> _register method_ | `boolean`
 function __registerAll__(fallbackPrefix) <br> _registerAll method_ | `void`



---


### Public Methods for [`CommandMap`](CommandMap.md)

##### <a id='clearcommands'></a>public  function __clearCommands__()

_Clears all registered commands._

Returns | 
--- | 
`void` |


##### <a id='getcommand'></a>public  function __getCommand__(name)

_Gets the command registered to the specified name_

Argument | Type | Description  
--- | --- | --- 
name | `String` | Name of the command to retrieve

Returns | Description
--- | --- 
[`Command`](Command.md) | Command with the specified name or null if a command with that label doesn't exist


##### <a id='register'></a>public  function __register__(label, fallbackPrefix, command)

_register method_

Argument | Type | Description  
--- | --- | --- 
label | `String` | label argument
fallbackPrefix | `String` | fallbackPrefix argument
command | [`Command`](Command.md) | command argument

Returns | 
--- | 
`boolean` |


##### <a id='register'></a>public  function __register__(fallbackPrefix, command)

_register method_

Argument | Type | Description  
--- | --- | --- 
fallbackPrefix | `String` | fallbackPrefix argument
command | [`Command`](Command.md) | command argument

Returns | 
--- | 
`boolean` |


##### <a id='registerall'></a>public  function __registerAll__(fallbackPrefix)

_registerAll method_

Argument | Type | Description  
--- | --- | --- 
fallbackPrefix | `String` | fallbackPrefix argument

Returns | 
--- | 
`void` |


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

