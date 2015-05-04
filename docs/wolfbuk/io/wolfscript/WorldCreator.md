## WorldCreator __class__

>io.wolfscript.WorldCreator

---

### Class Overview

Represents various types of options that may be used to create a world.

Method | Type   
--- | :--- 
new __WorldCreator__(name) <br> _Creates an empty WorldCreationOptions for the given world name_ | _constructor_
 function __generator__(generator) <br> _Sets the generator that will be used to create or load the world._ | [`WorldCreator`](WorldCreator.md)
 function __copy__(world) <br> _Copies the options from the specified world_ | [`WorldCreator`](WorldCreator.md)
 function __copy__(creator) <br> _Copies the options from the specified [`WorldCreator`](WorldCreator.md)_ | [`WorldCreator`](WorldCreator.md)
 function __generator__(generator) <br> _Sets the generator that will be used to create or load the world._ | [`WorldCreator`](WorldCreator.md)
static function __getGeneratorForName__(world, name, output) <br> _Attempts to get the [`ChunkGenerator`](generator/ChunkGenerator.md) with the given name._ | [`ChunkGenerator`](generator/ChunkGenerator.md)
 function __environment__() <br> _Gets the environment that will be used to create or load the world_ | `Environment`
 function __environment__(env) <br> _Sets the environment that will be used to create or load the world_ | [`WorldCreator`](WorldCreator.md)
 function __createWorld__() <br> _Creates a world with the specified options._ | `World`
 function __generateStructures__() <br> _Gets whether or not structures will be generated in the world._ | `boolean`
 function __generator__() <br> _Gets the generator that will be used to create or load the world._ | [`ChunkGenerator`](generator/ChunkGenerator.md)
 function __generateStructures__(generate) <br> _Sets whether or not worlds created or loaded with this creator will_ | [`WorldCreator`](WorldCreator.md)
 function __generatorSettings__() <br> _Gets the generator settings of the world that will be created or loaded_ | `String`
 function __generator__(generator, output) <br> _Sets the generator that will be used to create or load the world._ | [`WorldCreator`](WorldCreator.md)
 function __generatorSettings__(generatorSettings) <br> _Sets the generator settings of the world that will be created or loaded_ | [`WorldCreator`](WorldCreator.md)
 function __name__() <br> _Gets the name of the world that is to be loaded or created._ | `String`
static function __name__(name) <br> _Creates a new [`WorldCreator`](WorldCreator.md) for the given world name_ | [`WorldCreator`](WorldCreator.md)
 function __seed__(seed) <br> _Sets the seed that will be used to create this world_ | [`WorldCreator`](WorldCreator.md)
 function __seed__() <br> _Gets the seed that will be used to create this world_ | `long`
 function __type__(type) <br> _Sets the type of the world that will be created or loaded_ | [`WorldCreator`](WorldCreator.md)
 function __type__() <br> _Gets the type of the world that will be created or loaded_ | [`WorldType`](WorldType.md)



---

### Public Constructors for [`WorldCreator`](WorldCreator.md)

##### <a id='worldcreator'></a>new __WorldCreator__(name) 

_Creates an empty WorldCreationOptions for the given world name_

Argument | Type | Description  
--- | --- | --- 
name | `String` | Name of the world that will be created

---

### Public Methods for [`WorldCreator`](WorldCreator.md)

##### <a id='generator'></a>public  function __generator__(generator)

_Sets the generator that will be used to create or load the world. <p> This may be null, in which case the "natural" generator for this environment will be used._

Argument | Type | Description  
--- | --- | --- 
generator | [`ChunkGenerator`](generator/ChunkGenerator.md) | Chunk generator

Returns | Description
--- | --- 
[`WorldCreator`](WorldCreator.md) | This object, for chaining


##### <a id='copy'></a>public  function __copy__(world)

_Copies the options from the specified world_

Argument | Type | Description  
--- | --- | --- 
world | `World` | World to copy options from

Returns | Description
--- | --- 
[`WorldCreator`](WorldCreator.md) | This object, for chaining


##### <a id='copy'></a>public  function __copy__(creator)

_Copies the options from the specified [`WorldCreator`](WorldCreator.md)_

Argument | Type | Description  
--- | --- | --- 
creator | [`WorldCreator`](WorldCreator.md) | World creator to copy options from

Returns | Description
--- | --- 
[`WorldCreator`](WorldCreator.md) | This object, for chaining


##### <a id='generator'></a>public  function __generator__(generator)

_Sets the generator that will be used to create or load the world. <p> This may be null, in which case the "natural" generator for this environment will be used. <p> If the generator cannot be found for the given name, the natural environment generator will be used instead and a warning will be printed to the console._

Argument | Type | Description  
--- | --- | --- 
generator | `String` | Name of the generator to use, in "plugin:id" notation

Returns | Description
--- | --- 
[`WorldCreator`](WorldCreator.md) | This object, for chaining


##### <a id='getgeneratorforname'></a>public static function __getGeneratorForName__(world, name, output)

_Attempts to get the [`ChunkGenerator`](generator/ChunkGenerator.md) with the given name. <p> If the generator is not found, null will be returned and a message will be printed to the specified [`CommandSender`](command/CommandSender.md) explaining why. <p> The name must be in the "plugin:id" notation, or optionally just "plugin", where "plugin" is the safe-name of a plugin and "id" is an optional unique identifier for the generator you wish to request from the plugin._

Argument | Type | Description  
--- | --- | --- 
world | `String` | Name of the world this will be used for
name | `String` | Name of the generator to retrieve
output | [`CommandSender`](command/CommandSender.md) | Where to output if errors are present

Returns | Description
--- | --- 
[`ChunkGenerator`](generator/ChunkGenerator.md) | Resulting generator, or null


##### <a id='environment'></a>public  function __environment__()

_Gets the environment that will be used to create or load the world_

Returns | Description
--- | --- 
`Environment` | World environment


##### <a id='environment'></a>public  function __environment__(env)

_Sets the environment that will be used to create or load the world_

Argument | Type | Description  
--- | --- | --- 
env | [`Environment`](Environment.md) | World environment

Returns | Description
--- | --- 
[`WorldCreator`](WorldCreator.md) | This object, for chaining


##### <a id='createworld'></a>public  function __createWorld__()

_Creates a world with the specified options. <p> If the world already exists, it will be loaded from disk and some options may be ignored._

Returns | Description
--- | --- 
`World` | Newly created or loaded world


##### <a id='generatestructures'></a>public  function __generateStructures__()

_Gets whether or not structures will be generated in the world._

Returns | Description
--- | --- 
`boolean` | True if structures will be generated


##### <a id='generator'></a>public  function __generator__()

_Gets the generator that will be used to create or load the world. <p> This may be null, in which case the "natural" generator for this environment will be used._

Returns | Description
--- | --- 
[`ChunkGenerator`](generator/ChunkGenerator.md) | Chunk generator


##### <a id='generatestructures'></a>public  function __generateStructures__(generate)

_Sets whether or not worlds created or loaded with this creator will have structures._

Argument | Type | Description  
--- | --- | --- 
generate | `boolean` | Whether to generate structures

Returns | Description
--- | --- 
[`WorldCreator`](WorldCreator.md) | This object, for chaining


##### <a id='generatorsettings'></a>public  function __generatorSettings__()

_Gets the generator settings of the world that will be created or loaded_

Returns | Description
--- | --- 
`String` | The settings that should be used by the generator


##### <a id='generator'></a>public  function __generator__(generator, output)

_Sets the generator that will be used to create or load the world. <p> This may be null, in which case the "natural" generator for this environment will be used. <p> If the generator cannot be found for the given name, the natural environment generator will be used instead and a warning will be printed to the specified output_

Argument | Type | Description  
--- | --- | --- 
generator | `String` | Name of the generator to use, in "plugin:id" notation
output | [`CommandSender`](command/CommandSender.md) | [`CommandSender`](command/CommandSender.md) that will receive any error messages

Returns | Description
--- | --- 
[`WorldCreator`](WorldCreator.md) | This object, for chaining


##### <a id='generatorsettings'></a>public  function __generatorSettings__(generatorSettings)

_Sets the generator settings of the world that will be created or loaded_

Argument | Type | Description  
--- | --- | --- 
generatorSettings | `String` | The settings that should be used by the generator

Returns | Description
--- | --- 
[`WorldCreator`](WorldCreator.md) | This object, for chaining


##### <a id='name'></a>public  function __name__()

_Gets the name of the world that is to be loaded or created._

Returns | Description
--- | --- 
`String` | World name


##### <a id='name'></a>public static function __name__(name)

_Creates a new [`WorldCreator`](WorldCreator.md) for the given world name_

Argument | Type | Description  
--- | --- | --- 
name | `String` | Name of the world to load or create

Returns | Description
--- | --- 
[`WorldCreator`](WorldCreator.md) | Resulting WorldCreator


##### <a id='seed'></a>public  function __seed__(seed)

_Sets the seed that will be used to create this world_

Argument | Type | Description  
--- | --- | --- 
seed | `long` | World seed

Returns | Description
--- | --- 
[`WorldCreator`](WorldCreator.md) | This object, for chaining


##### <a id='seed'></a>public  function __seed__()

_Gets the seed that will be used to create this world_

Returns | Description
--- | --- 
`long` | World seed


##### <a id='type'></a>public  function __type__(type)

_Sets the type of the world that will be created or loaded_

Argument | Type | Description  
--- | --- | --- 
type | [`WorldType`](WorldType.md) | World type

Returns | Description
--- | --- 
[`WorldCreator`](WorldCreator.md) | This object, for chaining


##### <a id='type'></a>public  function __type__()

_Gets the type of the world that will be created or loaded_

Returns | Description
--- | --- 
[`WorldType`](WorldType.md) | World type


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

