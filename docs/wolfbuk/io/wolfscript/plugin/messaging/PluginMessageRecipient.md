## PluginMessageRecipient __interface__

>io.wolfscript.plugin.messaging.PluginMessageRecipient

---

### Interface Overview

Represents a possible recipient for a Plugin Message.

Method | Type   
--- | :--- 
 readonly property __ListeningPluginChannels__ <br> _Get: Sends this recipient a Plugin Message on the specified outgoing_ | `Set<String>`



---


### Public Properties for [`PluginMessageRecipient`](PluginMessageRecipient.md)

##### <a id='listeningpluginchannels'></a>public  readonly property __ListeningPluginChannels__

_Get: Sends this recipient a Plugin Message on the specified outgoing channel. <p> The message may not be larger than `Messenger#MAX_MESSAGE_SIZE` bytes, and the plugin must be registered to send messages on the specified channel._

Get | Description
--- | --- 
`Set<String>` | Set containing all the channels that this client may accept.



---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

