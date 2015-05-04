## FlowerPotProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.FlowerPotProperties
>Extends [`BlockProperties`](BlockProperties.md)

---

### Class Overview

Flower Pot properties helper

Method | Type   
--- | :--- 
static function __applyContents__(block, value) <br> _Applies contents to the {@code Flower Pot}_ | [`Block`](../../Block.md)
static function __applyLegacyData__(block, value) <br> _Flower Pot legacy_data property, values: 0 - 15_ | [`Block`](../../Block.md)
static final var __legacyData__ <br> _Flower Pot legacy_data property, values: 0 - 15_ | [`BlockIntegerProperty`](../BlockIntegerProperty.md)
static final var __contents__ <br> _Flower Pot contents property, Values: `Contents`_ | [`BlockEnumProperty`](../BlockEnumProperty.md)
 |
__Inherited items from [`BlockProperties`](BlockProperties.md)__ |





---


### Public Methods for [`FlowerPotProperties`](FlowerPotProperties.md)

##### <a id='applycontents'></a>public static function __applyContents__(block, value)

_Applies contents to the {@code Flower Pot}_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `Contents` | the `Contents` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


##### <a id='applylegacydata'></a>public static function __applyLegacyData__(block, value)

_Flower Pot legacy_data property, values: 0 - 15<br/>_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `int` | the `int` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`FlowerPotProperties`](FlowerPotProperties.md)

##### <a id='legacydata'></a>public static final var __legacyData__

_Flower Pot legacy_data property, values: 0 - 15<br/>_

>Returns
>  [`BlockIntegerProperty`](../BlockIntegerProperty.md)

##### <a id='contents'></a>public static final var __contents__

_Flower Pot contents property, Values: `Contents`_

>Returns
>  [`BlockEnumProperty`](../BlockEnumProperty.md)

---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

