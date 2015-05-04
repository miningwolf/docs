## RailProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.RailProperties
>Extends [`BlockProperties`](BlockProperties.md)

---

### Class Overview

Rail properties helper

Method | Type   
--- | :--- 
static function __applyShape__(block, value) <br> _Normal Rail shape property, Values: `Direction`_ | [`Block`](../../Block.md)
static final var __shapeNormalRail__ <br> _Normal Rail shape property, Values: `Direction`_ | [`BlockEnumProperty`](../BlockEnumProperty.md)
static final var __shapePoweredRail__ <br> _Powered and Activator Rail shape property, Values: `Direction`_ | [`BlockEnumProperty`](../BlockEnumProperty.md)
static final var __shapeDetectorRail__ <br> _Detector Rail shape property, Values: `Direction`_ | [`BlockEnumProperty`](../BlockEnumProperty.md)
 |
__Inherited items from [`BlockProperties`](BlockProperties.md)__ |





---


### Public Methods for [`RailProperties`](RailProperties.md)

##### <a id='applyshape'></a>public static function __applyShape__(block, value)

_Normal Rail shape property, Values: `Direction` /
    public static final BlockEnumProperty shapeNormalRail = getInstanceFor(Rail, "shape");

    /** Powered and Activator Rail shape property, Values: `Direction` /
    public static final BlockEnumProperty shapePoweredRail = getInstanceFor(PoweredRail, "shape");

    /** Detector Rail shape property, Values: `Direction` /
    public static final BlockEnumProperty shapeDetectorRail = getInstanceFor(DetectorRail, "shape");

    /** Rail directions /
    public enum Direction {
        NORTH_SOUTH,
        EAST_WEST,
        ASCENDING_EAST,
        ASCENDING_WEST,
        ASCENDING_NORTH,
        ASCENDING_SOUTH,
        SOUTH_EAST,
        SOUTH_WEST,
        NORTH_WEST,
        NORTH_EAST;

        public static Direction valueOf(int ordinal) {
            if (ordinal < 0 || ordinal >= values().length) {
                throw new IllegalArgumentException();
            }
            return values()[ordinal];
        }
    }

    /** Applies shape to the `Rail`_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `Direction` | the `Shape` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`RailProperties`](RailProperties.md)

##### <a id='shapenormalrail'></a>public static final var __shapeNormalRail__

_Normal Rail shape property, Values: `Direction`_

>Returns
>  [`BlockEnumProperty`](../BlockEnumProperty.md)

##### <a id='shapepoweredrail'></a>public static final var __shapePoweredRail__

_Powered and Activator Rail shape property, Values: `Direction`_

>Returns
>  [`BlockEnumProperty`](../BlockEnumProperty.md)

##### <a id='shapedetectorrail'></a>public static final var __shapeDetectorRail__

_Detector Rail shape property, Values: `Direction`_

>Returns
>  [`BlockEnumProperty`](../BlockEnumProperty.md)

---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

