## ServerTaskManager __class__

>io.wolfscript.tasks.ServerTaskManager

---

### Class Overview

class ServerTaskManager

Method | Type   
--- | :--- 
static function __addTask__(task) <br> _Adds a [`ServerTask`](ServerTask.md) to the queue_ | `boolean`
static function __getServerTasksForTaskOwner__(owner) <br> _Gets a `List` of [`ServerTask`](ServerTask.md)s that are in queue with the given `owner`_ | `List<ServerTask>`
static function __isQueued__(task) <br> _Finds out if the given `task` is queued._ | `boolean`
static function __removeTask__(task) <br> _Removes a [`ServerTask`](ServerTask.md) from the queue_ | `boolean`
static function __removeTasks__(owner) <br> _Removes all the tasks for a specified [`TaskOwner`](TaskOwner.md)_ | `void`
static function __runTasks__() <br> _Internal method called to run the tasks or decrease timers._ | `void`



---


### Public Methods for [`ServerTaskManager`](ServerTaskManager.md)

##### <a id='addtask'></a>public static function __addTask__(task)

_Adds a [`ServerTask`](ServerTask.md) to the queue_

Argument | Type | Description  
--- | --- | --- 
task | [`ServerTask`](ServerTask.md) | the [`ServerTask`](ServerTask.md) to be added

Returns | Description
--- | --- 
`boolean` | `true` if successfully added; `false` if not


##### <a id='getservertasksfortaskowner'></a>public static function __getServerTasksForTaskOwner__(owner)

_Gets a `List` of [`ServerTask`](ServerTask.md)s that are in queue with the given `owner`_

Argument | Type | Description  
--- | --- | --- 
owner | [`TaskOwner`](TaskOwner.md) | The [`TaskOwner`](TaskOwner.md) to look for [`ServerTask`](ServerTask.md)s with

Returns | 
--- | 
`List<ServerTask>` |


##### <a id='isqueued'></a>public static function __isQueued__(task)

_Finds out if the given `task` is queued._

Argument | Type | Description  
--- | --- | --- 
task | [`ServerTask`](ServerTask.md) | what [`ServerTask`](ServerTask.md) to check

Returns | 
--- | 
`boolean` |


##### <a id='removetask'></a>public static function __removeTask__(task)

_Removes a [`ServerTask`](ServerTask.md) from the queue<br> When a `Plugin` is disabled, it should remove it's tasks from the queue_

Argument | Type | Description  
--- | --- | --- 
task | [`ServerTask`](ServerTask.md) | the [`ServerTask`](ServerTask.md) to be removed

Returns | Description
--- | --- 
`boolean` | `true` if removed; `false` if not found or unable to be removed


##### <a id='removetasks'></a>public static function __removeTasks__(owner)

_Removes all the tasks for a specified [`TaskOwner`](TaskOwner.md)_

Argument | Type | Description  
--- | --- | --- 
owner | [`TaskOwner`](TaskOwner.md) | the [`TaskOwner`](TaskOwner.md) to remove tasks for

Returns | 
--- | 
`void` |


##### <a id='runtasks'></a>public static function __runTasks__()

_Internal method called to run the tasks or decrease timers._

Returns | 
--- | 
`void` |


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

