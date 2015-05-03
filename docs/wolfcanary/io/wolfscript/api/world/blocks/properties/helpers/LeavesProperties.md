## LeavesProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.LeavesProperties
>Extends `BlockProperties`
>Implements `WoodProperties`

---

### Class Overview

Leaves properties helper

Method | Type   
--- | :--- 
static function __applyVariant__(block, value) <br> _Leaves decayable property, Values: true, false_ | [`Block`](..\..\Block.md)
static final var __variantNew__ <br> _Leaves decayable property, Values: true, false_ | [`BlockEnumProperty`](..\BlockEnumProperty.md)



---


### Public Methods for [`LeavesProperties`](LeavesProperties.md)

##### <a id='applyvariant'></a>public static function __applyVariant__(block, value)

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
block | [`Block`](..\..\Block.md) | the [`Block`](..\..\Block.md) to be modified
value | [`Variant`](Variant.md) | the `boolean` value to apply

Returns | Description
--- | --- 
[`Block`](..\..\Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`LeavesProperties`](LeavesProperties.md)

##### <a id='variantnew'></a>public static final var __variantNew__

_Leaves decayable property, Values: true, false /
    public static final BlockBooleanProperty decayable = getInstanceFor(OakLeaves, "decayable");

    /** Leaves check_decay property, Values: true, false /
    public static final BlockBooleanProperty checkDecay = getInstanceFor(OakLeaves, "check_decay");

    /** (Old) Leaves variant property, Values `Variant`<br/> Applies to:<br/> <ul>Oak</ul> <ul>Spruce</ul> <ul>Birch</ul> <ul>Jungle</ul> /
    public static final BlockEnumProperty variantOld = getInstanceFor(OakLeaves, "variant");

    /** (New) Leaves variant property, Values `Variant`<br/> Applies to:<br/> <ul>Acacia</ul> <ul>Dark Oak</ul>_

>Returns
>  [`BlockEnumProperty`](..\BlockEnumProperty.md)

---
---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

