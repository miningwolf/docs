## Messenger __interface__

>io.wolfscript.plugin.messaging.Messenger

---

### Interface Overview

A class responsible for managing the registrations of plugin channels and their listeners.

Method | Type   
--- | :--- 
 readonly property __IncomingChannels__ <br> _Get: Gets a set containing all the incoming plugin channels._ | `Set<String>`
 readonly property __OutgoingChannels__ <br> _Get: Gets a set containing all the outgoing plugin channels._ | `Set<String>`
 function __getOutgoingChannels__(plugin) <br> _Gets a set containing all the outgoing plugin channels that the_ | `Set<String>`
 function __dispatchIncomingMessage__(source, channel) <br> _Dispatches the specified incoming message to any registered listeners._ | `void`
 function __isReservedChannel__(channel) <br> _Checks if the specified channel is a reserved name._ | `boolean`
 function __isOutgoingChannelRegistered__(plugin, channel) <br> _Checks if the specified plugin has registered to send outgoing messages_ | `boolean`
 function __isIncomingChannelRegistered__(plugin, channel) <br> _Checks if the specified plugin has registered to receive incoming_ | `boolean`
 function __isRegistrationValid__(registration) <br> _Checks if the specified plugin message listener registration is valid._ | `boolean`
 function __getIncomingChannelRegistrations__(plugin, channel) <br> _Gets a set containing all the incoming plugin channel registrations_ | `Set<PluginMessageListenerRegistration>`
 function __getIncomingChannelRegistrations__(channel) <br> _Gets a set containing all the incoming plugin channel registrations_ | `Set<PluginMessageListenerRegistration>`
 function __getIncomingChannelRegistrations__(plugin) <br> _Gets a set containing all the incoming plugin channel registrations_ | `Set<PluginMessageListenerRegistration>`
 function __getIncomingChannels__(plugin) <br> _Gets a set containing all the incoming plugin channels that the_ | `Set<String>`
 function __registerIncomingPluginChannel__(plugin, channel, listener) <br> _Registers the specific plugin for listening on the requested incoming_ | [`PluginMessageListenerRegistration`](PluginMessageListenerRegistration.md)
 function __registerOutgoingPluginChannel__(plugin, channel) <br> _Registers the specific plugin to the requested outgoing plugin channel,_ | `void`
 function __unregisterIncomingPluginChannel__(plugin) <br> _Unregisters the specific plugin from listening on all plugin channels_ | `void`
 function __unregisterIncomingPluginChannel__(plugin, channel) <br> _Unregisters the specific plugin from listening on the requested_ | `void`
 function __unregisterIncomingPluginChannel__(plugin, channel, listener) <br> _Unregisters the specific plugin's listener from listening on the_ | `void`
 function __unregisterOutgoingPluginChannel__(plugin) <br> _Unregisters the specific plugin from all outgoing plugin channels, no_ | `void`
 function __unregisterOutgoingPluginChannel__(plugin, channel) <br> _Unregisters the specific plugin from the requested outgoing plugin_ | `void`
static final var __MAX__ <br> _Represents the largest size that an individual Plugin Message may be._ | `int`
static final var __MAX__ <br> _Represents the largest size that a Plugin Channel may be._ | `int`



---


### Public Properties for [`Messenger`](Messenger.md)

##### <a id='incomingchannels'></a>public  readonly property __IncomingChannels__

_Get: Gets a set containing all the incoming plugin channels._

Get | Description
--- | --- 
`Set<String>` | List of all registered incoming plugin channels.



##### <a id='outgoingchannels'></a>public  readonly property __OutgoingChannels__

_Get: Gets a set containing all the outgoing plugin channels._

Get | Description
--- | --- 
`Set<String>` | List of all registered outgoing plugin channels.



---

### Public Methods for [`Messenger`](Messenger.md)

##### <a id='getoutgoingchannels'></a>public  function __getOutgoingChannels__(plugin)

_Gets a set containing all the outgoing plugin channels that the specified plugin is registered to._

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](../Plugin.md) | Plugin to retrieve channels for.

Returns | Description
--- | --- 
`Set<String>` | List of all registered outgoing plugin channels that a plugin is registered to.


##### <a id='dispatchincomingmessage'></a>public  function __dispatchIncomingMessage__(source, channel)

_Dispatches the specified incoming message to any registered listeners._

Argument | Type | Description  
--- | --- | --- 
source | `Player` | Source of the message.
channel | `String` | Channel that the message was sent by.

Returns | 
--- | 
`void` |


##### <a id='isreservedchannel'></a>public  function __isReservedChannel__(channel)

_Checks if the specified channel is a reserved name._

Argument | Type | Description  
--- | --- | --- 
channel | `String` | Channel name to check.

Returns | Description
--- | --- 
`boolean` | True if the channel is reserved, otherwise false.


##### <a id='isoutgoingchannelregistered'></a>public  function __isOutgoingChannelRegistered__(plugin, channel)

_Checks if the specified plugin has registered to send outgoing messages through the requested channel._

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](../Plugin.md) | Plugin to check registration for.
channel | `String` | Channel to test for.

Returns | Description
--- | --- 
`boolean` | True if the channel is registered, else false.


##### <a id='isincomingchannelregistered'></a>public  function __isIncomingChannelRegistered__(plugin, channel)

_Checks if the specified plugin has registered to receive incoming messages through the requested channel._

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](../Plugin.md) | Plugin to check registration for.
channel | `String` | Channel to test for.

Returns | Description
--- | --- 
`boolean` | True if the channel is registered, else false.


##### <a id='isregistrationvalid'></a>public  function __isRegistrationValid__(registration)

_Checks if the specified plugin message listener registration is valid. <p> A registration is considered valid if it has not be unregistered and that the plugin is still enabled._

Argument | Type | Description  
--- | --- | --- 
registration | [`PluginMessageListenerRegistration`](PluginMessageListenerRegistration.md) | Registration to check.

Returns | Description
--- | --- 
`boolean` | True if the registration is valid, otherwise false.


##### <a id='getincomingchannelregistrations'></a>public  function __getIncomingChannelRegistrations__(plugin, channel)

_Gets a set containing all the incoming plugin channel registrations that the specified plugin has on the requested channel._

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](../Plugin.md) | Plugin to retrieve registrations for.
channel | `String` | Channel to filter registrations by.

Returns | Description
--- | --- 
`Set<PluginMessageListenerRegistration>` | List of all registrations that the plugin has.


##### <a id='getincomingchannelregistrations'></a>public  function __getIncomingChannelRegistrations__(channel)

_Gets a set containing all the incoming plugin channel registrations that are on the requested channel._

Argument | Type | Description  
--- | --- | --- 
channel | `String` | Channel to retrieve registrations for.

Returns | Description
--- | --- 
`Set<PluginMessageListenerRegistration>` | List of all registrations that are on the channel.


##### <a id='getincomingchannelregistrations'></a>public  function __getIncomingChannelRegistrations__(plugin)

_Gets a set containing all the incoming plugin channel registrations that the specified plugin has._

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](../Plugin.md) | Plugin to retrieve registrations for.

Returns | Description
--- | --- 
`Set<PluginMessageListenerRegistration>` | List of all registrations that the plugin has.


##### <a id='getincomingchannels'></a>public  function __getIncomingChannels__(plugin)

_Gets a set containing all the incoming plugin channels that the specified plugin is registered for._

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](../Plugin.md) | Plugin to retrieve channels for.

Returns | Description
--- | --- 
`Set<String>` | List of all registered incoming plugin channels that the plugin is registered for.


##### <a id='registerincomingpluginchannel'></a>public  function __registerIncomingPluginChannel__(plugin, channel, listener)

_Registers the specific plugin for listening on the requested incoming plugin channel, allowing it to act upon any plugin messages._

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](../Plugin.md) | Plugin that wishes to register to this channel.
channel | `String` | Channel to register.
listener | [`PluginMessageListener`](PluginMessageListener.md) | Listener to receive messages on.

Returns | Description
--- | --- 
[`PluginMessageListenerRegistration`](PluginMessageListenerRegistration.md) | The resulting registration that was made as a result of this method.


##### <a id='registeroutgoingpluginchannel'></a>public  function __registerOutgoingPluginChannel__(plugin, channel)

_Registers the specific plugin to the requested outgoing plugin channel, allowing it to send messages through that channel to any clients._

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](../Plugin.md) | Plugin that wishes to send messages through the channel.
channel | `String` | Channel to register.

Returns | 
--- | 
`void` |


##### <a id='unregisterincomingpluginchannel'></a>public  function __unregisterIncomingPluginChannel__(plugin)

_Unregisters the specific plugin from listening on all plugin channels through all listeners._

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](../Plugin.md) | Plugin that wishes to unregister from this channel.

Returns | 
--- | 
`void` |


##### <a id='unregisterincomingpluginchannel'></a>public  function __unregisterIncomingPluginChannel__(plugin, channel)

_Unregisters the specific plugin from listening on the requested incoming plugin channel, no longer allowing it to act upon any plugin messages._

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](../Plugin.md) | Plugin that wishes to unregister from this channel.
channel | `String` | Channel to unregister.

Returns | 
--- | 
`void` |


##### <a id='unregisterincomingpluginchannel'></a>public  function __unregisterIncomingPluginChannel__(plugin, channel, listener)

_Unregisters the specific plugin's listener from listening on the requested incoming plugin channel, no longer allowing it to act upon any plugin messages._

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](../Plugin.md) | Plugin that wishes to unregister from this channel.
channel | `String` | Channel to unregister.
listener | [`PluginMessageListener`](PluginMessageListener.md) | Listener to stop receiving messages on.

Returns | 
--- | 
`void` |


##### <a id='unregisteroutgoingpluginchannel'></a>public  function __unregisterOutgoingPluginChannel__(plugin)

_Unregisters the specific plugin from all outgoing plugin channels, no longer allowing it to send any plugin messages._

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](../Plugin.md) | Plugin that no longer wishes to send plugin messages.

Returns | 
--- | 
`void` |


##### <a id='unregisteroutgoingpluginchannel'></a>public  function __unregisterOutgoingPluginChannel__(plugin, channel)

_Unregisters the specific plugin from the requested outgoing plugin channel, no longer allowing it to send messages through that channel to any clients._

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](../Plugin.md) | Plugin that no longer wishes to send messages through the channel.
channel | `String` | Channel to unregister.

Returns | 
--- | 
`void` |


---

### Public Fields for [`Messenger`](Messenger.md)

##### <a id='max'></a>public static final var __MAX__

_Represents the largest size that an individual Plugin Message may be._

>Returns
>  `int`

##### <a id='max'></a>public static final var __MAX__

_Represents the largest size that a Plugin Channel may be._

>Returns
>  `int`

---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

