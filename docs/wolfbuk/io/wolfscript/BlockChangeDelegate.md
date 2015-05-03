## BlockChangeDelegate __interface__

>io.wolfscript.BlockChangeDelegate

---

### Interface Overview

A delegate for handling block changes. This serves as a direct interface between generation algorithms in the server implementation and utilizing code.

Method | Type   
--- | :--- 
 function __isEmpty__(x, y, z) <br> _Set a block type at the specified coordinates without doing all world_ | `boolean`



---


### Public Methods for [`BlockChangeDelegate`](BlockChangeDelegate.md)

##### <a id='isempty'></a>public  function __isEmpty__(x, y, z)

_Set a block type at the specified coordinates without doing all world updates and notifications. <p> It is safe to have this call World.setTypeId, but it may be slower than World.setRawTypeId._

Argument | Type | Description  
--- | --- | --- 
x | `int` | X coordinate
y | `int` | Y coordinate
z | `int` | Z coordinate

Returns | Description
--- | --- 
`boolean` | true if the block was set successfully


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

