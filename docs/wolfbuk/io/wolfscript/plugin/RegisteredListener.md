## RegisteredListener __class__

>io.wolfscript.plugin.RegisteredListener

---

### Class Overview

Stores relevant information for plugin listeners

Method | Type   
--- | :--- 
new __RegisteredListener__(Listener, EventExecutor, EventPriority, Plugin, boolean) <br> _RegisteredListener constructor_ | _constructor_
 readonly property __Listener__ <br> _Get: Gets the listener for this registration_ | `Listener`
 readonly property __Plugin__ <br> _Get: Gets the plugin for this registration_ | [`Plugin`](Plugin.md)
 readonly property __Priority__ <br> _Get: Gets the priority for this registration_ | `EventPriority`
 function __isIgnoringCancelled__() <br> _Whether this listener accepts cancelled events_ | `boolean`



---

### Public Constructors for [`RegisteredListener`](RegisteredListener.md)

##### <a id='registeredlistener'></a>new __RegisteredListener__(Listener, EventExecutor, EventPriority, Plugin, boolean) 

_RegisteredListener constructor_

Argument | Type | Description  
--- | --- | --- 
Listener | `final` | Listener argument
EventExecutor | `final` | EventExecutor argument
EventPriority | `final` | EventPriority argument
Plugin | `final` | Plugin argument
boolean | `final` | boolean argument

---

### Public Properties for [`RegisteredListener`](RegisteredListener.md)

##### <a id='listener'></a>public  readonly property __Listener__

_Get: Gets the listener for this registration_

Get | Description
--- | --- 
`Listener` | Registered Listener



##### <a id='plugin'></a>public  readonly property __Plugin__

_Get: Gets the plugin for this registration_

Get | Description
--- | --- 
[`Plugin`](Plugin.md) | Registered Plugin



##### <a id='priority'></a>public  readonly property __Priority__

_Get: Gets the priority for this registration_

Get | Description
--- | --- 
`EventPriority` | Registered Priority



---

### Public Methods for [`RegisteredListener`](RegisteredListener.md)

##### <a id='isignoringcancelled'></a>public  function __isIgnoringCancelled__()

_Whether this listener accepts cancelled events_

Returns | Description
--- | --- 
`boolean` | True when ignoring cancelled events


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

