## Translator __class__

>io.wolfscript.Translator
>Extends `LocaleHelper`

---

### Class Overview

This class handles internationalization (aka i18n). It will look up translations from a given key to the language that is currently active.

Method | Type   
--- | :--- 
static readonly property __Instance__ <br> _Get: Returns the instance for this Translator._ | [`Translator`](Translator.md)
static function __sendTranslatedNotice__(receiver, key) <br> _Translates a message and sends it as a notice to the given [`MessageReceiver`](chat/MessageReceiver.md)_ | `void`
static function __sendTranslatedNotice__(receiver, key) <br> _Translates a message and sends it as a notice to the given [`MessageReceiver`](chat/MessageReceiver.md)_ | `void`
static function __localTranslate__(key, locale) <br> _Translates a message into the current system language if that mapping exists_ | `String`
static function __localTranslate__(key, locale) <br> _Translates the given message key and applies formatting according to standard Java formatting rules_ | `String`
static function __nativeCanTranslate__(key) <br> _Checks if a key exists for translation in Minecraft's native translation_ | `boolean`
static function __nativeTranslate__(key) <br> _Uses Minecraft's native translation to translate a key_ | `String`
static function __nativeTranslate__(key) <br> _Uses Minecraft's native translation to translate a key_ | `String`
static function __sendTranslatedMessage__(receiver, key) <br> _Translates a message and sends it to the given [`MessageReceiver`](chat/MessageReceiver.md)_ | `void`
static function __sendTranslatedMessage__(receiver, key) <br> _Translates a message and sends it to the given [`MessageReceiver`](chat/MessageReceiver.md)_ | `void`
static function __sendTranslatedMessage__(receiver, messageColor, key) <br> _Translates a message and sends it to the given [`MessageReceiver`](chat/MessageReceiver.md)_ | `void`
static function __sendTranslatedMessages__(receiver, prefixColor) <br> _sendTranslatedMessages method_ | `void`
static function __translate__(messageKey) <br> _Translates a message into the current system language if that mapping exists_ | `String`
static function __translateAndFormat__(messageKey) <br> _Translates the given message key and applies formatting according to standard Java formatting rules_ | `String`



---


### Public Properties for [`Translator`](Translator.md)

##### <a id='instance'></a>public static readonly property __Instance__

_Get: Returns the instance for this Translator. For translation purposes, please use the provided static methods. This here is for working with the command system_

Get | Description
--- | --- 
[`Translator`](Translator.md) | the Translator instance



---

### Public Methods for [`Translator`](Translator.md)

##### <a id='sendtranslatednotice'></a>public static function __sendTranslatedNotice__(receiver, key)

_Translates a message and sends it as a notice to the given [`MessageReceiver`](chat/MessageReceiver.md)_

Argument | Type | Description  
--- | --- | --- 
receiver | [`MessageReceiver`](chat/MessageReceiver.md) | the receiver of the message
key | `String` | the key to translate

Returns | 
--- | 
`void` |


##### <a id='sendtranslatednotice'></a>public static function __sendTranslatedNotice__(receiver, key)

_Translates a message and sends it as a notice to the given [`MessageReceiver`](chat/MessageReceiver.md)_

Argument | Type | Description  
--- | --- | --- 
receiver | [`MessageReceiver`](chat/MessageReceiver.md) | the receiver of the message
key | `String` | the key to translate

Returns | 
--- | 
`void` |


##### <a id='localtranslate'></a>public static function __localTranslate__(key, locale)

_Translates a message into the current system language if that mapping exists_

Argument | Type | Description  
--- | --- | --- 
key | `String` | the message key to used to get the message from the Language file
locale | `String` | the locale code to get translation for

Returns | Description
--- | --- 
`String` | the translated message


##### <a id='localtranslate'></a>public static function __localTranslate__(key, locale)

_Translates the given message key and applies formatting according to standard Java formatting rules_

Argument | Type | Description  
--- | --- | --- 
key | `String` | the message key to used to get the message from the Language file
locale | `String` | the locale code to get translation for

Returns | Description
--- | --- 
`String` | the translated message


##### <a id='nativecantranslate'></a>public static function __nativeCanTranslate__(key)

_Checks if a key exists for translation in Minecraft's native translation_

Argument | Type | Description  
--- | --- | --- 
key | `String` | the key to check

Returns | Description
--- | --- 
`boolean` | `true` if exists; `false` if not


##### <a id='nativetranslate'></a>public static function __nativeTranslate__(key)

_Uses Minecraft's native translation to translate a key_

Argument | Type | Description  
--- | --- | --- 
key | `String` | the key to translate

Returns | Description
--- | --- 
`String` | the translated string


##### <a id='nativetranslate'></a>public static function __nativeTranslate__(key)

_Uses Minecraft's native translation to translate a key_

Argument | Type | Description  
--- | --- | --- 
key | `String` | the key to translate

Returns | Description
--- | --- 
`String` | the translated string


##### <a id='sendtranslatedmessage'></a>public static function __sendTranslatedMessage__(receiver, key)

_Translates a message and sends it to the given [`MessageReceiver`](chat/MessageReceiver.md)_

Argument | Type | Description  
--- | --- | --- 
receiver | [`MessageReceiver`](chat/MessageReceiver.md) | the receiver of the message
key | `String` | the key to translate

Returns | 
--- | 
`void` |


##### <a id='sendtranslatedmessage'></a>public static function __sendTranslatedMessage__(receiver, key)

_Translates a message and sends it to the given [`MessageReceiver`](chat/MessageReceiver.md)_

Argument | Type | Description  
--- | --- | --- 
receiver | [`MessageReceiver`](chat/MessageReceiver.md) | the receiver of the message
key | `String` | the key to translate

Returns | 
--- | 
`void` |


##### <a id='sendtranslatedmessage'></a>public static function __sendTranslatedMessage__(receiver, messageColor, key)

_Translates a message and sends it to the given [`MessageReceiver`](chat/MessageReceiver.md)_

Argument | Type | Description  
--- | --- | --- 
receiver | [`MessageReceiver`](chat/MessageReceiver.md) | the receiver of the message
messageColor | [`ChatFormat`](chat/ChatFormat.md) | the [`ChatFormat`](chat/ChatFormat.md) color to make the message
key | `String` | the key to translate

Returns | 
--- | 
`void` |


##### <a id='sendtranslatedmessages'></a>public static function __sendTranslatedMessages__(receiver, prefixColor)

_sendTranslatedMessages method_

Argument | Type | Description  
--- | --- | --- 
receiver | [`MessageReceiver`](chat/MessageReceiver.md) | receiver argument
prefixColor | [`ChatFormat`](chat/ChatFormat.md) | the messages starting color

Returns | 
--- | 
`void` |


##### <a id='translate'></a>public static function __translate__(messageKey)

_Translates a message into the current system language if that mapping exists_

Argument | Type | Description  
--- | --- | --- 
messageKey | `String` | the message key to used to get the message from the Language file

Returns | Description
--- | --- 
`String` | the translated message


##### <a id='translateandformat'></a>public static function __translateAndFormat__(messageKey)

_Translates the given message key and applies formatting according to standard Java formatting rules_

Argument | Type | Description  
--- | --- | --- 
messageKey | `String` | the message key to used to get the message from the Language file

Returns | Description
--- | --- 
`String` | the translated message


---
---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

