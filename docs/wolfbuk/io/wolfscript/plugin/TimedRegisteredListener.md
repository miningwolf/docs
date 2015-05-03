## TimedRegisteredListener __class__

>io.wolfscript.plugin.TimedRegisteredListener
>Extends [`RegisteredListener`](RegisteredListener.md)

---

### Class Overview

Extends RegisteredListener to include timing information

Method | Type   
--- | :--- 
new __TimedRegisteredListener__(Listener, EventExecutor, EventPriority, Plugin, boolean) <br> _TimedRegisteredListener constructor_ | _constructor_
 function __hasMultiple__() <br> _Resets the call count and total time for this listener_ | `boolean`
 |
__Inherited items from [`RegisteredListener`](RegisteredListener.md)__ |
new __RegisteredListener__(Listener, EventExecutor, EventPriority, Plugin, boolean) <br> _RegisteredListener constructor_ | _constructor_
 function __isIgnoringCancelled__() <br> _Gets the listener for this registration_ | `boolean`





---

### Public Constructors for [`TimedRegisteredListener`](TimedRegisteredListener.md)

##### <a id='timedregisteredlistener'></a>new __TimedRegisteredListener__(Listener, EventExecutor, EventPriority, Plugin, boolean) 

_TimedRegisteredListener constructor_

Argument | Type | Description  
--- | --- | --- 
Listener | `final` | Listener argument
EventExecutor | `final` | EventExecutor argument
EventPriority | `final` | EventPriority argument
Plugin | `final` | Plugin argument
boolean | `final` | boolean argument

---

### Public Methods for [`TimedRegisteredListener`](TimedRegisteredListener.md)

##### <a id='hasmultiple'></a>public  function __hasMultiple__()

_Resets the call count and total time for this listener /
    public void reset() {
        count = 0;
        totalTime = 0;
    }

    /** Gets the total times this listener has been called_

Returns | Description
--- | --- 
`boolean` | Times this listener has been called /
    public int getCount() {
        return count;
    }

    /** Gets the total time calls to this listener have taken


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


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

