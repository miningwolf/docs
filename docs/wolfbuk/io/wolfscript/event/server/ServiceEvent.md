## ServiceEvent __class__

>io.wolfscript.event.server.ServiceEvent
>Extends [`ServerEvent`](ServerEvent.md)

---

### Class Overview

An event relating to a registered service. This is called in a [`ServicesManager`](..\..\plugin\ServicesManager.md)

Method | Type   
--- | :--- 
new __ServiceEvent__(RegisteredServiceProvider) <br> _ServiceEvent constructor_ | _constructor_
 readonly property __Provider__ <br> _Provider property_ | `RegisteredServiceProvider<?>`
 |
__Inherited items from [`ServerEvent`](ServerEvent.md)__ |
 |
__Inherited items from [`Event`](..\Event.md)__ |
final function __isAsynchronous__() <br> _The default constructor is defined for cleaner code. This constructor_ | `boolean`







---

### Public Constructors for [`ServiceEvent`](ServiceEvent.md)

##### <a id='serviceevent'></a>new __ServiceEvent__(RegisteredServiceProvider) 

_ServiceEvent constructor_

Argument | Type | Description  
--- | --- | --- 
RegisteredServiceProvider | `final` | RegisteredServiceProvider argument

---

### Public Properties for [`ServiceEvent`](ServiceEvent.md)

##### <a id='provider'></a>public  readonly property __Provider__

_Provider property_

Get | 
--- | 
`RegisteredServiceProvider<?>` |



---

### Public Methods for [`Event`](..\Event.md)

##### <a id='isasynchronous'></a>public final function __isAsynchronous__()

_The default constructor is defined for cleaner code. This constructor assumes the event is synchronous. /
    public Event() {
        this(false);
    }

    /** This constructor is used to explicitly declare an event as synchronous or asynchronous._

Returns | Description
--- | --- 
`boolean` | name of this event /
    public String getEventName() {
        if (name == null) {
            name = getClass().getSimpleName();
        }
        return name;
    }

    public abstract HandlerList getHandlers();

    /** Any custom event that should not by synchronized with other events must use the specific constructor. These are the caveats of using an asynchronous event: <ul> <li>The event is never fired from inside code triggered by a synchronous event. Attempting to do so results in an `IllegalStateException`. <li>However, asynchronous event handlers may fire synchronous or asynchronous events <li>The event may be fired multiple times simultaneously and in any order. <li>Any newly registered or unregistered handler is ignored after an event starts execution. <li>The handlers for this event may block for any length of time. <li>Some implementations may selectively declare a specific event use as asynchronous. This behavior should be clearly defined. <li>Asynchronous calls are not calculated in the plugin timing system. </ul>


---


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

