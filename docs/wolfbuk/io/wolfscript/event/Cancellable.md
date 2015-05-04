## Cancellable __interface__

>io.wolfscript.event.Cancellable

---

### Interface Overview

interface Cancellable

Method | Type   
--- | :--- 
 writeonly property __Cancelled__ <br> _Set: Sets the cancellation state of this event. A cancelled event will not_ | `void`
 function __isCancelled__() <br> _Gets the cancellation state of this event. A cancelled event will not_ | `boolean`



---


### Public Properties for [`Cancellable`](Cancellable.md)

##### <a id='cancelled'></a>public  writeonly property __Cancelled__

_Set: Sets the cancellation state of this event. A cancelled event will not be executed in the server, but will still pass to other plugins._

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
cancel | `boolean` | true if you wish to cancel this event


---

### Public Methods for [`Cancellable`](Cancellable.md)

##### <a id='iscancelled'></a>public  function __isCancelled__()

_Gets the cancellation state of this event. A cancelled event will not be executed in the server, but will still pass to other plugins_

Returns | Description
--- | --- 
`boolean` | true if this event is cancelled


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

