## ConnectionEvent __class__

>io.wolfscript.event.player.ConnectionEvent
>Extends [`Hook`](../Hook.md)
``` javascript
this.on('player.ConnectionEvent', function (e) { });
```


---

### Class Overview

Connection event. Contains information about a player connecting.

Method | Type   
--- | :--- 
  property __Message__ <br> _Get: Gets the message sent to all<br>Set: Sets the message set to all_ | `String`
 readonly property __Player__ <br> _Get: Gets the `Player`_ | `Player`
 writeonly property __Hidden__ <br> _Hidden property_ | `void`
 function __isFirstConnection__() <br> _Returns true if this player has never connected before._ | `boolean`
 function __isHidden__() <br> _isHidden method_ | `boolean`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](../Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](../Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





---


### Public Properties for [`ConnectionEvent`](ConnectionEvent.md)

##### <a id='message'></a>public   property __Message__

_Get: Gets the message sent to all<br>Set: Sets the message set to all_

Get | Description
--- | --- 
`String` | the message sent to all

Set | Type | Description  
--- | --- | --- 
message | `String` | the message to be sent


##### <a id='player'></a>public  readonly property __Player__

_Get: Gets the `Player`_

Get | Description
--- | --- 
`Player` | the `Player`



##### <a id='hidden'></a>public  writeonly property __Hidden__

_Hidden property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
hidden | `boolean` | hidden argument


---

### Public Methods for [`ConnectionEvent`](ConnectionEvent.md)

##### <a id='isfirstconnection'></a>public  function __isFirstConnection__()

_Returns true if this player has never connected before._

Returns | Description
--- | --- 
`boolean` | `true` if first connection; `false` if not


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
	

