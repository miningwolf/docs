## SkullProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.SkullProperties
>Extends [`BlockProperties`](BlockProperties.md)

---

### Class Overview

Skull properties helper

Method | Type   
--- | :--- 
static function __applyFacing__(block, value) <br> _Applies a [`BlockFace`](../../BlockFace.md) facing property to the `Skull`_ | [`Block`](../../Block.md)
static function __applyNoDrop__(block, value) <br> _Applies whether the `Skull` can drop or not_ | [`Block`](../../Block.md)
static final var __facing__ <br> _Skull facing property, Values: [`BlockFace`](../../BlockFace.md)_ | [`BlockEnumProperty`](../BlockEnumProperty.md)
static final var __noDrop__ <br> _Skull nodrop property, Values: true, false_ | [`BlockBooleanProperty`](../BlockBooleanProperty.md)
 |
__Inherited items from [`BlockProperties`](BlockProperties.md)__ |





---


### Public Methods for [`SkullProperties`](SkullProperties.md)

##### <a id='applyfacing'></a>public static function __applyFacing__(block, value)

_Applies a [`BlockFace`](../../BlockFace.md) facing property to the `Skull`_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | [`BlockFace`](../../BlockFace.md) | the [`BlockFace`](../../BlockFace.md) value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


##### <a id='applynodrop'></a>public static function __applyNoDrop__(block, value)

_Applies whether the `Skull` can drop or not_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `boolean` | the `boolean` value to apply (true for no drop)

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`SkullProperties`](SkullProperties.md)

##### <a id='facing'></a>public static final var __facing__

_Skull facing property, Values: [`BlockFace`](../../BlockFace.md)_

>Returns
>  [`BlockEnumProperty`](../BlockEnumProperty.md)

##### <a id='nodrop'></a>public static final var __noDrop__

_Skull nodrop property, Values: true, false_

>Returns
>  [`BlockBooleanProperty`](../BlockBooleanProperty.md)

---


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

