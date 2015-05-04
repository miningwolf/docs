## PlayerList __class__

>io.wolfscript.event.player.PlayerList
>Extends [`CancelableHook`](../../hook/CancelableHook.md)

---

### Class Overview

PlayerList <p/> Called when a `Player` information is sent to another `Player`

Method | Type   
--- | :--- 
new __PlayerList__(data, receiver) <br> _Constructs a new PlayerListEntryHook_ | _constructor_
final readonly property __Data__ <br> _Get: Gets the [`PlayerListData`](../../api/PlayerListData.md) being sent_ | [`PlayerListData`](../../api/PlayerListData.md)
final readonly property __Receiver__ <br> _Get: Gets the `Player` to receive the PlayerListEntry_ | `Player`
final function __toString__() <br> _{@inheritDoc}_ | `String`
 |
__Inherited items from [`CancelableHook`](../../hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](../../hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](../../hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](../../hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







---

### Public Constructors for [`PlayerList`](PlayerList.md)

##### <a id='playerlist'></a>new __PlayerList__(data, receiver) 

_Constructs a new PlayerListEntryHook_

Argument | Type | Description  
--- | --- | --- 
data | [`PlayerListData`](../../api/PlayerListData.md) | data argument
receiver | `Player` | the `Player` to receiver the [`PlayerListData`](../../api/PlayerListData.md)

---

### Public Properties for [`PlayerList`](PlayerList.md)

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

### Public Methods for [`PlayerList`](PlayerList.md)

##### <a id='tostring'></a>public final function __toString__()

_{@inheritDoc}_

Returns | 
--- | 
`String` |


---

### Public Methods for [`CancelableHook`](../../hook/CancelableHook.md)

##### <a id='call'></a>public  function __call__()

_Calls a Hook if not already executed_

Returns | Description
--- | --- 
[`CancelableHook`](../../hook/CancelableHook.md) | this


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


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

