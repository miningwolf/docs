## PlayerFishEvent __class__

>io.wolfscript.event.player.PlayerFishEvent
>Extends [`PlayerEvent`](PlayerEvent.md)
>Implements [`Cancellable`](../Cancellable.md)
``` javascript
this.on('player.PlayerFishEvent', function (e) { });
```


---

### Class Overview

Thrown when a player is fishing

Method | Type   
--- | :--- 
new __PlayerFishEvent__(Player, Entity, Fish, State) <br> _PlayerFishEvent constructor_ | _constructor_
 readonly property __Caught__ <br> _Get: Gets the entity caught by the player._ | `Entity`
  property __ExpToDrop__ <br> _Get: Gets the amount of experience received when fishing.<br>Set: Sets the amount of experience received when fishing._ | `int`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Hook__ <br> _Hook property_ | [`Fish`](../../entity/Fish.md)
 readonly property __State__ <br> _Get: Gets the state of the fishing_ | `State`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`PlayerEvent`](PlayerEvent.md)__ |
new __PlayerEvent__(Player) <br> _PlayerEvent constructor_ | _constructor_
final readonly property __Player__ <br> _Get: Returns the player involved in this event_ | `Player`
 |
__Inherited items from [`Event`](../Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







---

### Public Constructors for [`PlayerFishEvent`](PlayerFishEvent.md)

##### <a id='playerfishevent'></a>new __PlayerFishEvent__(Player, Entity, State) 
_Deprecated: replaced by {@link #PlayerFishEvent(Player, Entity, Fish, State)} to include the {@link Fish} hook entity._

_PlayerFishEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Player | `final` | Player argument
Entity | `final` | Entity argument
State | `final` | State argument

##### <a id='playerfishevent'></a>new __PlayerFishEvent__(Player, Entity, Fish, State) 

_PlayerFishEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Player | `final` | Player argument
Entity | `final` | Entity argument
Fish | `final` | Fish argument
State | `final` | State argument

---

### Public Properties for [`PlayerFishEvent`](PlayerFishEvent.md)

##### <a id='caught'></a>public  readonly property __Caught__

_Get: Gets the entity caught by the player. <p> If player has fished successfully, the result may be cast to [`Item`](../../entity/Item.md)._

Get | Description
--- | --- 
`Entity` | Entity caught by the player, Entity if fishing, and null if bobber has gotten stuck in the ground or nothing has been caught



##### <a id='exptodrop'></a>public   property __ExpToDrop__

_Get: Gets the amount of experience received when fishing. <p> Note: This value has no default effect unless the event state is `State#CAUGHT_FISH`.<br>Set: Sets the amount of experience received when fishing. <p> Note: This value has no default effect unless the event state is `State#CAUGHT_FISH`._

Get | Description
--- | --- 
`int` | the amount of experience to drop

Set | Type | Description  
--- | --- | --- 
amount | `int` | the amount of experience to drop


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



##### <a id='hook'></a>public  readonly property __Hook__

_Hook property_

Get | 
--- | 
[`Fish`](../../entity/Fish.md) |



##### <a id='state'></a>public  readonly property __State__

_Get: Gets the state of the fishing_

Get | Description
--- | --- 
`State` | A State detailing the state of the fishing



##### <a id='cancelled'></a>public  writeonly property __Cancelled__

_Cancelled property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
cancel | `boolean` | cancel argument


---

### Public Methods for [`PlayerFishEvent`](PlayerFishEvent.md)

##### <a id='iscancelled'></a>public  function __isCancelled__()

_isCancelled method_

Returns | 
--- | 
`boolean` |


---
### Public Constructors for [`PlayerEvent`](PlayerEvent.md)

##### <a id='playerevent'></a>new __PlayerEvent__(Player) 

_PlayerEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Player | `final` | Player argument

---

### Public Properties for [`PlayerEvent`](PlayerEvent.md)

##### <a id='player'></a>public final readonly property __Player__

_Get: Returns the player involved in this event_

Get | Description
--- | --- 
`Player` | Player who is involved in this event



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
	

