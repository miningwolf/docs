## CarpetProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.CarpetProperties
>Extends [`BlockProperties`](BlockProperties.md)

---

### Class Overview

Carpet properties helper

Method | Type   
--- | :--- 
static function __applyColor__(block, value) <br> _Carpet color property, Values: [`DyeColor`](../../../../DyeColor.md) (excluding CUSTOM)_ | [`Block`](../../Block.md)
static final var __color__ <br> _Carpet color property, Values: [`DyeColor`](../../../../DyeColor.md) (excluding CUSTOM)_ | [`BlockEnumProperty`](../BlockEnumProperty.md)
 |
__Inherited items from [`BlockProperties`](BlockProperties.md)__ |





---


### Public Methods for [`CarpetProperties`](CarpetProperties.md)

##### <a id='applycolor'></a>public static function __applyColor__(block, value)

_Carpet color property, Values: [`DyeColor`](../../../../DyeColor.md) (excluding CUSTOM) /
    public static final BlockEnumProperty color = getInstanceFor(WhiteCarpet, "color");

    /** Applies color to the `Carpet`_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | [`DyeColor`](../../../../DyeColor.md) | the [`DyeColor`](../../../../DyeColor.md) value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`CarpetProperties`](CarpetProperties.md)

##### <a id='color'></a>public static final var __color__

_Carpet color property, Values: [`DyeColor`](../../../../DyeColor.md) (excluding CUSTOM)_

>Returns
>  [`BlockEnumProperty`](../BlockEnumProperty.md)

---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

