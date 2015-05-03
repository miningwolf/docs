## StandingSignProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.StandingSignProperties
>Extends `BlockProperties`

---

### Class Overview

Standing Sign properties helper

Method | Type   
--- | :--- 
static function __applyRotation__(block, value) <br> _Standing Sign rotation property, Values: 0 - 15_ | [`Block`](..\..\Block.md)
static final var __rotation__ <br> _Standing Sign rotation property, Values: 0 - 15_ | [`BlockIntegerProperty`](..\BlockIntegerProperty.md)



---


### Public Methods for [`StandingSignProperties`](StandingSignProperties.md)

##### <a id='applyrotation'></a>public static function __applyRotation__(block, value)

_Standing Sign rotation property, Values: 0 - 15 /
    public static final BlockIntegerProperty rotation = getInstanceFor(StandingSign, "rotation");

    /** Applies rotation to the {@code Standing Sign}_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](..\..\Block.md) | the [`Block`](..\..\Block.md) to be modified
value | [`Rotation`](Rotation.md) | the `int` value to apply

Returns | Description
--- | --- 
[`Block`](..\..\Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`StandingSignProperties`](StandingSignProperties.md)

##### <a id='rotation'></a>public static final var __rotation__

_Standing Sign rotation property, Values: 0 - 15_

>Returns
>  [`BlockIntegerProperty`](..\BlockIntegerProperty.md)

---
---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	
