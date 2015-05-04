## WorldConfiguration __class__

>io.wolfscript.config.WorldConfiguration
>Implements [`ConfigurationContainer`](ConfigurationContainer.md)

---

### Class Overview

class WorldConfiguration

Method | Type   
--- | :--- 
new __WorldConfiguration__(path, worldname) <br> _WorldConfiguration constructor_ | _constructor_
 readonly property __SpawnableWaterAnimals__ <br> _Get: Get an Array of String of spawnable water animals_ | `Set<String>`
 readonly property __SpawnableGolems__ <br> _Get: Get an Array of String of spawnable golems_ | `Set<String>`
 readonly property __EnderBlocks__ <br> _Get: Get the block types allowed for enderman to move._ | `int[]`
 readonly property __BannedBlocks__ <br> _Get: Get the block types banned._ | `int[]`
 readonly property __SpawnProtectionSize__ <br> _Get: Get the spawn protection size_ | `int`
 readonly property __GeneratorSettings__ <br> _Get: Gets the World Generator settings_ | `String`
 readonly property __NaturalSpawnRate__ <br> _Get: Get the natural spawn rate, a percentage._ | `int`
 readonly property __GameMode__ <br> _Get: Get the game mode for this world_ | [`GameMode`](../api/GameMode.md)
 readonly property __File__ <br> _Get: Get the configuration file_ | `PropertiesFile`
 readonly property __Difficulty__ <br> _Get: Get the difficulty_ | `Difficulty`
 readonly property __SpawnableAnimals__ <br> _Get: Get an Array of String of spawnable animals_ | `Set<String>`
 readonly property __SpawnableMobs__ <br> _Get: Get an Array of String of spawnable monsters_ | `Set<String>`
 readonly property __MaxBuildHeight__ <br> _Get: Get the maximum build height_ | `int`
 readonly property __WorldType__ <br> _Get: Get the world type._ | [`WorldType`](../api/world/WorldType.md)
 readonly property __WorldName__ <br> _Get: Get the world name_ | `String`
 readonly property __WorldSeed__ <br> _Get: Get the world seed._ | `String`
 function __isEndAllowed__() <br> _Get whether the end is allowed_ | `boolean`
static function __create__(name, dimensionType) <br> _create method_ | [`WorldConfiguration`](WorldConfiguration.md)
 function __allowWarpAutoLoad__() <br> _Gets whether to load a world when a warp is used_ | `boolean`
 function __canSpawnGolems__() <br> _Get whether golems can be spawned_ | `boolean`
 function __canSpawnMonsters__() <br> _Get whether monsters can be spawned_ | `boolean`
 function __canSpawnAnimals__() <br> _Get whether animals can be spawned_ | `boolean`
 function __canSpawnVillagers__() <br> _Get whether NPCs can be spawned_ | `boolean`
 function __isHealthEnabled__() <br> _Get whether health is enabled._ | `boolean`
 function __forceDefaultGamemodeDimensional__() <br> _Gets whether to force the default GameMode on a Player when changing Dimensions_ | `boolean`
 function __forceDefaultGamemode__() <br> _Gets whether to force the default GameMode on a Player when changing Worlds_ | `boolean`
 function __generatesStructures__() <br> _Get whether structures must be generated_ | `boolean`
 function __isAutoHealEnabled__() <br> _Get whether auto heal is enabled._ | `boolean`
 function __isAnimalSpawnable__(name) <br> _See if a given animal is allowed to spawn_ | `boolean`
 function __isExperienceEnabled__() <br> _Get whether experience is enabled_ | `boolean`
 function __isFlightAllowed__() <br> _Get whether flight is allowed_ | `boolean`
 function __isMobSpawnable__(name) <br> _See if a given mob is allowed to spawn_ | `boolean`
 function __isNetherAllowed__() <br> _Get whether the nether is allowed_ | `boolean`
 function __isPvpEnabled__() <br> _Get whether PVP is enabled_ | `boolean`
 function __reload__() <br> _Reloads the configuration file_ | `void`
 function __startupAutoLoadEnabled__() <br> _startupAutoLoadEnabled method_ | `boolean`



---

### Public Constructors for [`WorldConfiguration`](WorldConfiguration.md)

##### <a id='worldconfiguration'></a>new __WorldConfiguration__(path, worldname) 

_WorldConfiguration constructor_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument
worldname | `String` | worldname argument

---

### Public Properties for [`WorldConfiguration`](WorldConfiguration.md)

##### <a id='spawnablewateranimals'></a>public  readonly property __SpawnableWaterAnimals__

_Get: Get an Array of String of spawnable water animals_

Get | Description
--- | --- 
`Set<String>` | water animals array



##### <a id='spawnablegolems'></a>public  readonly property __SpawnableGolems__

_Get: Get an Array of String of spawnable golems_

Get | Description
--- | --- 
`Set<String>` | golem array



##### <a id='enderblocks'></a>public  readonly property __EnderBlocks__

_Get: Get the block types allowed for enderman to move._

Get | Description
--- | --- 
`int[]` | An integer array containing the block types.



##### <a id='bannedblocks'></a>public  readonly property __BannedBlocks__

_Get: Get the block types banned._

Get | Description
--- | --- 
`int[]` | An integer array containing the block types.



##### <a id='spawnprotectionsize'></a>public  readonly property __SpawnProtectionSize__

_Get: Get the spawn protection size_

Get | Description
--- | --- 
`int` | an integer between 0 and INTMAX, 16 on failure.



##### <a id='generatorsettings'></a>public  readonly property __GeneratorSettings__

_Get: Gets the World Generator settings_

Get | Description
--- | --- 
`String` | world generator settings



##### <a id='naturalspawnrate'></a>public  readonly property __NaturalSpawnRate__

_Get: Get the natural spawn rate, a percentage._

Get | Description
--- | --- 
`int` | A value from 0 to 100, default is 100.



##### <a id='gamemode'></a>public  readonly property __GameMode__

_Get: Get the game mode for this world_

Get | Description
--- | --- 
[`GameMode`](../api/GameMode.md) | game mode



##### <a id='file'></a>public  readonly property __File__

_Get: Get the configuration file_

Get | 
--- | 
`PropertiesFile` |



##### <a id='difficulty'></a>public  readonly property __Difficulty__

_Get: Get the difficulty_

Get | Description
--- | --- 
`Difficulty` | difficulty



##### <a id='spawnableanimals'></a>public  readonly property __SpawnableAnimals__

_Get: Get an Array of String of spawnable animals_

Get | Description
--- | --- 
`Set<String>` | animals array



##### <a id='spawnablemobs'></a>public  readonly property __SpawnableMobs__

_Get: Get an Array of String of spawnable monsters_

Get | Description
--- | --- 
`Set<String>` | monster array



##### <a id='maxbuildheight'></a>public  readonly property __MaxBuildHeight__

_Get: Get the maximum build height_

Get | Description
--- | --- 
`int` | an integer, defaulting to 256



##### <a id='worldtype'></a>public  readonly property __WorldType__

_Get: Get the world type._

Get | Description
--- | --- 
[`WorldType`](../api/world/WorldType.md) | a String with the world type. Default is DEFAULT



##### <a id='worldname'></a>public  readonly property __WorldName__

_Get: Get the world name_

Get | Description
--- | --- 
`String` | a string with the world name



##### <a id='worldseed'></a>public  readonly property __WorldSeed__

_Get: Get the world seed._

Get | Description
--- | --- 
`String` | a string containing the world seed



---

### Public Methods for [`WorldConfiguration`](WorldConfiguration.md)

##### <a id='isendallowed'></a>public  function __isEndAllowed__()

_Get whether the end is allowed_

Returns | Description
--- | --- 
`boolean` | true when allowed, false otherwise


##### <a id='create'></a>public static function __create__(name, dimensionType)

_create method_

Argument | Type | Description  
--- | --- | --- 
name | `String` | name argument
dimensionType | [`DimensionType`](../api/world/DimensionType.md) | dimensionType argument

Returns | 
--- | 
[`WorldConfiguration`](WorldConfiguration.md) |


##### <a id='allowwarpautoload'></a>public  function __allowWarpAutoLoad__()

_Gets whether to load a world when a warp is used_

Returns | Description
--- | --- 
`boolean` | `true` if loading allowed


##### <a id='canspawngolems'></a>public  function __canSpawnGolems__()

_Get whether golems can be spawned_

Returns | Description
--- | --- 
`boolean` | true or false


##### <a id='canspawnmonsters'></a>public  function __canSpawnMonsters__()

_Get whether monsters can be spawned_

Returns | Description
--- | --- 
`boolean` | true or false


##### <a id='canspawnanimals'></a>public  function __canSpawnAnimals__()

_Get whether animals can be spawned_

Returns | Description
--- | --- 
`boolean` | true or false


##### <a id='canspawnvillagers'></a>public  function __canSpawnVillagers__()

_Get whether NPCs can be spawned_

Returns | Description
--- | --- 
`boolean` | true or false


##### <a id='ishealthenabled'></a>public  function __isHealthEnabled__()

_Get whether health is enabled._

Returns | Description
--- | --- 
`boolean` | true when enabled, false otherwise. Default is true.


##### <a id='forcedefaultgamemodedimensional'></a>public  function __forceDefaultGamemodeDimensional__()

_Gets whether to force the default GameMode on a Player when changing Dimensions_

Returns | Description
--- | --- 
`boolean` | `true` if force


##### <a id='forcedefaultgamemode'></a>public  function __forceDefaultGamemode__()

_Gets whether to force the default GameMode on a Player when changing Worlds_

Returns | Description
--- | --- 
`boolean` | `true` if force


##### <a id='generatesstructures'></a>public  function __generatesStructures__()

_Get whether structures must be generated_

Returns | Description
--- | --- 
`boolean` | true or false


##### <a id='isautohealenabled'></a>public  function __isAutoHealEnabled__()

_Get whether auto heal is enabled._

Returns | Description
--- | --- 
`boolean` | true or false. Returns value of canSpawnMonsters() if auto-heal is 'default'


##### <a id='isanimalspawnable'></a>public  function __isAnimalSpawnable__(name)

_See if a given animal is allowed to spawn This method looks in both the normal and water animal lists._

Argument | Type | Description  
--- | --- | --- 
name | `String` | the name of the Animal

Returns | Description
--- | --- 
`boolean` | true or false


##### <a id='isexperienceenabled'></a>public  function __isExperienceEnabled__()

_Get whether experience is enabled_

Returns | Description
--- | --- 
`boolean` | true when enabled, false otherwise. Default is true.


##### <a id='isflightallowed'></a>public  function __isFlightAllowed__()

_Get whether flight is allowed_

Returns | Description
--- | --- 
`boolean` | true when allowed, false otherwise


##### <a id='ismobspawnable'></a>public  function __isMobSpawnable__(name)

_See if a given mob is allowed to spawn_

Argument | Type | Description  
--- | --- | --- 
name | `String` | the name of the Mob

Returns | Description
--- | --- 
`boolean` | true or false


##### <a id='isnetherallowed'></a>public  function __isNetherAllowed__()

_Get whether the nether is allowed_

Returns | Description
--- | --- 
`boolean` | true when allowed, false otherwise


##### <a id='ispvpenabled'></a>public  function __isPvpEnabled__()

_Get whether PVP is enabled_

Returns | Description
--- | --- 
`boolean` | true when enabled, false otherwise. Default is true.


##### <a id='reload'></a>public  function __reload__()

_Reloads the configuration file_

Returns | 
--- | 
`void` |


##### <a id='startupautoloadenabled'></a>public  function __startupAutoLoadEnabled__()

_startupAutoLoadEnabled method_

Returns | 
--- | 
`boolean` |


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

