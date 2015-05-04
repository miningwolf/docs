## SimpleCommandMap __class__

>io.wolfscript.command.SimpleCommandMap
>Implements [`CommandMap`](CommandMap.md)

---

### Class Overview

class SimpleCommandMap

Method | Type   
--- | :--- 
new __SimpleCommandMap__(Server) <br> _SimpleCommandMap constructor_ | _constructor_
 readonly property __Commands__ <br> _Commands property_ | `Collection<Command>`
 function __getCommand__(name) <br> _getCommand method_ | [`Command`](Command.md)
 function __register__(fallbackPrefix, command) <br> _{@inheritDoc}_ | `boolean`
 function __register__(label, fallbackPrefix, command) <br> _{@inheritDoc}_ | `boolean`
 function __registerAll__(fallbackPrefix) <br> _{@inheritDoc}_ | `void`
 function __registerServerAliases__() <br> _registerServerAliases method_ | `void`
 function __setFallbackCommands__() <br> _setFallbackCommands method_ | `void`
 function __tabComplete__(sender, cmdLine) <br> _tabComplete method_ | `List<String>`



---

### Public Constructors for [`SimpleCommandMap`](SimpleCommandMap.md)

##### <a id='simplecommandmap'></a>new __SimpleCommandMap__(Server) 

_SimpleCommandMap constructor_

Argument | Type | Description  
--- | --- | --- 
Server | `final` | Server argument

---

### Public Properties for [`SimpleCommandMap`](SimpleCommandMap.md)

##### <a id='commands'></a>public  readonly property __Commands__

_Commands property_

Get | 
--- | 
`Collection<Command>` |



---

### Public Methods for [`SimpleCommandMap`](SimpleCommandMap.md)

##### <a id='getcommand'></a>public  function __getCommand__(name)

_getCommand method_

Argument | Type | Description  
--- | --- | --- 
name | `String` | name argument

Returns | 
--- | 
[`Command`](Command.md) |


##### <a id='register'></a>public  function __register__(fallbackPrefix, command)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
fallbackPrefix | `String` | fallbackPrefix argument
command | [`Command`](Command.md) | command argument

Returns | 
--- | 
`boolean` |


##### <a id='register'></a>public  function __register__(label, fallbackPrefix, command)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
label | `String` | label argument
fallbackPrefix | `String` | fallbackPrefix argument
command | [`Command`](Command.md) | command argument

Returns | 
--- | 
`boolean` |


##### <a id='registerall'></a>public  function __registerAll__(fallbackPrefix)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
fallbackPrefix | `String` | fallbackPrefix argument

Returns | 
--- | 
`void` |


##### <a id='registerserveraliases'></a>public  function __registerServerAliases__()

_registerServerAliases method_

Returns | 
--- | 
`void` |


##### <a id='setfallbackcommands'></a>public  function __setFallbackCommands__()

_setFallbackCommands method_

Returns | 
--- | 
`void` |


##### <a id='tabcomplete'></a>public  function __tabComplete__(sender, cmdLine)

_tabComplete method_

Argument | Type | Description  
--- | --- | --- 
sender | [`CommandSender`](CommandSender.md) | sender argument
cmdLine | `String` | cmdLine argument

Returns | 
--- | 
`List<String>` |


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

