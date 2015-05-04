## StoneProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.StoneProperties
>Extends [`BlockProperties`](BlockProperties.md)

---

### Class Overview

Stone properties helper

Method | Type   
--- | :--- 
static function __applyVariant__(block, value) <br> _Stone variant property, Values: `Variant`_ | [`Block`](../../Block.md)
static final var __variant__ <br> _Stone variant property, Values: `Variant`_ | [`BlockEnumProperty`](../BlockEnumProperty.md)
 |
__Inherited items from [`BlockProperties`](BlockProperties.md)__ |





---


### Public Methods for [`StoneProperties`](StoneProperties.md)

##### <a id='applyvariant'></a>public static function __applyVariant__(block, value)

_Stone variant property, Values: `Variant` /
    public static final BlockEnumProperty variant = getInstanceFor(Stone, "variant");

    /** Stone variants_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `Variant` | the `Variant` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`StoneProperties`](StoneProperties.md)

##### <a id='variant'></a>public static final var __variant__

_Stone variant property, Values: `Variant`_

>Returns
>  [`BlockEnumProperty`](../BlockEnumProperty.md)

---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

