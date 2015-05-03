## HelpTopicFactory __interface__

>io.wolfscript.help.HelpTopicFactory
>Extends [`Command`](..\command\Command.md)

---

### Interface Overview

A HelpTopicFactory is used to create custom [`HelpTopic`](HelpTopic.md) objects from commands that inherit from a common base class or have executors that inherit from a common base class. You can use a custom HelpTopic to change the way all the commands in your plugin display in the help. If your plugin implements a complex permissions system, a custom help topic may also be appropriate. <p> To automatically bind your plugin's commands to your custom HelpTopic implementation, first make sure all your commands or executors derive from a custom base class (it doesn't have to do anything). Next implement a custom HelpTopicFactory that accepts your custom command base class and instantiates an instance of your custom HelpTopic from it. Finally, register your HelpTopicFactory against your command base class using the {@link HelpMap#registerHelpTopicFactory(Class, HelpTopicFactory)} method. <p> As the help system iterates over all registered commands to make help topics, it first checks to see if there is a HelpTopicFactory registered for the command's base class. If so, the factory is used to make a help topic rather than a generic help topic. If no factory is found for the command's base class and the command derives from [`PluginCommand`](..\command\PluginCommand.md), then the type of the command's executor is inspected looking for a registered HelpTopicFactory. Finally, if no factory is found, a generic help topic is created for the command.

Method | Type   
--- | :--- 
 function __createTopic__(command) <br> _This method accepts a command deriving from a custom command base class_ | [`HelpTopic`](HelpTopic.md)
 |
__Inherited items from [`Command`](..\command\Command.md)__ |
 writeonly property __Usage__ <br> _Set: Executes the command, returning its success_ | [`Command`](..\command\Command.md)
static function __broadcastCommandMessage__(source, message) <br> _broadcastCommandMessage method_ | `void`
static function __broadcastCommandMessage__(source, message, sendToSource) <br> _broadcastCommandMessage method_ | `void`
 function __toString__() <br> _toString method_ | `String`





---


### Public Methods for [`HelpTopicFactory`](HelpTopicFactory.md)

##### <a id='createtopic'></a>public  function __createTopic__(command)

_This method accepts a command deriving from a custom command base class and constructs a custom HelpTopic for it._

Argument | Type | Description  
--- | --- | --- 
command | `TCommand` | The custom command to build a help topic for.

Returns | Description
--- | --- 
[`HelpTopic`](HelpTopic.md) | A new custom help topic or `null` to intentionally NOT create a topic.


---

### Public Properties for [`Command`](..\command\Command.md)

##### <a id='usage'></a>public  writeonly property __Usage__

_Set: Executes the command, returning its success_

Get | Description
--- | --- 
[`Command`](..\command\Command.md) | true if the command was successful, otherwise false /
    public abstract boolean execute(CommandSender sender, String commandLabel, String[] args);

    /** Executed on tab completion for this command, returning a list of options the player can tab through.

Set | Type | Description  
--- | --- | --- 
usage | `String` | new example usage


---

### Public Methods for [`Command`](..\command\Command.md)

##### <a id='broadcastcommandmessage'></a>public static function __broadcastCommandMessage__(source, message)

_broadcastCommandMessage method_

Argument | Type | Description  
--- | --- | --- 
source | [`CommandSender`](..\command\CommandSender.md) | source argument
message | `String` | message argument

Returns | 
--- | 
`void` |


##### <a id='broadcastcommandmessage'></a>public static function __broadcastCommandMessage__(source, message, sendToSource)

_broadcastCommandMessage method_

Argument | Type | Description  
--- | --- | --- 
source | [`CommandSender`](..\command\CommandSender.md) | source argument
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
	

