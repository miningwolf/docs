## VillagerReplenishTradeEvent __class__

>io.wolfscript.event.entity.VillagerReplenishTradeEvent
>Extends [`EntityEvent`](EntityEvent.md)
>Implements [`Cancellable`](../Cancellable.md)
``` javascript
this.on('entity.VillagerReplenishTradeEvent', function (e) { });
```


---

### Class Overview

Called when a villager's trade's maximum uses is increased, due to a player's trade.

Method | Type   
--- | :--- 
new __VillagerReplenishTradeEvent__(what, recipe, bonus) <br> _VillagerReplenishTradeEvent constructor_ | _constructor_
  property __Bonus__ <br> _Get: Get the bonus uses added. The maximum uses of the recipe will be<br>Set: Set the bonus uses added._ | `int`
 readonly property __Entity__ <br> _Entity property_ | `Villager`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
  property __Recipe__ <br> _Get: Get the recipe to replenish.<br>Set: Set the recipe to replenish._ | [`MerchantRecipe`](../../inventory/MerchantRecipe.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`EntityEvent`](EntityEvent.md)__ |
new __EntityEvent__(Entity) <br> _EntityEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Get: Returns the Entity involved in this event_ | `Entity`
 readonly property __EntityType__ <br> _Get: Gets the EntityType of the Entity involved in this event._ | [`EntityType`](../../entity/EntityType.md)
 |
__Inherited items from [`Event`](../Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







---

### Public Constructors for [`VillagerReplenishTradeEvent`](VillagerReplenishTradeEvent.md)

##### <a id='villagerreplenishtradeevent'></a>new __VillagerReplenishTradeEvent__(what, recipe, bonus) 

_VillagerReplenishTradeEvent constructor_

Argument | Type | Description  
--- | --- | --- 
what | `Villager` | what argument
recipe | [`MerchantRecipe`](../../inventory/MerchantRecipe.md) | recipe argument
bonus | `int` | bonus argument

---

### Public Properties for [`VillagerReplenishTradeEvent`](VillagerReplenishTradeEvent.md)

##### <a id='bonus'></a>public   property __Bonus__

_Get: Get the bonus uses added. The maximum uses of the recipe will be increased by this number.<br>Set: Set the bonus uses added._

Get | 
--- | 
`int` |

Set | Type | Description  
--- | --- | --- 
bonus | `int` | the extra uses added


##### <a id='entity'></a>public  readonly property __Entity__

_Entity property_

Get | 
--- | 
`Villager` |



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



##### <a id='recipe'></a>public   property __Recipe__

_Get: Get the recipe to replenish.<br>Set: Set the recipe to replenish._

Get | Description
--- | --- 
[`MerchantRecipe`](../../inventory/MerchantRecipe.md) | the replenished recipe

Set | Type | Description  
--- | --- | --- 
recipe | [`MerchantRecipe`](../../inventory/MerchantRecipe.md) | the replenished recipe


##### <a id='cancelled'></a>public  writeonly property __Cancelled__

_Cancelled property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
cancel | `boolean` | cancel argument


---

### Public Methods for [`VillagerReplenishTradeEvent`](VillagerReplenishTradeEvent.md)

##### <a id='iscancelled'></a>public  function __isCancelled__()

_isCancelled method_

Returns | 
--- | 
`boolean` |


---
### Public Constructors for [`EntityEvent`](EntityEvent.md)

##### <a id='entityevent'></a>new __EntityEvent__(Entity) 

_EntityEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Entity | `final` | Entity argument

---

### Public Properties for [`EntityEvent`](EntityEvent.md)

##### <a id='entity'></a>public  readonly property __Entity__

_Get: Returns the Entity involved in this event_

Get | Description
--- | --- 
`Entity` | Entity who is involved in this event



##### <a id='entitytype'></a>public  readonly property __EntityType__

_Get: Gets the EntityType of the Entity involved in this event._

Get | Description
--- | --- 
[`EntityType`](../../entity/EntityType.md) | EntityType of the Entity involved in this event



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
	

