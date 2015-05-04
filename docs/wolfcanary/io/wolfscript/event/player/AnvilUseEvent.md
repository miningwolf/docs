## AnvilUseEvent __class__

>io.wolfscript.event.player.AnvilUseEvent
>Extends [`Hook`](../Hook.md)
``` javascript
this.on('player.AnvilUseEvent', function (e) { });
```


---

### Class Overview

class AnvilUseEvent

Method | Type   
--- | :--- 
 readonly property __Anvil__ <br> _Get: Gets the `Anvil` in use_ | `Anvil`
 readonly property __Player__ <br> _Get: Gets the `Player` using the `Anvil`_ | `Player`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](../Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](../Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





---


### Public Properties for [`AnvilUseEvent`](AnvilUseEvent.md)

##### <a id='anvil'></a>public  readonly property __Anvil__

_Get: Gets the `Anvil` in use_

Get | Description
--- | --- 
`Anvil` | the `Anvil`



##### <a id='player'></a>public  readonly property __Player__

_Get: Gets the `Player` using the `Anvil`_

Get | Description
--- | --- 
`Player` | the `Player`



---

### Public Methods for [`AnvilUseEvent`](AnvilUseEvent.md)

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
	

