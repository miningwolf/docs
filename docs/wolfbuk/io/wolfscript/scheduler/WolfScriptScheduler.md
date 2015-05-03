## WolfScriptScheduler __interface__

>io.wolfscript.scheduler.WolfScriptScheduler

---

### Interface Overview

interface WolfScriptScheduler

Method | Type   
--- | :--- 
 readonly property __PendingTasks__ <br> _Get: Schedules a once off task to occur after a delay._ | `List<WolfScriptTask>`



---


### Public Properties for [`WolfScriptScheduler`](WolfScriptScheduler.md)

##### <a id='pendingtasks'></a>public  readonly property __PendingTasks__

_Get: Schedules a once off task to occur after a delay. <p> This task will be executed by the main server thread._

Get | Description
--- | --- 
`List<WolfScriptTask>` | Task id number (-1 if scheduling failed) /
    public int scheduleSyncDelayedTask(Plugin plugin, Runnable task, long delay);

    /**



---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

