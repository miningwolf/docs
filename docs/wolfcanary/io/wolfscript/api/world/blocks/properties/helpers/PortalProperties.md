## PortalProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.PortalProperties
>Extends `BlockProperties`

---

### Class Overview

Portal properties helper

Method | Type   
--- | :--- 
static function __applyAxis__(block, value) <br> _Portal axis property, Values: `Axis` (excluding Y)_ | [`Block`](..\..\Block.md)
static final var __axis__ <br> _Portal axis property, Values: `Axis` (excluding Y)_ | [`BlockEnumProperty`](..\BlockEnumProperty.md)



---


### Public Methods for [`PortalProperties`](PortalProperties.md)

##### <a id='applyaxis'></a>public static function __applyAxis__(block, value)

_Portal axis property, Values: `Axis` (excluding Y) /
    public static final BlockEnumProperty axis = getInstanceFor(Portal, "axis");

    /** Applies axis to the `Portal`_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](..\..\Block.md) | the [`Block`](..\..\Block.md) to be modified
value | [`Axis`](Axis.md) | the `Axis` value to apply

Returns | Description
--- | --- 
[`Block`](..\..\Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`PortalProperties`](PortalProperties.md)

##### <a id='axis'></a>public static final var __axis__

_Portal axis property, Values: `Axis` (excluding Y)_

>Returns
>  [`BlockEnumProperty`](..\BlockEnumProperty.md)

---
---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

