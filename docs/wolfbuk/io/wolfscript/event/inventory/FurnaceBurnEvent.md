## FurnaceBurnEvent __class__

>io.wolfscript.event.inventory.FurnaceBurnEvent
>Extends [`BlockEvent`](../block/BlockEvent.md)
>Implements [`Cancellable`](../Cancellable.md)
``` javascript
this.on('inventory.FurnaceBurnEvent', function (e) { });
```


---

### Class Overview

Called when an ItemStack is successfully burned as fuel in a furnace.

Method | Type   
--- | :--- 
new __FurnaceBurnEvent__(Block, ItemStack, int) <br> _FurnaceBurnEvent constructor_ | _constructor_
  property __BurnTime__ <br> _Get: Gets the burn time for this fuel<br>Set: Sets the burn time for this fuel_ | `int`
 readonly property __Fuel__ <br> _Get: Gets the fuel ItemStack for this event_ | `ItemStack`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
 writeonly property __Burning__ <br> _Set: Sets whether the furnace's fuel is burning or not._ | `void`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isBurning__() <br> _Gets whether the furnace's fuel is burning or not._ | `boolean`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`BlockEvent`](../block/BlockEvent.md)__ |
new __BlockEvent__(Block) <br> _BlockEvent constructor_ | _constructor_
final readonly property __Block__ <br> _Get: Gets the block involved in this event._ | [`Block`](../../block/Block.md)
 |
__Inherited items from [`Event`](../Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







---

### Public Constructors for [`FurnaceBurnEvent`](FurnaceBurnEvent.md)

##### <a id='furnaceburnevent'></a>new __FurnaceBurnEvent__(Block, ItemStack, int) 

_FurnaceBurnEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Block | `final` | Block argument
ItemStack | `final` | ItemStack argument
int | `final` | int argument

---

### Public Properties for [`FurnaceBurnEvent`](FurnaceBurnEvent.md)

##### <a id='burntime'></a>public   property __BurnTime__

_Get: Gets the burn time for this fuel<br>Set: Sets the burn time for this fuel_

Get | Description
--- | --- 
`int` | the burn time for this fuel

Set | Type | Description  
--- | --- | --- 
burnTime | `int` | the burn time for this fuel


##### <a id='fuel'></a>public  readonly property __Fuel__

_Get: Gets the fuel ItemStack for this event_

Get | Description
--- | --- 
`ItemStack` | the fuel ItemStack



##### <a id='furnace'></a>public  readonly property __Furnace__
_Deprecated: In favour of {@link #getBlock()}._

_Get: Gets the block for the furnace involved in this event_

Get | Description
--- | --- 
[`Block`](../../block/Block.md) | the block of the furnace



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



##### <a id='burning'></a>public  writeonly property __Burning__

_Set: Sets whether the furnace's fuel is burning or not._

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
burning | `boolean` | true if the furnace's fuel is burning


##### <a id='cancelled'></a>public  writeonly property __Cancelled__

_Cancelled property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
cancel | `boolean` | cancel argument


---

### Public Methods for [`FurnaceBurnEvent`](FurnaceBurnEvent.md)

##### <a id='isburning'></a>public  function __isBurning__()

_Gets whether the furnace's fuel is burning or not._

Returns | Description
--- | --- 
`boolean` | whether the furnace's fuel is burning or not.


##### <a id='iscancelled'></a>public  function __isCancelled__()

_isCancelled method_

Returns | 
--- | 
`boolean` |


---
### Public Constructors for [`BlockEvent`](../block/BlockEvent.md)

##### <a id='blockevent'></a>new __BlockEvent__(Block) 

_BlockEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Block | `final` | Block argument

---

### Public Properties for [`BlockEvent`](../block/BlockEvent.md)

##### <a id='block'></a>public final readonly property __Block__

_Get: Gets the block involved in this event._

Get | Description
--- | --- 
[`Block`](../../block/Block.md) | The Block which block is involved in this event



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
	

