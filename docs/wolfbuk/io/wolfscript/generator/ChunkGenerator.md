## ChunkGenerator __class__

>io.wolfscript.generator.ChunkGenerator

---

### Class Overview

A chunk generator is responsible for the initial shaping of an entire chunk. For example, the nether chunk generator should shape netherrack and soulsand

Method | Type   
--- | :--- 
 function __canSpawn__(world, x, z) <br> _Tests if the specified location is valid for a natural spawn position_ | `boolean`
 function __generate__(world, random, x, z) <br> _Shapes the chunk for the given coordinates._ | `byte[]`
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

_Shapes the chunk for the given coordinates. <p> This method should return a byte[32768] in the following format: <pre> for (int x = 0; x &lt; 16; x++) { for (int z = 0; z &lt; 16; z++) { for (int y = 0; y &lt; 128; y++) { // result[(x 16 + z) 128 + y] = ??; } } } </pre> <p> Note that this method should <b>never</b> attempt to get the Chunk at the passed coordinates, as doing so may cause an infinite loop <p> Note this deprecated method will only be called when both generateExtBlockSections() and generateBlockSections() are unimplemented and return null._

Argument | Type | Description  
--- | --- | --- 
world | `World` | The world this chunk will be used for
random | `Random` | The random generator to use
x | `int` | The X-coordinate of the chunk
z | `int` | The Z-coordinate of the chunk

Returns | Description
--- | --- 
`byte[]` | byte[] containing the types for each block created by this generator


##### <a id='generateblocksections'></a>public  function __generateBlockSections__(world, random, x, z, biomes)
_Deprecated: Magic value_

_Shapes the chunk for the given coordinates. <p> As of 1.2, chunks are represented by a vertical array of chunk sections, each of which is 16 x 16 x 16 blocks.  If a section is empty (all zero), the section does not need to be supplied, reducing memory usage. <p> This method must return a byte[][] array in the following format: <pre> byte[][] result = new byte[world-height / 16][]; </pre> Each section {@code (sectionID = (Y>>4))} that has blocks needs to be allocated space for the 4096 blocks in that section: <pre> result[sectionID] = new byte[4096]; </pre> while sections that are not populated can be left null. <p> Setting a block at X, Y, Z within the chunk can be done with the following mapping function: <pre> void setBlock(byte[][] result, int x, int y, int z, byte blkid) { {@code if (result[y >> 4) == null) {} {@code result[y >> 4] = new byte[4096];} } {@code result[y >> 4][((y & 0xF) << 8) | (z << 4) | x] = blkid;} } </pre> while reading a block ID can be done with the following mapping function: <pre> byte getBlock(byte[][] result, int x, int y, int z) { {@code if (result[y >> 4) == null) {} return (byte)0; } {@code return result[y >> 4][((y & 0xF) << 8) | (z << 4) | x];} } </pre> Note that this method should <b>never</b> attempt to get the Chunk at the passed coordinates, as doing so may cause an infinite loop_

Argument | Type | Description  
--- | --- | --- 
world | `World` | The world this chunk will be used for
random | `Random` | The random generator to use
x | `int` | The X-coordinate of the chunk
z | `int` | The Z-coordinate of the chunk
biomes | `BiomeGrid` | Proposed biome values for chunk - can be updated by generator

Returns | Description
--- | --- 
`byte[][]` | short[][] containing the types for each block created by this generator


##### <a id='generateextblocksections'></a>public  function __generateExtBlockSections__(world, random, x, z, biomes)
_Deprecated: Magic value_

_Shapes the chunk for the given coordinates, with extended block IDs supported (0-4095). <p> As of 1.2, chunks are represented by a vertical array of chunk sections, each of which is 16 x 16 x 16 blocks. If a section is empty (all zero), the section does not need to be supplied, reducing memory usage. <p> This method must return a short[][] array in the following format: <pre> short[][] result = new short[world-height / 16][]; </pre> Each section {@code (sectionID = (Y>>4))} that has blocks needs to be allocated space for the 4096 blocks in that section: <pre> result[sectionID] = new short[4096]; </pre> while sections that are not populated can be left null. <p> Setting a block at X, Y, Z within the chunk can be done with the following mapping function: <pre> void setBlock(short[][] result, int x, int y, int z, short blkid) { {@code if (result[y >> 4] == null) {} {@code result[y >> 4] = new short[4096];} } {@code result[y >> 4][((y & 0xF) << 8) | (z << 4) | x] = blkid;} } </pre> while reading a block ID can be done with the following mapping function: <pre> short getBlock(short[][] result, int x, int y, int z) { {@code if (result[y >> 4] == null) {} return (short)0; } {@code return result[y >> 4][((y & 0xF) << 8) | (z << 4) | x];} } </pre> while sections that are not populated can be left null. <p> Setting a block at X, Y, Z within the chunk can be done with the following mapping function: <pre> void setBlock(short[][] result, int x, int y, int z, short blkid) { {@code if (result[y >> 4) == null) {} {@code result[y >> 4] = new short[4096];} } {@code result[y >> 4][((y & 0xF) << 8) | (z << 4) | x] = blkid;} } </pre> while reading a block ID can be done with the following mapping function: <pre> short getBlock(short[][] result, int x, int y, int z) { {@code if (result[y >> 4) == null) {} return (short)0; } {@code return result[y >> 4][((y & 0xF) << 8) | (z << 4) | x];} } </pre> <p> Note that this method should <b>never</b> attempt to get the Chunk at the passed coordinates, as doing so may cause an infinite loop <p> Note generators that do not return block IDs above 255 should not implement this method, or should have it return null (which will result in the generateBlockSections() method being called)._

Argument | Type | Description  
--- | --- | --- 
world | `World` | The world this chunk will be used for
random | `Random` | The random generator to use
x | `int` | The X-coordinate of the chunk
z | `int` | The Z-coordinate of the chunk
biomes | `BiomeGrid` | Proposed biome values for chunk - can be updated by generator

Returns | Description
--- | --- 
`short[][]` | short[][] containing the types for each block created by this generator


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
	

