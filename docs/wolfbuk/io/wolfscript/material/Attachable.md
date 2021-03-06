## Attachable __interface__

>io.wolfscript.material.Attachable
>Extends [`Directional`](Directional.md)

---

### Interface Overview

Indicates that a block can be attached to another block

Method | Type   
--- | :--- 
 readonly property __AttachedFace__ <br> _Get: Gets the face that this block is attached on_ | [`BlockFace`](../block/BlockFace.md)
 |
__Inherited items from [`Directional`](Directional.md)__ |
 readonly property __Facing__ <br> _Get: Gets the direction this block is facing_ | [`BlockFace`](../block/BlockFace.md)
 writeonly property __FacingDirection__ <br> _Set: Sets the direction that this block is facing in_ | `void`





---


### Public Properties for [`Attachable`](Attachable.md)

##### <a id='attachedface'></a>public  readonly property __AttachedFace__

_Get: Gets the face that this block is attached on_

Get | Description
--- | --- 
[`BlockFace`](../block/BlockFace.md) | BlockFace attached to



---

### Public Properties for [`Directional`](Directional.md)

##### <a id='facing'></a>public  readonly property __Facing__

_Get: Gets the direction this block is facing_

Get | Description
--- | --- 
[`BlockFace`](../block/BlockFace.md) | the direction this block is facing



##### <a id='facingdirection'></a>public  writeonly property __FacingDirection__

_Set: Sets the direction that this block is facing in_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
face | [`BlockFace`](../block/BlockFace.md) | The facing direction


---


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

