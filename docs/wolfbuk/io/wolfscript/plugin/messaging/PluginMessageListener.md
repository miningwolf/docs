## PluginMessageListener __interface__

>io.wolfscript.plugin.messaging.PluginMessageListener

---

### Interface Overview

A listener for a specific Plugin Channel, which will receive notifications of messages sent from a client.

Method | Type   
--- | :--- 
 function __onPluginMessageReceived__(channel, player) <br> _A method that will be thrown when a PluginMessageSource sends a plugin_ | `void`



---


### Public Methods for [`PluginMessageListener`](PluginMessageListener.md)

##### <a id='onpluginmessagereceived'></a>public  function __onPluginMessageReceived__(channel, player)

_A method that will be thrown when a PluginMessageSource sends a plugin message on a registered channel._

Argument | Type | Description  
--- | --- | --- 
channel | `String` | Channel that the message was sent through.
player | `Player` | Source of the message.

Returns | 
--- | 
`void` |


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

