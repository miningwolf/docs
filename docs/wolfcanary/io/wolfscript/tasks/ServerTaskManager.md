## ServerTaskManager __class__

>io.wolfscript.tasks.ServerTaskManager

---

### Class Overview

Server Task Manager <p/> The Manager for [`ServerTask`](ServerTask.md)<br> If an exception occurs while running a task, it gets removed from the queue, regardless of continuous status

Method | Type   
--- | :--- 
static function __runTasks__() <br> _Adds a [`ServerTask`](ServerTask.md) to the queue_ | `void`



---


### Public Methods for [`ServerTaskManager`](ServerTaskManager.md)

##### <a id='runtasks'></a>public static function __runTasks__()

_Adds a [`ServerTask`](ServerTask.md) to the queue_

Returns | Description
--- | --- 
`void` | `true` if successfully added; `false` if not /
    public static boolean addTask(ServerTask task) {
        synchronized ($.tasks) {
            $.tasks.put(task, task.getOwner());
            return true;
        }
    }

    /** Removes a [`ServerTask`](ServerTask.md) from the queue<br> When a `Plugin` is disabled, it should remove it's tasks from the queue


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

