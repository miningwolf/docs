## ConversationContext __class__

>io.wolfscript.conversations.ConversationContext

---

### Class Overview

A ConversationContext provides continuity between nodes in the prompt graph by giving the developer access to the subject of the conversation and a generic map for storing values that are shared between all [`Prompt`](Prompt.md) invocations.

Method | Type   
--- | :--- 
 function __setSessionData__(key, value) <br> _setSessionData method_ | `void`



---


### Public Methods for [`ConversationContext`](ConversationContext.md)

##### <a id='setsessiondata'></a>public  function __setSessionData__(key, value)

_setSessionData method_

Argument | Type | Description  
--- | --- | --- 
key | `Object` | The session data key.
value | `Object` | The session data value.

Returns | Description
--- | --- 
`void` | The owning plugin. /
    public Plugin getPlugin() {
        return plugin;
    }

    /** Gets the subject of the conversation.


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

