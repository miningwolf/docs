## PreConnectionEvent __class__

>io.wolfscript.event.player.PreConnectionEvent
>Extends [`Hook`](../../hook/Hook.md)
``` javascript
this.on('player.PreConnectionEvent', function (e) { });
```


---

### Class Overview

Login checks event. Comes with ip, name and a kickReason that is to be returned, and should be null if a player should not be kicked.

Method | Type   
--- | :--- 
 readonly property __Ip__ <br> _Get: Get the IP of the joining `Player`_ | `String`
  property __KickReason__ <br> _Get: Get the currently set kick reason<br>Set: Set the kick reason. Make it null to not kick the `Player`_ | `String`
 readonly property __Name__ <br> _Get: Get the name of the joining `Player`_ | `String`
 readonly property __UUID__ <br> _UUID property_ | `UUID`
  property __World__ <br> _World property_ | `String`
  property __WorldType__ <br> _WorldType property_ | [`DimensionType`](../../api/world/DimensionType.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](../../hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](../../hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





---


### Public Properties for [`PreConnectionEvent`](PreConnectionEvent.md)

##### <a id='ip'></a>public  readonly property __Ip__

_Get: Get the IP of the joining `Player`_

Get | 
--- | 
`String` |



##### <a id='kickreason'></a>public   property __KickReason__

_Get: Get the currently set kick reason<br>Set: Set the kick reason. Make it null to not kick the `Player`_

Get | 
--- | 
`String` |

Set | Type | Description  
--- | --- | --- 
reason | `String` | reason argument


##### <a id='name'></a>public  readonly property __Name__

_Get: Get the name of the joining `Player`_

Get | 
--- | 
`String` |



##### <a id='uuid'></a>public  readonly property __UUID__

_UUID property_

Get | 
--- | 
`UUID` |



##### <a id='world'></a>public   property __World__

_World property_

Get | 
--- | 
`String` |

Set | Type | Description  
--- | --- | --- 
world | `String` | world argument


##### <a id='worldtype'></a>public   property __WorldType__

_WorldType property_

Get | 
--- | 
[`DimensionType`](../../api/world/DimensionType.md) |

Set | Type | Description  
--- | --- | --- 
dimensionType | [`DimensionType`](../../api/world/DimensionType.md) | dimensionType argument


---

### Public Methods for [`PreConnectionEvent`](PreConnectionEvent.md)

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
	

