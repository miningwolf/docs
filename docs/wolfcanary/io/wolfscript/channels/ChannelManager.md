## ChannelManager __class__

>io.wolfscript.channels.ChannelManager
>Implements [`ChannelManagerInterface`](ChannelManagerInterface.md)

---

### Class Overview

This class manages incoming and outgoing Packet250CustomPayload's. This allows custom communication between the client and server. <br> <br> <b>NOTE:</b><br> - Channel names must be 20 characters long or less.<br> - Byte data can be no larger than 32 kb.<br> - Neither the channel, plugin, listener, player or byte[] can be null in any case.<br> - The channels 'REGISTER' and 'UNREGISTER' are reserved by the server and invalid.<br> - no name or and empty String is an invalid channel name.<br> - To register and unregister the client, send packets with the names 'REGISTER' and 'UNREGISTER' respectively, with a message of the actual channel name to register/unregister.<br>

Method | Type   
--- | :--- 
 function __registerClient__(channel, handler) <br> _{@inheritDoc}_ | `void`
 function __registerListener__(plugin, channel, listener) <br> _{@inheritDoc}_ | `void`
abstract function __sendCustomPayloadToAllPlayers__(channel) <br> _{@inheritDoc}_ | `boolean`
 function __sendCustomPayloadToListeners__(channel, player) <br> _{@inheritDoc}_ | `void`
abstract function __sendCustomPayloadToPlayer__(channel, player) <br> _{@inheritDoc}_ | `boolean`
 function __unregisterClient__(channel, handler) <br> _{@inheritDoc}_ | `boolean`
 function __unregisterClientAll__(handler) <br> _{@inheritDoc}_ | `boolean`
 function __unregisterListeners__(plugin) <br> _{@inheritDoc}_ | `boolean`



---


### Public Methods for [`ChannelManager`](ChannelManager.md)

##### <a id='registerclient'></a>public  function __registerClient__(channel, handler)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
channel | `String` | channel argument
handler | [`NetServerHandler`](../api/NetServerHandler.md) | handler argument

Returns | 
--- | 
`void` |


##### <a id='registerlistener'></a>public  function __registerListener__(plugin, channel, listener)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
plugin | `Plugin` | plugin argument
channel | `String` | channel argument
listener | [`ChannelListener`](ChannelListener.md) | listener argument

Returns | 
--- | 
`void` |


##### <a id='sendcustompayloadtoallplayers'></a>public abstract function __sendCustomPayloadToAllPlayers__(channel)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
channel | `String` | channel argument

Returns | 
--- | 
`boolean` |


##### <a id='sendcustompayloadtolisteners'></a>public  function __sendCustomPayloadToListeners__(channel, player)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
channel | `String` | channel argument
player | `Player` | player argument

Returns | 
--- | 
`void` |


##### <a id='sendcustompayloadtoplayer'></a>public abstract function __sendCustomPayloadToPlayer__(channel, player)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
channel | `String` | channel argument
player | `Player` | player argument

Returns | 
--- | 
`boolean` |


##### <a id='unregisterclient'></a>public  function __unregisterClient__(channel, handler)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
channel | `String` | channel argument
handler | [`NetServerHandler`](../api/NetServerHandler.md) | handler argument

Returns | 
--- | 
`boolean` |


##### <a id='unregisterclientall'></a>public  function __unregisterClientAll__(handler)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
handler | [`NetServerHandler`](../api/NetServerHandler.md) | handler argument

Returns | 
--- | 
`boolean` |


##### <a id='unregisterlisteners'></a>public  function __unregisterListeners__(plugin)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
plugin | `Plugin` | plugin argument

Returns | 
--- | 
`boolean` |


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

