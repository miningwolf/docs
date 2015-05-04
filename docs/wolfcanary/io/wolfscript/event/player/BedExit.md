## BedExitEvent __class__

>io.wolfscript.event.player.BedExit
>Extends [`Hook`](../../hook/Hook.md)
``` javascript
this.on('player.BedExit', function (e) { });
```


---

### Class Overview

Bed exit event, called when a player leaves a bed

Method | Type   
--- | :--- 
 readonly property __Bed__ <br> _Get: Get the bed [`Block`](../../api/world/blocks/Block.md) the `Player` is leaving_ | [`Block`](../../api/world/blocks/Block.md)
 readonly property __Player__ <br> _Get: Gets the `Player` leaving the bed_ | `Player`
 function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](../../hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](../../hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





---


### Public Properties for [`BedExit`](BedExit.md)

##### <a id='bed'></a>public  readonly property __Bed__

_Get: Get the bed [`Block`](../../api/world/blocks/Block.md) the `Player` is leaving_

Get | Description
--- | --- 
[`Block`](../../api/world/blocks/Block.md) | bed block player is leaving



##### <a id='player'></a>public  readonly property __Player__

_Get: Gets the `Player` leaving the bed_

Get | Description
--- | --- 
`Player` | player



---

### Public Methods for [`BedExit`](BedExit.md)

##### <a id='tostring'></a>public  function __toString__()

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


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

