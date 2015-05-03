## BlockFace __enum__

>io.wolfscript.api.world.blocks.BlockFace

---

### Enum Overview

A BlockFace is a side of a block

Item | Type   
--- | :--- 
AxisDirection.NEGATIVE: <br> _AxisDirection.NEGATIVE BlockFace_ | BlockFace
AxisDirection.POSITIVE: <br> _AxisDirection.POSITIVE BlockFace_ | BlockFace
AxisDirection.NEGATIVE: <br> _AxisDirection.NEGATIVE BlockFace_ | BlockFace
AxisDirection.POSITIVE: <br> _AxisDirection.POSITIVE BlockFace_ | BlockFace
AxisDirection.NEGATIVE: <br> _AxisDirection.NEGATIVE BlockFace_ | BlockFace
AxisDirection.POSITIVE: <br> _AxisDirection.POSITIVE BlockFace_ | BlockFace
null: <br> _null BlockFace_ | BlockFace
 readonly property __Plane__ <br> _Plane property_ | `Plane`
static function __fromByte__(normal) <br> _Return this faces normal direction (The byte value to this face)_ | [`BlockFace`](BlockFace.md)



---


### Public Properties for [`BlockFace`](BlockFace.md)

##### <a id='plane'></a>public  readonly property __Plane__

_Plane property_

Get | 
--- | 
`Plane` |



---

### Public Methods for [`BlockFace`](BlockFace.md)

##### <a id='frombyte'></a>public static function __fromByte__(normal)

_Return this faces normal direction (The byte value to this face)_

Argument | Type | Description  
--- | --- | --- 
normal | `byte` | the facing byte value

Returns | Description
--- | --- 
[`BlockFace`](BlockFace.md) | the face byte value /
    public byte getByte() {
        return (byte)ordinal();
    }

    public Axis getAxis() {
        return axis;
    }

    public AxisDirection getDirection() {
        return direction;
    }

    /** Get a BlockFace from byte


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

