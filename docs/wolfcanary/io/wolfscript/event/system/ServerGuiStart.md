## ServerGuiStart __class__

>io.wolfscript.event.system.ServerGuiStart
>Extends [`Hook`](..\..\hook\Hook.md)

---

### Class Overview

Called when a GUI is started

Method | Type   
--- | :--- 
new __ServerGuiStart__(gui) <br> _ServerGuiStart constructor_ | _constructor_
  property __Gui__ <br> _Gui property_ | [`GUIControl`](..\..\api\gui\GUIControl.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](..\..\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](..\..\hook\Hook.md)





---

### Public Constructors for [`ServerGuiStart`](ServerGuiStart.md)

##### <a id='serverguistart'></a>new __ServerGuiStart__(gui) 

_ServerGuiStart constructor_

Argument | Type | Description  
--- | --- | --- 
gui | [`GUIControl`](..\..\api\gui\GUIControl.md) | gui argument

---

### Public Properties for [`ServerGuiStart`](ServerGuiStart.md)

##### <a id='gui'></a>public   property __Gui__

_Gui property_

Get | 
--- | 
[`GUIControl`](..\..\api\gui\GUIControl.md) |

Set | Type | Description  
--- | --- | --- 
gui | [`GUIControl`](..\..\api\gui\GUIControl.md) | gui argument


---

### Public Methods for [`ServerGuiStart`](ServerGuiStart.md)

##### <a id='tostring'></a>public final function __toString__()

_toString method_

Returns | 
--- | 
`String` |


---

### Public Methods for [`Hook`](..\..\hook\Hook.md)

##### <a id='call'></a>public  function __call__()

_Get the name of this hook._

Returns | Description
--- | --- 
[`Hook`](..\..\hook\Hook.md) | simple class name /
    public final String getHookName() {
        return getClass().getSimpleName();
    }

    @Override
    public int hashCode() {
        int hash = getClass().getSimpleName().length();

        return hash getClass().getSimpleName().hashCode() + 2;
    }

    /** Calls a Hook if not already executed


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

