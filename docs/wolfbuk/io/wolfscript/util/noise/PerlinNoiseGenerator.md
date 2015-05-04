## PerlinNoiseGenerator __class__

>io.wolfscript.util.noise.PerlinNoiseGenerator
>Extends [`NoiseGenerator`](NoiseGenerator.md)

---

### Class Overview

Generates noise using the "classic" perlin generator

Method | Type   
--- | :--- 
new __PerlinNoiseGenerator__(world) <br> _Creates a seeded perlin noise generator for the given world_ | _constructor_
new __PerlinNoiseGenerator__(seed) <br> _Creates a seeded perlin noise generator for the given seed_ | _constructor_
new __PerlinNoiseGenerator__(rand) <br> _Creates a seeded perlin noise generator with the given Random_ | _constructor_
static readonly property __Instance__ <br> _Get: Gets the singleton unseeded instance of this generator_ | [`PerlinNoiseGenerator`](PerlinNoiseGenerator.md)
static function __getNoise__(x) <br> _Computes and returns the 1D unseeded perlin noise for the given_ | `double`
static function __getNoise__(x, y) <br> _Computes and returns the 2D unseeded perlin noise for the given_ | `double`
static function __getNoise__(x, y, z) <br> _Computes and returns the 3D unseeded perlin noise for the given_ | `double`
static function __getNoise__(x, octaves, frequency, amplitude) <br> _Generates noise for the 1D coordinates using the specified number of_ | `double`
static function __getNoise__(x, y, octaves, frequency, amplitude) <br> _Generates noise for the 2D coordinates using the specified number of_ | `double`
static function __getNoise__(x, y, z, octaves, frequency, amplitude) <br> _Generates noise for the 3D coordinates using the specified number of_ | `double`
 function __noise__(x, y, z) <br> _noise method_ | `double`
 |
__Inherited items from [`NoiseGenerator`](NoiseGenerator.md)__ |
static function __floor__(x) <br> _Speedy floor, faster than (int)Math.floor(x)_ | `int`
 function __noise__(x) <br> _Computes and returns the 1D noise for the given coordinate in 1D space_ | `double`
 function __noise__(x, y) <br> _Computes and returns the 2D noise for the given coordinates in 2D space_ | `double`
abstract function __noise__(x, y, z) <br> _Computes and returns the 3D noise for the given coordinates in 3D space_ | `double`
 function __noise__(x, octaves, frequency, amplitude) <br> _Generates noise for the 1D coordinates using the specified number of_ | `double`
 function __noise__(x, octaves, frequency, amplitude, normalized) <br> _Generates noise for the 1D coordinates using the specified number of_ | `double`
 function __noise__(x, y, octaves, frequency, amplitude) <br> _Generates noise for the 2D coordinates using the specified number of_ | `double`
 function __noise__(x, y, octaves, frequency, amplitude, normalized) <br> _Generates noise for the 2D coordinates using the specified number of_ | `double`
 function __noise__(x, y, z, octaves, frequency, amplitude) <br> _Generates noise for the 3D coordinates using the specified number of_ | `double`
 function __noise__(x, y, z, octaves, frequency, amplitude, normalized) <br> _Generates noise for the 3D coordinates using the specified number of_ | `double`





---

### Public Constructors for [`PerlinNoiseGenerator`](PerlinNoiseGenerator.md)

##### <a id='perlinnoisegenerator'></a>new __PerlinNoiseGenerator__(world) 

_Creates a seeded perlin noise generator for the given world_

Argument | Type | Description  
--- | --- | --- 
world | `World` | World to construct this generator for

##### <a id='perlinnoisegenerator'></a>new __PerlinNoiseGenerator__(seed) 

_Creates a seeded perlin noise generator for the given seed_

Argument | Type | Description  
--- | --- | --- 
seed | `long` | Seed to construct this generator for

##### <a id='perlinnoisegenerator'></a>new __PerlinNoiseGenerator__(rand) 

_Creates a seeded perlin noise generator with the given Random_

Argument | Type | Description  
--- | --- | --- 
rand | `Random` | Random to construct with

---

### Public Properties for [`PerlinNoiseGenerator`](PerlinNoiseGenerator.md)

##### <a id='instance'></a>public static readonly property __Instance__

_Get: Gets the singleton unseeded instance of this generator_

Get | Description
--- | --- 
[`PerlinNoiseGenerator`](PerlinNoiseGenerator.md) | Singleton



---

### Public Methods for [`PerlinNoiseGenerator`](PerlinNoiseGenerator.md)

##### <a id='getnoise'></a>public static function __getNoise__(x)

_Computes and returns the 1D unseeded perlin noise for the given coordinates in 1D space_

Argument | Type | Description  
--- | --- | --- 
x | `double` | X coordinate

Returns | Description
--- | --- 
`double` | Noise at given location, from range -1 to 1


##### <a id='getnoise'></a>public static function __getNoise__(x, y)

_Computes and returns the 2D unseeded perlin noise for the given coordinates in 2D space_

Argument | Type | Description  
--- | --- | --- 
x | `double` | X coordinate
y | `double` | Y coordinate

Returns | Description
--- | --- 
`double` | Noise at given location, from range -1 to 1


##### <a id='getnoise'></a>public static function __getNoise__(x, y, z)

_Computes and returns the 3D unseeded perlin noise for the given coordinates in 3D space_

Argument | Type | Description  
--- | --- | --- 
x | `double` | X coordinate
y | `double` | Y coordinate
z | `double` | Z coordinate

Returns | Description
--- | --- 
`double` | Noise at given location, from range -1 to 1


##### <a id='getnoise'></a>public static function __getNoise__(x, octaves, frequency, amplitude)

_Generates noise for the 1D coordinates using the specified number of octaves and parameters_

Argument | Type | Description  
--- | --- | --- 
x | `double` | X-coordinate
octaves | `int` | Number of octaves to use
frequency | `double` | How much to alter the frequency by each octave
amplitude | `double` | How much to alter the amplitude by each octave

Returns | Description
--- | --- 
`double` | Resulting noise


##### <a id='getnoise'></a>public static function __getNoise__(x, y, octaves, frequency, amplitude)

_Generates noise for the 2D coordinates using the specified number of octaves and parameters_

Argument | Type | Description  
--- | --- | --- 
x | `double` | X-coordinate
y | `double` | Y-coordinate
octaves | `int` | Number of octaves to use
frequency | `double` | How much to alter the frequency by each octave
amplitude | `double` | How much to alter the amplitude by each octave

Returns | Description
--- | --- 
`double` | Resulting noise


##### <a id='getnoise'></a>public static function __getNoise__(x, y, z, octaves, frequency, amplitude)

_Generates noise for the 3D coordinates using the specified number of octaves and parameters_

Argument | Type | Description  
--- | --- | --- 
x | `double` | X-coordinate
y | `double` | Y-coordinate
z | `double` | Z-coordinate
octaves | `int` | Number of octaves to use
frequency | `double` | How much to alter the frequency by each octave
amplitude | `double` | How much to alter the amplitude by each octave

Returns | Description
--- | --- 
`double` | Resulting noise


##### <a id='noise'></a>public  function __noise__(x, y, z)

_noise method_

Argument | Type | Description  
--- | --- | --- 
x | `double` | x argument
y | `double` | y argument
z | `double` | z argument

Returns | 
--- | 
`double` |


---

### Public Methods for [`NoiseGenerator`](NoiseGenerator.md)

##### <a id='floor'></a>public static function __floor__(x)

_Speedy floor, faster than (int)Math.floor(x)_

Argument | Type | Description  
--- | --- | --- 
x | `double` | Value to floor

Returns | Description
--- | --- 
`int` | Floored value


##### <a id='noise'></a>public  function __noise__(x)

_Computes and returns the 1D noise for the given coordinate in 1D space_

Argument | Type | Description  
--- | --- | --- 
x | `double` | X coordinate

Returns | Description
--- | --- 
`double` | Noise at given location, from range -1 to 1


##### <a id='noise'></a>public  function __noise__(x, y)

_Computes and returns the 2D noise for the given coordinates in 2D space_

Argument | Type | Description  
--- | --- | --- 
x | `double` | X coordinate
y | `double` | Y coordinate

Returns | Description
--- | --- 
`double` | Noise at given location, from range -1 to 1


##### <a id='noise'></a>public abstract function __noise__(x, y, z)

_Computes and returns the 3D noise for the given coordinates in 3D space_

Argument | Type | Description  
--- | --- | --- 
x | `double` | X coordinate
y | `double` | Y coordinate
z | `double` | Z coordinate

Returns | Description
--- | --- 
`double` | Noise at given location, from range -1 to 1


##### <a id='noise'></a>public  function __noise__(x, octaves, frequency, amplitude)

_Generates noise for the 1D coordinates using the specified number of octaves and parameters_

Argument | Type | Description  
--- | --- | --- 
x | `double` | X-coordinate
octaves | `int` | Number of octaves to use
frequency | `double` | How much to alter the frequency by each octave
amplitude | `double` | How much to alter the amplitude by each octave

Returns | Description
--- | --- 
`double` | Resulting noise


##### <a id='noise'></a>public  function __noise__(x, octaves, frequency, amplitude, normalized)

_Generates noise for the 1D coordinates using the specified number of octaves and parameters_

Argument | Type | Description  
--- | --- | --- 
x | `double` | X-coordinate
octaves | `int` | Number of octaves to use
frequency | `double` | How much to alter the frequency by each octave
amplitude | `double` | How much to alter the amplitude by each octave
normalized | `boolean` | If true, normalize the value to [-1, 1]

Returns | Description
--- | --- 
`double` | Resulting noise


##### <a id='noise'></a>public  function __noise__(x, y, octaves, frequency, amplitude)

_Generates noise for the 2D coordinates using the specified number of octaves and parameters_

Argument | Type | Description  
--- | --- | --- 
x | `double` | X-coordinate
y | `double` | Y-coordinate
octaves | `int` | Number of octaves to use
frequency | `double` | How much to alter the frequency by each octave
amplitude | `double` | How much to alter the amplitude by each octave

Returns | Description
--- | --- 
`double` | Resulting noise


##### <a id='noise'></a>public  function __noise__(x, y, octaves, frequency, amplitude, normalized)

_Generates noise for the 2D coordinates using the specified number of octaves and parameters_

Argument | Type | Description  
--- | --- | --- 
x | `double` | X-coordinate
y | `double` | Y-coordinate
octaves | `int` | Number of octaves to use
frequency | `double` | How much to alter the frequency by each octave
amplitude | `double` | How much to alter the amplitude by each octave
normalized | `boolean` | If true, normalize the value to [-1, 1]

Returns | Description
--- | --- 
`double` | Resulting noise


##### <a id='noise'></a>public  function __noise__(x, y, z, octaves, frequency, amplitude)

_Generates noise for the 3D coordinates using the specified number of octaves and parameters_

Argument | Type | Description  
--- | --- | --- 
x | `double` | X-coordinate
y | `double` | Y-coordinate
z | `double` | Z-coordinate
octaves | `int` | Number of octaves to use
frequency | `double` | How much to alter the frequency by each octave
amplitude | `double` | How much to alter the amplitude by each octave

Returns | Description
--- | --- 
`double` | Resulting noise


##### <a id='noise'></a>public  function __noise__(x, y, z, octaves, frequency, amplitude, normalized)

_Generates noise for the 3D coordinates using the specified number of octaves and parameters_

Argument | Type | Description  
--- | --- | --- 
x | `double` | X-coordinate
y | `double` | Y-coordinate
z | `double` | Z-coordinate
octaves | `int` | Number of octaves to use
frequency | `double` | How much to alter the frequency by each octave
amplitude | `double` | How much to alter the amplitude by each octave
normalized | `boolean` | If true, normalize the value to [-1, 1]

Returns | Description
--- | --- 
`double` | Resulting noise


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

