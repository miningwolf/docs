## FixedSetPrompt __class__

>io.wolfscript.conversations.FixedSetPrompt
>Extends [`ValidatingPrompt`](ValidatingPrompt.md)

---

### Class Overview

FixedSetPrompt is the base class for any prompt that requires a fixed set response from the user.

Method | Type   
--- | :--- 
new __FixedSetPrompt__() <br> _Creates a FixedSetPrompt from a set of strings._ | _constructor_
 |
__Inherited items from [`ValidatingPrompt`](ValidatingPrompt.md)__ |
new __ValidatingPrompt__() <br> _ValidatingPrompt constructor_ | _constructor_
 function __acceptInput__(context, input) <br> _Accepts and processes input from the user and validates it. If_ | [`Prompt`](Prompt.md)
 function __blocksForInput__(context) <br> _Ensures that the prompt waits for the user to provide input._ | `boolean`





---

### Public Constructors for [`FixedSetPrompt`](FixedSetPrompt.md)

##### <a id='fixedsetprompt'></a>new __FixedSetPrompt__() 

_Creates a FixedSetPrompt from a set of strings. <p> foo = new FixedSetPrompt("bar", "cheese", "panda");_


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
	

