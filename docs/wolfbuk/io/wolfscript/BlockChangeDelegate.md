## BlockChangeDelegate __interface__

>io.wolfscript.BlockChangeDelegate

---

### Interface Overview

A delegate for handling block changes. This serves as a direct interface between generation algorithms in the server implementation and utilizing code.

Method | Type   
--- | :--- 
 readonly property __Height__ <br> _Get: Gets the height of the world._ | `int`
 function __isEmpty__(x, y, z) <br> _Checks if the specified block is empty (air) or not._ | `boolean`



---


### Public Properties for [`BlockChangeDelegate`](BlockChangeDelegate.md)

##### <a id='height'></a>public  readonly property __Height__

_Get: Gets the height of the world._

Get | Description
--- | --- 
`int` | Height of the world



---

### Public Methods for [`BlockChangeDelegate`](BlockChangeDelegate.md)

##### <a id='gettypeid'></a>public  function __getTypeId__(x, y, z)
_Deprecated: Magic value_

_Get the block type at the location._

Argument | Type | Description  
--- | --- | --- 
x | `int` | X coordinate
y | `int` | Y coordinate
z | `int` | Z coordinate

Returns | Description
--- | --- 
`int` | The block ID


##### <a id='isempty'></a>public  function __isEmpty__(x, y, z)

_Checks if the specified block is empty (air) or not._

Argument | Type | Description  
--- | --- | --- 
x | `int` | X coordinate
y | `int` | Y coordinate
z | `int` | Z coordinate

Returns | Description
--- | --- 
`boolean` | True if the block is considered empty.


##### <a id='setrawtypeid'></a>public  function __setRawTypeId__(x, y, z, typeId)
_Deprecated: Magic value_

_Set a block type at the specified coordinates without doing all world updates and notifications. <p> It is safe to have this call World.setTypeId, but it may be slower than World.setRawTypeId._

Argument | Type | Description  
--- | --- | --- 
x | `int` | X coordinate
y | `int` | Y coordinate
z | `int` | Z coordinate
typeId | `int` | New block ID

Returns | Description
--- | --- 
`boolean` | true if the block was set successfully


##### <a id='setrawtypeidanddata'></a>public  function __setRawTypeIdAndData__(x, y, z, typeId, data)
_Deprecated: Magic value_

_Set a block type and data at the specified coordinates without doing all world updates and notifications. <p> It is safe to have this call World.setTypeId, but it may be slower than World.setRawTypeId._

Argument | Type | Description  
--- | --- | --- 
x | `int` | X coordinate
y | `int` | Y coordinate
z | `int` | Z coordinate
typeId | `int` | New block ID
data | `int` | Block data

Returns | Description
--- | --- 
`boolean` | true if the block was set successfully


##### <a id='settypeid'></a>public  function __setTypeId__(x, y, z, typeId)
_Deprecated: Magic value_

_Set a block type at the specified coordinates. <p> This method cannot call World.setRawTypeId, a full update is needed._

Argument | Type | Description  
--- | --- | --- 
x | `int` | X coordinate
y | `int` | Y coordinate
z | `int` | Z coordinate
typeId | `int` | New block ID

Returns | Description
--- | --- 
`boolean` | true if the block was set successfully


##### <a id='settypeidanddata'></a>public  function __setTypeIdAndData__(x, y, z, typeId, data)
_Deprecated: Magic value_

_Set a block type and data at the specified coordinates. <p> This method cannot call World.setRawTypeId, a full update is needed._

Argument | Type | Description  
--- | --- | --- 
x | `int` | X coordinate
y | `int` | Y coordinate
z | `int` | Z coordinate
typeId | `int` | New block ID
data | `int` | Block data

Returns | Description
--- | --- 
`boolean` | true if the block was set successfully


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

