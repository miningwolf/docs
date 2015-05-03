## TNTPrimed __interface__

>io.wolfscript.entity.TNTPrimed
>Extends [`Explosive`](Explosive.md)

---

### Interface Overview

Represents a Primed TNT.

Method | Type   
--- | :--- 
 readonly property __Source__ <br> _Get: Set the number of ticks until the TNT blows up after being primed._ | `Entity`
 |
__Inherited items from [`Explosive`](Explosive.md)__ |
 function __isIncendiary__() <br> _Set the radius affected by this explosive's explosion_ | `boolean`





---


### Public Properties for [`TNTPrimed`](TNTPrimed.md)

##### <a id='source'></a>public  readonly property __Source__

_Get: Set the number of ticks until the TNT blows up after being primed._

Get | Description
--- | --- 
`Entity` | the number of ticks until this TNTPrimed explodes /
    public int getFuseTicks();

    /** Gets the source of this primed TNT. The source is the entity responsible for the creation of this primed TNT. (I.E. player ignites TNT with flint and steel.) Take note that this can be null if there is no suitable source. (created by the {@link io.wolfscript.World#spawn(Location, Class)} method, for example.) <p> The source will become null if the chunk this primed TNT is in is unloaded then reloaded. If the source Entity becomes invalidated for any reason, such being removed from the world, the returned value will be null.



---

### Public Methods for [`Explosive`](Explosive.md)

##### <a id='isincendiary'></a>public  function __isIncendiary__()

_Set the radius affected by this explosive's explosion_

Returns | Description
--- | --- 
`boolean` | the radius of blocks affected /
    public float getYield();

    /** Set whether or not this explosive's explosion causes fire


---
---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

