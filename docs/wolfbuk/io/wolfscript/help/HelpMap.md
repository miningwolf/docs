## HelpMap __interface__

>io.wolfscript.help.HelpMap

---

### Interface Overview

interface HelpMap

Method | Type   
--- | :--- 
 readonly property __HelpTopics__ <br> _Get: Returns a collection of all the registered help topics._ | `Collection<HelpTopic>`
 readonly property __IgnoredPlugins__ <br> _Get: Gets the list of plugins the server administrator has chosen to exclude_ | `List<String>`
 function __addTopic__(topic) <br> _Adds a topic to the server's help index._ | `void`
 function __clear__() <br> _Clears out the contents of the help index. Normally called during_ | `void`
 function __getHelpTopic__(topicName) <br> _Returns a help topic for a given topic name._ | [`HelpTopic`](HelpTopic.md)
 function __registerHelpTopicFactory__() <br> _Associates a [`HelpTopicFactory`](HelpTopicFactory.md) object with given command base_ | `void`



---


### Public Properties for [`HelpMap`](HelpMap.md)

##### <a id='helptopics'></a>public  readonly property __HelpTopics__

_Get: Returns a collection of all the registered help topics._

Get | Description
--- | --- 
`Collection<HelpTopic>` | All the registered help topics.



##### <a id='ignoredplugins'></a>public  readonly property __IgnoredPlugins__

_Get: Gets the list of plugins the server administrator has chosen to exclude from the help index. Plugin authors who choose to directly extend [`Command`](../command/Command.md) instead of [`PluginCommand`](../command/PluginCommand.md) will need to check this collection in their [`HelpTopicFactory`](HelpTopicFactory.md) implementations to ensure they meet the server administrator's expectations._

Get | Description
--- | --- 
`List<String>` | A list of plugins that should be excluded from the help index.



---

### Public Methods for [`HelpMap`](HelpMap.md)

##### <a id='addtopic'></a>public  function __addTopic__(topic)

_Adds a topic to the server's help index._

Argument | Type | Description  
--- | --- | --- 
topic | [`HelpTopic`](HelpTopic.md) | The new help topic to add.

Returns | 
--- | 
`void` |


##### <a id='clear'></a>public  function __clear__()

_Clears out the contents of the help index. Normally called during server reload._

Returns | 
--- | 
`void` |


##### <a id='gethelptopic'></a>public  function __getHelpTopic__(topicName)

_Returns a help topic for a given topic name._

Argument | Type | Description  
--- | --- | --- 
topicName | `String` | The help topic name to look up.

Returns | Description
--- | --- 
[`HelpTopic`](HelpTopic.md) | A [`HelpTopic`](HelpTopic.md) object matching the topic name or null if none can be found.


##### <a id='registerhelptopicfactory'></a>public  function __registerHelpTopicFactory__()

_Associates a [`HelpTopicFactory`](HelpTopicFactory.md) object with given command base class. Plugins typically call this method during `onLoad()`. Once registered, the custom HelpTopicFactory will be used to create a custom [`HelpTopic`](HelpTopic.md) for all commands deriving from the `commandClass` base class, or all commands deriving from [`PluginCommand`](../command/PluginCommand.md) who's executor derives from `commandClass` base class._

Returns | 
--- | 
`void` |


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

