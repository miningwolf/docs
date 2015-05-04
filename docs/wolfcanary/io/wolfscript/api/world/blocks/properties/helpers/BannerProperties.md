## BannerProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.BannerProperties
>Extends [`BlockProperties`](BlockProperties.md)

---

### Class Overview

Banner properties helper

Method | Type   
--- | :--- 
static function __applyFacing__(block, value) <br> _Banner rotation property, Value: 0 - 15_ | [`Block`](../../Block.md)
static function __applyRotation__(block, value) <br> _Applies rotation to the {@code Banner (Standing Banner)}_ | [`Block`](../../Block.md)
static function __applyRotation__(block, value) <br> _Applies rotation to the {@code Banner (Standing Banner)}_ | [`Block`](../../Block.md)
static final var __rotation__ <br> _rotation field_ | [`BlockIntegerProperty`](../BlockIntegerProperty.md)
static final var __facing__ <br> _Anvil facing property, Values: [`BlockFace`](../../BlockFace.md) (Excluding TOP & BOTTOM)_ | [`BlockDirectionProperty`](../BlockDirectionProperty.md)
 |
__Inherited items from [`BlockProperties`](BlockProperties.md)__ |





---


### Public Methods for [`BannerProperties`](BannerProperties.md)

##### <a id='applyfacing'></a>public static function __applyFacing__(block, value)

_Banner rotation property, Value: 0 - 15 /
    public static final BlockIntegerProperty rotation = getInstanceFor(StandingBanner, "rotation");

    /** Anvil facing property, Values: [`BlockFace`](../../BlockFace.md) (Excluding TOP & BOTTOM) /
    public static final BlockDirectionProperty facing = getInstanceFor(WallBanner, "facing");

    /** Applies a [`BlockFace`](../../BlockFace.md) facing to the {@code Banner (Wall Banner)}_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | [`BlockFace`](../../BlockFace.md) | the [`BlockFace`](../../BlockFace.md) value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


##### <a id='applyrotation'></a>public static function __applyRotation__(block, value)

_Applies rotation to the {@code Banner (Standing Banner)}_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `int` | the `int` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


##### <a id='applyrotation'></a>public static function __applyRotation__(block, value)

_Applies rotation to the {@code Banner (Standing Banner)}_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `Rotation` | the `Rotation` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`BannerProperties`](BannerProperties.md)

##### <a id='rotation'></a>public static final var __rotation__

_rotation field_

>Returns
>  [`BlockIntegerProperty`](../BlockIntegerProperty.md)

##### <a id='facing'></a>public static final var __facing__

_Anvil facing property, Values: [`BlockFace`](../../BlockFace.md) (Excluding TOP & BOTTOM)_

>Returns
>  [`BlockDirectionProperty`](../BlockDirectionProperty.md)

---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

