## DaylightDetectorProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.DaylightDetectorProperties
>Extends [`BlockProperties`](BlockProperties.md)

---

### Class Overview

Daylight Detector properties helper

Method | Type   
--- | :--- 
static function __applyPower__(block, value) <br> _Applies whether the `CommandBlock` has triggered or not_ | [`Block`](../../Block.md)
static final var __power__ <br> _Daylight Detector power property, Values: 0 - 15_ | [`BlockIntegerProperty`](../BlockIntegerProperty.md)
 |
__Inherited items from [`BlockProperties`](BlockProperties.md)__ |





---


### Public Methods for [`DaylightDetectorProperties`](DaylightDetectorProperties.md)

##### <a id='applypower'></a>public static function __applyPower__(block, value)

_Applies whether the `CommandBlock` has triggered or not_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `int` | the `int` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`DaylightDetectorProperties`](DaylightDetectorProperties.md)

##### <a id='power'></a>public static final var __power__

_Daylight Detector power property, Values: 0 - 15_

>Returns
>  [`BlockIntegerProperty`](../BlockIntegerProperty.md)

---


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

