## EntityChangeBlockEvent __class__

>io.wolfscript.event.entity.EntityChangeBlockEvent
>Extends [`EntityEvent`](EntityEvent.md)
>Implements [`Cancellable`](../Cancellable.md)

this.on('entity.EntityChangeBlockEvent', function (e) { });

---

### Class Overview

Called when any Entity, excluding players, changes a block.

Method | Type   
--- | :--- 
 readonly property __Block__ <br> _Get: Gets the block the entity is changing_ | [`Block`](../../block/Block.md)
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
 readonly property __To__ <br> _Get: Gets the Material that the block is changing into_ | [`Material`](../../Material.md)
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

### Public Constructors for [`EntityChangeBlockEvent`](EntityChangeBlockEvent.md)

##### <a id='entitychangeblockevent'></a>new __EntityChangeBlockEvent__(LivingEntity, Block, Material) 
_Deprecated: Provided as a backward compatibility before the data byte was provided, and type increased to all entities_

_EntityChangeBlockEvent constructor_

Argument | Type | Description  
--- | --- | --- 
LivingEntity | `final` | LivingEntity argument
Block | `final` | Block argument
Material | `final` | Material argument

##### <a id='entitychangeblockevent'></a>new __EntityChangeBlockEvent__(Entity, Block, Material, byte) 
_Deprecated: Magic value_

_EntityChangeBlockEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Entity | `final` | Entity argument
Block | `final` | Block argument
Material | `final` | Material argument
byte | `final` | byte argument

---

### Public Properties for [`EntityChangeBlockEvent`](EntityChangeBlockEvent.md)

##### <a id='block'></a>public  readonly property __Block__

_Get: Gets the block the entity is changing_

Get | Description
--- | --- 
[`Block`](../../block/Block.md) | the block that is changing



##### <a id='data'></a>public  readonly property __Data__
_Deprecated: Magic value_

_Get: Gets the data for the block that would be changed into_

Get | Description
--- | --- 
`byte` | the data for the block that would be changed into



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



##### <a id='to'></a>public  readonly property __To__

_Get: Gets the Material that the block is changing into_

Get | Description
--- | --- 
[`Material`](../../Material.md) | the material that the block is changing into



##### <a id='cancelled'></a>public  writeonly property __Cancelled__

_Cancelled property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
cancel | `boolean` | cancel argument


---

### Public Methods for [`EntityChangeBlockEvent`](EntityChangeBlockEvent.md)

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
	

