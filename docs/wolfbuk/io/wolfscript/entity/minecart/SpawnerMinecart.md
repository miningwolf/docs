## SpawnerMinecart __interface__

>io.wolfscript.entity.minecart.SpawnerMinecart
>Extends [`Minecart`](..\Minecart.md)

---

### Interface Overview

Represents a Minecart with an {@link io.wolfscript.block.CreatureSpawner entity spawner} inside it.

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
	

