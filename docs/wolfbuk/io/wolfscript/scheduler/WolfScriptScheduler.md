## WolfScriptScheduler __interface__

>io.wolfscript.scheduler.WolfScriptScheduler

---

### Interface Overview

interface WolfScriptScheduler

Method | Type   
--- | :--- 
 readonly property __PendingTasks__ <br> _Get: Returns a list of all pending tasks. The ordering of the tasks is not_ | `List<WolfScriptTask>`
 readonly property __ActiveWorkers__ <br> _Get: Returns a list of all active workers._ | `List<WolfScriptWorker>`
 function __cancelAllTasks__() <br> _Removes all tasks from the scheduler._ | `void`
 function __cancelTasks__(plugin) <br> _Removes all tasks associated with a particular plugin from the_ | `void`
 function __cancelTask__(taskId) <br> _Calls a method on the main thread and returns a Future object. This_ | `void`
 function __isCurrentlyRunning__(taskId) <br> _Check if the task currently running._ | `boolean`
 function __isQueued__(taskId) <br> _Check if the task queued to be run later._ | `boolean`
 function __scheduleSyncDelayedTask__(plugin, task) <br> _Schedules a once off task to occur as soon as possible._ | `int`
 function __scheduleSyncDelayedTask__(plugin, task, delay) <br> _Schedules a once off task to occur after a delay._ | `int`
 function __scheduleSyncRepeatingTask__(plugin, task, delay, period) <br> _Schedules a repeating task._ | `int`



---


### Public Properties for [`WolfScriptScheduler`](WolfScriptScheduler.md)

##### <a id='pendingtasks'></a>public  readonly property __PendingTasks__

_Get: Returns a list of all pending tasks. The ordering of the tasks is not related to their order of execution._

Get | Description
--- | --- 
`List<WolfScriptTask>` | Active workers



##### <a id='activeworkers'></a>public  readonly property __ActiveWorkers__

_Get: Returns a list of all active workers. <p> This list contains asynch tasks that are being executed by separate threads._

Get | Description
--- | --- 
`List<WolfScriptWorker>` | Active workers



---

### Public Methods for [`WolfScriptScheduler`](WolfScriptScheduler.md)

##### <a id='scheduleasyncrepeatingtask'></a>public  function __scheduleAsyncRepeatingTask__(plugin, task, delay, period)
_Deprecated: This name is misleading, as it does not schedule "a sync" task, but rather, "an async" task_

_<b>Asynchronous tasks should never access any API in WolfScript. Great care should be taken to assure the thread-safety of asynchronous tasks.</b> <p> Schedules a repeating task. This task will be executed by a thread managed by the scheduler._

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](../plugin/Plugin.md) | Plugin that owns the task
task | `Runnable` | Task to be executed
delay | `long` | Delay in server ticks before executing first repeat
period | `long` | Period in server ticks of the task

Returns | Description
--- | --- 
`int` | Task id number (-1 if scheduling failed)


##### <a id='cancelalltasks'></a>public  function __cancelAllTasks__()

_Removes all tasks from the scheduler._

Returns | 
--- | 
`void` |


##### <a id='canceltasks'></a>public  function __cancelTasks__(plugin)

_Removes all tasks associated with a particular plugin from the scheduler._

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](../plugin/Plugin.md) | Owner of tasks to be removed

Returns | 
--- | 
`void` |


##### <a id='canceltask'></a>public  function __cancelTask__(taskId)

_Calls a method on the main thread and returns a Future object. This task will be executed by the main server thread. <ul> <li>Note: The Future.get() methods must NOT be called from the main thread. <li>Note2: There is at least an average of 10ms latency until the isDone() method returns true. </ul>_

Argument | Type | Description  
--- | --- | --- 
taskId | `int` | Id number of task to be removed

Returns | Description
--- | --- 
`void` | Future Future object related to the task /
    public <T> Future<T> callSyncMethod(Plugin plugin, Callable<T> task);

    /** Removes task from scheduler.


##### <a id='iscurrentlyrunning'></a>public  function __isCurrentlyRunning__(taskId)

_Check if the task currently running. <p> A repeating task might not be running currently, but will be running in the future. A task that has finished, and does not repeat, will not be running ever again. <p> Explicitly, a task is running if there exists a thread for it, and that thread is alive._

Argument | Type | Description  
--- | --- | --- 
taskId | `int` | The task to check. <p>

Returns | Description
--- | --- 
`boolean` | If the task is currently running.


##### <a id='isqueued'></a>public  function __isQueued__(taskId)

_Check if the task queued to be run later. <p> If a repeating task is currently running, it might not be queued now but could be in the future. A task that is not queued, and not running, will not be queued again._

Argument | Type | Description  
--- | --- | --- 
taskId | `int` | The task to check. <p>

Returns | Description
--- | --- 
`boolean` | If the task is queued to be run.


##### <a id='scheduleasyncdelayedtask'></a>public  function __scheduleAsyncDelayedTask__(plugin, task, delay)
_Deprecated: This name is misleading, as it does not schedule "a sync" task, but rather, "an async" task_

_<b>Asynchronous tasks should never access any API in WolfScript. Great care should be taken to assure the thread-safety of asynchronous tasks.</b> <p> Schedules a once off task to occur after a delay. This task will be executed by a thread managed by the scheduler._

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](../plugin/Plugin.md) | Plugin that owns the task
task | `Runnable` | Task to be executed
delay | `long` | Delay in server ticks before executing task

Returns | Description
--- | --- 
`int` | Task id number (-1 if scheduling failed)


##### <a id='scheduleasyncdelayedtask'></a>public  function __scheduleAsyncDelayedTask__(plugin, task)
_Deprecated: This name is misleading, as it does not schedule "a sync" task, but rather, "an async" task_

_<b>Asynchronous tasks should never access any API in WolfScript. Great care should be taken to assure the thread-safety of asynchronous tasks.</b> <p> Schedules a once off task to occur as soon as possible. This task will be executed by a thread managed by the scheduler._

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](../plugin/Plugin.md) | Plugin that owns the task
task | `Runnable` | Task to be executed

Returns | Description
--- | --- 
`int` | Task id number (-1 if scheduling failed)


##### <a id='schedulesyncdelayedtask'></a>public  function __scheduleSyncDelayedTask__(plugin, task, delay)
_Deprecated: Use {@link WolfScriptRunnable#runTaskLater(Plugin, long)}_

_scheduleSyncDelayedTask method_

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](../plugin/Plugin.md) | Plugin that owns the task
task | [`WolfScriptRunnable`](WolfScriptRunnable.md) | Task to be executed
delay | `long` | Delay in server ticks before executing task

Returns | Description
--- | --- 
`int` | Task id number (-1 if scheduling failed)


##### <a id='schedulesyncdelayedtask'></a>public  function __scheduleSyncDelayedTask__(plugin, task)
_Deprecated: Use {@link WolfScriptRunnable#runTask(Plugin)}_

_scheduleSyncDelayedTask method_

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](../plugin/Plugin.md) | Plugin that owns the task
task | [`WolfScriptRunnable`](WolfScriptRunnable.md) | Task to be executed

Returns | Description
--- | --- 
`int` | Task id number (-1 if scheduling failed)


##### <a id='schedulesyncdelayedtask'></a>public  function __scheduleSyncDelayedTask__(plugin, task)

_Schedules a once off task to occur as soon as possible. <p> This task will be executed by the main server thread._

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](../plugin/Plugin.md) | Plugin that owns the task
task | `Runnable` | Task to be executed

Returns | Description
--- | --- 
`int` | Task id number (-1 if scheduling failed)


##### <a id='schedulesyncdelayedtask'></a>public  function __scheduleSyncDelayedTask__(plugin, task, delay)

_Schedules a once off task to occur after a delay. <p> This task will be executed by the main server thread._

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](../plugin/Plugin.md) | Plugin that owns the task
task | `Runnable` | Task to be executed
delay | `long` | Delay in server ticks before executing task

Returns | Description
--- | --- 
`int` | Task id number (-1 if scheduling failed)


##### <a id='schedulesyncrepeatingtask'></a>public  function __scheduleSyncRepeatingTask__(plugin, task, delay, period)
_Deprecated: Use {@link WolfScriptRunnable#runTaskTimer(Plugin, long, long)}_

_scheduleSyncRepeatingTask method_

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](../plugin/Plugin.md) | Plugin that owns the task
task | [`WolfScriptRunnable`](WolfScriptRunnable.md) | Task to be executed
delay | `long` | Delay in server ticks before executing first repeat
period | `long` | Period in server ticks of the task

Returns | Description
--- | --- 
`int` | Task id number (-1 if scheduling failed)


##### <a id='schedulesyncrepeatingtask'></a>public  function __scheduleSyncRepeatingTask__(plugin, task, delay, period)

_Schedules a repeating task. <p> This task will be executed by the main server thread._

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](../plugin/Plugin.md) | Plugin that owns the task
task | `Runnable` | Task to be executed
delay | `long` | Delay in server ticks before executing first repeat
period | `long` | Period in server ticks of the task

Returns | Description
--- | --- 
`int` | Task id number (-1 if scheduling failed)


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

