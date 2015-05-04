## Disconnection __class__

>io.wolfscript.event.player.Disconnection
>Extends [`Hook`](../../hook/Hook.md)

---

### Class Overview

Disconnection hook. Contains information about a `Player` disconnecting.

Method | Type   
--- | :--- 
new __Disconnection__(player, reason, leave) <br> _Disconnection constructor_ | _constructor_
  property __LeaveMessage__ <br> _Get: Gets the LeaveMessage<br>Set: Sets the LeaveMessage_ | `String`
 readonly property __Player__ <br> _Get: Gets the `Player` disconnected_ | `Player`
  property __Reason__ <br> _Get: Get the reason for disconnect (if applicable)<br>Set: Set the reason for disconnection that will be displayed_ | `String`
 writeonly property __Hidden__ <br> _Set: Sets whether this should be a hidden connect/disconnect_ | `void`
 function __isHidden__() <br> _Gets whether this should be a hidden connect/disconnect_ | `boolean`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](../../hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](../../hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





---

### Public Constructors for [`Disconnection`](Disconnection.md)

##### <a id='disconnection'></a>new __Disconnection__(player, reason, leave) 

_Disconnection constructor_

Argument | Type | Description  
--- | --- | --- 
player | `Player` | player argument
reason | `String` | reason argument
leave | `String` | leave argument

---

### Public Properties for [`Disconnection`](Disconnection.md)

##### <a id='leavemessage'></a>public   property __LeaveMessage__

_Get: Gets the LeaveMessage<br>Set: Sets the LeaveMessage_

Get | Description
--- | --- 
`String` | leaveMessage

Set | Type | Description  
--- | --- | --- 
leave | `String` | the leave message to set


##### <a id='player'></a>public  readonly property __Player__

_Get: Gets the `Player` disconnected_

Get | Description
--- | --- 
`Player` | the `Player`



##### <a id='reason'></a>public   property __Reason__

_Get: Get the reason for disconnect (if applicable)<br>Set: Set the reason for disconnection that will be displayed_

Get | Description
--- | --- 
`String` | reason if disconnecting, null otherwise

Set | Type | Description  
--- | --- | --- 
reason | `String` | the reason for disconnection


##### <a id='hidden'></a>public  writeonly property __Hidden__

_Set: Sets whether this should be a hidden connect/disconnect_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
hidden | `boolean` | `true` for hiding message; `false` for not


---

### Public Methods for [`Disconnection`](Disconnection.md)

##### <a id='ishidden'></a>public  function __isHidden__()

_Gets whether this should be a hidden connect/disconnect_

Returns | Description
--- | --- 
`boolean` | `true` for hidden; `false` for not


##### <a id='tostring'></a>public final function __toString__()

_toString method_

Returns | 
--- | 
`String` |


---

### Public Properties for [`Hook`](../../hook/Hook.md)

##### <a id='hookname'></a>public final readonly property __HookName__

_Get: Get the name of this hook._

Get | Description
--- | --- 
`String` | simple class name



---

### Public Methods for [`Hook`](../../hook/Hook.md)

##### <a id='call'></a>public  function __call__()

_Calls a Hook if not already executed_

Returns | Description
--- | --- 
[`Hook`](../../hook/Hook.md) | this


##### <a id='hashcode'></a>public  function __hashCode__()

_hashCode method_

Returns | 
--- | 
`int` |


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

