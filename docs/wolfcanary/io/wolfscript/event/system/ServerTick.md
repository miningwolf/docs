## ServerTick __class__

>io.wolfscript.event.system.ServerTick
>Extends [`Hook`](..\..\hook\Hook.md)

---

### Class Overview

Called in the servers tick loop, before world processing. For informational use

Method | Type   
--- | :--- 
new __ServerTick__(deltaTime) <br> _ServerTick constructor_ | _constructor_
 writeonly property __DeltaTime__ <br> _DeltaTime property_ | `void`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](..\..\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](..\..\hook\Hook.md)





---

### Public Constructors for [`ServerTick`](ServerTick.md)

##### <a id='servertick'></a>new __ServerTick__(deltaTime) 

_ServerTick constructor_

Argument | Type | Description  
--- | --- | --- 
deltaTime | `long` | deltaTime argument

---

### Public Properties for [`ServerTick`](ServerTick.md)

##### <a id='deltatime'></a>public  writeonly property __DeltaTime__

_DeltaTime property_

Get | Description
--- | --- 
`void` | the deltaTime /
    public long getDeltaTime() {
        return deltaTime;
    }

    /**

Set | Type | Description  
--- | --- | --- 
deltaTime | `long` | the deltaTime to set


---

### Public Methods for [`ServerTick`](ServerTick.md)

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
	

