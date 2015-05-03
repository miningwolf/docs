## Chat __class__

>io.wolfscript.event.player.Chat
>Extends [`CancelableHook`](..\..\hook\CancelableHook.md)

---

### Class Overview

Chat hook. Contains player, prefix, message and receivers information

Method | Type   
--- | :--- 
new __Chat__(player, format) <br> _Chat constructor_ | _constructor_
 function __buildSendMessage__() <br> _Get the `Player` instance_ | `String`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](..\..\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](..\..\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](..\..\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](..\..\hook\Hook.md)







---

### Public Constructors for [`Chat`](Chat.md)

##### <a id='chat'></a>new __Chat__(player, format) 

_Chat constructor_

Argument | Type | Description  
--- | --- | --- 
player | `Player` | player argument
format | `String` | format argument

---

### Public Methods for [`Chat`](Chat.md)

##### <a id='buildsendmessage'></a>public  function __buildSendMessage__()

_Get the `Player` instance_

Returns | Description
--- | --- 
`String` | the `Player` /
    public Player getPlayer() {
        return player;
    }

    /** Get the message prefix. The prefix contains the following data:<br> This is the prefix as defined in Player or Group.


##### <a id='tostring'></a>public final function __toString__()

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
	

