## ServerShutdown __class__

>io.wolfscript.event.system.ServerShutdown
>Extends [`Hook`](../../hook/Hook.md)

this.on('system.ServerShutdown', function (e) { });

---

### Class Overview

Server shutdown hook. Contains information about the reason the server is shutting down

Method | Type   
--- | :--- 
new __ServerShutdown__(reason) <br> _ServerShutdown constructor_ | _constructor_
  property __Reason__ <br> _Get: Get the reason for disconnect (if applicable)<br>Set: Set the reason for disconnection that will be displayed_ | `String`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](../../hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](../../hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





---

### Public Constructors for [`ServerShutdown`](ServerShutdown.md)

##### <a id='servershutdown'></a>new __ServerShutdown__(reason) 

_ServerShutdown constructor_

Argument | Type | Description  
--- | --- | --- 
reason | `String` | reason argument

---

### Public Properties for [`ServerShutdown`](ServerShutdown.md)

##### <a id='reason'></a>public   property __Reason__

_Get: Get the reason for disconnect (if applicable)<br>Set: Set the reason for disconnection that will be displayed_

Get | Description
--- | --- 
`String` | reason if disconnecting, null otherwise

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
	

