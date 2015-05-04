## PluginEvent __class__

>io.wolfscript.event.server.PluginEvent
>Extends [`ServerEvent`](ServerEvent.md)

---

### Class Overview

Used for plugin enable and disable events

Method | Type   
--- | :--- 
new __PluginEvent__(Plugin) <br> _PluginEvent constructor_ | _constructor_
 readonly property __Plugin__ <br> _Get: Gets the plugin involved in this event_ | [`Plugin`](../../plugin/Plugin.md)
 |
__Inherited items from [`ServerEvent`](ServerEvent.md)__ |
 |
__Inherited items from [`Event`](../Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







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
[`Plugin`](../../plugin/Plugin.md) | Plugin for this event



---
### Public Constructors for [`Event`](../Event.md)

##### <a id='event'></a>new __Event__() 

_The default constructor is defined for cleaner code. This constructor assumes the event is synchronous._


##### <a id='event'></a>new __Event__(isAsync) 

_This constructor is used to explicitly declare an event as synchronous or asynchronous._

Argument | Type | Description  
--- | --- | --- 
isAsync | `boolean` | true indicates the event will fire asynchronously, false by default from default constructor

---

### Public Properties for [`Event`](../Event.md)

##### <a id='eventname'></a>public  readonly property __EventName__

_Get: Convenience method for providing a user-friendly identifier. By default, it is the event's class's {@linkplain Class#getSimpleName() simple name}._

Get | Description
--- | --- 
`String` | name of this event



##### <a id='handlers'></a>public abstract readonly property __Handlers__

_Handlers property_

Get | 
--- | 
[`HandlerList`](../HandlerList.md) |



---

### Public Methods for [`Event`](../Event.md)

##### <a id='isasynchronous'></a>public final function __isAsynchronous__()

_isAsynchronous method_

Returns | 
--- | 
`boolean` |


---


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

