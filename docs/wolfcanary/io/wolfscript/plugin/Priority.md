## Priority __enum__

>io.wolfscript.plugin.Priority

---

### Enum Overview

The Plugin Priority or "Execution order"

Item | Type   
--- | :--- 
PASSIVE: 100<br> _For Plugins that monitor actions but do not interfere_ | Priority
LOW: 300<br> _Low level stuff like process player walking etc._ | Priority
NORMAL: 500<br> _Preferred Priority. This is the usual thing for blocking/altering actions_ | Priority
HIGH: 700<br> _Executed after critical._ | Priority
CRITICAL: 900<br> _Extremely critical. Will be executed as the very first Plugin._ | Priority
 readonly property __PriorityValue__ <br> _PriorityValue property_ | `int`



---


### Public Properties for [`Priority`](Priority.md)

##### <a id='priorityvalue'></a>public  readonly property __PriorityValue__

_PriorityValue property_

Get | 
--- | 
`int` |



---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

