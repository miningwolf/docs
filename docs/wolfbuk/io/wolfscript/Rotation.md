## Rotation __enum__

>io.wolfscript.Rotation

---

### Enum Overview

An enum to specify a rotation based orientation, like that on a clock. <p> It represents how something is viewed, as opposed to cardinal directions.

Item | Type   
--- | :--- 
COUNTER_CLOCKWISE: <br> _No rotation_ | Rotation
 function __rotateCounterClockwise__() <br> _No rotation_ | [`Rotation`](Rotation.md)



---


### Public Methods for [`Rotation`](Rotation.md)

##### <a id='rotatecounterclockwise'></a>public  function __rotateCounterClockwise__()

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
[`Rotation`](Rotation.md) | the relative rotation /
    public Rotation rotateClockwise() {
        return rotations[(this.ordinal() + 1) & 0x7];
    }

    /** Rotate counter-clockwise by 90 degrees.


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

