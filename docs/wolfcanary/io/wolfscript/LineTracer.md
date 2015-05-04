## LineTracer __class__

>io.wolfscript.LineTracer

---

### Class Overview

Traces the line of sight of an entity. You can retrieve any blocks along the Line of Sight or simply the last block there is within a specified range. Range defaults to 200 blocks

Method | Type   
--- | :--- 
new __LineTracer__(in_player) <br> _Constructor requiring player, uses default values_ | _constructor_
new __LineTracer__(in_location) <br> _Constructor requiring location, uses default values_ | _constructor_
new __LineTracer__(in_player, in_range, in_step) <br> _Constructor requiring player, max range, and a stepping value_ | _constructor_
new __LineTracer__(in_location, in_range, in_step) <br> _Constructor requiring location, max range, and a stepping value_ | _constructor_
  property __CurBlock__ <br> _Get: Returns the current [`Block`](api/world/blocks/Block.md) along the line of vision<br>Set: Sets current block type id_ | [`Block`](api/world/blocks/Block.md)
  property __LastBlock__ <br> _Get: Returns the previous block along the line of vision<br>Set: Sets previous block type id_ | [`Block`](api/world/blocks/Block.md)
 readonly property __NextBlock__ <br> _Get: Returns STEPS forward along line of vision and returns block._ | [`Block`](api/world/blocks/Block.md)
  property __TargetBlock__ <br> _Get: Returns the block at the cursor, or null if out of range<br>Set: Sets the type of the block at the cursor_ | [`Block`](api/world/blocks/Block.md)
 function __getNextBlock__(doAir) <br> _Returns STEPS forward along line of vision and returns block._ | [`Block`](api/world/blocks/Block.md)
 function __init__(in_location, in_range, in_step, in_view_height) <br> _Initialization method_ | `void`



---

### Public Constructors for [`LineTracer`](LineTracer.md)

##### <a id='linetracer'></a>new __LineTracer__(in_player) 

_Constructor requiring player, uses default values_

Argument | Type | Description  
--- | --- | --- 
in_player | `Player` | the `Player` to check Line of Sight for

##### <a id='linetracer'></a>new __LineTracer__(in_location) 

_Constructor requiring location, uses default values_

Argument | Type | Description  
--- | --- | --- 
in_location | [`Location`](api/world/position/Location.md) | the [`Location`](api/world/position/Location.md) to check Line of Sight for

##### <a id='linetracer'></a>new __LineTracer__(in_player, in_range, in_step) 

_Constructor requiring player, max range, and a stepping value_

Argument | Type | Description  
--- | --- | --- 
in_player | `Player` | the `Player` to check Line of Sight for
in_range | `int` | the maximum range to check
in_step | `double` | the stepping value, the amount Y to increase/decrease the further away the checks get

##### <a id='linetracer'></a>new __LineTracer__(in_location, in_range, in_step) 

_Constructor requiring location, max range, and a stepping value_

Argument | Type | Description  
--- | --- | --- 
in_location | [`Location`](api/world/position/Location.md) | the [`Location`](api/world/position/Location.md) to check Line of Sight for
in_range | `int` | the maximum range to check
in_step | `double` | the stepping value, the amount Y to increase/decrease the further away the checks get

---

### Public Properties for [`LineTracer`](LineTracer.md)

##### <a id='curblock'></a>public   property __CurBlock__

_Get: Returns the current [`Block`](api/world/blocks/Block.md) along the line of vision<br>Set: Sets current block type id_

Get | Description
--- | --- 
[`Block`](api/world/blocks/Block.md) | the current [`Block`](api/world/blocks/Block.md)

Set | Type | Description  
--- | --- | --- 
type | `int` | the [`Block`](api/world/blocks/Block.md) type id


##### <a id='lastblock'></a>public   property __LastBlock__

_Get: Returns the previous block along the line of vision<br>Set: Sets previous block type id_

Get | Description
--- | --- 
[`Block`](api/world/blocks/Block.md) | the last [`Block`](api/world/blocks/Block.md) could be null if this is first iteration

Set | Type | Description  
--- | --- | --- 
type | `int` | the [`Block`](api/world/blocks/Block.md) type id


##### <a id='nextblock'></a>public  readonly property __NextBlock__

_Get: Returns STEPS forward along line of vision and returns block. This method skips all Air Blocks._

Get | Description
--- | --- 
[`Block`](api/world/blocks/Block.md) | the next [`Block`](api/world/blocks/Block.md) or null if none exists



##### <a id='targetblock'></a>public   property __TargetBlock__

_Get: Returns the block at the cursor, or null if out of range<br>Set: Sets the type of the block at the cursor_

Get | Description
--- | --- 
[`Block`](api/world/blocks/Block.md) | the Target [`Block`](api/world/blocks/Block.md)

Set | Type | Description  
--- | --- | --- 
type | `int` | the [`Block`](api/world/blocks/Block.md) type id


---

### Public Methods for [`LineTracer`](LineTracer.md)

##### <a id='getnextblock'></a>public  function __getNextBlock__(doAir)

_Returns STEPS forward along line of vision and returns block._

Argument | Type | Description  
--- | --- | --- 
doAir | `boolean` | set to `true` to check air; `false` otherwise

Returns | Description
--- | --- 
[`Block`](api/world/blocks/Block.md) | the next [`Block`](api/world/blocks/Block.md) or null if none exists


##### <a id='init'></a>public  function __init__(in_location, in_range, in_step, in_view_height)

_Initialization method_

Argument | Type | Description  
--- | --- | --- 
in_location | [`Location`](api/world/position/Location.md) | the [`Location`](api/world/position/Location.md) to check Line of Sight for
in_range | `int` | the maximum range to check
in_step | `double` | the stepping value, the amount Y to increase/decrease the further away the checks get
in_view_height | `double` | the View Height to use, a `Player`'s view height is typically 1.62

Returns | 
--- | 
`void` |


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

