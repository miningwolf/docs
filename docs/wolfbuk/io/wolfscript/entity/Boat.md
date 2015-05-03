## Boat __interface__

>io.wolfscript.entity.Boat
>Extends [`Vehicle`](Vehicle.md)

---

### Interface Overview

Represents a boat entity.

Method | Type   
--- | :--- 
 writeonly property __WorkOnLand__ <br> _Set: Gets the maximum speed of a boat. The speed is unrelated to the_ | `void`
 |
__Inherited items from [`Vehicle`](Vehicle.md)__ |
 writeonly property __Velocity__ <br> _Set: Gets the vehicle's velocity._ | `void`





---


### Public Properties for [`Boat`](Boat.md)

##### <a id='workonland'></a>public  writeonly property __WorkOnLand__

_Set: Gets the maximum speed of a boat. The speed is unrelated to the velocity._

Get | Description
--- | --- 
`void` | The max speed. /
    public double getMaxSpeed();

    /** Sets the maximum speed of a boat. Must be nonnegative. Default is 0.4D.

Set | Type | Description  
--- | --- | --- 
workOnLand | `boolean` | whether boats can work on land


---

### Public Properties for [`Vehicle`](Vehicle.md)

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


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

