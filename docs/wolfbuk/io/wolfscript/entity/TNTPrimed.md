## TNTPrimed __interface__

>io.wolfscript.entity.TNTPrimed
>Extends [`Explosive`](Explosive.md)

---

### Interface Overview

Represents a Primed TNT.

Method | Type   
--- | :--- 
  property __FuseTicks__ <br> _Get: Retrieve the number of ticks until the explosion of this TNTPrimed<br>Set: Set the number of ticks until the TNT blows up after being primed._ | `int`
 readonly property __Source__ <br> _Get: Gets the source of this primed TNT. The source is the entity_ | `Entity`
 |
__Inherited items from [`Explosive`](Explosive.md)__ |
  property __Yield__ <br> _Get: Return the radius or yield of this explosive's explosion<br>Set: Set the radius affected by this explosive's explosion_ | `float`
 writeonly property __IsIncendiary__ <br> _Set: Set whether or not this explosive's explosion causes fire_ | `void`
 function __isIncendiary__() <br> _Return whether or not this explosive creates a fire when exploding_ | `boolean`





---


### Public Properties for [`TNTPrimed`](TNTPrimed.md)

##### <a id='fuseticks'></a>public   property __FuseTicks__

_Get: Retrieve the number of ticks until the explosion of this TNTPrimed entity<br>Set: Set the number of ticks until the TNT blows up after being primed._

Get | Description
--- | --- 
`int` | the number of ticks until this TNTPrimed explodes

Set | Type | Description  
--- | --- | --- 
fuseTicks | `int` | The fuse ticks


##### <a id='source'></a>public  readonly property __Source__

_Get: Gets the source of this primed TNT. The source is the entity responsible for the creation of this primed TNT. (I.E. player ignites TNT with flint and steel.) Take note that this can be null if there is no suitable source. (created by the {@link io.wolfscript.World#spawn(Location, Class)} method, for example.) <p> The source will become null if the chunk this primed TNT is in is unloaded then reloaded. If the source Entity becomes invalidated for any reason, such being removed from the world, the returned value will be null._

Get | Description
--- | --- 
`Entity` | the source of this primed TNT



---

### Public Properties for [`Explosive`](Explosive.md)

##### <a id='yield'></a>public   property __Yield__

_Get: Return the radius or yield of this explosive's explosion<br>Set: Set the radius affected by this explosive's explosion_

Get | Description
--- | --- 
`float` | the radius of blocks affected

Set | Type | Description  
--- | --- | --- 
yield | `float` | The explosive yield


##### <a id='isincendiary'></a>public  writeonly property __IsIncendiary__

_Set: Set whether or not this explosive's explosion causes fire_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
isIncendiary | `boolean` | Whether it should cause fire


---

### Public Methods for [`Explosive`](Explosive.md)

##### <a id='isincendiary'></a>public  function __isIncendiary__()

_Return whether or not this explosive creates a fire when exploding_

Returns | Description
--- | --- 
`boolean` | true if the explosive creates fire, false otherwise


---
---


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

