## BlockIterator __class__

>io.wolfscript.BlockIterator
>Implements `Iterator<Block`

---

### Class Overview

Iterator wrapper for a LineTracer

Method | Type   
--- | :--- 
new __BlockIterator__(in_player) <br> _Constructor requiring player, uses default values_ | _constructor_
new __BlockIterator__(in_player, doAir) <br> _BlockIterator constructor_ | _constructor_
new __BlockIterator__(in_location) <br> _BlockIterator constructor_ | _constructor_
new __BlockIterator__(in_location, doAir) <br> _Constructor requiring location, uses default values_ | _constructor_
new __BlockIterator__(in_player, in_range, in_step) <br> _BlockIterator constructor_ | _constructor_
new __BlockIterator__(in_player, in_range, in_step, doAir) <br> _BlockIterator constructor_ | _constructor_
new __BlockIterator__(in_location, in_range, in_step) <br> _BlockIterator constructor_ | _constructor_
new __BlockIterator__(in_location, in_range, in_step, doAir) <br> _BlockIterator constructor_ | _constructor_
new __BlockIterator__(tracer) <br> _BlockIterator constructor_ | _constructor_
new __BlockIterator__(tracer, doAir) <br> _Creats a BlockIterator from a [`LineTracer`](LineTracer.md)_ | _constructor_
 function __hasNext__() <br> _Checks if there are more [`Block`](api/world/blocks/Block.md)s in line_ | `boolean`
 function __next__() <br> _Gets the next [`Block`](api/world/blocks/Block.md) in line_ | [`Block`](api/world/blocks/Block.md)
 function __remove__() <br> _Sets the current block to Air, effectively removing it from the world_ | `void`
 function __replace__(type) <br> _Replaces the current block with the given BlockType_ | `void`
 function __replace__(type) <br> _Replaces the current block type to the given BlockType Id_ | `void`
 function __replace__(type, data) <br> _Replaces the current block type to the given BlockType Id and data_ | `void`



---

### Public Constructors for [`BlockIterator`](BlockIterator.md)

##### <a id='blockiterator'></a>new __BlockIterator__(in_player) 

_Constructor requiring player, uses default values_

Argument | Type | Description  
--- | --- | --- 
in_player | `Player` | the `Player` to check Line of Sight for

##### <a id='blockiterator'></a>new __BlockIterator__(in_player, doAir) 

_BlockIterator constructor_

Argument | Type | Description  
--- | --- | --- 
in_player | `Player` | in_player argument
doAir | `boolean` | doAir argument

##### <a id='blockiterator'></a>new __BlockIterator__(in_location) 

_BlockIterator constructor_

Argument | Type | Description  
--- | --- | --- 
in_location | [`Location`](api/world/position/Location.md) | in_location argument

##### <a id='blockiterator'></a>new __BlockIterator__(in_location, doAir) 

_Constructor requiring location, uses default values_

Argument | Type | Description  
--- | --- | --- 
in_location | [`Location`](api/world/position/Location.md) | the [`Location`](api/world/position/Location.md) to check Line of Sight for
doAir | `boolean` | set to `true` to include Air blocks

##### <a id='blockiterator'></a>new __BlockIterator__(in_player, in_range, in_step) 

_BlockIterator constructor_

Argument | Type | Description  
--- | --- | --- 
in_player | `Player` | in_player argument
in_range | `int` | in_range argument
in_step | `double` | in_step argument

##### <a id='blockiterator'></a>new __BlockIterator__(in_player, in_range, in_step, doAir) 

_BlockIterator constructor_

Argument | Type | Description  
--- | --- | --- 
in_player | `Player` | in_player argument
in_range | `int` | in_range argument
in_step | `double` | in_step argument
doAir | `boolean` | doAir argument

##### <a id='blockiterator'></a>new __BlockIterator__(in_location, in_range, in_step) 

_BlockIterator constructor_

Argument | Type | Description  
--- | --- | --- 
in_location | [`Location`](api/world/position/Location.md) | in_location argument
in_range | `int` | in_range argument
in_step | `double` | in_step argument

##### <a id='blockiterator'></a>new __BlockIterator__(in_location, in_range, in_step, doAir) 

_BlockIterator constructor_

Argument | Type | Description  
--- | --- | --- 
in_location | [`Location`](api/world/position/Location.md) | in_location argument
in_range | `int` | in_range argument
in_step | `double` | in_step argument
doAir | `boolean` | doAir argument

##### <a id='blockiterator'></a>new __BlockIterator__(tracer) 

_BlockIterator constructor_

Argument | Type | Description  
--- | --- | --- 
tracer | [`LineTracer`](LineTracer.md) | tracer argument

##### <a id='blockiterator'></a>new __BlockIterator__(tracer, doAir) 

_Creats a BlockIterator from a [`LineTracer`](LineTracer.md)_

Argument | Type | Description  
--- | --- | --- 
tracer | [`LineTracer`](LineTracer.md) | the LineTracer to use with this BlockIterator
doAir | `boolean` | set to `true` to include Air blocks

---

### Public Methods for [`BlockIterator`](BlockIterator.md)

##### <a id='hasnext'></a>public  function __hasNext__()

_Checks if there are more [`Block`](api/world/blocks/Block.md)s in line_

Returns | Description
--- | --- 
`boolean` | `true` if the is a next block


##### <a id='next'></a>public  function __next__()

_Gets the next [`Block`](api/world/blocks/Block.md) in line_

Returns | Description
--- | --- 
[`Block`](api/world/blocks/Block.md) | next block


##### <a id='remove'></a>public  function __remove__()

_Sets the current block to Air, effectively removing it from the world_

Returns | 
--- | 
`void` |


##### <a id='replace'></a>public  function __replace__(type)

_Replaces the current block with the given BlockType_

Argument | Type | Description  
--- | --- | --- 
type | [`BlockType`](api/world/blocks/BlockType.md) | the block type used to replace the current block

Returns | 
--- | 
`void` |


##### <a id='replace'></a>public  function __replace__(type)

_Replaces the current block type to the given BlockType Id_

Argument | Type | Description  
--- | --- | --- 
type | `int` | the new block id

Returns | 
--- | 
`void` |


##### <a id='replace'></a>public  function __replace__(type, data)

_Replaces the current block type to the given BlockType Id and data_

Argument | Type | Description  
--- | --- | --- 
type | `int` | the new block id
data | `int` | the new block data

Returns | 
--- | 
`void` |


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

