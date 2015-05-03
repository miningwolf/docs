## EntityDeath __class__

>io.wolfscript.event.entity.EntityDeath
>Extends [`Hook`](..\..\hook\Hook.md)

---

### Class Overview

EntityDeath <p/> Called when a Entity (other than a `Player`) dies.<br> For `Player` death, use [`PlayerDeath`](..\player\PlayerDeath.md)

Method | Type   
--- | :--- 
final function __toString__() <br> _Constructs a new EntityDeath_ | `String`
 |
__Inherited items from [`Hook`](..\..\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](..\..\hook\Hook.md)





---


### Public Methods for [`EntityDeath`](EntityDeath.md)

##### <a id='tostring'></a>public final function __toString__()

_Constructs a new EntityDeath_

Returns | Description
--- | --- 
`String` | the dying entity /
    public Entity getEntity() {
        return entity;
    }

    /** Gets the [`DamageSource`](..\..\api\DamageSource.md) that killed the [`Entity`](..\..\api\entity\Entity.md)


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
	

