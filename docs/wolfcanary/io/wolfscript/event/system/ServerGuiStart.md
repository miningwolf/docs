## ServerGuiStart __class__

>io.wolfscript.event.system.ServerGuiStart
>Extends [`Hook`](../../hook/Hook.md)

this.on('system.ServerGuiStart', function (e) { });

---

### Class Overview

Called when a GUI is started

Method | Type   
--- | :--- 
new __ServerGuiStart__(gui) <br> _ServerGuiStart constructor_ | _constructor_
  property __Gui__ <br> _Gui property_ | [`GUIControl`](../../api/gui/GUIControl.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](../../hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](../../hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





---

### Public Constructors for [`ServerGuiStart`](ServerGuiStart.md)

##### <a id='serverguistart'></a>new __ServerGuiStart__(gui) 

_ServerGuiStart constructor_

Argument | Type | Description  
--- | --- | --- 
gui | [`GUIControl`](../../api/gui/GUIControl.md) | gui argument

---

### Public Properties for [`ServerGuiStart`](ServerGuiStart.md)

##### <a id='gui'></a>public   property __Gui__

_Gui property_

Get | 
--- | 
[`GUIControl`](../../api/gui/GUIControl.md) |

Set | Type | Description  
--- | --- | --- 
gui | [`GUIControl`](../../api/gui/GUIControl.md) | gui argument


---

### Public Methods for [`ServerGuiStart`](ServerGuiStart.md)

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
	

