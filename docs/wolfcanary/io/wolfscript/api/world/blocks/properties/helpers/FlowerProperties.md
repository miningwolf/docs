## FlowerProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.FlowerProperties
>Extends [`BlockProperties`](BlockProperties.md)

---

### Class Overview

Flower properties helper

Method | Type   
--- | :--- 
static function __applyType__(block, value) <br> _Flower type property, Values: `Type` (Excludes DANDELION)_ | [`Block`](../../Block.md)
static final var __type__ <br> _Flower type property, Values: `Type` (Excludes DANDELION)_ | [`BlockEnumProperty`](../BlockEnumProperty.md)
 |
__Inherited items from [`BlockProperties`](BlockProperties.md)__ |





---


### Public Methods for [`FlowerProperties`](FlowerProperties.md)

##### <a id='applytype'></a>public static function __applyType__(block, value)

_Flower type property, Values: `Type` (Excludes DANDELION) /
    public static final BlockEnumProperty type = getInstanceFor(Poppy, "type");

    /** Flower types_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `Type` | the `Type` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`FlowerProperties`](FlowerProperties.md)

##### <a id='type'></a>public static final var __type__

_Flower type property, Values: `Type` (Excludes DANDELION)_

>Returns
>  [`BlockEnumProperty`](../BlockEnumProperty.md)

---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

