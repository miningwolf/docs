## CocoaPlantProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.CocoaPlantProperties
>Extends [`DirectionalBlockProperties`](DirectionalBlockProperties.md)

---

### Class Overview

CocoaPlant properties helper

Method | Type   
--- | :--- 
static function __applyAge__(block, value) <br> _Applies age to the `CocoaPlant`_ | [`Block`](../../Block.md)
static final var __age__ <br> _CocoaPlant age property, Values: 0 - 2_ | [`BlockIntegerProperty`](../BlockIntegerProperty.md)
 |
__Inherited items from [`DirectionalBlockProperties`](DirectionalBlockProperties.md)__ |
static function __applyFacing__(block, value) <br> _Applies a [`BlockFace`](../../BlockFace.md) facing property to the `DirectionalBlock`_ | [`Block`](../../Block.md)
static final var __facing__ <br> _Directional facing property, Values: [`BlockFace`](../../BlockFace.md) (Excluding TOP & BOTTOM)_ | [`BlockDirectionProperty`](../BlockDirectionProperty.md)
 |
__Inherited items from [`BlockProperties`](BlockProperties.md)__ |







---


### Public Methods for [`CocoaPlantProperties`](CocoaPlantProperties.md)

##### <a id='applyage'></a>public static function __applyAge__(block, value)

_Applies age to the `CocoaPlant`_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `int` | the `int` value to apply (0 - 2)

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`CocoaPlantProperties`](CocoaPlantProperties.md)

##### <a id='age'></a>public static final var __age__

_CocoaPlant age property, Values: 0 - 2_

>Returns
>  [`BlockIntegerProperty`](../BlockIntegerProperty.md)

---

### Public Methods for [`DirectionalBlockProperties`](DirectionalBlockProperties.md)

##### <a id='applyfacing'></a>public static function __applyFacing__(block, value)

_Applies a [`BlockFace`](../../BlockFace.md) facing property to the `DirectionalBlock`_

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
	

