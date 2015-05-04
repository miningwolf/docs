## Vector3D __class__

>io.wolfscript.api.world.position.Vector3D
>Extends [`Position`](Position.md)

---

### Class Overview

A Vector3D represents a point ins in the 3D space. That can be a block or a player coodinate

Method | Type   
--- | :--- 
 readonly property __Magnitude__ <br> _Get: Get the length (or magnitude) of this vector_ | `double`
 function __dot__(v) <br> _Calculates the dot product of this vector with another_ | `double`
static function __fromString__(in) <br> _fromString method_ | [`Vector3D`](Vector3D.md)
 function __copy__() <br> _copy method_ | [`Vector3D`](Vector3D.md)
 function __equals__(obj) <br> _Checks if another object equals this one_ | `boolean`
 function __angle__(v) <br> _Calculates the angle between this vector and another_ | `double`
 function __add__(toAdd) <br> _Add the given Vector to this Vector and return the result as new Vector3D_ | [`Vector3D`](Vector3D.md)
static function __getDistance__(v1, v2) <br> _Retrieve the distance between 2 given vectors_ | `double`
 function __getDistance__(v) <br> _Get the distance between this and the given vector_ | `double`
static function __getCenterPoint__(p1, p2) <br> _Calculates the center point between 2 points_ | [`Vector3D`](Vector3D.md)
static function __getMinimum__(v1, v2) <br> _Gets the minimum components of two vectors._ | [`Vector3D`](Vector3D.md)
 function __isWithin__(min, max) <br> _Check if this vector is contained within the range of the given two._ | `boolean`
 function __hashCode__() <br> _Return a hashcode for this object_ | `int`
static function __getMinor__(v1, v2) <br> _Retrieve the minor of two vectors (the one nearer to 0,0,0_ | [`Vector3D`](Vector3D.md)
 function __getSquareDistance__(v) <br> _Get the square distance between this and the given vector._ | `double`
static function __getMaximum__(v1, v2) <br> _Gets the maximum components of two vectors._ | [`Vector3D`](Vector3D.md)
static function __getMajor__(v1, v2) <br> _Retrieve the major of two vectors (the one farther away from 0,0,0)_ | [`Vector3D`](Vector3D.md)
 function __multiply__(scalar) <br> _Scalar multiply this vector with a given factor and return the result as new Vector3D_ | [`Vector3D`](Vector3D.md)
 function __subtract__(toRemove) <br> _Subtract the given Vector from this Vector and return the result as new Vector3D_ | [`Vector3D`](Vector3D.md)
 function __toString__() <br> _toString method_ | `String`
static final var __zero__ <br> _This is the nullvector (0,0,0)_ | [`Vector3D`](Vector3D.md)
static final var __forward__ <br> _forward field_ | [`Vector3D`](Vector3D.md)
 |
__Inherited items from [`Position`](Position.md)__ |
new __Position__(x, y, z) <br> _Position constructor_ | _constructor_
new __Position__(x, y, z) <br> _Position constructor_ | _constructor_
new __Position__(x, y, z) <br> _Position constructor_ | _constructor_
new __Position__() <br> _Position constructor_ | _constructor_
new __Position__(templ) <br> _Copy constructor copies the primitives_ | _constructor_
 writeonly property __X__ <br> _Get: Retrieve X component of Vector<br>Set: Set x component with native double<br>Set: Set x component with a int2double conversion_ | `double`
 readonly property __BlockY__ <br> _Get: Returns a reliable block ordinate_ | `int`
 readonly property __BlockX__ <br> _Get: Returns a reliable block ordinate_ | `int`
 readonly property __BlockZ__ <br> _Get: Returns a reliable block ordinate_ | `int`
 writeonly property __Z__ <br> _Get: Retrieve Z component of Vector<br>Set: Set z component with a int2double conversion<br>Set: Set y component with native double_ | `double`
 writeonly property __Y__ <br> _Get: Retrieve Y component of Vector<br>Set: Set y component with a int2double conversion<br>Set: Set y component with native double_ | `double`
 writeonly property __X__ <br> _Get: Retrieve X component of Vector<br>Set: Set x component with native double<br>Set: Set x component with a int2double conversion_ | `double`
 writeonly property __Y__ <br> _Get: Retrieve Y component of Vector<br>Set: Set y component with a int2double conversion<br>Set: Set y component with native double_ | `double`
 writeonly property __Z__ <br> _Get: Retrieve Z component of Vector<br>Set: Set z component with a int2double conversion<br>Set: Set y component with native double_ | `double`
 function __moveX__(x) <br> _Moves the position a specified amount in the X direction_ | `void`
 function __copy__() <br> _copy method_ | [`Position`](Position.md)
 function __moveX__(x) <br> _Moves the position a specified amount in the X direction_ | `void`
 function __equals__(obj) <br> _Checks if another object equals this one_ | `boolean`
static function __fromDataAccess__(pda) <br> _fromDataAccess method_ | [`Position`](Position.md)
 function __moveZ__(z) <br> _Moves the position a specified amount in the Z direction_ | `void`
 function __move__(x, y, z) <br> _Moves the position a specified amount in all directions_ | `void`
 function __moveY__(y) <br> _Moves the position a specified amount in the Y direction_ | `void`
 function __moveY__(y) <br> _Moves the position a specified amount in the Y direction_ | `void`
 function __moveZ__(z) <br> _Moves the position a specified amount in the Z direction_ | `void`
 function __hashCode__() <br> _Return a hashcode for this object_ | `int`
 function __move__(x, y, z) <br> _Moves the position a specified amount in all directions_ | `void`
 function __toDataAccess__(pda) <br> _toDataAccess method_ | [`PositionDataAccess`](../../../database/PositionDataAccess.md)
 function __toString__() <br> _toString method_ | `String`
 function __transform__(face) <br> _Transforms this position 1 block in the given [`BlockFace`](../blocks/BlockFace.md) direction_ | `void`





---


### Public Properties for [`Vector3D`](Vector3D.md)

##### <a id='magnitude'></a>public  readonly property __Magnitude__

_Get: Get the length (or magnitude) of this vector_

Get | 
--- | 
`double` |



---

### Public Methods for [`Vector3D`](Vector3D.md)

##### <a id='dot'></a>public  function __dot__(v)

_Calculates the dot product of this vector with another_

Argument | Type | Description  
--- | --- | --- 
v | [`Vector3D`](Vector3D.md) | Vector

Returns | Description
--- | --- 
`double` | dot product


##### <a id='fromstring'></a>public static function __fromString__(in)

_fromString method_

Argument | Type | Description  
--- | --- | --- 
in | `String` | in argument

Returns | 
--- | 
[`Vector3D`](Vector3D.md) |


##### <a id='copy'></a>public  function __copy__()

_copy method_

Returns | 
--- | 
[`Vector3D`](Vector3D.md) |


##### <a id='equals'></a>public  function __equals__(obj)

_Checks if another object equals this one_

Argument | Type | Description  
--- | --- | --- 
obj | `Object` | obj argument

Returns | Description
--- | --- 
`boolean` | whether the other object has the same values for x,y,z


##### <a id='angle'></a>public  function __angle__(v)

_Calculates the angle between this vector and another_

Argument | Type | Description  
--- | --- | --- 
v | [`Vector3D`](Vector3D.md) | Vector

Returns | Description
--- | --- 
`double` | angle between vectors


##### <a id='add'></a>public  function __add__(toAdd)

_Add the given Vector to this Vector and return the result as new Vector3D_

Argument | Type | Description  
--- | --- | --- 
toAdd | [`Vector3D`](Vector3D.md) | toAdd argument

Returns | Description
--- | --- 
[`Vector3D`](Vector3D.md) | Vector3D result of addition


##### <a id='getdistance'></a>public static function __getDistance__(v1, v2)

_Retrieve the distance between 2 given vectors_

Argument | Type | Description  
--- | --- | --- 
v1 | [`Vector3D`](Vector3D.md) | v1 argument
v2 | [`Vector3D`](Vector3D.md) | v2 argument

Returns | Description
--- | --- 
`double` | double The Distance


##### <a id='getdistance'></a>public  function __getDistance__(v)

_Get the distance between this and the given vector_

Argument | Type | Description  
--- | --- | --- 
v | [`Position`](Position.md) | v argument

Returns | 
--- | 
`double` |


##### <a id='getcenterpoint'></a>public static function __getCenterPoint__(p1, p2)

_Calculates the center point between 2 points_

Argument | Type | Description  
--- | --- | --- 
p1 | [`Position`](Position.md) | first point
p2 | [`Position`](Position.md) | second point

Returns | Description
--- | --- 
[`Vector3D`](Vector3D.md) | Vector between p1 and p2


##### <a id='getminimum'></a>public static function __getMinimum__(v1, v2)

_Gets the minimum components of two vectors._

Argument | Type | Description  
--- | --- | --- 
v1 | [`Position`](Position.md) | v1 argument
v2 | [`Position`](Position.md) | v2 argument

Returns | Description
--- | --- 
[`Vector3D`](Vector3D.md) | minimum


##### <a id='iswithin'></a>public  function __isWithin__(min, max)

_Check if this vector is contained within the range of the given two. It can be seen as a AABB collision test._

Argument | Type | Description  
--- | --- | --- 
min | [`Position`](Position.md) | min argument
max | [`Position`](Position.md) | max argument

Returns | 
--- | 
`boolean` |


##### <a id='hashcode'></a>public  function __hashCode__()

_Return a hashcode for this object_

Returns | 
--- | 
`int` |


##### <a id='getminor'></a>public static function __getMinor__(v1, v2)

_Retrieve the minor of two vectors (the one nearer to 0,0,0_

Argument | Type | Description  
--- | --- | --- 
v1 | [`Vector3D`](Vector3D.md) | v1 argument
v2 | [`Vector3D`](Vector3D.md) | v2 argument

Returns | Description
--- | --- 
[`Vector3D`](Vector3D.md) | Minor Vector, null if something went wrong


##### <a id='getsquaredistance'></a>public  function __getSquareDistance__(v)

_Get the square distance between this and the given vector. This is substantially faster than the standard getDistance but you'll have to squre the numbers you're checking against yourself_

Argument | Type | Description  
--- | --- | --- 
v | [`Position`](Position.md) | v argument

Returns | 
--- | 
`double` |


##### <a id='getmaximum'></a>public static function __getMaximum__(v1, v2)

_Gets the maximum components of two vectors._

Argument | Type | Description  
--- | --- | --- 
v1 | [`Position`](Position.md) | v1 argument
v2 | [`Position`](Position.md) | v2 argument

Returns | Description
--- | --- 
[`Vector3D`](Vector3D.md) | minimum


##### <a id='getmajor'></a>public static function __getMajor__(v1, v2)

_Retrieve the major of two vectors (the one farther away from 0,0,0)_

Argument | Type | Description  
--- | --- | --- 
v1 | [`Vector3D`](Vector3D.md) | v1 argument
v2 | [`Vector3D`](Vector3D.md) | v2 argument

Returns | Description
--- | --- 
[`Vector3D`](Vector3D.md) | Major Vector, null if something went wrong


##### <a id='multiply'></a>public  function __multiply__(scalar)

_Scalar multiply this vector with a given factor and return the result as new Vector3D_

Argument | Type | Description  
--- | --- | --- 
scalar | `double` | scalar argument

Returns | Description
--- | --- 
[`Vector3D`](Vector3D.md) | scalar product as Vector3D


##### <a id='subtract'></a>public  function __subtract__(toRemove)

_Subtract the given Vector from this Vector and return the result as new Vector3D_

Argument | Type | Description  
--- | --- | --- 
toRemove | [`Vector3D`](Vector3D.md) | toRemove argument

Returns | Description
--- | --- 
[`Vector3D`](Vector3D.md) | Vector3D result of subtraction


##### <a id='tostring'></a>public  function __toString__()

_toString method_

Returns | 
--- | 
`String` |


---

### Public Fields for [`Vector3D`](Vector3D.md)

##### <a id='zero'></a>public static final var __zero__

_This is the nullvector (0,0,0)_

>Returns
>  [`Vector3D`](Vector3D.md)

##### <a id='forward'></a>public static final var __forward__

_forward field_

>Returns
>  [`Vector3D`](Vector3D.md)

---
### Public Constructors for [`Position`](Position.md)

##### <a id='position'></a>new __Position__(x, y, z) 

_Position constructor_

Argument | Type | Description  
--- | --- | --- 
x | `double` | x argument
y | `double` | y argument
z | `double` | z argument

##### <a id='position'></a>new __Position__(x, y, z) 

_Position constructor_

Argument | Type | Description  
--- | --- | --- 
x | `int` | x argument
y | `int` | y argument
z | `int` | z argument

##### <a id='position'></a>new __Position__(x, y, z) 

_Position constructor_

Argument | Type | Description  
--- | --- | --- 
x | `float` | x argument
y | `float` | y argument
z | `float` | z argument

##### <a id='position'></a>new __Position__() 

_Position constructor_


##### <a id='position'></a>new __Position__(templ) 

_Copy constructor copies the primitives_

Argument | Type | Description  
--- | --- | --- 
templ | [`Position`](Position.md) | templ argument

---

### Public Properties for [`Position`](Position.md)

##### <a id='x'></a>public  writeonly property __X__

_Get: Retrieve X component of Vector<br>Set: Set x component with native double<br>Set: Set x component with a int2double conversion_

Get | Description
--- | --- 
`double` | double x

Set | Type | Description  
--- | --- | --- 
x | `int` | x argument


##### <a id='blocky'></a>public  readonly property __BlockY__

_Get: Returns a reliable block ordinate_

Get | 
--- | 
`int` |



##### <a id='blockx'></a>public  readonly property __BlockX__

_Get: Returns a reliable block ordinate_

Get | 
--- | 
`int` |



##### <a id='blockz'></a>public  readonly property __BlockZ__

_Get: Returns a reliable block ordinate_

Get | 
--- | 
`int` |



##### <a id='z'></a>public  writeonly property __Z__

_Get: Retrieve Z component of Vector<br>Set: Set z component with a int2double conversion<br>Set: Set y component with native double_

Get | Description
--- | --- 
`double` | double z

Set | Type | Description  
--- | --- | --- 
z | `double` | z argument


##### <a id='y'></a>public  writeonly property __Y__

_Get: Retrieve Y component of Vector<br>Set: Set y component with a int2double conversion<br>Set: Set y component with native double_

Get | Description
--- | --- 
`double` | double y

Set | Type | Description  
--- | --- | --- 
y | `double` | y argument


##### <a id='x'></a>public  writeonly property __X__

_Get: Retrieve X component of Vector<br>Set: Set x component with native double<br>Set: Set x component with a int2double conversion_

Get | Description
--- | --- 
`double` | double x

Set | Type | Description  
--- | --- | --- 
x | `int` | x argument


##### <a id='y'></a>public  writeonly property __Y__

_Get: Retrieve Y component of Vector<br>Set: Set y component with a int2double conversion<br>Set: Set y component with native double_

Get | Description
--- | --- 
`double` | double y

Set | Type | Description  
--- | --- | --- 
y | `double` | y argument


##### <a id='z'></a>public  writeonly property __Z__

_Get: Retrieve Z component of Vector<br>Set: Set z component with a int2double conversion<br>Set: Set y component with native double_

Get | Description
--- | --- 
`double` | double z

Set | Type | Description  
--- | --- | --- 
z | `double` | z argument


---

### Public Methods for [`Position`](Position.md)

##### <a id='movex'></a>public  function __moveX__(x)

_Moves the position a specified amount in the X direction_

Argument | Type | Description  
--- | --- | --- 
x | `int` | the amount to move X-wise

Returns | 
--- | 
`void` |


##### <a id='copy'></a>public  function __copy__()

_copy method_

Returns | 
--- | 
[`Position`](Position.md) |


##### <a id='movex'></a>public  function __moveX__(x)

_Moves the position a specified amount in the X direction_

Argument | Type | Description  
--- | --- | --- 
x | `double` | the amount to move X-wise

Returns | 
--- | 
`void` |


##### <a id='equals'></a>public  function __equals__(obj)

_Checks if another object equals this one_

Argument | Type | Description  
--- | --- | --- 
obj | `Object` | obj argument

Returns | Description
--- | --- 
`boolean` | whether the other object has the same values for x,y,z


##### <a id='fromdataaccess'></a>public static function __fromDataAccess__(pda)

_fromDataAccess method_

Argument | Type | Description  
--- | --- | --- 
pda | [`PositionDataAccess`](../../../database/PositionDataAccess.md) | pda argument

Returns | 
--- | 
[`Position`](Position.md) |


##### <a id='movez'></a>public  function __moveZ__(z)

_Moves the position a specified amount in the Z direction_

Argument | Type | Description  
--- | --- | --- 
z | `double` | the amount to move Z-wise

Returns | 
--- | 
`void` |


##### <a id='move'></a>public  function __move__(x, y, z)

_Moves the position a specified amount in all directions_

Argument | Type | Description  
--- | --- | --- 
x | `int` | the amount to move X-wise
y | `int` | the amount to move Y-wise
z | `int` | the amount to move Z-wise

Returns | 
--- | 
`void` |


##### <a id='movey'></a>public  function __moveY__(y)

_Moves the position a specified amount in the Y direction_

Argument | Type | Description  
--- | --- | --- 
y | `int` | the amount to move Y-wise

Returns | 
--- | 
`void` |


##### <a id='movey'></a>public  function __moveY__(y)

_Moves the position a specified amount in the Y direction_

Argument | Type | Description  
--- | --- | --- 
y | `double` | the amount to move Y-wise

Returns | 
--- | 
`void` |


##### <a id='movez'></a>public  function __moveZ__(z)

_Moves the position a specified amount in the Z direction_

Argument | Type | Description  
--- | --- | --- 
z | `int` | the amount to move Z-wise

Returns | 
--- | 
`void` |


##### <a id='hashcode'></a>public  function __hashCode__()

_Return a hashcode for this object_

Returns | 
--- | 
`int` |


##### <a id='move'></a>public  function __move__(x, y, z)

_Moves the position a specified amount in all directions_

Argument | Type | Description  
--- | --- | --- 
x | `double` | the amount to move X-wise
y | `double` | the amount to move Y-wise
z | `double` | the amount to move Z-wise

Returns | 
--- | 
`void` |


##### <a id='todataaccess'></a>public  function __toDataAccess__(pda)

_toDataAccess method_

Argument | Type | Description  
--- | --- | --- 
pda | [`PositionDataAccess`](../../../database/PositionDataAccess.md) | pda argument

Returns | 
--- | 
[`PositionDataAccess`](../../../database/PositionDataAccess.md) |


##### <a id='tostring'></a>public  function __toString__()

_toString method_

Returns | 
--- | 
`String` |


##### <a id='transform'></a>public  function __transform__(face)

_Transforms this position 1 block in the given [`BlockFace`](../blocks/BlockFace.md) direction_

Argument | Type | Description  
--- | --- | --- 
face | [`BlockFace`](../blocks/BlockFace.md) | the [`BlockFace`](../blocks/BlockFace.md) used to move the position

Returns | 
--- | 
`void` |


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

