## PlayerDeath __class__

>io.wolfscript.event.player.PlayerDeath
>Extends [`Hook`](..\..\hook\Hook.md)

---

### Class Overview

Player Death hook

Method | Type   
--- | :--- 
 readonly property __DamageSource__ <br> _Get: Constructs a new PlayerDeath_ | [`DamageSource`](..\..\api\DamageSource.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](..\..\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](..\..\hook\Hook.md)





---


### Public Properties for [`PlayerDeath`](PlayerDeath.md)

##### <a id='damagesource'></a>public  readonly property __DamageSource__

_Get: Constructs a new PlayerDeath_

Get | Description
--- | --- 
[`DamageSource`](..\..\api\DamageSource.md) | the dead `Player` /
    public Player getPlayer() {
        return player;
    }

    /** Gets the message to send on Death



---

### Public Methods for [`PlayerDeath`](PlayerDeath.md)

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
	

