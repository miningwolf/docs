## TallGrassProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.TallGrassProperties
>Extends [`BlockProperties`](BlockProperties.md)

---

### Class Overview

Tall Grass properties helper

Method | Type   
--- | :--- 
static function __applyType__(block, value) <br> _Tall Grass type property, Values: `Variant`_ | [`Block`](../../Block.md)
static final var __type__ <br> _Tall Grass type property, Values: `Variant`_ | [`BlockEnumProperty`](../BlockEnumProperty.md)
 |
__Inherited items from [`BlockProperties`](BlockProperties.md)__ |





---


### Public Methods for [`TallGrassProperties`](TallGrassProperties.md)

##### <a id='applytype'></a>public static function __applyType__(block, value)

_Tall Grass type property, Values: `Variant` /
    public static final BlockEnumProperty type = getInstanceFor(TallGrass, "type");

    /** Tall grass variants /
    public enum Variant {
        DEAD_BUSH,
        GRASS,
        FERN;

        public static Variant valueOf(int ordinal) {
            if (ordinal < 0 || ordinal >= values().length) {
                throw new IllegalArgumentException();
            }
            return values()[ordinal];
        }
    }

    /** Applies type to the {@code Tall Grass}_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `Variant` | the `Variant` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`TallGrassProperties`](TallGrassProperties.md)

##### <a id='type'></a>public static final var __type__

_Tall Grass type property, Values: `Variant`_

>Returns
>  [`BlockEnumProperty`](../BlockEnumProperty.md)

---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

