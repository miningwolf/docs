## SkullProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.SkullProperties
>Extends `BlockProperties`

---

### Class Overview

Skull properties helper

Method | Type   
--- | :--- 
static function __applyNoDrop__(block, value) <br> _Skull facing property, Values: [`BlockFace`](..\..\BlockFace.md)_ | [`Block`](..\..\Block.md)
static final var __noDrop__ <br> _Skull facing property, Values: [`BlockFace`](..\..\BlockFace.md)_ | [`BlockBooleanProperty`](..\BlockBooleanProperty.md)



---


### Public Methods for [`SkullProperties`](SkullProperties.md)

##### <a id='applynodrop'></a>public static function __applyNoDrop__(block, value)

_Skull facing property, Values: [`BlockFace`](..\..\BlockFace.md) /
    public static final BlockEnumProperty facing = getInstanceFor(SkeletonHead, "facing");

    /** Skull nodrop property, Values: true, false /
    public static final BlockBooleanProperty noDrop = getInstanceFor(SkeletonHead, "nodrop");

    /** Applies a [`BlockFace`](..\..\BlockFace.md) facing property to the `Skull`_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](..\..\Block.md) | the [`Block`](..\..\Block.md) to be modified
value | `boolean` | the [`BlockFace`](..\..\BlockFace.md) value to apply

Returns | Description
--- | --- 
[`Block`](..\..\Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`SkullProperties`](SkullProperties.md)

##### <a id='nodrop'></a>public static final var __noDrop__

_Skull facing property, Values: [`BlockFace`](..\..\BlockFace.md) /
    public static final BlockEnumProperty facing = getInstanceFor(SkeletonHead, "facing");

    /** Skull nodrop property, Values: true, false_

>Returns
>  [`BlockBooleanProperty`](..\BlockBooleanProperty.md)

---
---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

