## AnvilUse __class__

>io.wolfscript.event.player.AnvilUse
>Extends [`Hook`](..\..\hook\Hook.md)

---

### Class Overview

AnvilUse Hook <p/> Called when a `Player` uses an Anvil<br> Get the `Anvil` and modify it's values directly

Method | Type   
--- | :--- 
 readonly property __Anvil__ <br> _Get: Constructs a new AnvilUse_ | `Anvil`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](..\..\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](..\..\hook\Hook.md)





---


### Public Properties for [`AnvilUse`](AnvilUse.md)

##### <a id='anvil'></a>public  readonly property __Anvil__

_Get: Constructs a new AnvilUse_

Get | Description
--- | --- 
`Anvil` | the `Player` /
    public Player getPlayer() {
        return player;
    }

    /** Gets the `Anvil` in use



---

### Public Methods for [`AnvilUse`](AnvilUse.md)

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
	

