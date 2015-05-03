## PlayerIdle __class__

>io.wolfscript.event.player.PlayerIdle
>Extends [`CancelableHook`](..\..\hook\CancelableHook.md)

---

### Class Overview

Player Idle Hook<p/> Called when a Player is idle for too long and just before them being kicked for idling.<br/> Canceling this hook will stop the kicking process.<br/> NOTE: This hook only fires if PlayerIdle time is set above 0 in the sever.cfg and for `Player`(s) who aren't set to ignoresRestrictions

Method | Type   
--- | :--- 
 function __toString__() <br> _Constructs a new PlayerIdle_ | `String`
 |
__Inherited items from [`CancelableHook`](..\..\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](..\..\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](..\..\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](..\..\hook\Hook.md)







---


### Public Methods for [`PlayerIdle`](PlayerIdle.md)

##### <a id='tostring'></a>public  function __toString__()

_Constructs a new PlayerIdle_

Returns | Description
--- | --- 
`String` | idle `Player` /
    public Player getPlayer() {
        return this.player;
    }

    /** Gets the number of milliseconds the player has been idle


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
	

