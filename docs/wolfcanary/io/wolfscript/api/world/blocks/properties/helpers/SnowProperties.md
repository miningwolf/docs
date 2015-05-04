## SnowProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.SnowProperties
>Extends [`BlockProperties`](BlockProperties.md)

---

### Class Overview

Snow properties helper

Method | Type   
--- | :--- 
static function __applyLayers__(block, value) <br> _Snow layers property, Values: 1 - 8_ | [`Block`](../../Block.md)
static final var __layers__ <br> _Snow layers property, Values: 1 - 8_ | [`BlockIntegerProperty`](../BlockIntegerProperty.md)
 |
__Inherited items from [`BlockProperties`](BlockProperties.md)__ |





---


### Public Methods for [`SnowProperties`](SnowProperties.md)

##### <a id='applylayers'></a>public static function __applyLayers__(block, value)

_Snow layers property, Values: 1 - 8 /
    public static final BlockIntegerProperty layers = getInstanceFor(Snow, "layers");

    /** Applies layer to the `Snow`_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `int` | the `int` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`SnowProperties`](SnowProperties.md)

##### <a id='layers'></a>public static final var __layers__

_Snow layers property, Values: 1 - 8_

>Returns
>  [`BlockIntegerProperty`](../BlockIntegerProperty.md)

---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

