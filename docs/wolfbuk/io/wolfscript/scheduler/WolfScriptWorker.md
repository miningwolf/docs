## WolfScriptWorker __interface__

>io.wolfscript.scheduler.WolfScriptWorker

---

### Interface Overview

Represents a worker thread for the scheduler. This gives information about the Thread object for the task, owner of the task and the taskId. <p> Workers are used to execute async tasks.

Method | Type   
--- | :--- 
 readonly property __Thread__ <br> _Get: Returns the taskId for the task being executed by this worker._ | `Thread`



---


### Public Properties for [`WolfScriptWorker`](WolfScriptWorker.md)

##### <a id='thread'></a>public  readonly property __Thread__

_Get: Returns the taskId for the task being executed by this worker._

Get | Description
--- | --- 
`Thread` | Task id number /
    public int getTaskId();

    /** Returns the Plugin that owns this task.



---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

