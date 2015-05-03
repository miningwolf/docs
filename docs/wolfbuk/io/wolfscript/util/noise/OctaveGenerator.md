## OctaveGenerator __class__

>io.wolfscript.util.noise.OctaveGenerator

---

### Class Overview

Creates noise using unbiased octaves

Method | Type   
--- | :--- 
 function __noise__(x, y, z, frequency, amplitude, normalized) <br> _Sets the scale used for all coordinates passed to this generator._ | `double`



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


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

