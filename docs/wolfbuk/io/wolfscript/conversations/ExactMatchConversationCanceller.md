## ExactMatchConversationCanceller __class__

>io.wolfscript.conversations.ExactMatchConversationCanceller
>Implements [`ConversationCanceller`](ConversationCanceller.md)

---

### Class Overview

An ExactMatchConversationCanceller cancels a conversation if the user enters an exact input string

Method | Type   
--- | :--- 
new __ExactMatchConversationCanceller__(escapeSequence) <br> _Builds an ExactMatchConversationCanceller._ | _constructor_
 writeonly property __Conversation__ <br> _Conversation property_ | `void`
 function __cancelBasedOnInput__(context, input) <br> _cancelBasedOnInput method_ | `boolean`
 function __clone__() <br> _clone method_ | [`ConversationCanceller`](ConversationCanceller.md)



---

### Public Constructors for [`ExactMatchConversationCanceller`](ExactMatchConversationCanceller.md)

##### <a id='exactmatchconversationcanceller'></a>new __ExactMatchConversationCanceller__(escapeSequence) 

_Builds an ExactMatchConversationCanceller._

Argument | Type | Description  
--- | --- | --- 
escapeSequence | `String` | The string that, if entered by the user, will cancel the conversation.

---

### Public Properties for [`ExactMatchConversationCanceller`](ExactMatchConversationCanceller.md)

##### <a id='conversation'></a>public  writeonly property __Conversation__

_Conversation property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
conversation | [`Conversation`](Conversation.md) | conversation argument


---

### Public Methods for [`ExactMatchConversationCanceller`](ExactMatchConversationCanceller.md)

##### <a id='cancelbasedoninput'></a>public  function __cancelBasedOnInput__(context, input)

_cancelBasedOnInput method_

Argument | Type | Description  
--- | --- | --- 
context | [`ConversationContext`](ConversationContext.md) | context argument
input | `String` | input argument

Returns | 
--- | 
`boolean` |


##### <a id='clone'></a>public  function __clone__()

_clone method_

Returns | 
--- | 
[`ConversationCanceller`](ConversationCanceller.md) |


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

