## Tameable __interface__

>io.wolfscript.entity.Tameable

---

### Interface Overview

interface Tameable

Method | Type   
--- | :--- 
 writeonly property __Owner__ <br> _Set: Check if this is tamed_ | `void`



---


### Public Properties for [`Tameable`](Tameable.md)

##### <a id='owner'></a>public  writeonly property __Owner__

_Set: Check if this is tamed <p> If something is tamed then a player can not tame it through normal methods, even if it does not belong to anyone in particular._

Get | Description
--- | --- 
`void` | true if this has been tamed /
    public boolean isTamed();

    /** Sets if this has been tamed. Not necessary if the method setOwner has been used, as it tames automatically. <p> If something is tamed then a player can not tame it through normal methods, even if it does not belong to anyone in particular.

Set | Type | Description  
--- | --- | --- 
tamer | [`AnimalTamer`](AnimalTamer.md) | the AnimalTamer who should own this


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

