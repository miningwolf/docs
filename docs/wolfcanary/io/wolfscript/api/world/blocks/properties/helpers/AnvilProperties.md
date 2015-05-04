## AnvilProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.AnvilProperties
>Extends [`BlockProperties`](BlockProperties.md)

---

### Class Overview

Anvil properties helper

Method | Type   
--- | :--- 
static function __applyDamage__(block, value) <br> _Applies damage to the `Anvil`_ | [`Block`](../../Block.md)
static function __applyFacing__(block, value) <br> _Applies a [`BlockFace`](../../BlockFace.md) facing property to the `Anvil`_ | [`Block`](../../Block.md)
static final var __damage__ <br> _Anvil damage property, Values: 0 - 2_ | [`BlockIntegerProperty`](../BlockIntegerProperty.md)
static final var __facing__ <br> _Anvil facing property, Values: [`BlockFace`](../../BlockFace.md) (Excluding TOP & BOTTOM)_ | [`BlockDirectionProperty`](../BlockDirectionProperty.md)
 |
__Inherited items from [`BlockProperties`](BlockProperties.md)__ |





---


### Public Methods for [`AnvilProperties`](AnvilProperties.md)

##### <a id='applydamage'></a>public static function __applyDamage__(block, value)

_Applies damage to the `Anvil`_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `int` | the `int` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


##### <a id='applyfacing'></a>public static function __applyFacing__(block, value)

_Applies a [`BlockFace`](../../BlockFace.md) facing property to the `Anvil`_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | [`BlockFace`](../../BlockFace.md) | the [`BlockFace`](../../BlockFace.md) value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`AnvilProperties`](AnvilProperties.md)

##### <a id='damage'></a>public static final var __damage__

_Anvil damage property, Values: 0 - 2_

>Returns
>  [`BlockIntegerProperty`](../BlockIntegerProperty.md)

##### <a id='facing'></a>public static final var __facing__

_Anvil facing property, Values: [`BlockFace`](../../BlockFace.md) (Excluding TOP & BOTTOM)_

>Returns
>  [`BlockDirectionProperty`](../BlockDirectionProperty.md)

---


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

