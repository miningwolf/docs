## ConversationCanceller __interface__

>io.wolfscript.conversations.ConversationCanceller
>Extends `Cloneable`

---

### Interface Overview

A ConversationCanceller is a class that cancels an active [`Conversation`](Conversation.md). A Conversation can have more than one ConversationCanceller.

Method | Type   
--- | :--- 
 writeonly property __Conversation__ <br> _Set: Sets the conversation this ConversationCanceller can optionally cancel._ | `void`
 function __cancelBasedOnInput__(context, input) <br> _Cancels a conversation based on user input._ | `boolean`
 function __clone__() <br> _Allows the [`ConversationFactory`](ConversationFactory.md) to duplicate this_ | [`ConversationCanceller`](ConversationCanceller.md)



---


### Public Properties for [`ConversationCanceller`](ConversationCanceller.md)

##### <a id='conversation'></a>public  writeonly property __Conversation__

_Set: Sets the conversation this ConversationCanceller can optionally cancel._

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
conversation | [`Conversation`](Conversation.md) | A conversation.


---

### Public Methods for [`ConversationCanceller`](ConversationCanceller.md)

##### <a id='cancelbasedoninput'></a>public  function __cancelBasedOnInput__(context, input)

_Cancels a conversation based on user input._

Argument | Type | Description  
--- | --- | --- 
context | [`ConversationContext`](ConversationContext.md) | Context information about the conversation.
input | `String` | The input text from the user.

Returns | Description
--- | --- 
`boolean` | True to cancel the conversation, False otherwise.


##### <a id='clone'></a>public  function __clone__()

_Allows the [`ConversationFactory`](ConversationFactory.md) to duplicate this ConversationCanceller when creating a new [`Conversation`](Conversation.md). <p> Implementing this method should reset any internal object state._

Returns | Description
--- | --- 
[`ConversationCanceller`](ConversationCanceller.md) | A clone.


---
---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

