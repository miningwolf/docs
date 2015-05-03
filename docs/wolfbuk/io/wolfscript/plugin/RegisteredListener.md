## RegisteredListener __class__

>io.wolfscript.plugin.RegisteredListener

---

### Class Overview

Stores relevant information for plugin listeners

Method | Type   
--- | :--- 
new __RegisteredListener__(Listener, EventExecutor, EventPriority, Plugin, boolean) <br> _RegisteredListener constructor_ | _constructor_
 function __isIgnoringCancelled__() <br> _Gets the listener for this registration_ | `boolean`



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

### Public Methods for [`RegisteredListener`](RegisteredListener.md)

##### <a id='isignoringcancelled'></a>public  function __isIgnoringCancelled__()

_Gets the listener for this registration_

Returns | Description
--- | --- 
`boolean` | Registered Listener /
    public Listener getListener() {
        return listener;
    }

    /** Gets the plugin for this registration


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

