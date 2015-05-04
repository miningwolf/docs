## PlayerListEvent __class__

>io.wolfscript.event.player.PlayerListEvent
>Extends [`CancelableHook`](../CancelableHook.md)
``` javascript
this.on('player.PlayerListEvent', function (e) { });
```


---

### Class Overview

class PlayerListEvent

Method | Type   
--- | :--- 
final readonly property __Data__ <br> _Get: Gets the [`PlayerListData`](../../api/PlayerListData.md) being sent_ | [`PlayerListData`](../../api/PlayerListData.md)
final readonly property __Receiver__ <br> _Get: Gets the `Player` to receive the PlayerListEntry_ | `Player`
final function __toString__() <br> _{@inheritDoc}_ | `String`
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


### Public Properties for [`PlayerListEvent`](PlayerListEvent.md)

##### <a id='data'></a>public final readonly property __Data__

_Get: Gets the [`PlayerListData`](../../api/PlayerListData.md) being sent_

Get | Description
--- | --- 
[`PlayerListData`](../../api/PlayerListData.md) | [`PlayerListData`](../../api/PlayerListData.md) being sent



##### <a id='receiver'></a>public final readonly property __Receiver__

_Get: Gets the `Player` to receive the PlayerListEntry_

Get | Description
--- | --- 
`Player` | the `Player` receiver



---

### Public Methods for [`PlayerListEvent`](PlayerListEvent.md)

##### <a id='tostring'></a>public final function __toString__()

_{@inheritDoc}_

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
	

