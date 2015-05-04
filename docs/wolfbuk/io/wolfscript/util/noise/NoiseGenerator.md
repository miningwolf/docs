## NoiseGenerator __class__

>io.wolfscript.util.noise.NoiseGenerator

---

### Class Overview

Base class for all noise generators

Method | Type   
--- | :--- 
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


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

