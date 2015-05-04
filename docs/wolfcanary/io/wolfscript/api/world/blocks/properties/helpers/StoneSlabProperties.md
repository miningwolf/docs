## StoneSlabProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.StoneSlabProperties
>Extends [`SlabProperties`](SlabProperties.md)

---

### Class Overview

Stone Slab properties helper

Method | Type   
--- | :--- 
static function __applyVariant__(block, value) <br> _Stone Slab variant property, Values: `Variant`_ | [`Block`](../../Block.md)
static final var __variant__ <br> _Stone Slab variant property, Values: `Variant`_ | [`BlockEnumProperty`](../BlockEnumProperty.md)
 |
__Inherited items from [`SlabProperties`](SlabProperties.md)__ |
static function __applyHalf__(block, value) <br> _Slab half property, Values: `Half`_ | [`Block`](../../Block.md)
static final var __half__ <br> _Slab half property, Values: `Half`_ | [`BlockEnumProperty`](../BlockEnumProperty.md)
 |
__Inherited items from [`BlockProperties`](BlockProperties.md)__ |







---


### Public Methods for [`StoneSlabProperties`](StoneSlabProperties.md)

##### <a id='applyvariant'></a>public static function __applyVariant__(block, value)

_Stone Slab variant property, Values: `Variant` /
    public static final BlockEnumProperty variant = getInstanceFor(StoneSlab, "variant");

    /** Stone slab variants /
    public enum Variant {
        STONE,
        SAND,
        WOOD,
        COBBLESTONE,
        BRICK,
        SMOOTHBRICK,
        NETHERBRICK,
        QUARTZ;

        public static Variant valueOf(int ordinal) {
            if (ordinal < 0 || ordinal >= values().length) {
                throw new IllegalArgumentException();
            }
            return values()[ordinal];
        }
    }

    /** Applies level to the {@code Stone Slab}_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `Variant` | the `Variant` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`StoneSlabProperties`](StoneSlabProperties.md)

##### <a id='variant'></a>public static final var __variant__

_Stone Slab variant property, Values: `Variant`_

>Returns
>  [`BlockEnumProperty`](../BlockEnumProperty.md)

---

### Public Methods for [`SlabProperties`](SlabProperties.md)

##### <a id='applyhalf'></a>public static function __applyHalf__(block, value)

_Slab half property, Values: `Half` /
    public static final BlockEnumProperty half = getInstanceFor(StoneSlab, "half");

    /** Slab halves_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `Half` | the `Half` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`SlabProperties`](SlabProperties.md)

##### <a id='half'></a>public static final var __half__

_Slab half property, Values: `Half`_

>Returns
>  [`BlockEnumProperty`](../BlockEnumProperty.md)

---


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

