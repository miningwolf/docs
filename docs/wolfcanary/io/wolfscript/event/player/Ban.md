## Ban __class__

>io.wolfscript.event.player.Ban
>Extends [`Hook`](..\..\hook\Hook.md)

---

### Class Overview

Ban hook. Contains information about an issued Ban

Method | Type   
--- | :--- 
new __Ban__(banned, ip, moderator, reason, bantime) <br> _Ban constructor_ | _constructor_
 readonly property __Bantime__ <br> _Get: Get the [`PlayerReference`](..\..\api\PlayerReference.md) that has been banned._ | `long`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](..\..\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](..\..\hook\Hook.md)





---

### Public Constructors for [`Ban`](Ban.md)

##### <a id='ban'></a>new __Ban__(banned, ip, moderator, reason, bantime) 

_Ban constructor_

Argument | Type | Description  
--- | --- | --- 
banned | [`PlayerReference`](..\..\api\PlayerReference.md) | banned argument
ip | `String` | ip argument
moderator | [`MessageReceiver`](..\..\chat\MessageReceiver.md) | moderator argument
reason | `String` | reason argument
bantime | `long` | bantime argument

---

### Public Properties for [`Ban`](Ban.md)

##### <a id='bantime'></a>public  readonly property __Bantime__

_Get: Get the [`PlayerReference`](..\..\api\PlayerReference.md) that has been banned. This might be null if the banned player is offline/not currently on the server_

Get | Description
--- | --- 
`long` | banned if not ipban, null otherwise /
    public PlayerReference getBannedPlayer() {
        return banned;
    }

    /** Checks if this is an IP ban



---

### Public Methods for [`Ban`](Ban.md)

##### <a id='tostring'></a>public final function __toString__()

_toString method_

Returns | 
--- | 
`String` |


---

### Public Methods for [`Hook`](..\..\hook\Hook.md)

##### <a id='call'></a>public  function __call__()

_Get the name of this hook._

Returns | Description
--- | --- 
[`Hook`](..\..\hook\Hook.md) | simple class name /
    public final String getHookName() {
        return getClass().getSimpleName();
    }

    @Override
    public int hashCode() {
        int hash = getClass().getSimpleName().length();

        return hash getClass().getSimpleName().hashCode() + 2;
    }

    /** Calls a Hook if not already executed


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

