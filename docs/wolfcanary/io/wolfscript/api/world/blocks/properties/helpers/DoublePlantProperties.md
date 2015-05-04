## DoublePlantProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.DoublePlantProperties
>Extends [`BlockProperties`](BlockProperties.md)

---

### Class Overview

Double Plant properties helper<br/> Applies to<br/> <ul>SUNFLOWER</ul> <ul>SYRINGA</ul> <ul>GRASS</ul> <ul>FERN</ul> <ul>ROSE</ul> <ul>PAEONIA</ul>

Method | Type   
--- | :--- 
static function __applyHalf__(block, value) <br> _Applies half to the {@code Double Plant}_ | [`Block`](../../Block.md)
static function __applyVariant__(block, value) <br> _Double Plant variant property, Values: `Variant`_ | [`Block`](../../Block.md)
static final var __variant__ <br> _Double Plant variant property, Values: `Variant`_ | [`BlockEnumProperty`](../BlockEnumProperty.md)
static final var __half__ <br> _Double Plant half property, Values: `Half`_ | [`BlockEnumProperty`](../BlockEnumProperty.md)
 |
__Inherited items from [`BlockProperties`](BlockProperties.md)__ |





---


### Public Methods for [`DoublePlantProperties`](DoublePlantProperties.md)

##### <a id='applyhalf'></a>public static function __applyHalf__(block, value)

_Applies half to the {@code Double Plant}_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `Half` | the `Half` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


##### <a id='applyvariant'></a>public static function __applyVariant__(block, value)

_Double Plant variant property, Values: `Variant` /
    public static final BlockEnumProperty variant = getInstanceFor(DoubleGrass, "variant");

    /** Double Plant half property, Values: `Half` /
    public static final BlockEnumProperty half = getInstanceFor(DoubleGrass, "half");

    /** Double Plant halves_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `Variant` | the `Variant` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`DoublePlantProperties`](DoublePlantProperties.md)

##### <a id='variant'></a>public static final var __variant__

_Double Plant variant property, Values: `Variant`_

>Returns
>  [`BlockEnumProperty`](../BlockEnumProperty.md)

##### <a id='half'></a>public static final var __half__

_Double Plant half property, Values: `Half`_

>Returns
>  [`BlockEnumProperty`](../BlockEnumProperty.md)

---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

