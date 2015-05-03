## PistonProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.PistonProperties
>Extends `BlockProperties`

---

### Class Overview

Piston properties helper<br/> Sticky Pistons and normal Pistons are 2 different Block ID (not a property change)

Method | Type   
--- | :--- 
static function __applyExtended__(block, value) <br> _Piston facing property, Values: [`BlockFace`](..\..\BlockFace.md)_ | [`Block`](..\..\Block.md)
static final var __extended__ <br> _Piston facing property, Values: [`BlockFace`](..\..\BlockFace.md)_ | [`BlockBooleanProperty`](..\BlockBooleanProperty.md)



---


### Public Methods for [`PistonProperties`](PistonProperties.md)

##### <a id='applyextended'></a>public static function __applyExtended__(block, value)

_Piston facing property, Values: [`BlockFace`](..\..\BlockFace.md) /
    public static final BlockDirectionProperty facing = getInstanceFor(Piston, "facing");

    /** Piston extended property, Values: true, false /
    public static final BlockBooleanProperty extended = getInstanceFor(Piston, "extended");

    /** Applies a [`BlockFace`](..\..\BlockFace.md) facing property to the `Piston`_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](..\..\Block.md) | the [`Block`](..\..\Block.md) to be modified
value | `boolean` | the [`BlockFace`](..\..\BlockFace.md) value to apply

Returns | Description
--- | --- 
[`Block`](..\..\Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`PistonProperties`](PistonProperties.md)

##### <a id='extended'></a>public static final var __extended__

_Piston facing property, Values: [`BlockFace`](..\..\BlockFace.md) /
    public static final BlockDirectionProperty facing = getInstanceFor(Piston, "facing");

    /** Piston extended property, Values: true, false_

>Returns
>  [`BlockBooleanProperty`](..\BlockBooleanProperty.md)

---
---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	
