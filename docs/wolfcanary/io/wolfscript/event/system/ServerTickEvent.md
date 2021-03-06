## ServerTickEvent __class__

>io.wolfscript.event.system.ServerTickEvent
>Extends [`Hook`](../Hook.md)
``` javascript
this.on('system.ServerTickEvent', function (e) { });
```


---

### Class Overview

Called in the servers tick loop, before world processing. For informational use

Method | Type   
--- | :--- 
  property __DeltaTime__ <br> _DeltaTime property_ | `long`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](../Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](../Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





---


### Public Properties for [`ServerTickEvent`](ServerTickEvent.md)

##### <a id='deltatime'></a>public   property __DeltaTime__

_DeltaTime property_

Get | Description
--- | --- 
`long` | the deltaTime

Set | Type | Description  
--- | --- | --- 
deltaTime | `long` | the deltaTime to set


---

### Public Methods for [`ServerTickEvent`](ServerTickEvent.md)

##### <a id='tostring'></a>public final function __toString__()

_toString method_

Returns | 
--- | 
`String` |


---

### Public Properties for [`Hook`](../Hook.md)

##### <a id='hookname'></a>public final readonly property __HookName__

_Get: Get the name of this hook._

Get | Description
--- | --- 
`String` | simple class name



---

### Public Methods for [`Hook`](../Hook.md)

##### <a id='call'></a>public  function __call__()

_Calls a Hook if not already executed_

Returns | Description
--- | --- 
[`Hook`](../Hook.md) | this


##### <a id='hashcode'></a>public  function __hashCode__()

_hashCode method_

Returns | 
--- | 
`int` |


---


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

