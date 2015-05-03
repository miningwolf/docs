## SimplexOctaveGenerator __class__

>io.wolfscript.util.noise.SimplexOctaveGenerator
>Extends [`OctaveGenerator`](OctaveGenerator.md)

---

### Class Overview

Creates simplex noise through unbiased octaves

Method | Type   
--- | :--- 
 function __noise__(x, y, z, w, frequency, amplitude, normalized) <br> _Creates a simplex octave generator for the given world_ | `double`
 |
__Inherited items from [`OctaveGenerator`](OctaveGenerator.md)__ |
 function __noise__(x, y, z, frequency, amplitude, normalized) <br> _Sets the scale used for all coordinates passed to this generator._ | `double`





---


### Public Methods for [`SimplexOctaveGenerator`](SimplexOctaveGenerator.md)

##### <a id='noise'></a>public  function __noise__(x, y, z, w, frequency, amplitude, normalized)

_Creates a simplex octave generator for the given world_

Argument | Type | Description  
--- | --- | --- 
x | `double` | X-coordinate
y | `double` | Y-coordinate
z | `double` | Z-coordinate
w | `double` | W-coordinate
frequency | `double` | How much to alter the frequency by each octave
amplitude | `double` | How much to alter the amplitude by each octave
normalized | `boolean` | If true, normalize the value to [-1, 1]

Returns | Description
--- | --- 
`double` | W scale /
    public double getWScale() {
        return wScale;
    }

    /** Sets the scale used for each W-coordinates passed


---

### Public Methods for [`OctaveGenerator`](OctaveGenerator.md)

##### <a id='noise'></a>public  function __noise__(x, y, z, frequency, amplitude, normalized)

_Sets the scale used for all coordinates passed to this generator. <p> This is the equivalent to setting each coordinate to the specified value._

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
`double` | X scale /
    public double getXScale() {
        return xScale;
    }

    /** Sets the scale used for each X-coordinates passed


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

