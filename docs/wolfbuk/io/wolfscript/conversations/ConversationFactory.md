## ConversationFactory __class__

>io.wolfscript.conversations.ConversationFactory

---

### Class Overview

A ConversationFactory is responsible for creating a [`Conversation`](Conversation.md) from a predefined template. A ConversationFactory is typically created when a plugin is instantiated and builds a Conversation each time a user initiates a conversation with the plugin. Each Conversation maintains its own state and calls back as needed into the plugin. <p> The ConversationFactory implements a fluid API, allowing parameters to be set as an extension to the constructor.

Method | Type   
--- | :--- 
 function __buildConversation__(forWhom) <br> _Constructs a ConversationFactory._ | [`Conversation`](Conversation.md)
 function __getPromptText__(context) <br> _getPromptText method_ | `String`



---


### Public Methods for [`ConversationFactory`](ConversationFactory.md)

##### <a id='buildconversation'></a>public  function __buildConversation__(forWhom)

_Constructs a ConversationFactory._

Argument | Type | Description  
--- | --- | --- 
forWhom | [`Conversable`](Conversable.md) | The entity for whom the new conversation is mediating.

Returns | Description
--- | --- 
[`Conversation`](Conversation.md) | This object. /
    public ConversationFactory withModality(boolean modal)
    {
        isModal = modal;
        return this;
    }

    /** Sets the local echo status for all [`Conversation`](Conversation.md)s created by this factory. If local echo is enabled, any text submitted to a conversation gets echoed back into the submitter's chat window.


##### <a id='getprompttext'></a>public  function __getPromptText__(context)

_getPromptText method_

Argument | Type | Description  
--- | --- | --- 
context | [`ConversationContext`](ConversationContext.md) | context argument

Returns | 
--- | 
`String` |


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

