## ButtonProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.ButtonProperties
>Extends `BlockProperties`

---

### Class Overview

Button properties helper

Method | Type   
--- | :--- 
static function __applyPowered__(block, value) <br> _Button facing property, Values: [`BlockFace`](..\..\BlockFace.md) (Excluding TOP)_ | [`Block`](..\..\Block.md)
static final var __powered__ <br> _Button facing property, Values: [`BlockFace`](..\..\BlockFace.md) (Excluding TOP)_ | [`BlockBooleanProperty`](..\BlockBooleanProperty.md)



---


### Public Methods for [`ButtonProperties`](ButtonProperties.md)

##### <a id='applypowered'></a>public static function __applyPowered__(block, value)

_Button facing property, Values: [`BlockFace`](..\..\BlockFace.md) (Excluding TOP) /
    public static final BlockDirectionProperty facing = getInstanceFor(WoodenButton, "facing");

    /** Button powered property (which could mean pressed in), Values: true, false /
    public static final BlockBooleanProperty powered = getInstanceFor(WoodenButton, "powered");

    /** Applies [`BlockFace`](..\..\BlockFace.md) facing to the `Button`_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](..\..\Block.md) | the [`Block`](..\..\Block.md) to be modified
value | `boolean` | the [`BlockFace`](..\..\BlockFace.md) value to apply

Returns | Description
--- | --- 
[`Block`](..\..\Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`ButtonProperties`](ButtonProperties.md)

##### <a id='powered'></a>public static final var __powered__

_Button facing property, Values: [`BlockFace`](..\..\BlockFace.md) (Excluding TOP) /
    public static final BlockDirectionProperty facing = getInstanceFor(WoodenButton, "facing");

    /** Button powered property (which could mean pressed in), Values: true, false_

>Returns
>  [`BlockBooleanProperty`](..\BlockBooleanProperty.md)

---
---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

