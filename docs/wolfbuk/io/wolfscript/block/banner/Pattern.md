## Pattern __class__

>io.wolfscript.block.banner.Pattern
>Implements [`ConfigurationSerializable`](../../configuration/serialization/ConfigurationSerializable.md)

---

### Class Overview

class Pattern

Method | Type   
--- | :--- 
new __Pattern__(color, pattern) <br> _Creates a new pattern from the specified color and_ | _constructor_
new __Pattern__() <br> _Constructor for deserialization._ | _constructor_
 readonly property __Color__ <br> _Get: Returns the color of the pattern_ | [`DyeColor`](../../DyeColor.md)
 readonly property __Pattern__ <br> _Get: Returns the type of pattern_ | [`PatternType`](PatternType.md)
 function __equals__(obj) <br> _equals method_ | `boolean`
 function __hashCode__() <br> _hashCode method_ | `int`



---

### Public Constructors for [`Pattern`](Pattern.md)

##### <a id='pattern'></a>new __Pattern__(color, pattern) 

_Creates a new pattern from the specified color and pattern type_

Argument | Type | Description  
--- | --- | --- 
color | [`DyeColor`](../../DyeColor.md) |   the pattern color
pattern | [`PatternType`](PatternType.md) | the pattern type

##### <a id='pattern'></a>new __Pattern__() 

_Constructor for deserialization._


---

### Public Properties for [`Pattern`](Pattern.md)

##### <a id='color'></a>public  readonly property __Color__

_Get: Returns the color of the pattern_

Get | Description
--- | --- 
[`DyeColor`](../../DyeColor.md) | the color of the pattern



##### <a id='pattern'></a>public  readonly property __Pattern__

_Get: Returns the type of pattern_

Get | Description
--- | --- 
[`PatternType`](PatternType.md) | the pattern type



---

### Public Methods for [`Pattern`](Pattern.md)

##### <a id='equals'></a>public  function __equals__(obj)

_equals method_

Argument | Type | Description  
--- | --- | --- 
obj | `Object` | obj argument

Returns | 
--- | 
`boolean` |


##### <a id='hashcode'></a>public  function __hashCode__()

_hashCode method_

Returns | 
--- | 
`int` |


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

