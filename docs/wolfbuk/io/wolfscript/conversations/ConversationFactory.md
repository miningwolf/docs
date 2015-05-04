## ConversationFactory __class__

>io.wolfscript.conversations.ConversationFactory

---

### Class Overview

A ConversationFactory is responsible for creating a [`Conversation`](Conversation.md) from a predefined template. A ConversationFactory is typically created when a plugin is instantiated and builds a Conversation each time a user initiates a conversation with the plugin. Each Conversation maintains its own state and calls back as needed into the plugin. <p> The ConversationFactory implements a fluid API, allowing parameters to be set as an extension to the constructor.

Method | Type   
--- | :--- 
new __ConversationFactory__(plugin) <br> _Constructs a ConversationFactory._ | _constructor_
 function __withEscapeSequence__(escapeSequence) <br> _Sets the player input that, when received, will immediately terminate_ | [`ConversationFactory`](ConversationFactory.md)
 function __getPromptText__(context) <br> _getPromptText method_ | `String`
 function __buildConversation__(forWhom) <br> _Constructs a [`Conversation`](Conversation.md) in accordance with the defaults set_ | [`Conversation`](Conversation.md)
 function __addConversationAbandonedListener__(listener) <br> _Adds a [`ConversationAbandonedListener`](ConversationAbandonedListener.md) to all conversations_ | [`ConversationFactory`](ConversationFactory.md)
 function __thatExcludesNonPlayersWithMessage__(playerOnlyMessage) <br> _Prevents this factory from creating a conversation for non-player_ | [`ConversationFactory`](ConversationFactory.md)
 function __withConversationCanceller__(canceller) <br> _Adds a [`ConversationCanceller`](ConversationCanceller.md) to constructed conversations._ | [`ConversationFactory`](ConversationFactory.md)
 function __withFirstPrompt__(firstPrompt) <br> _Sets the first prompt to use in all generated conversations._ | [`ConversationFactory`](ConversationFactory.md)
 function __withInitialSessionData__() <br> _Sets any initial data with which to populate the conversation context_ | [`ConversationFactory`](ConversationFactory.md)
 function __withLocalEcho__(localEchoEnabled) <br> _Sets the local echo status for all [`Conversation`](Conversation.md)s created by_ | [`ConversationFactory`](ConversationFactory.md)
 function __withModality__(modal) <br> _Sets the modality of all [`Conversation`](Conversation.md)s created by this factory._ | [`ConversationFactory`](ConversationFactory.md)
 function __withPrefix__(prefix) <br> _Sets the [`ConversationPrefix`](ConversationPrefix.md) that prepends all output from all_ | [`ConversationFactory`](ConversationFactory.md)
 function __withTimeout__(timeoutSeconds) <br> _Sets the number of inactive seconds to wait before automatically_ | [`ConversationFactory`](ConversationFactory.md)



---

### Public Constructors for [`ConversationFactory`](ConversationFactory.md)

##### <a id='conversationfactory'></a>new __ConversationFactory__(plugin) 

_Constructs a ConversationFactory._

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](../plugin/Plugin.md) | The plugin that owns the factory.

---

### Public Methods for [`ConversationFactory`](ConversationFactory.md)

##### <a id='withescapesequence'></a>public  function __withEscapeSequence__(escapeSequence)

_Sets the player input that, when received, will immediately terminate the conversation._

Argument | Type | Description  
--- | --- | --- 
escapeSequence | `String` | Input to terminate the conversation.

Returns | Description
--- | --- 
[`ConversationFactory`](ConversationFactory.md) | This object.


##### <a id='getprompttext'></a>public  function __getPromptText__(context)

_getPromptText method_

Argument | Type | Description  
--- | --- | --- 
context | [`ConversationContext`](ConversationContext.md) | context argument

Returns | 
--- | 
`String` |


##### <a id='buildconversation'></a>public  function __buildConversation__(forWhom)

_Constructs a [`Conversation`](Conversation.md) in accordance with the defaults set for this factory._

Argument | Type | Description  
--- | --- | --- 
forWhom | [`Conversable`](Conversable.md) | The entity for whom the new conversation is mediating.

Returns | Description
--- | --- 
[`Conversation`](Conversation.md) | A new conversation.


##### <a id='addconversationabandonedlistener'></a>public  function __addConversationAbandonedListener__(listener)

_Adds a [`ConversationAbandonedListener`](ConversationAbandonedListener.md) to all conversations constructed by this factory._

Argument | Type | Description  
--- | --- | --- 
listener | [`ConversationAbandonedListener`](ConversationAbandonedListener.md) | The listener to add.

Returns | Description
--- | --- 
[`ConversationFactory`](ConversationFactory.md) | This object.


##### <a id='thatexcludesnonplayerswithmessage'></a>public  function __thatExcludesNonPlayersWithMessage__(playerOnlyMessage)

_Prevents this factory from creating a conversation for non-player [`Conversable`](Conversable.md) objects._

Argument | Type | Description  
--- | --- | --- 
playerOnlyMessage | `String` | The message to return to a non-play in lieu of starting a conversation.

Returns | Description
--- | --- 
[`ConversationFactory`](ConversationFactory.md) | This object.


##### <a id='withconversationcanceller'></a>public  function __withConversationCanceller__(canceller)

_Adds a [`ConversationCanceller`](ConversationCanceller.md) to constructed conversations._

Argument | Type | Description  
--- | --- | --- 
canceller | [`ConversationCanceller`](ConversationCanceller.md) | The [`ConversationCanceller`](ConversationCanceller.md) to add.

Returns | Description
--- | --- 
[`ConversationFactory`](ConversationFactory.md) | This object.


##### <a id='withfirstprompt'></a>public  function __withFirstPrompt__(firstPrompt)

_Sets the first prompt to use in all generated conversations. <p> The default is Prompt.END_OF_CONVERSATION._

Argument | Type | Description  
--- | --- | --- 
firstPrompt | [`Prompt`](Prompt.md) | The first prompt.

Returns | Description
--- | --- 
[`ConversationFactory`](ConversationFactory.md) | This object.


##### <a id='withinitialsessiondata'></a>public  function __withInitialSessionData__()

_Sets any initial data with which to populate the conversation context sessionData map._

Returns | Description
--- | --- 
[`ConversationFactory`](ConversationFactory.md) | This object.


##### <a id='withlocalecho'></a>public  function __withLocalEcho__(localEchoEnabled)

_Sets the local echo status for all [`Conversation`](Conversation.md)s created by this factory. If local echo is enabled, any text submitted to a conversation gets echoed back into the submitter's chat window._

Argument | Type | Description  
--- | --- | --- 
localEchoEnabled | `boolean` | The status of local echo.

Returns | Description
--- | --- 
[`ConversationFactory`](ConversationFactory.md) | This object.


##### <a id='withmodality'></a>public  function __withModality__(modal)

_Sets the modality of all [`Conversation`](Conversation.md)s created by this factory. If a conversation is modal, all messages directed to the player are suppressed for the duration of the conversation. <p> The default is True._

Argument | Type | Description  
--- | --- | --- 
modal | `boolean` | The modality of all conversations to be created.

Returns | Description
--- | --- 
[`ConversationFactory`](ConversationFactory.md) | This object.


##### <a id='withprefix'></a>public  function __withPrefix__(prefix)

_Sets the [`ConversationPrefix`](ConversationPrefix.md) that prepends all output from all generated conversations. <p> The default is a `NullConversationPrefix`;_

Argument | Type | Description  
--- | --- | --- 
prefix | [`ConversationPrefix`](ConversationPrefix.md) | The ConversationPrefix to use.

Returns | Description
--- | --- 
[`ConversationFactory`](ConversationFactory.md) | This object.


##### <a id='withtimeout'></a>public  function __withTimeout__(timeoutSeconds)

_Sets the number of inactive seconds to wait before automatically abandoning all generated conversations. <p> The default is 600 seconds (5 minutes)._

Argument | Type | Description  
--- | --- | --- 
timeoutSeconds | `int` | The number of seconds to wait.

Returns | Description
--- | --- 
[`ConversationFactory`](ConversationFactory.md) | This object.


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

