## TimedRegisteredListener __class__

>io.wolfscript.plugin.TimedRegisteredListener
>Extends [`RegisteredListener`](RegisteredListener.md)

---

### Class Overview

Extends RegisteredListener to include timing information

Method | Type   
--- | :--- 
new __TimedRegisteredListener__(Listener, EventExecutor, EventPriority, Plugin, boolean) <br> _TimedRegisteredListener constructor_ | _constructor_
 readonly property __Count__ <br> _Get: Gets the total times this listener has been called_ | `int`
 readonly property __TotalTime__ <br> _Get: Gets the total time calls to this listener have taken_ | `long`
 function __hasMultiple__() <br> _Gets the class of the events this listener handled. If it handled_ | `boolean`
 function __reset__() <br> _Resets the call count and total time for this listener_ | `void`
 |
__Inherited items from [`RegisteredListener`](RegisteredListener.md)__ |
new __RegisteredListener__(Listener, EventExecutor, EventPriority, Plugin, boolean) <br> _RegisteredListener constructor_ | _constructor_
 readonly property __Listener__ <br> _Get: Gets the listener for this registration_ | `Listener`
 readonly property __Plugin__ <br> _Get: Gets the plugin for this registration_ | [`Plugin`](Plugin.md)
 readonly property __Priority__ <br> _Get: Gets the priority for this registration_ | `EventPriority`
 function __isIgnoringCancelled__() <br> _Calls the event executor_ | `boolean`





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

### Public Properties for [`TimedRegisteredListener`](TimedRegisteredListener.md)

##### <a id='count'></a>public  readonly property __Count__

_Get: Gets the total times this listener has been called_

Get | Description
--- | --- 
`int` | Times this listener has been called



##### <a id='totaltime'></a>public  readonly property __TotalTime__

_Get: Gets the total time calls to this listener have taken_

Get | Description
--- | --- 
`long` | Total time for all calls of this listener



---

### Public Methods for [`TimedRegisteredListener`](TimedRegisteredListener.md)

##### <a id='hasmultiple'></a>public  function __hasMultiple__()

_Gets the class of the events this listener handled. If it handled multiple classes of event, the closest shared superclass will be returned, such that for any event this listener has handled, <code>this.getEventClass().isAssignableFrom(event.getClass())</code> and no class <code>this.getEventClass().isAssignableFrom(clazz) {@literal && this.getEventClass() != clazz &&} event.getClass().isAssignableFrom(clazz)</code> for all handled events._

Returns | Description
--- | --- 
`boolean` | the event class handled by this RegisteredListener /
    public Class<? extends Event> getEventClass() {
        return eventClass;
    }

    /** Gets whether this listener has handled multiple events, such that for some two events, <code>eventA.getClass() != eventB.getClass()</code>.


##### <a id='reset'></a>public  function __reset__()

_Resets the call count and total time for this listener_

Returns | 
--- | 
`void` |


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

_Calls the event executor_

Returns | Description
--- | --- 
`boolean` | True when ignoring cancelled events


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

