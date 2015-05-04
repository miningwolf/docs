## ServerTask __class__

>io.wolfscript.tasks.ServerTask

---

### Class Overview

class ServerTask

Method | Type   
--- | :--- 
new __ServerTask__(owner, delay) <br> _Constructs a one-time use ServerTask_ | _constructor_
new __ServerTask__(owner, delay, continuous) <br> _Constructs either a one-time use or continuous ServerTask_ | _constructor_
final readonly property __Owner__ <br> _Get: Gets the [`TaskOwner`](TaskOwner.md) that owns this task_ | [`TaskOwner`](TaskOwner.md)
final function __isContinuous__() <br> _Gets whether the ServerTask should continuously run_ | `boolean`
 function __onReset__() <br> _Called when a Continuous Task is reset._ | `void`
abstract function __run__() <br> _Execution method. Override and insert your logic here._ | `void`



---

### Public Constructors for [`ServerTask`](ServerTask.md)

##### <a id='servertask'></a>new __ServerTask__(owner, delay) 

_Constructs a one-time use ServerTask_

Argument | Type | Description  
--- | --- | --- 
owner | [`TaskOwner`](TaskOwner.md) | the [`TaskOwner`](TaskOwner.md) of the task, typically a `Plugin`
delay | `long` | the delay before executing. Set to 0 or less to run within the next Server tick (Roughly once every 50 milliseconds)

##### <a id='servertask'></a>new __ServerTask__(owner, delay, continuous) 

_Constructs either a one-time use or continuous ServerTask_

Argument | Type | Description  
--- | --- | --- 
owner | [`TaskOwner`](TaskOwner.md) | the [`TaskOwner`](TaskOwner.md) of the task, typically a `Plugin`
delay | `long` | the delay before executing. Set to 0 or less to run within the next Server tick<br> If delay is 0 or less, the task will run with each server tick
continuous | `boolean` | `true` for continuous; `false` for one-time use

---

### Public Properties for [`ServerTask`](ServerTask.md)

##### <a id='owner'></a>public final readonly property __Owner__

_Get: Gets the [`TaskOwner`](TaskOwner.md) that owns this task_

Get | Description
--- | --- 
[`TaskOwner`](TaskOwner.md) | the [`TaskOwner`](TaskOwner.md) owner



---

### Public Methods for [`ServerTask`](ServerTask.md)

##### <a id='iscontinuous'></a>public final function __isContinuous__()

_Gets whether the ServerTask should continuously run_

Returns | Description
--- | --- 
`boolean` | `true` if continuous; `false` if not


##### <a id='onreset'></a>public  function __onReset__()

_Called when a Continuous Task is reset.<br> Override and set any logic you may need to also have reset with each run._

Returns | 
--- | 
`void` |


##### <a id='run'></a>public abstract function __run__()

_Execution method. Override and insert your logic here._

Returns | 
--- | 
`void` |


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

