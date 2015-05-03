## ServerShutdown __class__

>io.wolfscript.event.system.ServerShutdown
>Extends [`Hook`](..\..\hook\Hook.md)

---

### Class Overview

Server shutdown hook. Contains information about the reason the server is shutting down

Method | Type   
--- | :--- 
new __ServerShutdown__(reason) <br> _ServerShutdown constructor_ | _constructor_
 writeonly property __Reason__ <br> _Set: Get the reason for disconnect (if applicable)_ | `void`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](..\..\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](..\..\hook\Hook.md)





---

### Public Constructors for [`ServerShutdown`](ServerShutdown.md)

##### <a id='servershutdown'></a>new __ServerShutdown__(reason) 

_ServerShutdown constructor_

Argument | Type | Description  
--- | --- | --- 
reason | `String` | reason argument

---

### Public Properties for [`ServerShutdown`](ServerShutdown.md)

##### <a id='reason'></a>public  writeonly property __Reason__

_Set: Get the reason for disconnect (if applicable)_

Get | Description
--- | --- 
`void` | reason if disconnecting, null otherwise /
    public String getReason() {
        return reason;
    }

    /** Set the reason for disconnection that will be displayed

Set | Type | Description  
--- | --- | --- 
reason | `String` | reason argument


---

### Public Methods for [`ServerShutdown`](ServerShutdown.md)

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
	

