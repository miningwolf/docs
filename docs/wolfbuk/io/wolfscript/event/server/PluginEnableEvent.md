## PluginEnableEvent __class__

>io.wolfscript.event.server.PluginEnableEvent
>Extends [`PluginEvent`](PluginEvent.md)

---

### Class Overview

Called when a plugin is enabled.

Method | Type   
--- | :--- 
new __PluginEnableEvent__(Plugin) <br> _PluginEnableEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](..\HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](..\HandlerList.md)
 |
__Inherited items from [`PluginEvent`](PluginEvent.md)__ |
new __PluginEvent__(Plugin) <br> _PluginEvent constructor_ | _constructor_
 readonly property __Plugin__ <br> _Get: Gets the plugin involved in this event_ | [`Plugin`](..\..\plugin\Plugin.md)
 |
__Inherited items from [`ServerEvent`](ServerEvent.md)__ |
 |
__Inherited items from [`Event`](..\Event.md)__ |
final function __isAsynchronous__() <br> _The default constructor is defined for cleaner code. This constructor_ | `boolean`









---

### Public Constructors for [`PluginEnableEvent`](PluginEnableEvent.md)

##### <a id='pluginenableevent'></a>new __PluginEnableEvent__(Plugin) 

_PluginEnableEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Plugin | `final` | Plugin argument

---

### Public Properties for [`PluginEnableEvent`](PluginEnableEvent.md)

##### <a id='handlerlist'></a>public static readonly property __HandlerList__

_HandlerList property_

Get | 
--- | 
[`HandlerList`](..\HandlerList.md) |



##### <a id='handlers'></a>public  readonly property __Handlers__

_Handlers property_

Get | 
--- | 
[`HandlerList`](..\HandlerList.md) |



---
### Public Constructors for [`PluginEvent`](PluginEvent.md)

##### <a id='pluginevent'></a>new __PluginEvent__(Plugin) 

_PluginEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Plugin | `final` | Plugin argument

---

### Public Properties for [`PluginEvent`](PluginEvent.md)

##### <a id='plugin'></a>public  readonly property __Plugin__

_Get: Gets the plugin involved in this event_

Get | Description
--- | --- 
[`Plugin`](..\..\plugin\Plugin.md) | Plugin for this event



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


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

