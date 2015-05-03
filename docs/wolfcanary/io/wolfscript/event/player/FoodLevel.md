## FoodLevel __class__

>io.wolfscript.event.player.FoodLevel
>Extends [`Hook`](..\..\hook\Hook.md)

---

### Class Overview

Food level hook. Contains information about a player's food level changes

Method | Type   
--- | :--- 
 writeonly property __NewValue__ <br> _Set: Constructs a new FoodLevel_ | `void`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](..\..\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](..\..\hook\Hook.md)





---


### Public Properties for [`FoodLevel`](FoodLevel.md)

##### <a id='newvalue'></a>public  writeonly property __NewValue__

_Set: Constructs a new FoodLevel_

Get | Description
--- | --- 
`void` | the `Player` /
    public Player getPlayer() {
        return player;
    }

    /** Gets the old (current) level

Set | Type | Description  
--- | --- | --- 
value | `int` | the level to set


---

### Public Methods for [`FoodLevel`](FoodLevel.md)

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
	

