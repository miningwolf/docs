## PlayerDeathEvent __class__

>io.wolfscript.event.player.PlayerDeathEvent
>Extends [`Hook`](../../hook/Hook.md)
``` javascript
this.on('player.PlayerDeathEvent', function (e) { });
```


---

### Class Overview

Player Death event

Method | Type   
--- | :--- 
 readonly property __DamageSource__ <br> _Get: Gets the [`DamageSource`](../../api/DamageSource.md) that killed the `Player`_ | [`DamageSource`](../../api/DamageSource.md)
 readonly property __Player__ <br> _Get: Gets the `Player` who died_ | `Player`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](../../hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](../../hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





---


### Public Properties for [`PlayerDeathEvent`](PlayerDeathEvent.md)

##### <a id='damagesource'></a>public  readonly property __DamageSource__

_Get: Gets the [`DamageSource`](../../api/DamageSource.md) that killed the `Player`_

Get | Description
--- | --- 
[`DamageSource`](../../api/DamageSource.md) | the death dealing [`DamageSource`](../../api/DamageSource.md)



##### <a id='deathmessage'></a>public   property __DeathMessage__
_Deprecated: Replaced by #setDeathMessage1_

_Get: Gets the message to send on Death<br>Set: Sets the message to send, if death message are enabled_

Get | 
--- | 
`String` |

Set | Type | Description  
--- | --- | --- 
msg | `String` | the death message


##### <a id='player'></a>public  readonly property __Player__

_Get: Gets the `Player` who died_

Get | Description
--- | --- 
`Player` | the dead `Player`



---

### Public Methods for [`PlayerDeathEvent`](PlayerDeathEvent.md)

##### <a id='tostring'></a>public final function __toString__()

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
	

