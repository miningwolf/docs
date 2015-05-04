## PrismarineProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.PrismarineProperties
>Extends [`BlockProperties`](BlockProperties.md)

---

### Class Overview

Prismarine properties helper

Method | Type   
--- | :--- 
static function __applyVariant__(block, value) <br> _Prismarine variant property, Values: `Variant`_ | [`Block`](../../Block.md)
static final var __variant__ <br> _Prismarine variant property, Values: `Variant`_ | [`BlockEnumProperty`](../BlockEnumProperty.md)
 |
__Inherited items from [`BlockProperties`](BlockProperties.md)__ |





---


### Public Methods for [`PrismarineProperties`](PrismarineProperties.md)

##### <a id='applyvariant'></a>public static function __applyVariant__(block, value)

_Prismarine variant property, Values: `Variant` /
    public static final BlockEnumProperty variant = getInstanceFor(Prismarine, "variant");

    /** Prismarine variants /
    public enum Variant {
        ROUGH,
        BRICKS,
        DARK;

        public static Variant valueOf(int ordinal) {
            if (ordinal < 0 || ordinal >= values().length) {
                throw new IllegalArgumentException();
            }
            return values()[ordinal];
        }
    }

    /** Applies variant to the `Prismarine`_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `Variant` | the `Variant` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`PrismarineProperties`](PrismarineProperties.md)

##### <a id='variant'></a>public static final var __variant__

_Prismarine variant property, Values: `Variant`_

>Returns
>  [`BlockEnumProperty`](../BlockEnumProperty.md)

---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

