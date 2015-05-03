## StandardMessenger __class__

>io.wolfscript.plugin.messaging.StandardMessenger
>Implements [`Messenger`](Messenger.md)

---

### Class Overview

Standard implementation to [`Messenger`](Messenger.md)

Method | Type   
--- | :--- 
 readonly property __IncomingChannels__ <br> _IncomingChannels property_ | `Set<String>`
 readonly property __OutgoingChannels__ <br> _OutgoingChannels property_ | `Set<String>`
 function __isReservedChannel__(channel) <br> _isReservedChannel method_ | `boolean`
 function __dispatchIncomingMessage__(source, channel) <br> _dispatchIncomingMessage method_ | `void`
 function __isOutgoingChannelRegistered__(plugin, channel) <br> _isOutgoingChannelRegistered method_ | `boolean`
 function __isIncomingChannelRegistered__(plugin, channel) <br> _isIncomingChannelRegistered method_ | `boolean`
 function __isRegistrationValid__(registration) <br> _isRegistrationValid method_ | `boolean`
 function __getIncomingChannelRegistrations__(plugin, channel) <br> _getIncomingChannelRegistrations method_ | `Set<PluginMessageListenerRegistration>`
 function __getIncomingChannelRegistrations__(channel) <br> _getIncomingChannelRegistrations method_ | `Set<PluginMessageListenerRegistration>`
 function __getOutgoingChannels__(plugin) <br> _getOutgoingChannels method_ | `Set<String>`
 function __getIncomingChannelRegistrations__(plugin) <br> _getIncomingChannelRegistrations method_ | `Set<PluginMessageListenerRegistration>`
 function __getIncomingChannels__(plugin) <br> _getIncomingChannels method_ | `Set<String>`
 function __registerIncomingPluginChannel__(plugin, channel, listener) <br> _registerIncomingPluginChannel method_ | [`PluginMessageListenerRegistration`](PluginMessageListenerRegistration.md)
 function __registerOutgoingPluginChannel__(plugin, channel) <br> _registerOutgoingPluginChannel method_ | `void`
 function __unregisterIncomingPluginChannel__(plugin) <br> _unregisterIncomingPluginChannel method_ | `void`
 function __unregisterIncomingPluginChannel__(plugin, channel) <br> _unregisterIncomingPluginChannel method_ | `void`
 function __unregisterIncomingPluginChannel__(plugin, channel, listener) <br> _unregisterIncomingPluginChannel method_ | `void`
 function __unregisterOutgoingPluginChannel__(plugin) <br> _unregisterOutgoingPluginChannel method_ | `void`
 function __unregisterOutgoingPluginChannel__(plugin, channel) <br> _unregisterOutgoingPluginChannel method_ | `void`
static function __validatePluginMessage__(messenger, source, channel) <br> _Validates a Plugin Channel name._ | `void`



---


### Public Properties for [`StandardMessenger`](StandardMessenger.md)

##### <a id='incomingchannels'></a>public  readonly property __IncomingChannels__

_IncomingChannels property_

Get | 
--- | 
`Set<String>` |



##### <a id='outgoingchannels'></a>public  readonly property __OutgoingChannels__

_OutgoingChannels property_

Get | 
--- | 
`Set<String>` |



---

### Public Methods for [`StandardMessenger`](StandardMessenger.md)

##### <a id='isreservedchannel'></a>public  function __isReservedChannel__(channel)

_isReservedChannel method_

Argument | Type | Description  
--- | --- | --- 
channel | `String` | channel argument

Returns | 
--- | 
`boolean` |


##### <a id='dispatchincomingmessage'></a>public  function __dispatchIncomingMessage__(source, channel)

_dispatchIncomingMessage method_

Argument | Type | Description  
--- | --- | --- 
source | `Player` | source argument
channel | `String` | channel argument

Returns | 
--- | 
`void` |


##### <a id='isoutgoingchannelregistered'></a>public  function __isOutgoingChannelRegistered__(plugin, channel)

_isOutgoingChannelRegistered method_

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](..\Plugin.md) | plugin argument
channel | `String` | channel argument

Returns | 
--- | 
`boolean` |


##### <a id='isincomingchannelregistered'></a>public  function __isIncomingChannelRegistered__(plugin, channel)

_isIncomingChannelRegistered method_

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](..\Plugin.md) | plugin argument
channel | `String` | channel argument

Returns | 
--- | 
`boolean` |


##### <a id='isregistrationvalid'></a>public  function __isRegistrationValid__(registration)

_isRegistrationValid method_

Argument | Type | Description  
--- | --- | --- 
registration | [`PluginMessageListenerRegistration`](PluginMessageListenerRegistration.md) | registration argument

Returns | 
--- | 
`boolean` |


##### <a id='getincomingchannelregistrations'></a>public  function __getIncomingChannelRegistrations__(plugin, channel)

_getIncomingChannelRegistrations method_

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](..\Plugin.md) | plugin argument
channel | `String` | channel argument

Returns | 
--- | 
`Set<PluginMessageListenerRegistration>` |


##### <a id='getincomingchannelregistrations'></a>public  function __getIncomingChannelRegistrations__(channel)

_getIncomingChannelRegistrations method_

Argument | Type | Description  
--- | --- | --- 
channel | `String` | channel argument

Returns | 
--- | 
`Set<PluginMessageListenerRegistration>` |


##### <a id='getoutgoingchannels'></a>public  function __getOutgoingChannels__(plugin)

_getOutgoingChannels method_

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](..\Plugin.md) | plugin argument

Returns | 
--- | 
`Set<String>` |


##### <a id='getincomingchannelregistrations'></a>public  function __getIncomingChannelRegistrations__(plugin)

_getIncomingChannelRegistrations method_

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](..\Plugin.md) | plugin argument

Returns | 
--- | 
`Set<PluginMessageListenerRegistration>` |


##### <a id='getincomingchannels'></a>public  function __getIncomingChannels__(plugin)

_getIncomingChannels method_

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](..\Plugin.md) | plugin argument

Returns | 
--- | 
`Set<String>` |


##### <a id='registerincomingpluginchannel'></a>public  function __registerIncomingPluginChannel__(plugin, channel, listener)

_registerIncomingPluginChannel method_

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](..\Plugin.md) | plugin argument
channel | `String` | channel argument
listener | [`PluginMessageListener`](PluginMessageListener.md) | listener argument

Returns | 
--- | 
[`PluginMessageListenerRegistration`](PluginMessageListenerRegistration.md) |


##### <a id='registeroutgoingpluginchannel'></a>public  function __registerOutgoingPluginChannel__(plugin, channel)

_registerOutgoingPluginChannel method_

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](..\Plugin.md) | plugin argument
channel | `String` | channel argument

Returns | 
--- | 
`void` |


##### <a id='unregisterincomingpluginchannel'></a>public  function __unregisterIncomingPluginChannel__(plugin)

_unregisterIncomingPluginChannel method_

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](..\Plugin.md) | plugin argument

Returns | 
--- | 
`void` |


##### <a id='unregisterincomingpluginchannel'></a>public  function __unregisterIncomingPluginChannel__(plugin, channel)

_unregisterIncomingPluginChannel method_

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](..\Plugin.md) | plugin argument
channel | `String` | channel argument

Returns | 
--- | 
`void` |


##### <a id='unregisterincomingpluginchannel'></a>public  function __unregisterIncomingPluginChannel__(plugin, channel, listener)

_unregisterIncomingPluginChannel method_

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](..\Plugin.md) | plugin argument
channel | `String` | channel argument
listener | [`PluginMessageListener`](PluginMessageListener.md) | listener argument

Returns | 
--- | 
`void` |


##### <a id='unregisteroutgoingpluginchannel'></a>public  function __unregisterOutgoingPluginChannel__(plugin)

_unregisterOutgoingPluginChannel method_

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](..\Plugin.md) | plugin argument

Returns | 
--- | 
`void` |


##### <a id='unregisteroutgoingpluginchannel'></a>public  function __unregisterOutgoingPluginChannel__(plugin, channel)

_unregisterOutgoingPluginChannel method_

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](..\Plugin.md) | plugin argument
channel | `String` | channel argument

Returns | 
--- | 
`void` |


##### <a id='validatepluginmessage'></a>public static function __validatePluginMessage__(messenger, source, channel)

_Validates a Plugin Channel name._

Argument | Type | Description  
--- | --- | --- 
messenger | [`Messenger`](Messenger.md) | Messenger to use for validation.
source | [`Plugin`](..\Plugin.md) | Source plugin of the Message.
channel | `String` | Channel name to validate. /
    public static void validateChannel(String channel) {
        if (channel == null) {
            throw new IllegalArgumentException("Channel cannot be null");
        }
        if (channel.length() > Messenger.MAX_CHANNEL_SIZE) {
            throw new ChannelNameTooLongException(channel);
        }
    }

    /** Validates the input of a Plugin Message, ensuring the arguments are all valid.

Returns | 
--- | 
`void` |


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

