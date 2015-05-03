## WeatherChangeEvent __class__

>io.wolfscript.event.weather.WeatherChangeEvent
>Extends [`WeatherEvent`](WeatherEvent.md)
>Implements [`Cancellable`](..\Cancellable.md)

---

### Class Overview

Stores data for weather changing in a world

Method | Type   
--- | :--- 
new __WeatherChangeEvent__(World, boolean) <br> _WeatherChangeEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](..\HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](..\HandlerList.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 function __toWeatherState__() <br> _Gets the state of weather that the world is being set to_ | `boolean`
 |
__Inherited items from [`WeatherEvent`](WeatherEvent.md)__ |
new __WeatherEvent__(World) <br> _WeatherEvent constructor_ | _constructor_
final readonly property __World__ <br> _Get: Returns the World where this event is occurring_ | `World`
 |
__Inherited items from [`Event`](..\Event.md)__ |
final function __isAsynchronous__() <br> _The default constructor is defined for cleaner code. This constructor_ | `boolean`







---

### Public Constructors for [`WeatherChangeEvent`](WeatherChangeEvent.md)

##### <a id='weatherchangeevent'></a>new __WeatherChangeEvent__(World, boolean) 

_WeatherChangeEvent constructor_

Argument | Type | Description  
--- | --- | --- 
World | `final` | World argument
boolean | `final` | boolean argument

---

### Public Properties for [`WeatherChangeEvent`](WeatherChangeEvent.md)

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



##### <a id='cancelled'></a>public  writeonly property __Cancelled__

_Cancelled property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
cancel | `boolean` | cancel argument


---

### Public Methods for [`WeatherChangeEvent`](WeatherChangeEvent.md)

##### <a id='iscancelled'></a>public  function __isCancelled__()

_isCancelled method_

Returns | 
--- | 
`boolean` |


##### <a id='toweatherstate'></a>public  function __toWeatherState__()

_Gets the state of weather that the world is being set to_

Returns | Description
--- | --- 
`boolean` | true if the weather is being set to raining, false otherwise


---
### Public Constructors for [`WeatherEvent`](WeatherEvent.md)

##### <a id='weatherevent'></a>new __WeatherEvent__(World) 

_WeatherEvent constructor_

Argument | Type | Description  
--- | --- | --- 
World | `final` | World argument

---

### Public Properties for [`WeatherEvent`](WeatherEvent.md)

##### <a id='world'></a>public final readonly property __World__

_Get: Returns the World where this event is occurring_

Get | Description
--- | --- 
`World` | World this event is occurring in



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
	

