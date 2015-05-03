## StainedGlassPaneProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.StainedGlassPaneProperties
>Extends `BlockProperties`

---

### Class Overview

Stained Glass Pane properties helper

Method | Type   
--- | :--- 
static function __applyColor__(block, value) <br> _Stained Glass Pane color property, Values: DyeColor (excluding CUSTOM)_ | [`Block`](..\..\Block.md)
static final var __color__ <br> _Stained Glass Pane color property, Values: DyeColor (excluding CUSTOM)_ | [`BlockEnumProperty`](..\BlockEnumProperty.md)



---


### Public Methods for [`StainedGlassPaneProperties`](StainedGlassPaneProperties.md)

##### <a id='applycolor'></a>public static function __applyColor__(block, value)

_Stained Glass Pane color property, Values: DyeColor (excluding CUSTOM) /
    public static final BlockEnumProperty color = getInstanceFor(WhiteGlassPane, "color");

    /** Applies color to the {@code Stained Glass Pane}_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](..\..\Block.md) | the [`Block`](..\..\Block.md) to be modified
value | [`DyeColor`](..\..\..\..\DyeColor.md) | the [`DyeColor`](..\..\..\..\DyeColor.md) value to apply

Returns | Description
--- | --- 
[`Block`](..\..\Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`StainedGlassPaneProperties`](StainedGlassPaneProperties.md)

##### <a id='color'></a>public static final var __color__

_Stained Glass Pane color property, Values: DyeColor (excluding CUSTOM)_

>Returns
>  [`BlockEnumProperty`](..\BlockEnumProperty.md)

---
---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

