## HeldItemChange __class__

>io.wolfscript.event.player.HeldItemChange
>Extends [`Hook`](..\..\hook\Hook.md)

---

### Class Overview

Held item change hook. Contains information about a player's held slot changes

Method | Type   
--- | :--- 
 writeonly property __NewValue__ <br> _Set: Constructs a new HeldItemChange_ | `void`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](..\..\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](..\..\hook\Hook.md)





---


### Public Properties for [`HeldItemChange`](HeldItemChange.md)

##### <a id='newvalue'></a>public  writeonly property __NewValue__

_Set: Constructs a new HeldItemChange_

Get | Description
--- | --- 
`void` | the `Player` /
    public Player getPlayer() {
        return player;
    }

    /** Gets the old (current) held slot

Set | Type | Description  
--- | --- | --- 
value | `int` | the held slot to set


---

### Public Methods for [`HeldItemChange`](HeldItemChange.md)

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
	
