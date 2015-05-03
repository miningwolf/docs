## ServerListPing __class__

>io.wolfscript.event.system.ServerListPing
>Extends [`CancelableHook`](..\..\hook\CancelableHook.md)

---

### Class Overview

Called when a client ping the server

Method | Type   
--- | :--- 
new __ServerListPing__(remoteSocket, requesterProtocol, hostNamePinged, portPinged, motd, currentPlayers, maxPlayers, favicon) <br> _ServerListPing constructor_ | _constructor_
 writeonly property __Favicon__ <br> _Set: Gets the `InetAddress` (IP) of the requesting party_ | `void`
 function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](..\..\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](..\..\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](..\..\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](..\..\hook\Hook.md)







---

### Public Constructors for [`ServerListPing`](ServerListPing.md)

##### <a id='serverlistping'></a>new __ServerListPing__(remoteSocket, requesterProtocol, hostNamePinged, portPinged, motd, currentPlayers, maxPlayers, favicon) 

_ServerListPing constructor_

Argument | Type | Description  
--- | --- | --- 
remoteSocket | `InetSocketAddress` | remoteSocket argument
requesterProtocol | `int` | requesterProtocol argument
hostNamePinged | `String` | hostNamePinged argument
portPinged | `int` | portPinged argument
motd | [`ChatComponent`](..\..\api\chat\ChatComponent.md) | motd argument
currentPlayers | `int` | currentPlayers argument
maxPlayers | `int` | maxPlayers argument
favicon | `String` | favicon argument

---

### Public Properties for [`ServerListPing`](ServerListPing.md)

##### <a id='favicon'></a>public  writeonly property __Favicon__

_Set: Gets the `InetAddress` (IP) of the requesting party_

Get | Description
--- | --- 
`void` | `InetAddress` of requesting party /
    public InetAddress getRequesterAddress() {
        return requesterAddress;
    }

    /** Gets the port used by the requesting party

Set | Type | Description  
--- | --- | --- 
favicon | `String` | the base64 encoded PNG file


---

### Public Methods for [`ServerListPing`](ServerListPing.md)

##### <a id='tostring'></a>public  function __toString__()

_toString method_

Returns | 
--- | 
`String` |


---

### Public Methods for [`CancelableHook`](..\..\hook\CancelableHook.md)

##### <a id='call'></a>public  function __call__()

_Calls a Hook if not already executed_

Returns | Description
--- | --- 
[`CancelableHook`](..\..\hook\CancelableHook.md) | this


##### <a id='iscanceled'></a>public  function __isCanceled__()

_isCanceled method_

Returns | 
--- | 
`boolean` |


##### <a id='setcanceled'></a>public  function __setCanceled__()

_setCanceled method_

Returns | 
--- | 
`void` |


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


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

