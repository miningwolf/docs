## Rotation __enum__

>io.wolfscript.Rotation

---

### Enum Overview

An enum to specify a rotation based orientation, like that on a clock. <p> It represents how something is viewed, as opposed to cardinal directions.

Item | Type   
--- | :--- 
NONE: <br> _No rotation_ | Rotation
CLOCKWISE_45: <br> _Rotated clockwise by 45 degrees_ | Rotation
CLOCKWISE: <br> _Rotated clockwise by 90 degrees_ | Rotation
CLOCKWISE_135: <br> _Rotated clockwise by 135 degrees_ | Rotation
FLIPPED: <br> _Flipped upside-down, a 180 degree rotation_ | Rotation
FLIPPED_45: <br> _Flipped upside-down + 45 degree rotation_ | Rotation
COUNTER_CLOCKWISE: <br> _Rotated counter-clockwise by 90 degrees_ | Rotation
 function __rotateClockwise__() <br> _No rotation_ | [`Rotation`](Rotation.md)
 function __rotateCounterClockwise__() <br> _Rotate counter-clockwise by 90 degrees._ | [`Rotation`](Rotation.md)



---


### Public Methods for [`Rotation`](Rotation.md)

##### <a id='rotateclockwise'></a>public  function __rotateClockwise__()

_No rotation /
    NONE,
    /** Rotated clockwise by 45 degrees /
    CLOCKWISE_45,
    /** Rotated clockwise by 90 degrees /
    CLOCKWISE,
    /** Rotated clockwise by 135 degrees /
    CLOCKWISE_135,
    /** Flipped upside-down, a 180 degree rotation /
    FLIPPED,
    /** Flipped upside-down + 45 degree rotation /
    FLIPPED_45,
    /** Rotated counter-clockwise by 90 degrees /
    COUNTER_CLOCKWISE,
    /** Rotated counter-clockwise by 45 degrees /
    COUNTER_CLOCKWISE_45
    ;

    private static final Rotation [] rotations = values();

    /** Rotate clockwise by 90 degrees._

Returns | Description
--- | --- 
[`Rotation`](Rotation.md) | the relative rotation


##### <a id='rotatecounterclockwise'></a>public  function __rotateCounterClockwise__()

_Rotate counter-clockwise by 90 degrees._

Returns | Description
--- | --- 
[`Rotation`](Rotation.md) | the relative rotation


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

