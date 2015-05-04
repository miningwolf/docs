## TorchProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.TorchProperties
>Extends [`BlockProperties`](BlockProperties.md)

---

### Class Overview

Torch properties helper

Method | Type   
--- | :--- 
static function __applyFacing__(block, value) <br> _Applies a [`BlockFace`](../../BlockFace.md) facing property to the `Torch`_ | [`Block`](../../Block.md)
static final var __facing__ <br> _Torch facing property, Values: [`BlockFace`](../../BlockFace.md) (Excluding BOTTOM)_ | [`BlockDirectionProperty`](../BlockDirectionProperty.md)
 |
__Inherited items from [`BlockProperties`](BlockProperties.md)__ |





---


### Public Methods for [`TorchProperties`](TorchProperties.md)

##### <a id='applyfacing'></a>public static function __applyFacing__(block, value)

_Applies a [`BlockFace`](../../BlockFace.md) facing property to the `Torch`_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | [`BlockFace`](../../BlockFace.md) | the [`BlockFace`](../../BlockFace.md) value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`TorchProperties`](TorchProperties.md)

##### <a id='facing'></a>public static final var __facing__

_Torch facing property, Values: [`BlockFace`](../../BlockFace.md) (Excluding BOTTOM)_

>Returns
>  [`BlockDirectionProperty`](../BlockDirectionProperty.md)

---


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

