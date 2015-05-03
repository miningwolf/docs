## PluginMessageListenerRegistration __class__

>io.wolfscript.plugin.messaging.PluginMessageListenerRegistration

---

### Class Overview

Contains information about a [`Plugin`](..\Plugin.md)s registration to a plugin channel.

Method | Type   
--- | :--- 
new __PluginMessageListenerRegistration__(messenger, plugin, channel, listener) <br> _PluginMessageListenerRegistration constructor_ | _constructor_
 function __equals__(obj) <br> _equals method_ | `boolean`
 function __hashCode__() <br> _hashCode method_ | `int`
 function __isValid__() <br> _Gets the plugin channel that this registration is about._ | `boolean`



---

### Public Constructors for [`PluginMessageListenerRegistration`](PluginMessageListenerRegistration.md)

##### <a id='pluginmessagelistenerregistration'></a>new __PluginMessageListenerRegistration__(messenger, plugin, channel, listener) 

_PluginMessageListenerRegistration constructor_

Argument | Type | Description  
--- | --- | --- 
messenger | [`Messenger`](Messenger.md) | messenger argument
plugin | [`Plugin`](..\Plugin.md) | plugin argument
channel | `String` | channel argument
listener | [`PluginMessageListener`](PluginMessageListener.md) | listener argument

---

### Public Methods for [`PluginMessageListenerRegistration`](PluginMessageListenerRegistration.md)

##### <a id='equals'></a>public  function __equals__(obj)

_equals method_

Argument | Type | Description  
--- | --- | --- 
obj | `Object` | obj argument

Returns | 
--- | 
`boolean` |


##### <a id='hashcode'></a>public  function __hashCode__()

_hashCode method_

Returns | 
--- | 
`int` |


##### <a id='isvalid'></a>public  function __isValid__()

_Gets the plugin channel that this registration is about._

Returns | Description
--- | --- 
`boolean` | Plugin channel. /
    public String getChannel() {
        return channel;
    }

    /** Gets the registered listener described by this registration.


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

