## Connection __class__

>io.wolfscript.event.player.Connection
>Extends [`Hook`](..\..\hook\Hook.md)

---

### Class Overview

Connection hook. Contains information about a player connecting.

Method | Type   
--- | :--- 
new __Connection__(player, message, firstTime) <br> _Connection constructor_ | _constructor_
 writeonly property __Hidden__ <br> _Set: Gets the `Player`_ | `void`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](..\..\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](..\..\hook\Hook.md)





---

### Public Constructors for [`Connection`](Connection.md)

##### <a id='connection'></a>new __Connection__(player, message, firstTime) 

_Connection constructor_

Argument | Type | Description  
--- | --- | --- 
player | `Player` | player argument
message | `String` | message argument
firstTime | `boolean` | firstTime argument

---

### Public Properties for [`Connection`](Connection.md)

##### <a id='hidden'></a>public  writeonly property __Hidden__

_Set: Gets the `Player`_

Get | Description
--- | --- 
`void` | the `Player` /
    public Player getPlayer() {
        return player;
    }

    /** Gets the message sent to all

Set | Type | Description  
--- | --- | --- 
hidden | `boolean` | `true` to hide message; `false` for not


---

### Public Methods for [`Connection`](Connection.md)

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
	

