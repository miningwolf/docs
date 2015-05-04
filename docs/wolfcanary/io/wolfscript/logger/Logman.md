## Logman __class__

>io.wolfscript.logger.Logman
>Implements `Logger`

---

### Class Overview

class Logman

Method | Type   
--- | :--- 
 readonly property __Name__ <br> _Get: {@inheritDoc}_ | `String`
 readonly property __MessageFactory__ <br> _Get: {@inheritDoc}_ | `MessageFactory`
 function __info__(message, t) <br> _{@inheritDoc}_ | `void`
static function __getLogman__(name) <br> _Get a Logman for the name given_ | [`Logman`](Logman.md)
 function __fatal__(message, t) <br> _{@inheritDoc}_ | `void`
 function __catching__(level, t) <br> _{@inheritDoc}_ | `void`
 function __catching__(t) <br> _{@inheritDoc}_ | `void`
 function __debug__(marker, msg) <br> _{@inheritDoc}_ | `void`
 function __debug__(marker, msg, t) <br> _{@inheritDoc}_ | `void`
 function __debug__(marker, message) <br> _{@inheritDoc}_ | `void`
 function __debug__(marker, message, t) <br> _{@inheritDoc}_ | `void`
 function __debug__(marker, message) <br> _{@inheritDoc}_ | `void`
 function __debug__(marker, message) <br> _{@inheritDoc}_ | `void`
 function __debug__(marker, message, t) <br> _{@inheritDoc}_ | `void`
 function __debug__(msg) <br> _{@inheritDoc}_ | `void`
 function __debug__(msg, t) <br> _{@inheritDoc}_ | `void`
 function __debug__(message) <br> _{@inheritDoc}_ | `void`
 function __debug__(message, t) <br> _{@inheritDoc}_ | `void`
 function __debug__(message) <br> _{@inheritDoc}_ | `void`
 function __debug__(message) <br> _{@inheritDoc}_ | `void`
 function __debug__(message, t) <br> _{@inheritDoc}_ | `void`
 function __entry__() <br> _{@inheritDoc}_ | `void`
 function __entry__() <br> _{@inheritDoc}_ | `void`
 function __error__(marker, msg) <br> _{@inheritDoc}_ | `void`
 function __error__(marker, msg, t) <br> _{@inheritDoc}_ | `void`
 function __error__(marker, message) <br> _{@inheritDoc}_ | `void`
 function __error__(marker, message, t) <br> _{@inheritDoc}_ | `void`
 function __error__(marker, message) <br> _{@inheritDoc}_ | `void`
 function __error__(marker, message) <br> _{@inheritDoc}_ | `void`
 function __error__(marker, message, t) <br> _{@inheritDoc}_ | `void`
 function __error__(msg) <br> _{@inheritDoc}_ | `void`
 function __error__(msg, t) <br> _{@inheritDoc}_ | `void`
 function __error__(message) <br> _{@inheritDoc}_ | `void`
 function __error__(message, t) <br> _{@inheritDoc}_ | `void`
 function __error__(message) <br> _{@inheritDoc}_ | `void`
 function __error__(message) <br> _{@inheritDoc}_ | `void`
 function __error__(message, t) <br> _{@inheritDoc}_ | `void`
 function __exit__() <br> _{@inheritDoc}_ | `void`
 function __fatal__(marker, msg) <br> _{@inheritDoc}_ | `void`
 function __fatal__(marker, msg, t) <br> _{@inheritDoc}_ | `void`
 function __fatal__(marker, message) <br> _{@inheritDoc}_ | `void`
 function __fatal__(marker, message, t) <br> _{@inheritDoc}_ | `void`
 function __fatal__(marker, message) <br> _{@inheritDoc}_ | `void`
 function __fatal__(marker, message) <br> _{@inheritDoc}_ | `void`
 function __fatal__(marker, message, t) <br> _{@inheritDoc}_ | `void`
 function __fatal__(msg) <br> _{@inheritDoc}_ | `void`
 function __fatal__(msg, t) <br> _{@inheritDoc}_ | `void`
 function __fatal__(message) <br> _{@inheritDoc}_ | `void`
 function __fatal__(message, t) <br> _{@inheritDoc}_ | `void`
 function __fatal__(message) <br> _{@inheritDoc}_ | `void`
 function __fatal__(message) <br> _{@inheritDoc}_ | `void`
 function __log__(level, marker, message, t) <br> _{@inheritDoc}_ | `void`
static function __print__(message) <br> _Convenience shortcut to System.out.print()._ | `void`
 function __info__(marker, msg) <br> _{@inheritDoc}_ | `void`
 function __info__(marker, msg, t) <br> _{@inheritDoc}_ | `void`
 function __info__(marker, message) <br> _{@inheritDoc}_ | `void`
 function __info__(marker, message, t) <br> _{@inheritDoc}_ | `void`
 function __info__(marker, message) <br> _{@inheritDoc}_ | `void`
 function __info__(marker, message) <br> _{@inheritDoc}_ | `void`
 function __info__(marker, message, t) <br> _{@inheritDoc}_ | `void`
 function __info__(msg) <br> _{@inheritDoc}_ | `void`
 function __info__(msg, t) <br> _{@inheritDoc}_ | `void`
 function __info__(message) <br> _{@inheritDoc}_ | `void`
 function __log__(level, message, t) <br> _{@inheritDoc}_ | `void`
 function __info__(message) <br> _{@inheritDoc}_ | `void`
 function __info__(message) <br> _{@inheritDoc}_ | `void`
 function __info__(message, t) <br> _{@inheritDoc}_ | `void`
 function __isDebugEnabled__() <br> _{@inheritDoc}_ | `boolean`
 function __isDebugEnabled__(marker) <br> _{@inheritDoc}_ | `boolean`
 function __isEnabled__(level) <br> _{@inheritDoc}_ | `boolean`
 function __isEnabled__(level, marker) <br> _{@inheritDoc}_ | `boolean`
 function __isErrorEnabled__() <br> _{@inheritDoc}_ | `boolean`
 function __isErrorEnabled__(marker) <br> _{@inheritDoc}_ | `boolean`
 function __isFatalEnabled__() <br> _{@inheritDoc}_ | `boolean`
 function __isFatalEnabled__(marker) <br> _{@inheritDoc}_ | `boolean`
 function __isInfoEnabled__() <br> _{@inheritDoc}_ | `boolean`
 function __isInfoEnabled__(marker) <br> _{@inheritDoc}_ | `boolean`
 function __isTraceEnabled__() <br> _{@inheritDoc}_ | `boolean`
 function __isTraceEnabled__(marker) <br> _{@inheritDoc}_ | `boolean`
 function __isWarnEnabled__() <br> _{@inheritDoc}_ | `boolean`
 function __isWarnEnabled__(marker) <br> _{@inheritDoc}_ | `boolean`
 function __log__(level, marker, msg) <br> _{@inheritDoc}_ | `void`
 function __log__(level, marker, msg, t) <br> _{@inheritDoc}_ | `void`
 function __log__(level, marker, message) <br> _{@inheritDoc}_ | `void`
 function __log__(level, marker, message, t) <br> _{@inheritDoc}_ | `void`
 function __log__(level, marker, message) <br> _{@inheritDoc}_ | `void`
 function __log__(level, marker, message) <br> _{@inheritDoc}_ | `void`
 function __log__(level, msg) <br> _{@inheritDoc}_ | `void`
 function __log__(level, msg, t) <br> _{@inheritDoc}_ | `void`
 function __log__(level, message) <br> _{@inheritDoc}_ | `void`
 function __log__(level, message, t) <br> _{@inheritDoc}_ | `void`
 function __log__(level, message) <br> _{@inheritDoc}_ | `void`
 function __log__(level, message) <br> _{@inheritDoc}_ | `void`
 function __trace__(message) <br> _{@inheritDoc}_ | `void`
static function __println__(message) <br> _Convenience shortcut to System.out.println()._ | `void`
 function __printf__(level, format) <br> _{@inheritDoc}_ | `void`
 function __printf__(level, marker, format) <br> _{@inheritDoc}_ | `void`
 function __warn__(marker, msg) <br> _{@inheritDoc}_ | `void`
 function __trace__(marker, msg, t) <br> _{@inheritDoc}_ | `void`
 function __trace__(marker, message, t) <br> _{@inheritDoc}_ | `void`
 function __trace__(marker, message) <br> _{@inheritDoc}_ | `void`
 function __trace__(marker, message) <br> _{@inheritDoc}_ | `void`
 function __trace__(marker, message, t) <br> _{@inheritDoc}_ | `void`
 function __trace__(msg) <br> _{@inheritDoc}_ | `void`
 function __trace__(msg, t) <br> _{@inheritDoc}_ | `void`
 function __trace__(message) <br> _{@inheritDoc}_ | `void`
 function __trace__(message, t) <br> _{@inheritDoc}_ | `void`
 function __trace__(message) <br> _{@inheritDoc}_ | `void`
 function __trace__(marker, msg) <br> _{@inheritDoc}_ | `void`
 function __trace__(message, t) <br> _{@inheritDoc}_ | `void`
 function __trace__(marker, message) <br> _{@inheritDoc}_ | `void`
 function __warn__(msg) <br> _{@inheritDoc}_ | `void`
 function __warn__(marker, msg, t) <br> _{@inheritDoc}_ | `void`
 function __warn__(marker, message, t) <br> _{@inheritDoc}_ | `void`
 function __warn__(marker, message) <br> _{@inheritDoc}_ | `void`
 function __warn__(marker, message) <br> _{@inheritDoc}_ | `void`
 function __warn__(marker, message, t) <br> _{@inheritDoc}_ | `void`
 function __warn__(marker, message) <br> _{@inheritDoc}_ | `void`
 function __warn__(msg, t) <br> _{@inheritDoc}_ | `void`
 function __warn__(message) <br> _{@inheritDoc}_ | `void`
 function __warn__(message, t) <br> _{@inheritDoc}_ | `void`
 function __warn__(message) <br> _{@inheritDoc}_ | `void`
 function __warn__(message) <br> _{@inheritDoc}_ | `void`
 function __warn__(message, t) <br> _{@inheritDoc}_ | `void`
static final var __NOTICE__ <br> _NOTICE field_ | `Marker`
static final var __MESSAGE__ <br> _MESSAGE field_ | `Marker`
static final var __DERP__ <br> _DERP field_ | `Marker`
static final var __PLUGINDEBUG__ <br> _PLUGINDEBUG field_ | `Marker`



---


### Public Properties for [`Logman`](Logman.md)

##### <a id='name'></a>public  readonly property __Name__

_Get: {@inheritDoc}_

Get | 
--- | 
`String` |



##### <a id='messagefactory'></a>public  readonly property __MessageFactory__

_Get: {@inheritDoc}_

Get | 
--- | 
`MessageFactory` |



---

### Public Methods for [`Logman`](Logman.md)

##### <a id='info'></a>public  function __info__(message, t)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
message | `Object` | message argument
t | `Throwable` | t argument

Returns | 
--- | 
`void` |


##### <a id='getlogman'></a>public static function __getLogman__(name)

_Get a Logman for the name given_

Argument | Type | Description  
--- | --- | --- 
name | `String` | the name of the Logger to use

Returns | Description
--- | --- 
[`Logman`](Logman.md) | the Logman instance


##### <a id='fatal'></a>public  function __fatal__(message, t)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
message | `String` | message argument
t | `Throwable` | t argument

Returns | 
--- | 
`void` |


##### <a id='catching'></a>public  function __catching__(level, t)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
level | `Level` | level argument
t | `Throwable` | t argument

Returns | 
--- | 
`void` |


##### <a id='catching'></a>public  function __catching__(t)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
t | `Throwable` | t argument

Returns | 
--- | 
`void` |


##### <a id='debug'></a>public  function __debug__(marker, msg)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
marker | `Marker` | marker argument
msg | `Message` | msg argument

Returns | 
--- | 
`void` |


##### <a id='debug'></a>public  function __debug__(marker, msg, t)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
marker | `Marker` | marker argument
msg | `Message` | msg argument
t | `Throwable` | t argument

Returns | 
--- | 
`void` |


##### <a id='debug'></a>public  function __debug__(marker, message)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
marker | `Marker` | marker argument
message | `Object` | message argument

Returns | 
--- | 
`void` |


##### <a id='debug'></a>public  function __debug__(marker, message, t)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
marker | `Marker` | marker argument
message | `Object` | message argument
t | `Throwable` | t argument

Returns | 
--- | 
`void` |


##### <a id='debug'></a>public  function __debug__(marker, message)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
marker | `Marker` | marker argument
message | `String` | message argument

Returns | 
--- | 
`void` |


##### <a id='debug'></a>public  function __debug__(marker, message)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
marker | `Marker` | marker argument
message | `String` | message argument

Returns | 
--- | 
`void` |


##### <a id='debug'></a>public  function __debug__(marker, message, t)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
marker | `Marker` | marker argument
message | `String` | message argument
t | `Throwable` | t argument

Returns | 
--- | 
`void` |


##### <a id='debug'></a>public  function __debug__(msg)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
msg | `Message` | msg argument

Returns | 
--- | 
`void` |


##### <a id='debug'></a>public  function __debug__(msg, t)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
msg | `Message` | msg argument
t | `Throwable` | t argument

Returns | 
--- | 
`void` |


##### <a id='debug'></a>public  function __debug__(message)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
message | `Object` | message argument

Returns | 
--- | 
`void` |


##### <a id='debug'></a>public  function __debug__(message, t)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
message | `Object` | message argument
t | `Throwable` | t argument

Returns | 
--- | 
`void` |


##### <a id='debug'></a>public  function __debug__(message)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
message | `String` | message argument

Returns | 
--- | 
`void` |


##### <a id='debug'></a>public  function __debug__(message)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
message | `String` | message argument

Returns | 
--- | 
`void` |


##### <a id='debug'></a>public  function __debug__(message, t)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
message | `String` | message argument
t | `Throwable` | t argument

Returns | 
--- | 
`void` |


##### <a id='entry'></a>public  function __entry__()

_{@inheritDoc}_

Returns | 
--- | 
`void` |


##### <a id='entry'></a>public  function __entry__()

_{@inheritDoc}_

Returns | 
--- | 
`void` |


##### <a id='error'></a>public  function __error__(marker, msg)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
marker | `Marker` | marker argument
msg | `Message` | msg argument

Returns | 
--- | 
`void` |


##### <a id='error'></a>public  function __error__(marker, msg, t)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
marker | `Marker` | marker argument
msg | `Message` | msg argument
t | `Throwable` | t argument

Returns | 
--- | 
`void` |


##### <a id='error'></a>public  function __error__(marker, message)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
marker | `Marker` | marker argument
message | `Object` | message argument

Returns | 
--- | 
`void` |


##### <a id='error'></a>public  function __error__(marker, message, t)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
marker | `Marker` | marker argument
message | `Object` | message argument
t | `Throwable` | t argument

Returns | 
--- | 
`void` |


##### <a id='error'></a>public  function __error__(marker, message)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
marker | `Marker` | marker argument
message | `String` | message argument

Returns | 
--- | 
`void` |


##### <a id='error'></a>public  function __error__(marker, message)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
marker | `Marker` | marker argument
message | `String` | message argument

Returns | 
--- | 
`void` |


##### <a id='error'></a>public  function __error__(marker, message, t)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
marker | `Marker` | marker argument
message | `String` | message argument
t | `Throwable` | t argument

Returns | 
--- | 
`void` |


##### <a id='error'></a>public  function __error__(msg)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
msg | `Message` | msg argument

Returns | 
--- | 
`void` |


##### <a id='error'></a>public  function __error__(msg, t)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
msg | `Message` | msg argument
t | `Throwable` | t argument

Returns | 
--- | 
`void` |


##### <a id='error'></a>public  function __error__(message)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
message | `Object` | message argument

Returns | 
--- | 
`void` |


##### <a id='error'></a>public  function __error__(message, t)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
message | `Object` | message argument
t | `Throwable` | t argument

Returns | 
--- | 
`void` |


##### <a id='error'></a>public  function __error__(message)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
message | `String` | message argument

Returns | 
--- | 
`void` |


##### <a id='error'></a>public  function __error__(message)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
message | `String` | message argument

Returns | 
--- | 
`void` |


##### <a id='error'></a>public  function __error__(message, t)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
message | `String` | message argument
t | `Throwable` | t argument

Returns | 
--- | 
`void` |


##### <a id='exit'></a>public  function __exit__()

_{@inheritDoc}_

Returns | 
--- | 
`void` |


##### <a id='fatal'></a>public  function __fatal__(marker, msg)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
marker | `Marker` | marker argument
msg | `Message` | msg argument

Returns | 
--- | 
`void` |


##### <a id='fatal'></a>public  function __fatal__(marker, msg, t)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
marker | `Marker` | marker argument
msg | `Message` | msg argument
t | `Throwable` | t argument

Returns | 
--- | 
`void` |


##### <a id='fatal'></a>public  function __fatal__(marker, message)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
marker | `Marker` | marker argument
message | `Object` | message argument

Returns | 
--- | 
`void` |


##### <a id='fatal'></a>public  function __fatal__(marker, message, t)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
marker | `Marker` | marker argument
message | `Object` | message argument
t | `Throwable` | t argument

Returns | 
--- | 
`void` |


##### <a id='fatal'></a>public  function __fatal__(marker, message)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
marker | `Marker` | marker argument
message | `String` | message argument

Returns | 
--- | 
`void` |


##### <a id='fatal'></a>public  function __fatal__(marker, message)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
marker | `Marker` | marker argument
message | `String` | message argument

Returns | 
--- | 
`void` |


##### <a id='fatal'></a>public  function __fatal__(marker, message, t)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
marker | `Marker` | marker argument
message | `String` | message argument
t | `Throwable` | t argument

Returns | 
--- | 
`void` |


##### <a id='fatal'></a>public  function __fatal__(msg)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
msg | `Message` | msg argument

Returns | 
--- | 
`void` |


##### <a id='fatal'></a>public  function __fatal__(msg, t)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
msg | `Message` | msg argument
t | `Throwable` | t argument

Returns | 
--- | 
`void` |


##### <a id='fatal'></a>public  function __fatal__(message)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
message | `Object` | message argument

Returns | 
--- | 
`void` |


##### <a id='fatal'></a>public  function __fatal__(message, t)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
message | `Object` | message argument
t | `Throwable` | t argument

Returns | 
--- | 
`void` |


##### <a id='fatal'></a>public  function __fatal__(message)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
message | `String` | message argument

Returns | 
--- | 
`void` |


##### <a id='fatal'></a>public  function __fatal__(message)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
message | `String` | message argument

Returns | 
--- | 
`void` |


##### <a id='log'></a>public  function __log__(level, marker, message, t)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
level | `Level` | level argument
marker | `Marker` | marker argument
message | `String` | message argument
t | `Throwable` | t argument

Returns | 
--- | 
`void` |


##### <a id='print'></a>public static function __print__(message)

_Convenience shortcut to System.out.print().<br> Prints to the output stream on the same line_

Argument | Type | Description  
--- | --- | --- 
message | `String` | the message to be printed to the console

Returns | 
--- | 
`void` |


##### <a id='info'></a>public  function __info__(marker, msg)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
marker | `Marker` | marker argument
msg | `Message` | msg argument

Returns | 
--- | 
`void` |


##### <a id='info'></a>public  function __info__(marker, msg, t)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
marker | `Marker` | marker argument
msg | `Message` | msg argument
t | `Throwable` | t argument

Returns | 
--- | 
`void` |


##### <a id='info'></a>public  function __info__(marker, message)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
marker | `Marker` | marker argument
message | `Object` | message argument

Returns | 
--- | 
`void` |


##### <a id='info'></a>public  function __info__(marker, message, t)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
marker | `Marker` | marker argument
message | `Object` | message argument
t | `Throwable` | t argument

Returns | 
--- | 
`void` |


##### <a id='info'></a>public  function __info__(marker, message)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
marker | `Marker` | marker argument
message | `String` | message argument

Returns | 
--- | 
`void` |


##### <a id='info'></a>public  function __info__(marker, message)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
marker | `Marker` | marker argument
message | `String` | message argument

Returns | 
--- | 
`void` |


##### <a id='info'></a>public  function __info__(marker, message, t)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
marker | `Marker` | marker argument
message | `String` | message argument
t | `Throwable` | t argument

Returns | 
--- | 
`void` |


##### <a id='info'></a>public  function __info__(msg)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
msg | `Message` | msg argument

Returns | 
--- | 
`void` |


##### <a id='info'></a>public  function __info__(msg, t)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
msg | `Message` | msg argument
t | `Throwable` | t argument

Returns | 
--- | 
`void` |


##### <a id='info'></a>public  function __info__(message)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
message | `Object` | message argument

Returns | 
--- | 
`void` |


##### <a id='log'></a>public  function __log__(level, message, t)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
level | `Level` | level argument
message | `String` | message argument
t | `Throwable` | t argument

Returns | 
--- | 
`void` |


##### <a id='info'></a>public  function __info__(message)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
message | `String` | message argument

Returns | 
--- | 
`void` |


##### <a id='info'></a>public  function __info__(message)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
message | `String` | message argument

Returns | 
--- | 
`void` |


##### <a id='info'></a>public  function __info__(message, t)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
message | `String` | message argument
t | `Throwable` | t argument

Returns | 
--- | 
`void` |


##### <a id='isdebugenabled'></a>public  function __isDebugEnabled__()

_{@inheritDoc}_

Returns | 
--- | 
`boolean` |


##### <a id='isdebugenabled'></a>public  function __isDebugEnabled__(marker)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
marker | `Marker` | marker argument

Returns | 
--- | 
`boolean` |


##### <a id='isenabled'></a>public  function __isEnabled__(level)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
level | `Level` | level argument

Returns | 
--- | 
`boolean` |


##### <a id='isenabled'></a>public  function __isEnabled__(level, marker)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
level | `Level` | level argument
marker | `Marker` | marker argument

Returns | 
--- | 
`boolean` |


##### <a id='iserrorenabled'></a>public  function __isErrorEnabled__()

_{@inheritDoc}_

Returns | 
--- | 
`boolean` |


##### <a id='iserrorenabled'></a>public  function __isErrorEnabled__(marker)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
marker | `Marker` | marker argument

Returns | 
--- | 
`boolean` |


##### <a id='isfatalenabled'></a>public  function __isFatalEnabled__()

_{@inheritDoc}_

Returns | 
--- | 
`boolean` |


##### <a id='isfatalenabled'></a>public  function __isFatalEnabled__(marker)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
marker | `Marker` | marker argument

Returns | 
--- | 
`boolean` |


##### <a id='isinfoenabled'></a>public  function __isInfoEnabled__()

_{@inheritDoc}_

Returns | 
--- | 
`boolean` |


##### <a id='isinfoenabled'></a>public  function __isInfoEnabled__(marker)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
marker | `Marker` | marker argument

Returns | 
--- | 
`boolean` |


##### <a id='istraceenabled'></a>public  function __isTraceEnabled__()

_{@inheritDoc}_

Returns | 
--- | 
`boolean` |


##### <a id='istraceenabled'></a>public  function __isTraceEnabled__(marker)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
marker | `Marker` | marker argument

Returns | 
--- | 
`boolean` |


##### <a id='iswarnenabled'></a>public  function __isWarnEnabled__()

_{@inheritDoc}_

Returns | 
--- | 
`boolean` |


##### <a id='iswarnenabled'></a>public  function __isWarnEnabled__(marker)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
marker | `Marker` | marker argument

Returns | 
--- | 
`boolean` |


##### <a id='log'></a>public  function __log__(level, marker, msg)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
level | `Level` | level argument
marker | `Marker` | marker argument
msg | `Message` | msg argument

Returns | 
--- | 
`void` |


##### <a id='log'></a>public  function __log__(level, marker, msg, t)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
level | `Level` | level argument
marker | `Marker` | marker argument
msg | `Message` | msg argument
t | `Throwable` | t argument

Returns | 
--- | 
`void` |


##### <a id='log'></a>public  function __log__(level, marker, message)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
level | `Level` | level argument
marker | `Marker` | marker argument
message | `Object` | message argument

Returns | 
--- | 
`void` |


##### <a id='log'></a>public  function __log__(level, marker, message, t)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
level | `Level` | level argument
marker | `Marker` | marker argument
message | `Object` | message argument
t | `Throwable` | t argument

Returns | 
--- | 
`void` |


##### <a id='log'></a>public  function __log__(level, marker, message)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
level | `Level` | level argument
marker | `Marker` | marker argument
message | `String` | message argument

Returns | 
--- | 
`void` |


##### <a id='log'></a>public  function __log__(level, marker, message)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
level | `Level` | level argument
marker | `Marker` | marker argument
message | `String` | message argument

Returns | 
--- | 
`void` |


##### <a id='log'></a>public  function __log__(level, msg)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
level | `Level` | level argument
msg | `Message` | msg argument

Returns | 
--- | 
`void` |


##### <a id='log'></a>public  function __log__(level, msg, t)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
level | `Level` | level argument
msg | `Message` | msg argument
t | `Throwable` | t argument

Returns | 
--- | 
`void` |


##### <a id='log'></a>public  function __log__(level, message)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
level | `Level` | level argument
message | `Object` | message argument

Returns | 
--- | 
`void` |


##### <a id='log'></a>public  function __log__(level, message, t)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
level | `Level` | level argument
message | `Object` | message argument
t | `Throwable` | t argument

Returns | 
--- | 
`void` |


##### <a id='log'></a>public  function __log__(level, message)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
level | `Level` | level argument
message | `String` | message argument

Returns | 
--- | 
`void` |


##### <a id='log'></a>public  function __log__(level, message)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
level | `Level` | level argument
message | `String` | message argument

Returns | 
--- | 
`void` |


##### <a id='trace'></a>public  function __trace__(message)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
message | `String` | message argument

Returns | 
--- | 
`void` |


##### <a id='println'></a>public static function __println__(message)

_Convenience shortcut to System.out.println(). Prints to the output stream on a new line_

Argument | Type | Description  
--- | --- | --- 
message | `String` | the message to be printed to the console

Returns | 
--- | 
`void` |


##### <a id='printf'></a>public  function __printf__(level, format)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
level | `Level` | level argument
format | `String` | format argument

Returns | 
--- | 
`void` |


##### <a id='printf'></a>public  function __printf__(level, marker, format)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
level | `Level` | level argument
marker | `Marker` | marker argument
format | `String` | format argument

Returns | 
--- | 
`void` |


##### <a id='warn'></a>public  function __warn__(marker, msg)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
marker | `Marker` | marker argument
msg | `Message` | msg argument

Returns | 
--- | 
`void` |


##### <a id='trace'></a>public  function __trace__(marker, msg, t)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
marker | `Marker` | marker argument
msg | `Message` | msg argument
t | `Throwable` | t argument

Returns | 
--- | 
`void` |


##### <a id='trace'></a>public  function __trace__(marker, message, t)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
marker | `Marker` | marker argument
message | `Object` | message argument
t | `Throwable` | t argument

Returns | 
--- | 
`void` |


##### <a id='trace'></a>public  function __trace__(marker, message)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
marker | `Marker` | marker argument
message | `String` | message argument

Returns | 
--- | 
`void` |


##### <a id='trace'></a>public  function __trace__(marker, message)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
marker | `Marker` | marker argument
message | `String` | message argument

Returns | 
--- | 
`void` |


##### <a id='trace'></a>public  function __trace__(marker, message, t)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
marker | `Marker` | marker argument
message | `String` | message argument
t | `Throwable` | t argument

Returns | 
--- | 
`void` |


##### <a id='trace'></a>public  function __trace__(msg)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
msg | `Message` | msg argument

Returns | 
--- | 
`void` |


##### <a id='trace'></a>public  function __trace__(msg, t)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
msg | `Message` | msg argument
t | `Throwable` | t argument

Returns | 
--- | 
`void` |


##### <a id='trace'></a>public  function __trace__(message)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
message | `Object` | message argument

Returns | 
--- | 
`void` |


##### <a id='trace'></a>public  function __trace__(message, t)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
message | `Object` | message argument
t | `Throwable` | t argument

Returns | 
--- | 
`void` |


##### <a id='trace'></a>public  function __trace__(message)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
message | `String` | message argument

Returns | 
--- | 
`void` |


##### <a id='trace'></a>public  function __trace__(marker, msg)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
marker | `Marker` | marker argument
msg | `Message` | msg argument

Returns | 
--- | 
`void` |


##### <a id='trace'></a>public  function __trace__(message, t)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
message | `String` | message argument
t | `Throwable` | t argument

Returns | 
--- | 
`void` |


##### <a id='trace'></a>public  function __trace__(marker, message)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
marker | `Marker` | marker argument
message | `Object` | message argument

Returns | 
--- | 
`void` |


##### <a id='warn'></a>public  function __warn__(msg)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
msg | `Message` | msg argument

Returns | 
--- | 
`void` |


##### <a id='warn'></a>public  function __warn__(marker, msg, t)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
marker | `Marker` | marker argument
msg | `Message` | msg argument
t | `Throwable` | t argument

Returns | 
--- | 
`void` |


##### <a id='warn'></a>public  function __warn__(marker, message, t)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
marker | `Marker` | marker argument
message | `Object` | message argument
t | `Throwable` | t argument

Returns | 
--- | 
`void` |


##### <a id='warn'></a>public  function __warn__(marker, message)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
marker | `Marker` | marker argument
message | `String` | message argument

Returns | 
--- | 
`void` |


##### <a id='warn'></a>public  function __warn__(marker, message)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
marker | `Marker` | marker argument
message | `String` | message argument

Returns | 
--- | 
`void` |


##### <a id='warn'></a>public  function __warn__(marker, message, t)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
marker | `Marker` | marker argument
message | `String` | message argument
t | `Throwable` | t argument

Returns | 
--- | 
`void` |


##### <a id='warn'></a>public  function __warn__(marker, message)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
marker | `Marker` | marker argument
message | `Object` | message argument

Returns | 
--- | 
`void` |


##### <a id='warn'></a>public  function __warn__(msg, t)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
msg | `Message` | msg argument
t | `Throwable` | t argument

Returns | 
--- | 
`void` |


##### <a id='warn'></a>public  function __warn__(message)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
message | `Object` | message argument

Returns | 
--- | 
`void` |


##### <a id='warn'></a>public  function __warn__(message, t)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
message | `Object` | message argument
t | `Throwable` | t argument

Returns | 
--- | 
`void` |


##### <a id='warn'></a>public  function __warn__(message)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
message | `String` | message argument

Returns | 
--- | 
`void` |


##### <a id='warn'></a>public  function __warn__(message)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
message | `String` | message argument

Returns | 
--- | 
`void` |


##### <a id='warn'></a>public  function __warn__(message, t)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
message | `String` | message argument
t | `Throwable` | t argument

Returns | 
--- | 
`void` |


---

### Public Fields for [`Logman`](Logman.md)

##### <a id='notice'></a>public static final var __NOTICE__

_NOTICE field_

>Returns
>  `Marker`

##### <a id='message'></a>public static final var __MESSAGE__

_MESSAGE field_

>Returns
>  `Marker`

##### <a id='derp'></a>public static final var __DERP__

_DERP field_

>Returns
>  `Marker`

##### <a id='plugindebug'></a>public static final var __PLUGINDEBUG__

_PLUGINDEBUG field_

>Returns
>  `Marker`

---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

