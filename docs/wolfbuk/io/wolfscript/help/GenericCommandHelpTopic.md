## GenericCommandHelpTopic __class__

>io.wolfscript.help.GenericCommandHelpTopic
>Extends [`HelpTopic`](HelpTopic.md)

---

### Class Overview

Lacking an alternative, the help system will create instances of GenericCommandHelpTopic for each command in the server's CommandMap. You can use this class as a base class for custom help topics, or as an example for how to write your own.

Method | Type   
--- | :--- 
new __GenericCommandHelpTopic__(command) <br> _GenericCommandHelpTopic constructor_ | _constructor_
 function __canSee__(sender) <br> _canSee method_ | `boolean`
 |
__Inherited items from [`HelpTopic`](HelpTopic.md)__ |





---

### Public Constructors for [`GenericCommandHelpTopic`](GenericCommandHelpTopic.md)

##### <a id='genericcommandhelptopic'></a>new __GenericCommandHelpTopic__(command) 

_GenericCommandHelpTopic constructor_

Argument | Type | Description  
--- | --- | --- 
command | [`Command`](..\command\Command.md) | command argument

---

### Public Methods for [`GenericCommandHelpTopic`](GenericCommandHelpTopic.md)

##### <a id='cansee'></a>public  function __canSee__(sender)

_canSee method_

Argument | Type | Description  
--- | --- | --- 
sender | [`CommandSender`](..\command\CommandSender.md) | sender argument

Returns | 
--- | 
`boolean` |


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

