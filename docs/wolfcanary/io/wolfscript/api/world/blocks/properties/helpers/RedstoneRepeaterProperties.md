## RedstoneRepeaterProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.RedstoneRepeaterProperties
>Extends [`DirectionalBlockProperties`](DirectionalBlockProperties.md)

---

### Class Overview

Redstone Repeater properties helper

Method | Type   
--- | :--- 
static function __applyDelay__(block, value) <br> _Applies delay to the {@code Redstone Repeater}_ | [`Block`](../../Block.md)
static function __applyLocked__(block, value) <br> _Applies whether the {@code Redstone Repeater} is locked or not_ | [`Block`](../../Block.md)
static final var __locked__ <br> _Redstone Repeater locked property, Values: true, false_ | [`BlockBooleanProperty`](../BlockBooleanProperty.md)
static final var __delay__ <br> _Redstone Repeater delay property, Values: 1 - 4_ | [`BlockIntegerProperty`](../BlockIntegerProperty.md)
 |
__Inherited items from [`DirectionalBlockProperties`](DirectionalBlockProperties.md)__ |
static function __applyFacing__(block, value) <br> _Applies a [`BlockFace`](../../BlockFace.md) facing property to the `DirectionalBlock`_ | [`Block`](../../Block.md)
static final var __facing__ <br> _Directional facing property, Values: [`BlockFace`](../../BlockFace.md) (Excluding TOP & BOTTOM)_ | [`BlockDirectionProperty`](../BlockDirectionProperty.md)
 |
__Inherited items from [`BlockProperties`](BlockProperties.md)__ |







---


### Public Methods for [`RedstoneRepeaterProperties`](RedstoneRepeaterProperties.md)

##### <a id='applydelay'></a>public static function __applyDelay__(block, value)

_Applies delay to the {@code Redstone Repeater}_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `int` | the `int` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


##### <a id='applylocked'></a>public static function __applyLocked__(block, value)

_Applies whether the {@code Redstone Repeater} is locked or not_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `boolean` | the `boolean` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`RedstoneRepeaterProperties`](RedstoneRepeaterProperties.md)

##### <a id='locked'></a>public static final var __locked__

_Redstone Repeater locked property, Values: true, false_

>Returns
>  [`BlockBooleanProperty`](../BlockBooleanProperty.md)

##### <a id='delay'></a>public static final var __delay__

_Redstone Repeater delay property, Values: 1 - 4_

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
	

