## MultipleCommandAlias __class__

>io.wolfscript.command.MultipleCommandAlias
>Extends [`Command`](Command.md)

---

### Class Overview

Represents a command that delegates to one or more other commands

Method | Type   
--- | :--- 
new __MultipleCommandAlias__(name) <br> _MultipleCommandAlias constructor_ | _constructor_
 readonly property __Commands__ <br> _Get: Gets the commands associated with the multi-command alias._ | `Command[]`
 function __execute__(sender, commandLabel) <br> _execute method_ | `boolean`
 |
__Inherited items from [`Command`](Command.md)__ |
 writeonly property __Usage__ <br> _Set: Executes the command, returning its success_ | [`Command`](Command.md)
static function __broadcastCommandMessage__(source, message) <br> _broadcastCommandMessage method_ | `void`
static function __broadcastCommandMessage__(source, message, sendToSource) <br> _broadcastCommandMessage method_ | `void`
 function __toString__() <br> _toString method_ | `String`





---

### Public Constructors for [`MultipleCommandAlias`](MultipleCommandAlias.md)

##### <a id='multiplecommandalias'></a>new __MultipleCommandAlias__(name) 

_MultipleCommandAlias constructor_

Argument | Type | Description  
--- | --- | --- 
name | `String` | name argument

---

### Public Properties for [`MultipleCommandAlias`](MultipleCommandAlias.md)

##### <a id='commands'></a>public  readonly property __Commands__

_Get: Gets the commands associated with the multi-command alias._

Get | Description
--- | --- 
`Command[]` | commands associated with alias



---

### Public Methods for [`MultipleCommandAlias`](MultipleCommandAlias.md)

##### <a id='execute'></a>public  function __execute__(sender, commandLabel)

_execute method_

Argument | Type | Description  
--- | --- | --- 
sender | [`CommandSender`](CommandSender.md) | sender argument
commandLabel | `String` | commandLabel argument

Returns | 
--- | 
`boolean` |


---

### Public Properties for [`Command`](Command.md)

##### <a id='usage'></a>public  writeonly property __Usage__

_Set: Executes the command, returning its success_

Get | Description
--- | --- 
[`Command`](Command.md) | true if the command was successful, otherwise false /
    public abstract boolean execute(CommandSender sender, String commandLabel, String[] args);

    /** Executed on tab completion for this command, returning a list of options the player can tab through.

Set | Type | Description  
--- | --- | --- 
usage | `String` | new example usage


---

### Public Methods for [`Command`](Command.md)

##### <a id='broadcastcommandmessage'></a>public static function __broadcastCommandMessage__(source, message)

_broadcastCommandMessage method_

Argument | Type | Description  
--- | --- | --- 
source | [`CommandSender`](CommandSender.md) | source argument
message | `String` | message argument

Returns | 
--- | 
`void` |


##### <a id='broadcastcommandmessage'></a>public static function __broadcastCommandMessage__(source, message, sendToSource)

_broadcastCommandMessage method_

Argument | Type | Description  
--- | --- | --- 
source | [`CommandSender`](CommandSender.md) | source argument
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


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	
