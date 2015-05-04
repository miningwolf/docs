## Rotations __class__

>io.wolfscript.api.world.position.Rotations

---

### Class Overview

class Rotations

Method | Type   
--- | :--- 
new __Rotations__(x, y, z) <br> _Rotations constructor_ | _constructor_
  property __X__ <br> _Get: Gets the X-axis rotation<br>Set: Sets the X-axis rotation_ | `float`
  property __Y__ <br> _Get: Gets the Y-axis rotation<br>Set: Sets the Y-axis rotation_ | `float`
  property __Z__ <br> _Get: Gets the Z-axis rotation<br>Set: Sets the Z-axis rotation_ | `float`
static function __fromNBT__() <br> _Deserialized from a `ListTag`_ | [`Rotations`](Rotations.md)
 function __toNBT__() <br> _Serializes into a `ListTag`_ | `ListTag<FloatTag>`



---

### Public Constructors for [`Rotations`](Rotations.md)

##### <a id='rotations'></a>new __Rotations__(x, y, z) 

_Rotations constructor_

Argument | Type | Description  
--- | --- | --- 
x | `float` | x argument
y | `float` | y argument
z | `float` | z argument

---

### Public Properties for [`Rotations`](Rotations.md)

##### <a id='x'></a>public   property __X__

_Get: Gets the X-axis rotation<br>Set: Sets the X-axis rotation_

Get | Description
--- | --- 
`float` | X-axis rotation

Set | Type | Description  
--- | --- | --- 
x | `float` | x axis, value between -180 and 180


##### <a id='y'></a>public   property __Y__

_Get: Gets the Y-axis rotation<br>Set: Sets the Y-axis rotation_

Get | Description
--- | --- 
`float` | Y-axis rotation

Set | Type | Description  
--- | --- | --- 
y | `float` | y axis, value between -180 and 180


##### <a id='z'></a>public   property __Z__

_Get: Gets the Z-axis rotation<br>Set: Sets the Z-axis rotation_

Get | Description
--- | --- 
`float` | Z-axis rotation

Set | Type | Description  
--- | --- | --- 
z | `float` | z axis, value between -180 and 180


---

### Public Methods for [`Rotations`](Rotations.md)

##### <a id='fromnbt'></a>public static function __fromNBT__()

_Deserialized from a `ListTag`_

Returns | Description
--- | --- 
[`Rotations`](Rotations.md) | a new [`Rotations`](Rotations.md) object


##### <a id='tonbt'></a>public  function __toNBT__()

_Serializes into a `ListTag`_

Returns | Description
--- | --- 
`ListTag<FloatTag>` | ListTag


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

