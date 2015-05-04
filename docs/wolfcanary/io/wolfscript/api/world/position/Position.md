## Position __class__

>io.wolfscript.api.world.position.Position
>Implements `Cloneable`

---

### Class Overview

Position is a x, y, z triple

Method | Type   
--- | :--- 
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


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

