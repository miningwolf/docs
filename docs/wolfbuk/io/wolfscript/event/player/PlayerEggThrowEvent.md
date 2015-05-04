## PlayerEggThrowEvent __class__

>io.wolfscript.event.player.PlayerEggThrowEvent
>Extends [`PlayerEvent`](PlayerEvent.md)

---

### Class Overview

Called when a player throws an egg and it might hatch

Method | Type   
--- | :--- 
new __PlayerEggThrowEvent__(Player, Egg, boolean, byte, EntityType) <br> _PlayerEggThrowEvent constructor_ | _constructor_
new __PlayerEggThrowEvent__(player, egg, hatching, numHatches, hatchingType) <br> _PlayerEggThrowEvent constructor_ | _constructor_
 readonly property __Egg__ <br> _Get: Gets the egg involved in this event._ | [`Egg`](../../entity/Egg.md)
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
  property __HatchingType__ <br> _Get: Get the type of the mob being hatched (EntityType.CHICKEN by default)<br>Set: Change the type of mob being hatched by the egg_ | [`EntityType`](../../entity/EntityType.md)
  property __NumHatches__ <br> _Get: Get the number of mob hatches from the egg. By default the number will<br>Set: Change the number of mobs coming out of the hatched egg_ | `byte`
 writeonly property __Hatching__ <br> _Set: Sets whether the egg will hatch or not._ | `void`
 function __isHatching__() <br> _Gets whether the egg is hatching or not. Will be what the server_ | `boolean`
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
final function __isAsynchronous__() <br> _Any custom event that should not by synchronized with other events must_ | `boolean`







---

### Public Constructors for [`PlayerEggThrowEvent`](PlayerEggThrowEvent.md)

##### <a id='playereggthrowevent'></a>new __PlayerEggThrowEvent__(Player, Egg, boolean, byte, EntityType) 

_PlayerEggThrowEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Player | `final` | Player argument
Egg | `final` | Egg argument
boolean | `final` | boolean argument
byte | `final` | byte argument
EntityType | `final` | EntityType argument

##### <a id='playereggthrowevent'></a>new __PlayerEggThrowEvent__(player, egg, hatching, numHatches, hatchingType) 

_PlayerEggThrowEvent constructor_

Argument | Type | Description  
--- | --- | --- 
player | `Player` | player argument
egg | [`Egg`](../../entity/Egg.md) | egg argument
hatching | `boolean` | hatching argument
numHatches | `byte` | numHatches argument
hatchingType | [`CreatureType`](../../entity/CreatureType.md) | hatchingType argument

---

### Public Properties for [`PlayerEggThrowEvent`](PlayerEggThrowEvent.md)

##### <a id='hatchtype'></a>public  writeonly property __HatchType__
_Deprecated: In favour of {@link #setHatchingType(EntityType)}._

_Set: Change the type of mob being hatched by the egg_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
hatchType | [`CreatureType`](../../entity/CreatureType.md) | The type of the mob being hatched by the egg


##### <a id='egg'></a>public  readonly property __Egg__

_Get: Gets the egg involved in this event._

Get | Description
--- | --- 
[`Egg`](../../entity/Egg.md) | the egg involved in this event



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



##### <a id='hatchtype'></a>public  readonly property __HatchType__
_Deprecated: In favour of {@link #getHatchingType()}._

_Get: Get the type of the mob being hatched (EntityType.CHICKEN by default)_

Get | Description
--- | --- 
[`CreatureType`](../../entity/CreatureType.md) | The type of the mob being hatched by the egg



##### <a id='hatchingtype'></a>public   property __HatchingType__

_Get: Get the type of the mob being hatched (EntityType.CHICKEN by default)<br>Set: Change the type of mob being hatched by the egg_

Get | Description
--- | --- 
[`EntityType`](../../entity/EntityType.md) | The type of the mob being hatched by the egg

Set | Type | Description  
--- | --- | --- 
hatchType | [`EntityType`](../../entity/EntityType.md) | The type of the mob being hatched by the egg


##### <a id='numhatches'></a>public   property __NumHatches__

_Get: Get the number of mob hatches from the egg. By default the number will be the number the server would've done <ul> <li>7/8 chance of being 0 <li>31/256 ~= 1/8 chance to be 1 <li>1/256 chance to be 4 </ul><br>Set: Change the number of mobs coming out of the hatched egg <p> The boolean hatching will override this number. Ie. If hatching = false, this number will not matter_

Get | Description
--- | --- 
`byte` | The number of mobs going to be hatched by the egg

Set | Type | Description  
--- | --- | --- 
numHatches | `byte` | The number of mobs coming out of the egg


##### <a id='hatching'></a>public  writeonly property __Hatching__

_Set: Sets whether the egg will hatch or not._

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
hatching | `boolean` | true if you want the egg to hatch, false if you want it not to


---

### Public Methods for [`PlayerEggThrowEvent`](PlayerEggThrowEvent.md)

##### <a id='ishatching'></a>public  function __isHatching__()

_Gets whether the egg is hatching or not. Will be what the server would've done without interaction._

Returns | Description
--- | --- 
`boolean` | boolean Whether the egg is going to hatch or not


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

_Any custom event that should not by synchronized with other events must use the specific constructor. These are the caveats of using an asynchronous event: <ul> <li>The event is never fired from inside code triggered by a synchronous event. Attempting to do so results in an `IllegalStateException`. <li>However, asynchronous event handlers may fire synchronous or asynchronous events <li>The event may be fired multiple times simultaneously and in any order. <li>Any newly registered or unregistered handler is ignored after an event starts execution. <li>The handlers for this event may block for any length of time. <li>Some implementations may selectively declare a specific event use as asynchronous. This behavior should be clearly defined. <li>Asynchronous calls are not calculated in the plugin timing system. </ul>_

Returns | Description
--- | --- 
`boolean` | false by default, true if the event fires asynchronously


---


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

