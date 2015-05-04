## ChatEvent __class__

>io.wolfscript.event.player.ChatEvent
>Extends [`CancelableHook`](../CancelableHook.md)
``` javascript
this.on('player.ChatEvent', function (e) { });
```


---

### Class Overview

Chat event. Contains player, prefix, message and receivers information

Method | Type   
--- | :--- 
 readonly property __Player__ <br> _Get: Get the `Player` instance_ | `Player`
  property __Message__ <br> _Get: Get the message this player has sent<br>Set: Change the message completely_ | `String`
  property __Format__ <br> _Get: Get the chat format. This is a string like this:<br>Set: Override the default chatting format._ | `String`
 writeonly property __PlayerDisplayName__ <br> _Set: Set the name that is used for this player_ | `void`
 writeonly property __Prefix__ <br> _Set: Override the players chat prefix_ | `void`
 readonly property __Prefix__ <br> _Get: Get the message prefix. The prefix contains the following data:_ | `String`
 readonly property __PlayerDisplayName__ <br> _Get: Get the currently used name for this player_ | `String`
 readonly property __ReceiverList__ <br> _Get: Get a list of all receivers for this message_ | `List<Player>`
 function __setReceiverList__() <br> _Override the list of receivers_ | `void`
 function __buildSendMessage__() <br> _Create the message that will be sent from the placeholder list and the format._ | `String`
 function __addToReceiverList__(player) <br> _Add a `Player` to the receiver list. This better not be null!_ | `void`
 function __appendToMessage__(toAppend) <br> _Append the given String to the existing message_ | `void`
 function __removeFromReceiverList__(player) <br> _Remove a `Player` from the receiver list_ | `void`
 function __setPlaceholder__(placeholder, value) <br> _Set or override a placeholder and a value_ | `void`
 function __removePlaceholder__(placeholder) <br> _Remove a specified placeholder value._ | `void`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](../CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](../CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](../Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](../Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







---


### Public Properties for [`ChatEvent`](ChatEvent.md)

##### <a id='player'></a>public  readonly property __Player__

_Get: Get the `Player` instance_

Get | Description
--- | --- 
`Player` | the `Player`



##### <a id='message'></a>public   property __Message__

_Get: Get the message this player has sent<br>Set: Change the message completely_

Get | Description
--- | --- 
`String` | the message

Set | Type | Description  
--- | --- | --- 
message | `String` | the message to set


##### <a id='format'></a>public   property __Format__

_Get: Get the chat format. This is a string like this:<br> &lt;%prefix %name&gt; %message You can modify this to your liking. Replacement values can be found in the placeholder map.<br> This is a formatting template, do not replace the placeholders with real values. This will happen automatically.<br>Set: Override the default chatting format._

Get | 
--- | 
`String` |

Set | Type | Description  
--- | --- | --- 
format | `String` | the format to set


##### <a id='playerdisplayname'></a>public  writeonly property __PlayerDisplayName__

_Set: Set the name that is used for this player_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
name | `String` | the display name to set


##### <a id='prefix'></a>public  writeonly property __Prefix__

_Set: Override the players chat prefix_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
newPrefix | `String` | the prefix to be set


##### <a id='prefix'></a>public  readonly property __Prefix__

_Get: Get the message prefix. The prefix contains the following data:<br> This is the prefix as defined in Player or Group._

Get | Description
--- | --- 
`String` | the prefix string



##### <a id='playerdisplayname'></a>public  readonly property __PlayerDisplayName__

_Get: Get the currently used name for this player_

Get | Description
--- | --- 
`String` | display name



##### <a id='receiverlist'></a>public  readonly property __ReceiverList__

_Get: Get a list of all receivers for this message_

Get | Description
--- | --- 
`List<Player>` | the list of `Player` receivers



---

### Public Methods for [`ChatEvent`](ChatEvent.md)

##### <a id='setreceiverlist'></a>public  function __setReceiverList__()

_Override the list of receivers_

Returns | 
--- | 
`void` |


##### <a id='buildsendmessage'></a>public  function __buildSendMessage__()

_Create the message that will be sent from the placeholder list and the format._

Returns | Description
--- | --- 
`String` | message


##### <a id='addtoreceiverlist'></a>public  function __addToReceiverList__(player)

_Add a `Player` to the receiver list. This better not be null!_

Argument | Type | Description  
--- | --- | --- 
player | `Player` | the `Player` to add

Returns | 
--- | 
`void` |


##### <a id='appendtomessage'></a>public  function __appendToMessage__(toAppend)

_Append the given String to the existing message_

Argument | Type | Description  
--- | --- | --- 
toAppend | `String` | the message string to append

Returns | 
--- | 
`void` |


##### <a id='removefromreceiverlist'></a>public  function __removeFromReceiverList__(player)

_Remove a `Player` from the receiver list_

Argument | Type | Description  
--- | --- | --- 
player | `Player` | the `Player` to remove

Returns | 
--- | 
`void` |


##### <a id='setplaceholder'></a>public  function __setPlaceholder__(placeholder, value)

_Set or override a placeholder and a value_

Argument | Type | Description  
--- | --- | --- 
placeholder | `String` | the palceholder, such as %name or %extraData - something to your liking
value | `String` | The value to substitute the placeholder with when the chat message is dispatched

Returns | 
--- | 
`void` |


##### <a id='removeplaceholder'></a>public  function __removePlaceholder__(placeholder)

_Remove a specified placeholder value._

Argument | Type | Description  
--- | --- | --- 
placeholder | `String` | the placeholder to remove

Returns | 
--- | 
`void` |


##### <a id='tostring'></a>public final function __toString__()

_toString method_

Returns | 
--- | 
`String` |


---

### Public Methods for [`CancelableHook`](../CancelableHook.md)

##### <a id='call'></a>public  function __call__()

_Calls a Hook if not already executed_

Returns | Description
--- | --- 
[`CancelableHook`](../CancelableHook.md) | this


##### <a id='iscanceled'></a>public  function __isCanceled__()

_isCanceled method_

Returns | 
--- | 
`boolean` |


##### <a id='setcanceled'></a>public  function __setCanceled__()

_setCanceled method_

Returns | 
--- | 
`void` |


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


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

