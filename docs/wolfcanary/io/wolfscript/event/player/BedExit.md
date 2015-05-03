## BedExit __class__

>io.wolfscript.event.player.BedExit
>Extends [`Hook`](..\..\hook\Hook.md)

---

### Class Overview

Bed exit hook, called when a player leaves a bed

Method | Type   
--- | :--- 
 readonly property __Bed__ <br> _Get: Create a new BedExit_ | [`Block`](..\..\api\world\blocks\Block.md)
 function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](..\..\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](..\..\hook\Hook.md)





---


### Public Properties for [`BedExit`](BedExit.md)

##### <a id='bed'></a>public  readonly property __Bed__

_Get: Create a new BedExit_

Get | Description
--- | --- 
[`Block`](..\..\api\world\blocks\Block.md) | player /
    public Player getPlayer() {
        return player;
    }

    /** Get the bed [`Block`](..\..\api\world\blocks\Block.md) the `Player` is leaving



---

### Public Methods for [`BedExit`](BedExit.md)

##### <a id='tostring'></a>public  function __toString__()

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
	

