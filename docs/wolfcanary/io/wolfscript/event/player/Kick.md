## Kick __class__

>io.wolfscript.event.player.Kick
>Extends [`Hook`](..\..\hook\Hook.md)

---

### Class Overview

Kick hook. Contains the player who was kicked and the MessageReceiver who kicked them

Method | Type   
--- | :--- 
new __Kick__(kickedPlayer, moderator, reason) <br> _Kick constructor_ | _constructor_
 readonly property __Reason__ <br> _Get: Get the `Player` being kicked_ | `String`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](..\..\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](..\..\hook\Hook.md)





---

### Public Constructors for [`Kick`](Kick.md)

##### <a id='kick'></a>new __Kick__(kickedPlayer, moderator, reason) 

_Kick constructor_

Argument | Type | Description  
--- | --- | --- 
kickedPlayer | `Player` | kickedPlayer argument
moderator | [`MessageReceiver`](..\..\chat\MessageReceiver.md) | moderator argument
reason | `String` | reason argument

---

### Public Properties for [`Kick`](Kick.md)

##### <a id='reason'></a>public  readonly property __Reason__

_Get: Get the `Player` being kicked_

Get | Description
--- | --- 
`String` | the `Player` kicked /
    public Player getKickedPlayer() {
        return kicked;
    }

    /** Get the [`MessageReceiver`](..\..\chat\MessageReceiver.md) that has issued the kick



---

### Public Methods for [`Kick`](Kick.md)

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
	

