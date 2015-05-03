## Server __interface__

>io.wolfscript.Server
>Extends [`PluginMessageRecipient`](plugin\messaging\PluginMessageRecipient.md)

---

### Interface Overview

Represents a server implementation.

Method | Type   
--- | :--- 
static final var __BROADCAST__ <br> _Used for all administrative messages, such as an operator using a_ | `String`
 |
__Inherited items from [`PluginMessageRecipient`](plugin\messaging\PluginMessageRecipient.md)__ |
 readonly property __ListeningPluginChannels__ <br> _Get: Sends this recipient a Plugin Message on the specified outgoing_ | `Set<String>`





---


### Public Fields for [`Server`](Server.md)

##### <a id='broadcast'></a>public static final var __BROADCAST__

_Used for all administrative messages, such as an operator using a command. <p> For use in {@link #broadcast(java.lang.String, java.lang.String)}. /
    public static final String BROADCAST_CHANNEL_ADMINISTRATIVE = "wolfscript.broadcast.admin";

    /** Used for all announcement messages, such as informing users that a player has joined. <p> For use in {@link #broadcast(java.lang.String, java.lang.String)}._

>Returns
>  `String`

---

### Public Properties for [`PluginMessageRecipient`](plugin\messaging\PluginMessageRecipient.md)

##### <a id='listeningpluginchannels'></a>public  readonly property __ListeningPluginChannels__

_Get: Sends this recipient a Plugin Message on the specified outgoing channel. <p> The message may not be larger than `Messenger#MAX_MESSAGE_SIZE` bytes, and the plugin must be registered to send messages on the specified channel._

Get | Description
--- | --- 
`Set<String>` | Set containing all the channels that this client may accept.



---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

