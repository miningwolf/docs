## ChunkGenerator __class__

>io.wolfscript.generator.ChunkGenerator

---

### Class Overview

A chunk generator is responsible for the initial shaping of an entire chunk. For example, the nether chunk generator should shape netherrack and soulsand

Method | Type   
--- | :--- 
 function __canSpawn__(world, x, z) <br> _Tests if the specified location is valid for a natural spawn position_ | `boolean`
 function __generate__(world, random, x, z) <br> _generate method_ | `byte[]`
 function __getDefaultPopulators__(world) <br> _Gets a list of default [`BlockPopulator`](BlockPopulator.md)s to apply to a given_ | `List<BlockPopulator>`
 function __getFixedSpawnLocation__(world, random) <br> _Gets a fixed spawn location to use for a given world._ | `Location`



---


### Public Methods for [`ChunkGenerator`](ChunkGenerator.md)

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


##### <a id='getdefaultpopulators'></a>public  function __getDefaultPopulators__(world)

_Gets a list of default [`BlockPopulator`](BlockPopulator.md)s to apply to a given world_

Argument | Type | Description  
--- | --- | --- 
world | `World` | World to apply to

Returns | Description
--- | --- 
`List<BlockPopulator>` | List containing any amount of BlockPopulators


##### <a id='getfixedspawnlocation'></a>public  function __getFixedSpawnLocation__(world, random)

_Gets a fixed spawn location to use for a given world. <p> A null value is returned if a world should not use a fixed spawn point, and will instead attempt to find one randomly._

Argument | Type | Description  
--- | --- | --- 
world | `World` | The world to locate a spawn point for
random | `Random` | Random generator to use in the calculation

Returns | Description
--- | --- 
`Location` | Location containing a new spawn point, otherwise null


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

