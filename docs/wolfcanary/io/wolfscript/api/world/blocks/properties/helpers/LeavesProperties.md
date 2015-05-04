## LeavesProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.LeavesProperties
>Extends [`BlockProperties`](BlockProperties.md)
>Implements [`WoodProperties`](WoodProperties.md)

---

### Class Overview

Leaves properties helper

Method | Type   
--- | :--- 
static function __applyCheckDecay__(block, value) <br> _Applies whether the `Leaves` should check decay or not_ | [`Block`](../../Block.md)
static function __applyDecayable__(block, value) <br> _Leaves decayable property, Values: true, false_ | [`Block`](../../Block.md)
static function __applyVariant__(block, value) <br> _Applies variant to the `Leaves`_ | [`Block`](../../Block.md)
static final var __decayable__ <br> _Leaves decayable property, Values: true, false_ | [`BlockBooleanProperty`](../BlockBooleanProperty.md)
static final var __checkDecay__ <br> _Leaves check_decay property, Values: true, false_ | [`BlockBooleanProperty`](../BlockBooleanProperty.md)
static final var __variantOld__ <br> _(Old) Leaves variant property, Values `Variant`_ | [`BlockEnumProperty`](../BlockEnumProperty.md)
static final var __variantNew__ <br> _(New) Leaves variant property, Values `Variant`_ | [`BlockEnumProperty`](../BlockEnumProperty.md)
 |
__Inherited items from [`BlockProperties`](BlockProperties.md)__ |





---


### Public Methods for [`LeavesProperties`](LeavesProperties.md)

##### <a id='applycheckdecay'></a>public static function __applyCheckDecay__(block, value)

_Applies whether the `Leaves` should check decay or not_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `boolean` | the `boolean` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


##### <a id='applydecayable'></a>public static function __applyDecayable__(block, value)

_Leaves decayable property, Values: true, false /
    public static final BlockBooleanProperty decayable = getInstanceFor(OakLeaves, "decayable");

    /** Leaves check_decay property, Values: true, false /
    public static final BlockBooleanProperty checkDecay = getInstanceFor(OakLeaves, "check_decay");

    /** (Old) Leaves variant property, Values `Variant`<br/> Applies to:<br/> <ul>Oak</ul> <ul>Spruce</ul> <ul>Birch</ul> <ul>Jungle</ul> /
    public static final BlockEnumProperty variantOld = getInstanceFor(OakLeaves, "variant");

    /** (New) Leaves variant property, Values `Variant`<br/> Applies to:<br/> <ul>Acacia</ul> <ul>Dark Oak</ul> /
    public static final BlockEnumProperty variantNew = getInstanceFor(AcaciaLeaves, "variant");

    /** Applies whether the `Leaves` is decayable or not_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `boolean` | the `boolean` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


##### <a id='applyvariant'></a>public static function __applyVariant__(block, value)

_Applies variant to the `Leaves`_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `Variant` | the `Variant` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`LeavesProperties`](LeavesProperties.md)

##### <a id='decayable'></a>public static final var __decayable__

_Leaves decayable property, Values: true, false_

>Returns
>  [`BlockBooleanProperty`](../BlockBooleanProperty.md)

##### <a id='checkdecay'></a>public static final var __checkDecay__

_Leaves check_decay property, Values: true, false_

>Returns
>  [`BlockBooleanProperty`](../BlockBooleanProperty.md)

##### <a id='variantold'></a>public static final var __variantOld__

_(Old) Leaves variant property, Values `Variant`<br/> Applies to:<br/> <ul>Oak</ul> <ul>Spruce</ul> <ul>Birch</ul> <ul>Jungle</ul>_

>Returns
>  [`BlockEnumProperty`](../BlockEnumProperty.md)

##### <a id='variantnew'></a>public static final var __variantNew__

_(New) Leaves variant property, Values `Variant`<br/> Applies to:<br/> <ul>Acacia</ul> <ul>Dark Oak</ul>_

>Returns
>  [`BlockEnumProperty`](../BlockEnumProperty.md)

---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

