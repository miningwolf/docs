## HeldItemChangeEvent __class__

>io.wolfscript.event.player.HeldItemChangeEvent
>Extends [`Hook`](../Hook.md)
``` javascript
this.on('player.HeldItemChangeEvent', function (e) { });
```


---

### Class Overview

Held item change event. Contains information about a player's held slot changes

Method | Type   
--- | :--- 
  property __NewValue__ <br> _Get: Gets the new held slot<br>Set: Sets the new value to actually be set_ | `int`
 readonly property __OldValue__ <br> _Get: Gets the old (current) held slot_ | `int`
 readonly property __Player__ <br> _Get: Gets the `Player` whose held slot is changing_ | `Player`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](../Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](../Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





---


### Public Properties for [`HeldItemChangeEvent`](HeldItemChangeEvent.md)

##### <a id='newvalue'></a>public   property __NewValue__

_Get: Gets the new held slot<br>Set: Sets the new value to actually be set_

Get | Description
--- | --- 
`int` | the new held slot

Set | Type | Description  
--- | --- | --- 
value | `int` | the held slot to set


##### <a id='oldvalue'></a>public  readonly property __OldValue__

_Get: Gets the old (current) held slot_

Get | Description
--- | --- 
`int` | the old held slot



##### <a id='player'></a>public  readonly property __Player__

_Get: Gets the `Player` whose held slot is changing_

Get | Description
--- | --- 
`Player` | the `Player`



---

### Public Methods for [`HeldItemChangeEvent`](HeldItemChangeEvent.md)

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
	

