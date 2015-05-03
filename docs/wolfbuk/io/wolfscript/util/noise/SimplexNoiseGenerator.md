## SimplexNoiseGenerator __class__

>io.wolfscript.util.noise.SimplexNoiseGenerator
>Extends [`PerlinNoiseGenerator`](PerlinNoiseGenerator.md)

---

### Class Overview

Generates simplex-based noise. <p> This is a modified version of the freely published version in the paper by Stefan Gustavson at <a href="http://staffwww.itn.liu.se/~stegu/simplexnoise/simplexnoise.pdf"> http://staffwww.itn.liu.se/~stegu/simplexnoise/simplexnoise.pdf</a>

Method | Type   
--- | :--- 
static readonly property __Instance__ <br> _Get: Creates a seeded simplex noise generator for the given world_ | [`SimplexNoiseGenerator`](SimplexNoiseGenerator.md)
 |
__Inherited items from [`PerlinNoiseGenerator`](PerlinNoiseGenerator.md)__ |
static function __getNoise__(x, y, z, octaves, frequency, amplitude) <br> _Creates a seeded perlin noise generator for the given world_ | `double`
 |
__Inherited items from [`NoiseGenerator`](NoiseGenerator.md)__ |
 function __noise__(x, y, z, octaves, frequency, amplitude, normalized) <br> _Speedy floor, faster than (int)Math.floor(x)_ | `double`







---


### Public Properties for [`SimplexNoiseGenerator`](SimplexNoiseGenerator.md)

##### <a id='instance'></a>public static readonly property __Instance__

_Get: Creates a seeded simplex noise generator for the given world_

Get | Description
--- | --- 
[`SimplexNoiseGenerator`](SimplexNoiseGenerator.md) | Noise at given location, from range -1 to 1 /
    public static double getNoise(double xin) {
        return instance.noise(xin);
    }

    /** Computes and returns the 2D unseeded simplex noise for the given coordinates in 2D space



---

### Public Methods for [`PerlinNoiseGenerator`](PerlinNoiseGenerator.md)

##### <a id='getnoise'></a>public static function __getNoise__(x, y, z, octaves, frequency, amplitude)

_Creates a seeded perlin noise generator for the given world_

Argument | Type | Description  
--- | --- | --- 
x | `double` | X coordinate
y | `double` | Y coordinate
z | `double` | Z coordinate
octaves | `int` | Number of octaves to use
frequency | `double` | How much to alter the frequency by each octave
amplitude | `double` | How much to alter the amplitude by each octave

Returns | Description
--- | --- 
`double` | Noise at given location, from range -1 to 1 /
    public static double getNoise(double x) {
        return instance.noise(x);
    }

    /** Computes and returns the 2D unseeded perlin noise for the given coordinates in 2D space


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


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

