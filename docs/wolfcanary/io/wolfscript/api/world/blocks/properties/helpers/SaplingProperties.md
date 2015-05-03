## SaplingProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.SaplingProperties
>Extends `BlockProperties`
>Implements `WoodProperties`

---

### Class Overview

Sapling properties helper

Method | Type   
--- | :--- 
static function __applyStage__(block, value) <br> _Sapling type property, Values: `Variant`_ | [`Block`](..\..\Block.md)
static final var __stage__ <br> _Sapling type property, Values: `Variant`_ | [`BlockIntegerProperty`](..\BlockIntegerProperty.md)



---


### Public Methods for [`SaplingProperties`](SaplingProperties.md)

##### <a id='applystage'></a>public static function __applyStage__(block, value)

_Sapling type property, Values: `Variant` /
    public static final BlockEnumProperty type = getInstanceFor(OakSapling, "type");

    /** Sapling stage property, Values: 0, 1 /
    public static final BlockIntegerProperty stage = getInstanceFor(OakSapling, "stage");

    /** Applies type to the `Sapling`_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](..\..\Block.md) | the [`Block`](..\..\Block.md) to be modified
value | `int` | the `Variant` value to apply

Returns | Description
--- | --- 
[`Block`](..\..\Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`SaplingProperties`](SaplingProperties.md)

##### <a id='stage'></a>public static final var __stage__

_Sapling type property, Values: `Variant` /
    public static final BlockEnumProperty type = getInstanceFor(OakSapling, "type");

    /** Sapling stage property, Values: 0, 1_

>Returns
>  [`BlockIntegerProperty`](..\BlockIntegerProperty.md)

---
---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	
