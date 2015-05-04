## RedSandstoneProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.RedSandstoneProperties
>Extends [`BlockProperties`](BlockProperties.md)

---

### Class Overview

Red Sandstone properties helper<br/> (Cause Mojang didn't make a common type enum for sandstone)

Method | Type   
--- | :--- 
static function __applyType__(block, value) <br> _Red Sandstone type property, Values: `Type`_ | [`Block`](../../Block.md)
static final var __type__ <br> _Red Sandstone type property, Values: `Type`_ | [`BlockEnumProperty`](../BlockEnumProperty.md)
 |
__Inherited items from [`BlockProperties`](BlockProperties.md)__ |





---


### Public Methods for [`RedSandstoneProperties`](RedSandstoneProperties.md)

##### <a id='applytype'></a>public static function __applyType__(block, value)

_Red Sandstone type property, Values: `Type` /
    public static final BlockEnumProperty type = getInstanceFor(RedSandstone, "type");

    /** Red Sandstone types /
    public enum Type {
        DEFAULT,
        CHISELED,
        SMOOTH;

        public static Type valueOf(int ordinal) {
            if (ordinal < 0 || ordinal >= values().length) {
                throw new IllegalArgumentException();
            }
            return values()[ordinal];
        }
    }

    /** Applies type to the {@code Red Sandstone}_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `Type` | the `int` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`RedSandstoneProperties`](RedSandstoneProperties.md)

##### <a id='type'></a>public static final var __type__

_Red Sandstone type property, Values: `Type`_

>Returns
>  [`BlockEnumProperty`](../BlockEnumProperty.md)

---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

