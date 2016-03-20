## TippedArrow __interface__

>io.wolfscript.entity.TippedArrow
>Extends [`Arrow`](Arrow.md)

---

### Interface Overview

interface TippedArrow

Method | Type   
--- | :--- 
 |
__Inherited items from [`Arrow`](Arrow.md)__ |
  property __KnockbackStrength__ <br> _Get: Gets the knockback strength for an arrow, which is the<br>Set: Sets the knockback strength for an arrow._ | `int`
 writeonly property __Critical__ <br> _Set: Sets whether or not this arrow should be critical._ | `void`
 function __isCritical__() <br> _Gets whether this arrow is critical._ | `boolean`
 |
__Inherited items from [`Projectile`](Projectile.md)__ |
  property __Shooter__ <br> _Get: Retrieve the shooter of this projectile.<br>Set: Set the shooter of this projectile._ | [`ProjectileSource`](../projectiles/ProjectileSource.md)
 writeonly property __Bounce__ <br> _Set: Set whether or not this projectile should bounce or not when it hits_ | `void`
 function __doesBounce__() <br> _Determine if this projectile should bounce or not when it hits._ | `boolean`







---


### Public Properties for [`Arrow`](Arrow.md)

##### <a id='knockbackstrength'></a>public   property __KnockbackStrength__

_Get: Gets the knockback strength for an arrow, which is the {@link io.wolfscript.enchantments.Enchantment#KNOCKBACK KnockBack} level of the bow that shot it.<br>Set: Sets the knockback strength for an arrow._

Get | Description
--- | --- 
`int` | the knockback strength value

Set | Type | Description  
--- | --- | --- 
knockbackStrength | `int` | the knockback strength value


##### <a id='critical'></a>public  writeonly property __Critical__

_Set: Sets whether or not this arrow should be critical._

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
critical | `boolean` | whether or not it should be critical


---

### Public Methods for [`Arrow`](Arrow.md)

##### <a id='iscritical'></a>public  function __isCritical__()

_Gets whether this arrow is critical. <p> Critical arrows have increased damage and cause particle effects. <p> Critical arrows generally occur when a player fully draws a bow before firing._

Returns | Description
--- | --- 
`boolean` | true if it is critical


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


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

