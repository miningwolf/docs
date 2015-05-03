## StemProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.StemProperties
>Extends `BlockProperties`

---

### Class Overview

Stem properties helper

Method | Type   
--- | :--- 
static function __applyAge__(block, value) <br> _Stem facing property, Values: [`BlockFace`](..\..\BlockFace.md) (Excluding BOTTOM)_ | [`Block`](..\..\Block.md)
static final var __age__ <br> _Stem facing property, Values: [`BlockFace`](..\..\BlockFace.md) (Excluding BOTTOM)_ | [`BlockIntegerProperty`](..\BlockIntegerProperty.md)



---


### Public Methods for [`StemProperties`](StemProperties.md)

##### <a id='applyage'></a>public static function __applyAge__(block, value)

_Stem facing property, Values: [`BlockFace`](..\..\BlockFace.md) (Excluding BOTTOM) /
    public static final BlockDirectionProperty facing = getInstanceFor(MelonStem, "facing");

    /** Stem age property, Values: 0 - 7 /
    public static final BlockIntegerProperty age = getInstanceFor(MelonStem, "age");

    /** Applies a [`BlockFace`](..\..\BlockFace.md) facing property to the `Stem`_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](..\..\Block.md) | the [`Block`](..\..\Block.md) to be modified
value | `int` | the [`BlockFace`](..\..\BlockFace.md) value to apply

Returns | Description
--- | --- 
[`Block`](..\..\Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`StemProperties`](StemProperties.md)

##### <a id='age'></a>public static final var __age__

_Stem facing property, Values: [`BlockFace`](..\..\BlockFace.md) (Excluding BOTTOM) /
    public static final BlockDirectionProperty facing = getInstanceFor(MelonStem, "facing");

    /** Stem age property, Values: 0 - 7_

>Returns
>  [`BlockIntegerProperty`](..\BlockIntegerProperty.md)

---
---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

