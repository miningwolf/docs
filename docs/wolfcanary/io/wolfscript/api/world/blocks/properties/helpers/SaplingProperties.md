## SaplingProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.SaplingProperties
>Extends [`BlockProperties`](BlockProperties.md)
>Implements [`WoodProperties`](WoodProperties.md)

---

### Class Overview

Sapling properties helper

Method | Type   
--- | :--- 
static function __applyStage__(block, value) <br> _Applies stage to the `Sapling`_ | [`Block`](../../Block.md)
static function __applyType__(block, value) <br> _Applies type to the `Sapling`_ | [`Block`](../../Block.md)
static final var __type__ <br> _Sapling type property, Values: `Variant`_ | [`BlockEnumProperty`](../BlockEnumProperty.md)
static final var __stage__ <br> _Sapling stage property, Values: 0, 1_ | [`BlockIntegerProperty`](../BlockIntegerProperty.md)
 |
__Inherited items from [`BlockProperties`](BlockProperties.md)__ |





---


### Public Methods for [`SaplingProperties`](SaplingProperties.md)

##### <a id='applystage'></a>public static function __applyStage__(block, value)

_Applies stage to the `Sapling`_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `int` | the `int` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


##### <a id='applytype'></a>public static function __applyType__(block, value)

_Applies type to the `Sapling`_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `Variant` | the `Variant` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`SaplingProperties`](SaplingProperties.md)

##### <a id='type'></a>public static final var __type__

_Sapling type property, Values: `Variant`_

>Returns
>  [`BlockEnumProperty`](../BlockEnumProperty.md)

##### <a id='stage'></a>public static final var __stage__

_Sapling stage property, Values: 0, 1_

>Returns
>  [`BlockIntegerProperty`](../BlockIntegerProperty.md)

---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

