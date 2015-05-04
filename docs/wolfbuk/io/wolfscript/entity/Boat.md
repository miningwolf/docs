## Boat __interface__

>io.wolfscript.entity.Boat
>Extends [`Vehicle`](Vehicle.md)

---

### Interface Overview

Represents a boat entity.

Method | Type   
--- | :--- 
  property __MaxSpeed__ <br> _Get: Gets the maximum speed of a boat. The speed is unrelated to the<br>Set: Sets the maximum speed of a boat. Must be nonnegative. Default is 0.4D._ | `double`
  property __OccupiedDeceleration__ <br> _Get: Gets the deceleration rate (newSpeed = curSpeed<br>Set: Sets the deceleration rate (newSpeed = curSpeed_ | `double`
  property __UnoccupiedDeceleration__ <br> _Get: Gets the deceleration rate (newSpeed = curSpeed<br>Set: Sets the deceleration rate (newSpeed = curSpeed_ | `double`
  property __WorkOnLand__ <br> _Get: Get whether boats can work on land.<br>Set: Set whether boats can work on land._ | `boolean`
 |
__Inherited items from [`Vehicle`](Vehicle.md)__ |
  property __Velocity__ <br> _Get: Gets the vehicle's velocity.<br>Set: Sets the vehicle's velocity._ | `Vector`





---


### Public Properties for [`Boat`](Boat.md)

##### <a id='maxspeed'></a>public   property __MaxSpeed__

_Get: Gets the maximum speed of a boat. The speed is unrelated to the velocity.<br>Set: Sets the maximum speed of a boat. Must be nonnegative. Default is 0.4D._

Get | Description
--- | --- 
`double` | The max speed.

Set | Type | Description  
--- | --- | --- 
speed | `double` | The max speed.


##### <a id='occupieddeceleration'></a>public   property __OccupiedDeceleration__

_Get: Gets the deceleration rate (newSpeed = curSpeed rate) of occupied boats. The default is 0.2.<br>Set: Sets the deceleration rate (newSpeed = curSpeed rate) of occupied boats. Setting this to a higher value allows for quicker acceleration. The default is 0.2._

Get | Description
--- | --- 
`double` | The rate of deceleration

Set | Type | Description  
--- | --- | --- 
rate | `double` | deceleration rate


##### <a id='unoccupieddeceleration'></a>public   property __UnoccupiedDeceleration__

_Get: Gets the deceleration rate (newSpeed = curSpeed rate) of unoccupied boats. The default is -1. Values below 0 indicate that no additional deceleration is imposed.<br>Set: Sets the deceleration rate (newSpeed = curSpeed rate) of unoccupied boats. Setting this to a higher value allows for quicker deceleration of boats when a player disembarks. The default is -1. Values below 0 indicate that no additional deceleration is imposed._

Get | Description
--- | --- 
`double` | The rate of deceleration

Set | Type | Description  
--- | --- | --- 
rate | `double` | deceleration rate


##### <a id='workonland'></a>public   property __WorkOnLand__

_Get: Get whether boats can work on land.<br>Set: Set whether boats can work on land._

Get | Description
--- | --- 
`boolean` | whether boats can work on land

Set | Type | Description  
--- | --- | --- 
workOnLand | `boolean` | whether boats can work on land


---

### Public Properties for [`Vehicle`](Vehicle.md)

##### <a id='velocity'></a>public   property __Velocity__

_Get: Gets the vehicle's velocity.<br>Set: Sets the vehicle's velocity._

Get | Description
--- | --- 
`Vector` | velocity vector

Set | Type | Description  
--- | --- | --- 
vel | `Vector` | velocity vector


---
---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

