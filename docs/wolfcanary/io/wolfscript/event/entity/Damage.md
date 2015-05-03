## Damage __class__

>io.wolfscript.event.entity.Damage
>Extends [`CancelableHook`](..\..\hook\CancelableHook.md)

---

### Class Overview

Damage hook. Contains information about an entity taking damage.

Method | Type   
--- | :--- 
 writeonly property __DamageDealt__ <br> _Set: Constructs a new Damage_ | `void`
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


### Public Properties for [`Damage`](Damage.md)

##### <a id='damagedealt'></a>public  writeonly property __DamageDealt__

_Set: Constructs a new Damage_

Get | Description
--- | --- 
`void` | attacker if there is one, `null` otherwise /
    public Entity getAttacker() {
        return attacker;
    }

    /** Gets the defending [`Entity`](..\..\api\entity\Entity.md)

Set | Type | Description  
--- | --- | --- 
dealt | `float` | the amount of damage to be dealt /
    public Damage(Entity attacker, Entity defender, DamageSource source, float dealt) {
        this.attacker = attacker;
        this.defender = defender;
        this.source = source;
        this.dealt = dealt;
    }

    /** Gets the attacking [`EntityLiving`](..\..\api\entity\living\EntityLiving.md) if present


---

### Public Methods for [`Damage`](Damage.md)

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
	

