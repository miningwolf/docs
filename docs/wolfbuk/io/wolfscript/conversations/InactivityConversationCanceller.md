## InactivityConversationCanceller __class__

>io.wolfscript.conversations.InactivityConversationCanceller
>Implements [`ConversationCanceller`](ConversationCanceller.md)

---

### Class Overview

An InactivityConversationCanceller will cancel a [`Conversation`](Conversation.md) after a period of inactivity by the user.

Method | Type   
--- | :--- 
new __InactivityConversationCanceller__(plugin, timeoutSeconds) <br> _Creates an InactivityConversationCanceller._ | _constructor_
 writeonly property __Conversation__ <br> _Conversation property_ | `void`
 function __cancelBasedOnInput__(context, input) <br> _cancelBasedOnInput method_ | `boolean`
 function __clone__() <br> _clone method_ | [`ConversationCanceller`](ConversationCanceller.md)



---

### Public Constructors for [`InactivityConversationCanceller`](InactivityConversationCanceller.md)

##### <a id='inactivityconversationcanceller'></a>new __InactivityConversationCanceller__(plugin, timeoutSeconds) 

_Creates an InactivityConversationCanceller._

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](../plugin/Plugin.md) | The owning plugin.
timeoutSeconds | `int` | The number of seconds of inactivity to wait.

---

### Public Properties for [`InactivityConversationCanceller`](InactivityConversationCanceller.md)

##### <a id='conversation'></a>public  writeonly property __Conversation__

_Conversation property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
conversation | [`Conversation`](Conversation.md) | conversation argument


---

### Public Methods for [`InactivityConversationCanceller`](InactivityConversationCanceller.md)

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
	

