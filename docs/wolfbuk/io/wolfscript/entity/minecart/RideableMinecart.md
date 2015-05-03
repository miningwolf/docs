## RideableMinecart __interface__

>io.wolfscript.entity.minecart.RideableMinecart
>Extends [`Minecart`](..\Minecart.md)

---

### Interface Overview

Represents a minecart that can have certain {@link io.wolfscript.entity.Entity entities} as passengers. Normal passengers include all {@link io.wolfscript.entity.LivingEntity living entities} with the exception of {@link io.wolfscript.entity.IronGolem iron golems}. Non-player entities that meet normal passenger criteria automatically mount these minecarts when close enough.

Method | Type   
--- | :--- 
 |
__Inherited items from [`Minecart`](..\Minecart.md)__ |
 readonly property __DisplayBlockOffset__ <br> _Get: This method exists for legacy reasons to provide backwards_ | `int`
 |
__Inherited items from [`Vehicle`](..\Vehicle.md)__ |
 writeonly property __Velocity__ <br> _Set: Gets the vehicle's velocity._ | `void`







---


### Public Properties for [`Minecart`](..\Minecart.md)

##### <a id='displayblockoffset'></a>public  readonly property __DisplayBlockOffset__

_Get: This method exists for legacy reasons to provide backwards compatibility. It will not exist at runtime and should not be used under any circumstances._

Get | Description
--- | --- 
`int` | The damage /
    @Deprecated
    public int _INVALID_getDamage();

    /** Gets a minecart's damage.



---

### Public Properties for [`Vehicle`](..\Vehicle.md)

##### <a id='velocity'></a>public  writeonly property __Velocity__

_Set: Gets the vehicle's velocity._

Get | Description
--- | --- 
`void` | velocity vector /
    public Vector getVelocity();

    /** Sets the vehicle's velocity.

Set | Type | Description  
--- | --- | --- 
vel | `Vector` | velocity vector


---
---


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

