## Conversation __class__

>io.wolfscript.conversations.Conversation

---

### Class Overview

The Conversation class is responsible for tracking the current state of a conversation, displaying prompts to the user, and dispatching the user's response to the appropriate place. Conversation objects are not typically instantiated directly. Instead a [`ConversationFactory`](ConversationFactory.md) is used to construct identical conversations on demand. <p> Conversation flow consists of a directed graph of [`Prompt`](Prompt.md) objects. Each time a prompt gets input from the user, it must return the next prompt in the graph. Since each Prompt chooses the next Prompt, complex conversation trees can be implemented where the nature of the player's response directs the flow of the conversation. <p> Each conversation has a [`ConversationPrefix`](ConversationPrefix.md) that prepends all output from the conversation to the player. The ConversationPrefix can be used to display the plugin name or conversation status as the conversation evolves. <p> Each conversation has a timeout measured in the number of inactive seconds to wait before abandoning the conversation. If the inactivity timeout is reached, the conversation is abandoned and the user's incoming and outgoing chat is returned to normal. <p> You should not construct a conversation manually. Instead, use the [`ConversationFactory`](ConversationFactory.md) for access to all available options.

Method | Type   
--- | :--- 
 function __outputNextPrompt__() <br> _Initializes a new Conversation._ | `void`



---


### Public Methods for [`Conversation`](Conversation.md)

##### <a id='outputnextprompt'></a>public  function __outputNextPrompt__()

_Initializes a new Conversation._

Returns | Description
--- | --- 
`void` | The entity. /
    public Conversable getForWhom() {
        return context.getForWhom();
    }

    /** Gets the modality of this conversation. If a conversation is modal, all messages directed to the player are suppressed for the duration of the conversation.


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

