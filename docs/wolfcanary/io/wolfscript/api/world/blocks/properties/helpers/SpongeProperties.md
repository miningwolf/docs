## SpongeProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.SpongeProperties
>Extends [`BlockProperties`](BlockProperties.md)

---

### Class Overview

Sponge properties helper

Method | Type   
--- | :--- 
static function __applyWet__(block, value) <br> _Sponge wet property, Values: true, false_ | [`Block`](../../Block.md)
static final var __wet__ <br> _Sponge wet property, Values: true, false_ | [`BlockBooleanProperty`](../BlockBooleanProperty.md)
 |
__Inherited items from [`BlockProperties`](BlockProperties.md)__ |





---


### Public Methods for [`SpongeProperties`](SpongeProperties.md)

##### <a id='applywet'></a>public static function __applyWet__(block, value)

_Sponge wet property, Values: true, false /
    public static final BlockBooleanProperty wet = getInstanceFor(Sponge, "wet");

    /** Applies whether the `Sponge` is wet or not_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `boolean` | the `boolean` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`SpongeProperties`](SpongeProperties.md)

##### <a id='wet'></a>public static final var __wet__

_Sponge wet property, Values: true, false_

>Returns
>  [`BlockBooleanProperty`](../BlockBooleanProperty.md)

---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

