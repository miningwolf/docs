## EnderPearl __interface__

>io.wolfscript.entity.EnderPearl
>Extends [`Projectile`](Projectile.md)

---

### Interface Overview

Represents a thrown Ender Pearl entity

Method | Type   
--- | :--- 
 |
__Inherited items from [`Projectile`](Projectile.md)__ |
  property __Shooter__ <br> _Get: This method exists for legacy reasons to provide backwards<br>Set: This method exists for legacy reasons to provide backwards_ | [`ProjectileSource`](../projectiles/ProjectileSource.md)
 writeonly property __Bounce__ <br> _Set: Set whether or not this projectile should bounce or not when it hits_ | `void`
 function __doesBounce__() <br> _Determine if this projectile should bounce or not when it hits._ | `boolean`





---


### Public Properties for [`Projectile`](Projectile.md)

##### <a id='shooter'></a>public   property __Shooter__

_Get: This method exists for legacy reasons to provide backwards compatibility. It will not exist at runtime and should not be used under any circumstances.<br>Set: This method exists for legacy reasons to provide backwards compatibility. It will not exist at runtime and should not be used under any circumstances._

Get | Description
--- | --- 
[`ProjectileSource`](../projectiles/ProjectileSource.md) | the `LivingEntity` that shot this projectile /
    @Deprecated
    public LivingEntity _INVALID_getShooter();

    /** Retrieve the shooter of this projectile.

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


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

