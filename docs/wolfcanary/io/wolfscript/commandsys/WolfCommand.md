## WolfCommand __class__

>io.wolfscript.commandsys.WolfCommand
>Implements `Comparable<WolfCommand`

---

### Class Overview

Contains methods common to all types of chat commands.

Method | Type   
--- | :--- 
new __WolfCommand__(meta, owner, translator) <br> _Creates a new WolfScript command complete with localehelper for translating meta info,_ | _constructor_
new __WolfCommand__(meta, owner, translator, tabComplete) <br> _WolfCommand constructor_ | _constructor_
 readonly property __LocaleDescription__ <br> _LocaleDescription property_ | `String`
 readonly property __SubCommands__ <br> _Get: Creates a recursively created list of all subcommands and their subcommands etc etc_ | `List<WolfCommand>`
 readonly property __SubCommands__ <br> _Get: Returns the list of subcommands._ | `List<WolfCommand>`
 function __addSubCommand__(index, command) <br> _addSubCommand method_ | `boolean`
 function __canUse__(msgrec) <br> _Checks whether the given MessageReceiver has any of the permissions required to use this command._ | `boolean`
 function __compareTo__(o) <br> _compareTo method_ | `int`
 function __getSubCommand__(alias) <br> _getSubCommand method_ | [`WolfCommand`](WolfCommand.md)
 function __hasAlias__(alias) <br> _hasAlias method_ | `boolean`
 function __hasSubCommand__(alias) <br> _hasSubCommand method_ | `boolean`
final var __translator__ <br> _translator field_ | `LocaleHelper`



---

### Public Constructors for [`WolfCommand`](WolfCommand.md)

##### <a id='wolfcommand'></a>new __WolfCommand__(meta, owner, translator) 

_Creates a new WolfScript command complete with localehelper for translating meta info, command owner and the meta data from the Command annotation_

Argument | Type | Description  
--- | --- | --- 
meta | `Command` | the `Command`
owner | [`CommandOwner`](CommandOwner.md) | the [`CommandOwner`](CommandOwner.md)
translator | `LocaleHelper` | the `LocaleHelper` translator instance

##### <a id='wolfcommand'></a>new __WolfCommand__(meta, owner, translator, tabComplete) 

_WolfCommand constructor_

Argument | Type | Description  
--- | --- | --- 
meta | `Command` | meta argument
owner | [`CommandOwner`](CommandOwner.md) | owner argument
translator | `LocaleHelper` | translator argument
tabComplete | [`TabCompleteDispatch`](TabCompleteDispatch.md) | tabComplete argument

---

### Public Properties for [`WolfCommand`](WolfCommand.md)

##### <a id='localedescription'></a>public  readonly property __LocaleDescription__

_LocaleDescription property_

Get | 
--- | 
`String` |



##### <a id='subcommands'></a>public  readonly property __SubCommands__

_Get: Creates a recursively created list of all subcommands and their subcommands etc etc_

Get | Description
--- | --- 
`List<WolfCommand>` | list of Sub Command



##### <a id='subcommands'></a>public  readonly property __SubCommands__

_Get: Returns the list of subcommands._

Get | Description
--- | --- 
`List<WolfCommand>` | list of SubCommands



---

### Public Methods for [`WolfCommand`](WolfCommand.md)

##### <a id='addsubcommand'></a>public  function __addSubCommand__(index, command)

_addSubCommand method_

Argument | Type | Description  
--- | --- | --- 
index | `int` | index argument
command | [`WolfCommand`](WolfCommand.md) | command argument

Returns | 
--- | 
`boolean` |


##### <a id='canuse'></a>public  function __canUse__(msgrec)

_Checks whether the given MessageReceiver has any of the permissions required to use this command._

Argument | Type | Description  
--- | --- | --- 
msgrec | [`MessageReceiver`](../chat/MessageReceiver.md) | the command executor

Returns | Description
--- | --- 
`boolean` | `true` if has permission; `false` if not


##### <a id='compareto'></a>public  function __compareTo__(o)

_compareTo method_

Argument | Type | Description  
--- | --- | --- 
o | [`WolfCommand`](WolfCommand.md) | o argument

Returns | 
--- | 
`int` |


##### <a id='getsubcommand'></a>public  function __getSubCommand__(alias)

_getSubCommand method_

Argument | Type | Description  
--- | --- | --- 
alias | `String` | alias argument

Returns | 
--- | 
[`WolfCommand`](WolfCommand.md) |


##### <a id='hasalias'></a>public  function __hasAlias__(alias)

_hasAlias method_

Argument | Type | Description  
--- | --- | --- 
alias | `String` | alias argument

Returns | 
--- | 
`boolean` |


##### <a id='hassubcommand'></a>public  function __hasSubCommand__(alias)

_hasSubCommand method_

Argument | Type | Description  
--- | --- | --- 
alias | `String` | alias argument

Returns | 
--- | 
`boolean` |


---

### Public Fields for [`WolfCommand`](WolfCommand.md)

##### <a id='translator'></a>public final var __translator__

_translator field_

>Returns
>  `LocaleHelper`

---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

