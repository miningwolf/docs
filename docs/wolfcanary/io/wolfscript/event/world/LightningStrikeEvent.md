## LightningStrikeEvent __class__

>io.wolfscript.event.world.LightningStrikeEvent
>Extends [`Hook`](../Hook.md)
``` javascript
this.on('world.LightningStrikeEvent', function (e) { });
```


---

### Class Overview

class LightningStrikeEvent

Method | Type   
--- | :--- 
 readonly property __LightningBolt__ <br> _Get: Gets the [`LightningBolt`](../../api/entity/effect/LightningBolt.md) striking_ | [`LightningBolt`](../../api/entity/effect/LightningBolt.md)
final function __toString__() <br> _{@inheritDoc}_ | `String`
 var __lightbolt__ <br> _lightbolt field_ | [`LightningBolt`](../../api/entity/effect/LightningBolt.md)
 |
__Inherited items from [`Hook`](../Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](../Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





---


### Public Properties for [`LightningStrikeEvent`](LightningStrikeEvent.md)

##### <a id='lightningbolt'></a>public  readonly property __LightningBolt__

_Get: Gets the [`LightningBolt`](../../api/entity/effect/LightningBolt.md) striking_

Get | Description
--- | --- 
[`LightningBolt`](../../api/entity/effect/LightningBolt.md) | the striking [`LightningBolt`](../../api/entity/effect/LightningBolt.md)



---

### Public Methods for [`LightningStrikeEvent`](LightningStrikeEvent.md)

##### <a id='tostring'></a>public final function __toString__()

_{@inheritDoc}_

Returns | 
--- | 
`String` |


---

### Public Fields for [`LightningStrikeEvent`](LightningStrikeEvent.md)

##### <a id='lightbolt'></a>public  var __lightbolt__

_lightbolt field_

>Returns
>  [`LightningBolt`](../../api/entity/effect/LightningBolt.md)

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
	

