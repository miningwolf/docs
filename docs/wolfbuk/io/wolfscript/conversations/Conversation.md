## Conversation __class__

>io.wolfscript.conversations.Conversation

---

### Class Overview

The Conversation class is responsible for tracking the current state of a conversation, displaying prompts to the user, and dispatching the user's response to the appropriate place. Conversation objects are not typically instantiated directly. Instead a [`ConversationFactory`](ConversationFactory.md) is used to construct identical conversations on demand. <p> Conversation flow consists of a directed graph of [`Prompt`](Prompt.md) objects. Each time a prompt gets input from the user, it must return the next prompt in the graph. Since each Prompt chooses the next Prompt, complex conversation trees can be implemented where the nature of the player's response directs the flow of the conversation. <p> Each conversation has a [`ConversationPrefix`](ConversationPrefix.md) that prepends all output from the conversation to the player. The ConversationPrefix can be used to display the plugin name or conversation status as the conversation evolves. <p> Each conversation has a timeout measured in the number of inactive seconds to wait before abandoning the conversation. If the inactivity timeout is reached, the conversation is abandoned and the user's incoming and outgoing chat is returned to normal. <p> You should not construct a conversation manually. Instead, use the [`ConversationFactory`](ConversationFactory.md) for access to all available options.

Method | Type   
--- | :--- 
new __Conversation__(plugin, forWhom, firstPrompt) <br> _Initializes a new Conversation._ | _constructor_
new __Conversation__(plugin, forWhom, firstPrompt) <br> _Initializes a new Conversation._ | _constructor_
 readonly property __Context__ <br> _Get: Returns the Conversation's [`ConversationContext`](ConversationContext.md)._ | [`ConversationContext`](ConversationContext.md)
 readonly property __ForWhom__ <br> _Get: Gets the entity for whom this conversation is mediating._ | [`Conversable`](Conversable.md)
 readonly property __Cancellers__ <br> _Get: Gets the list of [`ConversationCanceller`](ConversationCanceller.md)s_ | `List<ConversationCanceller>`
 readonly property __Prefix__ <br> _Get: Gets the [`ConversationPrefix`](ConversationPrefix.md) that prepends all output from this_ | [`ConversationPrefix`](ConversationPrefix.md)
 readonly property __State__ <br> _Get: Returns Returns the current state of the conversation._ | `ConversationState`
 writeonly property __LocalEchoEnabled__ <br> _Set: Sets the status of local echo for this conversation. If local echo is_ | `void`
 function __abandon__() <br> _Adds a [`ConversationAbandonedListener`](ConversationAbandonedListener.md)._ | `void`
 function __acceptInput__(input) <br> _Passes player input into the current prompt. The next prompt (as_ | `void`
 function __begin__() <br> _Displays the first prompt of this conversation and begins redirecting_ | `void`
 function __isLocalEchoEnabled__() <br> _Gets the status of local echo for this conversation. If local echo is_ | `boolean`
 function __isModal__() <br> _Gets the modality of this conversation. If a conversation is modal, all_ | `boolean`
 function __outputNextPrompt__() <br> _Abandons and resets the current conversation. Restores the user's_ | `void`



---

### Public Constructors for [`Conversation`](Conversation.md)

##### <a id='conversation'></a>new __Conversation__(plugin, forWhom, firstPrompt) 

_Initializes a new Conversation._

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](../plugin/Plugin.md) | The plugin that owns this conversation.
forWhom | [`Conversable`](Conversable.md) | The entity for whom this conversation is mediating.
firstPrompt | [`Prompt`](Prompt.md) | The first prompt in the conversation graph.

##### <a id='conversation'></a>new __Conversation__(plugin, forWhom, firstPrompt) 

_Initializes a new Conversation._

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](../plugin/Plugin.md) | The plugin that owns this conversation.
forWhom | [`Conversable`](Conversable.md) | The entity for whom this conversation is mediating.
firstPrompt | [`Prompt`](Prompt.md) | The first prompt in the conversation graph.

---

### Public Properties for [`Conversation`](Conversation.md)

##### <a id='context'></a>public  readonly property __Context__

_Get: Returns the Conversation's [`ConversationContext`](ConversationContext.md)._

Get | Description
--- | --- 
[`ConversationContext`](ConversationContext.md) | The ConversationContext.



##### <a id='forwhom'></a>public  readonly property __ForWhom__

_Get: Gets the entity for whom this conversation is mediating._

Get | Description
--- | --- 
[`Conversable`](Conversable.md) | The entity.



##### <a id='cancellers'></a>public  readonly property __Cancellers__

_Get: Gets the list of [`ConversationCanceller`](ConversationCanceller.md)s_

Get | Description
--- | --- 
`List<ConversationCanceller>` | The list.



##### <a id='prefix'></a>public  readonly property __Prefix__

_Get: Gets the [`ConversationPrefix`](ConversationPrefix.md) that prepends all output from this conversation._

Get | Description
--- | --- 
[`ConversationPrefix`](ConversationPrefix.md) | The ConversationPrefix in use.



##### <a id='state'></a>public  readonly property __State__

_Get: Returns Returns the current state of the conversation._

Get | Description
--- | --- 
`ConversationState` | The current state of the conversation.



##### <a id='localechoenabled'></a>public  writeonly property __LocalEchoEnabled__

_Set: Sets the status of local echo for this conversation. If local echo is enabled, any text submitted to a conversation gets echoed back into the submitter's chat window._

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
localEchoEnabled | `boolean` | The status of local echo.


---

### Public Methods for [`Conversation`](Conversation.md)

##### <a id='abandon'></a>public  function __abandon__()

_Adds a [`ConversationAbandonedListener`](ConversationAbandonedListener.md)._

Returns | 
--- | 
`void` |


##### <a id='acceptinput'></a>public  function __acceptInput__(input)

_Passes player input into the current prompt. The next prompt (as determined by the current prompt) is then displayed to the user._

Argument | Type | Description  
--- | --- | --- 
input | `String` | The user's chat text.

Returns | 
--- | 
`void` |


##### <a id='begin'></a>public  function __begin__()

_Displays the first prompt of this conversation and begins redirecting the user's chat responses._

Returns | 
--- | 
`void` |


##### <a id='islocalechoenabled'></a>public  function __isLocalEchoEnabled__()

_Gets the status of local echo for this conversation. If local echo is enabled, any text submitted to a conversation gets echoed back into the submitter's chat window._

Returns | Description
--- | --- 
`boolean` | The status of local echo.


##### <a id='ismodal'></a>public  function __isModal__()

_Gets the modality of this conversation. If a conversation is modal, all messages directed to the player are suppressed for the duration of the conversation._

Returns | Description
--- | --- 
`boolean` | The conversation modality.


##### <a id='outputnextprompt'></a>public  function __outputNextPrompt__()

_Abandons and resets the current conversation. Restores the user's normal chat behavior._

Returns | 
--- | 
`void` |


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

