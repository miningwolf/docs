## BlockPopulator __class__

>io.wolfscript.generator.BlockPopulator

---

### Class Overview

A block populator is responsible for generating a small area of blocks. <p> For example, generating glowstone inside the nether or generating dungeons full of treasure

Method | Type   
--- | :--- 
abstract function __populate__(world, random, source) <br> _Populates an area of blocks at or around the given chunk._ | `void`



---


### Public Methods for [`BlockPopulator`](BlockPopulator.md)

##### <a id='populate'></a>public abstract function __populate__(world, random, source)

_Populates an area of blocks at or around the given chunk. <p> The chunks on each side of the specified chunk must already exist; that is, there must be one north, east, south and west of the specified chunk. The "corner" chunks may not exist, in which scenario the populator should record any changes required for those chunks and perform the changes when they are ready._

Argument | Type | Description  
--- | --- | --- 
world | `World` | The world to generate in
random | `Random` | The random generator to use
source | [`Chunk`](../Chunk.md) | The chunk to generate for

Returns | 
--- | 
`void` |


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

