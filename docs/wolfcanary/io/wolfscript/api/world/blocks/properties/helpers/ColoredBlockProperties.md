## ColoredBlockProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.ColoredBlockProperties
>Extends `BlockProperties`

---

### Class Overview

Colored Block properties helper<br/> Applies to<br/> <ul>Stained Hardened Clay</ul> <ul>Wool</ul>

Method | Type   
--- | :--- 
static function __applyColor__(block, value) <br> _Colored Block color property, Values: [`DyeColor`](..\..\..\..\DyeColor.md) (excluding CUSTOM)_ | [`Block`](..\..\Block.md)
static final var __color__ <br> _Colored Block color property, Values: [`DyeColor`](..\..\..\..\DyeColor.md) (excluding CUSTOM)_ | [`BlockEnumProperty`](..\BlockEnumProperty.md)



---


### Public Methods for [`ColoredBlockProperties`](ColoredBlockProperties.md)

##### <a id='applycolor'></a>public static function __applyColor__(block, value)

_Colored Block color property, Values: [`DyeColor`](..\..\..\..\DyeColor.md) (excluding CUSTOM) /
    public static final BlockEnumProperty color = getInstanceFor(WhiteWool, "color");

    /** Applies color to the {@code Colored Block}_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](..\..\Block.md) | the [`Block`](..\..\Block.md) to be modified
value | [`DyeColor`](..\..\..\..\DyeColor.md) | the [`DyeColor`](..\..\..\..\DyeColor.md) value to apply

Returns | Description
--- | --- 
[`Block`](..\..\Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`ColoredBlockProperties`](ColoredBlockProperties.md)

##### <a id='color'></a>public static final var __color__

_Colored Block color property, Values: [`DyeColor`](..\..\..\..\DyeColor.md) (excluding CUSTOM)_

>Returns
>  [`BlockEnumProperty`](..\BlockEnumProperty.md)

---
---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

