## EulerAngle __class__

>io.wolfscript.util.EulerAngle

---

### Class Overview

EulerAngle is used to represent 3 angles, one for each axis (x, y, z). The angles are in radians

Method | Type   
--- | :--- 
 function __equals__(o) <br> _equals method_ | `boolean`
 function __hashCode__() <br> _hashCode method_ | `int`
 function __subtract__(x, y, z) <br> _A EulerAngle with every axis set to 0_ | [`EulerAngle`](EulerAngle.md)
static final var __ZERO__ <br> _A EulerAngle with every axis set to 0_ | [`EulerAngle`](EulerAngle.md)



---


### Public Methods for [`EulerAngle`](EulerAngle.md)

##### <a id='equals'></a>public  function __equals__(o)

_equals method_

Argument | Type | Description  
--- | --- | --- 
o | `Object` | o argument

Returns | 
--- | 
`boolean` |


##### <a id='hashcode'></a>public  function __hashCode__()

_hashCode method_

Returns | 
--- | 
`int` |


##### <a id='subtract'></a>public  function __subtract__(x, y, z)

_A EulerAngle with every axis set to 0 /
    public static final EulerAngle ZERO = new EulerAngle(0, 0, 0);

    private final double x;
    private final double y;
    private final double z;

    /** Creates a EularAngle with each axis set to the passed angle in radians_

Argument | Type | Description  
--- | --- | --- 
x | `double` | the angle for the x axis in radians
y | `double` | the angle for the x axis in radians
z | `double` | the angle for the x axis in radians /
    public EulerAngle(double x, double y, double z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    /** Returns the angle on the x axis in radians

Returns | Description
--- | --- 
[`EulerAngle`](EulerAngle.md) | the angle in radians /
    public double getX() {
        return x;
    }

    /** Returns the angle on the y axis in radians


---

### Public Fields for [`EulerAngle`](EulerAngle.md)

##### <a id='zero'></a>public static final var __ZERO__

_A EulerAngle with every axis set to 0_

>Returns
>  [`EulerAngle`](EulerAngle.md)

---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

