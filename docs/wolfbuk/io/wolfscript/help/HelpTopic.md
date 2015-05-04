## HelpTopic __class__

>io.wolfscript.help.HelpTopic

---

### Class Overview

class HelpTopic

Method | Type   
--- | :--- 
 readonly property __Name__ <br> _Get: Returns the name of this help topic._ | `String`
 readonly property __ShortText__ <br> _Get: Returns a brief description that will be displayed in the topic index._ | `String`
 function __amendCanSee__(amendedPermission) <br> _Allows the server administrator to override the permission required to_ | `void`
 function __amendTopic__(amendedShortText, amendedFullText) <br> _Allows the server admin (or another plugin) to add or replace the_ | `void`
abstract function __canSee__(player) <br> _Determines if a `Player` is allowed to see this help topic._ | `boolean`
 function __getFullText__(forWho) <br> _Returns the full description of this help topic that is displayed when_ | `String`



---


### Public Properties for [`HelpTopic`](HelpTopic.md)

##### <a id='name'></a>public  readonly property __Name__

_Get: Returns the name of this help topic._

Get | Description
--- | --- 
`String` | The topic name.



##### <a id='shorttext'></a>public  readonly property __ShortText__

_Get: Returns a brief description that will be displayed in the topic index._

Get | Description
--- | --- 
`String` | A brief topic description.



---

### Public Methods for [`HelpTopic`](HelpTopic.md)

##### <a id='amendcansee'></a>public  function __amendCanSee__(amendedPermission)

_Allows the server administrator to override the permission required to see a help topic. <p> HelpTopic implementations should take this into account when determining topic visibility on the `HelpTopic#canSee(CommandSender)` function._

Argument | Type | Description  
--- | --- | --- 
amendedPermission | `String` | The permission node the server administrator wishes to apply to this topic.

Returns | 
--- | 
`void` |


##### <a id='amendtopic'></a>public  function __amendTopic__(amendedShortText, amendedFullText)

_Allows the server admin (or another plugin) to add or replace the contents of a help topic. <p> A null in either parameter will leave that part of the topic unchanged. In either amending parameter, the string {@literal <text>} is replaced with the existing contents in the help topic. Use this to append or prepend additional content into an automatically generated help topic._

Argument | Type | Description  
--- | --- | --- 
amendedShortText | `String` | The new topic short text to use, or null to leave alone.
amendedFullText | `String` | The new topic full text to use, or null to leave alone.

Returns | 
--- | 
`void` |


##### <a id='cansee'></a>public abstract function __canSee__(player)

_Determines if a `Player` is allowed to see this help topic. <p> HelpTopic implementations should take server administrator wishes into account as set by the `HelpTopic#amendCanSee(String)` function._

Argument | Type | Description  
--- | --- | --- 
player | [`CommandSender`](../command/CommandSender.md) | The Player in question.

Returns | Description
--- | --- 
`boolean` | True of the Player can see this help topic, false otherwise.


##### <a id='getfulltext'></a>public  function __getFullText__(forWho)

_Returns the full description of this help topic that is displayed when the user requests this topic's details. <p> The result will be paginated to properly fit the user's client._

Argument | Type | Description  
--- | --- | --- 
forWho | [`CommandSender`](../command/CommandSender.md) | The player or console requesting the full text. Useful for further security trimming the command's full text based on sub-permissions in custom implementations.

Returns | Description
--- | --- 
`String` | A full topic description.


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

