## LogProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.LogProperties
>Extends [`RotatedPillarProperties`](RotatedPillarProperties.md)
>Implements [`WoodProperties`](WoodProperties.md)

---

### Class Overview

Log properties helper<p/> NOTE: There are potentially 2 different axis properties for Log

Method | Type   
--- | :--- 
static function __applyAxis__(block, value) <br> _Log axis property, Values: `Axis`_ | [`Block`](../../Block.md)
static function __applyVariant__(block, value) <br> _Applies variant to the `Log`_ | [`Block`](../../Block.md)
static final var __axis__ <br> _Log axis property, Values: `Axis`_ | [`BlockEnumProperty`](../BlockEnumProperty.md)
static final var __variantOld__ <br> _(Old) Log variant property, Values: `Variant`_ | [`BlockEnumProperty`](../BlockEnumProperty.md)
static final var __variantNew__ <br> _(New) Log variant property, Values: `Variant`_ | [`BlockEnumProperty`](../BlockEnumProperty.md)
 |
__Inherited items from [`RotatedPillarProperties`](RotatedPillarProperties.md)__ |
static function __applyAxis__(block, value) <br> _Rotated Pillar axis property, Values: `Axis`_ | [`Block`](../../Block.md)
static final var __axis__ <br> _Rotated Pillar axis property, Values: `Axis`_ | [`BlockEnumProperty`](../BlockEnumProperty.md)
 |
__Inherited items from [`BlockProperties`](BlockProperties.md)__ |







---


### Public Methods for [`LogProperties`](LogProperties.md)

##### <a id='applyaxis'></a>public static function __applyAxis__(block, value)

_Log axis property, Values: `Axis` /
    public static final BlockEnumProperty axis = getInstanceFor(OakLog, "axis");

    /** (Old) Log variant property, Values: `Variant`<br/> Applies to:<br/> <ul>Oak</ul> <ul>Spruce</ul> <ul>Birch</ul> <ul>Jungle</ul> /
    public static final BlockEnumProperty variantOld = getInstanceFor(OakLog, "variant");

    /** (New) Log variant property, Values: `Variant`<br/> Applies to:<br/> <ul>Acacia</ul> <ul>Dark Oak</ul> /
    public static final BlockEnumProperty variantNew = getInstanceFor(AcaciaLog, "variant");

    /** Log Axis_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `Axis` | the `Axis` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


##### <a id='applyvariant'></a>public static function __applyVariant__(block, value)

_Applies variant to the `Log`_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `Variant` | the `Variant` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`LogProperties`](LogProperties.md)

##### <a id='axis'></a>public static final var __axis__

_Log axis property, Values: `Axis`_

>Returns
>  [`BlockEnumProperty`](../BlockEnumProperty.md)

##### <a id='variantold'></a>public static final var __variantOld__

_(Old) Log variant property, Values: `Variant`<br/> Applies to:<br/> <ul>Oak</ul> <ul>Spruce</ul> <ul>Birch</ul> <ul>Jungle</ul>_

>Returns
>  [`BlockEnumProperty`](../BlockEnumProperty.md)

##### <a id='variantnew'></a>public static final var __variantNew__

_(New) Log variant property, Values: `Variant`<br/> Applies to:<br/> <ul>Acacia</ul> <ul>Dark Oak</ul>_

>Returns
>  [`BlockEnumProperty`](../BlockEnumProperty.md)

---

### Public Methods for [`RotatedPillarProperties`](RotatedPillarProperties.md)

##### <a id='applyaxis'></a>public static function __applyAxis__(block, value)

_Rotated Pillar axis property, Values: `Axis` /
    public static final BlockEnumProperty axis = getInstanceFor(HayBale, "axis");

    /** Applies axis to the {@code Rotated Pillar}_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `Axis` | the `Axis` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`RotatedPillarProperties`](RotatedPillarProperties.md)

##### <a id='axis'></a>public static final var __axis__

_Rotated Pillar axis property, Values: `Axis`_

>Returns
>  [`BlockEnumProperty`](../BlockEnumProperty.md)

---


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

