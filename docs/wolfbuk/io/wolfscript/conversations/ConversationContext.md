## ConversationContext __class__

>io.wolfscript.conversations.ConversationContext

---

### Class Overview

A ConversationContext provides continuity between nodes in the prompt graph by giving the developer access to the subject of the conversation and a generic map for storing values that are shared between all [`Prompt`](Prompt.md) invocations.

Method | Type   
--- | :--- 
new __ConversationContext__(plugin, forWhom) <br> _ConversationContext constructor_ | _constructor_
 readonly property __ForWhom__ <br> _Get: Gets the subject of the conversation._ | [`Conversable`](Conversable.md)
 readonly property __Plugin__ <br> _Get: Gets the plugin that owns this conversation._ | [`Plugin`](../plugin/Plugin.md)
 function __getSessionData__(key) <br> _Gets session data shared between all [`Prompt`](Prompt.md) invocations. Use_ | `Object`
 function __setSessionData__(key, value) <br> _Sets session data shared between all [`Prompt`](Prompt.md) invocations. Use_ | `void`



---

### Public Constructors for [`ConversationContext`](ConversationContext.md)

##### <a id='conversationcontext'></a>new __ConversationContext__(plugin, forWhom) 

_ConversationContext constructor_

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](../plugin/Plugin.md) | The owning plugin.
forWhom | [`Conversable`](Conversable.md) | The subject of the conversation.

---

### Public Properties for [`ConversationContext`](ConversationContext.md)

##### <a id='forwhom'></a>public  readonly property __ForWhom__

_Get: Gets the subject of the conversation._

Get | Description
--- | --- 
[`Conversable`](Conversable.md) | The subject of the conversation.



##### <a id='plugin'></a>public  readonly property __Plugin__

_Get: Gets the plugin that owns this conversation._

Get | Description
--- | --- 
[`Plugin`](../plugin/Plugin.md) | The owning plugin.



---

### Public Methods for [`ConversationContext`](ConversationContext.md)

##### <a id='getsessiondata'></a>public  function __getSessionData__(key)

_Gets session data shared between all [`Prompt`](Prompt.md) invocations. Use this as a way to pass data through each Prompt as the conversation develops._

Argument | Type | Description  
--- | --- | --- 
key | `Object` | The session data key.

Returns | Description
--- | --- 
`Object` | The requested session data.


##### <a id='setsessiondata'></a>public  function __setSessionData__(key, value)

_Sets session data shared between all [`Prompt`](Prompt.md) invocations. Use this as a way to pass data through each prompt as the conversation develops._

Argument | Type | Description  
--- | --- | --- 
key | `Object` | The session data key.
value | `Object` | The session data value.

Returns | 
--- | 
`void` |


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

