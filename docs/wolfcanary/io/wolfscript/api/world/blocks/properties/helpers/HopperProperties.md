## HopperProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.HopperProperties
>Extends `BlockProperties`

---

### Class Overview

Hopper properties helper

Method | Type   
--- | :--- 
static function __applyEnabled__(block, value) <br> _Hopper facing property, Values: [`BlockFace`](..\..\BlockFace.md) (Excluding TOP)_ | [`Block`](..\..\Block.md)
static final var __enabled__ <br> _Hopper facing property, Values: [`BlockFace`](..\..\BlockFace.md) (Excluding TOP)_ | [`BlockBooleanProperty`](..\BlockBooleanProperty.md)



---


### Public Methods for [`HopperProperties`](HopperProperties.md)

##### <a id='applyenabled'></a>public static function __applyEnabled__(block, value)

_Hopper facing property, Values: [`BlockFace`](..\..\BlockFace.md) (Excluding TOP) /
    public static final BlockDirectionProperty facing = getInstanceFor(Hopper, "facing");

    /** Hopper enabled property, Values: true, false /
    public static final BlockBooleanProperty enabled = getInstanceFor(Hopper, "facing");

    /** Applies a [`BlockFace`](..\..\BlockFace.md) facing property to the `Hopper`_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](..\..\Block.md) | the [`Block`](..\..\Block.md) to be modified
value | [`BlockFace`](..\..\BlockFace.md) | the [`BlockFace`](..\..\BlockFace.md) value to apply

Returns | Description
--- | --- 
[`Block`](..\..\Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`HopperProperties`](HopperProperties.md)

##### <a id='enabled'></a>public static final var __enabled__

_Hopper facing property, Values: [`BlockFace`](..\..\BlockFace.md) (Excluding TOP) /
    public static final BlockDirectionProperty facing = getInstanceFor(Hopper, "facing");

    /** Hopper enabled property, Values: true, false_

>Returns
>  [`BlockBooleanProperty`](..\BlockBooleanProperty.md)

---
---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

