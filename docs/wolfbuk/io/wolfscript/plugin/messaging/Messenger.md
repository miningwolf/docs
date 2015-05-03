## Messenger __interface__

>io.wolfscript.plugin.messaging.Messenger

---

### Interface Overview

A class responsible for managing the registrations of plugin channels and their listeners.

Method | Type   
--- | :--- 
 function __dispatchIncomingMessage__(source, channel) <br> _Represents the largest size that an individual Plugin Message may be._ | `void`
static final var __MAX__ <br> _Represents the largest size that an individual Plugin Message may be._ | `int`



---


### Public Methods for [`Messenger`](Messenger.md)

##### <a id='dispatchincomingmessage'></a>public  function __dispatchIncomingMessage__(source, channel)

_Represents the largest size that an individual Plugin Message may be. /
    public static final int MAX_MESSAGE_SIZE = 32766;

    /** Represents the largest size that a Plugin Channel may be. /
    public static final int MAX_CHANNEL_SIZE = 20;

    /** Checks if the specified channel is a reserved name._

Argument | Type | Description  
--- | --- | --- 
source | `Player` | Source of the message.
channel | `String` | Channel name to check.

Returns | Description
--- | --- 
`void` | True if the channel is reserved, otherwise false.


---

### Public Fields for [`Messenger`](Messenger.md)

##### <a id='max'></a>public static final var __MAX__

_Represents the largest size that an individual Plugin Message may be. /
    public static final int MAX_MESSAGE_SIZE = 32766;

    /** Represents the largest size that a Plugin Channel may be._

>Returns
>  `int`

---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

