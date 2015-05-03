## Cancellable __interface__

>io.wolfscript.event.Cancellable

---

### Interface Overview

interface Cancellable

Method | Type   
--- | :--- 
 writeonly property __Cancelled__ <br> _Set: Gets the cancellation state of this event. A cancelled event will not_ | `void`



---


### Public Properties for [`Cancellable`](Cancellable.md)

##### <a id='cancelled'></a>public  writeonly property __Cancelled__

_Set: Gets the cancellation state of this event. A cancelled event will not be executed in the server, but will still pass to other plugins_

Get | Description
--- | --- 
`void` | true if this event is cancelled /
    public boolean isCancelled();

    /** Sets the cancellation state of this event. A cancelled event will not be executed in the server, but will still pass to other plugins.

Set | Type | Description  
--- | --- | --- 
cancel | `boolean` | true if you wish to cancel this event


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

