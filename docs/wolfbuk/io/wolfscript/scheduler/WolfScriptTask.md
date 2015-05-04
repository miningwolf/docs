## WolfScriptTask __interface__

>io.wolfscript.scheduler.WolfScriptTask

---

### Interface Overview

Represents a task being executed by the scheduler

Method | Type   
--- | :--- 
 readonly property __Owner__ <br> _Get: Returns the Plugin that owns this task._ | [`Plugin`](../plugin/Plugin.md)
 readonly property __TaskId__ <br> _Get: Returns the taskId for the task._ | `int`
 function __cancel__() <br> _Will attempt to cancel this task._ | `void`
 function __isSync__() <br> _Returns true if the Task is a sync task._ | `boolean`



---


### Public Properties for [`WolfScriptTask`](WolfScriptTask.md)

##### <a id='owner'></a>public  readonly property __Owner__

_Get: Returns the Plugin that owns this task._

Get | Description
--- | --- 
[`Plugin`](../plugin/Plugin.md) | The Plugin that owns the task



##### <a id='taskid'></a>public  readonly property __TaskId__

_Get: Returns the taskId for the task._

Get | Description
--- | --- 
`int` | Task id number



---

### Public Methods for [`WolfScriptTask`](WolfScriptTask.md)

##### <a id='cancel'></a>public  function __cancel__()

_Will attempt to cancel this task._

Returns | 
--- | 
`void` |


##### <a id='issync'></a>public  function __isSync__()

_Returns true if the Task is a sync task._

Returns | Description
--- | --- 
`boolean` | true if the task is run by main thread


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

