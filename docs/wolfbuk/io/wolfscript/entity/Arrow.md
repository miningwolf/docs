## Arrow __interface__

>io.wolfscript.entity.Arrow
>Extends [`Projectile`](Projectile.md)

---

### Interface Overview

Represents an arrow.

Method | Type   
--- | :--- 
 writeonly property __Critical__ <br> _Set: Gets the knockback strength for an arrow, which is the_ | `void`
 |
__Inherited items from [`Projectile`](Projectile.md)__ |
 writeonly property __Bounce__ <br> _Set: This method exists for legacy reasons to provide backwards_ | `void`





---


### Public Properties for [`Arrow`](Arrow.md)

##### <a id='critical'></a>public  writeonly property __Critical__

_Set: Gets the knockback strength for an arrow, which is the {@link io.wolfscript.enchantments.Enchantment#KNOCKBACK KnockBack} level of the bow that shot it._

Get | Description
--- | --- 
`void` | the knockback strength value /
    public int getKnockbackStrength();

    /** Sets the knockback strength for an arrow.

Set | Type | Description  
--- | --- | --- 
critical | `boolean` | whether or not it should be critical


---

### Public Properties for [`Projectile`](Projectile.md)

##### <a id='bounce'></a>public  writeonly property __Bounce__

_Set: This method exists for legacy reasons to provide backwards compatibility. It will not exist at runtime and should not be used under any circumstances._

Get | Description
--- | --- 
`void` | the `LivingEntity` that shot this projectile /
    @Deprecated
    public LivingEntity _INVALID_getShooter();

    /** Retrieve the shooter of this projectile.

Set | Type | Description  
--- | --- | --- 
doesBounce | `boolean` | whether or not it should bounce.


---
---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

