## PotionEffectApplied __class__

>io.wolfscript.event.entity.PotionEffectApplied
>Extends [`Hook`](..\..\hook\Hook.md)

---

### Class Overview

PotionEffectApplied<br> Called when a [`PotionEffect`](..\..\api\potion\PotionEffect.md) is applied to a [`LivingBase`](..\..\api\entity\living\LivingBase.md)

Method | Type   
--- | :--- 
 writeonly property __PotionEffect__ <br> _Set: Constructs a new PotionEffectApplied_ | `void`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](..\..\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](..\..\hook\Hook.md)





---


### Public Properties for [`PotionEffectApplied`](PotionEffectApplied.md)

##### <a id='potioneffect'></a>public  writeonly property __PotionEffect__

_Set: Constructs a new PotionEffectApplied_

Get | Description
--- | --- 
`void` | the [`LivingBase`](..\..\api\entity\living\LivingBase.md) /
    public LivingBase getEntity() {
        return entity;
    }

    /** Gets the [`PotionEffect`](..\..\api\potion\PotionEffect.md) being applied

Set | Type | Description  
--- | --- | --- 
effect | [`PotionEffect`](..\..\api\potion\PotionEffect.md) | the [`PotionEffect`](..\..\api\potion\PotionEffect.md) being applied /
    public PotionEffectApplied(LivingBase entity, PotionEffect effect) {
        this.entity = entity;
        this.effect = effect;
    }

    /** Gets the [`LivingBase`](..\..\api\entity\living\LivingBase.md) having a [`PotionEffect`](..\..\api\potion\PotionEffect.md) applied to


---

### Public Methods for [`PotionEffectApplied`](PotionEffectApplied.md)

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
	

