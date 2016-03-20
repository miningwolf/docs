## AreaEffectCloudApplyEvent __class__

>io.wolfscript.event.entity.AreaEffectCloudApplyEvent
>Extends [`EntityEvent`](EntityEvent.md)
``` javascript
this.on('entity.AreaEffectCloudApplyEvent', function (e) { });
```


---

### Class Overview

Called when a lingering potion applies it's effects. Happens once every 5 ticks

Method | Type   
--- | :--- 
new __AreaEffectCloudApplyEvent__(AreaEffectCloud, List) <br> _AreaEffectCloudApplyEvent constructor_ | _constructor_
 readonly property __AffectedEntities__ <br> _Get: Retrieves a mutable list of the effected entities_ | `List<LivingEntity>`
 readonly property __Entity__ <br> _Entity property_ | [`AreaEffectCloud`](../../entity/AreaEffectCloud.md)
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

### Public Constructors for [`AreaEffectCloudApplyEvent`](AreaEffectCloudApplyEvent.md)

##### <a id='areaeffectcloudapplyevent'></a>new __AreaEffectCloudApplyEvent__(AreaEffectCloud, List) 

_AreaEffectCloudApplyEvent constructor_

Argument | Type | Description  
--- | --- | --- 
AreaEffectCloud | `final` | AreaEffectCloud argument
List | `final` | List argument

---

### Public Properties for [`AreaEffectCloudApplyEvent`](AreaEffectCloudApplyEvent.md)

##### <a id='affectedentities'></a>public  readonly property __AffectedEntities__

_Get: Retrieves a mutable list of the effected entities <p> It is important to note that not every entity in this list is guaranteed to be effected.  The cloud may die during the application of its effects due to the depletion of `AreaEffectCloud#getDurationOnUse()` or `AreaEffectCloud#getRadiusOnUse()`_

Get | Description
--- | --- 
`List<LivingEntity>` | the affected entity list



##### <a id='entity'></a>public  readonly property __Entity__

_Entity property_

Get | 
--- | 
[`AreaEffectCloud`](../../entity/AreaEffectCloud.md) |



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


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

