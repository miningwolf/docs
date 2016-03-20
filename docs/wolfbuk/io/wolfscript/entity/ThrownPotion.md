## ThrownPotion __interface__

>io.wolfscript.entity.ThrownPotion
>Extends [`Projectile`](Projectile.md)

---

### Interface Overview

Represents a thrown potion bottle

Method | Type   
--- | :--- 
 readonly property __Effects__ <br> _Get: Returns the effects that are applied by this potion._ | `Collection<PotionEffect>`
  property __Item__ <br> _Get: Returns a copy of the ItemStack for this thrown potion.<br>Set: Set the ItemStack for this thrown potion._ | `ItemStack`
 |
__Inherited items from [`Projectile`](Projectile.md)__ |
  property __Shooter__ <br> _Get: Retrieve the shooter of this projectile.<br>Set: Set the shooter of this projectile._ | [`ProjectileSource`](../projectiles/ProjectileSource.md)
 writeonly property __Bounce__ <br> _Set: Set whether or not this projectile should bounce or not when it hits_ | `void`
 function __doesBounce__() <br> _Determine if this projectile should bounce or not when it hits._ | `boolean`





---


### Public Properties for [`ThrownPotion`](ThrownPotion.md)

##### <a id='effects'></a>public  readonly property __Effects__

_Get: Returns the effects that are applied by this potion._

Get | Description
--- | --- 
`Collection<PotionEffect>` | The potion effects



##### <a id='item'></a>public   property __Item__

_Get: Returns a copy of the ItemStack for this thrown potion. <p> Altering this copy will not alter the thrown potion directly. If you want to alter the thrown potion, you must use the {@link #setItem(ItemStack) setItemStack} method.<br>Set: Set the ItemStack for this thrown potion. <p> The ItemStack must be of type `Material#SPLASH_POTION` or `Material#LINGERING_POTION`, otherwise an exception is thrown._

Get | Description
--- | --- 
`ItemStack` | A copy of the ItemStack for this thrown potion.

Set | Type | Description  
--- | --- | --- 
item | `ItemStack` | New ItemStack


---

### Public Properties for [`Projectile`](Projectile.md)

##### <a id='shooter'></a>public   property __Shooter__

_Get: Retrieve the shooter of this projectile.<br>Set: Set the shooter of this projectile._

Get | Description
--- | --- 
[`ProjectileSource`](../projectiles/ProjectileSource.md) | the [`ProjectileSource`](../projectiles/ProjectileSource.md) that shot this projectile

Set | Type | Description  
--- | --- | --- 
source | [`ProjectileSource`](../projectiles/ProjectileSource.md) | the [`ProjectileSource`](../projectiles/ProjectileSource.md) that shot this projectile


##### <a id='bounce'></a>public  writeonly property __Bounce__

_Set: Set whether or not this projectile should bounce or not when it hits something._

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
doesBounce | `boolean` | whether or not it should bounce.


---

### Public Methods for [`Projectile`](Projectile.md)

##### <a id='doesbounce'></a>public  function __doesBounce__()

_Determine if this projectile should bounce or not when it hits. <p> If a small fireball does not bounce it will set the target on fire._

Returns | Description
--- | --- 
`boolean` | true if it should bounce.


---
---


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

