## ThrownPotion __interface__

>io.wolfscript.entity.ThrownPotion
>Extends [`Projectile`](Projectile.md)

---

### Interface Overview

Represents a thrown potion bottle

Method | Type   
--- | :--- 
 writeonly property __Item__ <br> _Set: Returns the effects that are applied by this potion._ | `void`
 |
__Inherited items from [`Projectile`](Projectile.md)__ |
 writeonly property __Bounce__ <br> _Set: This method exists for legacy reasons to provide backwards_ | `void`





---


### Public Properties for [`ThrownPotion`](ThrownPotion.md)

##### <a id='item'></a>public  writeonly property __Item__

_Set: Returns the effects that are applied by this potion._

Get | Description
--- | --- 
`void` | The potion effects /
    public Collection<PotionEffect> getEffects();

    /** Returns a copy of the ItemStack for this thrown potion. <p> Altering this copy will not alter the thrown potion directly. If you want to alter the thrown potion, you must use the {@link #setItem(ItemStack) setItemStack} method.

Set | Type | Description  
--- | --- | --- 
item | `ItemStack` | New ItemStack


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
	

