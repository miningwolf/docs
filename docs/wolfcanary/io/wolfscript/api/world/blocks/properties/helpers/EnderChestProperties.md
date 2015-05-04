## EnderChestProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.EnderChestProperties
>Extends [`BlockProperties`](BlockProperties.md)

---

### Class Overview

EnderChest properties helper

Method | Type   
--- | :--- 
static function __applyFacing__(block, value) <br> _EnderChest facing property, Values: [`BlockFace`](../../BlockFace.md) (Excluding TOP & BOTTOM)_ | [`Block`](../../Block.md)
static final var __facing__ <br> _EnderChest facing property, Values: [`BlockFace`](../../BlockFace.md) (Excluding TOP & BOTTOM)_ | [`BlockDirectionProperty`](../BlockDirectionProperty.md)
 |
__Inherited items from [`BlockProperties`](BlockProperties.md)__ |





---


### Public Methods for [`EnderChestProperties`](EnderChestProperties.md)

##### <a id='applyfacing'></a>public static function __applyFacing__(block, value)

_EnderChest facing property, Values: [`BlockFace`](../../BlockFace.md) (Excluding TOP & BOTTOM) /
    public static final BlockDirectionProperty facing = getInstanceFor(EnderChest, "facing");

    /** Applies a [`BlockFace`](../../BlockFace.md) facing property to the `EnderChest`_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | [`BlockFace`](../../BlockFace.md) | the [`BlockFace`](../../BlockFace.md) value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`EnderChestProperties`](EnderChestProperties.md)

##### <a id='facing'></a>public static final var __facing__

_EnderChest facing property, Values: [`BlockFace`](../../BlockFace.md) (Excluding TOP & BOTTOM)_

>Returns
>  [`BlockDirectionProperty`](../BlockDirectionProperty.md)

---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

