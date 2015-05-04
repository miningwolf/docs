## EntityDamageByEntityEvent __class__

>io.wolfscript.event.entity.EntityDamageByEntityEvent
>Extends [`EntityDamageEvent`](EntityDamageEvent.md)

---

### Class Overview

Called when an entity is damaged by an entity

Method | Type   
--- | :--- 
new __EntityDamageByEntityEvent__(Entity, Entity, DamageCause, int) <br> _EntityDamageByEntityEvent constructor_ | _constructor_
new __EntityDamageByEntityEvent__(Entity, Entity, DamageCause, double) <br> _EntityDamageByEntityEvent constructor_ | _constructor_
new __EntityDamageByEntityEvent__(Entity, Entity, DamageCause, Map, Map, Function) <br> _EntityDamageByEntityEvent constructor_ | _constructor_
 readonly property __Damager__ <br> _Get: Returns the entity that damaged the defender._ | `Entity`
 |
__Inherited items from [`EntityDamageEvent`](EntityDamageEvent.md)__ |
new __EntityDamageEvent__(Entity, DamageCause, int) <br> _EntityDamageEvent constructor_ | _constructor_
new __EntityDamageEvent__(Entity, DamageCause, double) <br> _EntityDamageEvent constructor_ | _constructor_
new __EntityDamageEvent__(Entity, DamageCause, Map, Map, Function) <br> _EntityDamageEvent constructor_ | _constructor_
 readonly property __Cause__ <br> _Get: This method exists for legacy reasons to provide backwards_ | `DamageCause`
  property __Damage__ <br> _Get: Gets the original damage for the specified modifier, as defined at this<br>Set: This method exists for legacy reasons to provide backwards_ | `double`
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
final function __isAsynchronous__() <br> _Any custom event that should not by synchronized with other events must_ | `boolean`









---

### Public Constructors for [`EntityDamageByEntityEvent`](EntityDamageByEntityEvent.md)

##### <a id='entitydamagebyentityevent'></a>new __EntityDamageByEntityEvent__(Entity, Entity, DamageCause, int) 

_EntityDamageByEntityEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Entity | `final` | Entity argument
Entity | `final` | Entity argument
DamageCause | `final` | DamageCause argument
int | `final` | int argument

##### <a id='entitydamagebyentityevent'></a>new __EntityDamageByEntityEvent__(Entity, Entity, DamageCause, double) 

_EntityDamageByEntityEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Entity | `final` | Entity argument
Entity | `final` | Entity argument
DamageCause | `final` | DamageCause argument
double | `final` | double argument

##### <a id='entitydamagebyentityevent'></a>new __EntityDamageByEntityEvent__(Entity, Entity, DamageCause, Map, Map, Function) 

_EntityDamageByEntityEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Entity | `final` | Entity argument
Entity | `final` | Entity argument
DamageCause | `final` | DamageCause argument
Map | `final` | Map argument
Map | `final` | Map argument
Function | `extends` | Function argument

---

### Public Properties for [`EntityDamageByEntityEvent`](EntityDamageByEntityEvent.md)

##### <a id='damager'></a>public  readonly property __Damager__

_Get: Returns the entity that damaged the defender._

Get | Description
--- | --- 
`Entity` | Entity that damaged the defender.



---
### Public Constructors for [`EntityDamageEvent`](EntityDamageEvent.md)

##### <a id='entitydamageevent'></a>new __EntityDamageEvent__(Entity, DamageCause, int) 

_EntityDamageEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Entity | `final` | Entity argument
DamageCause | `final` | DamageCause argument
int | `final` | int argument

##### <a id='entitydamageevent'></a>new __EntityDamageEvent__(Entity, DamageCause, double) 

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

_Get: This method exists for legacy reasons to provide backwards compatibility. It will not exist at runtime and should not be used under any circumstances._

Get | Description
--- | --- 
`DamageCause` | A DamageCause value detailing the cause of the damage.



##### <a id='damage'></a>public   property __Damage__

_Get: Gets the original damage for the specified modifier, as defined at this event's construction.<br>Set: This method exists for legacy reasons to provide backwards compatibility. It will not exist at runtime and should not be used under any circumstances._

Get | Description
--- | --- 
`double` | the (rounded) damage /
    @Deprecated
    public int _INVALID_getDamage() {
        return NumberConversions.ceil(getDamage());
    }

    /** Sets the raw amount of damage caused by the event. <p> For compatibility this also recalculates the modifiers and scales them by the difference between the modifier for the previous damage value and the new one.

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

_Any custom event that should not by synchronized with other events must use the specific constructor. These are the caveats of using an asynchronous event: <ul> <li>The event is never fired from inside code triggered by a synchronous event. Attempting to do so results in an `IllegalStateException`. <li>However, asynchronous event handlers may fire synchronous or asynchronous events <li>The event may be fired multiple times simultaneously and in any order. <li>Any newly registered or unregistered handler is ignored after an event starts execution. <li>The handlers for this event may block for any length of time. <li>Some implementations may selectively declare a specific event use as asynchronous. This behavior should be clearly defined. <li>Asynchronous calls are not calculated in the plugin timing system. </ul>_

Returns | Description
--- | --- 
`boolean` | false by default, true if the event fires asynchronously


---


---


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

