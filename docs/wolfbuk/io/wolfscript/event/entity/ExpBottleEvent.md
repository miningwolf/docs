## ExpBottleEvent __class__

>io.wolfscript.event.entity.ExpBottleEvent
>Extends [`ProjectileHitEvent`](ProjectileHitEvent.md)

this.on('entity.ExpBottleEvent', function (e) { });

---

### Class Overview

Called when a ThrownExpBottle hits and releases experience.

Method | Type   
--- | :--- 
new __ExpBottleEvent__(ThrownExpBottle, int) <br> _ExpBottleEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Entity property_ | [`ThrownExpBottle`](../../entity/ThrownExpBottle.md)
  property __Experience__ <br> _Get: This method retrieves the amount of experience to be created.<br>Set: This method sets the amount of experience to be created._ | `int`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
  property __ShowEffect__ <br> _Get: This method indicates if the particle effect should be shown.<br>Set: This method sets if the particle effect will be shown._ | `boolean`
 |
__Inherited items from [`ProjectileHitEvent`](ProjectileHitEvent.md)__ |
new __ProjectileHitEvent__(Projectile) <br> _ProjectileHitEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Entity property_ | [`Projectile`](../../entity/Projectile.md)
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
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

### Public Constructors for [`ExpBottleEvent`](ExpBottleEvent.md)

##### <a id='expbottleevent'></a>new __ExpBottleEvent__(ThrownExpBottle, int) 

_ExpBottleEvent constructor_

Argument | Type | Description  
--- | --- | --- 
ThrownExpBottle | `final` | ThrownExpBottle argument
int | `final` | int argument

---

### Public Properties for [`ExpBottleEvent`](ExpBottleEvent.md)

##### <a id='entity'></a>public  readonly property __Entity__

_Entity property_

Get | 
--- | 
[`ThrownExpBottle`](../../entity/ThrownExpBottle.md) |



##### <a id='experience'></a>public   property __Experience__

_Get: This method retrieves the amount of experience to be created. <p> The number indicates a total amount to be divided into orbs.<br>Set: This method sets the amount of experience to be created. <p> The number indicates a total amount to be divided into orbs._

Get | Description
--- | --- 
`int` | the total amount of experience to be created

Set | Type | Description  
--- | --- | --- 
int | `final` | int argument


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



##### <a id='showeffect'></a>public   property __ShowEffect__

_Get: This method indicates if the particle effect should be shown.<br>Set: This method sets if the particle effect will be shown. <p> This does not change the experience created._

Get | Description
--- | --- 
`boolean` | true if the effect will be shown, false otherwise

Set | Type | Description  
--- | --- | --- 
boolean | `final` | boolean argument


---
### Public Constructors for [`ProjectileHitEvent`](ProjectileHitEvent.md)

##### <a id='projectilehitevent'></a>new __ProjectileHitEvent__(Projectile) 

_ProjectileHitEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Projectile | `final` | Projectile argument

---

### Public Properties for [`ProjectileHitEvent`](ProjectileHitEvent.md)

##### <a id='entity'></a>public  readonly property __Entity__

_Entity property_

Get | 
--- | 
[`Projectile`](../../entity/Projectile.md) |



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
	

