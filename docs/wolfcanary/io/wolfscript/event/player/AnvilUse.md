## AnvilUse __class__

>io.wolfscript.event.player.AnvilUse
>Extends [`Hook`](../../hook/Hook.md)

this.on('player.AnvilUse', function (e) { });

---

### Class Overview

class AnvilUse

Method | Type   
--- | :--- 
new __AnvilUse__(player, anvil) <br> _Constructs a new AnvilUse_ | _constructor_
 readonly property __Anvil__ <br> _Get: Gets the `Anvil` in use_ | `Anvil`
 readonly property __Player__ <br> _Get: Gets the `Player` using the `Anvil`_ | `Player`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](../../hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](../../hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





---

### Public Constructors for [`AnvilUse`](AnvilUse.md)

##### <a id='anviluse'></a>new __AnvilUse__(player, anvil) 

_Constructs a new AnvilUse_

Argument | Type | Description  
--- | --- | --- 
player | `Player` | the `Player` using the `Anvil`
anvil | `Anvil` | the `Anvil` being used

---

### Public Properties for [`AnvilUse`](AnvilUse.md)

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

### Public Methods for [`AnvilUse`](AnvilUse.md)

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
	

