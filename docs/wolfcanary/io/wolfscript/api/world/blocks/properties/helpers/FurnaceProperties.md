## FurnaceProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.FurnaceProperties
>Extends `BlockProperties`

---

### Class Overview

Furnace properties helper

Method | Type   
--- | :--- 
static function __applyFacing__(block, value) <br> _Furnace facing property, Values: [`BlockFace`](..\..\BlockFace.md) (Excluding TOP & BOTTOM)_ | [`Block`](..\..\Block.md)
static final var __facing__ <br> _Furnace facing property, Values: [`BlockFace`](..\..\BlockFace.md) (Excluding TOP & BOTTOM)_ | [`BlockDirectionProperty`](..\BlockDirectionProperty.md)



---


### Public Methods for [`FurnaceProperties`](FurnaceProperties.md)

##### <a id='applyfacing'></a>public static function __applyFacing__(block, value)

_Furnace facing property, Values: [`BlockFace`](..\..\BlockFace.md) (Excluding TOP & BOTTOM) /
    public static final BlockDirectionProperty facing = getInstanceFor(Furnace, "facing");

    /** Applies a [`BlockFace`](..\..\BlockFace.md) facing property to the `Furnace`_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](..\..\Block.md) | the [`Block`](..\..\Block.md) to be modified
value | [`BlockFace`](..\..\BlockFace.md) | the [`BlockFace`](..\..\BlockFace.md) value to apply

Returns | Description
--- | --- 
[`Block`](..\..\Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`FurnaceProperties`](FurnaceProperties.md)

##### <a id='facing'></a>public static final var __facing__

_Furnace facing property, Values: [`BlockFace`](..\..\BlockFace.md) (Excluding TOP & BOTTOM)_

>Returns
>  [`BlockDirectionProperty`](..\BlockDirectionProperty.md)

---
---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	
