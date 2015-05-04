## Conversable __interface__

>io.wolfscript.conversations.Conversable

---

### Interface Overview

The Conversable interface is used to indicate objects that can have conversations.

Method | Type   
--- | :--- 
 function __abandonConversation__(conversation) <br> _Abandons an active conversation._ | `void`
 function __abandonConversation__(conversation, details) <br> _Abandons an active conversation._ | `void`
 function __acceptConversationInput__(input) <br> _Accepts input into the active conversation. If no conversation is in_ | `void`
 function __beginConversation__(conversation) <br> _Enters into a dialog with a Conversation object._ | `boolean`
 function __isConversing__() <br> _Tests to see of a Conversable object is actively engaged in a_ | `boolean`
 function __sendRawMessage__(message) <br> _Sends this sender a message raw_ | `void`



---


### Public Methods for [`Conversable`](Conversable.md)

##### <a id='abandonconversation'></a>public  function __abandonConversation__(conversation)

_Abandons an active conversation._

Argument | Type | Description  
--- | --- | --- 
conversation | [`Conversation`](Conversation.md) | The conversation to abandon

Returns | 
--- | 
`void` |


##### <a id='abandonconversation'></a>public  function __abandonConversation__(conversation, details)

_Abandons an active conversation._

Argument | Type | Description  
--- | --- | --- 
conversation | [`Conversation`](Conversation.md) | The conversation to abandon
details | [`ConversationAbandonedEvent`](ConversationAbandonedEvent.md) | Details about why the conversation was abandoned

Returns | 
--- | 
`void` |


##### <a id='acceptconversationinput'></a>public  function __acceptConversationInput__(input)

_Accepts input into the active conversation. If no conversation is in progress, this method does nothing._

Argument | Type | Description  
--- | --- | --- 
input | `String` | The input message into the conversation

Returns | 
--- | 
`void` |


##### <a id='beginconversation'></a>public  function __beginConversation__(conversation)

_Enters into a dialog with a Conversation object._

Argument | Type | Description  
--- | --- | --- 
conversation | [`Conversation`](Conversation.md) | The conversation to begin

Returns | Description
--- | --- 
`boolean` | True if the conversation should proceed, false if it has been enqueued


##### <a id='isconversing'></a>public  function __isConversing__()

_Tests to see of a Conversable object is actively engaged in a conversation._

Returns | Description
--- | --- 
`boolean` | True if a conversation is in progress


##### <a id='sendrawmessage'></a>public  function __sendRawMessage__(message)

_Sends this sender a message raw_

Argument | Type | Description  
--- | --- | --- 
message | `String` | Message to be displayed

Returns | 
--- | 
`void` |


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

