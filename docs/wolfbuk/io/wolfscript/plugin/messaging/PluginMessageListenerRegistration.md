## PluginMessageListenerRegistration __class__

>io.wolfscript.plugin.messaging.PluginMessageListenerRegistration

---

### Class Overview

Contains information about a [`Plugin`](../Plugin.md)s registration to a plugin channel.

Method | Type   
--- | :--- 
new __PluginMessageListenerRegistration__(messenger, plugin, channel, listener) <br> _PluginMessageListenerRegistration constructor_ | _constructor_
 readonly property __Channel__ <br> _Get: Gets the plugin channel that this registration is about._ | `String`
 readonly property __Listener__ <br> _Get: Gets the registered listener described by this registration._ | [`PluginMessageListener`](PluginMessageListener.md)
 readonly property __Plugin__ <br> _Get: Gets the plugin that this registration is for._ | [`Plugin`](../Plugin.md)
 function __equals__(obj) <br> _equals method_ | `boolean`
 function __hashCode__() <br> _hashCode method_ | `int`
 function __isValid__() <br> _Checks if this registration is still valid._ | `boolean`



---

### Public Constructors for [`PluginMessageListenerRegistration`](PluginMessageListenerRegistration.md)

##### <a id='pluginmessagelistenerregistration'></a>new __PluginMessageListenerRegistration__(messenger, plugin, channel, listener) 

_PluginMessageListenerRegistration constructor_

Argument | Type | Description  
--- | --- | --- 
messenger | [`Messenger`](Messenger.md) | messenger argument
plugin | [`Plugin`](../Plugin.md) | plugin argument
channel | `String` | channel argument
listener | [`PluginMessageListener`](PluginMessageListener.md) | listener argument

---

### Public Properties for [`PluginMessageListenerRegistration`](PluginMessageListenerRegistration.md)

##### <a id='channel'></a>public  readonly property __Channel__

_Get: Gets the plugin channel that this registration is about._

Get | Description
--- | --- 
`String` | Plugin channel.



##### <a id='listener'></a>public  readonly property __Listener__

_Get: Gets the registered listener described by this registration._

Get | Description
--- | --- 
[`PluginMessageListener`](PluginMessageListener.md) | Registered listener.



##### <a id='plugin'></a>public  readonly property __Plugin__

_Get: Gets the plugin that this registration is for._

Get | Description
--- | --- 
[`Plugin`](../Plugin.md) | Registered plugin.



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

_Checks if this registration is still valid._

Returns | Description
--- | --- 
`boolean` | True if this registration is still valid, otherwise false.


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

