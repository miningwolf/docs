## PotionSplashEvent __class__

>io.wolfscript.event.entity.PotionSplashEvent
>Extends [`ProjectileHitEvent`](ProjectileHitEvent.md)
>Implements [`Cancellable`](../Cancellable.md)
``` javascript
this.on('entity.PotionSplashEvent', function (e) { });
```


---

### Class Overview

Called when a splash potion hits an area

Method | Type   
--- | :--- 
new __PotionSplashEvent__(ThrownPotion, Map) <br> _PotionSplashEvent constructor_ | _constructor_
 readonly property __AffectedEntities__ <br> _Get: Retrieves a list of all effected entities_ | `Collection<LivingEntity>`
 readonly property __Entity__ <br> _Entity property_ | [`ThrownPotion`](../../entity/ThrownPotion.md)
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Potion__ <br> _Get: Gets the potion which caused this event_ | [`ThrownPotion`](../../entity/ThrownPotion.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __getIntensity__(entity) <br> _Gets the intensity of the potion's effects for given entity; This_ | `double`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 function __setIntensity__(entity, intensity) <br> _Overwrites the intensity for a given entity_ | `void`
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

### Public Constructors for [`PotionSplashEvent`](PotionSplashEvent.md)

##### <a id='potionsplashevent'></a>new __PotionSplashEvent__(ThrownPotion, Map) 

_PotionSplashEvent constructor_

Argument | Type | Description  
--- | --- | --- 
ThrownPotion | `final` | ThrownPotion argument
Map | `final` | Map argument

---

### Public Properties for [`PotionSplashEvent`](PotionSplashEvent.md)

##### <a id='affectedentities'></a>public  readonly property __AffectedEntities__

_Get: Retrieves a list of all effected entities_

Get | Description
--- | --- 
`Collection<LivingEntity>` | A fresh copy of the affected entity list



##### <a id='entity'></a>public  readonly property __Entity__

_Entity property_

Get | 
--- | 
[`ThrownPotion`](../../entity/ThrownPotion.md) |



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



##### <a id='potion'></a>public  readonly property __Potion__

_Get: Gets the potion which caused this event_

Get | Description
--- | --- 
[`ThrownPotion`](../../entity/ThrownPotion.md) | The thrown potion entity



##### <a id='cancelled'></a>public  writeonly property __Cancelled__

_Cancelled property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
cancel | `boolean` | cancel argument


---

### Public Methods for [`PotionSplashEvent`](PotionSplashEvent.md)

##### <a id='getintensity'></a>public  function __getIntensity__(entity)

_Gets the intensity of the potion's effects for given entity; This depends on the distance to the impact center_

Argument | Type | Description  
--- | --- | --- 
entity | `LivingEntity` | Which entity to get intensity for

Returns | Description
--- | --- 
`double` | intensity relative to maximum effect; 0.0: not affected; 1.0: fully hit by potion effects


##### <a id='iscancelled'></a>public  function __isCancelled__()

_isCancelled method_

Returns | 
--- | 
`boolean` |


##### <a id='setintensity'></a>public  function __setIntensity__(entity, intensity)

_Overwrites the intensity for a given entity_

Argument | Type | Description  
--- | --- | --- 
entity | `LivingEntity` | For which entity to define a new intensity
intensity | `double` | relative to maximum effect

Returns | 
--- | 
`void` |


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
	

