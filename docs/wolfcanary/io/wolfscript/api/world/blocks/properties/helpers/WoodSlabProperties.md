## WoodSlabProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.WoodSlabProperties
>Extends [`SlabProperties`](SlabProperties.md)
>Implements [`WoodProperties`](WoodProperties.md)

---

### Class Overview

Wood Slab properties helper

Method | Type   
--- | :--- 
static function __applyVariant__(block, value) <br> _Applies variant to the {@code Wood Slab}_ | [`Block`](../../Block.md)
static final var __variant__ <br> _Wood Slab variant property, Values: `Variant`_ | [`BlockEnumProperty`](../BlockEnumProperty.md)
 |
__Inherited items from [`SlabProperties`](SlabProperties.md)__ |
static function __applyHalf__(block, value) <br> _Applies half to the `Slab`_ | [`Block`](../../Block.md)
static function __valueOf__(ordinal) <br> _valueOf method_ | `Half`
static final var __half__ <br> _Slab half property, Values: `Half`_ | [`BlockEnumProperty`](../BlockEnumProperty.md)
 |
__Inherited items from [`BlockProperties`](BlockProperties.md)__ |







---


### Public Methods for [`WoodSlabProperties`](WoodSlabProperties.md)

##### <a id='applyvariant'></a>public static function __applyVariant__(block, value)

_Applies variant to the {@code Wood Slab}_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `Variant` | the `Variant` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`WoodSlabProperties`](WoodSlabProperties.md)

##### <a id='variant'></a>public static final var __variant__

_Wood Slab variant property, Values: `Variant`_

>Returns
>  [`BlockEnumProperty`](../BlockEnumProperty.md)

---

### Public Methods for [`SlabProperties`](SlabProperties.md)

##### <a id='applyhalf'></a>public static function __applyHalf__(block, value)

_Applies half to the `Slab`_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `Half` | the `Half` value to apply

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
`Half` |


---

### Public Fields for [`SlabProperties`](SlabProperties.md)

##### <a id='half'></a>public static final var __half__

_Slab half property, Values: `Half`_

>Returns
>  [`BlockEnumProperty`](../BlockEnumProperty.md)

---


---


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

