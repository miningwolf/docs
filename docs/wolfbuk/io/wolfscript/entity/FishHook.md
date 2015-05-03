## FishHook __interface__

>io.wolfscript.entity.FishHook
>Extends [`Projectile`](Projectile.md)

---

### Interface Overview

Represents a fishing hook.

Method | Type   
--- | :--- 
 readonly property __BiteChance__ <br> _Get: Gets the chance of a fish biting._ | `double`
 |
__Inherited items from [`Projectile`](Projectile.md)__ |
 writeonly property __Bounce__ <br> _Set: This method exists for legacy reasons to provide backwards_ | `void`





---


### Public Properties for [`FishHook`](FishHook.md)

##### <a id='bitechance'></a>public  readonly property __BiteChance__

_Get: Gets the chance of a fish biting. <p> 0.0 = No Chance.<br> 1.0 = Instant catch._

Get | Description
--- | --- 
`double` | chance the bite chance



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
	

