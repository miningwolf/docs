## ChunkGenerator __class__

>io.wolfscript.generator.ChunkGenerator

---

### Class Overview

A chunk generator is responsible for the initial shaping of an entire chunk. For example, the nether chunk generator should shape netherrack and soulsand

Method | Type   
--- | :--- 
 readonly property __MaxHeight__ <br> _Get: Get the maximum height for the chunk._ | `int`
 function __setRegion__(xMin, yMin, zMin, xMax, yMax, zMax, material) <br> _Set a region of this chunk from xMin, yMin, zMin (inclusive)_ | `void`
 function __generate__(world, random, x, z) <br> _generate method_ | `byte[]`
 function __canSpawn__(world, x, z) <br> _Tests if the specified location is valid for a natural spawn position_ | `boolean`
 function __setRegion__(xMin, yMin, zMin, xMax, yMax, zMax, material) <br> _Set a region of this chunk from xMin, yMin, zMin (inclusive)_ | `void`
 function __generateChunkData__(world, random, x, z, biome) <br> _generateChunkData method_ | `ChunkData`
 function __getTypeAndData__(x, y, z) <br> _Get the type and data of the block at x, y ,z._ | [`MaterialData`](../material/MaterialData.md)
 function __getFixedSpawnLocation__(world, random) <br> _Gets a fixed spawn location to use for a given world._ | `Location`
 function __getDefaultPopulators__(world) <br> _Gets a list of default [`BlockPopulator`](BlockPopulator.md)s to apply to a given_ | `List<BlockPopulator>`
 function __getType__(x, y, z) <br> _Get the type of the block at x, y, z._ | [`Material`](../Material.md)
 function __setBlock__(x, y, z, material) <br> _Set the block at x,y,z in the chunk data to material._ | `void`
 function __setBlock__(x, y, z, material) <br> _Set the block at x,y,z in the chunk data to material._ | `void`



---


### Public Properties for [`ChunkGenerator`](ChunkGenerator.md)

##### <a id='maxheight'></a>public  readonly property __MaxHeight__

_Get: Get the maximum height for the chunk. Setting blocks at or above this height will do nothing._

Get | Description
--- | --- 
`int` | the maximum height



---

### Public Methods for [`ChunkGenerator`](ChunkGenerator.md)

##### <a id='setregion'></a>public  function __setRegion__(xMin, yMin, zMin, xMax, yMax, zMax, material)

_Set a region of this chunk from xMin, yMin, zMin (inclusive) to xMax, yMax, zMax (exclusive) to material. Setting blocks outside the chunk's bounds does nothing._

Argument | Type | Description  
--- | --- | --- 
xMin | `int` | minimum x location (inclusive) in the chunk to set
yMin | `int` | minimum y location (inclusive) in the chunk to set
zMin | `int` | minimum z location (inclusive) in the chunk to set
xMax | `int` | maximum x location (exclusive) in the chunk to set
yMax | `int` | maximum y location (exclusive) in the chunk to set
zMax | `int` | maximum z location (exclusive) in the chunk to set
material | [`Material`](../Material.md) | the type to set the blocks to

Returns | 
--- | 
`void` |


##### <a id='generate'></a>public  function __generate__(world, random, x, z)

_generate method_

Argument | Type | Description  
--- | --- | --- 
world | `World` | world argument
random | `Random` | random argument
x | `int` | x argument
z | `int` | z argument

Returns | 
--- | 
`byte[]` |


##### <a id='canspawn'></a>public  function __canSpawn__(world, x, z)

_Tests if the specified location is valid for a natural spawn position_

Argument | Type | Description  
--- | --- | --- 
world | `World` | The world we're testing on
x | `int` | X-coordinate of the block to test
z | `int` | Z-coordinate of the block to test

Returns | Description
--- | --- 
`boolean` | true if the location is valid, otherwise false


##### <a id='setregion'></a>public  function __setRegion__(xMin, yMin, zMin, xMax, yMax, zMax, material)

_Set a region of this chunk from xMin, yMin, zMin (inclusive) to xMax, yMax, zMax (exclusive) to material. Setting blocks outside the chunk's bounds does nothing._

Argument | Type | Description  
--- | --- | --- 
xMin | `int` | minimum x location (inclusive) in the chunk to set
yMin | `int` | minimum y location (inclusive) in the chunk to set
zMin | `int` | minimum z location (inclusive) in the chunk to set
xMax | `int` | maximum x location (exclusive) in the chunk to set
yMax | `int` | maximum y location (exclusive) in the chunk to set
zMax | `int` | maximum z location (exclusive) in the chunk to set
material | [`MaterialData`](../material/MaterialData.md) | the type to set the blocks to

Returns | 
--- | 
`void` |


##### <a id='generatechunkdata'></a>public  function __generateChunkData__(world, random, x, z, biome)

_generateChunkData method_

Argument | Type | Description  
--- | --- | --- 
world | `World` | world argument
random | `Random` | random argument
x | `int` | x argument
z | `int` | z argument
biome | `BiomeGrid` | biome argument

Returns | 
--- | 
`ChunkData` |


##### <a id='generateblocksections'></a>public  function __generateBlockSections__(world, random, x, z, biomes)
_Deprecated_

_generateBlockSections method_

Argument | Type | Description  
--- | --- | --- 
world | `World` | world argument
random | `Random` | random argument
x | `int` | x argument
z | `int` | z argument
biomes | `BiomeGrid` | biomes argument

Returns | 
--- | 
`byte[][]` |


##### <a id='gettypeanddata'></a>public  function __getTypeAndData__(x, y, z)

_Get the type and data of the block at x, y ,z. Getting blocks outside the chunk's bounds returns air._

Argument | Type | Description  
--- | --- | --- 
x | `int` | the x location in the chunk from 0-15 inclusive
y | `int` | the y location in the chunk from 0 (inclusive) - maxHeight (exclusive)
z | `int` | the z location in the chunk from 0-15 inclusive

Returns | Description
--- | --- 
[`MaterialData`](../material/MaterialData.md) | the type and data of the block or the MaterialData for air if x, y or z are outside the chunk's bounds


##### <a id='getdata'></a>public  function __getData__(x, y, z)
_Deprecated: Uses magic values_

_Get the block data at x,y,z in the chunk data. Getting blocks outside the chunk's bounds returns 0._

Argument | Type | Description  
--- | --- | --- 
x | `int` | the x location in the chunk from 0-15 inclusive
y | `int` | the y location in the chunk from 0 (inclusive) - maxHeight (exclusive)
z | `int` | the z location in the chunk from 0-15 inclusive

Returns | Description
--- | --- 
`byte` | the block data value or air if x, y or z are outside the chunk's bounds


##### <a id='generateextblocksections'></a>public  function __generateExtBlockSections__(world, random, x, z, biomes)
_Deprecated_

_generateExtBlockSections method_

Argument | Type | Description  
--- | --- | --- 
world | `World` | world argument
random | `Random` | random argument
x | `int` | x argument
z | `int` | z argument
biomes | `BiomeGrid` | biomes argument

Returns | 
--- | 
`short[][]` |


##### <a id='setregion'></a>public  function __setRegion__(xMin, yMin, zMin, xMax, yMax, zMax, blockId)
_Deprecated: Uses magic values._

_Set a region of this chunk from xMin, yMin, zMin (inclusive) to xMax, yMax, zMax (exclusive) to block id. Setting blocks outside the chunk's bounds does nothing._

Argument | Type | Description  
--- | --- | --- 
xMin | `int` | minimum x location (inclusive) in the chunk to set
yMin | `int` | minimum y location (inclusive) in the chunk to set
zMin | `int` | minimum z location (inclusive) in the chunk to set
xMax | `int` | maximum x location (exclusive) in the chunk to set
yMax | `int` | maximum y location (exclusive) in the chunk to set
zMax | `int` | maximum z location (exclusive) in the chunk to set
blockId | `int` | the block id to set the blocks to

Returns | 
--- | 
`void` |


##### <a id='getfixedspawnlocation'></a>public  function __getFixedSpawnLocation__(world, random)

_Gets a fixed spawn location to use for a given world. <p> A null value is returned if a world should not use a fixed spawn point, and will instead attempt to find one randomly._

Argument | Type | Description  
--- | --- | --- 
world | `World` | The world to locate a spawn point for
random | `Random` | Random generator to use in the calculation

Returns | Description
--- | --- 
`Location` | Location containing a new spawn point, otherwise null


##### <a id='getdefaultpopulators'></a>public  function __getDefaultPopulators__(world)

_Gets a list of default [`BlockPopulator`](BlockPopulator.md)s to apply to a given world_

Argument | Type | Description  
--- | --- | --- 
world | `World` | World to apply to

Returns | Description
--- | --- 
`List<BlockPopulator>` | List containing any amount of BlockPopulators


##### <a id='gettype'></a>public  function __getType__(x, y, z)

_Get the type of the block at x, y, z. Getting blocks outside the chunk's bounds returns air._

Argument | Type | Description  
--- | --- | --- 
x | `int` | the x location in the chunk from 0-15 inclusive
y | `int` | the y location in the chunk from 0 (inclusive) - maxHeight (exclusive)
z | `int` | the z location in the chunk from 0-15 inclusive

Returns | Description
--- | --- 
[`Material`](../Material.md) | the type of the block or Material.AIR if x, y or z are outside the chunk's bounds


##### <a id='gettypeid'></a>public  function __getTypeId__(x, y, z)
_Deprecated: Uses magic values_

_Get the blockId at x,y,z in the chunk data. Getting blocks outside the chunk's bounds returns 0._

Argument | Type | Description  
--- | --- | --- 
x | `int` | the x location in the chunk from 0-15 inclusive
y | `int` | the y location in the chunk from 0 (inclusive) - maxHeight (exclusive)
z | `int` | the z location in the chunk from 0-15 inclusive

Returns | Description
--- | --- 
`int` | the block id or 0 if x, y or z are outside the chunk's bounds


##### <a id='setblock'></a>public  function __setBlock__(x, y, z, material)

_Set the block at x,y,z in the chunk data to material. Note: setting blocks outside the chunk's bounds does nothing._

Argument | Type | Description  
--- | --- | --- 
x | `int` | the x location in the chunk from 0-15 inclusive
y | `int` | the y location in the chunk from 0 (inclusive) - maxHeight (exclusive)
z | `int` | the z location in the chunk from 0-15 inclusive
material | [`Material`](../Material.md) | the type to set the block to

Returns | 
--- | 
`void` |


##### <a id='setblock'></a>public  function __setBlock__(x, y, z, blockId)
_Deprecated: Uses magic values_

_Set the block at x,y,z in the chunk data to blockId. Setting blocks outside the chunk's bounds does nothing._

Argument | Type | Description  
--- | --- | --- 
x | `int` | the x location in the chunk from 0-15 inclusive
y | `int` | the y location in the chunk from 0 (inclusive) - maxHeight (exclusive)
z | `int` | the z location in the chunk from 0-15 inclusive
blockId | `int` | the blockId to set the block to

Returns | 
--- | 
`void` |


##### <a id='setblock'></a>public  function __setBlock__(x, y, z, blockId, data)
_Deprecated: Uses magic values_

_Set the block at x,y,z in the chunk data to blockId. Setting blocks outside the chunk's bounds does nothing._

Argument | Type | Description  
--- | --- | --- 
x | `int` | the x location in the chunk from 0-15 inclusive
y | `int` | the y location in the chunk from 0 (inclusive) - maxHeight (exclusive)
z | `int` | the z location in the chunk from 0-15 inclusive
blockId | `int` | the blockId to set the block to
data | `byte` | the block data to set the block to

Returns | 
--- | 
`void` |


##### <a id='setblock'></a>public  function __setBlock__(x, y, z, material)

_Set the block at x,y,z in the chunk data to material. Setting blocks outside the chunk's bounds does nothing._

Argument | Type | Description  
--- | --- | --- 
x | `int` | the x location in the chunk from 0-15 inclusive
y | `int` | the y location in the chunk from 0 (inclusive) - maxHeight (exclusive)
z | `int` | the z location in the chunk from 0-15 inclusive
material | [`MaterialData`](../material/MaterialData.md) | the type to set the block to

Returns | 
--- | 
`void` |


##### <a id='setregion'></a>public  function __setRegion__(xMin, yMin, zMin, xMax, yMax, zMax, blockId, data)
_Deprecated: Uses magic values._

_Set a region of this chunk from xMin, yMin, zMin (inclusive) to xMax, yMax, zMax (exclusive) to block id and data. Setting blocks outside the chunk's bounds does nothing._

Argument | Type | Description  
--- | --- | --- 
xMin | `int` | minimum x location (inclusive) in the chunk to set
yMin | `int` | minimum y location (inclusive) in the chunk to set
zMin | `int` | minimum z location (inclusive) in the chunk to set
xMax | `int` | maximum x location (exclusive) in the chunk to set
yMax | `int` | maximum y location (exclusive) in the chunk to set
zMax | `int` | maximum z location (exclusive) in the chunk to set
blockId | `int` | the block id to set the blocks to
data | `int` | the block data to set the blocks to

Returns | 
--- | 
`void` |


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

