## DisconnectionEvent __class__

>io.wolfscript.event.player.DisconnectionEvent
>Extends [`Hook`](../Hook.md)
``` javascript
this.on('player.DisconnectionEvent', function (e) { });
```


---

### Class Overview

Disconnection event. Contains information about a `Player` disconnecting.

Method | Type   
--- | :--- 
  property __LeaveMessage__ <br> _Get: Gets the LeaveMessage<br>Set: Sets the LeaveMessage_ | `String`
 readonly property __Player__ <br> _Get: Gets the `Player` disconnected_ | `Player`
  property __Reason__ <br> _Get: Get the reason for disconnect (if applicable)<br>Set: Set the reason for disconnection that will be displayed_ | `String`
 writeonly property __Hidden__ <br> _Hidden property_ | `void`
 function __isHidden__() <br> _isHidden method_ | `boolean`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](../Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](../Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





---


### Public Properties for [`DisconnectionEvent`](DisconnectionEvent.md)

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

_Hidden property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
hidden | `boolean` | hidden argument


---

### Public Methods for [`DisconnectionEvent`](DisconnectionEvent.md)

##### <a id='ishidden'></a>public  function __isHidden__()

_isHidden method_

Returns | 
--- | 
`boolean` |


##### <a id='tostring'></a>public final function __toString__()

_toString method_

Returns | 
--- | 
`String` |


---

### Public Properties for [`Hook`](../Hook.md)

##### <a id='hookname'></a>public final readonly property __HookName__

_Get: Get the name of this hook._

Get | Description
--- | --- 
`String` | simple class name



---

### Public Methods for [`Hook`](../Hook.md)

##### <a id='call'></a>public  function __call__()

_Calls a Hook if not already executed_

Returns | Description
--- | --- 
[`Hook`](../Hook.md) | this


##### <a id='hashcode'></a>public  function __hashCode__()

_hashCode method_

Returns | 
--- | 
`int` |


---


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

