## FoodSaturationEvent __class__

>io.wolfscript.event.player.FoodSaturation
>Extends [`Hook`](../../hook/Hook.md)
``` javascript
this.on('player.FoodSaturation', function (e) { });
```


---

### Class Overview

Food saturation change event. Contains information about a player's food saturation changes

Method | Type   
--- | :--- 
  property __NewValue__ <br> _Get: Gets the new level<br>Set: Sets the new value to actually be set_ | `float`
 readonly property __OldValue__ <br> _Get: Gets the old (current) level_ | `float`
 readonly property __Player__ <br> _Get: Gets the `Player` who's food saturation is changing_ | `Player`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](../../hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](../../hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





---


### Public Properties for [`FoodSaturation`](FoodSaturation.md)

##### <a id='newvalue'></a>public   property __NewValue__

_Get: Gets the new level<br>Set: Sets the new value to actually be set_

Get | Description
--- | --- 
`float` | the new level

Set | Type | Description  
--- | --- | --- 
value | `float` | the level to set


##### <a id='oldvalue'></a>public  readonly property __OldValue__

_Get: Gets the old (current) level_

Get | Description
--- | --- 
`float` | the old level



##### <a id='player'></a>public  readonly property __Player__

_Get: Gets the `Player` who's food saturation is changing_

Get | Description
--- | --- 
`Player` | the `Player`



---

### Public Methods for [`FoodSaturation`](FoodSaturation.md)

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
	

