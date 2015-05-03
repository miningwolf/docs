## Conversable __interface__

>io.wolfscript.conversations.Conversable

---

### Interface Overview

The Conversable interface is used to indicate objects that can have conversations.

Method | Type   
--- | :--- 
 function __sendRawMessage__(message) <br> _Tests to see of a Conversable object is actively engaged in a_ | `void`



---


### Public Methods for [`Conversable`](Conversable.md)

##### <a id='sendrawmessage'></a>public  function __sendRawMessage__(message)

_Tests to see of a Conversable object is actively engaged in a conversation._

Argument | Type | Description  
--- | --- | --- 
message | `String` | Message to be displayed

Returns | Description
--- | --- 
`void` | True if a conversation is in progress /
    public boolean isConversing();

    /** Accepts input into the active conversation. If no conversation is in progress, this method does nothing.


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

