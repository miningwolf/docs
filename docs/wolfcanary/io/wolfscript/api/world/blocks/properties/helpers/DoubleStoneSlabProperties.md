## DoubleStoneSlabProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.DoubleStoneSlabProperties
>Extends `StoneSlabProperties`

---

### Class Overview

Double Stone Slab properties helper

Method | Type   
--- | :--- 
static function __applySeamless__(block, value) <br> _Double Stone Slab seamless property, Values: true, false_ | [`Block`](..\..\Block.md)
static final var __seamless__ <br> _Double Stone Slab seamless property, Values: true, false_ | [`BlockBooleanProperty`](..\BlockBooleanProperty.md)



---


### Public Methods for [`DoubleStoneSlabProperties`](DoubleStoneSlabProperties.md)

##### <a id='applyseamless'></a>public static function __applySeamless__(block, value)

_Double Stone Slab seamless property, Values: true, false /
    public static final BlockBooleanProperty seamless = getInstanceFor(DoubleStoneSlab, "seamless");

    /** Applies whether the {@code Stone Slab} is seamless or not_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](..\..\Block.md) | the [`Block`](..\..\Block.md) to be modified
value | `boolean` | the `boolean` value to apply

Returns | Description
--- | --- 
[`Block`](..\..\Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`DoubleStoneSlabProperties`](DoubleStoneSlabProperties.md)

##### <a id='seamless'></a>public static final var __seamless__

_Double Stone Slab seamless property, Values: true, false_

>Returns
>  [`BlockBooleanProperty`](..\BlockBooleanProperty.md)

---
---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

