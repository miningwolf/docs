## Explosive __interface__

>io.wolfscript.entity.Explosive
>Extends `Entity`

---

### Interface Overview

A representation of an explosive entity

Method | Type   
--- | :--- 
  property __Yield__ <br> _Get: Return the radius or yield of this explosive's explosion<br>Set: Set the radius affected by this explosive's explosion_ | `float`
 writeonly property __IsIncendiary__ <br> _Set: Set whether or not this explosive's explosion causes fire_ | `void`
 function __isIncendiary__() <br> _Return whether or not this explosive creates a fire when exploding_ | `boolean`



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


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

