## SignShow __class__

>io.wolfscript.event.player.SignShow
>Extends [`Hook`](../../hook/Hook.md)

this.on('player.SignShow', function (e) { });

---

### Class Overview

Sign Change hook. Contains information about a sign shown to a player

Method | Type   
--- | :--- 
new __SignShow__(player, sign) <br> _Constructs a new SignShow_ | _constructor_
 readonly property __Player__ <br> _Get: Gets the `Player` being shown a [`Sign`](../../api/world/blocks/Sign.md)_ | `Player`
 readonly property __Sign__ <br> _Get: Gets the [`Sign`](../../api/world/blocks/Sign.md) being shown_ | [`Sign`](../../api/world/blocks/Sign.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](../../hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](../../hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





---

### Public Constructors for [`SignShow`](SignShow.md)

##### <a id='signshow'></a>new __SignShow__(player, sign) 

_Constructs a new SignShow_

Argument | Type | Description  
--- | --- | --- 
player | `Player` | the `Player` being shown a [`Sign`](../../api/world/blocks/Sign.md)
sign | [`Sign`](../../api/world/blocks/Sign.md) | the [`Sign`](../../api/world/blocks/Sign.md) being shown

---

### Public Properties for [`SignShow`](SignShow.md)

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

### Public Methods for [`SignShow`](SignShow.md)

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
	

