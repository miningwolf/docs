## EulerAngle __class__

>io.wolfscript.util.EulerAngle

---

### Class Overview

EulerAngle is used to represent 3 angles, one for each axis (x, y, z). The angles are in radians

Method | Type   
--- | :--- 
new __EulerAngle__(x, y, z) <br> _Creates a EularAngle with each axis set to the_ | _constructor_
  property __X__ <br> _Get: Returns the angle on the x axis in radians<br>Set: Return a EulerAngle which is the result of changing_ | `double`
  property __Y__ <br> _Get: Returns the angle on the y axis in radians<br>Set: Return a EulerAngle which is the result of changing_ | `double`
  property __Z__ <br> _Get: Returns the angle on the z axis in radians<br>Set: Return a EulerAngle which is the result of changing_ | `double`
 function __add__(x, y, z) <br> _Creates a new EulerAngle which is the result of adding_ | [`EulerAngle`](EulerAngle.md)
 function __equals__(o) <br> _equals method_ | `boolean`
 function __hashCode__() <br> _hashCode method_ | `int`
 function __subtract__(x, y, z) <br> _Creates a new EulerAngle which is the result of subtracting_ | [`EulerAngle`](EulerAngle.md)
static final var __ZERO__ <br> _A EulerAngle with every axis set to 0_ | [`EulerAngle`](EulerAngle.md)



---

### Public Constructors for [`EulerAngle`](EulerAngle.md)

##### <a id='eulerangle'></a>new __EulerAngle__(x, y, z) 

_Creates a EularAngle with each axis set to the passed angle in radians_

Argument | Type | Description  
--- | --- | --- 
x | `double` | the angle for the x axis in radians
y | `double` | the angle for the x axis in radians
z | `double` | the angle for the x axis in radians

---

### Public Properties for [`EulerAngle`](EulerAngle.md)

##### <a id='x'></a>public   property __X__

_Get: Returns the angle on the x axis in radians<br>Set: Return a EulerAngle which is the result of changing the x axis to the passed angle_

Get | Description
--- | --- 
`double` | the resultant EulerAngle

Set | Type | Description  
--- | --- | --- 
x | `double` | the angle in radians


##### <a id='y'></a>public   property __Y__

_Get: Returns the angle on the y axis in radians<br>Set: Return a EulerAngle which is the result of changing the y axis to the passed angle_

Get | Description
--- | --- 
`double` | the resultant EulerAngle

Set | Type | Description  
--- | --- | --- 
y | `double` | the angle in radians


##### <a id='z'></a>public   property __Z__

_Get: Returns the angle on the z axis in radians<br>Set: Return a EulerAngle which is the result of changing the z axis to the passed angle_

Get | Description
--- | --- 
`double` | the resultant EulerAngle

Set | Type | Description  
--- | --- | --- 
z | `double` | the angle in radians


---

### Public Methods for [`EulerAngle`](EulerAngle.md)

##### <a id='add'></a>public  function __add__(x, y, z)

_Creates a new EulerAngle which is the result of adding the x, y, z components to this EulerAngle_

Argument | Type | Description  
--- | --- | --- 
x | `double` | the angle to add to the x axis in radians
y | `double` | the angle to add to the y axis in radians
z | `double` | the angle to add to the z axis in radians

Returns | Description
--- | --- 
[`EulerAngle`](EulerAngle.md) | the resultant EulerAngle


##### <a id='equals'></a>public  function __equals__(o)

_equals method_

Argument | Type | Description  
--- | --- | --- 
o | `Object` | o argument

Returns | 
--- | 
`boolean` |


##### <a id='hashcode'></a>public  function __hashCode__()

_hashCode method_

Returns | 
--- | 
`int` |


##### <a id='subtract'></a>public  function __subtract__(x, y, z)

_Creates a new EulerAngle which is the result of subtracting the x, y, z components to this EulerAngle_

Argument | Type | Description  
--- | --- | --- 
x | `double` | the angle to subtract to the x axis in radians
y | `double` | the angle to subtract to the y axis in radians
z | `double` | the angle to subtract to the z axis in radians

Returns | Description
--- | --- 
[`EulerAngle`](EulerAngle.md) | the resultant EulerAngle


---

### Public Fields for [`EulerAngle`](EulerAngle.md)

##### <a id='zero'></a>public static final var __ZERO__

_A EulerAngle with every axis set to 0_

>Returns
>  [`EulerAngle`](EulerAngle.md)

---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

