## EndPortalFrameProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.EndPortalFrameProperties
>Extends `BlockProperties`

---

### Class Overview

End Portal Frame properties helper

Method | Type   
--- | :--- 
static function __applyEye__(block, value) <br> _End Portal Frame facing property, Values: [`BlockFace`](..\..\BlockFace.md) (Excluding TOP & BOTTOM)_ | [`Block`](..\..\Block.md)
static var __eye__ <br> _End Portal Frame facing property, Values: [`BlockFace`](..\..\BlockFace.md) (Excluding TOP & BOTTOM)_ | [`BlockBooleanProperty`](..\BlockBooleanProperty.md)



---


### Public Methods for [`EndPortalFrameProperties`](EndPortalFrameProperties.md)

##### <a id='applyeye'></a>public static function __applyEye__(block, value)

_End Portal Frame facing property, Values: [`BlockFace`](..\..\BlockFace.md) (Excluding TOP & BOTTOM) /
    public static BlockDirectionProperty facing = getInstanceFor(EndPortalFrame, "facing");

    /** End Portal Frame eye property, Values: true, false /
    public static BlockBooleanProperty eye = getInstanceFor(EndPortalFrame, "eye");

    /** Applies a [`BlockFace`](..\..\BlockFace.md) facing property to the {@code End Portal Frame}_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](..\..\Block.md) | the [`Block`](..\..\Block.md) to be modified
value | `boolean` | the [`BlockFace`](..\..\BlockFace.md) value to apply

Returns | Description
--- | --- 
[`Block`](..\..\Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`EndPortalFrameProperties`](EndPortalFrameProperties.md)

##### <a id='eye'></a>public static var __eye__

_End Portal Frame facing property, Values: [`BlockFace`](..\..\BlockFace.md) (Excluding TOP & BOTTOM) /
    public static BlockDirectionProperty facing = getInstanceFor(EndPortalFrame, "facing");

    /** End Portal Frame eye property, Values: true, false_

>Returns
>  [`BlockBooleanProperty`](..\BlockBooleanProperty.md)

---
---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

