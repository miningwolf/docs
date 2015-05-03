## ServerCommandEvent __class__

>io.wolfscript.event.server.ServerCommandEvent
>Extends [`ServerEvent`](ServerEvent.md)

---

### Class Overview

This event is called when a command is run from the server console. It is called early in the command handling process, and modifications in this event (via `#setCommand(String)`) will be shown in the behavior. <p> Many plugins will have <b>no use for this event</b>, and you should attempt to avoid using it if it is not necessary. <p> Some examples of valid uses for this event are: <ul> <li>Logging executed commands to a separate file <li>Variable substitution. For example, replacing <code>${ip:Steve}</code> with the connection IP of the player named Steve, or simulating the <code>@a</code> and <code>@p</code> decorators used by Command Blocks for plugins that do not handle it. <li>Conditionally blocking commands belonging to other plugins. <li>Per-sender command aliases. For example, after the console runs the command <code>/calias cr gamemode creative</code>, the next time they run <code>/cr</code>, it gets replaced into <code>/gamemode creative</code>. (Global command aliases should be done by registering the alias.) </ul> <p> Examples of incorrect uses are: <ul> <li>Using this event to run command logic </ul> <p> If the event is cancelled, processing of the command will halt. <p> The state of whether or not there is a slash (<code>/</code>) at the beginning of the message should be preserved. If a slash is added or removed, unexpected behavior may result.

Method | Type   
--- | :--- 
new __ServerCommandEvent__(CommandSender, String) <br> _ServerCommandEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](..\HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](..\HandlerList.md)
 readonly property __Sender__ <br> _Get: Gets the command that the user is attempting to execute from the_ | [`CommandSender`](..\..\command\CommandSender.md)
 |
__Inherited items from [`ServerEvent`](ServerEvent.md)__ |
 |
__Inherited items from [`Event`](..\Event.md)__ |
final function __isAsynchronous__() <br> _The default constructor is defined for cleaner code. This constructor_ | `boolean`







---

### Public Constructors for [`ServerCommandEvent`](ServerCommandEvent.md)

##### <a id='servercommandevent'></a>new __ServerCommandEvent__(CommandSender, String) 

_ServerCommandEvent constructor_

Argument | Type | Description  
--- | --- | --- 
CommandSender | `final` | CommandSender argument
String | `final` | String argument

---

### Public Properties for [`ServerCommandEvent`](ServerCommandEvent.md)

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



##### <a id='sender'></a>public  readonly property __Sender__

_Get: Gets the command that the user is attempting to execute from the console_

Get | Description
--- | --- 
[`CommandSender`](..\..\command\CommandSender.md) | Command the user is attempting to execute /
    public String getCommand() {
        return command;
    }

    /** Sets the command that the server will execute



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
	

