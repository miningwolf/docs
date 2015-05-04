## ReturnFromIdleEvent __class__

>io.wolfscript.event.player.ReturnFromIdleEvent
>Extends [`Hook`](../Hook.md)
``` javascript
this.on('player.ReturnFromIdleEvent', function (e) { });
```


---

### Class Overview

Called when the Player is no longer idle

Method | Type   
--- | :--- 
 readonly property __Player__ <br> _Get: Get the `Player` that was Idle_ | `Player`
 readonly property __TimeIdle__ <br> _Get: Gets the amount of time the `Player` was idle_ | `long`
 function __toString__() <br> _{@inheritDoc}_ | `String`
 |
__Inherited items from [`Hook`](../Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](../Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





---


### Public Properties for [`ReturnFromIdleEvent`](ReturnFromIdleEvent.md)

##### <a id='player'></a>public  readonly property __Player__

_Get: Get the `Player` that was Idle_

Get | Description
--- | --- 
`Player` | the idle player



##### <a id='timeidle'></a>public  readonly property __TimeIdle__

_Get: Gets the amount of time the `Player` was idle_

Get | Description
--- | --- 
`long` | time idle



---

### Public Methods for [`ReturnFromIdleEvent`](ReturnFromIdleEvent.md)

##### <a id='tostring'></a>public  function __toString__()

_{@inheritDoc}_

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
	

