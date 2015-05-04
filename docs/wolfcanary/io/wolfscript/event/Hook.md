## Hook __class__

>io.wolfscript.event.Hook
``` javascript
this.on('event.Hook', function (e) { });
```


---

### Class Overview

A basic hook you can implement to create custom hooks. System Hooks also extend this

Method | Type   
--- | :--- 
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`



---


### Public Properties for [`Hook`](Hook.md)

##### <a id='hookname'></a>public final readonly property __HookName__

_Get: Get the name of this hook._

Get | Description
--- | --- 
`String` | simple class name



---

### Public Methods for [`Hook`](Hook.md)

##### <a id='call'></a>public  function __call__()

_Calls a Hook if not already executed_

Returns | Description
--- | --- 
[`Hook`](Hook.md) | this


##### <a id='hashcode'></a>public  function __hashCode__()

_hashCode method_

Returns | 
--- | 
`int` |


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

