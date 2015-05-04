## LogProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.LogProperties
>Extends [`RotatedPillarProperties`](RotatedPillarProperties.md)
>Implements [`WoodProperties`](WoodProperties.md)

---

### Class Overview

class LogProperties

Method | Type   
--- | :--- 
static function __applyAxis__(block, value) <br> _Applies axis to the `Log`_ | [`Block`](../../Block.md)
static function __applyVariant__(block, value) <br> _Applies variant to the `Log`_ | [`Block`](../../Block.md)
static function __valueOf__(ordinal) <br> _valueOf method_ | `Axis`
static final var __axis__ <br> _Log axis property, Values: `Axis`_ | [`BlockEnumProperty`](../BlockEnumProperty.md)
static final var __variantOld__ <br> _variantOld field_ | [`BlockEnumProperty`](../BlockEnumProperty.md)
static final var __variantNew__ <br> _variantNew field_ | [`BlockEnumProperty`](../BlockEnumProperty.md)
 |
__Inherited items from [`RotatedPillarProperties`](RotatedPillarProperties.md)__ |
static function __applyAxis__(block, value) <br> _Applies axis to the {@code Rotated Pillar}_ | [`Block`](../../Block.md)
static final var __axis__ <br> _Rotated Pillar axis property, Values: `Axis`_ | [`BlockEnumProperty`](../BlockEnumProperty.md)
 |
__Inherited items from [`BlockProperties`](BlockProperties.md)__ |







---


### Public Methods for [`LogProperties`](LogProperties.md)

##### <a id='applyaxis'></a>public static function __applyAxis__(block, value)

_Applies axis to the `Log`_

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


##### <a id='valueof'></a>public static function __valueOf__(ordinal)

_valueOf method_

Argument | Type | Description  
--- | --- | --- 
ordinal | `int` | ordinal argument

Returns | 
--- | 
`Axis` |


---

### Public Fields for [`LogProperties`](LogProperties.md)

##### <a id='axis'></a>public static final var __axis__

_Log axis property, Values: `Axis`_

>Returns
>  [`BlockEnumProperty`](../BlockEnumProperty.md)

##### <a id='variantold'></a>public static final var __variantOld__

_variantOld field_

>Returns
>  [`BlockEnumProperty`](../BlockEnumProperty.md)

##### <a id='variantnew'></a>public static final var __variantNew__

_variantNew field_

>Returns
>  [`BlockEnumProperty`](../BlockEnumProperty.md)

---

### Public Methods for [`RotatedPillarProperties`](RotatedPillarProperties.md)

##### <a id='applyaxis'></a>public static function __applyAxis__(block, value)

_Applies axis to the {@code Rotated Pillar}_

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


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

