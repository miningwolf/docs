## Tameable __interface__

>io.wolfscript.entity.Tameable

---

### Interface Overview

interface Tameable

Method | Type   
--- | :--- 
  property __Owner__ <br> _Get: Gets the current owning AnimalTamer<br>Set: Set this to be owned by given AnimalTamer._ | [`AnimalTamer`](AnimalTamer.md)
 writeonly property __Tamed__ <br> _Set: Sets if this has been tamed. Not necessary if the method setOwner has_ | `void`
 function __isTamed__() <br> _Check if this is tamed_ | `boolean`



---


### Public Properties for [`Tameable`](Tameable.md)

##### <a id='owner'></a>public   property __Owner__

_Get: Gets the current owning AnimalTamer<br>Set: Set this to be owned by given AnimalTamer. <p> If the owner is not null, this will be tamed and will have any current path it is following removed. If the owner is set to null, this will be untamed, and the current owner removed._

Get | Description
--- | --- 
[`AnimalTamer`](AnimalTamer.md) | the owning AnimalTamer, or null if not owned

Set | Type | Description  
--- | --- | --- 
tamer | [`AnimalTamer`](AnimalTamer.md) | the AnimalTamer who should own this


##### <a id='tamed'></a>public  writeonly property __Tamed__

_Set: Sets if this has been tamed. Not necessary if the method setOwner has been used, as it tames automatically. <p> If something is tamed then a player can not tame it through normal methods, even if it does not belong to anyone in particular._

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
tame | `boolean` | true if tame


---

### Public Methods for [`Tameable`](Tameable.md)

##### <a id='istamed'></a>public  function __isTamed__()

_Check if this is tamed <p> If something is tamed then a player can not tame it through normal methods, even if it does not belong to anyone in particular._

Returns | Description
--- | --- 
`boolean` | true if this has been tamed


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

