## ThunderChangeEvent __class__

>io.wolfscript.event.weather.ThunderChangeEvent
>Extends [`WeatherEvent`](WeatherEvent.md)
>Implements [`Cancellable`](../Cancellable.md)

this.on('weather.ThunderChangeEvent', function (e) { });

---

### Class Overview

Stores data for thunder state changing in a world

Method | Type   
--- | :--- 
new __ThunderChangeEvent__(World, boolean) <br> _ThunderChangeEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 function __toThunderState__() <br> _Gets the state of thunder that the world is being set to_ | `boolean`
 |
__Inherited items from [`WeatherEvent`](WeatherEvent.md)__ |
new __WeatherEvent__(World) <br> _WeatherEvent constructor_ | _constructor_
final readonly property __World__ <br> _Get: Returns the World where this event is occurring_ | `World`
 |
__Inherited items from [`Event`](../Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







---

### Public Constructors for [`ThunderChangeEvent`](ThunderChangeEvent.md)

##### <a id='thunderchangeevent'></a>new __ThunderChangeEvent__(World, boolean) 

_ThunderChangeEvent constructor_

Argument | Type | Description  
--- | --- | --- 
World | `final` | World argument
boolean | `final` | boolean argument

---

### Public Properties for [`ThunderChangeEvent`](ThunderChangeEvent.md)

##### <a id='handlerlist'></a>public static readonly property __HandlerList__

_HandlerList property_

Get | 
--- | 
[`HandlerList`](../HandlerList.md) |



##### <a id='handlers'></a>public  readonly property __Handlers__

_Handlers property_

Get | 
--- | 
[`HandlerList`](../HandlerList.md) |



##### <a id='cancelled'></a>public  writeonly property __Cancelled__

_Cancelled property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
cancel | `boolean` | cancel argument


---

### Public Methods for [`ThunderChangeEvent`](ThunderChangeEvent.md)

##### <a id='iscancelled'></a>public  function __isCancelled__()

_isCancelled method_

Returns | 
--- | 
`boolean` |


##### <a id='tothunderstate'></a>public  function __toThunderState__()

_Gets the state of thunder that the world is being set to_

Returns | Description
--- | --- 
`boolean` | true if the weather is being set to thundering, false otherwise


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


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

