## RegexPrompt __class__

>io.wolfscript.conversations.RegexPrompt
>Extends [`ValidatingPrompt`](ValidatingPrompt.md)

---

### Class Overview

RegexPrompt is the base class for any prompt that requires an input validated by a regular expression.

Method | Type   
--- | :--- 
new __RegexPrompt__(regex) <br> _RegexPrompt constructor_ | _constructor_
new __RegexPrompt__(pattern) <br> _RegexPrompt constructor_ | _constructor_
 |
__Inherited items from [`ValidatingPrompt`](ValidatingPrompt.md)__ |
new __ValidatingPrompt__() <br> _ValidatingPrompt constructor_ | _constructor_
 function __acceptInput__(context, input) <br> _Accepts and processes input from the user and validates it. If_ | [`Prompt`](Prompt.md)
 function __blocksForInput__(context) <br> _Ensures that the prompt waits for the user to provide input._ | `boolean`





---

### Public Constructors for [`RegexPrompt`](RegexPrompt.md)

##### <a id='regexprompt'></a>new __RegexPrompt__(regex) 

_RegexPrompt constructor_

Argument | Type | Description  
--- | --- | --- 
regex | `String` | regex argument

##### <a id='regexprompt'></a>new __RegexPrompt__(pattern) 

_RegexPrompt constructor_

Argument | Type | Description  
--- | --- | --- 
pattern | `Pattern` | pattern argument

---
### Public Constructors for [`ValidatingPrompt`](ValidatingPrompt.md)

##### <a id='validatingprompt'></a>new __ValidatingPrompt__() 

_ValidatingPrompt constructor_


---

### Public Methods for [`ValidatingPrompt`](ValidatingPrompt.md)

##### <a id='acceptinput'></a>public  function __acceptInput__(context, input)

_Accepts and processes input from the user and validates it. If validation fails, this prompt is returned for re-execution, otherwise the next Prompt in the prompt graph is returned._

Argument | Type | Description  
--- | --- | --- 
context | [`ConversationContext`](ConversationContext.md) | Context information about the conversation.
input | `String` | The input text from the user.

Returns | Description
--- | --- 
[`Prompt`](Prompt.md) | This prompt or the next Prompt in the prompt graph.


##### <a id='blocksforinput'></a>public  function __blocksForInput__(context)

_Ensures that the prompt waits for the user to provide input._

Argument | Type | Description  
--- | --- | --- 
context | [`ConversationContext`](ConversationContext.md) | Context information about the conversation.

Returns | Description
--- | --- 
`boolean` | True.


---


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

