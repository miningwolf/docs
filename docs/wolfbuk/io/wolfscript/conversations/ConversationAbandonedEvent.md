## ConversationAbandonedEvent __class__

>io.wolfscript.conversations.ConversationAbandonedEvent
>Extends `EventObject`

---

### Class Overview

ConversationAbandonedEvent contains information about an abandoned conversation.

Method | Type   
--- | :--- 
new __ConversationAbandonedEvent__(conversation) <br> _ConversationAbandonedEvent constructor_ | _constructor_
new __ConversationAbandonedEvent__(conversation, canceller) <br> _ConversationAbandonedEvent constructor_ | _constructor_
 readonly property __Canceller__ <br> _Get: Gets the object that caused the conversation to be abandoned._ | [`ConversationCanceller`](ConversationCanceller.md)
 readonly property __Context__ <br> _Get: Gets the abandoned conversation's conversation context._ | [`ConversationContext`](ConversationContext.md)
 function __gracefulExit__() <br> _Indicates how the conversation was abandoned - naturally as part of the_ | `boolean`



---

### Public Constructors for [`ConversationAbandonedEvent`](ConversationAbandonedEvent.md)

##### <a id='conversationabandonedevent'></a>new __ConversationAbandonedEvent__(conversation) 

_ConversationAbandonedEvent constructor_

Argument | Type | Description  
--- | --- | --- 
conversation | [`Conversation`](Conversation.md) | conversation argument

##### <a id='conversationabandonedevent'></a>new __ConversationAbandonedEvent__(conversation, canceller) 

_ConversationAbandonedEvent constructor_

Argument | Type | Description  
--- | --- | --- 
conversation | [`Conversation`](Conversation.md) | conversation argument
canceller | [`ConversationCanceller`](ConversationCanceller.md) | canceller argument

---

### Public Properties for [`ConversationAbandonedEvent`](ConversationAbandonedEvent.md)

##### <a id='canceller'></a>public  readonly property __Canceller__

_Get: Gets the object that caused the conversation to be abandoned._

Get | Description
--- | --- 
[`ConversationCanceller`](ConversationCanceller.md) | The object that abandoned the conversation.



##### <a id='context'></a>public  readonly property __Context__

_Get: Gets the abandoned conversation's conversation context._

Get | Description
--- | --- 
[`ConversationContext`](ConversationContext.md) | The abandoned conversation's conversation context.



---

### Public Methods for [`ConversationAbandonedEvent`](ConversationAbandonedEvent.md)

##### <a id='gracefulexit'></a>public  function __gracefulExit__()

_Indicates how the conversation was abandoned - naturally as part of the prompt chain or prematurely via a [`ConversationCanceller`](ConversationCanceller.md)._

Returns | Description
--- | --- 
`boolean` | True if the conversation is abandoned gracefully by a [`Prompt`](Prompt.md) returning null or the next prompt. False of the conversations is abandoned prematurely by a ConversationCanceller.


---
---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

