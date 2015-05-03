## PerlinOctaveGenerator __class__

>io.wolfscript.util.noise.PerlinOctaveGenerator
>Extends [`OctaveGenerator`](OctaveGenerator.md)

---

### Class Overview

Creates perlin noise through unbiased octaves

Method | Type   
--- | :--- 
new __PerlinOctaveGenerator__(rand, octaves) <br> _Creates a perlin octave generator for the given world_ | _constructor_
 |
__Inherited items from [`OctaveGenerator`](OctaveGenerator.md)__ |
 function __noise__(x, y, z, frequency, amplitude, normalized) <br> _Sets the scale used for all coordinates passed to this generator._ | `double`





---

### Public Constructors for [`PerlinOctaveGenerator`](PerlinOctaveGenerator.md)

##### <a id='perlinoctavegenerator'></a>new __PerlinOctaveGenerator__(rand, octaves) 

_Creates a perlin octave generator for the given world_

Argument | Type | Description  
--- | --- | --- 
rand | `Random` | Random object to construct this generator for
octaves | `int` | Amount of octaves to create /
    public PerlinOctaveGenerator(World world, int octaves) {
        this(new Random(world.getSeed()), octaves);
    }

    /** Creates a perlin octave generator for the given world

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
	

