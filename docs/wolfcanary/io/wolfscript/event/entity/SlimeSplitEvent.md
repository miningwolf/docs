## SlimeSplitEvent __class__

>io.wolfscript.event.entity.SlimeSplitEvent
>Extends [`Hook`](../Hook.md)
``` javascript
this.on('entity.SlimeSplitEvent', function (e) { });
```


---

### Class Overview

Slime split event, Contains information about a slime split.

Method | Type   
--- | :--- 
 readonly property __ChildSlimes__ <br> _Get: Get the [`Slime`](../../api/entity/living/monster/Slime.md)s that should be spawned_ | `List<Slime>`
 readonly property __OriginalSlime__ <br> _Get: Get the original [`Slime`](../../api/entity/living/monster/Slime.md) that died_ | [`Slime`](../../api/entity/living/monster/Slime.md)
 function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](../Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](../Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





---


### Public Properties for [`SlimeSplitEvent`](SlimeSplitEvent.md)

##### <a id='childslimes'></a>public  readonly property __ChildSlimes__

_Get: Get the [`Slime`](../../api/entity/living/monster/Slime.md)s that should be spawned_

Get | Description
--- | --- 
`List<Slime>` | a list of [`Slime`](../../api/entity/living/monster/Slime.md)s that will spawn



##### <a id='originalslime'></a>public  readonly property __OriginalSlime__

_Get: Get the original [`Slime`](../../api/entity/living/monster/Slime.md) that died_

Get | Description
--- | --- 
[`Slime`](../../api/entity/living/monster/Slime.md) | the [`Slime`](../../api/entity/living/monster/Slime.md) that died



---

### Public Methods for [`SlimeSplitEvent`](SlimeSplitEvent.md)

##### <a id='tostring'></a>public  function __toString__()

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
	

