## BlockIterator __class__

>io.wolfscript.util.BlockIterator
>Implements `Iterator<Block`

---

### Class Overview

This class performs ray tracing and iterates along blocks on a line

Method | Type   
--- | :--- 
new __BlockIterator__(world, start, direction, yOffset, maxDistance) <br> _Constructs the BlockIterator_ | _constructor_
new __BlockIterator__(loc, yOffset, maxDistance) <br> _Constructs the BlockIterator_ | _constructor_
new __BlockIterator__(loc, yOffset) <br> _Constructs the BlockIterator._ | _constructor_
new __BlockIterator__(loc) <br> _Constructs the BlockIterator._ | _constructor_
new __BlockIterator__(entity, maxDistance) <br> _Constructs the BlockIterator._ | _constructor_
new __BlockIterator__(entity) <br> _Constructs the BlockIterator._ | _constructor_
 function __hasNext__() <br> _Returns true if the iteration has more elements_ | `boolean`
 function __next__() <br> _Returns the next Block in the trace_ | [`Block`](../block/Block.md)
 function __remove__() <br> _remove method_ | `void`



---

### Public Constructors for [`BlockIterator`](BlockIterator.md)

##### <a id='blockiterator'></a>new __BlockIterator__(world, start, direction, yOffset, maxDistance) 

_Constructs the BlockIterator_

Argument | Type | Description  
--- | --- | --- 
world | `World` | The world to use for tracing
start | `Vector` | A Vector giving the initial location for the trace
direction | `Vector` | A Vector pointing in the direction for the trace
yOffset | `double` | The trace begins vertically offset from the start vector by this value
maxDistance | `int` | This is the maximum distance in blocks for the trace. Setting this value above 140 may lead to problems with unloaded chunks. A value of 0 indicates no limit

##### <a id='blockiterator'></a>new __BlockIterator__(loc, yOffset, maxDistance) 

_Constructs the BlockIterator_

Argument | Type | Description  
--- | --- | --- 
loc | `Location` | The location for the start of the ray trace
yOffset | `double` | The trace begins vertically offset from the start vector by this value
maxDistance | `int` | This is the maximum distance in blocks for the trace. Setting this value above 140 may lead to problems with unloaded chunks. A value of 0 indicates no limit

##### <a id='blockiterator'></a>new __BlockIterator__(loc, yOffset) 

_Constructs the BlockIterator._

Argument | Type | Description  
--- | --- | --- 
loc | `Location` | The location for the start of the ray trace
yOffset | `double` | The trace begins vertically offset from the start vector by this value

##### <a id='blockiterator'></a>new __BlockIterator__(loc) 

_Constructs the BlockIterator._

Argument | Type | Description  
--- | --- | --- 
loc | `Location` | The location for the start of the ray trace

##### <a id='blockiterator'></a>new __BlockIterator__(entity, maxDistance) 

_Constructs the BlockIterator._

Argument | Type | Description  
--- | --- | --- 
entity | `LivingEntity` | Information from the entity is used to set up the trace
maxDistance | `int` | This is the maximum distance in blocks for the trace. Setting this value above 140 may lead to problems with unloaded chunks. A value of 0 indicates no limit

##### <a id='blockiterator'></a>new __BlockIterator__(entity) 

_Constructs the BlockIterator._

Argument | Type | Description  
--- | --- | --- 
entity | `LivingEntity` | Information from the entity is used to set up the trace

---

### Public Methods for [`BlockIterator`](BlockIterator.md)

##### <a id='hasnext'></a>public  function __hasNext__()

_Returns true if the iteration has more elements_

Returns | 
--- | 
`boolean` |


##### <a id='next'></a>public  function __next__()

_Returns the next Block in the trace_

Returns | Description
--- | --- 
[`Block`](../block/Block.md) | the next Block in the trace


##### <a id='remove'></a>public  function __remove__()

_remove method_

Returns | 
--- | 
`void` |


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

