## VillagerTrade __class__

>io.wolfscript.event.player.VillagerTrade
>Extends [`CancelableHook`](..\..\hook\CancelableHook.md)

---

### Class Overview

VillagerTrade Hook<br> Called when a `Player` trades with a [`VillagerTrade`](..\..\api\VillagerTrade.md) from an `Villager`

Method | Type   
--- | :--- 
 readonly property __Trade__ <br> _Get: Constructs a new VillagerTrade_ | [`VillagerTrade`](..\..\api\VillagerTrade.md)
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


### Public Properties for [`VillagerTrade`](VillagerTrade.md)

##### <a id='trade'></a>public  readonly property __Trade__

_Get: Constructs a new VillagerTrade_

Get | Description
--- | --- 
[`VillagerTrade`](..\..\api\VillagerTrade.md) | the `Player` /
    public Player getPlayer() {
        return player;
    }

    /** Gets the `Villager` merchant



---

### Public Methods for [`VillagerTrade`](VillagerTrade.md)

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
	

