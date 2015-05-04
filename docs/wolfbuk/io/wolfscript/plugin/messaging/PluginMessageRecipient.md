## PluginMessageRecipient __interface__

>io.wolfscript.plugin.messaging.PluginMessageRecipient

---

### Interface Overview

Represents a possible recipient for a Plugin Message.

Method | Type   
--- | :--- 
 readonly property __ListeningPluginChannels__ <br> _Get: Gets a set containing all the Plugin Channels that this client is_ | `Set<String>`
 function __sendPluginMessage__(source, channel) <br> _Sends this recipient a Plugin Message on the specified outgoing_ | `void`



---


### Public Properties for [`PluginMessageRecipient`](PluginMessageRecipient.md)

##### <a id='listeningpluginchannels'></a>public  readonly property __ListeningPluginChannels__

_Get: Gets a set containing all the Plugin Channels that this client is listening on._

Get | Description
--- | --- 
`Set<String>` | Set containing all the channels that this client may accept.



---

### Public Methods for [`PluginMessageRecipient`](PluginMessageRecipient.md)

##### <a id='sendpluginmessage'></a>public  function __sendPluginMessage__(source, channel)

_Sends this recipient a Plugin Message on the specified outgoing channel. <p> The message may not be larger than `Messenger#MAX_MESSAGE_SIZE` bytes, and the plugin must be registered to send messages on the specified channel._

Argument | Type | Description  
--- | --- | --- 
source | [`Plugin`](../Plugin.md) | The plugin that sent this message.
channel | `String` | The channel to send this message on.

Returns | 
--- | 
`void` |


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

