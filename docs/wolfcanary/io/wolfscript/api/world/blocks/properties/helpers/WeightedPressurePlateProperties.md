## WeightedPressurePlateProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.WeightedPressurePlateProperties
>Extends `BlockProperties`

---

### Class Overview

Weighted Pressure Plate properties helper<br/> Applies to<br/> <ul>Light (Gold) Pressure Plate</ul> <ul>Heavy (Iron) Pressure Plate</ul>

Method | Type   
--- | :--- 
static function __applyPower__(block, value) <br> _Weighted Pressure Plate power property, Values: 0 - 15_ | [`Block`](..\..\Block.md)
static final var __power__ <br> _Weighted Pressure Plate power property, Values: 0 - 15_ | [`BlockIntegerProperty`](..\BlockIntegerProperty.md)



---


### Public Methods for [`WeightedPressurePlateProperties`](WeightedPressurePlateProperties.md)

##### <a id='applypower'></a>public static function __applyPower__(block, value)

_Weighted Pressure Plate power property, Values: 0 - 15 /
    public static final BlockIntegerProperty power = getInstanceFor(LightWeightedPressurePlate, "power");

    /** Applies power to the {@code Weighted Pressure Plate}_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](..\..\Block.md) | the [`Block`](..\..\Block.md) to be modified
value | `int` | the `int` value to apply

Returns | Description
--- | --- 
[`Block`](..\..\Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`WeightedPressurePlateProperties`](WeightedPressurePlateProperties.md)

##### <a id='power'></a>public static final var __power__

_Weighted Pressure Plate power property, Values: 0 - 15_

>Returns
>  [`BlockIntegerProperty`](..\BlockIntegerProperty.md)

---
---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

