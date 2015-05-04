## SignShowEvent __class__

>io.wolfscript.event.player.SignShowEvent
>Extends [`Hook`](../Hook.md)
``` javascript
this.on('player.SignShowEvent', function (e) { });
```


---

### Class Overview

Sign Change event. Contains information about a sign shown to a player

Method | Type   
--- | :--- 
 readonly property __Player__ <br> _Get: Gets the `Player` being shown a [`Sign`](../../api/world/blocks/Sign.md)_ | `Player`
 readonly property __Sign__ <br> _Get: Gets the [`Sign`](../../api/world/blocks/Sign.md) being shown_ | [`Sign`](../../api/world/blocks/Sign.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](../Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](../Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





---


### Public Properties for [`SignShowEvent`](SignShowEvent.md)

##### <a id='player'></a>public  readonly property __Player__

_Get: Gets the `Player` being shown a [`Sign`](../../api/world/blocks/Sign.md)_

Get | Description
--- | --- 
`Player` | the `Player`



##### <a id='sign'></a>public  readonly property __Sign__

_Get: Gets the [`Sign`](../../api/world/blocks/Sign.md) being shown_

Get | Description
--- | --- 
[`Sign`](../../api/world/blocks/Sign.md) | the [`Sign`](../../api/world/blocks/Sign.md)



---

### Public Methods for [`SignShowEvent`](SignShowEvent.md)

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
	

