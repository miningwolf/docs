## PlayerChatTabCompleteEvent __class__

>io.wolfscript.event.player.PlayerChatTabCompleteEvent
>Extends [`PlayerEvent`](PlayerEvent.md)

---

### Class Overview

Called when a player attempts to tab-complete a chat message.

Method | Type   
--- | :--- 
new __PlayerChatTabCompleteEvent__(Player, String, Collection) <br> _PlayerChatTabCompleteEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](..\HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](..\HandlerList.md)
 readonly property __TabCompletions__ <br> _Get: Gets the chat message being tab-completed._ | `Collection<String>`
 |
__Inherited items from [`PlayerEvent`](PlayerEvent.md)__ |
new __PlayerEvent__(Player) <br> _PlayerEvent constructor_ | _constructor_
final readonly property __Player__ <br> _Get: Returns the player involved in this event_ | `Player`
 |
__Inherited items from [`Event`](..\Event.md)__ |
final function __isAsynchronous__() <br> _The default constructor is defined for cleaner code. This constructor_ | `boolean`







---

### Public Constructors for [`PlayerChatTabCompleteEvent`](PlayerChatTabCompleteEvent.md)

##### <a id='playerchattabcompleteevent'></a>new __PlayerChatTabCompleteEvent__(Player, String, Collection) 

_PlayerChatTabCompleteEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Player | `final` | Player argument
String | `final` | String argument
Collection | `final` | Collection argument

---

### Public Properties for [`PlayerChatTabCompleteEvent`](PlayerChatTabCompleteEvent.md)

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



##### <a id='tabcompletions'></a>public  readonly property __TabCompletions__

_Get: Gets the chat message being tab-completed._

Get | Description
--- | --- 
`Collection<String>` | the chat message /
    public String getChatMessage() {
        return message;
    }

    /** Gets the last 'token' of the message being tab-completed. <p> The token is the substring starting with the character after the last space in the message.



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


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

