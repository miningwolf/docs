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
 function __gracefulExit__() <br> _Gets the object that caused the conversation to be abandoned._ | `boolean`



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

### Public Methods for [`ConversationAbandonedEvent`](ConversationAbandonedEvent.md)

##### <a id='gracefulexit'></a>public  function __gracefulExit__()

_Gets the object that caused the conversation to be abandoned._

Returns | Description
--- | --- 
`boolean` | The object that abandoned the conversation. /
    public ConversationCanceller getCanceller() {
        return canceller;
    }

    /** Gets the abandoned conversation's conversation context.


---
---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

