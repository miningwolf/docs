## PressurePlateProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.PressurePlateProperties
>Extends `BlockProperties`

---

### Class Overview

Pressure Plate properties helper<br/> Applies to<br/> <ul>Wooden Pressure Plate</ul> <ul>Stone Pressure Plate</ul>

Method | Type   
--- | :--- 
static function __applyPowered__(block, value) <br> _Pressure Plate powered property, Values: true, false_ | [`Block`](..\..\Block.md)
static final var __powered__ <br> _Pressure Plate powered property, Values: true, false_ | [`BlockBooleanProperty`](..\BlockBooleanProperty.md)



---


### Public Methods for [`PressurePlateProperties`](PressurePlateProperties.md)

##### <a id='applypowered'></a>public static function __applyPowered__(block, value)

_Pressure Plate powered property, Values: true, false /
    public static final BlockBooleanProperty powered = getInstanceFor(WoodenPressurePlate, "powered");

    /** Applies whether the {@code Pressure Plate} is powered or not_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](..\..\Block.md) | the [`Block`](..\..\Block.md) to be modified
value | `boolean` | the `boolean` value to apply

Returns | Description
--- | --- 
[`Block`](..\..\Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`PressurePlateProperties`](PressurePlateProperties.md)

##### <a id='powered'></a>public static final var __powered__

_Pressure Plate powered property, Values: true, false_

>Returns
>  [`BlockBooleanProperty`](..\BlockBooleanProperty.md)

---
---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

