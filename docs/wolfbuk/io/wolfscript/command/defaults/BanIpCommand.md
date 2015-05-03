## BanIpCommand __class__

>io.wolfscript.command.defaults.BanIpCommand
>Extends [`VanillaCommand`](VanillaCommand.md)

---

### Class Overview

class BanIpCommand

Method | Type   
--- | :--- 
new __BanIpCommand__() <br> _BanIpCommand constructor_ | _constructor_
 function __execute__(sender, currentAlias) <br> _execute method_ | `boolean`
static final var __ipValidity__ <br> _ipValidity field_ | `Pattern`
 |
__Inherited items from [`VanillaCommand`](VanillaCommand.md)__ |
static function __getDouble__(sender, input) <br> _getDouble method_ | `double`
static function __getDouble__(sender, input, min, max) <br> _getDouble method_ | `double`
static function __getRelativeDouble__(original, sender, input) <br> _getRelativeDouble method_ | `double`
 function __matches__(input) <br> _matches method_ | `boolean`
 |
__Inherited items from [`Command`](..\Command.md)__ |
 writeonly property __Usage__ <br> _Set: Executes the command, returning its success_ | [`Command`](..\Command.md)
static function __broadcastCommandMessage__(source, message) <br> _broadcastCommandMessage method_ | `void`
static function __broadcastCommandMessage__(source, message, sendToSource) <br> _broadcastCommandMessage method_ | `void`
 function __toString__() <br> _toString method_ | `String`







---

### Public Constructors for [`BanIpCommand`](BanIpCommand.md)

##### <a id='banipcommand'></a>new __BanIpCommand__() 

_BanIpCommand constructor_


---

### Public Methods for [`BanIpCommand`](BanIpCommand.md)

##### <a id='execute'></a>public  function __execute__(sender, currentAlias)

_execute method_

Argument | Type | Description  
--- | --- | --- 
sender | [`CommandSender`](..\CommandSender.md) | sender argument
currentAlias | `String` | currentAlias argument

Returns | 
--- | 
`boolean` |


---

### Public Fields for [`BanIpCommand`](BanIpCommand.md)

##### <a id='ipvalidity'></a>public static final var __ipValidity__

_ipValidity field_

>Returns
>  `Pattern`

---

### Public Methods for [`VanillaCommand`](VanillaCommand.md)

##### <a id='getdouble'></a>public static function __getDouble__(sender, input)

_getDouble method_

Argument | Type | Description  
--- | --- | --- 
sender | [`CommandSender`](..\CommandSender.md) | sender argument
input | `String` | input argument

Returns | 
--- | 
`double` |


##### <a id='getdouble'></a>public static function __getDouble__(sender, input, min, max)

_getDouble method_

Argument | Type | Description  
--- | --- | --- 
sender | [`CommandSender`](..\CommandSender.md) | sender argument
input | `String` | input argument
min | `double` | min argument
max | `double` | max argument

Returns | 
--- | 
`double` |


##### <a id='getrelativedouble'></a>public static function __getRelativeDouble__(original, sender, input)

_getRelativeDouble method_

Argument | Type | Description  
--- | --- | --- 
original | `double` | original argument
sender | [`CommandSender`](..\CommandSender.md) | sender argument
input | `String` | input argument

Returns | 
--- | 
`double` |


##### <a id='matches'></a>public  function __matches__(input)

_matches method_

Argument | Type | Description  
--- | --- | --- 
input | `String` | input argument

Returns | 
--- | 
`boolean` |


---

### Public Properties for [`Command`](..\Command.md)

##### <a id='usage'></a>public  writeonly property __Usage__

_Set: Executes the command, returning its success_

Get | Description
--- | --- 
[`Command`](..\Command.md) | true if the command was successful, otherwise false /
    public abstract boolean execute(CommandSender sender, String commandLabel, String[] args);

    /** Executed on tab completion for this command, returning a list of options the player can tab through.

Set | Type | Description  
--- | --- | --- 
usage | `String` | new example usage


---

### Public Methods for [`Command`](..\Command.md)

##### <a id='broadcastcommandmessage'></a>public static function __broadcastCommandMessage__(source, message)

_broadcastCommandMessage method_

Argument | Type | Description  
--- | --- | --- 
source | [`CommandSender`](..\CommandSender.md) | source argument
message | `String` | message argument

Returns | 
--- | 
`void` |


##### <a id='broadcastcommandmessage'></a>public static function __broadcastCommandMessage__(source, message, sendToSource)

_broadcastCommandMessage method_

Argument | Type | Description  
--- | --- | --- 
source | [`CommandSender`](..\CommandSender.md) | source argument
message | `String` | message argument
sendToSource | `boolean` | sendToSource argument

Returns | 
--- | 
`void` |


##### <a id='tostring'></a>public  function __toString__()

_toString method_

Returns | 
--- | 
`String` |


---


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

