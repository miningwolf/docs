## Logman __class__

>io.wolfscript.logger.Logman
>Implements `Logger`

---

### Class Overview

WolfScript Log manager. <p/> You can get an appropriate logger for your plugin here.

Method | Type   
--- | :--- 
 function __warn__(message, t) <br> _Get a Logman for the name given_ | `void`
static final var __NOTICE__ <br> _NOTICE field_ | `Marker`
static final var __MESSAGE__ <br> _MESSAGE field_ | `Marker`
static final var __DERP__ <br> _DERP field_ | `Marker`
static final var __PLUGINDEBUG__ <br> _PLUGINDEBUG field_ | `Marker`



---


### Public Methods for [`Logman`](Logman.md)

##### <a id='warn'></a>public  function __warn__(message, t)

_Get a Logman for the name given_

Argument | Type | Description  
--- | --- | --- 
message | `String` | the message to be printed to the console /
    public static void println(String message) {
        System.out.println(message);
    }

    /** Convenience shortcut to System.out.print().<br> Prints to the output stream on the same line
t | `Throwable` | t argument

Returns | Description
--- | --- 
`void` | the Logman instance /
    public static Logman getLogman(String name) {
        return loggers.containsKey(name) ? loggers.get(name) : new Logman(name);
    }

    /** Convenience shortcut to System.out.println(). Prints to the output stream on a new line


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


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

