## ServerCommandEvent __class__

>io.wolfscript.event.server.ServerCommandEvent
>Extends [`ServerEvent`](ServerEvent.md)

---

### Class Overview

This event is called when a command is run from the server console. It is called early in the command handling process, and modifications in this event (via `#setCommand(String)`) will be shown in the behavior. <p> Many plugins will have <b>no use for this event</b>, and you should attempt to avoid using it if it is not necessary. <p> Some examples of valid uses for this event are: <ul> <li>Logging executed commands to a separate file <li>Variable substitution. For example, replacing <code>${ip:Steve}</code> with the connection IP of the player named Steve, or simulating the <code>@a</code> and <code>@p</code> decorators used by Command Blocks for plugins that do not handle it. <li>Conditionally blocking commands belonging to other plugins. <li>Per-sender command aliases. For example, after the console runs the command <code>/calias cr gamemode creative</code>, the next time they run <code>/cr</code>, it gets replaced into <code>/gamemode creative</code>. (Global command aliases should be done by registering the alias.) </ul> <p> Examples of incorrect uses are: <ul> <li>Using this event to run command logic </ul> <p> If the event is cancelled, processing of the command will halt. <p> The state of whether or not there is a slash (<code>/</code>) at the beginning of the message should be preserved. If a slash is added or removed, unexpected behavior may result.

Method | Type   
--- | :--- 
new __ServerCommandEvent__(CommandSender, String) <br> _ServerCommandEvent constructor_ | _constructor_
  property __Command__ <br> _Get: Gets the command that the user is attempting to execute from the<br>Set: Sets the command that the server will execute_ | `String`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Sender__ <br> _Get: Get the command sender._ | [`CommandSender`](../../command/CommandSender.md)
 |
__Inherited items from [`ServerEvent`](ServerEvent.md)__ |
 |
__Inherited items from [`Event`](../Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
final function __isAsynchronous__() <br> _Any custom event that should not by synchronized with other events must_ | `boolean`







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

##### <a id='command'></a>public   property __Command__

_Get: Gets the command that the user is attempting to execute from the console<br>Set: Sets the command that the server will execute_

Get | Description
--- | --- 
`String` | Command the user is attempting to execute

Set | Type | Description  
--- | --- | --- 
message | `String` | New message that the server will execute


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



##### <a id='sender'></a>public  readonly property __Sender__

_Get: Get the command sender._

Get | Description
--- | --- 
[`CommandSender`](../../command/CommandSender.md) | The sender



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
	

