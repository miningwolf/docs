## FurnaceExtractEvent __class__

>io.wolfscript.event.inventory.FurnaceExtractEvent
>Extends [`BlockExpEvent`](..\block\BlockExpEvent.md)

---

### Class Overview

This event is called when a player takes items out of the furnace

Method | Type   
--- | :--- 
new __FurnaceExtractEvent__(player, block, itemType, itemAmount, exp) <br> _FurnaceExtractEvent constructor_ | _constructor_
 readonly property __ItemAmount__ <br> _Get: Get the player that triggered the event_ | `int`
 |
__Inherited items from [`BlockExpEvent`](..\block\BlockExpEvent.md)__ |
new __BlockExpEvent__(block, exp) <br> _BlockExpEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](..\HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](..\HandlerList.md)
 writeonly property __ExpToDrop__ <br> _Set: Get the experience dropped by the block after the event has processed_ | `void`
 |
__Inherited items from [`BlockEvent`](..\block\BlockEvent.md)__ |
new __BlockEvent__(Block) <br> _BlockEvent constructor_ | _constructor_
final readonly property __Block__ <br> _Get: Gets the block involved in this event._ | [`Block`](..\..\block\Block.md)
 |
__Inherited items from [`Event`](..\Event.md)__ |
final function __isAsynchronous__() <br> _The default constructor is defined for cleaner code. This constructor_ | `boolean`









---

### Public Constructors for [`FurnaceExtractEvent`](FurnaceExtractEvent.md)

##### <a id='furnaceextractevent'></a>new __FurnaceExtractEvent__(player, block, itemType, itemAmount, exp) 

_FurnaceExtractEvent constructor_

Argument | Type | Description  
--- | --- | --- 
player | `Player` | player argument
block | [`Block`](..\..\block\Block.md) | block argument
itemType | [`Material`](..\..\Material.md) | itemType argument
itemAmount | `int` | itemAmount argument
exp | `int` | exp argument

---

### Public Properties for [`FurnaceExtractEvent`](FurnaceExtractEvent.md)

##### <a id='itemamount'></a>public  readonly property __ItemAmount__

_Get: Get the player that triggered the event_

Get | Description
--- | --- 
`int` | the relevant player /
    public Player getPlayer() {
        return player;
    }

    /** Get the Material of the item being retrieved



---
### Public Constructors for [`BlockExpEvent`](..\block\BlockExpEvent.md)

##### <a id='blockexpevent'></a>new __BlockExpEvent__(block, exp) 

_BlockExpEvent constructor_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](..\..\block\Block.md) | block argument
exp | `int` | exp argument

---

### Public Properties for [`BlockExpEvent`](..\block\BlockExpEvent.md)

##### <a id='handlerlist'></a>public static readonly property __HandlerList__

_HandlerList property_

Get | 
--- | 
[`HandlerList`](..\HandlerList.md) |



##### <a id='handlers'></a>public  readonly property __Handlers__

_Handlers property_

Get | 
--- | 
[`HandlerList`](..\HandlerList.md) |



##### <a id='exptodrop'></a>public  writeonly property __ExpToDrop__

_Set: Get the experience dropped by the block after the event has processed_

Get | Description
--- | --- 
`void` | The experience to drop /
    public int getExpToDrop() {
        return exp;
    }

    /** Set the amount of experience dropped by the block after the event has processed

Set | Type | Description  
--- | --- | --- 
exp | `int` | 1 or higher to drop experience, else nothing will drop


---
### Public Constructors for [`BlockEvent`](..\block\BlockEvent.md)

##### <a id='blockevent'></a>new __BlockEvent__(Block) 

_BlockEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Block | `final` | Block argument

---

### Public Properties for [`BlockEvent`](..\block\BlockEvent.md)

##### <a id='block'></a>public final readonly property __Block__

_Get: Gets the block involved in this event._

Get | Description
--- | --- 
[`Block`](..\..\block\Block.md) | The Block which block is involved in this event



---

### Public Methods for [`Event`](..\Event.md)

##### <a id='isasynchronous'></a>public final function __isAsynchronous__()

_The default constructor is defined for cleaner code. This constructor assumes the event is synchronous. /
    public Event() {
        this(false);
    }

    /** This constructor is used to explicitly declare an event as synchronous or asynchronous._

Returns | Description
--- | --- 
`boolean` | name of this event /
    public String getEventName() {
        if (name == null) {
            name = getClass().getSimpleName();
        }
        return name;
    }

    public abstract HandlerList getHandlers();

    /** Any custom event that should not by synchronized with other events must use the specific constructor. These are the caveats of using an asynchronous event: <ul> <li>The event is never fired from inside code triggered by a synchronous event. Attempting to do so results in an `IllegalStateException`. <li>However, asynchronous event handlers may fire synchronous or asynchronous events <li>The event may be fired multiple times simultaneously and in any order. <li>Any newly registered or unregistered handler is ignored after an event starts execution. <li>The handlers for this event may block for any length of time. <li>Some implementations may selectively declare a specific event use as asynchronous. This behavior should be clearly defined. <li>Asynchronous calls are not calculated in the plugin timing system. </ul>


---


---


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

