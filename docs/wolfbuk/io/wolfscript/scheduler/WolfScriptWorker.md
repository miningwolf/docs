## WolfScriptWorker __interface__

>io.wolfscript.scheduler.WolfScriptWorker

---

### Interface Overview

Represents a worker thread for the scheduler. This gives information about the Thread object for the task, owner of the task and the taskId. <p> Workers are used to execute async tasks.

Method | Type   
--- | :--- 
 readonly property __Owner__ <br> _Get: Returns the Plugin that owns this task._ | [`Plugin`](../plugin/Plugin.md)
 readonly property __TaskId__ <br> _Get: Returns the taskId for the task being executed by this worker._ | `int`
 readonly property __Thread__ <br> _Get: Returns the thread for the worker._ | `Thread`



---


### Public Properties for [`WolfScriptWorker`](WolfScriptWorker.md)

##### <a id='owner'></a>public  readonly property __Owner__

_Get: Returns the Plugin that owns this task._

Get | Description
--- | --- 
[`Plugin`](../plugin/Plugin.md) | The Plugin that owns the task



##### <a id='taskid'></a>public  readonly property __TaskId__

_Get: Returns the taskId for the task being executed by this worker._

Get | Description
--- | --- 
`int` | Task id number



##### <a id='thread'></a>public  readonly property __Thread__

_Get: Returns the thread for the worker._

Get | Description
--- | --- 
`Thread` | The Thread object for the worker



---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

