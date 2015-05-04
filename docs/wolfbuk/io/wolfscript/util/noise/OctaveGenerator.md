## OctaveGenerator __class__

>io.wolfscript.util.noise.OctaveGenerator

---

### Class Overview

Creates noise using unbiased octaves

Method | Type   
--- | :--- 
 readonly property __Octaves__ <br> _Get: Gets a clone of the individual octaves used within this generator_ | `NoiseGenerator[]`
  property __YScale__ <br> _Get: Gets the scale used for each Y-coordinates passed<br>Set: Sets the scale used for each Y-coordinates passed_ | `double`
  property __ZScale__ <br> _Get: Gets the scale used for each Z-coordinates passed<br>Set: Sets the scale used for each Z-coordinates passed_ | `double`
  property __XScale__ <br> _Get: Gets the scale used for each X-coordinates passed<br>Set: Sets the scale used for each X-coordinates passed_ | `double`
 writeonly property __Scale__ <br> _Set: Sets the scale used for all coordinates passed to this generator._ | `void`
 function __noise__(x, y, z, frequency, amplitude, normalized) <br> _Generates noise for the 3D coordinates using the specified number of_ | `double`
 function __noise__(x, y, z, frequency, amplitude) <br> _Generates noise for the 3D coordinates using the specified number of_ | `double`
 function __noise__(x, y, frequency, amplitude, normalized) <br> _Generates noise for the 2D coordinates using the specified number of_ | `double`
 function __noise__(x, y, frequency, amplitude) <br> _Generates noise for the 2D coordinates using the specified number of_ | `double`
 function __noise__(x, frequency, amplitude) <br> _Generates noise for the 1D coordinates using the specified number of_ | `double`
 function __noise__(x, frequency, amplitude, normalized) <br> _Generates noise for the 1D coordinates using the specified number of_ | `double`



---


### Public Properties for [`OctaveGenerator`](OctaveGenerator.md)

##### <a id='octaves'></a>public  readonly property __Octaves__

_Get: Gets a clone of the individual octaves used within this generator_

Get | Description
--- | --- 
`NoiseGenerator[]` | Clone of the individual octaves



##### <a id='yscale'></a>public   property __YScale__

_Get: Gets the scale used for each Y-coordinates passed<br>Set: Sets the scale used for each Y-coordinates passed_

Get | Description
--- | --- 
`double` | Y scale

Set | Type | Description  
--- | --- | --- 
scale | `double` | New Y scale


##### <a id='zscale'></a>public   property __ZScale__

_Get: Gets the scale used for each Z-coordinates passed<br>Set: Sets the scale used for each Z-coordinates passed_

Get | Description
--- | --- 
`double` | Z scale

Set | Type | Description  
--- | --- | --- 
scale | `double` | New Z scale


##### <a id='xscale'></a>public   property __XScale__

_Get: Gets the scale used for each X-coordinates passed<br>Set: Sets the scale used for each X-coordinates passed_

Get | Description
--- | --- 
`double` | X scale

Set | Type | Description  
--- | --- | --- 
scale | `double` | New X scale


##### <a id='scale'></a>public  writeonly property __Scale__

_Set: Sets the scale used for all coordinates passed to this generator. <p> This is the equivalent to setting each coordinate to the specified value._

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
scale | `double` | New value to scale each coordinate by


---

### Public Methods for [`OctaveGenerator`](OctaveGenerator.md)

##### <a id='noise'></a>public  function __noise__(x, y, z, frequency, amplitude, normalized)

_Generates noise for the 3D coordinates using the specified number of octaves and parameters_

Argument | Type | Description  
--- | --- | --- 
x | `double` | X-coordinate
y | `double` | Y-coordinate
z | `double` | Z-coordinate
frequency | `double` | How much to alter the frequency by each octave
amplitude | `double` | How much to alter the amplitude by each octave
normalized | `boolean` | If true, normalize the value to [-1, 1]

Returns | Description
--- | --- 
`double` | Resulting noise


##### <a id='noise'></a>public  function __noise__(x, y, z, frequency, amplitude)

_Generates noise for the 3D coordinates using the specified number of octaves and parameters_

Argument | Type | Description  
--- | --- | --- 
x | `double` | X-coordinate
y | `double` | Y-coordinate
z | `double` | Z-coordinate
frequency | `double` | How much to alter the frequency by each octave
amplitude | `double` | How much to alter the amplitude by each octave

Returns | Description
--- | --- 
`double` | Resulting noise


##### <a id='noise'></a>public  function __noise__(x, y, frequency, amplitude, normalized)

_Generates noise for the 2D coordinates using the specified number of octaves and parameters_

Argument | Type | Description  
--- | --- | --- 
x | `double` | X-coordinate
y | `double` | Y-coordinate
frequency | `double` | How much to alter the frequency by each octave
amplitude | `double` | How much to alter the amplitude by each octave
normalized | `boolean` | If true, normalize the value to [-1, 1]

Returns | Description
--- | --- 
`double` | Resulting noise


##### <a id='noise'></a>public  function __noise__(x, y, frequency, amplitude)

_Generates noise for the 2D coordinates using the specified number of octaves and parameters_

Argument | Type | Description  
--- | --- | --- 
x | `double` | X-coordinate
y | `double` | Y-coordinate
frequency | `double` | How much to alter the frequency by each octave
amplitude | `double` | How much to alter the amplitude by each octave

Returns | Description
--- | --- 
`double` | Resulting noise


##### <a id='noise'></a>public  function __noise__(x, frequency, amplitude)

_Generates noise for the 1D coordinates using the specified number of octaves and parameters_

Argument | Type | Description  
--- | --- | --- 
x | `double` | X-coordinate
frequency | `double` | How much to alter the frequency by each octave
amplitude | `double` | How much to alter the amplitude by each octave

Returns | Description
--- | --- 
`double` | Resulting noise


##### <a id='noise'></a>public  function __noise__(x, frequency, amplitude, normalized)

_Generates noise for the 1D coordinates using the specified number of octaves and parameters_

Argument | Type | Description  
--- | --- | --- 
x | `double` | X-coordinate
frequency | `double` | How much to alter the frequency by each octave
amplitude | `double` | How much to alter the amplitude by each octave
normalized | `boolean` | If true, normalize the value to [-1, 1]

Returns | Description
--- | --- 
`double` | Resulting noise


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

