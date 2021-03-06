## LeverProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.LeverProperties
>Extends [`BlockProperties`](BlockProperties.md)

---

### Class Overview

Lever properties helper

Method | Type   
--- | :--- 
static function __applyFacing__(block, value) <br> _Applies a `Orientation` facing property to the `Lever`_ | [`Block`](../../Block.md)
static function __applyPowered__(block, value) <br> _Applies whether the `Level` is powered or not (possibly referring to handle position)_ | [`Block`](../../Block.md)
static function __valueOf__(ordinal) <br> _valueOf method_ | `Orientation`
static final var __facing__ <br> _Lever facing property, Values: `Orientation`_ | [`BlockEnumProperty`](../BlockEnumProperty.md)
static final var __powered__ <br> _Lever powered property, Values: true, false_ | [`BlockBooleanProperty`](../BlockBooleanProperty.md)
 |
__Inherited items from [`BlockProperties`](BlockProperties.md)__ |





---


### Public Methods for [`LeverProperties`](LeverProperties.md)

##### <a id='applyfacing'></a>public static function __applyFacing__(block, value)

_Applies a `Orientation` facing property to the `Lever`_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `Orientation` | the `Orientation` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


##### <a id='applypowered'></a>public static function __applyPowered__(block, value)

_Applies whether the `Level` is powered or not (possibly referring to handle position)_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `boolean` | the `boolean` value to apply

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
`Orientation` |


---

### Public Fields for [`LeverProperties`](LeverProperties.md)

##### <a id='facing'></a>public static final var __facing__

_Lever facing property, Values: `Orientation`_

>Returns
>  [`BlockEnumProperty`](../BlockEnumProperty.md)

##### <a id='powered'></a>public static final var __powered__

_Lever powered property, Values: true, false_

>Returns
>  [`BlockBooleanProperty`](../BlockBooleanProperty.md)

---


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

