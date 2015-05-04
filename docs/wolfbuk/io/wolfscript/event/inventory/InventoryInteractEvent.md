## InventoryInteractEvent __class__

>io.wolfscript.event.inventory.InventoryInteractEvent
>Extends [`InventoryEvent`](InventoryEvent.md)
>Implements [`Cancellable`](../Cancellable.md)
``` javascript
this.on('inventory.InventoryInteractEvent', function (e) { });
```


---

### Class Overview

An abstract base class for events that describe an interaction between a HumanEntity and the contents of an Inventory.

Method | Type   
--- | :--- 
new __InventoryInteractEvent__(transaction) <br> _InventoryInteractEvent constructor_ | _constructor_
  property __Result__ <br> _Get: Gets the `Result` of this event. The Result describes the<br>Set: Sets the result of this event. This will change whether or not this_ | `Result`
 readonly property __WhoClicked__ <br> _Get: Gets the player who performed the click._ | `HumanEntity`
 writeonly property __Cancelled__ <br> _Set: Proxy method to `#setResult(Result)` for the Cancellable_ | `void`
 function __isCancelled__() <br> _Gets whether or not this event is cancelled. This is based off of the_ | `boolean`
 |
__Inherited items from [`InventoryEvent`](InventoryEvent.md)__ |
new __InventoryEvent__(transaction) <br> _InventoryEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Inventory__ <br> _Get: Gets the primary Inventory involved in this transaction_ | [`Inventory`](../../inventory/Inventory.md)
 readonly property __View__ <br> _Get: Gets the view object itself_ | [`InventoryView`](../../inventory/InventoryView.md)
 readonly property __Viewers__ <br> _Get: Gets the list of players viewing the primary (upper) inventory involved_ | `List<HumanEntity>`
 |
__Inherited items from [`Event`](../Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







---

### Public Constructors for [`InventoryInteractEvent`](InventoryInteractEvent.md)

##### <a id='inventoryinteractevent'></a>new __InventoryInteractEvent__(transaction) 

_InventoryInteractEvent constructor_

Argument | Type | Description  
--- | --- | --- 
transaction | [`InventoryView`](../../inventory/InventoryView.md) | transaction argument

---

### Public Properties for [`InventoryInteractEvent`](InventoryInteractEvent.md)

##### <a id='result'></a>public   property __Result__

_Get: Gets the `Result` of this event. The Result describes the behavior that will be applied to the inventory in relation to this event.<br>Set: Sets the result of this event. This will change whether or not this event is considered cancelled._

Get | 
--- | 
`Result` |

Set | Type | Description  
--- | --- | --- 
newResult | `Result` | the new `Result` for this event


##### <a id='whoclicked'></a>public  readonly property __WhoClicked__

_Get: Gets the player who performed the click._

Get | Description
--- | --- 
`HumanEntity` | The clicking player.



##### <a id='cancelled'></a>public  writeonly property __Cancelled__

_Set: Proxy method to `#setResult(Result)` for the Cancellable interface. `#setResult(Result)` is preferred, as it allows you to specify the Result beyond Result.DENY and Result.ALLOW. <p> {@inheritDoc}_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
toCancel | `boolean` | result becomes DENY if true, ALLOW if false


---

### Public Methods for [`InventoryInteractEvent`](InventoryInteractEvent.md)

##### <a id='iscancelled'></a>public  function __isCancelled__()

_Gets whether or not this event is cancelled. This is based off of the Result value returned by `#getResult()`.  Result.ALLOW and Result.DEFAULT will result in a returned value of false, but Result.DENY will result in a returned value of true. <p> {@inheritDoc}_

Returns | Description
--- | --- 
`boolean` | whether the event is cancelled


---
### Public Constructors for [`InventoryEvent`](InventoryEvent.md)

##### <a id='inventoryevent'></a>new __InventoryEvent__(transaction) 

_InventoryEvent constructor_

Argument | Type | Description  
--- | --- | --- 
transaction | [`InventoryView`](../../inventory/InventoryView.md) | transaction argument

---

### Public Properties for [`InventoryEvent`](InventoryEvent.md)

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



##### <a id='inventory'></a>public  readonly property __Inventory__

_Get: Gets the primary Inventory involved in this transaction_

Get | Description
--- | --- 
[`Inventory`](../../inventory/Inventory.md) | The upper inventory.



##### <a id='view'></a>public  readonly property __View__

_Get: Gets the view object itself_

Get | Description
--- | --- 
[`InventoryView`](../../inventory/InventoryView.md) | InventoryView



##### <a id='viewers'></a>public  readonly property __Viewers__

_Get: Gets the list of players viewing the primary (upper) inventory involved in this event_

Get | Description
--- | --- 
`List<HumanEntity>` | A list of people viewing.



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
	

