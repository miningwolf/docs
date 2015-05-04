## BlockVector __class__

>io.wolfscript.util.BlockVector
>Extends `Vector`

---

### Class Overview

A vector with a hash function that floors the X, Y, Z components, a la BlockVector in WorldEdit. BlockVectors can be used in hash sets and hash maps. Be aware that BlockVectors are mutable, but it is important that BlockVectors are never changed once put into a hash set or hash map.

Method | Type   
--- | :--- 
new __BlockVector__() <br> _Construct the vector with all components as 0._ | _constructor_
new __BlockVector__(vec) <br> _Construct the vector with another vector._ | _constructor_
new __BlockVector__(x, y, z) <br> _Construct the vector with provided integer components._ | _constructor_
new __BlockVector__(x, y, z) <br> _Construct the vector with provided double components._ | _constructor_
new __BlockVector__(x, y, z) <br> _Construct the vector with provided float components._ | _constructor_
 function __clone__() <br> _Get a new block vector._ | [`BlockVector`](BlockVector.md)
static function __deserialize__() <br> _deserialize method_ | [`BlockVector`](BlockVector.md)
 function __equals__(obj) <br> _Checks if another object is equivalent._ | `boolean`
 function __hashCode__() <br> _Returns a hash code for this vector._ | `int`



---

### Public Constructors for [`BlockVector`](BlockVector.md)

##### <a id='blockvector'></a>new __BlockVector__() 

_Construct the vector with all components as 0._


##### <a id='blockvector'></a>new __BlockVector__(vec) 

_Construct the vector with another vector._

Argument | Type | Description  
--- | --- | --- 
vec | `Vector` | The other vector.

##### <a id='blockvector'></a>new __BlockVector__(x, y, z) 

_Construct the vector with provided integer components._

Argument | Type | Description  
--- | --- | --- 
x | `int` | X component
y | `int` | Y component
z | `int` | Z component

##### <a id='blockvector'></a>new __BlockVector__(x, y, z) 

_Construct the vector with provided double components._

Argument | Type | Description  
--- | --- | --- 
x | `double` | X component
y | `double` | Y component
z | `double` | Z component

##### <a id='blockvector'></a>new __BlockVector__(x, y, z) 

_Construct the vector with provided float components._

Argument | Type | Description  
--- | --- | --- 
x | `float` | X component
y | `float` | Y component
z | `float` | Z component

---

### Public Methods for [`BlockVector`](BlockVector.md)

##### <a id='clone'></a>public  function __clone__()

_Get a new block vector._

Returns | Description
--- | --- 
[`BlockVector`](BlockVector.md) | vector


##### <a id='deserialize'></a>public static function __deserialize__()

_deserialize method_

Returns | 
--- | 
[`BlockVector`](BlockVector.md) |


##### <a id='equals'></a>public  function __equals__(obj)

_Checks if another object is equivalent._

Argument | Type | Description  
--- | --- | --- 
obj | `Object` | The other object

Returns | Description
--- | --- 
`boolean` | whether the other object is equivalent


##### <a id='hashcode'></a>public  function __hashCode__()

_Returns a hash code for this vector._

Returns | Description
--- | --- 
`int` | hash code


---
---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

