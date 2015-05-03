## RotatedPillarProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.RotatedPillarProperties
>Extends `BlockProperties`

---

### Class Overview

Rotated Pillar properties helper<br/> Applies to<br/> <ul>Hay</ul> <ul>Log</ul>

Method | Type   
--- | :--- 
static function __applyAxis__(block, value) <br> _Rotated Pillar axis property, Values: `Axis`_ | [`Block`](..\..\Block.md)
static final var __axis__ <br> _Rotated Pillar axis property, Values: `Axis`_ | [`BlockEnumProperty`](..\BlockEnumProperty.md)



---


### Public Methods for [`RotatedPillarProperties`](RotatedPillarProperties.md)

##### <a id='applyaxis'></a>public static function __applyAxis__(block, value)

_Rotated Pillar axis property, Values: `Axis` /
    public static final BlockEnumProperty axis = getInstanceFor(HayBale, "axis");

    /** Applies axis to the {@code Rotated Pillar}_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](..\..\Block.md) | the [`Block`](..\..\Block.md) to be modified
value | [`Axis`](Axis.md) | the `Axis` value to apply

Returns | Description
--- | --- 
[`Block`](..\..\Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`RotatedPillarProperties`](RotatedPillarProperties.md)

##### <a id='axis'></a>public static final var __axis__

_Rotated Pillar axis property, Values: `Axis`_

>Returns
>  [`BlockEnumProperty`](..\BlockEnumProperty.md)

---
---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

