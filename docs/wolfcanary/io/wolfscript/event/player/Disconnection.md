## Disconnection __class__

>io.wolfscript.event.player.Disconnection
>Extends [`Hook`](..\..\hook\Hook.md)

---

### Class Overview

Disconnection hook. Contains information about a `Player` disconnecting.

Method | Type   
--- | :--- 
new __Disconnection__(player, reason, leave) <br> _Disconnection constructor_ | _constructor_
 writeonly property __Hidden__ <br> _Set: Gets the `Player` disconnected_ | `void`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](..\..\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](..\..\hook\Hook.md)





---

### Public Constructors for [`Disconnection`](Disconnection.md)

##### <a id='disconnection'></a>new __Disconnection__(player, reason, leave) 

_Disconnection constructor_

Argument | Type | Description  
--- | --- | --- 
player | `Player` | player argument
reason | `String` | reason argument
leave | `String` | leave argument

---

### Public Properties for [`Disconnection`](Disconnection.md)

##### <a id='hidden'></a>public  writeonly property __Hidden__

_Set: Gets the `Player` disconnected_

Get | Description
--- | --- 
`void` | the `Player` /
    public Player getPlayer() {
        return player;
    }

    /** Get the reason for disconnect (if applicable)

Set | Type | Description  
--- | --- | --- 
hidden | `boolean` | `true` for hiding message; `false` for not


---

### Public Methods for [`Disconnection`](Disconnection.md)

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
	

