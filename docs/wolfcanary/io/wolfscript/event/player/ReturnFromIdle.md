## ReturnFromIdle __class__

>io.wolfscript.event.player.ReturnFromIdle
>Extends [`Hook`](..\..\hook\Hook.md)

---

### Class Overview

Called when the Player is no longer idle

Method | Type   
--- | :--- 
new __ReturnFromIdle__(player, idle) <br> _ReturnFromIdle constructor_ | _constructor_
 function __toString__() <br> _Get the `Player` that was Idle_ | `String`
 |
__Inherited items from [`Hook`](..\..\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](..\..\hook\Hook.md)





---

### Public Constructors for [`ReturnFromIdle`](ReturnFromIdle.md)

##### <a id='returnfromidle'></a>new __ReturnFromIdle__(player, idle) 

_ReturnFromIdle constructor_

Argument | Type | Description  
--- | --- | --- 
player | `Player` | player argument
idle | `long` | idle argument

---

### Public Methods for [`ReturnFromIdle`](ReturnFromIdle.md)

##### <a id='tostring'></a>public  function __toString__()

_Get the `Player` that was Idle_

Returns | Description
--- | --- 
`String` | the idle player /
    public Player getPlayer() {
        return this.player;
    }

    /** Gets the amount of time the `Player` was idle


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
	

