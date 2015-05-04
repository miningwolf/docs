## EventException __class__

>io.wolfscript.event.EventException
>Extends `Exception`

---

### Class Overview

class EventException

Method | Type   
--- | :--- 
new __EventException__(throwable) <br> _Constructs a new EventException based on the given Exception_ | _constructor_
new __EventException__() <br> _Constructs a new EventException_ | _constructor_
new __EventException__(cause, message) <br> _Constructs a new EventException with the given message_ | _constructor_
new __EventException__(message) <br> _Constructs a new EventException with the given message_ | _constructor_
 readonly property __Cause__ <br> _Get: If applicable, returns the Exception that triggered this Exception_ | `Throwable`



---

### Public Constructors for [`EventException`](EventException.md)

##### <a id='eventexception'></a>new __EventException__(throwable) 

_Constructs a new EventException based on the given Exception_

Argument | Type | Description  
--- | --- | --- 
throwable | `Throwable` | Exception that triggered this Exception

##### <a id='eventexception'></a>new __EventException__() 

_Constructs a new EventException_


##### <a id='eventexception'></a>new __EventException__(cause, message) 

_Constructs a new EventException with the given message_

Argument | Type | Description  
--- | --- | --- 
cause | `Throwable` | The exception that caused this
message | `String` | The message

##### <a id='eventexception'></a>new __EventException__(message) 

_Constructs a new EventException with the given message_

Argument | Type | Description  
--- | --- | --- 
message | `String` | The message

---

### Public Properties for [`EventException`](EventException.md)

##### <a id='cause'></a>public  readonly property __Cause__

_Get: If applicable, returns the Exception that triggered this Exception_

Get | Description
--- | --- 
`Throwable` | Inner exception, or null if one does not exist



---
---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

