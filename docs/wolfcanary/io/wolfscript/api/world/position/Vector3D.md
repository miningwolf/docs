## Vector3D __class__

>io.wolfscript.api.world.position.Vector3D
>Extends [`Position`](Position.md)

---

### Class Overview

A Vector3D represents a point ins in the 3D space. That can be a block or a player coodinate

Method | Type   
--- | :--- 
static function __fromString__(in) <br> _fromString method_ | [`Vector3D`](Vector3D.md)
static function __getMinor__(v1, v2) <br> _This is the nullvector (0,0,0)_ | [`Vector3D`](Vector3D.md)
static final var __forward__ <br> _This is the nullvector (0,0,0)_ | [`Vector3D`](Vector3D.md)
 |
__Inherited items from [`Position`](Position.md)__ |
new __Position__(x, y, z) <br> _Position constructor_ | _constructor_
new __Position__(x, y, z) <br> _Position constructor_ | _constructor_
new __Position__(x, y, z) <br> _Position constructor_ | _constructor_
new __Position__() <br> _Position constructor_ | _constructor_
 function __copy__() <br> _copy method_ | [`Position`](Position.md)
 function __hashCode__() <br> _Copy constructor copies the primitives_ | `int`
 function __toString__() <br> _toString method_ | `String`





---


### Public Methods for [`Vector3D`](Vector3D.md)

##### <a id='fromstring'></a>public static function __fromString__(in)

_fromString method_

Argument | Type | Description  
--- | --- | --- 
in | `String` | in argument

Returns | 
--- | 
[`Vector3D`](Vector3D.md) |


##### <a id='getminor'></a>public static function __getMinor__(v1, v2)

_This is the nullvector (0,0,0) /
    public static final Vector3D zero = new Vector3D(0, 0, 0);

    /** Shortcut to Vector3D(0,0,1) /
    public static final Vector3D forward = new Vector3D(0, 0, 1);

    public Vector3D(double x, double y, double z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    public Vector3D(int x, int y, int z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    public Vector3D(float x, float y, float z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    public Vector3D() {
        this.x = 0;
        this.y = 0;
        this.z = 0;
    }

    /** Copy constructor copies the primitives_

Argument | Type | Description  
--- | --- | --- 
v1 | [`Vector3D`](Vector3D.md) | v1 argument
v2 | [`Vector3D`](Vector3D.md) | v2 argument

Returns | Description
--- | --- 
[`Vector3D`](Vector3D.md) | double The Distance /
    public static double getDistance(Vector3D v1, Vector3D v2) {
        return v2.getDistance(v1);
    }

    /** Checks if another object equals this one


---

### Public Fields for [`Vector3D`](Vector3D.md)

##### <a id='forward'></a>public static final var __forward__

_This is the nullvector (0,0,0) /
    public static final Vector3D zero = new Vector3D(0, 0, 0);

    /** Shortcut to Vector3D(0,0,1)_

>Returns
>  [`Vector3D`](Vector3D.md)

---
### Public Constructors for [`Position`](Position.md)

##### <a id='position'></a>new __Position__(x, y, z) 

_Position constructor_

Argument | Type | Description  
--- | --- | --- 
x | `double` | x argument
y | `double` | y argument
z | `double` | z argument

##### <a id='position'></a>new __Position__(x, y, z) 

_Position constructor_

Argument | Type | Description  
--- | --- | --- 
x | `int` | x argument
y | `int` | y argument
z | `int` | z argument

##### <a id='position'></a>new __Position__(x, y, z) 

_Position constructor_

Argument | Type | Description  
--- | --- | --- 
x | `float` | x argument
y | `float` | y argument
z | `float` | z argument

##### <a id='position'></a>new __Position__() 

_Position constructor_


---

### Public Methods for [`Position`](Position.md)

##### <a id='copy'></a>public  function __copy__()

_copy method_

Returns | 
--- | 
[`Position`](Position.md) |


##### <a id='hashcode'></a>public  function __hashCode__()

_Copy constructor copies the primitives_

Returns | Description
--- | --- 
`int` | double x /
    public double getX() {
        return x;
    }

    /** Returns a reliable block ordinate


##### <a id='tostring'></a>public  function __toString__()

_toString method_

Returns | 
--- | 
`String` |


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

