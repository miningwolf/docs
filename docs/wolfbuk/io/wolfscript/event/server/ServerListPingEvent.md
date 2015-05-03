## ServerListPingEvent __class__

>io.wolfscript.event.server.ServerListPingEvent
>Extends [`ServerEvent`](ServerEvent.md)
>Implements `Iterable<Player`

---

### Class Overview

Called when a server list ping is coming in. Displayed players can be checked and removed by {@link #iterator() iterating} over this event.

Method | Type   
--- | :--- 
new __ServerListPingEvent__(InetAddress, String, int, int) <br> _ServerListPingEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](..\HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](..\HandlerList.md)
 writeonly property __MaxPlayers__ <br> _Set: This constructor is intended for implementations that provide the_ | `void`
 |
__Inherited items from [`ServerEvent`](ServerEvent.md)__ |
 |
__Inherited items from [`Event`](..\Event.md)__ |
final function __isAsynchronous__() <br> _The default constructor is defined for cleaner code. This constructor_ | `boolean`







---

### Public Constructors for [`ServerListPingEvent`](ServerListPingEvent.md)

##### <a id='serverlistpingevent'></a>new __ServerListPingEvent__(InetAddress, String, int, int) 

_ServerListPingEvent constructor_

Argument | Type | Description  
--- | --- | --- 
InetAddress | `final` | InetAddress argument
String | `final` | String argument
int | `final` | int argument
int | `final` | int argument

---

### Public Properties for [`ServerListPingEvent`](ServerListPingEvent.md)

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



##### <a id='maxplayers'></a>public  writeonly property __MaxPlayers__

_Set: This constructor is intended for implementations that provide the `#iterator()` method, thus provided the `#getNumPlayers()` count._

Get | Description
--- | --- 
`void` | the address /
    public InetAddress getAddress() {
        return address;
    }

    /** Get the message of the day message.

Set | Type | Description  
--- | --- | --- 
maxPlayers | `int` | the max number of players /
    protected ServerListPingEvent(final InetAddress address, final String motd, final int maxPlayers) {
        this.numPlayers = MAGIC_PLAYER_COUNT;
        this.address = address;
        this.motd = motd;
        this.maxPlayers = maxPlayers;
    }

    /** Get the address the ping is coming from.


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
	

