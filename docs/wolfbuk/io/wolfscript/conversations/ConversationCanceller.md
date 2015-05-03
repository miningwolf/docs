## ConversationCanceller __interface__

>io.wolfscript.conversations.ConversationCanceller
>Extends `Cloneable`

---

### Interface Overview

A ConversationCanceller is a class that cancels an active [`Conversation`](Conversation.md). A Conversation can have more than one ConversationCanceller.

Method | Type   
--- | :--- 
 function __clone__() <br> _Sets the conversation this ConversationCanceller can optionally cancel._ | [`ConversationCanceller`](ConversationCanceller.md)



---


### Public Methods for [`ConversationCanceller`](ConversationCanceller.md)

##### <a id='clone'></a>public  function __clone__()

_Sets the conversation this ConversationCanceller can optionally cancel._

Returns | Description
--- | --- 
[`ConversationCanceller`](ConversationCanceller.md) | True to cancel the conversation, False otherwise. /
    public boolean cancelBasedOnInput(ConversationContext context, String input);

    /** Allows the [`ConversationFactory`](ConversationFactory.md) to duplicate this ConversationCanceller when creating a new [`Conversation`](Conversation.md). <p> Implementing this method should reset any internal object state.


---
---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

