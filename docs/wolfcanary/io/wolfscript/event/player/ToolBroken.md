## ToolBroken __class__

>io.wolfscript.event.player.ToolBroken
>Extends [`Hook`](../../hook/Hook.md)

---

### Class Overview

class ToolBroken

Method | Type   
--- | :--- 
new __ToolBroken__(player, tool) <br> _ToolBroken constructor_ | _constructor_
 readonly property __Player__ <br> _Get: Gets the `Player` who's tool has broken_ | `Player`
 readonly property __Tool__ <br> _Tool property_ | [`Item`](../../api/inventory/Item.md)
 function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](../../hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](../../hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





---

### Public Constructors for [`ToolBroken`](ToolBroken.md)

##### <a id='toolbroken'></a>new __ToolBroken__(player, tool) 

_ToolBroken constructor_

Argument | Type | Description  
--- | --- | --- 
player | `Player` | player argument
tool | [`Item`](../../api/inventory/Item.md) | tool argument

---

### Public Properties for [`ToolBroken`](ToolBroken.md)

##### <a id='player'></a>public  readonly property __Player__

_Get: Gets the `Player` who's tool has broken_

Get | Description
--- | --- 
`Player` | player who's tool has broken



##### <a id='tool'></a>public  readonly property __Tool__

_Tool property_

Get | 
--- | 
[`Item`](../../api/inventory/Item.md) |



---

### Public Methods for [`ToolBroken`](ToolBroken.md)

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


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

