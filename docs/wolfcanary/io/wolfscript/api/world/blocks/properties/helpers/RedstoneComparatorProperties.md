## RedstoneComparatorProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.RedstoneComparatorProperties
>Extends [`DirectionalBlockProperties`](DirectionalBlockProperties.md)

---

### Class Overview

Redstone Comparator properties helper

Method | Type   
--- | :--- 
static function __applyMode__(block, value) <br> _Applies mode to the {@code Redstone Comparator}_ | [`Block`](../../Block.md)
static function __applyPowered__(block, value) <br> _Redstone Comparator powered property, Values: true, false_ | [`Block`](../../Block.md)
static final var __powered__ <br> _Redstone Comparator powered property, Values: true, false_ | [`BlockBooleanProperty`](../BlockBooleanProperty.md)
static final var __mode__ <br> _Redstone Comparator mode property, Values: `Mode`_ | [`BlockEnumProperty`](../BlockEnumProperty.md)
 |
__Inherited items from [`DirectionalBlockProperties`](DirectionalBlockProperties.md)__ |
static function __applyFacing__(block, value) <br> _Directional facing property, Values: [`BlockFace`](../../BlockFace.md) (Excluding TOP & BOTTOM)_ | [`Block`](../../Block.md)
static final var __facing__ <br> _Directional facing property, Values: [`BlockFace`](../../BlockFace.md) (Excluding TOP & BOTTOM)_ | [`BlockDirectionProperty`](../BlockDirectionProperty.md)
 |
__Inherited items from [`BlockProperties`](BlockProperties.md)__ |







---


### Public Methods for [`RedstoneComparatorProperties`](RedstoneComparatorProperties.md)

##### <a id='applymode'></a>public static function __applyMode__(block, value)

_Applies mode to the {@code Redstone Comparator}_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `Mode` | the `Mode` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


##### <a id='applypowered'></a>public static function __applyPowered__(block, value)

_Redstone Comparator powered property, Values: true, false /
    public static final BlockBooleanProperty powered = getInstanceFor(RedstoneComparator, "powered");

    /** Redstone Comparator mode property, Values: `Mode` /
    public static final BlockEnumProperty mode = getInstanceFor(RedstoneComparator, "mode");

    /** Redstone Comparator modes /
    public enum Mode {
        COMPARE,
        SUBTRACT;

        public static Mode valueOf(int ordinal) {
            if (ordinal < 0 || ordinal >= values().length) {
                throw new IllegalArgumentException();
            }
            return values()[ordinal];
        }
    }

    /** Applies whether the {@code Redstone Comparator} is powered or not_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `boolean` | the `boolean` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`RedstoneComparatorProperties`](RedstoneComparatorProperties.md)

##### <a id='powered'></a>public static final var __powered__

_Redstone Comparator powered property, Values: true, false_

>Returns
>  [`BlockBooleanProperty`](../BlockBooleanProperty.md)

##### <a id='mode'></a>public static final var __mode__

_Redstone Comparator mode property, Values: `Mode`_

>Returns
>  [`BlockEnumProperty`](../BlockEnumProperty.md)

---

### Public Methods for [`DirectionalBlockProperties`](DirectionalBlockProperties.md)

##### <a id='applyfacing'></a>public static function __applyFacing__(block, value)

_Directional facing property, Values: [`BlockFace`](../../BlockFace.md) (Excluding TOP & BOTTOM) /
    public static final BlockDirectionProperty facing = getInstanceFor(Bed, "facing");

    /** Applies a [`BlockFace`](../../BlockFace.md) facing property to the `DirectionalBlock`_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | [`BlockFace`](../../BlockFace.md) | the [`BlockFace`](../../BlockFace.md) value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`DirectionalBlockProperties`](DirectionalBlockProperties.md)

##### <a id='facing'></a>public static final var __facing__

_Directional facing property, Values: [`BlockFace`](../../BlockFace.md) (Excluding TOP & BOTTOM)_

>Returns
>  [`BlockDirectionProperty`](../BlockDirectionProperty.md)

---


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

