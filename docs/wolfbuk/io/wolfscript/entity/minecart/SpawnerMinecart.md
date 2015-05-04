## SpawnerMinecart __interface__

>io.wolfscript.entity.minecart.SpawnerMinecart
>Extends [`Minecart`](../Minecart.md)

---

### Interface Overview

Represents a Minecart with an {@link io.wolfscript.block.CreatureSpawner entity spawner} inside it.

Method | Type   
--- | :--- 
 |
__Inherited items from [`Minecart`](../Minecart.md)__ |
 writeonly property __FlyingVelocityMod__ <br> _Set: Sets the flying velocity modifier. Used for minecarts that are in_ | `void`
  property __DisplayBlockOffset__ <br> _Get: Gets the offset of the display block.<br>Set: Sets the offset of the display block._ | `int`
  property __DisplayBlock__ <br> _Get: Gets the display block for this minecart.<br>Set: Sets the display block for this minecart._ | [`MaterialData`](../../material/MaterialData.md)
  property __DerailedVelocityMod__ <br> _Get: Gets the derailed velocity modifier. Used for minecarts that are on the<br>Set: Sets the derailed velocity modifier. Used for minecarts that are on the_ | `Vector`
  property __Damage__ <br> _Get: Gets a minecart's damage.<br>Set: Sets a minecart's damage._ | `double`
 readonly property __FlyingVelocityMod__ <br> _Get: Gets the flying velocity modifier. Used for minecarts that are in_ | `Vector`
  property __MaxSpeed__ <br> _Get: Gets the maximum speed of a minecart. The speed is unrelated to the<br>Set: Sets the maximum speed of a minecart. Must be nonnegative. Default is_ | `double`
 writeonly property __SlowWhenEmpty__ <br> _Set: Sets whether this minecart will slow down faster without a passenger_ | `void`
 function __isSlowWhenEmpty__() <br> _Returns whether this minecart will slow down faster without a passenger_ | `boolean`
 |
__Inherited items from [`Vehicle`](../Vehicle.md)__ |
  property __Velocity__ <br> _Get: Gets the vehicle's velocity.<br>Set: Sets the vehicle's velocity._ | `Vector`







---


### Public Properties for [`Minecart`](../Minecart.md)

##### <a id='flyingvelocitymod'></a>public  writeonly property __FlyingVelocityMod__

_Set: Sets the flying velocity modifier. Used for minecarts that are in mid-air. A flying minecart's velocity is multiplied by this factor each tick._

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
flying | `Vector` | velocity modifier vector


##### <a id='displayblockoffset'></a>public   property __DisplayBlockOffset__

_Get: Gets the offset of the display block.<br>Set: Sets the offset of the display block._

Get | Description
--- | --- 
`int` | the current block offset for this minecart.

Set | Type | Description  
--- | --- | --- 
offset | `int` | the block offset to set for this minecart.


##### <a id='displayblock'></a>public   property __DisplayBlock__

_Get: Gets the display block for this minecart. This function will return the type AIR if none is set.<br>Set: Sets the display block for this minecart. Passing a null value will set the minecart to have no display block._

Get | Description
--- | --- 
[`MaterialData`](../../material/MaterialData.md) | the block displayed by this minecart.

Set | Type | Description  
--- | --- | --- 
material | [`MaterialData`](../../material/MaterialData.md) | the material to set as display block.


##### <a id='derailedvelocitymod'></a>public   property __DerailedVelocityMod__

_Get: Gets the derailed velocity modifier. Used for minecarts that are on the ground, but not on rails. <p> A derailed minecart's velocity is multiplied by this factor each tick.<br>Set: Sets the derailed velocity modifier. Used for minecarts that are on the ground, but not on rails. A derailed minecart's velocity is multiplied by this factor each tick._

Get | Description
--- | --- 
`Vector` | derailed visible speed

Set | Type | Description  
--- | --- | --- 
derailed | `Vector` | visible speed


##### <a id='damage'></a>public   property __Damage__

_Get: Gets a minecart's damage.<br>Set: Sets a minecart's damage._

Get | Description
--- | --- 
`double` | The damage

Set | Type | Description  
--- | --- | --- 
damage | `double` | over 40 to "kill" a minecart


##### <a id='flyingvelocitymod'></a>public  readonly property __FlyingVelocityMod__

_Get: Gets the flying velocity modifier. Used for minecarts that are in mid-air. A flying minecart's velocity is multiplied by this factor each tick._

Get | Description
--- | --- 
`Vector` | The vector factor



##### <a id='maxspeed'></a>public   property __MaxSpeed__

_Get: Gets the maximum speed of a minecart. The speed is unrelated to the velocity.<br>Set: Sets the maximum speed of a minecart. Must be nonnegative. Default is 0.4D._

Get | Description
--- | --- 
`double` | The max speed

Set | Type | Description  
--- | --- | --- 
speed | `double` | The max speed


##### <a id='slowwhenempty'></a>public  writeonly property __SlowWhenEmpty__

_Set: Sets whether this minecart will slow down faster without a passenger occupying it_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
slow | `boolean` | Whether it will decelerate faster


---

### Public Methods for [`Minecart`](../Minecart.md)

##### <a id='isslowwhenempty'></a>public  function __isSlowWhenEmpty__()

_Returns whether this minecart will slow down faster without a passenger occupying it_

Returns | Description
--- | --- 
`boolean` | Whether it decelerates faster


---

### Public Properties for [`Vehicle`](../Vehicle.md)

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


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

