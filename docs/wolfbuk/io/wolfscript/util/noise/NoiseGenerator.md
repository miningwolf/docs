## NoiseGenerator __class__

>io.wolfscript.util.noise.NoiseGenerator

---

### Class Overview

Base class for all noise generators

Method | Type   
--- | :--- 
 function __noise__(x, y, z, octaves, frequency, amplitude, normalized) <br> _Speedy floor, faster than (int)Math.floor(x)_ | `double`



---


### Public Methods for [`NoiseGenerator`](NoiseGenerator.md)

##### <a id='noise'></a>public  function __noise__(x, y, z, octaves, frequency, amplitude, normalized)

_Speedy floor, faster than (int)Math.floor(x)_

Argument | Type | Description  
--- | --- | --- 
x | `double` | Value to floor
y | `double` | Y coordinate
z | `double` | Z coordinate
octaves | `int` | Number of octaves to use
frequency | `double` | How much to alter the frequency by each octave
amplitude | `double` | How much to alter the amplitude by each octave
normalized | `boolean` | If true, normalize the value to [-1, 1]

Returns | Description
--- | --- 
`double` | Floored value /
    public static int floor(double x) {
        return x >= 0 ? (int) x : (int) x - 1;
    }

    protected static double fade(double x) {
        return x x x (x (x 6 - 15) + 10);
    }

    protected static double lerp(double x, double y, double z) {
        return y + x (z - y);
    }

    protected static double grad(int hash, double x, double y, double z) {
        hash &= 15;
        double u = hash < 8 ? x : y;
        double v = hash < 4 ? y : hash == 12 || hash == 14 ? x : z;
        return ((hash & 1) == 0 ? u : -u) + ((hash & 2) == 0 ? v : -v);
    }

    /** Computes and returns the 1D noise for the given coordinate in 1D space


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

