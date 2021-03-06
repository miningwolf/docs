## EntityDamageByBlockEvent __class__

>io.wolfscript.event.entity.EntityDamageByBlockEvent
>Extends [`EntityDamageEvent`](EntityDamageEvent.md)
``` javascript
this.on('entity.EntityDamageByBlockEvent', function (e) { });
```


---

### Class Overview

Called when an entity is damaged by a block

Method | Type   
--- | :--- 
new __EntityDamageByBlockEvent__(Block, Entity, DamageCause, Map, Map, Function) <br> _EntityDamageByBlockEvent constructor_ | _constructor_
 readonly property __Damager__ <br> _Get: Returns the block that damaged the player._ | [`Block`](../../block/Block.md)
 |
__Inherited items from [`EntityDamageEvent`](EntityDamageEvent.md)__ |
new __EntityDamageEvent__(Entity, DamageCause, Map, Map, Function) <br> _EntityDamageEvent constructor_ | _constructor_
 readonly property __Cause__ <br> _Get: Gets the cause of the damage._ | `DamageCause`
  property __Damage__ <br> _Get: Gets the raw amount of damage caused by the event<br>Set: Sets the raw amount of damage caused by the event._ | `double`
final readonly property __FinalDamage__ <br> _Get: Gets the amount of damage caused by the event after all damage_ | `double`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
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

### Public Constructors for [`EntityDamageByBlockEvent`](EntityDamageByBlockEvent.md)

##### <a id='entitydamagebyblockevent'></a>new __EntityDamageByBlockEvent__(Block, Entity, DamageCause, int) 
_Deprecated_

_EntityDamageByBlockEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Block | `final` | Block argument
Entity | `final` | Entity argument
DamageCause | `final` | DamageCause argument
int | `final` | int argument

##### <a id='entitydamagebyblockevent'></a>new __EntityDamageByBlockEvent__(Block, Entity, DamageCause, double) 
_Deprecated_

_EntityDamageByBlockEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Block | `final` | Block argument
Entity | `final` | Entity argument
DamageCause | `final` | DamageCause argument
double | `final` | double argument

##### <a id='entitydamagebyblockevent'></a>new __EntityDamageByBlockEvent__(Block, Entity, DamageCause, Map, Map, Function) 

_EntityDamageByBlockEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Block | `final` | Block argument
Entity | `final` | Entity argument
DamageCause | `final` | DamageCause argument
Map | `final` | Map argument
Map | `final` | Map argument
Function | `extends` | Function argument

---

### Public Properties for [`EntityDamageByBlockEvent`](EntityDamageByBlockEvent.md)

##### <a id='damager'></a>public  readonly property __Damager__

_Get: Returns the block that damaged the player._

Get | Description
--- | --- 
[`Block`](../../block/Block.md) | Block that damaged the player



---
### Public Constructors for [`EntityDamageEvent`](EntityDamageEvent.md)

##### <a id='entitydamageevent'></a>new __EntityDamageEvent__(Entity, DamageCause, int) 
_Deprecated_

_EntityDamageEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Entity | `final` | Entity argument
DamageCause | `final` | DamageCause argument
int | `final` | int argument

##### <a id='entitydamageevent'></a>new __EntityDamageEvent__(Entity, DamageCause, double) 
_Deprecated_

_EntityDamageEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Entity | `final` | Entity argument
DamageCause | `final` | DamageCause argument
double | `final` | double argument

##### <a id='entitydamageevent'></a>new __EntityDamageEvent__(Entity, DamageCause, Map, Map, Function) 

_EntityDamageEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Entity | `final` | Entity argument
DamageCause | `final` | DamageCause argument
Map | `final` | Map argument
Map | `final` | Map argument
Function | `extends` | Function argument

---

### Public Properties for [`EntityDamageEvent`](EntityDamageEvent.md)

##### <a id='cause'></a>public  readonly property __Cause__

_Get: Gets the cause of the damage._

Get | Description
--- | --- 
`DamageCause` | A DamageCause value detailing the cause of the damage.



##### <a id='damage'></a>public   property __Damage__

_Get: Gets the raw amount of damage caused by the event<br>Set: Sets the raw amount of damage caused by the event. <p> For compatibility this also recalculates the modifiers and scales them by the difference between the modifier for the previous damage value and the new one._

Get | Description
--- | --- 
`double` | The raw amount of damage caused by the event

Set | Type | Description  
--- | --- | --- 
damage | `double` | The raw amount of damage caused by the event


##### <a id='finaldamage'></a>public final readonly property __FinalDamage__

_Get: Gets the amount of damage caused by the event after all damage reduction is applied._

Get | Description
--- | --- 
`double` | the amount of damage caused by the event



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

### Public Methods for [`EntityDamageEvent`](EntityDamageEvent.md)

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


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

