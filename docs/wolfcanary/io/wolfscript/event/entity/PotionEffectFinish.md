## PotionEffectFinish __class__

>io.wolfscript.event.entity.PotionEffectFinish
>Extends [`Hook`](..\..\hook\Hook.md)

---

### Class Overview

PotionEffectFinish<br> Called when a [`PotionEffect`](..\..\api\potion\PotionEffect.md) finishes it's effect on a [`LivingBase`](..\..\api\entity\living\LivingBase.md)

Method | Type   
--- | :--- 
 readonly property __PotionEffect__ <br> _Get: Constructs a new PotionEffectFinshHook_ | [`PotionEffect`](..\..\api\potion\PotionEffect.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](..\..\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](..\..\hook\Hook.md)





---


### Public Properties for [`PotionEffectFinish`](PotionEffectFinish.md)

##### <a id='potioneffect'></a>public  readonly property __PotionEffect__

_Get: Constructs a new PotionEffectFinshHook_

Get | Description
--- | --- 
[`PotionEffect`](..\..\api\potion\PotionEffect.md) | the [`LivingBase`](..\..\api\entity\living\LivingBase.md) /
    public LivingBase getEntity() {
        return entity;
    }

    /** Gets the [`PotionEffect`](..\..\api\potion\PotionEffect.md) finishing



---

### Public Methods for [`PotionEffectFinish`](PotionEffectFinish.md)

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
	

